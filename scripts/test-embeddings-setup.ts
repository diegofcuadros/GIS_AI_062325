#!/usr/bin/env node
/**
 * Test Embeddings Setup
 * Validates file processing for embeddings generation without API calls
 */

import { promises as fs } from 'fs'
import * as path from 'path'
import matter from 'gray-matter'

interface DocumentChunk {
  id: string
  title: string
  content: string
  metadata: {
    category: string
    difficulty: string
    lab: string
    topics: string[]
    source: string
    chunkIndex: number
  }
}

async function testEmbeddingsSetup() {
  console.log('🔍 Testing embeddings setup...')
  
  const knowledgeBaseDir = path.join(process.cwd(), 'knowledge_base')
  const vectorStoreDir = path.join(process.cwd(), 'vector_store')
  
  // Find all markdown files
  const findMarkdownFiles = async (dir: string): Promise<string[]> => {
    const files: string[] = []
    const entries = await fs.readdir(dir, { withFileTypes: true })
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        files.push(...await findMarkdownFiles(fullPath))
      } else if (entry.name.endsWith('.md') && entry.name !== 'README.md') {
        files.push(fullPath)
      }
    }
    
    return files
  }
  
  const markdownFiles = await findMarkdownFiles(knowledgeBaseDir)
  console.log(`📄 Found ${markdownFiles.length} markdown files for processing`)
  
  // Process files into document chunks
  const documents: DocumentChunk[] = []
  let totalContentLength = 0
  
  for (const filePath of markdownFiles) {
    try {
      const content = await fs.readFile(filePath, 'utf-8')
      const parsed = matter(content)
      
      if (parsed.data.title && parsed.content.trim()) {
        const doc: DocumentChunk = {
          id: path.basename(filePath, '.md'),
          title: parsed.data.title,
          content: parsed.content.trim(),
          metadata: {
            category: parsed.data.category || 'general',
            difficulty: parsed.data.difficulty || 'beginner',
            lab: parsed.data.lab || 'general',
            topics: Array.isArray(parsed.data.topics) ? parsed.data.topics : [],
            source: path.relative(knowledgeBaseDir, filePath),
            chunkIndex: 0
          }
        }
        
        documents.push(doc)
        totalContentLength += doc.content.length
      }
      
    } catch (error) {
      console.log(`⚠️  Error processing ${filePath}: ${error}`)
    }
  }
  
  console.log(`✅ Processed ${documents.length} documents`)
  console.log(`📊 Total content: ${Math.round(totalContentLength / 1024)} KB`)
  
  // Analyze document distribution
  const categories = new Map<string, number>()
  const difficulties = new Map<string, number>()
  const labs = new Map<string, number>()
  
  documents.forEach(doc => {
    categories.set(doc.metadata.category, (categories.get(doc.metadata.category) || 0) + 1)
    difficulties.set(doc.metadata.difficulty, (difficulties.get(doc.metadata.difficulty) || 0) + 1)
    labs.set(doc.metadata.lab, (labs.get(doc.metadata.lab) || 0) + 1)
  })
  
  console.log(`\n📂 Categories:`)
  categories.forEach((count, category) => {
    console.log(`  ${category}: ${count} documents`)
  })
  
  console.log(`\n📈 Difficulties:`)
  difficulties.forEach((count, difficulty) => {
    console.log(`  ${difficulty}: ${count} documents`)
  })
  
  console.log(`\n🧪 Labs:`)
  labs.forEach((count, lab) => {
    console.log(`  ${lab}: ${count} documents`)
  })
  
  // Create vector store directory structure
  try {
    await fs.mkdir(vectorStoreDir, { recursive: true })
    await fs.mkdir(path.join(vectorStoreDir, 'faiss_index'), { recursive: true })
    console.log(`\n📁 Created vector store directory: ${vectorStoreDir}`)
  } catch (error) {
    console.log(`📁 Vector store directory already exists`)
  }
  
  // Save processed documents for embeddings generation
  const documentsPath = path.join(vectorStoreDir, 'documents_prepared.json')
  await fs.writeFile(documentsPath, JSON.stringify(documents, null, 2))
  console.log(`💾 Saved ${documents.length} documents to: ${documentsPath}`)
  
  // Create configuration file
  const config = {
    totalDocuments: documents.length,
    totalContentKB: Math.round(totalContentLength / 1024),
    categories: Object.fromEntries(categories),
    difficulties: Object.fromEntries(difficulties),
    labs: Object.fromEntries(labs),
    embeddingModel: 'text-embedding-004',
    embeddingDimensions: 768,
    createdAt: new Date().toISOString()
  }
  
  const configPath = path.join(vectorStoreDir, 'config.json')
  await fs.writeFile(configPath, JSON.stringify(config, null, 2))
  console.log(`⚙️  Saved configuration to: ${configPath}`)
  
  // Sample document preview
  if (documents.length > 0) {
    const sample = documents[0]
    console.log(`\n📋 Sample document:`)
    console.log(`  ID: ${sample.id}`)
    console.log(`  Title: ${sample.title}`)
    console.log(`  Category: ${sample.metadata.category}`)
    console.log(`  Content preview: ${sample.content.substring(0, 150)}...`)
  }
  
  console.log(`\n🚀 Embeddings setup complete!`)
  console.log(`📁 Ready for embeddings generation with Google API`)
  console.log(`🔑 Next: Set GOOGLE_API_KEY and run embeddings script`)
  
  return {
    documentsReady: documents.length,
    totalContentKB: Math.round(totalContentLength / 1024),
    vectorStoreDir,
    configCreated: true
  }
}

testEmbeddingsSetup().catch(console.error) 