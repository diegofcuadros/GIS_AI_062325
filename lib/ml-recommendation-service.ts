/**
 * Machine Learning-Powered Recommendation Service
 * Implements content similarity matching and predictive assistance
 */

export interface ContentSimilarityMatch {
  id: string
  title: string
  content: string
  similarity: number
  type: 'concept' | 'tutorial' | 'troubleshooting' | 'example'
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  relevantLabs: string[]
}

export interface PredictiveAssistance {
  nextConcepts: string[]
  likelyQuestions: string[]
  anticipatedProblems: string[]
  recommendedResources: ContentSimilarityMatch[]
  confidence: number
}

export interface UserInteractionPattern {
  queryTypes: string[]
  conceptsExplored: string[]
  timeSpentOnTopics: Record<string, number>
  strugglingAreas: string[]
  successfulCompletions: string[]
  currentContext: {
    lab: string
    section: string
    timeInSession: number
  }
}

export interface MLTrainingData {
  query: string
  userContext: any
  selectedResult: string
  timeToSelection: number
  followUpQueries: string[]
  wasHelpful: boolean
}

export class MLRecommendationService {
  private contentDatabase: Map<string, ContentSimilarityMatch> = new Map()
  private userPatterns: Map<string, UserInteractionPattern> = new Map()
  private trainingData: MLTrainingData[] = []
  private conceptVectors: Map<string, number[]> = new Map()

  constructor() {
    this.initializeContentDatabase()
    this.initializeConceptVectors()
  }

