export interface SmartSuggestion {
  id: string
  title: string
  description: string
  type: 'conceptual' | 'procedural' | 'troubleshooting' | 'progressive'
  priority: number
  confidence: number
  estimatedTime: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  lab?: string
  prerequisites?: string[]
  relatedConcepts: string[]
  actionQuery: string // The query that would be sent if user clicks this suggestion
}

export interface ConversationPattern {
  strugglingConcepts: string[]
  masteredTopics: string[]
  nextRecommendations: string[]
  confidenceLevel: number
  learningVelocity: 'slow' | 'normal' | 'fast'
  preferredLearningStyle: 'visual' | 'procedural' | 'conceptual'
}

export interface PredictiveAssistance {
  likelyNextQuestions: string[]
  anticipatedProblems: string[]
  recommendedResources: SmartSuggestion[]
  learningPathSuggestions: string[]
  confidence: number
}

export interface UserContext {
  currentLab: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  currentStep?: number
  recentTopics: string[]
  strugglingConcepts: string[]
  masteredTopics: string[]
  sessionDuration: number
  totalInteractions: number
}

// Knowledge base of GIS concepts and their relationships
const GIS_CONCEPT_GRAPH = {
  fundamentals: {
    concepts: ['coordinate systems', 'projections', 'vector data', 'raster data', 'spatial reference'],
    nextSteps: ['data loading', 'basic visualization', 'attribute tables'],
    commonIssues: ['CRS mismatch', 'invalid geometry', 'missing data files']
  },
  dataManagement: {
    concepts: ['data loading', 'file formats', 'attribute tables', 'data quality'],
    nextSteps: ['spatial analysis', 'visualization', 'data joins'],
    commonIssues: ['file path errors', 'encoding issues', 'corrupted files']
  },
  spatialAnalysis: {
    concepts: ['buffer analysis', 'spatial joins', 'overlay analysis', 'proximity analysis'],
    nextSteps: ['advanced analysis', 'automation', 'batch processing'],
    commonIssues: ['topology errors', 'analysis failures', 'unexpected results']
  },
  remotesensing: {
    concepts: ['satellite imagery', 'spectral bands', 'NDVI', 'image classification'],
    nextSteps: ['time series analysis', 'change detection', 'advanced indices'],
    commonIssues: ['authentication errors', 'quota limits', 'processing timeouts']
  },
  programming: {
    concepts: ['Python scripting', 'automation', 'APIs', 'debugging'],
    nextSteps: ['custom tools', 'web development', 'advanced algorithms'],
    commonIssues: ['syntax errors', 'import failures', 'environment setup']
  },
  machineLearning: {
    concepts: ['clustering', 'classification', 'feature selection', 'model validation'],
    nextSteps: ['deep learning', 'ensemble methods', 'deployment'],
    commonIssues: ['overfitting', 'data preparation', 'parameter tuning']
  }
}

// Lab-specific learning progressions
const LAB_PROGRESSIONS = {
  lab1: {
    sequence: [
      'coordinate systems',
      'data loading',
      'basic visualization',
      'attribute analysis',
      'choropleth mapping'
    ],
    commonStuckPoints: ['CRS setup', 'data importing', 'invalid geometry'],
    timeEstimates: ['10 min', '15 min', '20 min', '15 min', '25 min']
  },
  lab2: {
    sequence: [
      'buffer analysis',
      'spatial joins',
      'proximity analysis',
      'accessibility modeling',
      'result interpretation'
    ],
    commonStuckPoints: ['buffer parameters', 'join field selection', 'distance units'],
    timeEstimates: ['15 min', '20 min', '25 min', '30 min', '15 min']
  },
  lab3: {
    sequence: [
      'GEE authentication',
      'image collection',
      'NDVI calculation',
      'time series analysis',
      'export results'
    ],
    commonStuckPoints: ['authentication', 'code syntax', 'data filtering'],
    timeEstimates: ['10 min', '20 min', '25 min', '35 min', '15 min']
  },
  lab4: {
    sequence: [
      'Python setup',
      'AI-assisted coding',
      'debugging techniques',
      'code optimization',
      'automation'
    ],
    commonStuckPoints: ['environment setup', 'syntax errors', 'API usage'],
    timeEstimates: ['15 min', '30 min', '20 min', '25 min', '30 min']
  },
  lab5: {
    sequence: [
      'data preparation',
      'clustering algorithms',
      'parameter selection',
      'result validation',
      'interpretation'
    ],
    commonStuckPoints: ['data preprocessing', 'algorithm selection', 'parameter tuning'],
    timeEstimates: ['20 min', '25 min', '30 min', '20 min', '25 min']
  }
}

export class SmartSuggestionsEngine {

