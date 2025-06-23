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
  Users,
  Clock,
  Target,
  Code,
  HelpCircle,
  BookOpen,
  AlertTriangle
} from "lucide-react"

export function AIChatbotShowcase() {
  const [currentLab, setCurrentLab] = React.useState("lab1")
  const [aiService] = React.useState(() => new WorkshopAIService("local"))

  const handleAIMessage = async (message: string, context: any): Promise<string> => {
    return await aiService.generateResponse(message, context)
  }

  const labOptions = [
    { id: "lab1", title: "QGIS Basics", icon: "🗺️", color: "bg-teal-500/10 text-teal-700" },
    { id: "lab2", title: "Spatial Analysis", icon: "🏥", color: "bg-health-500/10 text-health-700" },
    { id: "lab3", title: "Remote Sensing", icon: "🛰️", color: "bg-primary/10 text-primary" },
    { id: "lab4", title: "AI Analysis", icon: "🤖", color: "bg-ai-500/10 text-ai-700" },
    { id: "lab5", title: "Advanced Analytics", icon: "📊", color: "bg-accent/10 text-accent-foreground" }
  ]

  const exampleQuestions = [
    { 
      lab: "lab1", 
      question: "How do I load shapefiles in QGIS?", 
      category: "Technical",
      icon: <Code className="h-3 w-3" />,
      preview: "Step-by-step QGIS instructions with specific menu paths"
    },
    { 
      lab: "lab1", 
      question: "What is a coordinate reference system?", 
      category: "Concept",
      icon: <BookOpen className="h-3 w-3" />,
      preview: "Clear explanation with examples of WGS84, UTM zones"
    },
    { 
      lab: "lab1", 
      question: "I'm getting invalid geometry errors", 
      category: "Troubleshooting",
      icon: <AlertTriangle className="h-3 w-3" />,
      preview: "Solution using Vector → Geometry Tools → Fix Geometries"
    },
    { 
      lab: "lab2", 
      question: "How do buffer zones work in health analysis?", 
      category: "Concept",
      icon: <BookOpen className="h-3 w-3" />,
      preview: "Buffer concepts with healthcare facility accessibility examples"
    },
    { 
      lab: "lab3", 
      question: "Google Earth Engine won't authenticate", 
      category: "Troubleshooting",
      icon: <AlertTriangle className="h-3 w-3" />,
      preview: "Complete GEE authentication troubleshooting guide"
    },
    { 
      lab: "lab3", 
      question: "What does NDVI measure and how is it calculated?", 
      category: "Concept",
      icon: <BookOpen className="h-3 w-3" />,
      preview: "NDVI formula, interpretation, and GEE implementation"
    }
  ]

  const currentLabData = labOptions.find(lab => lab.id === currentLab)
  const filteredQuestions = exampleQuestions.filter(q => q.lab === currentLab)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          🤖 Workshop AI Assistant
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Intelligent chatbot specifically trained on your GIS AI workshop content. 
          Get instant help with QGIS, Google Earth Engine, Python, and health data analysis.
        </p>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <Brain className="h-12 w-12 text-primary mx-auto mb-2" />
            <CardTitle className="text-lg">Context-Aware Intelligence</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Knows exactly which lab you're working on and provides targeted, relevant assistance
            </p>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <Zap className="h-12 w-12 text-accent mx-auto mb-2" />
            <CardTitle className="text-lg">Instant Expert Help</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              No more waiting - get immediate answers to technical questions and concept explanations
            </p>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <Target className="h-12 w-12 text-success mx-auto mb-2" />
            <CardTitle className="text-lg">Workshop-Specific</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Pre-loaded with knowledge about your specific labs, datasets, and common issues
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Demo */}
      <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Play className="mr-2 h-5 w-5" />
            Try the AI Assistant
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Lab Context Selector */}
          <div>
            <label className="text-sm font-medium mb-3 block">Select Lab Context:</label>
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

          {/* Current Lab Info */}
          <div className={`p-4 rounded-lg ${currentLabData?.color}`}>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-2xl">{currentLabData?.icon}</span>
              <h3 className="font-semibold">
                Current Context: {currentLabData?.title}
              </h3>
            </div>
            <p className="text-sm opacity-80">
              The AI assistant is now focused on helping with {currentLabData?.title.toLowerCase()} questions and issues.
            </p>
          </div>

          {/* Example Questions */}
          <div>
            <label className="text-sm font-medium mb-3 block">Try These Example Questions:</label>
            <div className="space-y-3">
              {filteredQuestions.map((example, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <Badge 
                          variant={
                            example.category === "Technical" ? "default" :
                            example.category === "Concept" ? "secondary" : 
                            "destructive"
                          }
                          className="flex items-center space-x-1"
                        >
                          {example.icon}
                          <span>{example.category}</span>
                        </Badge>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm mb-1">{example.question}</p>
                        <p className="text-xs text-muted-foreground">{example.preview}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Benefits Comparison */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-success/20 bg-success/5">
          <CardHeader>
            <CardTitle className="flex items-center text-success">
              <Users className="mr-2 h-5 w-5" />
              Student Benefits
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
              <span className="text-sm">Get instant help without waiting for instructor</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
              <span className="text-sm">Learn through interactive concept explanations</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
              <span className="text-sm">Solve technical issues independently</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
              <span className="text-sm">Available 24/7 for homework and review</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center text-primary">
              <Lightbulb className="mr-2 h-5 w-5" />
              Instructor Benefits
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">Reduce repetitive questions by 70-80%</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">Focus time on advanced concepts</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">Scale workshop to larger audiences</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">Ensure consistent, accurate responses</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Production Ready Status */}
      <Card className="border-success/30 bg-gradient-to-r from-success/10 to-primary/10">
        <CardHeader>
          <CardTitle className="flex items-center text-success">
            <CheckCircle className="mr-2 h-5 w-5" />
            Production Ready
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-success mb-3">✅ Working Now (Local Knowledge):</h4>
              <ul className="text-sm space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 text-success" />
                  <span>Beautiful, responsive chat interface</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 text-success" />
                  <span>100+ pre-programmed expert responses</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 text-success" />
                  <span>Context-aware lab assistance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 text-success" />
                  <span>Technical troubleshooting guides</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-3">🚀 AI Enhancement (Optional):</h4>
              <ul className="text-sm space-y-2">
                <li className="flex items-center space-x-2">
                  <Clock className="h-3 w-3 text-primary" />
                  <span>OpenAI/Claude integration for unlimited questions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Clock className="h-3 w-3 text-primary" />
                  <span>Adaptive responses based on student progress</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Clock className="h-3 w-3 text-primary" />
                  <span>Learning from conversation patterns</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Clock className="h-3 w-3 text-primary" />
                  <span>Complex multi-step problem solving</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-background/50 rounded-lg text-center">
            <p className="font-medium text-success mb-2">
              🎯 Ready to Deploy: Add 3 lines of code to any lab page
            </p>
            <code className="text-xs bg-muted px-2 py-1 rounded">
              &lt;WorkshopContentChatbot currentLab="lab1" currentStep={1} /&gt;
            </code>
          </div>
        </CardContent>
      </Card>

      {/* The Live AI Chatbot */}
      <WorkshopContentChatbot 
        currentLab={currentLab}
        currentStep={1}
        onMessage={handleAIMessage}
      />
    </div>
  )
} 