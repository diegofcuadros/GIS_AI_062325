import { LucideIcon, ArrowRight, HelpCircle, Lightbulb, Target, BookOpen, Zap, AlertCircle, ChevronRight, Settings, Brain, TrendingUp } from 'lucide-react'

export interface QuickAction {
  id: string
  label: string
  type: 'followup' | 'troubleshoot' | 'next_step' | 'related' | 'explain_more'
  icon: string
  priority: number
  contextTriggers: string[]
  payload?: any
}

export interface UserContext {
  currentLab: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  currentStep?: number
  recentTopics: string[]
  strugglingConcepts: string[]
  masteredTopics: string[]
}

export interface ResponseAnalysis {
  concepts: string[]
  actionTriggers: string[]
  difficulty: string
  type: 'explanation' | 'instruction' | 'troubleshooting' | 'conceptual'
  confidence: number
}

// Action templates with contextual triggers
const ACTION_TEMPLATES: Record<string, Omit<QuickAction, 'id'>> = {
  // Follow-up actions
  'step_by_step': {
    label: 'Show step-by-step',
    type: 'followup',
    icon: 'ChevronRight',
    priority: 8,
    contextTriggers: ['procedure', 'workflow', 'process', 'how to', 'steps']
  },
  'more_details': {
    label: 'Explain in detail',
    type: 'explain_more',
    icon: 'BookOpen',
    priority: 7,
    contextTriggers: ['concept', 'theory', 'definition', 'what is']
  },
  'show_example': {
    label: 'Show example',
    type: 'followup',
    icon: 'Target',
    priority: 8,
    contextTriggers: ['example', 'demonstration', 'practical', 'application']
  },

  // Troubleshooting actions
  'common_errors': {
    label: 'Common errors',
    type: 'troubleshoot',
    icon: 'AlertCircle',
    priority: 9,
    contextTriggers: ['error', 'problem', 'issue', 'troubleshoot', 'fix']
  },
  'debug_tips': {
    label: 'Debug this',
    type: 'troubleshoot',
    icon: 'Zap',
    priority: 8,
    contextTriggers: ['debug', 'diagnose', 'solve', 'repair']
  },
  'alternative_method': {
    label: 'Try another way',
    type: 'troubleshoot',
    icon: 'ArrowRight',
    priority: 6,
    contextTriggers: ['alternative', 'different', 'another', 'workaround']
  },

  // Next step actions
  'whats_next': {
    label: "What's next?",
    type: 'next_step',
    icon: 'TrendingUp',
    priority: 7,
    contextTriggers: ['complete', 'finished', 'done', 'next', 'continue']
  },
  'practice_exercise': {
    label: 'Practice this',
    type: 'next_step',
    icon: 'Target',
    priority: 6,
    contextTriggers: ['practice', 'exercise', 'try', 'apply']
  },
  'advanced_topic': {
    label: 'Advanced concepts',
    type: 'next_step',
    icon: 'Brain',
    priority: 5,
    contextTriggers: ['advanced', 'complex', 'deeper', 'sophisticated']
  },

  // Related concepts
  'related_concepts': {
    label: 'Related topics',
    type: 'related',
    icon: 'BookOpen',
    priority: 6,
    contextTriggers: ['related', 'similar', 'connection', 'linked']
  },
  'prerequisites': {
    label: 'Prerequisites',
    type: 'related',
    icon: 'ArrowRight',
    priority: 7,
    contextTriggers: ['prerequisite', 'requirement', 'needed', 'foundation']
  },
  'real_world_use': {
    label: 'Real-world use',
    type: 'related',
    icon: 'Target',
    priority: 5,
    contextTriggers: ['application', 'real-world', 'practical', 'industry']
  }
}