  /**
   * Generate contextual suggestions based on conversation history and user context
   */
  generateContextualSuggestions(
    conversationHistory: any[],
    userContext: UserContext,
    currentLab: string
  ): SmartSuggestion[] {
    const pattern = this.analyzeConversationPattern(conversationHistory)
    const suggestions: SmartSuggestion[] = []

    // Generate different types of suggestions
    suggestions.push(...this.generateConceptualSuggestions(pattern, userContext))
    suggestions.push(...this.generateProceduralSuggestions(pattern, userContext, currentLab))
    suggestions.push(...this.generateTroubleshootingSuggestions(pattern, userContext))
    suggestions.push(...this.generateProgressiveSuggestions(pattern, userContext))

    // Prioritize and filter suggestions
    return this.prioritizeSuggestions(suggestions, userContext).slice(0, 6)
  }

  /**
   * Analyze conversation patterns to understand user learning state
   */
  analyzeConversationPattern(history: any[]): ConversationPattern {
    const strugglingConcepts: string[] = []
    const masteredTopics: string[] = []
    const nextRecommendations: string[] = []

    // Analyze recent messages for struggle indicators
    const recentMessages = history.slice(-10)
    let questionCount = 0
    let errorMentions = 0
    let successIndicators = 0

    recentMessages.forEach(message => {
      if (message.role === 'user') {
        questionCount++
        const content = message.content.toLowerCase()
        
        // Detect struggle indicators
        if (content.includes('error') || content.includes('problem') || 
            content.includes('not working') || content.includes('stuck')) {
          errorMentions++
          
          // Extract struggling concepts
          Object.values(GIS_CONCEPT_GRAPH).forEach(category => {
            category.concepts.forEach(concept => {
              if (content.includes(concept) && !strugglingConcepts.includes(concept)) {
                strugglingConcepts.push(concept)
              }
            })
          })
        }

        // Detect success indicators
        if (content.includes('thank') || content.includes('got it') || 
            content.includes('works') || content.includes('understand')) {
          successIndicators++
        }

        // Extract mastered topics (concepts mentioned without struggle indicators)
        if (!content.includes('error') && !content.includes('problem')) {
          Object.values(GIS_CONCEPT_GRAPH).forEach(category => {
            category.concepts.forEach(concept => {
              if (content.includes(concept) && !masteredTopics.includes(concept) && 
                  !strugglingConcepts.includes(concept)) {
                masteredTopics.push(concept)
              }
            })
          })
        }
      }
    })

    // Generate next recommendations based on mastered topics
    masteredTopics.forEach(topic => {
      Object.values(GIS_CONCEPT_GRAPH).forEach(category => {
        if (category.concepts.includes(topic)) {
          category.nextSteps.forEach(nextStep => {
            if (!masteredTopics.includes(nextStep) && !nextRecommendations.includes(nextStep)) {
              nextRecommendations.push(nextStep)
            }
          })
        }
      })
    })

    // Calculate confidence level
    const totalQuestions = questionCount || 1
    const confidenceLevel = Math.max(0.1, 1 - (errorMentions / totalQuestions))

    // Determine learning velocity
    let learningVelocity: 'slow' | 'normal' | 'fast' = 'normal'
    if (errorMentions > totalQuestions * 0.6) {
      learningVelocity = 'slow'
    } else if (successIndicators > totalQuestions * 0.4) {
      learningVelocity = 'fast'
    }

    // Determine preferred learning style
    let preferredLearningStyle: 'visual' | 'procedural' | 'conceptual' = 'procedural'
    const proceduralWords = ['step', 'how', 'procedure', 'process']
    const conceptualWords = ['what', 'why', 'concept', 'theory', 'explain']
    const visualWords = ['show', 'example', 'demo', 'visual']

    let proceduralCount = 0, conceptualCount = 0, visualCount = 0

    recentMessages.forEach(message => {
      if (message.role === 'user') {
        const content = message.content.toLowerCase()
        proceduralWords.forEach(word => content.includes(word) && proceduralCount++)
        conceptualWords.forEach(word => content.includes(word) && conceptualCount++)
        visualWords.forEach(word => content.includes(word) && visualCount++)
      }
    })

    if (conceptualCount > proceduralCount && conceptualCount > visualCount) {
      preferredLearningStyle = 'conceptual'
    } else if (visualCount > proceduralCount) {
      preferredLearningStyle = 'visual'
    }

    return {
      strugglingConcepts,
      masteredTopics,
      nextRecommendations,
      confidenceLevel,
      learningVelocity,
      preferredLearningStyle
    }
  }

