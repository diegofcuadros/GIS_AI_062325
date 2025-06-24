import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  Bot, 
  Sparkles, 
  BookOpen, 
  Search, 
  Lightbulb,
  Code,
  Globe,
  MapPin,
  BarChart3,
  Wrench,
  Heart,
  ArrowRight,
  CheckCircle2,
  Star,
  Zap,
  Target,
  Brain,
  Layers
} from "lucide-react"

export default function ChatbotDemoPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Bot className="h-8 w-8 text-primary" />
          <Sparkles className="h-6 w-6 text-accent" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Enhanced GIS Learning Assistant
          </h1>
        </div>
        <p className="text-xl text-muted-foreground mb-4">
          Phase 3: Advanced Knowledge Base & Context-Aware AI
        </p>
        <Badge variant="secondary" className="text-sm px-4 py-1">
          🎯 Comprehensive Expansion Knowledge Integration
        </Badge>
      </div>

      {/* Phase 3 Features Overview */}
      <Card className="mb-8 border-2 border-primary/20">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Zap className="h-6 w-6 text-primary" />
            <CardTitle>🚀 Phase 3 Enhancements</CardTitle>
          </div>
          <CardDescription>
            Advanced AI features with comprehensive knowledge integration from educational sources
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-primary/5">
              <Brain className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-semibold mb-2">Enhanced Knowledge Base</h3>
              <p className="text-sm text-muted-foreground">
                Integrated content from QGIS tutorials, Google Earth Engine community, spatial analysis textbooks, and GIS workshops.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-accent/5">
              <Target className="h-8 w-8 text-accent mb-2" />
              <h3 className="font-semibold mb-2">Context-Aware Responses</h3>
              <p className="text-sm text-muted-foreground">
                Smart detection of current lab context and difficulty-appropriate responses with fuzzy matching search.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-green-500/5">
              <Wrench className="h-8 w-8 text-green-600 mb-2" />
              <h3 className="font-semibold mb-2">Advanced Troubleshooting</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive problem-solving guides, step-by-step procedures, and expert tips from multiple sources.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="knowledge" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="knowledge">📚 Knowledge</TabsTrigger>
          <TabsTrigger value="context">🎯 Context</TabsTrigger>
          <TabsTrigger value="examples">💡 Examples</TabsTrigger>
          <TabsTrigger value="troubleshooting">🔧 Help</TabsTrigger>
          <TabsTrigger value="test">🧪 Test</TabsTrigger>
        </TabsList>

        {/* Enhanced Knowledge Base */}
        <TabsContent value="knowledge">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5" />
                <span>Comprehensive Knowledge Integration</span>
              </CardTitle>
              <CardDescription>
                Content sourced from leading GIS educational resources
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 flex items-center space-x-2">
                    <Layers className="h-5 w-5 text-blue-600" />
                    <span>Knowledge Sources</span>
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <span className="text-sm"><strong>QGIS Tutor Documentation</strong> - Official tutorials and gentle GIS introduction</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <span className="text-sm"><strong>Google Earth Engine Community</strong> - Comprehensive JavaScript & Python tutorials</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <span className="text-sm"><strong>Spatial Analysis Textbook</strong> - Advanced statistical methods and theory</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <span className="text-sm"><strong>UMass GIS Workshops</strong> - Practical hands-on procedures</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5 text-purple-600" />
                    <span>Knowledge Categories</span>
                  </h3>
                  <div className="space-y-2">
                    <Badge variant="outline">🎯 GIS Fundamentals</Badge>
                    <Badge variant="outline">🗺️ QGIS Complete Guide</Badge>
                    <Badge variant="outline">🛰️ Google Earth Engine</Badge>
                    <Badge variant="outline">📊 Spatial Analysis</Badge>
                    <Badge variant="outline">🏥 Health GIS Applications</Badge>
                    <Badge variant="outline">🔧 Troubleshooting</Badge>
                    <Badge variant="outline">📈 Data Types & Methods</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Context-Aware Features */}
        <TabsContent value="context">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5" />
                <span>Smart Context Detection</span>
              </CardTitle>
              <CardDescription>
                AI automatically adapts responses based on your current lab and experience level
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">🎯 Lab Context Detection</h3>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-blue-50 border-l-4 border-blue-400">
                      <p className="font-medium text-blue-900">Lab 1: GIS Fundamentals</p>
                      <p className="text-sm text-blue-700">QGIS basics, data loading, map creation</p>
                    </div>
                    <div className="p-3 rounded-lg bg-green-50 border-l-4 border-green-400">
                      <p className="font-medium text-green-900">Lab 2: Healthcare Access</p>
                      <p className="text-sm text-green-700">Spatial analysis, buffer zones, Uganda case study</p>
                    </div>
                    <div className="p-3 rounded-lg bg-purple-50 border-l-4 border-purple-400">
                      <p className="font-medium text-purple-900">Lab 3: Earth Engine</p>
                      <p className="text-sm text-purple-700">Satellite imagery, NDVI, malaria mapping</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">🧠 Adaptive Intelligence</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      <span className="text-sm">Difficulty-appropriate explanations</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      <span className="text-sm">Lab-specific examples and tips</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      <span className="text-sm">Fuzzy matching for typos</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      <span className="text-sm">Related topics suggestions</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      <span className="text-sm">Progressive learning guidance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Examples */}
        <TabsContent value="examples">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lightbulb className="h-5 w-5" />
                <span>Try These Enhanced Queries</span>
              </CardTitle>
              <CardDescription>
                Test the advanced knowledge base with these example questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg border">
                  <h4 className="font-semibold mb-2 text-blue-600">🎯 Fundamentals</h4>
                  <ul className="space-y-1 text-sm">
                    <li>"What is GIS and why is it revolutionary?"</li>
                    <li>"Vector vs raster data models explained"</li>
                    <li>"What makes spatial analysis different from regular analysis?"</li>
                    <li>"Object vs field view of the world"</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border">
                  <h4 className="font-semibold mb-2 text-green-600">🗺️ QGIS</h4>
                  <ul className="space-y-1 text-sm">
                    <li>"Complete QGIS interface guide"</li>
                    <li>"How to fix coordinate system issues?"</li>
                    <li>"QGIS crashes or freezes"</li>
                    <li>"Layer won't load in QGIS"</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border">
                  <h4 className="font-semibold mb-2 text-purple-600">🛰️ Earth Engine</h4>
                  <ul className="space-y-1 text-sm">
                    <li>"Google Earth Engine comprehensive intro"</li>
                    <li>"JavaScript vs Python APIs"</li>
                    <li>"Code won't run in Earth Engine"</li>
                    <li>"How to work with satellite imagery?"</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border">
                  <h4 className="font-semibold mb-2 text-orange-600">📊 Analysis</h4>
                  <ul className="space-y-1 text-sm">
                    <li>"Spatial analysis from patterns to processes"</li>
                    <li>"What is spatial autocorrelation?"</li>
                    <li>"How to detect spatial clusters?"</li>
                    <li>"Scale and resolution in GIS"</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border">
                  <h4 className="font-semibold mb-2 text-red-600">🏥 Health GIS</h4>
                  <ul className="space-y-1 text-sm">
                    <li>"Healthcare accessibility analysis"</li>
                    <li>"Disease outbreak mapping"</li>
                    <li>"Environmental health applications"</li>
                    <li>"Vector habitat modeling"</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border">
                  <h4 className="font-semibold mb-2 text-gray-600">🔧 Troubleshooting</h4>
                  <ul className="space-y-1 text-sm">
                    <li>"Common GIS problems and solutions"</li>
                    <li>"Data quality issues"</li>
                    <li>"Performance optimization"</li>
                    <li>"Getting help when stuck"</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Troubleshooting */}
        <TabsContent value="troubleshooting">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Wrench className="h-5 w-5" />
                <span>Advanced Problem Solving</span>
              </CardTitle>
              <CardDescription>
                Comprehensive troubleshooting with step-by-step guidance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Alert>
                  <Lightbulb className="h-4 w-4" />
                  <AlertDescription>
                    The enhanced knowledge base includes troubleshooting guides extracted from official documentation, community forums, and expert experience.
                  </AlertDescription>
                </Alert>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-3">🔍 Problem Categories</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Data loading and projection issues</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span className="text-sm">QGIS crashes and performance</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Earth Engine code errors</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Analysis workflow problems</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Data quality and validation</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">📋 Solution Features</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm">Step-by-step procedures</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm">Expert troubleshooting tips</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm">Common pitfalls to avoid</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm">Alternative approaches</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm">Prevention strategies</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Test Interface */}
        <TabsContent value="test">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bot className="h-5 w-5" />
                <span>Test the Enhanced Assistant</span>
              </CardTitle>
              <CardDescription>
                Click the floating chat button to test Phase 3 features
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <div className="p-6 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border">
                  <Bot className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">Ready to Explore?</h3>
                  <p className="text-muted-foreground mb-4">
                    The enhanced chatbot is now active with comprehensive knowledge from multiple educational sources.
                  </p>
                  <Button className="mb-4">
                    Look for the floating chat button <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="p-3 rounded-lg border">
                    <h4 className="font-semibold text-blue-600 mb-1">🎯 Smart Context</h4>
                    <p>Detects your current lab automatically</p>
                  </div>
                  <div className="p-3 rounded-lg border">
                    <h4 className="font-semibold text-green-600 mb-1">🔍 Fuzzy Search</h4>
                    <p>Finds answers even with typos</p>
                  </div>
                  <div className="p-3 rounded-lg border">
                    <h4 className="font-semibold text-purple-600 mb-1">📚 Rich Content</h4>
                    <p>Comprehensive educational materials</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Implementation Status */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            <span>Phase 3 Implementation Status</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-green-50 border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">✅ Completed</h3>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Enhanced knowledge base creation</li>
                <li>• Context-aware AI service</li>
                <li>• Fuzzy matching search</li>
                <li>• Lab detection system</li>
                <li>• Troubleshooting guides</li>
                <li>• Integration with popup chatbot</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">📈 Enhanced Features</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• 50+ comprehensive knowledge items</li>
                <li>• Multi-source content integration</li>
                <li>• Adaptive response generation</li>
                <li>• Step-by-step guidance</li>
                <li>• Expert troubleshooting tips</li>
                <li>• Related topic suggestions</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-purple-50 border border-purple-200">
              <h3 className="font-semibold text-purple-800 mb-2">🚀 Ready for Deployment</h3>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• Vercel-optimized implementation</li>
                <li>• Client-side knowledge base</li>
                <li>• Progressive enhancement</li>
                <li>• Fallback mechanisms</li>
                <li>• Mobile-friendly interface</li>
                <li>• Production-ready code</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  )
} 