// Lab-specific action templates
const LAB_SPECIFIC_ACTIONS: Record<string, Record<string, Omit<QuickAction, 'id'>>> = {
  lab1: {
    'check_crs': {
      label: 'Check coordinate system',
      type: 'troubleshoot',
      icon: 'Settings',
      priority: 9,
      contextTriggers: ['coordinate', 'crs', 'projection', 'alignment']
    },
    'fix_geometry': {
      label: 'Fix invalid geometry',
      type: 'troubleshoot',
      icon: 'Zap',
      priority: 8,
      contextTriggers: ['invalid', 'geometry', 'corrupt', 'broken']
    },
    'data_loading': {
      label: 'Load more data',
      type: 'next_step',
      icon: 'Target',
      priority: 7,
      contextTriggers: ['data', 'load', 'import', 'add']
    }
  },
  lab2: {
    'buffer_analysis': {
      label: 'Try buffer analysis',
      type: 'followup',
      icon: 'Target',
      priority: 8,
      contextTriggers: ['buffer', 'distance', 'proximity', 'zone']
    },
    'spatial_join': {
      label: 'Learn spatial joins',
      type: 'related',
      icon: 'BookOpen',
      priority: 7,
      contextTriggers: ['join', 'combine', 'merge', 'link']
    },
    'accessibility': {
      label: 'Accessibility analysis',
      type: 'next_step',
      icon: 'TrendingUp',
      priority: 6,
      contextTriggers: ['accessibility', 'access', 'reach', 'service']
    }
  },
  lab3: {
    'gee_auth': {
      label: 'Fix GEE authentication',
      type: 'troubleshoot',
      icon: 'AlertCircle',
      priority: 9,
      contextTriggers: ['authentication', 'login', 'credentials', 'access']
    },
    'ndvi_calculation': {
      label: 'Calculate NDVI',
      type: 'followup',
      icon: 'ChevronRight',
      priority: 8,
      contextTriggers: ['ndvi', 'vegetation', 'index', 'calculate']
    },
    'satellite_data': {
      label: 'Explore satellite data',
      type: 'related',
      icon: 'BookOpen',
      priority: 6,
      contextTriggers: ['satellite', 'imagery', 'remote sensing', 'data']
    }
  },
  lab4: {
    'coding_help': {
      label: 'Get coding help',
      type: 'troubleshoot',
      icon: 'Brain',
      priority: 8,
      contextTriggers: ['code', 'programming', 'script', 'ai']
    },
    'debug_code': {
      label: 'Debug your code',
      type: 'troubleshoot',
      icon: 'Zap',
      priority: 9,
      contextTriggers: ['debug', 'error', 'bug', 'fix']
    },
    'best_practices': {
      label: 'Best practices',
      type: 'related',
      icon: 'Lightbulb',
      priority: 6,
      contextTriggers: ['practices', 'tips', 'advice', 'improve']
    }
  },
  lab5: {
    'clustering_help': {
      label: 'Clustering analysis',
      type: 'followup',
      icon: 'Target',
      priority: 8,
      contextTriggers: ['cluster', 'grouping', 'classification', 'analysis']
    },
    'ml_concepts': {
      label: 'ML fundamentals',
      type: 'related',
      icon: 'Brain',
      priority: 7,
      contextTriggers: ['machine learning', 'ml', 'algorithm', 'model']
    },
    'interpret_results': {
      label: 'Interpret results',
      type: 'next_step',
      icon: 'TrendingUp',
      priority: 8,
      contextTriggers: ['results', 'interpretation', 'meaning', 'analysis']
    }
  }
}

export class SmartActionService {
  
