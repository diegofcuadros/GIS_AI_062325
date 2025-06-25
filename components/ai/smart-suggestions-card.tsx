'use client'

import * as React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import { 
  Brain, 
  BookOpen, 
  AlertCircle, 
  TrendingUp, 
  Clock, 
  Target, 
  Lightbulb,
  ChevronRight,
  Sparkles
} from 'lucide-react'

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
  actionQuery: string
}

export interface UserProgress {
  currentLab: string
  completedConcepts: string[]
  totalConcepts: number
  masteredTopics: string[]
  strugglingWith: string[]
  confidenceLevel: number
}

interface SmartSuggestionsCardProps {
  suggestions: SmartSuggestion[]
  onSuggestionSelect: (suggestion: SmartSuggestion) => void
  userProgress?: UserProgress
  className?: string
  maxSuggestions?: number
  showProgress?: boolean
}

// Suggestion type styling and icons
const suggestionTypeConfig = {
  conceptual: {
    icon: Brain,
    label: 'Concept',
    className: 'border-blue-200 bg-blue-50',
    badgeColor: 'bg-blue-100 text-blue-700',
    headerColor: 'text-blue-700'
  },
  procedural: {
    icon: Target,
    label: 'Step-by-step',
    className: 'border-green-200 bg-green-50',
    badgeColor: 'bg-green-100 text-green-700',
    headerColor: 'text-green-700'
  },
  troubleshooting: {
    icon: AlertCircle,
    label: 'Help',
    className: 'border-red-200 bg-red-50',
    badgeColor: 'bg-red-100 text-red-700',
    headerColor: 'text-red-700'
  },
  progressive: {
    icon: TrendingUp,
    label: 'Next Level',
    className: 'border-purple-200 bg-purple-50',
    badgeColor: 'bg-purple-100 text-purple-700',
    headerColor: 'text-purple-700'
  }
}

// Difficulty level styling
const difficultyConfig = {
  beginner: { color: 'bg-green-100 text-green-700', label: 'Beginner' },
  intermediate: { color: 'bg-yellow-100 text-yellow-700', label: 'Intermediate' },
  advanced: { color: 'bg-red-100 text-red-700', label: 'Advanced' }
}

