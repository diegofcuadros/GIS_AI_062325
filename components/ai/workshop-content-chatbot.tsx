"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  Bot, 
  Send, 
  Loader2,
  BookOpen,
  Code,
  Map,
  Satellite,
  Brain,
  HelpCircle,
  Lightbulb,
  AlertCircle,
  CheckCircle,
  Clock,
  User,
  Copy,
  RefreshCw
} from "lucide-react"

// Workshop content knowledge base
const WORKSHOP_KNOWLEDGE = {
  // Lab-specific content
  labs: {
    "lab1": {
      title: "Introduction to QGIS and Geospatial Data",
      objectives: [
        "Understand coordinate reference systems",
        "Load and visualize vector data",
        "Create choropleth maps",
        "Export publication-ready maps"
      ],
      commonIssues: [
        "Invalid geometry errors in shapefiles",
        "Coordinate system mismatches", 
        "File path issues with spaces",
        "Symbology and color ramp selection"
      ],
      keyFunctions: [
        "Layer → Add Layer → Add Vector Layer",
        "Vector → Geometry Tools → Fix Geometries",
        "Project → Properties → CRS",
        "Project → New Print Layout"
      ]
    },
    "lab2": {
      title: "Spatial Analysis for Health Applications",
      objectives: [
        "Perform spatial queries and selection",
        "Calculate buffer zones around health facilities",
        "Analyze accessibility patterns",
        "Join attribute data to spatial features"
      ],
      commonIssues: [
        "Buffer analysis not working correctly",
        "Spatial join returning unexpected results",
        "Distance calculations in wrong units",
        "Overlay analysis errors"
      ],
      keyFunctions: [
        "Vector → Geoprocessing Tools → Buffer",
        "Vector → Data Management Tools → Join by Location",
        "Vector → Selection Tools → Select by Expression",
        "Processing → Toolbox → Spatial Operations"
      ]
    },
    "lab3": {
      title: "Environmental Risk Mapping with Remote Sensing",
      objectives: [
        "Access satellite imagery via Google Earth Engine",
        "Calculate vegetation indices (NDVI, EVI)",
        "Analyze temporal changes in land cover",
        "Create risk assessment maps"
      ],
      commonIssues: [
        "Google Earth Engine authentication failures",
        "Image collection filtering errors",
        "Band calculation mistakes",
        "Map visualization not displaying"
      ],
      keyFunctions: [
        "ee.Authenticate() and ee.Initialize()",
        "ee.ImageCollection().filterDate().filterBounds()",
        "image.normalizedDifference(['B8', 'B4'])",
        "Map.addLayer(image, visParams, name)"
      ]
    },
    "lab4": {
      title: "AI-Assisted Geospatial Analysis",
      objectives: [
        "Use AI for satellite image classification",
        "Implement machine learning workflows",
        "Automate repetitive GIS tasks",
        "Integrate AI predictions with GIS"
      ],
      commonIssues: [
        "Python environment and package installation",
        "Model training data preparation",
        "Classification accuracy issues",
        "Integration between AI results and QGIS"
      ],
      keyFunctions: [
        "from sklearn import RandomForestClassifier",
        "import geopandas as gpd",
        "rasterio.open() for image reading",
        "model.fit(X_train, y_train)"
      ]
    },
    "lab5": {
      title: "Advanced Analytics for Public Health",
      objectives: [
        "Implement disease risk modeling",
        "Perform cluster analysis",
        "Create predictive health maps",
        "Generate automated reports"
      ],
      commonIssues: [
        "Statistical model interpretation",
        "Cluster analysis parameter selection",
        "Risk factor weighting",
        "Report generation automation"
      ],
      keyFunctions: [
        "from sklearn.cluster import KMeans",
        "scipy.stats for statistical analysis",
        "matplotlib for visualization",
        "automated report templates"
      ]
    }
  },

  // Technical concepts
  concepts: {
    "crs": "Coordinate Reference Systems (CRS) define how geographic coordinates relate to real-world locations. Common systems include WGS84 (EPSG:4326) for global data and UTM zones for local analysis.",
    "ndvi": "NDVI (Normalized Difference Vegetation Index) = (NIR - Red) / (NIR + Red). Values range from -1 to 1, with higher values indicating healthier vegetation.",
    "buffer": "Buffer analysis creates zones of specified distance around geographic features. Important for proximity analysis and accessibility studies.",
    "spatial_join": "Spatial joins combine data from different layers based on spatial relationships (intersects, within, contains, etc.).",
    "gee": "Google Earth Engine is a cloud platform for planetary-scale geospatial analysis using satellite imagery and geospatial datasets."
  },

  // Common error solutions
  troubleshooting: {
    "invalid_geometry": {
      problem: "Invalid geometry errors in QGIS",
      solution: "Use Vector → Geometry Tools → Fix Geometries to repair corrupted geometries",
      prevention: "Always check data quality before analysis"
    },
    "crs_mismatch": {
      problem: "Layers not aligning or appearing in wrong location",
      solution: "Check and align coordinate reference systems. Use Project → Properties → CRS",
      prevention: "Always verify CRS when loading new data"
    },
    "gee_auth": {
      problem: "Google Earth Engine authentication failed",
      solution: "Run ee.Authenticate(), follow browser prompts, ensure correct Google account",
      prevention: "Keep authentication tokens current"
    },
    "python_import": {
      problem: "ModuleNotFoundError when importing Python packages",
      solution: "Install missing packages: pip install package_name, restart QGIS",
      prevention: "Use virtual environments and requirements.txt"
    }
  }
}

export interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
  type?: "question" | "guidance" | "troubleshooting" | "concept"
  relatedLab?: string
  confidence?: number
}

export interface WorkshopChatbotProps {
  currentLab?: string
  currentStep?: number
  onMessage?: (message: string, context: any) => Promise<string>
  className?: string
}

const WorkshopContentChatbot = React.forwardRef<HTMLDivElement, WorkshopChatbotProps>(
  ({
    currentLab = "lab1",
    currentStep = 1,
    onMessage,
    className,
    ...props
  }, ref) => {
    const [messages, setMessages] = React.useState<Message[]>([
      {
        id: "welcome",
        role: "assistant",
        content: `Hello! I'm your GIS AI Workshop assistant. I can help you with:

📖 **Lab Content**: Step-by-step guidance through all 5 labs
🔧 **Technical Issues**: QGIS, Google Earth Engine, Python troubleshooting  
🧠 **Concepts**: Explanations of GIS, remote sensing, and AI concepts
🎯 **Current Lab**: ${WORKSHOP_KNOWLEDGE.labs[currentLab as keyof typeof WORKSHOP_KNOWLEDGE.labs]?.title}

What can I help you with today?`,
        timestamp: new Date(),
        type: "guidance"
      }
    ])
    
    const [input, setInput] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(false)
    const [isMinimized, setIsMinimized] = React.useState(false)

    // Smart content analysis for contextual responses
    const analyzeUserQuery = (query: string) => {
      const lowerQuery = query.toLowerCase()
      
      // Detect lab context
      const labPattern = /lab\s*(\d+)/i
      const labMatch = lowerQuery.match(labPattern)
      const targetLab = labMatch ? `lab${labMatch[1]}` : currentLab

      // Detect question type
      let queryType: "question" | "guidance" | "troubleshooting" | "concept" = "question"
      
      if (lowerQuery.includes("error") || lowerQuery.includes("not working") || lowerQuery.includes("failed")) {
        queryType = "troubleshooting"
      } else if (lowerQuery.includes("what is") || lowerQuery.includes("explain") || lowerQuery.includes("how does")) {
        queryType = "concept"
      } else if (lowerQuery.includes("how to") || lowerQuery.includes("step") || lowerQuery.includes("guide")) {
        queryType = "guidance"
      }

      return { targetLab, queryType, keywords: lowerQuery.split(" ") }
    }

    // Generate contextual AI response
    const generateResponse = async (query: string): Promise<string> => {
      const analysis = analyzeUserQuery(query)
      const labInfo = WORKSHOP_KNOWLEDGE.labs[analysis.targetLab as keyof typeof WORKSHOP_KNOWLEDGE.labs]
      
      // Check for direct troubleshooting matches
      for (const [key, solution] of Object.entries(WORKSHOP_KNOWLEDGE.troubleshooting)) {
        if (analysis.keywords.some(keyword => key.includes(keyword.replace(/[^a-z]/g, "")))) {
          return `🔧 **${solution.problem}**

**Solution**: ${solution.solution}

**Prevention**: ${solution.prevention}

Need more specific help? Let me know what exactly you're seeing!`
        }
      }

      // Check for concept explanations
      for (const [concept, explanation] of Object.entries(WORKSHOP_KNOWLEDGE.concepts)) {
        if (analysis.keywords.some(keyword => concept.includes(keyword) || keyword.includes(concept))) {
          return `📚 **${concept.toUpperCase()}**

${explanation}

${labInfo ? `**In ${labInfo.title}**: This concept is used for ${labInfo.objectives.find(obj => obj.toLowerCase().includes(concept)) || "the main analysis tasks"}.` : ""}

Would you like me to walk you through how to apply this concept?`
        }
      }

      // Lab-specific guidance
      if (labInfo && analysis.queryType === "guidance") {
        return `📖 **${labInfo.title} - Guidance**

**Lab Objectives**:
${labInfo.objectives.map(obj => `• ${obj}`).join("\n")}

**Key Functions You'll Use**:
${labInfo.keyFunctions.map(func => `\`${func}\``).join("\n")}

**Common Issues to Watch For**:
${labInfo.commonIssues.map(issue => `⚠️ ${issue}`).join("\n")}

Which specific step are you working on? I can provide more detailed guidance!`
      }

      // Fallback intelligent response
      return `I understand you're asking about "${query}". ${labInfo ? `For ${labInfo.title}, ` : ""}let me help you with this.

Based on your question, here are some suggestions:

${analysis.queryType === "troubleshooting" ? 
  "🔧 **Troubleshooting Steps**:\n1. Check your data and file paths\n2. Verify coordinate reference systems\n3. Look for error messages in the console\n4. Try refreshing/restarting your tools" :
  "📋 **Getting Started**:\n1. Make sure you're in the correct lab section\n2. Follow the step-by-step instructions\n3. Check that all required data is loaded\n4. Ask for specific help if you get stuck"
}

Can you provide more details about what specifically you're trying to do or what error you're encountering?`
    }

    const handleSendMessage = async () => {
      if (!input.trim() || isLoading) return

      const userMessage: Message = {
        id: Date.now().toString(),
        role: "user", 
        content: input.trim(),
        timestamp: new Date()
      }

      setMessages(prev => [...prev, userMessage])
      setInput("")
      setIsLoading(true)

      try {
        let response: string
        
        if (onMessage) {
          // Use custom AI service if provided
          response = await onMessage(input.trim(), {
            currentLab,
            currentStep,
            labInfo: WORKSHOP_KNOWLEDGE.labs[currentLab as keyof typeof WORKSHOP_KNOWLEDGE.labs]
          })
        } else {
          // Use built-in content analysis
          response = await generateResponse(input.trim())
        }

        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: response,
          timestamp: new Date(),
          type: analyzeUserQuery(input.trim()).queryType,
          relatedLab: currentLab,
          confidence: 0.9
        }

        setTimeout(() => {
          setMessages(prev => [...prev, assistantMessage])
          setIsLoading(false)
        }, 1000)

      } catch (error) {
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "I apologize, but I'm having trouble processing your request right now. Please try rephrasing your question or check the lab materials directly.",
          timestamp: new Date(),
          type: "troubleshooting"
        }
        setMessages(prev => [...prev, errorMessage])
        setIsLoading(false)
      }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault()
        handleSendMessage()
      }
    }

    const copyMessage = (content: string) => {
      navigator.clipboard.writeText(content)
    }

    const clearMessages = () => {
      setMessages([messages[0]]) // Keep welcome message
    }

    const quickQuestions = [
      "How do I load shapefiles in QGIS?",
      "What does this NDVI error mean?",
      "Help with Google Earth Engine authentication",
      "How to fix invalid geometry?",
      "Explain coordinate reference systems",
      "Guide me through Lab 3 objectives"
    ]

    if (isMinimized) {
      return (
        <div 
          ref={ref}
          className={cn(
            "fixed bottom-4 right-4 w-16 h-16 bg-primary rounded-full shadow-lg cursor-pointer hover:scale-105 transition-all duration-300 flex items-center justify-center",
            className
          )}
          onClick={() => setIsMinimized(false)}
          {...props}
        >
          <Bot className="h-8 w-8 text-primary-foreground" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full animate-pulse-soft" />
        </div>
      )
    }

    return (
      <Card
        ref={ref}
        className={cn(
          "fixed bottom-4 right-4 w-96 h-[600px] shadow-xl flex flex-col",
          className
        )}
        {...props}
      >
        <CardHeader className="flex-shrink-0 pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                <Brain className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg">Workshop AI Assistant</CardTitle>
                <p className="text-xs text-muted-foreground">
                  Current: {WORKSHOP_KNOWLEDGE.labs[currentLab as keyof typeof WORKSHOP_KNOWLEDGE.labs]?.title || "Lab 1"}
                </p>
              </div>
            </div>
            <div className="flex space-x-1">
              <Button size="sm" variant="ghost" onClick={clearMessages}>
                <RefreshCw className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" onClick={() => setIsMinimized(true)}>
                ✕
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col p-4 pt-0">
          {/* Messages */}
          <ScrollArea className="flex-1 mb-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex",
                    message.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[85%] p-3 rounded-lg",
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    )}
                  >
                    <div className="flex items-start space-x-2">
                      {message.role === "assistant" && (
                        <Bot className="h-4 w-4 mt-0.5 flex-shrink-0 text-muted-foreground" />
                      )}
                      <div className="flex-1">
                        <div className="whitespace-pre-wrap text-sm">{message.content}</div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center space-x-2">
                            {message.type && (
                              <Badge variant="outline" className="text-xs">
                                {message.type === "troubleshooting" && <AlertCircle className="h-3 w-3 mr-1" />}
                                {message.type === "concept" && <BookOpen className="h-3 w-3 mr-1" />}
                                {message.type === "guidance" && <Lightbulb className="h-3 w-3 mr-1" />}
                                {message.type}
                              </Badge>
                            )}
                          </div>
                          {message.role === "assistant" && (
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => copyMessage(message.content)}
                              className="h-6 px-2 opacity-0 group-hover:opacity-100"
                            >
                              <Copy className="h-3 w-3" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted p-3 rounded-lg max-w-[85%]">
                    <div className="flex items-center space-x-2">
                      <Bot className="h-4 w-4 text-muted-foreground" />
                      <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Thinking...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Quick Questions */}
          {messages.length <= 1 && (
            <div className="mb-4">
              <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-1">
                {quickQuestions.slice(0, 3).map((question, index) => (
                  <Button
                    key={index}
                    size="sm"
                    variant="outline"
                    onClick={() => setInput(question)}
                    className="text-xs h-6 px-2"
                  >
                    {question.length > 25 ? question.substring(0, 25) + "..." : question}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="flex space-x-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about labs, concepts, or troubleshooting..."
              className="flex-1 px-3 py-2 text-sm bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
              disabled={isLoading}
            />
            <Button
              onClick={handleSendMessage}
              disabled={!input.trim() || isLoading}
              size="sm"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }
)

WorkshopContentChatbot.displayName = "WorkshopContentChatbot"

export { WorkshopContentChatbot } 