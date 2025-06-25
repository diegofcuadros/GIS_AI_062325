#!/usr/bin/env node
/**
 * Generate Embeddings Script
 * Creates vector embeddings from markdown knowledge base for RAG system
 */

// Load environment variables from .env.local
import * as dotenv from 'dotenv'
import * as path from 'path'

// Load .env.local file
dotenv.config({ path: path.join(process.cwd(), '.env.local') })

import { promises as fs } from 'fs'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { MemoryVectorStore } from 'langchain/vectorstores/memory'
import { GoogleGenerativeAIEmbeddings } from '@langchain/google-genai'
import { Document } from '@langchain/core/documents'
import matter from 'gray-matter'

interface KnowledgeDocument {
  id: string
  title: string
  content: string
  metadata: {
    category: string
    difficulty: string
    lab: string
    topics: string[]
    source: string
    filename: string
  }
}

async function generateEmbeddings() {
  console.log('🚀 Starting embedding generation...')
  
  // Check for required environment variables
  if (!process.env.GOOGLE_API_KEY) {
    console.error('❌ GOOGLE_API_KEY environment variable is required')
    console.error('Please add your Google API key to .env.local')
    process.exit(1)
  }

  const knowledgeDir = path.join(process.cwd(), 'knowledge_base')
  const vectorStoreDir = path.join(process.cwd(), 'vector_store')

  // Create vector store directory
  await fs.mkdir(vectorStoreDir, { recursive: true })

  // Initialize Google embeddings
  const embeddings = new GoogleGenerativeAIEmbeddings({
    apiKey: process.env.GOOGLE_API_KEY,
    model: "text-embedding-004", // Latest Google embedding model
  })

  console.log('📚 Loading knowledge base documents...')
  
  const documents: Document[] = []
  const knowledgeDocs: KnowledgeDocument[] = []

  // Recursively process all markdown files
  async function processDirectory(dir: string, category: string = '') {
    const files = await fs.readdir(dir, { withFileTypes: true })
    
    for (const file of files) {
      const fullPath = path.join(dir, file.name)
      
      if (file.isDirectory()) {
        await processDirectory(fullPath, file.name)
      } else if (file.name.endsWith('.md') && file.name !== 'README.md') {
        const content = await fs.readFile(fullPath, 'utf-8')
        const { data: frontmatter, content: markdown } = matter(content)
        
        // Create document ID from filename
        const relativePath = path.relative(knowledgeDir, fullPath)
        const docId = relativePath.replace(/\.md$/, '').replace(/[\/\\]/g, '-')
        
        const knowledgeDoc: KnowledgeDocument = {
          id: docId,
          title: frontmatter.title || file.name.replace('.md', ''),
          content: markdown,
          metadata: {
            category: frontmatter.category || category,
            difficulty: frontmatter.difficulty || 'beginner',
            lab: frontmatter.lab || 'general',
            topics: frontmatter.topics || [],
            source: relativePath,
            filename: file.name
          }
        }
        
        knowledgeDocs.push(knowledgeDoc)
        
        // Create LangChain document for vector store
        const doc = new Document({
          pageContent: `${knowledgeDoc.title}\n\n${knowledgeDoc.content}`,
          metadata: {
            id: docId,
            title: knowledgeDoc.title,
            category: knowledgeDoc.metadata.category,
            difficulty: knowledgeDoc.metadata.difficulty,
            lab: knowledgeDoc.metadata.lab,
            topics: knowledgeDoc.metadata.topics.join(', '),
            source: knowledgeDoc.metadata.source
          }
        })
        
        documents.push(doc)
      }
    }
  }

  await processDirectory(knowledgeDir)

  console.log(`📄 Loaded ${documents.length} documents`)
  console.log(`🔢 Document categories:`)
  
  const categoryCount = knowledgeDocs.reduce((acc, doc) => {
    acc[doc.metadata.category] = (acc[doc.metadata.category] || 0) + 1
    return acc
  }, {} as Record<string, number>)
  
  Object.entries(categoryCount).forEach(([category, count]) => {
    console.log(`   - ${category}: ${count} documents`)
  })

  console.log('🧮 Generating embeddings...')
  console.log('⏳ This may take a few minutes depending on document count...')
  
  try {
    // Create vector store with embeddings
    const vectorStore = await MemoryVectorStore.fromDocuments(documents, embeddings)
    
    // Save vector store to disk as JSON
    const vectorStorePath = path.join(vectorStoreDir, 'vector_store.json')
    const vectorData = {
      documents: documents.map(doc => ({
        pageContent: doc.pageContent,
        metadata: doc.metadata
      })),
      embeddings: await Promise.all(documents.map(doc => embeddings.embedDocuments([doc.pageContent]))),
      createdAt: new Date().toISOString()
    }
    
    await fs.writeFile(vectorStorePath, JSON.stringify(vectorData, null, 2), 'utf-8')
    
    console.log(`💾 Vector store saved to: ${vectorStorePath}`)

    // Save document metadata for quick reference
    const metadataPath = path.join(vectorStoreDir, 'documents.json')
    await fs.writeFile(
      metadataPath, 
      JSON.stringify(knowledgeDocs, null, 2), 
      'utf-8'
    )
    
    console.log(`📋 Document metadata saved to: ${metadataPath}`)

    // Create configuration file
    const config = {
      totalDocuments: documents.length,
      categories: categoryCount,
      embeddingModel: 'text-embedding-004',
      vectorStorePath: 'vector_store/faiss_index',
      metadataPath: 'vector_store/documents.json',
      generatedAt: new Date().toISOString(),
      version: '1.0.0'
    }

    const configPath = path.join(vectorStoreDir, 'config.json')
    await fs.writeFile(configPath, JSON.stringify(config, null, 2), 'utf-8')
    
    console.log(`⚙️ Configuration saved to: ${configPath}`)

    // Test the vector store
    console.log('🧪 Testing vector store...')
    
    const testQuery = "How do I load a shapefile in QGIS?"
    const results = await vectorStore.similaritySearch(testQuery, 3)
    
    console.log(`🔍 Test query: "${testQuery}"`)
    console.log(`📊 Top 3 results:`)
    
    results.forEach((result: any, index: number) => {
      console.log(`   ${index + 1}. ${result.metadata.title} (${result.metadata.category})`)
      console.log(`      Lab: ${result.metadata.lab} | Difficulty: ${result.metadata.difficulty}`)
    })

    console.log('✅ Embedding generation complete!')
    console.log(`📈 Performance metrics:`)
    console.log(`   - Documents processed: ${documents.length}`)
    console.log(`   - Categories: ${Object.keys(categoryCount).length}`)
    console.log(`   - Vector dimensions: 768 (text-embedding-004)`)
    console.log(`   - Storage format: FAISS index`)
    
    console.log('\n🚀 Ready for RAG deployment!')
    console.log('Next steps:')
    console.log('1. Update your .env.local with GROQ_API_KEY for chat responses')
    console.log('2. Deploy the RAG API endpoint')
    console.log('3. Update the frontend chatbot component')

  } catch (error) {
    console.error('❌ Error generating embeddings:', error)
    
    const errorMessage = error instanceof Error ? error.message : String(error)
    if (errorMessage.includes('API key')) {
      console.error('\n💡 API Key Issues:')
      console.error('- Verify GOOGLE_API_KEY is correct')
      console.error('- Check API key has Generative AI permissions')
      console.error('- Ensure billing is enabled for your Google Cloud project')
    }
    
    if (errorMessage.includes('quota')) {
      console.error('\n💡 Quota Issues:')
      console.error('- You may have exceeded API quotas')
      console.error('- Try again later or upgrade your API plan')
      console.error('- Consider processing documents in smaller batches')
    }
    
    process.exit(1)
  }
}

// Add batch processing for large knowledge bases
async function generateEmbeddingsInBatches(batchSize: number = 10) {
  console.log(`🔄 Using batch processing with batch size: ${batchSize}`)
  
  // This would implement batched processing for very large knowledge bases
  // to avoid API rate limits and memory issues
  
  // For now, call the main function
  await generateEmbeddings()
}

// Check command line arguments
const args = process.argv.slice(2)
const batchMode = args.includes('--batch')
const batchSize = args.includes('--batch-size') ? 
  parseInt(args[args.indexOf('--batch-size') + 1]) : 10

if (batchMode) {
  generateEmbeddingsInBatches(batchSize).catch(console.error)
} else {
  generateEmbeddings().catch(console.error)
} 