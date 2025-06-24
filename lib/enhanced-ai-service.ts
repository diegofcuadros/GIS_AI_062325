/**
 * Enhanced AI Service - Phase 3
 * Advanced search algorithms, fuzzy matching, context-aware responses
 * Integration with expanded knowledge base
 */

import { ENHANCED_GIS_KNOWLEDGE, type EnhancedKnowledgeItem } from './enhanced-knowledge-base'

export interface SearchResult {
  item: EnhancedKnowledgeItem
  score: number
  matchType: 'exact' | 'fuzzy' | 'semantic' | 'related'
  matchedFields: string[]
}

export interface ConversationContext {
  currentLab?: string
  recentTopics: string[]
  userExpertise: 'beginner' | 'intermediate' | 'advanced'
  questionCount: number
}

export class EnhancedAIService {
  private knowledge = ENHANCED_GIS_KNOWLEDGE
  private context: ConversationContext = {
    recentTopics: [],
    userExpertise: 'beginner',
    questionCount: 0
  }

  /**
   * Advanced search with fuzzy matching and context awareness
   */
  public searchKnowledge(query: string, context?: Partial<ConversationContext>): SearchResult[] {
    if (context) {
      this.updateContext(context)
    }

    const searchTerms = this.normalizeQuery(query)
    const results: SearchResult[] = []

    // Search all knowledge items
    Object.values(this.knowledge).forEach(item => {
      const score = this.calculateRelevanceScore(item, searchTerms, query)
      if (score > 0) {
        results.push({
          item,
          score,
          matchType: this.determineMatchType(item, searchTerms, score),
          matchedFields: this.getMatchedFields(item, searchTerms)
        })
      }
    })

    // Sort by relevance and context
    return results
      .sort((a, b) => this.contextualScore(b) - this.contextualScore(a))
      .slice(0, 10) // Top 10 results
  }

  /**
   * Generate context-aware response
   */
  public generateResponse(query: string, context?: Partial<ConversationContext>): string {
    this.context.questionCount++
    
    const searchResults = this.searchKnowledge(query, context)
    
    if (searchResults.length === 0) {
      return this.generateFallbackResponse(query)
    }

    const primaryResult = searchResults[0]
    const relatedResults = searchResults.slice(1, 3)

    let response = this.formatPrimaryResponse(primaryResult, query)
    
    // Add context-specific information
    if (this.context.currentLab) {
      response += this.addLabSpecificContext(primaryResult, this.context.currentLab)
    }

    // Add related topics
    if (relatedResults.length > 0) {
      response += this.addRelatedTopics(relatedResults)
    }

    // Add difficulty-appropriate next steps
    response += this.addNextSteps(primaryResult, this.context.userExpertise)

    return response
  }

  /**
   * Detect current lab from URL or context
   */
  public detectLabContext(url?: string): string | undefined {
    if (!url) return undefined
    
    const labPatterns = {
      'lab1': /\/labs\/lab1|introduction.*gis|basic.*mapping/i,
      'lab2': /(\/labs\/lab2|healthcare.*access|facility.*location|uganda)/i,
      'lab3': /\/labs\/lab3|earth.*engine|malaria.*mapping|satellite/i,
      'lab4': /\/labs\/lab4|ai.*programming|github.*copilot/i,
      'lab5': /\/labs\/lab5|machine.*learning|clustering|python/i
    }

    for (const [lab, pattern] of Object.entries(labPatterns)) {
      if (pattern.test(url)) {
        return lab
      }
    }
    
    return undefined
  }

  /**
   * Get context-aware suggestions
   */
  public getContextualSuggestions(currentLab?: string): string[] {
    const baseSuggestions = [
      "What is GIS?",
      "How do I use QGIS?",
      "What is Google Earth Engine?",
      "How do I troubleshoot data loading issues?"
    ]

    const labSuggestions: Record<string, string[]> = {
      lab1: [
        "How do I create a map in QGIS?",
        "What are vector vs raster data?",
        "How do I add layers in QGIS?",
        "What is coordinate reference system?",
        "How do I style map layers?"
      ],
      lab2: [
        "How do I analyze healthcare accessibility?",
        "What is service area analysis?",
        "How do I calculate distances in GIS?",
        "How do I create buffer zones?",
        "What is spatial analysis?"
      ],
      lab3: [
        "How do I get started with Google Earth Engine?",
        "What satellite data is available?",
        "How do I filter satellite images?",
        "What is NDVI and how do I calculate it?",
        "How do I export maps from Earth Engine?"
      ],
      lab4: [
        "How does AI help with programming?",
        "What is GitHub Copilot?",
        "How do I debug Earth Engine code?",
        "What are best practices for GIS programming?",
        "How do I optimize my code?"
      ],
      lab5: [
        "What is machine learning in GIS?",
        "How do I use clustering for analysis?",
        "What is K-means clustering?",
        "How do I integrate Python with GIS?",
        "How do I validate my results?"
      ]
    }

    return currentLab && labSuggestions[currentLab] 
      ? labSuggestions[currentLab] 
      : baseSuggestions
  }

