/**
 * Smart Link Generation Service
 * Provides dynamic link creation, deep linking, and citation integration
 */

export interface SmartLink {
  id: string
  title: string
  url: string
  type: 'internal' | 'external' | 'citation' | 'deep-link'
  description?: string
  relevanceScore: number
  context: string[]
  section?: string
  citation?: CitationInfo
}

export interface CitationInfo {
  id: string
  authors?: string[]
  title: string
  source: string
  year?: number
  url?: string
  type: 'journal' | 'book' | 'website' | 'report' | 'documentation'
  doi?: string
}

export interface LinkContext {
  currentLab?: string
  currentSection?: string
  userQuery?: string
  relatedConcepts?: string[]
  difficulty?: 'beginner' | 'intermediate' | 'advanced'
}

export class SmartLinkService {
  private linkDatabase: Map<string, SmartLink> = new Map()
  private citationDatabase: Map<string, CitationInfo> = new Map()

  constructor() {
    this.initializeLinkDatabase()
    this.initializeCitationDatabase()
  }

  generateContextualLinks(query: string, context: LinkContext): SmartLink[] {
    const allLinks = Array.from(this.linkDatabase.values())
    const scoredLinks = allLinks.map(link => ({
      ...link,
      relevanceScore: this.calculateRelevanceScore(link, query, context)
    }))

    return scoredLinks
      .filter(link => link.relevanceScore > 0.3)
      .sort((a, b) => b.relevanceScore - a.relevanceScore)
      .slice(0, 8)
  }

  createDeepLink(lab: string, section: string, subsection?: string): string {
    const baseUrl = `/labs/${lab}`
    const sectionAnchor = this.createAnchor(section)
    const subsectionAnchor = subsection ? `-${this.createAnchor(subsection)}` : ''
    
    return `${baseUrl}#${sectionAnchor}${subsectionAnchor}`
  }

  resolveCitation(citationRef: string): CitationInfo | null {
    const match = citationRef.match(/\[?\^(\d+)\]?/)
    if (!match) return null

    const citationId = match[1]
    return this.citationDatabase.get(citationId) || null
  }

  getRelatedContentSuggestions(currentLab: string): SmartLink[] {
    const related = this.getLabProgression(currentLab)
    return related.map(labId => this.createLabLink(labId))
  }

  private initializeLinkDatabase(): void {
    const links: SmartLink[] = [
      {
        id: 'qgis-installation',
        title: 'QGIS Installation Guide',
        url: '/labs/lab1#qgis-installation',
        type: 'deep-link',
        description: 'Step-by-step guide to installing QGIS for health GIS work',
        relevanceScore: 0,
        context: ['qgis', 'installation', 'setup', 'software'],
        section: 'qgis-installation'
      },
      {
        id: 'coordinate-systems',
        title: 'Understanding Coordinate Reference Systems',
        url: '/labs/lab1#coordinate-systems',
        type: 'deep-link', 
        description: 'Complete guide to CRS for Uganda and East Africa',
        relevanceScore: 0,
        context: ['crs', 'coordinate', 'projection', 'utm', 'wgs84', 'epsg'],
        section: 'coordinate-systems'
      },
      {
        id: 'buffer-analysis',
        title: 'Healthcare Accessibility Buffer Analysis',
        url: '/labs/lab2#buffer-analysis',
        type: 'deep-link',
        description: 'Creating service catchment areas for health facilities',
        relevanceScore: 0,
        context: ['buffer', 'accessibility', 'catchment', 'service area', 'distance'],
        section: 'buffer-analysis'
      },
      {
        id: 'gee-basics',
        title: 'Google Earth Engine Fundamentals',
        url: '/labs/lab3#gee-fundamentals',
        type: 'deep-link',
        description: 'Introduction to cloud-based satellite data analysis',
        relevanceScore: 0,
        context: ['google earth engine', 'gee', 'satellite', 'remote sensing', 'cloud'],
        section: 'gee-fundamentals'
      }
    ]

    links.forEach(link => this.linkDatabase.set(link.id, link))
  }

  private initializeCitationDatabase(): void {
    const citations: CitationInfo[] = [
      {
        id: '1',
        authors: ['Acharya, L.B.', 'Cleland, J.'],
        title: 'Maternal and child health services in rural Nepal: does access or quality matter more?',
        source: 'Health Policy and Planning',
        year: 2000,
        type: 'journal',
        doi: '10.1093/heapol/15.2.223'
      },
      {
        id: '18',
        authors: ['McGrail, M.R.', 'Humphreys, J.S.'],
        title: 'Measuring spatial accessibility to primary care in rural areas',
        source: 'BMC Health Services Research',
        year: 2009,
        type: 'journal',
        doi: '10.1186/1472-6963-9-193'
      }
    ]

    citations.forEach(citation => this.citationDatabase.set(citation.id, citation))
  }

  private calculateRelevanceScore(link: SmartLink, query: string, context: LinkContext): number {
    let score = 0
    const queryTerms = query.toLowerCase().split(/\s+/)

    if (link.title.toLowerCase().includes(query.toLowerCase())) {
      score += 50
    }

    queryTerms.forEach(term => {
      if (link.context.some(ctx => ctx.toLowerCase().includes(term))) {
        score += 25
      }
    })

    if (context.currentLab && link.url.includes(context.currentLab)) {
      score += 30
    }

    return Math.min(score, 100) / 100
  }

  private createAnchor(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-')
      .trim()
  }

  private getLabProgression(currentLab: string): string[] {
    const progressions: Record<string, string[]> = {
      'lab1': ['lab2', 'lab3'],
      'lab2': ['lab3', 'lab5'],
      'lab3': ['lab4', 'lab5'],
      'lab4': ['lab5'],
      'lab5': []
    }

    return progressions[currentLab] || []
  }

  private createLabLink(labId: string): SmartLink {
    const labTitles: Record<string, string> = {
      'lab1': 'QGIS Fundamentals for Health GIS',
      'lab2': 'Health Facility Access Analysis',
      'lab3': 'Environmental Risk Mapping with GEE',
      'lab4': 'AI-Assisted GEE Programming', 
      'lab5': 'Malaria Risk Clustering Analysis'
    }

    return {
      id: `${labId}-link`,
      title: labTitles[labId] || labId,
      url: `/labs/${labId}`,
      type: 'internal',
      description: `Continue to ${labTitles[labId]}`,
      relevanceScore: 0.8,
      context: [labId],
      section: 'overview'
    }
  }

  formatCitation(citation: CitationInfo): string {
    const authors = citation.authors ? citation.authors.join(', ') : ''
    const year = citation.year ? ` (${citation.year})` : ''
    const title = citation.title
    const source = citation.source ? `. ${citation.source}` : ''
    const doi = citation.doi ? `. DOI: ${citation.doi}` : ''
    
    return `${authors}${year}. ${title}${source}${doi}`
  }

  extractCitationsFromText(text: string): CitationInfo[] {
    const citationRefs = text.match(/\[?\^(\d+)\]?/g) || []
    const citations: CitationInfo[] = []

    citationRefs.forEach(ref => {
      const citation = this.resolveCitation(ref)
      if (citation) {
        citations.push(citation)
      }
    })

    return citations
  }
}

export const smartLinkService = new SmartLinkService() 