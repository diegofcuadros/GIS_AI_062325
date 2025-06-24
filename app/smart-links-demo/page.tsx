'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Search, BookOpen, Link, Quote, Zap, ArrowRight } from 'lucide-react'
import { smartLinkService, SmartLink, CitationInfo, LinkContext } from '@/lib/smart-link-service'
import { SmartLinksDisplay } from '@/components/ai/smart-links-display'

export default function SmartLinksDemo() {
  const [query, setQuery] = useState("")
  const [currentLab, setCurrentLab] = useState("general")
  const [links, setLinks] = useState<SmartLink[]>([])
  const [citations, setCitations] = useState<CitationInfo[]>([])
  const [relatedContent, setRelatedContent] = useState<SmartLink[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = async () => {
    if (!query.trim()) return
    
    setIsLoading(true)
    
    try {
      const context: LinkContext = {
        currentLab: currentLab === "general" ? undefined : currentLab,
        userQuery: query,
        relatedConcepts: extractConcepts(query),
        difficulty: 'beginner'
      }
      
      const generatedLinks = smartLinkService.generateContextualLinks(query, context)
      setLinks(generatedLinks)
      
      const generatedCitations = smartLinkService.extractCitationsFromText(query)
      setCitations(generatedCitations)
      
      const generatedRelated = currentLab !== "general" 
        ? smartLinkService.getRelatedContentSuggestions(currentLab)
        : []
      setRelatedContent(generatedRelated)
      
    } catch (error) {
      console.error('Error generating smart links:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const extractConcepts = (text: string): string[] => {
    const concepts = []
    const lowerText = text.toLowerCase()
    
    if (lowerText.includes('qgis')) concepts.push('qgis')
    if (lowerText.includes('buffer')) concepts.push('buffer analysis')
    if (lowerText.includes('coordinate') || lowerText.includes('crs')) concepts.push('coordinate systems')
    if (lowerText.includes('earth engine') || lowerText.includes('gee')) concepts.push('google earth engine')
    
    return concepts
  }

  const exampleQueries = [
    "How do I create buffer zones in QGIS?",
    "What is a coordinate reference system?",
    "Google Earth Engine authentication issues",
    "Spatial queries in health analysis [^1] [^18]"
  ]

  const labOptions = [
    { value: "general", label: "General" },
    { value: "lab1", label: "Lab 1: QGIS Fundamentals" },
    { value: "lab2", label: "Lab 2: Health Facility Analysis" },
    { value: "lab3", label: "Lab 3: Environmental Risk Mapping" },
    { value: "lab4", label: "Lab 4: AI-Assisted Programming" },
    { value: "lab5", label: "Lab 5: Malaria Risk Clustering" }
  ]

  const demoFeatures = [
    {
      icon: <Link className="h-5 w-5" />,
      title: "Dynamic Link Creation",
      description: "Auto-generates contextual links based on user queries and current lab context"
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Deep Linking",
      description: "Creates direct links to specific sections: /labs/lab1#importing-health-data"
    },
    {
      icon: <Quote className="h-5 w-5" />,
      title: "Citation Integration",
      description: "Extracts and resolves academic citations like [^1] and [^18] references"
    },
    {
      icon: <ArrowRight className="h-5 w-5" />,
      title: "Related Content Suggestions",
      description: "Suggests logical next steps: 'You might also need Lab 2 Health Facility Analysis'"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">
          Smart Link Generation Demo
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Experience intelligent contextual navigation, deep linking, and academic citation integration 
          for the GIS AI Health workshop platform.
        </p>
      </div>

      {/* Features Overview */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {demoFeatures.map((feature, index) => (
          <Card key={index} className="text-center">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-3 text-primary">
                {feature.icon}
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="demo" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="demo">Interactive Demo</TabsTrigger>
          <TabsTrigger value="examples">Example Queries</TabsTrigger>
        </TabsList>

        <TabsContent value="demo" className="space-y-6">
          {/* Search Interface */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Test Smart Link Generation
              </CardTitle>
              <CardDescription>
                Enter a query to see how the system generates contextual links, citations, and suggestions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <Input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Ask about GIS concepts, lab procedures, or use citation references [^1]..."
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                </div>
                <Select value={currentLab} onValueChange={setCurrentLab}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {labOptions.map(option => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button onClick={handleSearch} disabled={isLoading || !query.trim()}>
                  {isLoading ? "Generating..." : "Generate Links"}
                </Button>
              </div>

              {/* Quick example buttons */}
              <div className="flex flex-wrap gap-2">
                {exampleQueries.slice(0, 4).map((example, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => setQuery(example)}
                    className="text-xs"
                  >
                    {example}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Results Display */}
          {(links.length > 0 || citations.length > 0 || relatedContent.length > 0) && (
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <SmartLinksDisplay
                  links={links}
                  citations={citations}
                  relatedContent={relatedContent}
                />
              </div>
              
              {/* Analytics Panel */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Generation Analytics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Contextual Links:</span>
                      <Badge variant="secondary">{links.length}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Citations Found:</span>
                      <Badge variant="secondary">{citations.length}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Related Content:</span>
                      <Badge variant="secondary">{relatedContent.length}</Badge>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h4 className="text-sm font-medium mb-2">Current Context</h4>
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <div>Lab: {currentLab}</div>
                      <div>Query: "{query.substring(0, 30)}{query.length > 30 ? '...' : ''}"</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Help Text */}
          {links.length === 0 && citations.length === 0 && relatedContent.length === 0 && !isLoading && (
            <Card className="border-dashed">
              <CardContent className="text-center py-8">
                <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Ready to Generate Smart Links</h3>
                <p className="text-muted-foreground mb-4">
                  Enter a query above to see contextual links, citations, and related content suggestions in action.
                </p>
                <p className="text-sm text-muted-foreground">
                  Try queries with citation references like [^1] or [^18] to see citation resolution!
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Example Queries & Expected Results</CardTitle>
              <CardDescription>
                Explore different types of queries and see what smart links would be generated
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {exampleQueries.map((example, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium">Query {index + 1}</h4>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setQuery(example)
                          // Auto-switch to demo tab
                          const demoTab = document.querySelector('[value="demo"]') as HTMLElement
                          demoTab?.click()
                        }}
                      >
                        Try This Query
                      </Button>
                    </div>
                    <p className="text-sm bg-muted p-3 rounded font-mono mb-3">
                      {example}
                    </p>
                    <div className="text-xs text-muted-foreground">
                      <strong>Expected Results:</strong> {getExpectedResults(example)}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function getExpectedResults(query: string): string {
  if (query.includes('buffer')) {
    return "Deep links to Lab 2 buffer analysis, related spatial query tutorials, academic citations on accessibility analysis"
  } else if (query.includes('coordinate')) {
    return "Links to CRS fundamentals, Uganda-specific projections (UTM 36N), troubleshooting guides"
  } else if (query.includes('Earth Engine')) {
    return "Authentication guides, JavaScript basics, NDVI calculation tutorials, AI programming assistance"
  } else if (query.includes('clustering')) {
    return "K-means theory, risk assessment applications, machine learning in GIS, malaria mapping examples"
  } else if (query.includes('[^')) {
    return "Academic citation resolution, external journal links, related research papers, methodological references"
  } else if (query.includes('CSV')) {
    return "Data import procedures, table joining workflows, troubleshooting guides, next-step suggestions"
  } else if (query.includes('NDVI')) {
    return "Vegetation index theory, satellite data access, health applications, calculation procedures"
  }
  return "Contextual links based on query content, related lab sections, suggested next steps"
} 