  // Private helper methods

  private normalizeQuery(query: string): string[] {
    return query
      .toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter(term => term.length > 2)
      .filter(term => !this.isStopWord(term))
  }

  private isStopWord(word: string): boolean {
    const stopWords = ['the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'how', 'what', 'when', 'where', 'why', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'must', 'can']
    return stopWords.includes(word)
  }

  private calculateRelevanceScore(item: EnhancedKnowledgeItem, searchTerms: string[], originalQuery: string): number {
    let score = 0
    const queryLower = originalQuery.toLowerCase()

    // Exact phrase matches (highest weight)
    if (item.title.toLowerCase().includes(queryLower)) score += 50
    if (item.content.toLowerCase().includes(queryLower)) score += 30

    // Keyword matches
    item.keywords.forEach(keyword => {
      if (queryLower.includes(keyword.toLowerCase())) score += 25
      searchTerms.forEach(term => {
        if (keyword.toLowerCase().includes(term)) score += 15
        if (this.fuzzyMatch(keyword.toLowerCase(), term)) score += 10
      })
    })

    // Title word matches
    searchTerms.forEach(term => {
      if (item.title.toLowerCase().includes(term)) score += 20
      if (this.fuzzyMatch(item.title.toLowerCase(), term)) score += 10
    })

    // Content word matches
    searchTerms.forEach(term => {
      const contentLower = item.content.toLowerCase()
      const matches = (contentLower.match(new RegExp(term, 'g')) || []).length
      score += matches * 5
    })

    // Examples matches
    item.examples.forEach(example => {
      searchTerms.forEach(term => {
        if (example.toLowerCase().includes(term)) score += 8
      })
    })

    return score
  }

  private fuzzyMatch(str1: string, str2: string): boolean {
    if (str1.length < 3 || str2.length < 3) return false
    
    // Simple fuzzy matching - check if 80% of characters match
    const longer = str1.length > str2.length ? str1 : str2
    const shorter = str1.length > str2.length ? str2 : str1
    
    if (shorter.length === 0) return false
    
    let matches = 0
    for (let i = 0; i < shorter.length; i++) {
      if (longer.includes(shorter[i])) matches++
    }
    
    return (matches / shorter.length) >= 0.8
  }

  private determineMatchType(item: EnhancedKnowledgeItem, searchTerms: string[], score: number): 'exact' | 'fuzzy' | 'semantic' | 'related' {
    if (score > 40) return 'exact'
    if (score > 25) return 'semantic'
    if (score > 15) return 'fuzzy'
    return 'related'
  }

  private getMatchedFields(item: EnhancedKnowledgeItem, searchTerms: string[]): string[] {
    const fields: string[] = []
    
    searchTerms.forEach(term => {
      if (item.title.toLowerCase().includes(term)) fields.push('title')
      if (item.keywords.some(k => k.toLowerCase().includes(term))) fields.push('keywords')
      if (item.content.toLowerCase().includes(term)) fields.push('content')
      if (item.examples.some(e => e.toLowerCase().includes(term))) fields.push('examples')
    })
    
    return [...new Set(fields)]
  }

  private contextualScore(result: SearchResult): number {
    let contextBonus = 0
    
    // Lab relevance bonus
    if (this.context.currentLab && result.item.labRelevance.includes(this.context.currentLab as any)) {
      contextBonus += 20
    }
    
    // Difficulty matching
    if (result.item.difficulty === this.context.userExpertise) {
      contextBonus += 10
    } else if (result.item.difficulty === 'beginner' && this.context.userExpertise === 'intermediate') {
      contextBonus += 5
    }
    
    // Recent topics penalty (avoid repetition)
    if (this.context.recentTopics.includes(result.item.id)) {
      contextBonus -= 15
    }
    
    return result.score + contextBonus
  }

  private formatPrimaryResponse(result: SearchResult, query: string): string {
    const item = result.item
    let response = `# ${item.title}\n\n`
    
    // Add relevance indicator
    if (result.score > 40) {
      response += "🎯 **Highly relevant match**\n\n"
    } else if (result.score > 25) {
      response += "✅ **Good match**\n\n"
    }
    
    // Add main content (truncated if too long)
    const content = item.content.length > 1500 
      ? item.content.substring(0, 1500) + "...\n\n*[Content truncated - ask for more details if needed]*"
      : item.content
    
    response += content + "\n\n"
    
    // Add source attribution
    response += `**Source**: ${item.source}\n`
    response += `**Difficulty**: ${item.difficulty} | **Category**: ${item.category}\n\n`
    
    return response
  }

  private addLabSpecificContext(result: SearchResult, currentLab: string): string {
    if (!result.item.labRelevance.includes(currentLab as any)) {
      return ""
    }

    const labContexts: Record<string, string> = {
      lab1: "💡 **Lab 1 Context**: This is particularly relevant for basic GIS mapping and QGIS fundamentals.\n\n",
      lab2: "🏥 **Lab 2 Context**: This applies directly to healthcare accessibility analysis in Uganda.\n\n", 
      lab3: "🛰️ **Lab 3 Context**: This is essential for Google Earth Engine and malaria risk mapping.\n\n",
      lab4: "🤖 **Lab 4 Context**: This relates to AI-assisted programming and GitHub Copilot usage.\n\n",
      lab5: "📊 **Lab 5 Context**: This is relevant for machine learning and clustering analysis.\n\n"
    }

    return labContexts[currentLab] || ""
  }

  private addRelatedTopics(relatedResults: SearchResult[]): string {
    if (relatedResults.length === 0) return ""
    
    let response = "## 🔗 Related Topics\n\n"
    relatedResults.forEach(result => {
      response += `- **${result.item.title}** (${result.item.difficulty})\n`
    })
    
    return response + "\n"
  }

  private addNextSteps(result: SearchResult, expertise: string): string {
    let response = "## 📋 Next Steps\n\n"
    
    if (result.item.stepByStep && result.item.stepByStep.length > 0) {
      response += "**Recommended actions:**\n"
      result.item.stepByStep.slice(0, 3).forEach((step, index) => {
        response += `${index + 1}. ${step}\n`
      })
      response += "\n"
    }
    
    if (result.item.troubleshootingTips && result.item.troubleshootingTips.length > 0) {
      response += "**💡 Helpful tips:**\n"
      result.item.troubleshootingTips.slice(0, 2).forEach(tip => {
        response += `- ${tip}\n`
      })
      response += "\n"
    }

    // Add follow-up suggestions based on expertise
    if (expertise === 'beginner') {
      response += "*💭 Follow-up: Try asking about basic concepts or step-by-step tutorials.*\n"
    } else if (expertise === 'intermediate') {
      response += "*💭 Follow-up: Ask about advanced techniques or troubleshooting specific issues.*\n"
    } else {
      response += "*💭 Follow-up: Explore advanced applications or integration with other tools.*\n"
    }
    
    return response
  }

  private generateFallbackResponse(query: string): string {
    const fallbacks = [
      "I don't have specific information about that topic, but here are some general suggestions:",
      "I couldn't find a direct match, but let me help you with some related information:",
      "That's an interesting question! While I don't have detailed information on that specific topic, here's what I can suggest:"
    ]
    
    const randomFallback = fallbacks[Math.floor(Math.random() * fallbacks.length)]
    
    let response = `${randomFallback}\n\n`
    
    // Provide general help based on query content
    if (this.queryContains(query, ['qgis', 'software', 'interface'])) {
      response += "- Try asking about QGIS basics, interface elements, or specific tools\n"
      response += "- Check the QGIS documentation or tutorials\n"
      response += "- Ask about specific errors or problems you're encountering\n\n"
    } else if (this.queryContains(query, ['earth engine', 'gee', 'satellite', 'remote sensing'])) {
      response += "- Try asking about Google Earth Engine basics or specific functions\n"
      response += "- Check the Earth Engine documentation and community tutorials\n"
      response += "- Ask about specific datasets or analysis techniques\n\n"
    } else if (this.queryContains(query, ['analysis', 'spatial', 'statistics'])) {
      response += "- Try asking about spatial analysis concepts or specific methods\n"
      response += "- Ask about pattern analysis, clustering, or correlation\n"
      response += "- Check resources on spatial statistics and methodology\n\n"
    } else {
      response += "- Try rephrasing your question with more specific terms\n"
      response += "- Ask about GIS basics, QGIS, Google Earth Engine, or spatial analysis\n"
      response += "- Specify which lab or topic you're working on\n\n"
    }
    
    response += "**💡 Tip**: Try asking questions like:\n"
    response += "- 'How do I [specific task] in QGIS?'\n"
    response += "- 'What is [concept] and how does it work?'\n"
    response += "- 'I'm getting [error message], how do I fix it?'\n"
    
    return response
  }

  private queryContains(query: string, terms: string[]): boolean {
    const queryLower = query.toLowerCase()
    return terms.some(term => queryLower.includes(term))
  }

  private updateContext(context: Partial<ConversationContext>): void {
    this.context = { ...this.context, ...context }
    
    // Update recent topics (keep last 5)
    if (context.recentTopics) {
      this.context.recentTopics = [...context.recentTopics, ...this.context.recentTopics].slice(0, 5)
    }
  }
}

// Export singleton instance
export const enhancedAI = new EnhancedAIService() 