  /**
   * Generate conceptual learning suggestions
   */
  private generateConceptualSuggestions(pattern: ConversationPattern, userContext: UserContext): SmartSuggestion[] {
    const suggestions: SmartSuggestion[] = []

    // Suggest foundational concepts if user is struggling
    if (pattern.strugglingConcepts.length > 0) {
      pattern.strugglingConcepts.forEach(concept => {
        suggestions.push({
          id: `concept_${concept}_${Date.now()}`,
          title: `Understanding ${concept}`,
          description: `Get a clear explanation of ${concept} with practical examples`,
          type: 'conceptual',
          priority: 8,
          confidence: 0.85,
          estimatedTime: '10-15 min',
          difficulty: userContext.difficulty,
          relatedConcepts: this.getRelatedConcepts(concept),
          actionQuery: `Explain ${concept} in detail with examples for ${userContext.difficulty} level`
        })
      })
    }

    // Suggest advanced concepts if user is progressing well
    if (pattern.confidenceLevel > 0.7 && pattern.masteredTopics.length > 2) {
      pattern.nextRecommendations.slice(0, 2).forEach(recommendation => {
        suggestions.push({
          id: `advanced_${recommendation}_${Date.now()}`,
          title: `Explore ${recommendation}`,
          description: `Ready to learn ${recommendation}? Let's dive into advanced concepts`,
          type: 'conceptual',
          priority: 6,
          confidence: pattern.confidenceLevel,
          estimatedTime: '15-20 min',
          difficulty: this.getNextDifficultyLevel(userContext.difficulty),
          relatedConcepts: this.getRelatedConcepts(recommendation),
          actionQuery: `Teach me about ${recommendation} - I'm ready for more advanced concepts`
        })
      })
    }

    return suggestions
  }

  /**
   * Generate procedural (step-by-step) suggestions
   */
  private generateProceduralSuggestions(
    pattern: ConversationPattern, 
    userContext: UserContext, 
    currentLab: string
  ): SmartSuggestion[] {
    const suggestions: SmartSuggestion[] = []
    const labProgression = LAB_PROGRESSIONS[currentLab as keyof typeof LAB_PROGRESSIONS]

    if (labProgression) {
      // Suggest next steps in the lab sequence
      const currentTopics = pattern.masteredTopics
      const nextSteps = labProgression.sequence.filter(step => 
        !currentTopics.some(topic => topic.includes(step))
      )

      nextSteps.slice(0, 2).forEach((step, index) => {
        suggestions.push({
          id: `procedure_${step}_${Date.now()}`,
          title: `Next: ${step}`,
          description: `Follow step-by-step instructions for ${step} in ${currentLab}`,
          type: 'procedural',
          priority: 8 - index,
          confidence: 0.9,
          estimatedTime: labProgression.timeEstimates[labProgression.sequence.indexOf(step)] || '15 min',
          difficulty: userContext.difficulty,
          lab: currentLab,
          relatedConcepts: [step],
          actionQuery: `Show me step-by-step instructions for ${step} in ${currentLab}`
        })
      })
    }

    // Suggest practice exercises if user understands concepts
    if (pattern.confidenceLevel > 0.6) {
      suggestions.push({
        id: `practice_${currentLab}_${Date.now()}`,
        title: 'Practice exercise',
        description: 'Try a hands-on exercise to reinforce your learning',
        type: 'procedural',
        priority: 7,
        confidence: pattern.confidenceLevel,
        estimatedTime: '20-30 min',
        difficulty: userContext.difficulty,
        lab: currentLab,
        relatedConcepts: pattern.masteredTopics.slice(-3),
        actionQuery: `Give me a practice exercise for ${currentLab} covering ${pattern.masteredTopics.slice(-2).join(' and ')}`
      })
    }

    return suggestions
  }

  /**
   * Generate troubleshooting suggestions
   */
  private generateTroubleshootingSuggestions(pattern: ConversationPattern, userContext: UserContext): SmartSuggestion[] {
    const suggestions: SmartSuggestion[] = []

    // Suggest common error solutions if user is struggling
    if (pattern.strugglingConcepts.length > 0 || pattern.confidenceLevel < 0.5) {
      const labProgression = LAB_PROGRESSIONS[userContext.currentLab as keyof typeof LAB_PROGRESSIONS]
      
      if (labProgression) {
        labProgression.commonStuckPoints.slice(0, 2).forEach(stuckPoint => {
          suggestions.push({
            id: `troubleshoot_${stuckPoint}_${Date.now()}`,
            title: `Fix ${stuckPoint} issues`,
            description: `Common solutions for ${stuckPoint} problems in ${userContext.currentLab}`,
            type: 'troubleshooting',
            priority: 9,
            confidence: 0.8,
            estimatedTime: '5-10 min',
            difficulty: userContext.difficulty,
            lab: userContext.currentLab,
            relatedConcepts: [stuckPoint],
            actionQuery: `Help me troubleshoot ${stuckPoint} problems in ${userContext.currentLab}`
          })
        })
      }
    }

    // Suggest preventive troubleshooting
    if (pattern.confidenceLevel > 0.6) {
      suggestions.push({
        id: `prevent_errors_${Date.now()}`,
        title: 'Avoid common mistakes',
        description: 'Learn about common pitfalls and how to avoid them',
        type: 'troubleshooting',
        priority: 5,
        confidence: 0.7,
        estimatedTime: '10 min',
        difficulty: userContext.difficulty,
        relatedConcepts: ['best practices', 'error prevention'],
        actionQuery: `What are common mistakes to avoid in ${userContext.currentLab} and how can I prevent them?`
      })
    }

    return suggestions
  }

