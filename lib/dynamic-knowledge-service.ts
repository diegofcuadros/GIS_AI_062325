/**
 * Dynamic Knowledge Service - Simplified for Build Compatibility
 */

export interface KnowledgeChunk {
  id: string
  title: string
  content: string
  source: string
  category: string
  keywords: string[]
}

export interface SearchResult {
  chunk: KnowledgeChunk
  score: number
  matchType: 'exact' | 'keyword' | 'content'
  matchedTerms: string[]
}

export class DynamicKnowledgeService {
  private knowledgeIndex: Map<string, KnowledgeChunk> = new Map()
  private isInitialized = false

  async initialize(): Promise<void> {
    if (this.isInitialized) return
    console.log('Initializing Dynamic Knowledge Service...')
    
    // Basic knowledge chunks for core GIS concepts
    const basicKnowledge: KnowledgeChunk[] = [
      {
        id: 'qgis-basics',
        title: 'QGIS Fundamentals',
        content: 'QGIS is a free, open-source Geographic Information System. Key features include loading vector and raster data, performing spatial analysis, creating maps and visualizations, and support for many data formats. To load data in QGIS: 1. Go to Layer menu 2. Select Add Layer 3. Choose the appropriate data type (Vector, Raster, CSV) 4. Browse to your data file 5. Configure import settings if needed',
        source: 'GIS Knowledge Base',
        category: 'qgis',
        keywords: ['qgis', 'gis', 'software', 'data', 'load', 'vector', 'raster']
      },
      {
        id: 'crs-basics',
        title: 'Coordinate Reference Systems',
        content: 'A Coordinate Reference System (CRS) defines how coordinates relate to real places on Earth. Key concepts include Geographic CRS using latitude/longitude in degrees, Projected CRS using x,y coordinates in meters, Datum defining Earth shape and size, and Projection as mathematical transformation from 3D to 2D. For Uganda, commonly used CRS are WGS84 (EPSG:4326) for GPS coordinates and UTM Zone 36N (EPSG:32636) for local mapping.',
        source: 'GIS Knowledge Base',
        category: 'gis',
        keywords: ['coordinate', 'crs', 'projection', 'utm', 'wgs84', 'epsg']
      },
      {
        id: 'gee-basics',
        title: 'Google Earth Engine Introduction',
        content: 'Google Earth Engine is a cloud platform for planetary-scale geospatial analysis. Key features include access to petabytes of satellite imagery, cloud-based processing, JavaScript and Python APIs, and free access for research and education. Basic workflow: 1. Load image collections 2. Filter by date, location, cloud cover 3. Apply analysis functions 4. Visualize results 5. Export processed data',
        source: 'GIS Knowledge Base',
        category: 'gee',
        keywords: ['google earth engine', 'satellite', 'remote sensing', 'cloud', 'javascript']
      }
    ]

    basicKnowledge.forEach(chunk => {
      this.knowledgeIndex.set(chunk.id, chunk)
    })

    this.isInitialized = true
    console.log(`Knowledge service initialized with ${this.knowledgeIndex.size} knowledge chunks`)
  }

  async search(query: string, options: { maxResults?: number, labContext?: string } = {}): Promise<SearchResult[]> {
    if (!this.isInitialized) await this.initialize()

    const { maxResults = 10 } = options
    const queryLower = query.toLowerCase()
    const results: SearchResult[] = []

    for (const [id, chunk] of this.knowledgeIndex) {
      let score = 0
      const matchedTerms: string[] = []

      // Check title match
      if (chunk.title.toLowerCase().includes(queryLower)) {
        score += 50
        matchedTerms.push('title')
      }

      // Check keyword matches
      const keywordMatches = chunk.keywords.filter(keyword => 
        queryLower.includes(keyword.toLowerCase())
      )
      if (keywordMatches.length > 0) {
        score += keywordMatches.length * 25
        matchedTerms.push(...keywordMatches)
      }

      // Check content match
      if (chunk.content.toLowerCase().includes(queryLower)) {
        score += 20
        matchedTerms.push('content')
      }

      if (score > 0) {
        results.push({
          chunk,
          score,
          matchType: chunk.title.toLowerCase().includes(queryLower) ? 'exact' :
                    keywordMatches.length > 0 ? 'keyword' : 'content',
          matchedTerms
        })
      }
    }

    return results.sort((a, b) => b.score - a.score).slice(0, maxResults)
  }

  generateResponse(query: string, searchResults: SearchResult[], context?: { currentLab?: string }): string {
    if (searchResults.length === 0) {
      return `I'd like to help with "${query}". I can provide information about QGIS fundamentals and workflows, coordinate reference systems, Google Earth Engine basics, and general GIS concepts. Try asking "How do I load data in QGIS?", "What is a coordinate reference system?", or "What is Google Earth Engine?". What specific aspect would you like me to explain?`
    }

    const primaryResult = searchResults[0]
    let response = `**${primaryResult.chunk.title}**\n\n${primaryResult.chunk.content}`

    if (context?.currentLab) {
      response += `\n\nThis information is relevant to your current lab (${context.currentLab}).`
    }

    if (searchResults.length > 1) {
      response += `\n\n**Related Topics:**`
      searchResults.slice(1, 3).forEach(result => {
        response += `\n- ${result.chunk.title}`
      })
    }

    response += `\n\n**Source:** ${primaryResult.chunk.source}`

    return response
  }
}

export const dynamicKnowledge = new DynamicKnowledgeService() 