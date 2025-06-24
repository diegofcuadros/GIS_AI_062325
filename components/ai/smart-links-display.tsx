'use client'

import React from 'react'
import Link from 'next/link'
import { ExternalLink, BookOpen, FileText, Zap, Quote, ArrowRight } from 'lucide-react'
import { SmartLink, CitationInfo } from '@/lib/smart-link-service'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

interface SmartLinksDisplayProps {
  links: SmartLink[]
  citations?: CitationInfo[]
  relatedContent?: SmartLink[]
  className?: string
}

export function SmartLinksDisplay({ 
  links, 
  citations = [], 
  relatedContent = [],
  className = '' 
}: SmartLinksDisplayProps) {
  if (links.length === 0 && citations.length === 0 && relatedContent.length === 0) {
    return null
  }

  const renderLinkIcon = (type: SmartLink['type']) => {
    switch (type) {
      case 'external':
        return <ExternalLink className="h-4 w-4" />
      case 'citation':
        return <Quote className="h-4 w-4" />
      case 'deep-link':
        return <Zap className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  const renderLink = (link: SmartLink) => {
    const isExternal = link.type === 'external'
    const linkProps = isExternal 
      ? { href: link.url, target: '_blank', rel: 'noopener noreferrer' }
      : { href: link.url }

    return (
      <Link key={link.id} {...linkProps} className="block group">
        <div className="p-3 border rounded-lg hover:bg-muted/50 transition-colors">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-0.5">
              {renderLinkIcon(link.type)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-medium text-sm group-hover:text-primary transition-colors">
                  {link.title}
                </h4>
                <Badge 
                  variant="secondary" 
                  className="text-xs"
                >
                  {link.type === 'deep-link' ? 'Section' : 
                   link.type === 'external' ? 'External' : 
                   link.type === 'citation' ? 'Citation' : 'Page'}
                </Badge>
              </div>
              {link.description && (
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {link.description}
                </p>
              )}
              {link.section && (
                <p className="text-xs text-blue-600 mt-1">
                  #{link.section}
                </p>
              )}
            </div>
            <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
          </div>
        </div>
      </Link>
    )
  }

  const renderCitation = (citation: CitationInfo) => {
    return (
      <div key={citation.id} className="p-3 border rounded-lg bg-blue-50/50 dark:bg-blue-950/20">
        <div className="flex items-start gap-3">
          <Quote className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="outline" className="text-xs">
                [{citation.id}]
              </Badge>
              <Badge variant="secondary" className="text-xs">
                {citation.type}
              </Badge>
            </div>
            <h4 className="font-medium text-sm mb-1">
              {citation.title}
            </h4>
            {citation.authors && (
              <p className="text-xs text-muted-foreground mb-1">
                {citation.authors.join(', ')}
              </p>
            )}
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>{citation.source}</span>
              {citation.year && (
                <>
                  <span>•</span>
                  <span>{citation.year}</span>
                </>
              )}
            </div>
            {citation.doi && (
              <p className="text-xs text-blue-600 mt-1">
                DOI: {citation.doi}
              </p>
            )}
            {citation.url && (
              <Link 
                href={citation.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-blue-600 hover:underline mt-1 inline-block"
              >
                View Source <ExternalLink className="h-3 w-3 inline ml-1" />
              </Link>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <Card className={`w-full ${className}`}>
      <CardHeader className="pb-3">
        <CardTitle className="text-base flex items-center gap-2">
          <BookOpen className="h-4 w-4" />
          Helpful Resources
        </CardTitle>
        <CardDescription className="text-sm">
          Related tutorials, documentation, and academic sources
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Main contextual links */}
        {links.length > 0 && (
          <div>
            <h3 className="text-sm font-medium mb-3 text-muted-foreground">
              Related Content
            </h3>
            <div className="space-y-2">
              {links.map(renderLink)}
            </div>
          </div>
        )}

        {/* Citations */}
        {citations.length > 0 && (
          <>
            {links.length > 0 && <Separator />}
            <div>
              <h3 className="text-sm font-medium mb-3 text-muted-foreground">
                Academic References
              </h3>
              <div className="space-y-2">
                {citations.map(renderCitation)}
              </div>
            </div>
          </>
        )}

        {/* Related content suggestions */}
        {relatedContent.length > 0 && (
          <>
            {(links.length > 0 || citations.length > 0) && <Separator />}
            <div>
              <h3 className="text-sm font-medium mb-3 text-muted-foreground">
                Continue Learning
              </h3>
              <div className="space-y-2">
                {relatedContent.map(renderLink)}
              </div>
            </div>
          </>
        )}

        {/* Quick navigation tips */}
        <div className="mt-4 p-3 bg-muted/30 rounded-lg">
          <p className="text-xs text-muted-foreground">
            💡 <strong>Tip:</strong> Use section links (#{' '}) to jump directly to specific tutorial steps. 
            External links open in new tabs for easy reference.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

// Compact version for sidebar or inline display
interface CompactLinksProps {
  links: SmartLink[]
  maxItems?: number
  className?: string
}

export function CompactLinksDisplay({ 
  links, 
  maxItems = 3,
  className = '' 
}: CompactLinksProps) {
  const displayLinks = links.slice(0, maxItems)

  if (displayLinks.length === 0) {
    return null
  }

  return (
    <div className={`space-y-2 ${className}`}>
      <h4 className="text-sm font-medium text-muted-foreground">
        Quick Links
      </h4>
      <div className="space-y-1">
        {displayLinks.map(link => {
          const isExternal = link.type === 'external'
          const linkProps = isExternal 
            ? { href: link.url, target: '_blank', rel: 'noopener noreferrer' }
            : { href: link.url }

          return (
            <Link key={link.id} {...linkProps} className="block group">
              <div className="flex items-center gap-2 p-2 text-xs rounded hover:bg-muted/50 transition-colors">
                {renderLinkIcon(link.type)}
                <span className="flex-1 group-hover:text-primary transition-colors">
                  {link.title}
                </span>
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          )
        })}
      </div>
      {links.length > maxItems && (
        <p className="text-xs text-muted-foreground">
          +{links.length - maxItems} more resources available
        </p>
      )}
    </div>
  )

  function renderLinkIcon(type: SmartLink['type']) {
    switch (type) {
      case 'external':
        return <ExternalLink className="h-3 w-3" />
      case 'citation':
        return <Quote className="h-3 w-3" />
      case 'deep-link':
        return <Zap className="h-3 w-3" />
      default:
        return <FileText className="h-3 w-3" />
    }
  }
} 