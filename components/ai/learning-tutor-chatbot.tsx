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
  RefreshCw,
  GraduationCap,
  Target,
  MessageSquare,
  Eye,
  ThumbsUp,
  ArrowRight
} from "lucide-react"
import { introductoryKnowledge } from "@/lib/introductory-knowledge"

// Comprehensive Workshop Knowledge Base
const WORKSHOP_KNOWLEDGE = {
  searchKnowledge: (query: string) => {
    const searchTerms = query.toLowerCase().split(' ')
    const knowledge = [
      {
        id: "workshop_overview",
        title: "GIS & AI Workshop Overview",
        content: `This 3-day workshop combines GIS fundamentals with AI-powered analysis for health geography applications.

**Workshop Structure:**
- **Day 1**: QGIS Fundamentals & Malaria Mapping
- **Day 2**: Environmental Risk Mapping with Google Earth Engine  
- **Day 3**: AI-Assisted Programming & Advanced Analysis

**Learning Objectives:**
- Master QGIS for health facility mapping
- Use Google Earth Engine for environmental analysis
- Apply AI tools for spatial analysis`,
        topics: ["workshop", "overview", "structure", "schedule"],
        category: "navigation"
      },
      {
        id: "day2_activities",
        title: "Day 2 Workshop Activities",
        content: `Day 2 focuses on Environmental Risk Mapping using Google Earth Engine and satellite data.

**Morning Session (9:00 AM - 12:00 PM):**
- **Lab 3**: Environmental Risk Mapping (GEE)
  - Introduction to Google Earth Engine
  - JavaScript fundamentals for GEE
  - Loading and visualizing satellite imagery
  - NDVI calculation for vegetation analysis

**Afternoon Session (1:00 PM - 5:00 PM):**
- **Lab 3 Continued**: Advanced GEE Analysis
  - Time series analysis
  - Climate data integration
  - Malaria risk factor mapping`,
        topics: ["day2", "schedule", "activities", "google earth engine", "lab3"],
        category: "navigation"
      },
      {
        id: "what_is_gis",
        title: "What is GIS? - Geographic Information Systems",
        content: `GIS (Geographic Information Systems) is a technology that captures, stores, analyzes, and displays geographic information.

**Core Components:**
1. **Hardware**: Computers, GPS units, scanners
2. **Software**: QGIS, ArcGIS, Google Earth Engine
3. **Data**: Spatial data (where) + Attribute data (what)
4. **People**: Users, analysts, developers
5. **Methods**: Procedures for analysis

**GIS in Health Applications:**
- Disease mapping and outbreak tracking
- Healthcare facility accessibility analysis
- Environmental health monitoring
- Resource allocation optimization`,
        topics: ["gis", "definition", "fundamentals", "health"],
        category: "concept"
      },
      {
        id: "qgis_installation",
        title: "How to Install QGIS",
        content: `QGIS is free, open-source GIS software. Here's how to install it:

**Step 1: Download QGIS**
- Visit: https://qgis.org/en/site/forusers/download.html
- Choose your operating system (Windows, Mac, Linux)
- Download the Long Term Release (LTR) version

**Step 2: Installation**
- **Windows**: Run .exe file, follow wizard
- **Mac**: Open .dmg, drag to Applications
- **Linux**: Use package manager

**System Requirements:**
- RAM: Minimum 4GB, recommended 8GB+
- Storage: 2GB free space
- OS: Windows 10+, macOS 10.14+, Linux`,
        topics: ["qgis", "installation", "setup", "download"],
        category: "installation"
      },
      {
        id: "crs_setup_location",
        title: "Where to Find CRS Setup Information",
        content: `Coordinate Reference System setup is covered in Lab 1:

**Primary Location:**
- **Section**: "1.2 Setting Up Your GIS Environment"
- **Subsection**: "Coordinate Reference Systems for Uganda"
- **Location**: Lab 1, Step 2

**Navigation:**
1. Click "Labs & Tutorials" in main menu
2. Select "Lab 1: Malaria Mapping Fundamentals"
3. Scroll to "1.2 Setting Up Your GIS Environment"
4. Find "Coordinate Reference Systems" subsection

**What You'll Learn:**
- Why CRS matters for Uganda data
- How to set project CRS in QGIS
- Uganda-specific CRS (EPSG:32636)`,
        topics: ["crs", "navigation", "lab1", "setup", "uganda"],
        category: "navigation"
      },
      {
        id: "coordinate_reference_systems",
        title: "Understanding Coordinate Reference Systems",
        content: `CRS define how locations on Earth are represented mathematically.

**Key Types:**
- **Geographic CRS**: Lat/long (EPSG:4326 - WGS84)
- **Projected CRS**: x,y coordinates (EPSG:32636 - UTM Zone 36N)

**Uganda Context:**
- **EPSG:4326**: Global system, good for general mapping
- **EPSG:32636**: Uganda's projected system, better for measurements

**When to Use:**
- Geographic (4326): Web mapping, global datasets
- Projected (32636): Distance/area calculations, spatial analysis

**Common Issues:**
- Mixing CRS causes errors
- Check project CRS (bottom-right of QGIS)
- Reproject data when necessary`,
        topics: ["crs", "projections", "coordinates", "epsg", "uganda"],
        category: "concept"
      }
    ]

    const results = knowledge.filter(item => {
      return searchTerms.some(term => 
        item.title.toLowerCase().includes(term) ||
        item.topics.some(topic => topic.includes(term)) ||
        item.content.toLowerCase().includes(term)
      )
    })

    return results.slice(0, 3)
  },

  generateResponse: (userMessage: string) => {
    // First try workshop-specific knowledge
    const workshopResults = WORKSHOP_KNOWLEDGE.searchKnowledge(userMessage)
    
    // Then try introductory knowledge for foundational concepts
    const introResults = introductoryKnowledge.search(userMessage)
    
    // Prioritize workshop-specific content, but fall back to introductory concepts
    if (workshopResults.length > 0) {
      const topResult = workshopResults[0]
      return `# ${topResult.title} 📚

${topResult.content}

**🏷️ Category:** ${topResult.category}

${workshopResults.length > 1 ? `\n**🔗 Related topics:**\n${workshopResults.slice(1, 3).map(r => `- ${r.title}`).join('\n')}` : ''}

Need help with anything else?`
    }
    
    // If we have introductory knowledge matches, use those
    if (introResults.length > 0) {
      return introductoryKnowledge.generateResponse(userMessage)
    }
    
    // Fallback response with comprehensive help options
    return `I can help you with "${userMessage}"! 🎓

📚 **I have comprehensive knowledge about:**

**🎯 Workshop Content:**
- **Workshop navigation**: Finding specific labs, sections, and activities
- **QGIS**: Installation, data loading, styling, coordinate systems, troubleshooting
- **Google Earth Engine**: Authentication, NDVI calculation, satellite analysis, exports
- **Health GIS**: Malaria mapping, facility analysis, risk assessment
- **Programming**: Python setup, debugging, AI-assisted coding

**📖 GIS Fundamentals:**
- **What is GIS?** - Core concepts and applications
- **Data Types**: Vector vs raster, points/lines/polygons, attribute data
- **Google Earth Engine**: Cloud computing for earth science
- **Coordinate Systems**: Projections, EPSG codes, spatial reference
- **Spatial Analysis**: Pattern detection, clustering, interpolation

**💡 Popular questions I can answer:**
- "What is GIS?" or "What is Google Earth Engine?"
- "Vector vs raster data" or "What is point data?"
- "How do I load data in QGIS?"
- "Where is the coordinate system setup?"
- "How to calculate NDVI in Google Earth Engine?"
- "Understanding coordinate systems"

What specific topic can I help you with?`
  }
}