  /**
   * Find content similar to user query using semantic similarity
   */
  findSimilarContent(query: string, userContext?: any): ContentSimilarityMatch[] {
    const queryVector = this.generateQueryVector(query)
    const allContent = Array.from(this.contentDatabase.values())
    
    // Calculate similarity scores
    const scoredContent = allContent.map(content => ({
      ...content,
      similarity: this.calculateCosineSimilarity(queryVector, this.getContentVector(content))
    }))

    // Apply contextual boosting
    const contextBoostedContent = this.applyContextualBoosting(scoredContent, userContext)

    // Sort by similarity and return top matches
    return contextBoostedContent
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, 8)
      .filter(item => item.similarity > 0.3)
  }

  /**
   * Predict what the user will need help with next
   */
  generatePredictiveAssistance(userContext: any, currentQuery?: string): PredictiveAssistance {
    const userPattern = this.analyzeUserPattern(userContext)
    const currentLab = userContext.currentLab || 'general'
    
    // Predict next concepts based on learning progression
    const nextConcepts = this.predictNextConcepts(userPattern, currentLab)
    
    // Anticipate likely questions
    const likelyQuestions = this.generateLikelyQuestions(userPattern, nextConcepts)
    
    // Predict potential problems
    const anticipatedProblems = this.predictProblems(userPattern, currentLab)
    
    // Generate recommended resources
    const recommendedResources = this.generateRecommendedResources(nextConcepts, userPattern)
    
    // Calculate confidence based on pattern strength
    const confidence = this.calculatePredictionConfidence(userPattern)

    return {
      nextConcepts,
      likelyQuestions,
      anticipatedProblems,
      recommendedResources,
      confidence
    }
  }

  /**
   * Track user interaction for ML learning
   */
  trackInteraction(userId: string, interaction: Partial<MLTrainingData>): void {
    // Store interaction data for future ML model training
    this.trainingData.push({
      query: interaction.query || '',
      userContext: interaction.userContext || {},
      selectedResult: interaction.selectedResult || '',
      timeToSelection: interaction.timeToSelection || 0,
      followUpQueries: interaction.followUpQueries || [],
      wasHelpful: interaction.wasHelpful !== false
    })

    // Update user patterns
    this.updateUserPattern(userId, interaction)

    // Trigger model retraining if enough new data
    if (this.trainingData.length % 100 === 0) {
      this.retainModels()
    }
  }

  /**
   * Get content recommendations based on user behavior patterns
   */
  getPersonalizedRecommendations(userId: string, currentContext: any): ContentSimilarityMatch[] {
    const userPattern = this.userPatterns.get(userId)
    if (!userPattern) {
      return this.getDefaultRecommendations(currentContext)
    }

    // Find content similar to user's interests
    const interestBasedContent = this.findContentByInterests(userPattern)
    
    // Find content that fills knowledge gaps
    const gapFillingContent = this.findGapFillingContent(userPattern)
    
    // Combine and rank recommendations
    const combinedRecommendations = [
      ...interestBasedContent.map(c => ({ ...c, similarity: c.similarity * 1.2 })), // Boost interest-based
      ...gapFillingContent.map(c => ({ ...c, similarity: c.similarity * 1.1 })) // Slight boost for gap-filling
    ]

    return combinedRecommendations
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, 6)
  }

  /**
   * Initialize content database with GIS/Health content
   */
  private initializeContentDatabase(): void {
    const content: ContentSimilarityMatch[] = [
      // QGIS Fundamentals
      {
        id: 'qgis-basics',
        title: 'QGIS Interface and Basic Operations',
        content: 'QGIS desktop GIS software interface navigation toolbars panels layers map canvas coordinate reference systems',
        similarity: 0,
        type: 'concept',
        difficulty: 'beginner',
        relevantLabs: ['lab1']
      },
      {
        id: 'data-import',
        title: 'Importing Health Data into QGIS',
        content: 'CSV shapefile import delimited text layer health facility data coordinate systems projection',
        similarity: 0,
        type: 'tutorial',
        difficulty: 'beginner',
        relevantLabs: ['lab1', 'lab2']
      },
      
      // Spatial Analysis
      {
        id: 'buffer-analysis',
        title: 'Buffer Analysis for Healthcare Accessibility',
        content: 'buffer zones distance analysis service areas accessibility catchment health facility coverage',
        similarity: 0,
        type: 'concept',
        difficulty: 'intermediate',
        relevantLabs: ['lab2']
      },
      {
        id: 'spatial-queries',
        title: 'Spatial Query Analysis',
        content: 'spatial queries selection intersect contains underserved populations analysis location',
        similarity: 0,
        type: 'tutorial',
        difficulty: 'intermediate',
        relevantLabs: ['lab2']
      },

      // Google Earth Engine
      {
        id: 'gee-fundamentals',
        title: 'Google Earth Engine Cloud Computing',
        content: 'google earth engine cloud platform satellite data remote sensing javascript API authentication',
        similarity: 0,
        type: 'concept',
        difficulty: 'intermediate',
        relevantLabs: ['lab3', 'lab4']
      },
      {
        id: 'ndvi-calculation',
        title: 'NDVI and Vegetation Indices',
        content: 'NDVI vegetation index satellite imagery landsat sentinel environmental health vector malaria',
        similarity: 0,
        type: 'tutorial',
        difficulty: 'intermediate',
        relevantLabs: ['lab3']
      },

      // Machine Learning & Clustering
      {
        id: 'clustering-concepts',
        title: 'Machine Learning for Health Risk Assessment',
        content: 'clustering k-means machine learning risk assessment malaria environmental factors',
        similarity: 0,
        type: 'concept',
        difficulty: 'advanced',
        relevantLabs: ['lab5']
      },

      // Troubleshooting
      {
        id: 'coordinate-issues',
        title: 'Coordinate Reference System Problems',
        content: 'CRS coordinate system projection errors GPS coordinates wrong location troubleshooting',
        similarity: 0,
        type: 'troubleshooting',
        difficulty: 'beginner',
        relevantLabs: ['lab1', 'lab2', 'lab3']
      },
      {
        id: 'gee-authentication',
        title: 'Google Earth Engine Authentication Issues',
        content: 'earth engine authentication login token access denied permission error troubleshooting',
        similarity: 0,
        type: 'troubleshooting',
        difficulty: 'intermediate',
        relevantLabs: ['lab3', 'lab4']
      },

      // Advanced Topics
      {
        id: 'ai-coding-assistance',
        title: 'AI-Assisted Programming for GIS',
        content: 'artificial intelligence programming assistance chatgpt coding javascript python automation',
        similarity: 0,
        type: 'concept',
        difficulty: 'advanced',
        relevantLabs: ['lab4']
      }
    ]

    content.forEach(item => this.contentDatabase.set(item.id, item))
  }

  /**
   * Initialize concept vectors for similarity calculations
   */
  private initializeConceptVectors(): void {
    // Simple keyword-based vectors (in production, use embeddings)
    const keywords = [
      'qgis', 'gis', 'spatial', 'analysis', 'buffer', 'map', 'data', 'import', 'csv',
      'coordinate', 'projection', 'health', 'facility', 'accessibility', 'malaria',
      'google', 'earth', 'engine', 'satellite', 'remote', 'sensing', 'ndvi', 'vegetation',
      'clustering', 'machine', 'learning', 'risk', 'assessment', 'javascript', 'python',
      'authentication', 'troubleshooting', 'error', 'problem', 'tutorial', 'concept'
    ]

    // Create vectors for each content item
    this.contentDatabase.forEach((content, id) => {
      const vector = keywords.map(keyword => {
        const contentText = (content.title + ' ' + content.content).toLowerCase()
        return contentText.includes(keyword) ? 1 : 0
      })
      this.conceptVectors.set(id, vector)
    })
  }

  /**
   * Generate query vector from user input
   */
  private generateQueryVector(query: string): number[] {
    const keywords = [
      'qgis', 'gis', 'spatial', 'analysis', 'buffer', 'map', 'data', 'import', 'csv',
      'coordinate', 'projection', 'health', 'facility', 'accessibility', 'malaria',
      'google', 'earth', 'engine', 'satellite', 'remote', 'sensing', 'ndvi', 'vegetation',
      'clustering', 'machine', 'learning', 'risk', 'assessment', 'javascript', 'python',
      'authentication', 'troubleshooting', 'error', 'problem', 'tutorial', 'concept'
    ]

    const queryLower = query.toLowerCase()
    return keywords.map(keyword => {
      let score = 0
      if (queryLower.includes(keyword)) score += 1
      
      // Boost for exact matches
      if (queryLower.split(' ').includes(keyword)) score += 0.5
      
      // Boost for related terms
      const synonyms = this.getSynonyms(keyword)
      synonyms.forEach(synonym => {
        if (queryLower.includes(synonym)) score += 0.3
      })
      
      return Math.min(score, 2) // Cap at 2
    })
  }

  /**
   * Get content vector for similarity calculation
   */
  private getContentVector(content: ContentSimilarityMatch): number[] {
    return this.conceptVectors.get(content.id) || []
  }

  /**
   * Calculate cosine similarity between two vectors
   */
  private calculateCosineSimilarity(vectorA: number[], vectorB: number[]): number {
    if (vectorA.length !== vectorB.length) return 0

    const dotProduct = vectorA.reduce((sum, a, i) => sum + a * vectorB[i], 0)
    const magnitudeA = Math.sqrt(vectorA.reduce((sum, a) => sum + a * a, 0))
    const magnitudeB = Math.sqrt(vectorB.reduce((sum, b) => sum + b * b, 0))

    if (magnitudeA === 0 || magnitudeB === 0) return 0
    return dotProduct / (magnitudeA * magnitudeB)
  }

  /**
   * Apply contextual boosting to similarity scores
   */
  private applyContextualBoosting(content: ContentSimilarityMatch[], userContext: any): ContentSimilarityMatch[] {
    return content.map(item => {
      let boost = 1.0

      // Boost content relevant to current lab
      if (userContext?.currentLab && item.relevantLabs.includes(userContext.currentLab)) {
        boost *= 1.3
      }

      // Boost content matching user difficulty level
      if (userContext?.difficulty === item.difficulty) {
        boost *= 1.2
      }

      // Boost troubleshooting content if user seems stuck
      if (userContext?.timeInCurrentSection > 600 && item.type === 'troubleshooting') { // 10+ minutes
        boost *= 1.4
      }

      return {
        ...item,
        similarity: item.similarity * boost
      }
    })
  }

  /**
   * Analyze user pattern from interaction history
   */
  private analyzeUserPattern(userContext: any): UserInteractionPattern {
    const userId = userContext.userId || 'anonymous'
    const existingPattern = this.userPatterns.get(userId)

    // Create or update pattern
    const pattern: UserInteractionPattern = {
      queryTypes: existingPattern?.queryTypes || [],
      conceptsExplored: existingPattern?.conceptsExplored || [],
      timeSpentOnTopics: existingPattern?.timeSpentOnTopics || {},
      strugglingAreas: existingPattern?.strugglingAreas || [],
      successfulCompletions: existingPattern?.successfulCompletions || [],
      currentContext: {
        lab: userContext.currentLab || 'general',
        section: userContext.currentSection || '',
        timeInSession: userContext.timeInSession || 0
      }
    }

    return pattern
  }

  /**
   * Predict next concepts user will need
   */
  private predictNextConcepts(pattern: UserInteractionPattern, currentLab: string): string[] {
    const progressionMap: Record<string, string[]> = {
      'lab1': ['coordinate systems', 'data import', 'basic mapping', 'layer management'],
      'lab2': ['buffer analysis', 'spatial queries', 'accessibility analysis', 'service areas'],
      'lab3': ['satellite data', 'vegetation indices', 'environmental analysis', 'remote sensing'],
      'lab4': ['javascript programming', 'automation', 'ai assistance', 'code optimization'],
      'lab5': ['clustering algorithms', 'risk assessment', 'machine learning', 'pattern analysis']
    }

    const baseConcepts = progressionMap[currentLab] || []
    
    // Filter out already explored concepts
    const unexplored = baseConcepts.filter(concept => 
      !pattern.conceptsExplored.includes(concept)
    )

    // Add concepts based on struggling areas
    if (pattern.strugglingAreas.includes('coordinate systems')) {
      unexplored.unshift('projection troubleshooting', 'CRS selection')
    }

    return unexplored.slice(0, 4)
  }

  /**
   * Generate likely questions user might ask
   */
  private generateLikelyQuestions(pattern: UserInteractionPattern, nextConcepts: string[]): string[] {
    const questionTemplates: Record<string, string[]> = {
      'coordinate systems': [
        'What coordinate system should I use for Uganda?',
        'How do I fix projection errors?',
        'Why are my coordinates wrong?'
      ],
      'buffer analysis': [
        'How do I create buffer zones?',
        'What distance should I use for buffers?',
        'How to analyze service coverage?'
      ],
      'satellite data': [
        'How do I access satellite imagery?',
        'What is NDVI and how to calculate it?',
        'How to process Landsat data?'
      ],
      'clustering algorithms': [
        'What is k-means clustering?',
        'How to choose the right number of clusters?',
        'How to interpret clustering results?'
      ]
    }

    const questions: string[] = []
    nextConcepts.forEach(concept => {
      const templates = questionTemplates[concept] || []
      questions.push(...templates)
    })

    return questions.slice(0, 6)
  }

  /**
   * Predict potential problems user might encounter
   */
  private predictProblems(pattern: UserInteractionPattern, currentLab: string): string[] {
    const commonProblems: Record<string, string[]> = {
      'lab1': [
        'CSV file not loading properly',
        'Coordinate system confusion',
        'Layer not displaying correctly'
      ],
      'lab2': [
        'Buffer analysis not working',
        'Spatial query returning no results',
        'Distance calculations incorrect'
      ],
      'lab3': [
        'Google Earth Engine authentication failure',
        'Satellite imagery not loading',
        'NDVI calculation errors'
      ],
      'lab4': [
        'JavaScript syntax errors',
        'API authentication issues',
        'Code execution timeouts'
      ],
      'lab5': [
        'Clustering algorithm not converging',
        'Data preprocessing issues',
        'Result interpretation confusion'
      ]
    }

    const baseProblems = commonProblems[currentLab] || []
    
    // Add personalized problems based on user history
    if (pattern.strugglingAreas.length > 0) {
      baseProblems.unshift(`Recurring issues with ${pattern.strugglingAreas[0]}`)
    }

    return baseProblems.slice(0, 4)
  }

  /**
   * Generate recommended resources based on predictions
   */
  private generateRecommendedResources(nextConcepts: string[], pattern: UserInteractionPattern): ContentSimilarityMatch[] {
    const resources: ContentSimilarityMatch[] = []
    
    nextConcepts.forEach(concept => {
      const conceptQuery = concept.replace(/\s+/g, ' ')
      const matches = this.findSimilarContent(conceptQuery)
      resources.push(...matches.slice(0, 2)) // Top 2 matches per concept
    })

    return resources
      .filter((resource, index, self) => 
        index === self.findIndex(r => r.id === resource.id)
      ) // Remove duplicates
      .slice(0, 6)
  }

  /**
   * Calculate prediction confidence based on data quality
   */
  private calculatePredictionConfidence(pattern: UserInteractionPattern): number {
    let confidence = 0.5 // Base confidence

    // Increase confidence based on data richness
    if (pattern.conceptsExplored.length > 3) confidence += 0.2
    if (pattern.successfulCompletions.length > 1) confidence += 0.2
    if (Object.keys(pattern.timeSpentOnTopics).length > 2) confidence += 0.1

    return Math.min(confidence, 0.95) // Cap at 95%
  }

  /**
   * Helper methods
   */
  private getSynonyms(keyword: string): string[] {
    const synonymMap: Record<string, string[]> = {
      'gis': ['geographic information system', 'geospatial'],
      'qgis': ['quantum gis'],
      'buffer': ['zone', 'area', 'radius'],
      'coordinate': ['coords', 'location', 'position'],
      'satellite': ['imagery', 'remote sensing'],
      'clustering': ['grouping', 'classification']
    }
    
    return synonymMap[keyword] || []
  }

  private updateUserPattern(userId: string, interaction: Partial<MLTrainingData>): void {
    // Implementation for updating user patterns
    // This would track user behavior over time
  }

  private retainModels(): void {
    // Implementation for retraining ML models
    // This would update the recommendation algorithms
  }

  private getDefaultRecommendations(context: any): ContentSimilarityMatch[] {
    return Array.from(this.contentDatabase.values())
      .filter(content => content.difficulty === 'beginner')
      .slice(0, 4)
  }

  private findContentByInterests(pattern: UserInteractionPattern): ContentSimilarityMatch[] {
    return Array.from(this.contentDatabase.values())
      .filter(content => pattern.conceptsExplored.some(concept => 
        content.content.toLowerCase().includes(concept.toLowerCase())
      ))
      .slice(0, 3)
  }

  private findGapFillingContent(pattern: UserInteractionPattern): ContentSimilarityMatch[] {
    return Array.from(this.contentDatabase.values())
      .filter(content => content.type === 'concept' || content.type === 'tutorial')
      .slice(0, 3)
  }
}

export const mlRecommendationService = new MLRecommendationService() 