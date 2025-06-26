'use client'

import React from 'react'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

interface MarkdownContentProps {
  content: string
  className?: string
}

export function MarkdownContent({ content, className = '' }: MarkdownContentProps) {
  // Enhanced parsing for markdown-style links and formatting
  const parseContent = (text: string) => {
    const parts = []
    let lastIndex = 0
    
    // Regex to match markdown links: [text](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
    let match
    
    while ((match = linkRegex.exec(text)) !== null) {
      // Add text before the link
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index))
      }
      
      const linkText = match[1]
      const linkUrl = match[2]
      const isExternal = linkUrl.startsWith('http') || linkUrl.startsWith('www')
      
      // Create the link element
      if (isExternal) {
        parts.push(
          <a
            key={match.index}
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1 font-medium"
          >
            {linkText}
            <ExternalLink className="h-3 w-3" />
          </a>
        )
      } else {
        parts.push(
          <Link
            key={match.index}
            href={linkUrl}
            className="text-blue-600 hover:text-blue-800 underline font-medium"
          >
            {linkText}
          </Link>
        )
      }
      
      lastIndex = match.index + match[0].length
    }
    
    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex))
    }
    
    return parts
  }

  // Enhanced content rendering with better formatting
  const renderContent = () => {
    return content.split('\n').map((line, lineIndex) => {
      const trimmedLine = line.trim()
      
      // Handle empty lines
      if (trimmedLine === '') {
        return <div key={lineIndex} className="mb-2" />
      }
      
      // Handle section headers with **text:**
      if (line.match(/^\*\*[^*]+:\*\*$/)) {
        const headerText = line.replace(/^\*\*|\*\*$/g, '')
        return (
          <div key={lineIndex} className="font-bold text-sm text-gray-800 dark:text-gray-200 mt-4 mb-2">
            {headerText}
          </div>
        )
      }
      
      // Handle general bold text **text**
      if (line.match(/^\*\*[^*]+\*\*$/)) {
        const boldText = line.replace(/^\*\*|\*\*$/g, '')
        return (
          <div key={lineIndex} className="font-semibold mb-2">
            {parseContent(boldText)}
          </div>
        )
      }
      
      // Handle bullet points starting with •
      if (line.startsWith('• ')) {
        const bulletContent = line.slice(2)
        return (
          <div key={lineIndex} className="flex items-start gap-2 mb-1 ml-2">
            <span className="text-blue-600 font-bold mt-0.5">•</span>
            <div className="flex-1">
              {parseContent(bulletContent)}
            </div>
          </div>
        )
      }
      
      // Handle numbered lists or step indicators
      if (line.match(/^\d+\.\s/)) {
        return (
          <div key={lineIndex} className="mb-1 ml-2">
            {parseContent(line)}
          </div>
        )
      }
      
      // Handle regular paragraphs
      const parsedLine = parseContent(line)
      return (
        <div key={lineIndex} className="mb-1 leading-relaxed">
          {parsedLine}
        </div>
      )
    })
  }

  return (
    <div className={`break-words overflow-wrap-anywhere ${className}`}>
      {renderContent()}
    </div>
  )
}

// Simplified version for basic markdown parsing
export function SimpleMarkdownContent({ content, className = '' }: MarkdownContentProps) {
  // Simple regex-based link replacement
  const renderWithLinks = (text: string) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
    const parts = []
    let lastIndex = 0
    let match

    while ((match = linkRegex.exec(text)) !== null) {
      // Add text before link
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index))
      }

      const linkText = match[1]
      const linkUrl = match[2]
      const isExternal = linkUrl.startsWith('http') || linkUrl.startsWith('www')

      // Add the link
      if (isExternal) {
        parts.push(
          <a
            key={match.index}
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1"
          >
            {linkText}
            <ExternalLink className="h-3 w-3" />
          </a>
        )
      } else {
        parts.push(
          <Link
            key={match.index}
            href={linkUrl}
            className="text-blue-600 hover:text-blue-800 underline"
          >
            {linkText}
          </Link>
        )
      }

      lastIndex = match.index + match[0].length
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex))
    }

    return parts.length > 1 ? parts : text
  }

  return (
    <div className={`break-words overflow-wrap-anywhere whitespace-pre-wrap ${className}`}>
      {renderWithLinks(content)}
    </div>
  )
} 