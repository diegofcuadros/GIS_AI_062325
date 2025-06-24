'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Brain, Search, TrendingUp, Lightbulb, RefreshCw } from 'lucide-react'
import { mlRecommendationService, ContentSimilarityMatch, PredictiveAssistance } from '@/lib/ml-recommendation-service'
import MLRecommendationsDisplay from '@/components/ai/ml-recommendations-display'

export default function MLRecommendationsDemo() {
  const [query, setQuery] = useState('')
  const [similarContent, setSimilarContent] = useState<ContentSimilarityMatch[]>([])
  const [predictiveAssistance, setPredictiveAssistance] = useState<PredictiveAssistance | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [userContext, setUserContext] = useState({
    currentLab: 'lab1',
    currentSection: 'data-import',
    difficulty: 'beginner',
    timeInSession: 300,
    userId: 'demo-user'
  })

  const sampleQueries = [
    "How do I import CSV data into QGIS?",
    "What is buffer analysis and how to use it?",
    "Google Earth Engine authentication problems",
    "Machine learning clustering for malaria risk",
    "Coordinate system errors in QGIS",
    "NDVI calculation with satellite data"
  ]

  useEffect(() => {
    handleGenerateRecommendations()
  }, [])

  const handleSearch = () => {
    if (!query.trim()) return
    setIsLoading(true)
    
    setTimeout(() => {
      const content = mlRecommendationService.findSimilarContent(query, userContext)
      setSimilarContent(content)

      const predictions = mlRecommendationService.generatePredictiveAssistance(userContext, query)
      setPredictiveAssistance(predictions)

      mlRecommendationService.trackInteraction(userContext.userId, {
        query,
        userContext,
        wasHelpful: true
      })

      setIsLoading(false)
    }, 800)
  }

  const handleGenerateRecommendations = () => {
    setIsLoading(true)
    
    setTimeout(() => {
      const predictions = mlRecommendationService.generatePredictiveAssistance(userContext)
      setPredictiveAssistance(predictions)

      const personalizedContent = mlRecommendationService.getPersonalizedRecommendations(userContext.userId, userContext)
      setSimilarContent(personalizedContent)

      setIsLoading(false)
    }, 600)
  }

  const handleSampleQuery = (sampleQuery: string) => {
    setQuery(sampleQuery)
    setTimeout(() => handleSearch(), 100)
  }

  const handleContentSelect = (content: ContentSimilarityMatch) => {
    alert(`Selected: ${content.title}\nType: ${content.type}\nDifficulty: ${content.difficulty}\nSimilarity: ${Math.round(content.similarity * 100)}%`)
  }

  const handleQuestionSelect = (question: string) => {
    setQuery(question)
    handleSearch()
  }

  const updateContext = (key: string, value: string) => {
    setUserContext(prev => ({ ...prev, [key]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-purple-600 text-white rounded-full">
              <Brain className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              ML-Powered Recommendations
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Advanced machine learning algorithms provide content similarity matching and predictive assistance for your GIS learning journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-5 h-5" />
                Content Similarity Search
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask a question about GIS, QGIS, or Google Earth Engine..."
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="flex-1"
                />
                <Button onClick={handleSearch} disabled={!query.trim() || isLoading}>
                  {isLoading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                  Search
                </Button>
              </div>

              <div>
                <p className="text-sm font-medium mb-2">Try these sample queries:</p>
                <div className="flex flex-wrap gap-2">
                  {sampleQueries.map((sampleQuery, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleSampleQuery(sampleQuery)}
                      className="text-xs"
                    >
                      {sampleQuery}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4">
                <p className="text-sm font-medium mb-3">User Context (affects recommendations):</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div>
                    <label className="text-xs text-gray-600">Current Lab</label>
                    <select 
                      className="w-full p-2 border rounded text-sm"
                      value={userContext.currentLab}
                      onChange={(e) => updateContext('currentLab', e.target.value)}
                    >
                      <option value="lab1">Lab 1 - QGIS Basics</option>
                      <option value="lab2">Lab 2 - Spatial Analysis</option>
                      <option value="lab3">Lab 3 - Earth Engine</option>
                      <option value="lab4">Lab 4 - AI Programming</option>
                      <option value="lab5">Lab 5 - ML Clustering</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-gray-600">Difficulty</label>
                    <select 
                      className="w-full p-2 border rounded text-sm"
                      value={userContext.difficulty}
                      onChange={(e) => updateContext('difficulty', e.target.value)}
                    >
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-gray-600">Section</label>
                    <Input
                      value={userContext.currentSection}
                      onChange={(e) => updateContext('currentSection', e.target.value)}
                      className="text-sm"
                      placeholder="e.g., data-import"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-600">Session Time (min)</label>
                    <Input
                      type="number"
                      value={Math.round(userContext.timeInSession / 60)}
                      onChange={(e) => updateContext('timeInSession', (parseInt(e.target.value) * 60).toString())}
                      className="text-sm"
                      min="0"
                    />
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleGenerateRecommendations}
                  className="mt-3"
                  disabled={isLoading}
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Regenerate Predictions
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="recommendations" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="recommendations" className="flex items-center gap-2">
                <Brain className="w-4 h-4" />
                ML Recommendations
              </TabsTrigger>
              <TabsTrigger value="analytics" className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Analytics
              </TabsTrigger>
            </TabsList>

            <TabsContent value="recommendations" className="space-y-6">
              {isLoading ? (
                <Card>
                  <CardContent className="flex items-center justify-center py-12">
                    <RefreshCw className="w-6 h-6 animate-spin mr-2" />
                    <span>Generating ML-powered recommendations...</span>
                  </CardContent>
                </Card>
              ) : (
                <MLRecommendationsDisplay
                  similarContent={similarContent}
                  predictiveAssistance={predictiveAssistance || {
                    nextConcepts: [],
                    likelyQuestions: [],
                    anticipatedProblems: [],
                    recommendedResources: [],
                    confidence: 0
                  }}
                  onContentSelect={handleContentSelect}
                  onQuestionSelect={handleQuestionSelect}
                />
              )}
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Content Database</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Total Items</span>
                        <Badge variant="outline">10</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Concepts</span>
                        <Badge variant="outline">4</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Tutorials</span>
                        <Badge variant="outline">3</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Troubleshooting</span>
                        <Badge variant="outline">3</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">ML Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Prediction Confidence</span>
                        <Badge variant="outline">
                          {predictiveAssistance ? `${Math.round(predictiveAssistance.confidence * 100)}%` : '50%'}
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Similarity Algorithm</span>
                        <Badge variant="outline">Cosine</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Vector Dimensions</span>
                        <Badge variant="outline">36</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Context Boosting</span>
                        <Badge variant="outline">Active</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">User Context</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Current Lab</span>
                        <Badge variant="outline">{userContext.currentLab}</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Difficulty</span>
                        <Badge variant="outline">{userContext.difficulty}</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Session Time</span>
                        <Badge variant="outline">{Math.round(userContext.timeInSession / 60)}m</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Learning Pattern</span>
                        <Badge variant="outline">Adaptive</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" />
                    How ML Recommendations Work
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Content Similarity Matching</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Keyword-based vector generation</li>
                        <li>• Cosine similarity calculation</li>
                        <li>• Contextual boosting algorithms</li>
                        <li>• Lab and difficulty relevance scoring</li>
                        <li>• Real-time content ranking</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Predictive Assistance</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Learning progression analysis</li>
                        <li>• Question pattern recognition</li>
                        <li>• Problem anticipation modeling</li>
                        <li>• Personalized resource recommendations</li>
                        <li>• Confidence scoring algorithms</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
} 