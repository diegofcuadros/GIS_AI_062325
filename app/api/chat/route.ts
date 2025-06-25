import { NextRequest, NextResponse } from 'next/server'
import { createGroq } from '@ai-sdk/groq'
import { streamText } from 'ai'
import { GoogleGenerativeAIEmbeddings } from '@langchain/google-genai'
import { promises as fs } from 'fs'
import * as path from 'path'

// Load environment variables
const GROQ_API_KEY = process.env.GROQ_API_KEY
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY

if (!GROQ_API_KEY) {
  throw new Error('GROQ_API_KEY is required')
}

if (!GOOGLE_API_KEY) {
  throw new Error('GOOGLE_API_KEY is required')
}

// Initialize GROQ client
const groq = createGroq({
  apiKey: GROQ_API_KEY,
})

// Initialize Google embeddings
const embeddings = new GoogleGenerativeAIEmbeddings({
  apiKey: GOOGLE_API_KEY,
  model: "text-embedding-004",
})

interface VectorDocument {
  pageContent: string
  metadata: {
    id: string
    title: string
    category: string
    difficulty: string
    lab: string
    topics: string
    source: string
  }
}

interface VectorStore {
  documents: VectorDocument[]
  embeddings: number[][]
  createdAt: string
}

// Cache for vector store
let vectorStoreCache: VectorStore | null = null
let documentsCache: VectorDocument[] | null = null

async function loadVectorStore(): Promise<VectorStore> {
  if (vectorStoreCache) {
    return vectorStoreCache
  }

  try {
    const vectorStorePath = path.join(process.cwd(), 'vector_store', 'vector_store.json')
    const vectorStoreData = await fs.readFile(vectorStorePath, 'utf-8')
    vectorStoreCache = JSON.parse(vectorStoreData)
    return vectorStoreCache!
  } catch (error) {
    console.error('Error loading vector store:', error)
    throw new Error('Vector store not found. Please run embeddings generation first.')
  }
}

async function loadDocuments(): Promise<VectorDocument[]> {
  if (documentsCache) {
    return documentsCache
  }

  try {
    const documentsPath = path.join(process.cwd(), 'vector_store', 'documents.json')
    const documentsData = await fs.readFile(documentsPath, 'utf-8')
    documentsCache = JSON.parse(documentsData)
    return documentsCache!
  } catch (error) {
    console.error('Error loading documents:', error)
    return []
  }
}

// Cosine similarity function
function cosineSimilarity(a: number[], b: number[]): number {
  const dotProduct = a.reduce((sum, val, i) => sum + val * b[i], 0)
  const magnitudeA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0))
  const magnitudeB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0))
  
  if (magnitudeA === 0 || magnitudeB === 0) return 0
  return dotProduct / (magnitudeA * magnitudeB)
}

async function semanticSearch(query: string, topK: number = 5): Promise<VectorDocument[]> {
  try {
    // Load vector store and documents
    const vectorStore = await loadVectorStore()
    const documents = await loadDocuments()

    // Generate embedding for the query
    const queryEmbedding = await embeddings.embedQuery(query)

    // Calculate similarities
    const similarities = vectorStore.embeddings.map((docEmbedding, index) => ({
      document: documents[index] || vectorStore.documents[index],
      similarity: cosineSimilarity(queryEmbedding, Array.isArray(docEmbedding[0]) ? docEmbedding[0] : docEmbedding as number[])
    }))

    // Sort by similarity and return top K
    return similarities
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, topK)
      .filter(item => item.similarity > 0.1) // Minimum relevance threshold
      .map(item => item.document)

  } catch (error) {
    console.error('Error in semantic search:', error)
    return []
  }
}

function buildRAGPrompt(query: string, context: VectorDocument[], userContext?: any): string {
  const contextText = context.map(doc => 
    `**${doc.metadata.title}** (${doc.metadata.category} - ${doc.metadata.difficulty})\n${doc.pageContent}`
  ).join('\n\n---\n\n')

  const userContextInfo = userContext ? 
    `User Context: Currently in ${userContext.currentLab || 'general'}, difficulty level: ${userContext.difficulty || 'beginner'}` : ''

  return `You are a helpful GIS workshop assistant. Answer the user's question using the provided context from the workshop materials.

${userContextInfo}

CONTEXT FROM WORKSHOP MATERIALS:
${contextText}

USER QUESTION: ${query}

INSTRUCTIONS:
- Provide direct, practical answers based on the context
- Include step-by-step instructions when relevant
- Reference specific lab materials when appropriate
- If the context doesn't fully answer the question, say so and provide general guidance
- Keep responses concise but comprehensive
- Use the user's difficulty level to adjust explanation depth

ANSWER:`
}

export async function POST(req: NextRequest) {
  try {
    const { messages, userContext } = await req.json()
    
    if (!messages || messages.length === 0) {
      return NextResponse.json({ error: 'Messages are required' }, { status: 400 })
    }

    // Get the latest user message
    const userMessage = messages[messages.length - 1]
    if (userMessage.role !== 'user') {
      return NextResponse.json({ error: 'Last message must be from user' }, { status: 400 })
    }

    const query = userMessage.content

    // Perform semantic search for relevant context
    console.log(`🔍 Searching for: "${query}"`)
    const relevantDocs = await semanticSearch(query, 5)
    console.log(`📄 Found ${relevantDocs.length} relevant documents`)

    // Build RAG prompt with context
    const ragPrompt = buildRAGPrompt(query, relevantDocs, userContext)

    // Generate streaming response using GROQ
    const result = streamText({
      model: groq('llama-3.1-70b-versatile'),
      messages: [
        {
          role: 'system',
          content: `You are an expert GIS workshop assistant. You help students with QGIS, spatial analysis, Google Earth Engine, AI programming, and machine learning for GIS applications. You provide clear, practical guidance based on workshop materials.`
        },
        {
          role: 'user',
          content: ragPrompt
        }
      ],
      temperature: 0.3,
      maxTokens: 1000,
    })

    // Return streaming response
    return result.toDataStreamResponse()

  } catch (error) {
    console.error('Chat API Error:', error)
    
    // Provide helpful error messages
    if (error instanceof Error) {
      if (error.message.includes('Vector store not found')) {
        return NextResponse.json({ 
          error: 'Knowledge base not initialized. Please run embeddings generation first.' 
        }, { status: 500 })
      }
      
      if (error.message.includes('GROQ_API_KEY')) {
        return NextResponse.json({ 
          error: 'GROQ API key not configured. Please add GROQ_API_KEY to .env.local' 
        }, { status: 500 })
      }

      if (error.message.includes('GOOGLE_API_KEY')) {
        return NextResponse.json({ 
          error: 'Google API key not configured. Please add GOOGLE_API_KEY to .env.local' 
        }, { status: 500 })
      }
    }

    return NextResponse.json({ 
      error: 'Internal server error. Please try again.' 
    }, { status: 500 })
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
} 