// Enhanced Learning Tutor Knowledge Base
const TUTOR_KNOWLEDGE_BASE = {
  // Learning assessment questions
  assessment: {
    beginner: [
      "Have you used any GIS software before?",
      "What's your experience with maps and spatial data?", 
      "Are you familiar with coordinate systems?",
      "What would you like to accomplish with GIS?"
    ],
    intermediate: [
      "What GIS analyses have you performed before?",
      "Tell me about a challenging GIS problem you've faced",
      "How comfortable are you with spatial analysis concepts?",
      "What specific skills would you like to develop?"
    ],
    troubleshooting: [
      "What exactly were you trying to do when this happened?",
      "Can you describe what you expected to see vs. what actually happened?",
      "What steps did you take just before encountering this issue?",
      "Have you checked your data quality and coordinate systems?"
    ]
  },

  // Guided learning paths
  learningPaths: {
    "qgis_beginner": {
      title: "QGIS Fundamentals Learning Path",
      steps: [
        {
          step: 1,
          concept: "Interface Familiarization",
          question: "Let's start by exploring QGIS. Can you tell me what you see when you first open QGIS?",
          guidance: "Look for the main components: Menu bar, Toolbars, Map canvas, Browser panel, and Layers panel.",
          checkpoint: "Can you identify the Map canvas and Layers panel?"
        },
        {
          step: 2,
          concept: "Loading Data",
          question: "Now let's load some data. Do you have any shapefiles or spatial data to work with?",
          guidance: "Try Layer → Add Layer → Add Vector Layer. What happens when you click the '...' button?",
          checkpoint: "Were you able to browse and select a data file?"
        },
        {
          step: 3,
          concept: "Coordinate Reference Systems",
          question: "Look at the bottom-right of QGIS. What EPSG code do you see there?",
          guidance: "This shows your project's coordinate system. For Uganda, we typically use EPSG:32636 (UTM Zone 36N).",
          checkpoint: "Do you understand why coordinate systems matter for measurements?"
        }
      ]
    },
    
    "spatial_analysis": {
      title: "Spatial Analysis Mastery",
      steps: [
        {
          step: 1,
          concept: "Understanding Spatial Relationships",
          question: "Think about a health clinic and the communities it serves. What spatial relationships might be important?",
          guidance: "Consider distance, accessibility, population coverage, geographic barriers...",
          checkpoint: "Can you name 3 different spatial relationships?"
        },
        {
          step: 2,
          concept: "Buffer Analysis",
          question: "If a clinic serves people within 5km, how would you visualize this service area?",
          guidance: "This is where buffer analysis comes in. Think of it as drawing a circle of influence around features.",
          checkpoint: "Do you understand what a buffer represents in real-world terms?"
        }
      ]
    },
    
    "gee_fundamentals": {
      title: "Google Earth Engine Journey",
      steps: [
        {
          step: 1,
          concept: "Cloud Computing Concept",
          question: "Before we start coding, can you explain what 'cloud computing' means for satellite data analysis?",
          guidance: "Think about the challenges of downloading and processing terabytes of satellite imagery on your computer.",
          checkpoint: "Do you see the advantage of processing data 'in the cloud'?"
        },
        {
          step: 2,
          concept: "JavaScript Basics",
          question: "Have you written any code before? What programming languages are you familiar with?",
          guidance: "Don't worry if you're new to coding. GEE JavaScript is designed to be accessible to beginners.",
          checkpoint: "Are you ready to try writing your first line of GEE code?"
        }
      ]
    }
  },

  // Socratic questioning patterns
  socraticPatterns: {
    concept_understanding: [
      "What do you think [concept] means in the context of your project?",
      "Can you give me an example of when you might use [concept]?",
      "How does [concept] relate to what you're trying to accomplish?",
      "What would happen if we didn't consider [concept] in our analysis?"
    ],
    
    problem_solving: [
      "What information do we need to solve this problem?",
      "What steps do you think we should take first?",
      "What might go wrong if we try approach X?",
      "How could we verify that our solution is correct?"
    ],
    
    error_analysis: [
      "What do you think might be causing this error?",
      "Where in your workflow do you think the problem occurred?",
      "What would you check first to troubleshoot this?",
      "How could we test whether our fix worked?"
    ]
  },

  // Context-aware responses
  contextResponses: {
    "load data qgis": {
      tutorResponse: `Great question! Let's work through this step by step.

🎯 **First, let me understand your situation:**
- What type of data are you trying to load? (Shapefile, CSV, raster, etc.)
- What's your end goal with this data?

📚 **Learning Approach:**
Instead of just telling you the steps, let's discover them together:

1️⃣ **Explore First**: Open QGIS and look at the toolbar. Can you spot any icons that might relate to "adding" or "loading" data?

2️⃣ **Menu Discovery**: Check the "Layer" menu. What options do you see there?

3️⃣ **Think About It**: Why do you think there are different options for different data types?

Try these steps and tell me what you find! What questions come up as you explore?`,
      
      followUpQuestions: [
        "What type of data format are you working with?",
        "Did you find the 'Add Layer' options in the menu?",
        "What happened when you tried to browse for your file?",
        "Are you getting any error messages?"
      ]
    },

    "coordinate reference system": {
      tutorResponse: `Excellent question! Coordinate systems are fundamental to GIS. Let's explore this concept together.

🤔 **Think About This First:**
Imagine you're giving directions to a friend. You might say "go 3 blocks north" - but what if there's no agreed definition of "north" or "blocks"?

🎯 **Let's Discover Together:**

**Step 1 - Real World Connection:**
- Have you ever used GPS coordinates on your phone?
- Why do you think maps look different when showing the whole world vs. a local area?

**Step 2 - Hands-On Exploration:**
In QGIS, look at the bottom-right corner. You'll see something like "EPSG:4326" or "EPSG:32636".
- What number do you see there?
- Try clicking on it - what happens?

**Step 3 - Uganda Context:**
Since we're working with Uganda data:
- Why might UTM Zone 36N (EPSG:32636) be better than WGS84 (EPSG:4326) for measuring distances in Uganda?

What do you think so far? What questions are coming up?`,
      
      followUpQuestions: [
        "What EPSG code is currently shown in your QGIS project?",
        "Can you explain in your own words why coordinate systems matter?",
        "What happens to your map when you change the project CRS?",
        "How might incorrect CRS affect your analysis results?"
      ]
    },

    "ndvi calculation": {
      tutorResponse: `Great topic! NDVI is a powerful tool for understanding vegetation health. Let's build your understanding step by step.

🌱 **Start With Observation:**
Before we dive into formulas, let's think conceptually:
- What color do healthy plants appear in regular photographs?
- What about dry, stressed, or dead vegetation?
- Now, what if we could "see" colors our eyes can't detect?

🔬 **The Science Behind It:**
Plants reflect light differently in different wavelengths:
- **Red light**: Healthy plants absorb this for photosynthesis
- **Near-infrared**: Healthy plants reflect this strongly

💡 **Your Turn to Think:**
If healthy plants absorb red light but reflect near-infrared:
- What would happen to these measurements when vegetation is stressed?
- How could we create a formula that captures this relationship?

🛰️ **Satellite Context:**
- Which satellite bands capture red and near-infrared light?
- For Sentinel-2: Can you guess which bands we might use?

Try to work through this logic before I give you the formula. What's your thinking process?`,
      
      followUpQuestions: [
        "Can you explain why healthy vegetation reflects more near-infrared light?",
        "What NDVI values would you expect for a dense forest vs. bare soil?",
        "How might NDVI values change between wet and dry seasons?",
        "What could cause misleading NDVI results?"
      ]
    }
  }
}