  /**
   * Generate contextual quick actions based on AI response and user context
   */
  generateActionsForResponse(
    response: string,
    userContext: UserContext,
    conversationHistory: any[] = []
  ): QuickAction[] {
    const analysis = this.analyzeResponseContent(response)
    const availableActions: QuickAction[] = []

    // Get general actions based on content analysis
    const generalActions = this.getGeneralActions(analysis, userContext)
    availableActions.push(...generalActions)

    // Get lab-specific actions
    const labActions = this.getLabSpecificActions(analysis, userContext)
    availableActions.push(...labActions)

    // Get context-aware actions based on conversation history
    const contextActions = this.getContextualActions(analysis, userContext, conversationHistory)
    availableActions.push(...contextActions)

    // Prioritize and filter actions
    const prioritizedActions = this.prioritizeActions(availableActions, userContext)
    
    // Return top 3-4 most relevant actions
    return prioritizedActions.slice(0, 4)
  }

  /**
   * Analyze AI response content to extract concepts and triggers
   */
  analyzeResponseContent(response: string): ResponseAnalysis {
    const content = response.toLowerCase()
    const concepts: string[] = []
    const actionTriggers: string[] = []
    
    // Extract GIS concepts
    const gisTerms = [
      'coordinate system', 'crs', 'projection', 'buffer', 'spatial join',
      'ndvi', 'vegetation index', 'satellite', 'remote sensing',
      'qgis', 'google earth engine', 'gee', 'shapefile', 'vector',
      'raster', 'classification', 'clustering', 'machine learning'
    ]
    
    gisTerms.forEach(term => {
      if (content.includes(term)) {
        concepts.push(term)
      }
    })

    // Extract action trigger words
    const triggerPatterns = [
      'step-by-step', 'procedure', 'process', 'how to',
      'error', 'problem', 'troubleshoot', 'fix',
      'example', 'demonstration', 'practice',
      'next', 'continue', 'advanced', 'related'
    ]
    
    triggerPatterns.forEach(trigger => {
      if (content.includes(trigger)) {
        actionTriggers.push(trigger)
      }
    })

    // Determine response type
    let type: ResponseAnalysis['type'] = 'explanation'
    if (content.includes('step') || content.includes('procedure')) {
      type = 'instruction'
    } else if (content.includes('error') || content.includes('problem')) {
      type = 'troubleshooting'
    } else if (content.includes('concept') || content.includes('theory')) {
      type = 'conceptual'
    }

    // Determine difficulty level
    let difficulty = 'beginner'
    if (content.includes('advanced') || content.includes('complex')) {
      difficulty = 'advanced'
    } else if (content.includes('intermediate') || concepts.length > 3) {
      difficulty = 'intermediate'
    }

    return {
      concepts,
      actionTriggers,
      difficulty,
      type,
      confidence: Math.min(0.9, (concepts.length + actionTriggers.length) * 0.15)
    }
  }

  /**
   * Get general actions based on content analysis
   */
  private getGeneralActions(analysis: ResponseAnalysis, userContext: UserContext): QuickAction[] {
    const actions: QuickAction[] = []

    // Match action templates to content triggers
    Object.entries(ACTION_TEMPLATES).forEach(([key, template]) => {
      const matchScore = this.calculateMatchScore(template.contextTriggers, analysis.actionTriggers)
      
      if (matchScore > 0.3) { // Threshold for relevance
        actions.push({
          id: `general_${key}_${Date.now()}`,
          ...template,
          priority: template.priority + matchScore * 2 // Boost priority based on relevance
        })
      }
    })

    return actions
  }

  /**
   * Get lab-specific actions
   */
  private getLabSpecificActions(analysis: ResponseAnalysis, userContext: UserContext): QuickAction[] {
    const labActions = LAB_SPECIFIC_ACTIONS[userContext.currentLab] || {}
    const actions: QuickAction[] = []

    Object.entries(labActions).forEach(([key, template]) => {
      const matchScore = this.calculateMatchScore(template.contextTriggers, analysis.concepts.concat(analysis.actionTriggers))
      
      if (matchScore > 0.2) { // Lower threshold for lab-specific actions
        actions.push({
          id: `lab_${userContext.currentLab}_${key}_${Date.now()}`,
          ...template,
          priority: template.priority + matchScore * 3 // Higher boost for lab-specific relevance
        })
      }
    })

    return actions
  }

