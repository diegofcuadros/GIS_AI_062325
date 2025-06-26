#!/usr/bin/env node
/**
 * Enhanced Knowledge Base Migration Script with PDF Support
 * Converts existing TypeScript knowledge files and PDFs to structured Markdown for RAG
 */

import { promises as fs } from 'fs'
import * as path from 'path'

// Import existing knowledge bases
import { labKnowledgeBase } from '../lib/lab-knowledge-base'
import { ENHANCED_GIS_KNOWLEDGE } from '../lib/enhanced-knowledge-base'
import { WORKSHOP_KNOWLEDGE_BASE } from '../lib/workshop-knowledge'

interface MarkdownFile {
  filename: string
  content: string
  metadata: {
    title: string
    category: string
    difficulty: string
    lab: string
    topics: string[]
    type?: string
    source?: string
    pages?: number
  }
}

interface PDFDocument {
  id: string
  title: string
  content: string
  metadata: {
    source: string
    type: 'pdf'
    pages: number
    category: string
    difficulty: string
    lab: string
    topics: string[]
    processedAt: string
  }
}

/**
 * Extract text from PDF file
 * Note: This requires 'pdf-parse' package to be installed
 */
async function extractTextFromPDF(pdfPath: string): Promise<{ text: string; info: any; numpages: number }> {
  try {
    // Try to import pdf-parse dynamically
    let pdfParse: any = null
    try {
      // Try CommonJS require first
      pdfParse = require('pdf-parse')
    } catch {
      try {
        // Try ES module import
        pdfParse = (await import('pdf-parse')).default
      } catch {
        console.log(`⚠️  pdf-parse not installed. Skipping PDF: ${path.basename(pdfPath)}`)
        console.log('   To process PDFs, run: npm install pdf-parse')
        return { text: '', info: {}, numpages: 0 }
      }
    }

    const dataBuffer = await fs.readFile(pdfPath)
    const data = await pdfParse(dataBuffer)
    
    return {
      text: data.text,
      info: data.info,
      numpages: data.numpages
    }
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    console.error(`❌ Error processing PDF ${pdfPath}:`, errorMessage)
    return { text: '', info: {}, numpages: 0 }
  }
}

/**
 * Extract GIS-related topics from text content
 */
function extractTopicsFromText(text: string): string[] {
  const gisKeywords = [
    'qgis', 'arcgis', 'gis', 'spatial analysis', 'cartography', 'mapping',
    'projection', 'coordinate system', 'crs', 'buffer', 'overlay',
    'vector', 'raster', 'shapefile', 'classification', 'symbology',
    'google earth engine', 'gee', 'remote sensing', 'satellite',
    'machine learning', 'clustering', 'python', 'scripting',
    'public health', 'malaria', 'accessibility', 'health geography'
  ]
  
  const textLower = text.toLowerCase()
  const foundTopics = gisKeywords.filter(keyword => 
    textLower.includes(keyword.toLowerCase())
  )
  
  return [...new Set(foundTopics)].sort()
}

/**
 * Determine document category based on content and filename
 */
function categorizeDocument(filename: string, content: string): string {
  const filenameLower = filename.toLowerCase()
  const contentLower = content.toLowerCase()
  
  if (filenameLower.includes('tutorial') || filenameLower.includes('guide') || filenameLower.includes('manual')) {
    return 'tutorial'
  }
  
  if (filenameLower.includes('lab') || contentLower.includes('step-by-step') || contentLower.includes('exercise')) {
    return 'lab-material'
  }
  
  if (filenameLower.includes('troubleshoot') || filenameLower.includes('error') || filenameLower.includes('fix')) {
    return 'troubleshooting'
  }
  
  if (filenameLower.includes('concept') || filenameLower.includes('theory') || filenameLower.includes('introduction')) {
    return 'concepts'
  }
  
  if (filenameLower.includes('reference') || filenameLower.includes('documentation') || filenameLower.includes('spec')) {
    return 'reference'
  }
  
  return 'concepts' // default category
}

