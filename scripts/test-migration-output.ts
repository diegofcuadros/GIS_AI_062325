#!/usr/bin/env node
/**
 * Test Migration Output
 * Validates the knowledge base migration and prepares for embeddings
 */

import { promises as fs } from 'fs'
import * as path from 'path'
import matter from 'gray-matter'

async function testMigrationOutput() {
  console.log('🔍 Testing migration output...')
  
  const knowledgeBaseDir = path.join(process.cwd(), 'knowledge_base')
  
  // Find all markdown files
  const findMarkdownFiles = async (dir: string): Promise<string[]> => {
    const files: string[] = []
    const entries = await fs.readdir(dir, { withFileTypes: true })
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        files.push(...await findMarkdownFiles(fullPath))
      } else if (entry.name.endsWith('.md')) {
        files.push(fullPath)
      }
    }
    
    return files
  }
  
  const markdownFiles = await findMarkdownFiles(knowledgeBaseDir)
  console.log(`📄 Found ${markdownFiles.length} markdown files`)
  
  // Test file parsing
  let validFiles = 0
  let totalContent = 0
  const categories = new Set<string>()
  const difficulties = new Set<string>()
  
  for (const filePath of markdownFiles) {
    try {
      const content = await fs.readFile(filePath, 'utf-8')
      const parsed = matter(content)
      
      if (parsed.data.title && parsed.content) {
        validFiles++
        totalContent += parsed.content.length
        
        if (parsed.data.category) categories.add(parsed.data.category)
        if (parsed.data.difficulty) difficulties.add(parsed.data.difficulty)
      }
      
    } catch (error) {
      console.log(`⚠️  Error parsing ${filePath}: ${error}`)
    }
  }
  
  console.log(`✅ Valid files: ${validFiles}/${markdownFiles.length}`)
  console.log(`📊 Total content: ${Math.round(totalContent / 1024)} KB`)
  console.log(`📂 Categories: ${Array.from(categories).join(', ')}`)
  console.log(`📈 Difficulties: ${Array.from(difficulties).join(', ')}`)
  
  // Sample file analysis
  if (markdownFiles.length > 0) {
    const sampleFile = markdownFiles[0]
    const sampleContent = await fs.readFile(sampleFile, 'utf-8')
    const sampleParsed = matter(sampleContent)
    
    console.log(`\n📋 Sample file: ${path.basename(sampleFile)}`)
    console.log(`Title: ${sampleParsed.data.title}`)
    console.log(`Category: ${sampleParsed.data.category}`)
    console.log(`Content length: ${sampleParsed.content.length} chars`)
    console.log(`First 200 chars: ${sampleParsed.content.substring(0, 200)}...`)
  }
  
  console.log(`\n🚀 Migration validation complete!`)
  console.log(`📁 Knowledge base ready for embeddings generation`)
  
  return {
    totalFiles: markdownFiles.length,
    validFiles,
    totalContent,
    categories: Array.from(categories),
    difficulties: Array.from(difficulties)
  }
}

testMigrationOutput().catch(console.error) 