  /**
   * Get contextual actions based on conversation history
   */
  private getContextualActions(
    analysis: ResponseAnalysis, 
    userContext: UserContext, 
    conversationHistory: any[]
  ): QuickAction[] {
    const actions: QuickAction[] = []

    // If user has been struggling with concepts, offer help
    if (userContext.strugglingConcepts.length > 0) {
      actions.push({
        id: `help_struggling_${Date.now()}`,
        label: 'Get more help',
        type: 'troubleshoot',
        icon: 'HelpCircle',
        priority: 9,
        contextTriggers: ['help', 'support'],
      })
    }

    // If user is advanced, offer more complex topics
    if (userContext.difficulty === 'advanced' && userContext.masteredTopics.length > 3) {
      actions.push({
        id: `advanced_challenge_${Date.now()}`,
        label: 'Try advanced challenge',
        type: 'next_step',
        icon: 'Brain',
        priority: 7,
        contextTriggers: ['challenge', 'advanced'],
      })
    }

    // If conversation is long, suggest summary or review
    if (conversationHistory.length > 8) {
      actions.push({
        id: `review_session_${Date.now()}`,
        label: 'Review key points',
        type: 'related',
        icon: 'BookOpen',
        priority: 6,
        contextTriggers: ['review', 'summary'],
      })
    }

    return actions
  }

  /**
   * Calculate match score between triggers and content
   */
  private calculateMatchScore(triggers: string[], content: string[]): number {
    if (!triggers.length || !content.length) return 0

    let matches = 0
    triggers.forEach(trigger => {
      if (content.some(item => item.includes(trigger) || trigger.includes(item))) {
        matches++
      }
    })

    return matches / triggers.length
  }

  /**
   * Prioritize actions based on user context and relevance
   */
  prioritizeActions(actions: QuickAction[], userContext: UserContext): QuickAction[] {
    return actions
      .sort((a, b) => {
        // First sort by priority
        if (b.priority !== a.priority) {
          return b.priority - a.priority
        }
        
        // Then by user context relevance
        const aRelevance = this.calculateUserRelevance(a, userContext)
        const bRelevance = this.calculateUserRelevance(b, userContext)
        
        return bRelevance - aRelevance
      })
      .filter((action, index, arr) => {
        // Remove duplicates by type
        return arr.findIndex(a => a.type === action.type && a.label === action.label) === index
      })
  }

  /**
   * Calculate how relevant an action is to the user's current context
   */
  private calculateUserRelevance(action: QuickAction, userContext: UserContext): number {
    let relevance = 0

    // Boost relevance for troubleshooting if user is struggling
    if (action.type === 'troubleshoot' && userContext.strugglingConcepts.length > 0) {
      relevance += 3
    }

    // Boost relevance for next_step if user has mastered current topics
    if (action.type === 'next_step' && userContext.masteredTopics.length > userContext.strugglingConcepts.length) {
      relevance += 2
    }

    // Adjust for difficulty level
    if (userContext.difficulty === 'beginner' && action.type === 'explain_more') {
      relevance += 2
    } else if (userContext.difficulty === 'advanced' && action.type === 'next_step') {
      relevance += 2
    }

    return relevance
  }

  /**
   * Track action usage for learning and improvement
   */
  trackActionUsage(actionId: string, wasHelpful: boolean): void {
    // Store action usage data in localStorage for analytics
    const usage = JSON.parse(localStorage.getItem('action_usage') || '{}')
    
    if (!usage[actionId]) {
      usage[actionId] = { clicks: 0, helpful: 0, notHelpful: 0 }
    }
    
    usage[actionId].clicks++
    if (wasHelpful) {
      usage[actionId].helpful++
    } else {
      usage[actionId].notHelpful++
    }
    
    localStorage.setItem('action_usage', JSON.stringify(usage))
  }
} 