/**
 * Determine difficulty level based on content complexity
 */
function determineDifficulty(content: string): string {
  const contentLower = content.toLowerCase()
  
  const advancedKeywords = ['python', 'scripting', 'api', 'programming', 'algorithm', 'model builder', 'automation']
  const intermediateKeywords = ['geoprocessing', 'analysis', 'overlay', 'network', 'spatial statistics', 'interpolation']
  
  const advancedCount = advancedKeywords.filter(keyword => contentLower.includes(keyword)).length
  const intermediateCount = intermediateKeywords.filter(keyword => contentLower.includes(keyword)).length
  
  if (advancedCount >= 2) return 'advanced'
  if (intermediateCount >= 2 || advancedCount >= 1) return 'intermediate'
  return 'beginner'
}

/**
 * Process a single PDF document
 */
async function processPDFDocument(pdfPath: string): Promise<PDFDocument | null> {
  console.log(`📄 Processing PDF: ${path.basename(pdfPath)}`)
  
  const { text, info, numpages } = await extractTextFromPDF(pdfPath)
  
  if (!text.trim()) {
    console.log(`⚠️  No text extracted from ${path.basename(pdfPath)}`)
    return null
  }
  
  const filename = path.basename(pdfPath, '.pdf')
  const title = info.Title || filename.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  const topics = extractTopicsFromText(text)
  const category = categorizeDocument(filename, text)
  const difficulty = determineDifficulty(text)
  
  // Determine relevant labs based on content
  const labKeywords = {
    'lab1': ['malaria', 'disease mapping', 'health facility', 'qgis basic'],
    'lab2': ['accessibility', 'catchment', 'service area', 'proximity'],
    'lab3': ['google earth engine', 'gee', 'remote sensing', 'satellite'],
    'lab4': ['ai', 'programming', 'python', 'automation', 'scripting'],
    'lab5': ['machine learning', 'clustering', 'classification', 'ml']
  }
  
  const relevantLabs = Object.entries(labKeywords)
    .filter(([_, keywords]) => keywords.some(keyword => text.toLowerCase().includes(keyword)))
    .map(([lab, _]) => lab)
  
  const labAssignment = relevantLabs.length > 0 ? relevantLabs.join(',') : 'general'
  
  return {
    id: filename.toLowerCase().replace(/\s+/g, '-'),
    title,
    content: text,
    metadata: {
      source: pdfPath,
      type: 'pdf',
      pages: numpages,
      category,
      difficulty,
      lab: labAssignment,
      topics,
      processedAt: new Date().toISOString()
    }
  }
}

/**
 * Convert PDF document to markdown format
 */
function createMarkdownFromPDF(pdfDoc: PDFDocument): MarkdownFile {
  const frontmatter = `---
title: "${pdfDoc.title}"
category: "${pdfDoc.metadata.category}"
difficulty: "${pdfDoc.metadata.difficulty}"
lab: "${pdfDoc.metadata.lab}"
topics: [${pdfDoc.metadata.topics.map(t => `"${t}"`).join(', ')}]
source: "${pdfDoc.metadata.source.replace(/\\/g, '/')}"
type: "pdf"
pages: ${pdfDoc.metadata.pages}
processedAt: "${pdfDoc.metadata.processedAt}"
---`

  const content = `${frontmatter}

# ${pdfDoc.title}

${pdfDoc.content}

## Document Information
- **Source**: PDF Document (${pdfDoc.metadata.pages} pages)
- **Category**: ${pdfDoc.metadata.category}
- **Difficulty**: ${pdfDoc.metadata.difficulty}
- **Relevant Labs**: ${pdfDoc.metadata.lab}
- **Topics**: ${pdfDoc.metadata.topics.join(', ')}

## AI Assistant Usage
Ask the chatbot:
- "Explain ${pdfDoc.title.toLowerCase()}"
- "How does this relate to [specific topic]?"
- "Give me examples from this document"
- "What are the key points about [topic] in this document?"

## Quick References
${pdfDoc.metadata.topics.slice(0, 10).map(topic => `- ${topic}`).join('\n')}
`

  return {
    filename: `concepts/${pdfDoc.id}.md`,
    content,
    metadata: {
      title: pdfDoc.title,
      category: pdfDoc.metadata.category,
      difficulty: pdfDoc.metadata.difficulty,
      lab: pdfDoc.metadata.lab,
      topics: pdfDoc.metadata.topics,
      type: 'pdf',
      source: pdfDoc.metadata.source,
      pages: pdfDoc.metadata.pages
    }
  }
}

