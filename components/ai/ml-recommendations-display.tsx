'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Lightbulb, Brain, TrendingUp, AlertCircle, BookOpen, Target } from 'lucide-react'
import { ContentSimilarityMatch, PredictiveAssistance } from '@/lib/ml-recommendation-service'

interface MLRecommendationsDisplayProps {
  similarContent: ContentSimilarityMatch[]
  predictiveAssistance: PredictiveAssistance
  onContentSelect: (content: ContentSimilarityMatch) => void
  onQuestionSelect: (question: string) => void
  className?: string
}

export function MLRecommendationsDisplay({
  similarContent,
  predictiveAssistance,
  onContentSelect,
  onQuestionSelect,
  className = ''
}: MLRecommendationsDisplayProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800'
      case 'intermediate': return 'bg-yellow-100 text-yellow-800'
      case 'advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'concept': return <Brain className="w-4 h-4" />
      case 'tutorial': return <BookOpen className="w-4 h-4" />
      case 'troubleshooting': return <AlertCircle className="w-4 h-4" />
      default: return <Target className="w-4 h-4" />
    }
  }

  const formatSimilarity = (similarity: number) => {
    return `${Math.round(similarity * 100)}%`
  }

  const formatConfidence = (confidence: number) => {
    return `${Math.round(confidence * 100)}%`
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Similar Content Section */}
      {similarContent.length > 0 && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Brain className="w-5 h-5 text-purple-600" />
              Similar Content
              <Badge variant="outline" className="ml-2">
                ML-Powered
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {similarContent.slice(0, 4).map((content) => (
                <div
                  key={content.id}
                  className="border rounded-lg p-3 hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => onContentSelect(content)}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        {getTypeIcon(content.type)}
                        <h4 className="font-medium text-sm">{content.title}</h4>
                        <Badge variant="outline" className={`text-xs ${getDifficultyColor(content.difficulty)}`}>
                          {content.difficulty}
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">
                        Relevant to: {content.relevantLabs.join(', ')}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-medium text-purple-600">
                        {formatSimilarity(content.similarity)} match
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Predictive Assistance Section */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            Predictive Assistance
            <Badge variant="outline" className="ml-2">
              {formatConfidence(predictiveAssistance.confidence)} confidence
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Next Concepts */}
          {predictiveAssistance.nextConcepts.length > 0 && (
            <div>
              <h4 className="font-medium text-sm mb-2 flex items-center gap-1">
                <Lightbulb className="w-4 h-4 text-yellow-500" />
                Next Concepts to Learn
              </h4>
              <div className="flex flex-wrap gap-2">
                {predictiveAssistance.nextConcepts.map((concept, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {concept}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Likely Questions */}
          {predictiveAssistance.likelyQuestions.length > 0 && (
            <div>
              <h4 className="font-medium text-sm mb-2 flex items-center gap-1">
                <Brain className="w-4 h-4 text-blue-500" />
                Questions You Might Ask
              </h4>
              <div className="space-y-1">
                {predictiveAssistance.likelyQuestions.slice(0, 3).map((question, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className="h-auto p-2 text-left justify-start text-xs hover:bg-blue-50"
                    onClick={() => onQuestionSelect(question)}
                  >
                    <span className="text-blue-600 mr-2">Q:</span>
                    {question}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Anticipated Problems */}
          {predictiveAssistance.anticipatedProblems.length > 0 && (
            <div>
              <h4 className="font-medium text-sm mb-2 flex items-center gap-1">
                <AlertCircle className="w-4 h-4 text-orange-500" />
                Potential Issues to Watch For
              </h4>
              <div className="space-y-1">
                {predictiveAssistance.anticipatedProblems.slice(0, 3).map((problem, index) => (
                  <div key={index} className="text-xs text-orange-700 bg-orange-50 p-2 rounded">
                    • {problem}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recommended Resources */}
          {predictiveAssistance.recommendedResources.length > 0 && (
            <div>
              <h4 className="font-medium text-sm mb-2 flex items-center gap-1">
                <BookOpen className="w-4 h-4 text-green-500" />
                Recommended Resources
              </h4>
              <div className="space-y-2">
                {predictiveAssistance.recommendedResources.slice(0, 3).map((resource) => (
                  <div
                    key={resource.id}
                    className="text-xs p-2 border rounded hover:bg-gray-50 cursor-pointer transition-colors"
                    onClick={() => onContentSelect(resource)}
                  >
                    <div className="flex items-center gap-2">
                      {getTypeIcon(resource.type)}
                      <span className="font-medium">{resource.title}</span>
                                             <Badge variant="outline" className={`text-xs ${getDifficultyColor(resource.difficulty)}`}>
                         {resource.difficulty}
                       </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Learning Progress Indicator */}
      <Card className="bg-gradient-to-r from-purple-50 to-blue-50">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white rounded-full">
              <Brain className="w-5 h-5 text-purple-600" />
            </div>
            <div>
                              <h4 className="font-medium text-sm">AI Assistant</h4>
              <p className="text-xs text-gray-600">
                Recommendations improve as you interact more with the system
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default MLRecommendationsDisplay 