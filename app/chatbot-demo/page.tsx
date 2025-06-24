"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { 
  MessageSquare, 
  Sparkles, 
  BookOpen, 
  Brain, 
  Target,
  Link,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Zap,
  MapPin,
  ExternalLink
} from "lucide-react"
import { ChatbotWrapper } from "@/components/ai/chatbot-wrapper"

export default function ChatbotDemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MessageSquare className="w-8 h-8 text-emerald-600" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                GIS Learning Assistant
              </h1>
              <Sparkles className="w-8 h-8 text-blue-600" />
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your intelligent companion for GIS & AI workshops with <strong>contextual lab assistance</strong> and step-by-step guidance
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                <CheckCircle className="w-3 h-3 mr-1" />
                Phase 4 Complete
              </Badge>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                <Star className="w-3 h-3 mr-1" />
                Lab-Specific Context
              </Badge>
              <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                <TrendingUp className="w-3 h-3 mr-1" />
                Production Ready
              </Badge>
            </div>
          </div>

          {/* New Phase 4 Features Alert */}
          <Alert className="border-emerald-200 bg-emerald-50">
            <Zap className="h-4 w-4 text-emerald-600" />
            <AlertDescription className="text-emerald-800">
              <strong>🎉 New Phase 4 Features!</strong> The chatbot now provides contextual assistance based on your current lab location, 
              with direct links to specific steps and comprehensive troubleshooting guides.
            </AlertDescription>
          </Alert>

          <Tabs defaultValue="phase4" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="phase4" className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                Phase 4 Features
              </TabsTrigger>
              <TabsTrigger value="examples" className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Examples
              </TabsTrigger>
              <TabsTrigger value="implementation" className="flex items-center gap-2">
                <Brain className="w-4 h-4" />
                Implementation
              </TabsTrigger>
              <TabsTrigger value="testing" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Testing Guide
              </TabsTrigger>
            </TabsList>

            {/* Phase 4 Features Tab */}
            <TabsContent value="phase4" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Lab Context Detection */}
                <Card className="border-emerald-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-emerald-700">
                      <MapPin className="w-5 h-5" />
                      Smart Context Detection
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-gray-600">
                      Automatically detects your current lab and step from URL patterns and page content.
                    </p>
                    <div className="bg-emerald-50 p-3 rounded-lg">
                      <strong>Example:</strong> On Lab 1, Section 3.3, Step 5
                      <br />
                      <code className="text-xs bg-white px-2 py-1 rounded mt-1 inline-block">
                        /labs/lab1#section-3-3-step-5
                      </code>
                    </div>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Detects lab number (1-5)</li>
                      <li>• Identifies current section (3.3)</li>
                      <li>• Recognizes step number (5)</li>
                      <li>• Analyzes page content for context</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Step-Specific Responses */}
                <Card className="border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-700">
                      <Target className="w-5 h-5" />
                      Step-Specific Guidance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-gray-600">
                      Provides contextual answers based on your exact location in the labs.
                    </p>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <strong>Instead of:</strong> Generic "Common GIS Problems"
                      <br />
                      <strong className="text-blue-700">Now provides:</strong> "Import Malaria CSV - Step 5 specific help"
                    </div>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Exact step instructions</li>
                      <li>• Context-aware troubleshooting</li>
                      <li>• Sequential guidance (next/previous steps)</li>
                      <li>• Lab-specific tips</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Direct Navigation Links */}
                <Card className="border-purple-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-700">
                      <Link className="w-5 h-5" />
                      Direct Navigation Links
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-gray-600">
                      Provides clickable links to exact lab sections and steps.
                    </p>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm" className="text-xs flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                        ✅ You're on the right step!
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs flex items-center gap-1">
                        <ArrowRight className="w-3 h-3 text-blue-600" />
                        ➡️ Next: Step 6 - Join Data
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs flex items-center gap-1">
                        <ExternalLink className="w-3 h-3 text-gray-600" />
                        📖 Complete instructions here
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Comprehensive Lab Knowledge */}
                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-orange-700">
                      <BookOpen className="w-5 h-5" />
                      Comprehensive Lab Knowledge
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-gray-600">
                      Integrated content from all lab tutorials and enhanced guides.
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-orange-50 p-2 rounded">
                        <strong>Lab 1:</strong> Health Facility Access
                      </div>
                      <div className="bg-orange-50 p-2 rounded">
                        <strong>Lab 2:</strong> Environmental Risk
                      </div>
                      <div className="bg-orange-50 p-2 rounded">
                        <strong>Lab 3:</strong> Malaria Mapping
                      </div>
                      <div className="bg-orange-50 p-2 rounded">
                        <strong>Lab 4:</strong> AI-Assisted GEE
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">
                      + Enhanced markdown tutorials with citations and external links
                    </p>
                  </CardContent>
                </Card>

              </div>
            </TabsContent>

            {/* Examples Tab */}
            <TabsContent value="examples" className="space-y-6">
              <div className="space-y-6">
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-emerald-700">🎯 Contextual Response Example</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-medium text-gray-800 mb-2">User Question:</p>
                      <p className="text-gray-600 italic">"How do I import CSV data?"</p>
                    </div>
                    
                    <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-400">
                      <p className="font-medium text-emerald-800 mb-2">Phase 4 Response (Context: Lab 1, Section 3.3, Step 5):</p>
                      <div className="text-sm text-emerald-700 space-y-2">
                        <p><strong>Importing CSV Data in QGIS (Lab Context)</strong></p>
                        <p>For importing malaria prevalence data or other CSV files:</p>
                        <ol className="list-decimal ml-4 space-y-1">
                          <li>Click "Layer" → "Add Layer" → "Add Delimited Text Layer"</li>
                          <li>Browse to your malaria_prevalence.csv file</li>
                          <li>Ensure "CSV (comma separated values)" is selected</li>
                          <li>Under "Geometry Definition," select "No geometry (attribute table only)"</li>
                        </ol>
                        <div className="mt-3 space-y-1">
                          <p><strong>Direct Links:</strong></p>
                          <p>• ✅ You're on the right step! Complete instructions here</p>
                          <p>• ➡️ Next: Step 6 - Join Data to District Boundaries</p>
                        </div>
                        <div className="mt-3">
                          <p><strong>💡 Tips:</strong></p>
                          <p>• Always save CSV files with UTF-8 encoding</p>
                          <p>• Check that district names match between datasets</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-700">📋 Try These Lab-Specific Questions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      
                      <div className="space-y-3">
                        <h4 className="font-medium text-gray-800">Lab 1 & 3 Questions:</h4>
                        <div className="space-y-2 text-sm">
                          <Button variant="outline" className="w-full justify-start text-left h-auto p-3">
                            "How do I import CSV data?"
                          </Button>
                          <Button variant="outline" className="w-full justify-start text-left h-auto p-3">
                            "How to join data to district boundaries?"
                          </Button>
                          <Button variant="outline" className="w-full justify-start text-left h-auto p-3">
                            "What is buffer analysis?"
                          </Button>
                          <Button variant="outline" className="w-full justify-start text-left h-auto p-3">
                            "How to create choropleth maps?"
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-medium text-gray-800">General GIS Questions:</h4>
                        <div className="space-y-2 text-sm">
                          <Button variant="outline" className="w-full justify-start text-left h-auto p-3">
                            "What is a coordinate reference system?"
                          </Button>
                          <Button variant="outline" className="w-full justify-start text-left h-auto p-3">
                            "Vector vs raster data differences?"
                          </Button>
                          <Button variant="outline" className="w-full justify-start text-left h-auto p-3">
                            "What is spatial analysis?"
                          </Button>
                          <Button variant="outline" className="w-full justify-start text-left h-auto p-3">
                            "How to fix projection errors?"
                          </Button>
                        </div>
                      </div>

                    </div>
                  </CardContent>
                </Card>

              </div>
            </TabsContent>

            {/* Implementation Tab */}
            <TabsContent value="implementation" className="space-y-6">
              <div className="space-y-6">
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-700">🔧 Phase 4 Implementation Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    
                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-800">New Components Created:</h4>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <ul className="space-y-1 text-sm font-mono">
                          <li>📁 <code>lib/lab-knowledge-base.ts</code> - Comprehensive lab content database</li>
                          <li>📁 <code>lib/contextual-ai-service.ts</code> - Smart context detection & responses</li>
                          <li>🔄 <code>components/ai/popup-chatbot.tsx</code> - Updated with contextual responses</li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-800">Key Features Implemented:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="bg-emerald-50 p-3 rounded-lg">
                          <strong className="text-emerald-700">Context Detection</strong>
                          <ul className="text-xs mt-1 space-y-1">
                            <li>• URL pattern matching</li>
                            <li>• Page content analysis</li>
                            <li>• Lab/section/step identification</li>
                          </ul>
                        </div>
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <strong className="text-blue-700">Response Generation</strong>
                          <ul className="text-xs mt-1 space-y-1">
                            <li>• Step-specific instructions</li>
                            <li>• Direct navigation links</li>
                            <li>• Context-aware troubleshooting</li>
                          </ul>
                        </div>
                        <div className="bg-purple-50 p-3 rounded-lg">
                          <strong className="text-purple-700">Knowledge Integration</strong>
                          <ul className="text-xs mt-1 space-y-1">
                            <li>• Enhanced markdown content</li>
                            <li>• Lab-specific procedures</li>
                            <li>• Citations and external links</li>
                          </ul>
                        </div>
                        <div className="bg-orange-50 p-3 rounded-lg">
                          <strong className="text-orange-700">User Experience</strong>
                          <ul className="text-xs mt-1 space-y-1">
                            <li>• Progressive guidance</li>
                            <li>• Visual link indicators</li>
                            <li>• Fallback mechanisms</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-800">Data Sources Integrated:</h4>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <ul className="space-y-1 text-sm">
                          <li>• <strong>Enhanced QGIS Health Facility Access Analysis Tutorial</strong> (37KB, 367 lines)</li>
                          <li>• <strong>Enhanced Google Earth Engine Environmental Risk Mapping</strong> (48KB, 398 lines)</li>
                          <li>• <strong>Enhanced QGIS Malaria Mapping Tutorial</strong> (29KB, 447 lines)</li>
                          <li>• <strong>Enhanced AI-Assisted Google Earth Engine Programming</strong> (35KB, 303 lines)</li>
                          <li>• <strong>Enhanced AI-Based Clustering for Malaria Risk Mapping</strong> (50KB, 365 lines)</li>
                          <li>• <strong>Enhanced Capstone Research Project Tutorial</strong> (38KB, 297 lines)</li>
                        </ul>
                      </div>
                    </div>

                  </CardContent>
                </Card>

              </div>
            </TabsContent>

            {/* Testing Guide Tab */}
            <TabsContent value="testing" className="space-y-6">
              <div className="space-y-6">
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-purple-700">🧪 Testing the Phase 4 Features</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    
                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                      <h4 className="font-medium text-purple-800 mb-2">How to Test Context Detection:</h4>
                      <ol className="list-decimal ml-4 space-y-2 text-sm text-purple-700">
                        <li>Navigate to a lab page (e.g., <code>/labs/lab1</code>)</li>
                        <li>Open the chatbot using the floating button</li>
                        <li>Ask: "How do I import CSV data?"</li>
                        <li>Observe the contextual response with direct links</li>
                        <li>Verify links point to correct lab sections</li>
                      </ol>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-800">Test Scenarios:</h4>
                      <div className="grid gap-3">
                        
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <strong className="text-gray-800">Scenario 1: CSV Import Help</strong>
                          <p className="text-sm text-gray-600 mt-1">
                            On Lab 1 or Lab 3, ask about importing CSV data. Should get step-specific instructions with direct links.
                          </p>
                        </div>

                        <div className="bg-gray-50 p-3 rounded-lg">
                          <strong className="text-gray-800">Scenario 2: Data Joining</strong>
                          <p className="text-sm text-gray-600 mt-1">
                            Ask about joining data to district boundaries. Should get Section 3.3, Step 6 specific guidance.
                          </p>
                        </div>

                        <div className="bg-gray-50 p-3 rounded-lg">
                          <strong className="text-gray-800">Scenario 3: General GIS Questions</strong>
                          <p className="text-sm text-gray-600 mt-1">
                            Ask about coordinate systems or vector vs raster. Should get comprehensive explanations with examples.
                          </p>
                        </div>

                        <div className="bg-gray-50 p-3 rounded-lg">
                          <strong className="text-gray-800">Scenario 4: Wrong Context</strong>
                          <p className="text-sm text-gray-600 mt-1">
                            Ask lab-specific questions while not on a lab page. Should get general guidance with navigation links.
                          </p>
                        </div>

                      </div>
                    </div>

                    <Alert className="border-blue-200 bg-blue-50">
                      <BookOpen className="h-4 w-4 text-blue-600" />
                      <AlertDescription className="text-blue-800">
                        <strong>Production Ready:</strong> All Phase 4 features are implemented and ready for Vercel deployment. 
                        The contextual AI service provides step-specific guidance with direct links to lab content.
                      </AlertDescription>
                    </Alert>

                  </CardContent>
                </Card>

              </div>
            </TabsContent>

          </Tabs>

          {/* Try It Now Section */}
          <Card className="bg-gradient-to-r from-emerald-50 to-blue-50 border-emerald-200">
            <CardContent className="text-center py-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                🚀 Try the Enhanced Chatbot Now!
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Click the floating chatbot button to experience contextual lab assistance. 
                Try asking about CSV import, data joining, or any GIS concept.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline" className="bg-white">
                  Context Detection ✅
                </Badge>
                <Badge variant="outline" className="bg-white">
                  Step-Specific Guidance ✅
                </Badge>
                <Badge variant="outline" className="bg-white">
                  Direct Navigation Links ✅
                </Badge>
                <Badge variant="outline" className="bg-white">
                  Comprehensive Knowledge Base ✅
                </Badge>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
      
      {/* Chatbot Integration */}
      <ChatbotWrapper />
    </div>
  )
} 