/**
 * Process all PDF files in the documents directory
 */
async function processPDFFiles(): Promise<MarkdownFile[]> {
  const documentsDir = path.join(process.cwd(), 'documents')
  const markdownFiles: MarkdownFile[] = []
  
  try {
    const files = await fs.readdir(documentsDir)
    const pdfFiles = files.filter(file => file.toLowerCase().endsWith('.pdf'))
    
    if (pdfFiles.length === 0) {
      console.log('📁 No PDF files found in documents/ directory')
      console.log('   Add PDF files to documents/ to include them in the knowledge base')
      return []
    }
    
    console.log(`📄 Found ${pdfFiles.length} PDF files to process`)
    
    for (const pdfFile of pdfFiles) {
      const pdfPath = path.join(documentsDir, pdfFile)
      
      try {
        const pdfDoc = await processPDFDocument(pdfPath)
        
        if (pdfDoc) {
          const markdownFile = createMarkdownFromPDF(pdfDoc)
          markdownFiles.push(markdownFile)
          console.log(`✅ Processed: ${pdfFile} -> ${markdownFile.filename}`)
        }
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error'
        console.error(`❌ Failed to process ${pdfFile}:`, errorMessage)
      }
    }
    
  } catch (error: unknown) {
    const errorObj = error as any
    if (errorObj.code === 'ENOENT') {
      console.log('📁 Documents directory not found. It was already created.')
    } else {
      console.error('Error accessing documents directory:', error)
    }
  }
  
  return markdownFiles
}

/**
 * Enhanced migration function with PDF support
 */
