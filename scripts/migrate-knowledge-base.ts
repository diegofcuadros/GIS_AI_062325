#!/usr/bin/env node
/**
 * Knowledge Base Migration Script
 * Converts existing TypeScript knowledge files to structured Markdown for RAG
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
  }
}

async function migrateKnowledgeBase() {
  console.log('🚀 Starting knowledge base migration...')
  
  const knowledgeDir = path.join(process.cwd(), 'knowledge_base')
  
  // Create knowledge_base directory structure
  await fs.mkdir(knowledgeDir, { recursive: true })
  await fs.mkdir(path.join(knowledgeDir, 'labs'), { recursive: true })
  await fs.mkdir(path.join(knowledgeDir, 'concepts'), { recursive: true })
  await fs.mkdir(path.join(knowledgeDir, 'troubleshooting'), { recursive: true })
  await fs.mkdir(path.join(knowledgeDir, 'fundamentals'), { recursive: true })

  const markdownFiles: MarkdownFile[] = []

  // 1. Migrate Lab Knowledge Base
  console.log('📚 Migrating lab-specific knowledge...')
  
  for (const [labId, lab] of Object.entries(labKnowledgeBase.labs)) {
    // Create main lab overview file
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

### Key Skills Developed
- Spatial data management and visualization
- Health facility accessibility analysis
- Professional cartographic output creation
- Evidence-based decision making with GIS

## Prerequisites
- Basic computer skills
- Interest in health geography applications
- No prior GIS experience required

## Getting Help
If you encounter issues during this lab, the AI assistant can help with:
- Step-by-step guidance
- Troubleshooting common errors
- Concept explanations
- Alternative approaches
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

    // Create detailed step files for each section
    for (const [sectionId, section] of Object.entries(lab.sections)) {
      for (const [stepId, step] of Object.entries(section.steps)) {
        const stepFile: MarkdownFile = {
          filename: `labs/${labId}-section-${sectionId}-step-${stepId}.md`,
          content: `# ${step.title}

## Step ${step.stepNumber}: ${step.title}

### Instructions
${step.instructions.map((instruction, index) => `${index + 1}. ${instruction}`).join('\n')}

${step.tips ? `### 💡 Tips
${step.tips.map(tip => `- ${tip}`).join('\n')}` : ''}

${step.troubleshooting ? `### 🔧 Troubleshooting
${step.troubleshooting.map(issue => `- **Issue**: ${issue}`).join('\n')}` : ''}

${step.relatedConcepts ? `### Related Concepts
${step.relatedConcepts.map(concept => `- ${concept}`).join('\n')}` : ''}

### Navigation
${step.previousStep ? `- **Previous**: Step ${step.previousStep}` : ''}
${step.nextStep ? `- **Next**: Step ${step.nextStep}` : ''}

### Need Help?
- Ask the AI assistant: "Explain step ${step.stepNumber} in detail"
- Common question: "I'm stuck on ${step.title.toLowerCase()}"
- Troubleshooting: "Error with ${step.title.toLowerCase()}"
`,
          metadata: {
            title: step.title,
            category: 'lab-step',
            difficulty: lab.difficulty.toLowerCase(),
            lab: labId,
            topics: step.relatedConcepts || []
          }
        }
        markdownFiles.push(stepFile)
      }
    }
  }

  // 2. Migrate Enhanced GIS Knowledge
  console.log('🧠 Migrating conceptual knowledge...')
  
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

## Examples
${concept.examples.map(example => `- ${example}`).join('\n')}

## Related Topics
${concept.relatedTopics.map(topic => `- ${topic}`).join('\n')}

## Relevant Labs
${concept.labRelevance.map(lab => `- ${lab.toUpperCase()}`).join('\n')}

${concept.stepByStep ? `## Step-by-Step Approach
${concept.stepByStep.map((step, index) => `${index + 1}. ${step}`).join('\n')}` : ''}

${concept.troubleshootingTips ? `## Troubleshooting Tips
${concept.troubleshootingTips.map(tip => `- ${tip}`).join('\n')}` : ''}

## Ask the AI Assistant
- "Explain ${concept.title.toLowerCase()} in simple terms"
- "How does ${concept.title.toLowerCase()} apply to health GIS?"
- "Show me examples of ${concept.title.toLowerCase()}"
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

  // 3. Migrate Workshop Knowledge
  console.log('📋 Migrating workshop structure knowledge...')
  
  for (const [itemId, item] of Object.entries(WORKSHOP_KNOWLEDGE_BASE)) {
    const workshopFile: MarkdownFile = {
      filename: `fundamentals/${itemId}.md`,
      content: `# ${item.title}

${item.content}

## Information
- **Category**: ${item.category}
- **Difficulty**: ${item.difficulty}
- **Source**: ${item.source}

## Topics Covered
${item.topics.map(topic => `- ${topic}`).join('\n')}

${item.tutorGuidance ? `## Teaching Guidance
${item.tutorGuidance}` : ''}

${item.socraticQuestions ? `## Discussion Questions
${item.socraticQuestions.map(question => `- ${question}`).join('\n')}` : ''}

## Related Queries
- "Tell me about ${item.title.toLowerCase()}"
- "How does ${item.title.toLowerCase()} work?"
- "Examples of ${item.title.toLowerCase()}"
`,
      metadata: {
        title: item.title,
        category: item.category,
        difficulty: item.difficulty,
        lab: 'general',
        topics: item.topics
      }
    }
    markdownFiles.push(workshopFile)
  }

  // 4. Create troubleshooting files
  console.log('🔧 Creating troubleshooting guides...')
  
  const commonErrors = [
    {
      id: 'crs-mismatch',
      title: 'Coordinate Reference System Issues',
      content: `# Fixing Coordinate Reference System Problems

## The Problem
Layers appear in wrong locations, don't align properly, or distances are calculated incorrectly.

## Why This Happens
Different layers use different coordinate reference systems (CRS), causing spatial misalignment.

## Solutions

### Quick Fix
1. Right-click problematic layer → Properties → Source tab
2. Note the current CRS (e.g., EPSG:4326)
3. Right-click layer → Export → Save Features As
4. Change CRS to EPSG:32636 (Uganda UTM Zone 36N)
5. Load the new file and remove the old one

### Project-Wide Fix
1. Project → Properties → CRS tab
2. Set project CRS to EPSG:32636
3. Enable "on-the-fly" reprojection
4. All layers will display in the same coordinate system

### Prevention
- Always check CRS before loading data
- Use consistent CRS throughout project
- For Uganda: EPSG:32636 for measurements, EPSG:4326 for GPS data

## Common CRS for Uganda
- **EPSG:32636**: UTM Zone 36N - best for measurements and analysis
- **EPSG:4326**: WGS84 - best for GPS coordinates and global context
- **EPSG:21036**: Arc 1960 UTM 36N - historical surveys

## Ask the AI Assistant
- "My layers don't align, help with CRS"
- "What CRS should I use for Uganda?"
- "How to reproject layers in QGIS"
`
    },
    {
      id: 'file-loading-errors',
      title: 'Data Loading Problems',
      content: `# Solving Data Loading Issues

## Common File Loading Problems

### Shapefile Won't Load
**Symptoms**: Error messages, empty layers, or files won't open

**Solutions**:
1. **Check file completeness**: Shapefiles need .shp, .shx, .dbf, and .prj files
2. **Remove spaces**: Rename files to remove spaces and special characters
3. **Check file path**: Ensure path doesn't contain special characters
4. **Verify format**: Confirm file is actually a shapefile

### CSV Coordinates Not Displaying
**Symptoms**: CSV loads but points don't appear on map

**Solutions**:
1. **Check coordinate columns**: Ensure X=Longitude, Y=Latitude
2. **Verify coordinate format**: Use decimal degrees (not degrees/minutes/seconds)
3. **Set correct CRS**: Usually EPSG:4326 for GPS coordinates
4. **Check for missing values**: Empty coordinates cause issues

### "Invalid Geometry" Errors
**Symptoms**: Processing tools fail with geometry errors

**Solutions**:
1. Vector → Geometry Tools → Fix Geometries
2. Vector → Geometry Tools → Check Validity (to identify issues)
3. Use fixed geometry layer for analysis

### File Path Problems
**Symptoms**: "File not found" errors, broken links

**Solutions**:
1. Use simple folder names (no spaces, special characters)
2. Keep project files in organized folder structure
3. Use relative paths when possible
4. Avoid cloud storage folders (OneDrive, Dropbox) for active projects

## Prevention Tips
- Always validate data after importing
- Use consistent file naming conventions
- Keep backups of original data
- Document your data sources and formats

## Ask the AI Assistant
- "My shapefile won't load, what's wrong?"
- "CSV coordinates not showing on map"
- "How to fix invalid geometry errors"
`
    }
  ]

  for (const error of commonErrors) {
    const errorFile: MarkdownFile = {
      filename: `troubleshooting/${error.id}.md`,
      content: error.content,
      metadata: {
        title: error.title,
        category: 'troubleshooting',
        difficulty: 'beginner',
        lab: 'all',
        topics: ['errors', 'troubleshooting', 'common-issues']
      }
    }
    markdownFiles.push(errorFile)
  }

  // 5. Write all files
  console.log('💾 Writing markdown files...')
  
  for (const file of markdownFiles) {
    const filePath = path.join(knowledgeDir, file.filename)
    const dir = path.dirname(filePath)
    
    // Ensure directory exists
    await fs.mkdir(dir, { recursive: true })
    
    // Add metadata header
    const content = `---
title: "${file.metadata.title}"
category: ${file.metadata.category}
difficulty: ${file.metadata.difficulty}
lab: ${file.metadata.lab}
topics: [${file.metadata.topics.map(t => `"${t}"`).join(', ')}]
---

${file.content}`
    
    await fs.writeFile(filePath, content, 'utf-8')
  }

  // 6. Create index file
  const indexContent = `# GIS Workshop Knowledge Base

This knowledge base contains comprehensive information for the GIS & AI Workshop.

## Structure

### Labs (/labs)
Detailed step-by-step instructions for each workshop lab:
- **lab1**: QGIS Fundamentals & Health Facility Mapping
- **lab2**: Google Earth Engine Environmental Analysis  
- **lab3**: Malaria Mapping and Visualization
- **lab4**: AI-Assisted Programming
- **lab5**: Advanced Analytics for Public Health

### Concepts (/concepts)
Fundamental GIS concepts and theory:
- Spatial analysis principles
- Data types and structures
- Coordinate reference systems
- Remote sensing basics

### Troubleshooting (/troubleshooting)
Solutions to common problems:
- File loading issues
- Coordinate system problems
- Software installation help
- Error message explanations

### Fundamentals (/fundamentals)
Workshop structure and navigation:
- Workshop overview and schedule
- Getting started guides
- General help and support

## Usage with RAG System

This knowledge base is designed for use with a Retrieval-Augmented Generation (RAG) system that:

1. **Indexes** all markdown content using vector embeddings
2. **Retrieves** relevant sections based on student questions
3. **Generates** contextual responses using the retrieved information

## File Count: ${markdownFiles.length} documents

Generated on: ${new Date().toISOString()}
`

  await fs.writeFile(path.join(knowledgeDir, 'README.md'), indexContent, 'utf-8')

  console.log(`✅ Migration complete!`)
  console.log(`📄 Created ${markdownFiles.length} markdown files`)
  console.log(`📁 Knowledge base available at: ${knowledgeDir}`)
  console.log(`🚀 Ready for embedding generation!`)
}

// Run migration
migrateKnowledgeBase().catch(console.error) 