  /**
   * Generate progressive learning suggestions
   */
  private generateProgressiveSuggestions(pattern: ConversationPattern, userContext: UserContext): SmartSuggestion[] {
    const suggestions: SmartSuggestion[] = []

    // Suggest moving to next lab if current lab is well understood
    if (pattern.confidenceLevel > 0.8 && pattern.masteredTopics.length > 3) {
      const currentLabNum = parseInt(userContext.currentLab.replace('lab', ''))
      if (currentLabNum < 5) {
        const nextLab = `lab${currentLabNum + 1}`
        suggestions.push({
          id: `progress_${nextLab}_${Date.now()}`,
          title: `Ready for ${nextLab}?`,
          description: `You've mastered ${userContext.currentLab}! Time to tackle new challenges`,
          type: 'progressive',
          priority: 7,
          confidence: pattern.confidenceLevel,
          estimatedTime: '2-3 hours',
          difficulty: userContext.difficulty,
          lab: nextLab,
          prerequisites: pattern.masteredTopics.slice(-3),
          relatedConcepts: ['progression', 'next level'],
          actionQuery: `I'm ready to move to ${nextLab}. What should I expect and how do I get started?`
        })
      }
    }

    // Suggest real-world applications
    if (pattern.masteredTopics.length > 2) {
      suggestions.push({
        id: `realworld_${Date.now()}`,
        title: 'Real-world applications',
        description: 'See how these concepts apply in professional GIS work',
        type: 'progressive',
        priority: 6,
        confidence: 0.75,
        estimatedTime: '15 min',
        difficulty: userContext.difficulty,
        relatedConcepts: pattern.masteredTopics.slice(-3),
        actionQuery: `Show me real-world applications of ${pattern.masteredTopics.slice(-2).join(' and ')} in professional GIS work`
      })
    }

    return suggestions
  }

  /**
   * Prioritize suggestions based on user context and relevance
   */
  private prioritizeSuggestions(suggestions: SmartSuggestion[], userContext: UserContext): SmartSuggestion[] {
    return suggestions
      .sort((a, b) => {
        // Primary sort: priority
        if (b.priority !== a.priority) {
          return b.priority - a.priority
        }
        
        // Secondary sort: confidence
        if (b.confidence !== a.confidence) {
          return b.confidence - a.confidence
        }
        
        // Tertiary sort: difficulty match
        const aDifficultyMatch = a.difficulty === userContext.difficulty ? 1 : 0
        const bDifficultyMatch = b.difficulty === userContext.difficulty ? 1 : 0
        return bDifficultyMatch - aDifficultyMatch
      })
      .filter((suggestion, index, arr) => {
        // Remove near-duplicates
        return arr.findIndex(s => 
          s.type === suggestion.type && 
          s.title.includes(suggestion.title.split(' ')[1] || '')
        ) === index
      })
  }

  /**
   * Predict what the user might need next
   */
  predictUserNeeds(context: any): PredictiveAssistance {
    const likelyNextQuestions = [
      "How do I apply this in practice?",
      "What if I encounter an error?",
      "What's the next step?",
      "Can you show me an example?"
    ]

    const anticipatedProblems = [
      "Data loading issues",
      "Coordinate system misalignment", 
      "Processing errors",
      "Unexpected results"
    ]

    return {
      likelyNextQuestions,
      anticipatedProblems,
      recommendedResources: [],
      learningPathSuggestions: [],
      confidence: 0.7
    }
  }

  /**
   * Get related concepts for a given concept
   */
  private getRelatedConcepts(concept: string): string[] {
    const related: string[] = []
    
    Object.values(GIS_CONCEPT_GRAPH).forEach(category => {
      if (category.concepts.includes(concept)) {
        related.push(...category.concepts.filter(c => c !== concept))
        related.push(...category.nextSteps)
      }
    })

    return [...new Set(related)].slice(0, 5)
  }

  /**
   * Get the next difficulty level for progression
   */
  private getNextDifficultyLevel(current: string): 'beginner' | 'intermediate' | 'advanced' {
    switch (current) {
      case 'beginner': return 'intermediate'
      case 'intermediate': return 'advanced'
      default: return 'advanced'
    }
  }
} 