// Message types for the tutor interface
export interface TutorMessage {
  id: string
  role: "user" | "tutor"
  content: string
  timestamp: Date
  type: "question" | "guidance" | "assessment" | "encouragement" | "checkpoint"
  learningLevel?: "beginner" | "intermediate" | "advanced"
  concepts?: string[]
  followUpQuestions?: string[]
  nextSteps?: string[]
}

// Props for the Learning Tutor component
export interface LearningTutorProps {
  currentLab?: string
  currentStep?: number
  studentLevel?: "beginner" | "intermediate" | "advanced"
  onMessage?: (message: string, context: any) => Promise<string>
  className?: string
}

// Main Learning Tutor Chatbot Component
export const LearningTutorChatbot = React.forwardRef<HTMLDivElement, LearningTutorProps>(
  ({ currentLab, currentStep, studentLevel = "beginner", onMessage, className }, ref) => {
    const [messages, setMessages] = React.useState<TutorMessage[]>([
      {
        id: "welcome",
        role: "tutor",
        content: `Hi! I'm your GIS Learning Assistant! 🎓 I'm here to help you master GIS concepts and complete the workshop activities.

**🎯 I can help you with:**
- **Workshop navigation** - Finding specific labs and sections
- **QGIS fundamentals** - Installation, data loading, coordinate systems
- **Google Earth Engine** - Cloud computing, satellite analysis, NDVI
- **GIS concepts** - What is GIS? Vector vs raster? Spatial analysis?
- **Troubleshooting** - Error fixes and step-by-step guidance

**💡 Just ask me questions like:**
- "What is GIS?"
- "How do I install QGIS?"
- "What are Day 2 activities?"
- "Vector vs raster data?"
- "Where is the CRS setup?"

What would you like to learn about?`,
        timestamp: new Date(),
        type: "guidance",
        learningLevel: studentLevel
      }
    ])

    const [currentMessage, setCurrentMessage] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(false)
    const [learningContext, setLearningContext] = React.useState({
      currentTopic: null,
      difficulty: studentLevel,
      recentConcepts: [],
      needsAssessment: true
    })

    const messagesEndRef = React.useRef<HTMLDivElement>(null)
    const inputRef = React.useRef<HTMLInputElement>(null)

    // Auto-scroll to bottom when new messages arrive
    React.useEffect(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    // Focus input on mount
    React.useEffect(() => {
      inputRef.current?.focus()
    }, [])

    // Generate tutor response based on user input
    const generateTutorResponse = async (userMessage: string): Promise<string> => {
      // Use custom message handler if provided
      if (onMessage) {
        try {
          return await onMessage(userMessage, learningContext)
        } catch (error) {
          console.error("Custom message handler error:", error)
        }
      }

      // Use workshop knowledge base
      const response = WORKSHOP_KNOWLEDGE.generateResponse(userMessage)
      
      // Add contextual guidance based on student level
      if (studentLevel === "beginner") {
        return generateBeginnerGuidance(response)
      }
      
      if (userMessage.toLowerCase().includes("error") || userMessage.toLowerCase().includes("problem")) {
        return generateTroubleshootingGuidance(response)
      }
      
      return generateSocraticResponse(response)
    }

    // Generate beginner-friendly guidance
    const generateBeginnerGuidance = (message: string): string => {
      return `${message}

**🎯 Next steps for beginners:**
1. Take your time to understand each concept
2. Practice with the provided examples
3. Don't hesitate to ask follow-up questions
4. Remember: everyone starts somewhere!

**💡 Tip:** If anything seems confusing, just ask "Can you explain [concept] in simpler terms?"`
    }

    // Generate troubleshooting guidance
    const generateTroubleshootingGuidance = (message: string): string => {
      return `${message}

**🔧 Troubleshooting approach:**
1. **Identify the problem**: What exactly went wrong?
2. **Check the basics**: Data loaded? Correct CRS? Valid file paths?
3. **Review recent steps**: What did you do just before the error?
4. **Test systematically**: Try one fix at a time

**❓ To help you better, please tell me:**
- What were you trying to do?
- What error message did you see?
- What software are you using (QGIS, GEE, Python)?`
    }

    // Generate Socratic questioning responses
    const generateSocraticResponse = (message: string): string => {
      const questions = [
        "How do you think this concept applies to your current project?",
        "What similarities do you see between this and concepts you already know?",
        "Can you think of a real-world example where this would be useful?",
        "What questions does this raise for you about the broader topic?"
      ]
      
      const randomQuestion = questions[Math.floor(Math.random() * questions.length)]
      
      return `${message}

**🤔 Think about this:** ${randomQuestion}

This will help deepen your understanding and connect concepts together.`
    }

    // Handle sending messages
    const handleSendMessage = async () => {
      if (!currentMessage.trim() || isLoading) return

      const userMessage: TutorMessage = {
        id: `user-${Date.now()}`,
        role: "user",
        content: currentMessage.trim(),
        timestamp: new Date(),
        type: "question"
      }

      setMessages(prev => [...prev, userMessage])
      setCurrentMessage("")
      setIsLoading(true)

      try {
        const response = await generateTutorResponse(userMessage.content)
        
        const tutorMessage: TutorMessage = {
          id: `tutor-${Date.now()}`,
          role: "tutor",
          content: response,
          timestamp: new Date(),
          type: "guidance",
          learningLevel: studentLevel
        }

        setMessages(prev => [...prev, tutorMessage])
        
        // Update learning context
        setLearningContext(prev => ({
          ...prev,
          recentConcepts: [...prev.recentConcepts, userMessage.content].slice(-5)
        }))
        
      } catch (error) {
        console.error("Error generating response:", error)
        
        const errorMessage: TutorMessage = {
          id: `error-${Date.now()}`,
          role: "tutor",
          content: "I'm having trouble processing your question right now. Could you try rephrasing it, or ask about a specific topic like 'What is GIS?' or 'How to install QGIS?'",
          timestamp: new Date(),
          type: "guidance"
        }
        
        setMessages(prev => [...prev, errorMessage])
      } finally {
        setIsLoading(false)
      }
    }

    // Handle Enter key press
    const handleKeyPress = (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault()
        handleSendMessage()
      }
    }

    return (
      <Card ref={ref} className={cn("flex flex-col h-[600px] w-full max-w-4xl mx-auto", className)}>
        <CardHeader className="flex-shrink-0 border-b bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-950 dark:to-emerald-950">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900">
              <GraduationCap className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-lg font-semibold text-teal-900 dark:text-teal-100">
                GIS Learning Assistant
              </CardTitle>
              <p className="text-sm text-teal-600 dark:text-teal-400">
                Your AI tutor for GIS concepts and workshop guidance
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-xs">
                {studentLevel}
              </Badge>
              {currentLab && (
                <Badge variant="outline" className="text-xs">
                  {currentLab}
                </Badge>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col p-0">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex gap-3 max-w-[85%]",
                    message.role === "user" ? "ml-auto" : "mr-auto"
                  )}
                >
                  {message.role === "tutor" && (
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                    </div>
                  )}
                  
                  <div
                    className={cn(
                      "rounded-lg px-4 py-3 text-sm",
                      message.role === "user"
                        ? "bg-blue-500 text-white ml-auto"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    )}
                  >
                    <div className="whitespace-pre-wrap">{message.content}</div>
                    
                    {message.type === "checkpoint" && (
                      <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                          <Target className="w-3 h-3" />
                          Learning checkpoint
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {message.role === "user" && (
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <User className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                  )}
                </div>
              ))}
              
              {isLoading && (
                <div className="flex gap-3 max-w-[85%] mr-auto">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Thinking...
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div ref={messagesEndRef} />
          </ScrollArea>

          <div className="flex-shrink-0 border-t bg-gray-50 dark:bg-gray-900 p-4">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about GIS, QGIS, Google Earth Engine, or the workshop..."
                className="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-800 dark:text-gray-100"
                disabled={isLoading}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!currentMessage.trim() || isLoading}
                size="sm"
                className="px-3"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </Button>
            </div>
            
            <div className="mt-2 flex flex-wrap gap-2">
              {[
                "What is GIS?",
                "Vector vs raster?",
                "Install QGIS",
                "Day 2 activities",
                "Google Earth Engine"
              ].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => setCurrentMessage(suggestion)}
                  className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  disabled={isLoading}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }
)

LearningTutorChatbot.displayName = "LearningTutorChatbot"