export function SmartSuggestionsCard({
  suggestions,
  onSuggestionSelect,
  userProgress,
  className,
  maxSuggestions = 6,
  showProgress = true
}: SmartSuggestionsCardProps) {
  const [selectedType, setSelectedType] = React.useState<string | null>(null)
  
  if (suggestions.length === 0) {
    return null
  }

  // Filter and sort suggestions
  const filteredSuggestions = suggestions
    .filter(s => selectedType ? s.type === selectedType : true)
    .sort((a, b) => b.priority - a.priority)
    .slice(0, maxSuggestions)

  // Get unique suggestion types for filtering
  const availableTypes = [...new Set(suggestions.map(s => s.type))]

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Sparkles className="h-5 w-5 text-primary" />
            Smart Suggestions
          </CardTitle>
          <Badge variant="secondary" className="text-xs">
            {suggestions.length} available
          </Badge>
        </div>
        
        {/* Progress indicator */}
        {showProgress && userProgress && (
          <div className="mt-3 p-3 bg-muted/50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Learning Progress</span>
              <span className="text-xs text-muted-foreground">
                {userProgress.completedConcepts.length} / {userProgress.totalConcepts} concepts
              </span>
            </div>
            <Progress 
              value={(userProgress.completedConcepts.length / userProgress.totalConcepts) * 100} 
              className="h-2"
            />
            <div className="flex justify-between mt-2 text-xs text-muted-foreground">
              <span>Confidence: {Math.round(userProgress.confidenceLevel * 100)}%</span>
              <span>Lab: {userProgress.currentLab}</span>
            </div>
          </div>
        )}

        {/* Type filters */}
        {availableTypes.length > 1 && (
          <div className="flex flex-wrap gap-2 mt-3">
            <Button
              size="sm"
              variant={selectedType === null ? "default" : "outline"}
              onClick={() => setSelectedType(null)}
              className="h-7 text-xs"
            >
              All ({suggestions.length})
            </Button>
            {availableTypes.map(type => {
              const config = suggestionTypeConfig[type as keyof typeof suggestionTypeConfig]
              const count = suggestions.filter(s => s.type === type).length
              
              return (
                <Button
                  key={type}
                  size="sm"
                  variant={selectedType === type ? "default" : "outline"}
                  onClick={() => setSelectedType(selectedType === type ? null : type)}
                  className="h-7 text-xs"
                >
                  <config.icon className="h-3 w-3 mr-1" />
                  {config.label} ({count})
                </Button>
              )
            })}
          </div>
        )}
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-3">
          {filteredSuggestions.map((suggestion) => {
            const typeConfig = suggestionTypeConfig[suggestion.type]
            const difficultyStyle = difficultyConfig[suggestion.difficulty]
            const IconComponent = typeConfig.icon

            return (
              <div
                key={suggestion.id}
                className={cn(
                  "border rounded-lg p-4 transition-all duration-200 hover:shadow-md cursor-pointer",
                  typeConfig.className
                )}
                onClick={() => onSuggestionSelect(suggestion)}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <IconComponent className={cn("h-4 w-4", typeConfig.headerColor)} />
                    <h4 className="font-medium text-sm">{suggestion.title}</h4>
                  </div>
                  <div className="flex items-center gap-1">
                    <Badge variant="secondary" className={cn("text-xs", difficultyStyle.color)}>
                      {difficultyStyle.label}
                    </Badge>
                    <ChevronRight className="h-3 w-3 text-muted-foreground" />
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {suggestion.description}
                </p>

                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {suggestion.estimatedTime}
                    </span>
                    
                    {suggestion.lab && (
                      <Badge variant="outline" className="text-xs">
                        {suggestion.lab}
                      </Badge>
                    )}
                    
                    <span className="text-muted-foreground">
                      {Math.round(suggestion.confidence * 100)}% confidence
                    </span>
                  </div>

                  {/* Priority indicator */}
                  {suggestion.priority >= 8 && (
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 text-xs">
                      High Priority
                    </Badge>
                  )}
                </div>

                {/* Related concepts */}
                {suggestion.relatedConcepts.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {suggestion.relatedConcepts.slice(0, 3).map(concept => (
                      <Badge key={concept} variant="outline" className="text-xs">
                        {concept}
                      </Badge>
                    ))}
                    {suggestion.relatedConcepts.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{suggestion.relatedConcepts.length - 3} more
                      </Badge>
                    )}
                  </div>
                )}

                {/* Prerequisites warning */}
                {suggestion.prerequisites && suggestion.prerequisites.length > 0 && (
                  <div className="mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded text-xs">
                    <span className="font-medium text-yellow-700">Prerequisites: </span>
                    <span className="text-yellow-600">
                      {suggestion.prerequisites.join(', ')}
                    </span>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Show more button if there are more suggestions */}
        {suggestions.length > maxSuggestions && (
          <div className="mt-4 text-center">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => {/* Implement show more logic */}}
              className="text-xs"
            >
              Show {Math.min(maxSuggestions, suggestions.length - maxSuggestions)} more suggestions
            </Button>
          </div>
        )}

        {/* Empty state for filtered results */}
        {filteredSuggestions.length === 0 && selectedType && (
          <div className="text-center py-8">
            <AlertCircle className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">
              No {selectedType} suggestions available right now.
            </p>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setSelectedType(null)}
              className="mt-2"
            >
              Show all suggestions
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

// Compact version for smaller spaces
export function SmartSuggestionsCompact({
  suggestions,
  onSuggestionSelect,
  maxItems = 3,
  className
}: {
  suggestions: SmartSuggestion[]
  onSuggestionSelect: (suggestion: SmartSuggestion) => void
  maxItems?: number
  className?: string
}) {
  const topSuggestions = suggestions
    .sort((a, b) => b.priority - a.priority)
    .slice(0, maxItems)

  if (topSuggestions.length === 0) {
    return null
  }

  return (
    <div className={cn("space-y-2", className)}>
      <h4 className="text-sm font-medium text-muted-foreground flex items-center gap-2">
        <Lightbulb className="h-4 w-4" />
        Suggestions for you
      </h4>
      
      {topSuggestions.map(suggestion => {
        const typeConfig = suggestionTypeConfig[suggestion.type]
        
        return (
          <Button
            key={suggestion.id}
            variant="outline"
            size="sm"
            onClick={() => onSuggestionSelect(suggestion)}
            className="w-full justify-start h-auto p-3 text-left"
          >
            <div className="flex items-start gap-2 w-full">
              <typeConfig.icon className={cn("h-4 w-4 mt-0.5 flex-shrink-0", typeConfig.headerColor)} />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm truncate">{suggestion.title}</div>
                <div className="text-xs text-muted-foreground mt-0.5 flex items-center gap-2">
                  <span>{suggestion.estimatedTime}</span>
                  <Badge variant="outline" className="text-xs">
                    {suggestion.difficulty}
                  </Badge>
                </div>
              </div>
            </div>
          </Button>
        )
      })}
      
      {suggestions.length > maxItems && (
        <p className="text-xs text-muted-foreground text-center">
          +{suggestions.length - maxItems} more suggestions available
        </p>
      )}
    </div>
  )
} 