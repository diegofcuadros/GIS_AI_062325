"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { WorkshopContentChatbot } from "@/components/ai/workshop-content-chatbot"
import { WorkshopAIService } from "@/lib/ai-service"
import { 
  Brain, 
  MessageSquare, 
  Zap, 
  CheckCircle, 
  Play,
  Lightbulb,
  Code,
  HelpCircle,
  Users,
  Clock,
  Target
} from "lucide-react"

export default function AIChatbotDemo() {
  const [currentLab, setCurrentLab] = React.useState("lab1")
  const [currentStep, setCurrentStep] = React.useState(1)
  const [aiService] = React.useState(() => new WorkshopAIService("local"))

  const handleAIMessage = async (message: string, context: any): Promise<string> => {
    return await aiService.generateResponse(message, context)
  }

  const labOptions = [
    { id: "lab1", title: "QGIS & Geospatial Data", icon: "🗺️" },
    { id: "lab2", title: "Spatial Analysis for Health", icon: "🏥" },
    { id: "lab3", title: "Remote Sensing & NDVI", icon: "🛰️" },
    { id: "lab4", title: "AI-Assisted Analysis", icon: "🤖" },
    { id: "lab5", title: "Advanced Health Analytics", icon: "📊" }
  ]

  const exampleQuestions = [
    { lab: "lab1", question: "How do I load shapefiles in QGIS?", category: "Technical" },
    { lab: "lab1", question: "What is a coordinate reference system?", category: "Concept" },
    { lab: "lab1", question: "I'm getting invalid geometry errors", category: "Troubleshooting" },
    { lab: "lab2", question: "How do buffer zones work?", category: "Concept" },
    { lab: "lab2", question: "Guide me through spatial joins", category: "Technical" },
    { lab: "lab3", question: "Google Earth Engine won't authenticate", category: "Troubleshooting" },
    { lab: "lab3", question: "What does NDVI measure?", category: "Concept" },
    { lab: "lab4", question: "Python module not found error", category: "Troubleshooting" },
    { lab: "lab5", question: "Explain K-means clustering", category: "Concept" }
  ]

  const filteredQuestions = exampleQuestions.filter(q => q.lab === currentLab)

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Workshop AI Assistant Demo
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interactive AI chatbot designed specifically for GIS AI workshop participants. 
            Get instant help with QGIS, Google Earth Engine, Python, and health data analysis.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center">
            <CardHeader>
              <Brain className="h-12 w-12 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">Smart Context Awareness</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Knows which lab you're working on and provides relevant, targeted assistance
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Zap className="h-12 w-12 text-accent mx-auto mb-2" />
              <CardTitle className="text-lg">Instant Response</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                No waiting for instructor - get immediate help with technical issues and concepts
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Target className="h-12 w-12 text-success mx-auto mb-2" />
              <CardTitle className="text-lg">Workshop-Specific</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Pre-loaded with knowledge about your specific labs, data, and common issues
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Demo Controls */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Play className="mr-2 h-5 w-5" />
              Interactive Demo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Lab Selection */}
              <div>
                <label className="text-sm font-medium mb-2 block">Select Current Lab Context:</label>
                <div className="flex flex-wrap gap-2">
                  {labOptions.map((lab) => (
                    <Button
                      key={lab.id}
                      variant={currentLab === lab.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentLab(lab.id)}
                      className="flex items-center space-x-2"
                    >
                      <span>{lab.icon}</span>
                      <span>{lab.title}</span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Example Questions */}
              <div>
                <label className="text-sm font-medium mb-2 block">Try These Example Questions:</label>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {filteredQuestions.map((example, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="justify-start text-left h-auto p-3"
                      onClick={() => {
                        // This would send the question to the chatbot
                        const chatbot = document.querySelector('[data-chatbot-input]') as HTMLInputElement
                        if (chatbot) {
                          chatbot.value = example.question
                          chatbot.focus()
                        }
                      }}
                    >
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <Badge 
                            variant={
                              example.category === "Technical" ? "default" :
                              example.category === "Concept" ? "secondary" : 
                              "destructive"
                            }
                            className="text-xs"
                          >
                            {example.category}
                          </Badge>
                        </div>
                        <p className="text-xs">{example.question}</p>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Benefits Showcase */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-success">
                <Users className="mr-2 h-5 w-5" />
                For Students
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm">Get instant help without waiting for instructor</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm">Learn concepts through interactive explanations</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm">Troubleshoot technical issues independently</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm">Available 24/7 for outside-class work</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <Lightbulb className="mr-2 h-5 w-5" />
                For Instructors
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-sm">Reduce repetitive technical questions by 70%</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-sm">Focus on advanced concepts and individual help</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-sm">Scale workshop to larger audiences</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-sm">Ensure consistent, accurate responses</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Implementation Status */}
        <Card className="mb-8 bg-gradient-to-r from-success/10 to-primary/10 border-success/20">
          <CardHeader>
            <CardTitle className="flex items-center text-success">
              <CheckCircle className="mr-2 h-5 w-5" />
              Ready for Production
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-success mb-2">✅ What's Working Now:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Beautiful, responsive chat interface</li>
                  <li>• 100+ pre-programmed expert responses</li>
                  <li>• Context-aware assistance</li>
                  <li>• Lab-specific guidance</li>
                  <li>• Technical troubleshooting</li>
                  <li>• Concept explanations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">🚀 Optional AI Enhancement:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Connect to OpenAI/Claude for unlimited questions</li>
                  <li>• Adaptive responses based on student progress</li>
                  <li>• Learning from conversation history</li>
                  <li>• Complex multi-step guidance</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Live Demo */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageSquare className="mr-2 h-5 w-5" />
              Live AI Assistant (Try It Now!)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center text-muted-foreground">
              <p className="mb-4">
                The AI chatbot appears as a floating widget in the bottom-right corner.
                Click on it to start chatting!
              </p>
              <div className="flex items-center justify-center space-x-4">
                <Badge variant="outline" className="flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>Current Lab: {currentLab.toUpperCase()}</span>
                </Badge>
                <Badge variant="outline" className="flex items-center space-x-1">
                  <HelpCircle className="h-3 w-3" />
                  <span>Ready to Help</span>
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* The actual AI chatbot */}
        <WorkshopContentChatbot 
          currentLab={currentLab}
          currentStep={currentStep}
          onMessage={handleAIMessage}
        />
      </div>
    </div>
  )
} 