async function migrateKnowledgeBase() {
  console.log('🚀 Starting enhanced knowledge base migration with PDF support...')
  
  const knowledgeDir = path.join(process.cwd(), 'knowledge_base')
  
  // Create knowledge_base directory structure
  await fs.mkdir(knowledgeDir, { recursive: true })
  await fs.mkdir(path.join(knowledgeDir, 'labs'), { recursive: true })
  await fs.mkdir(path.join(knowledgeDir, 'concepts'), { recursive: true })
  await fs.mkdir(path.join(knowledgeDir, 'troubleshooting'), { recursive: true })
  await fs.mkdir(path.join(knowledgeDir, 'fundamentals'), { recursive: true })
  await fs.mkdir(path.join(knowledgeDir, 'reference'), { recursive: true })

  const markdownFiles: MarkdownFile[] = []

  // 1. Process existing TypeScript knowledge bases (existing functionality)
  console.log('📚 Migrating existing knowledge bases...')
  
  // Process lab knowledge base
  for (const [labId, lab] of Object.entries(labKnowledgeBase.labs)) {
    const labOverview: MarkdownFile = {
      filename: `labs/${labId}-overview.md`,
      content: `# ${lab.title}

## Overview
${lab.overview}

## Learning Objectives
${lab.description}

## Lab Details
- **Estimated Time**: ${lab.estimatedTime}
- **Difficulty**: ${lab.difficulty}
- **Tools Required**: ${lab.tools.join(', ')}
- **Datasets**: ${lab.datasets.join(', ')}

## What You'll Learn
This lab covers ${lab.totalSteps} main steps focusing on practical application of GIS techniques for health geography.
`,
      metadata: {
        title: lab.title,
        category: 'lab-overview',
        difficulty: lab.difficulty.toLowerCase(),
        lab: labId,
        topics: lab.tools.map(tool => tool.toLowerCase())
      }
    }
    markdownFiles.push(labOverview)
  }

  // Process enhanced GIS knowledge
  for (const [conceptId, concept] of Object.entries(ENHANCED_GIS_KNOWLEDGE)) {
    const conceptFile: MarkdownFile = {
      filename: `concepts/${conceptId}.md`,
      content: `# ${concept.title}

${concept.content}

## Key Information
- **Category**: ${concept.category}
- **Difficulty**: ${concept.difficulty}
- **Source**: ${concept.source}

## Keywords
${concept.keywords.map(keyword => `- ${keyword}`).join('\n')}
`,
      metadata: {
        title: concept.title,
        category: concept.category,
        difficulty: concept.difficulty,
        lab: concept.labRelevance.join(','),
        topics: concept.keywords
      }
    }
    markdownFiles.push(conceptFile)
  }

  // 2. Process PDF files (new functionality)
  console.log('📄 Processing PDF documents...')
  const pdfMarkdownFiles = await processPDFFiles()
  markdownFiles.push(...pdfMarkdownFiles)

  // 3. Write all markdown files
  console.log('💾 Writing markdown files...')
  let writtenCount = 0
  
  for (const file of markdownFiles) {
    const filePath = path.join(knowledgeDir, file.filename)
    const dir = path.dirname(filePath)
    
    // Ensure directory exists
    await fs.mkdir(dir, { recursive: true })
    
    // Write file
    await fs.writeFile(filePath, file.content, 'utf-8')
    writtenCount++
  }

  // 4. Create summary report
  const categoryCount = markdownFiles.reduce((acc, file) => {
    acc[file.metadata.category] = (acc[file.metadata.category] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const pdfCount = markdownFiles.filter(f => f.metadata.type === 'pdf').length
  const mdCount = markdownFiles.length - pdfCount

  console.log('✅ Enhanced knowledge base migration complete!')
  console.log(`📊 Summary:`)
  console.log(`   - Total files created: ${writtenCount}`)
  console.log(`   - Markdown sources: ${mdCount}`)
  console.log(`   - PDF sources: ${pdfCount}`)
  console.log(`   - Categories:`)
  
  Object.entries(categoryCount).forEach(([category, count]) => {
    console.log(`     - ${category}: ${count} documents`)
  })

  console.log(`\n📁 Knowledge base structure:`)
  console.log(`   knowledge_base/`)
  console.log(`   ├── concepts/      (${categoryCount.concepts || 0} files)`)
  console.log(`   ├── labs/          (${categoryCount['lab-overview'] || 0} files)`)
  console.log(`   ├── troubleshooting/ (${categoryCount.troubleshooting || 0} files)`)
  console.log(`   ├── fundamentals/  (${categoryCount.fundamentals || 0} files)`)
  console.log(`   └── reference/     (${categoryCount.reference || 0} files)`)

  console.log(`\n🎯 Next steps:`)
  console.log(`1. Run: npm run generate-embeddings`)
  console.log(`2. Test the enhanced RAG system`)
  console.log(`3. Add more PDFs to documents/ folder as needed`)
  
  if (pdfCount === 0) {
    console.log(`\n💡 To add PDF support:`)
    console.log(`1. Install: npm install pdf-parse`)
    console.log(`2. Add PDF files to documents/ folder`)
    console.log(`3. Run this script again`)
  }
}

// Run migration if called directly
if (require.main === module) {
  migrateKnowledgeBase().catch(console.error)
}

export { migrateKnowledgeBase, processPDFFiles, processPDFDocument } 