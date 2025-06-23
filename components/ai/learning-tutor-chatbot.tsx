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
    const results = WORKSHOP_KNOWLEDGE.searchKnowledge(userMessage)
    
    if (results.length === 0) {
      return `That's an interesting question about "${userMessage}"! 🎓

🤔 **Let's explore this together:**

To give you the most helpful guidance, I'd like to understand:
- What specific aspect interests you most?
- Are you working on a particular lab or concept?
- What have you tried so far?

📚 **I can help with:**
- Workshop navigation and structure
- GIS concepts and fundamentals
- QGIS installation and setup
- Google Earth Engine basics
- Coordinate reference systems
- Health geography applications

What would you like to explore first? 🚀`
    }

    const topResult = results[0]
    
    // Handle different question types
    if (userMessage.toLowerCase().includes('day 2') || userMessage.toLowerCase().includes('activities')) {
      return `Great question about Day 2 activities! Let me guide you through what's planned. 📅

${topResult.content}

🤔 **To help you prepare:**
- Have you completed Day 1 materials?
- Do you have a Google Earth Engine account set up?
- What aspects of environmental analysis interest you most?

💡 **Pro tip:** Day 2 builds on Day 1 concepts, so make sure you're comfortable with QGIS basics before diving into GEE!

Is there a specific part of Day 2 you'd like to know more about? 🚀`
    }

    if (userMessage.toLowerCase().includes('what is gis')) {
      return `Excellent fundamental question! Let's explore GIS together. 🗺️

🤔 **Before I explain, tell me:**
- Have you used GPS on your phone or Google Maps?
- What do you think makes location-based information special?
- Can you think of any problems that might benefit from mapping?

📚 **Here's the foundation:**
${topResult.content}

💡 **Real-world connection:** Every time you use GPS navigation, check weather maps, or see election results by region - you're seeing GIS in action!

What specific aspect of GIS would you like to explore further? 🌟`
    }

    if (userMessage.toLowerCase().includes('install') || userMessage.toLowerCase().includes('qgis')) {
      return `Perfect! Let me guide you through QGIS installation step by step. 🛠️

${topResult.content}

🤔 **Before we start:**
- What operating system are you using?
- Have you installed similar software before?
- Are you encountering any specific issues?

💡 **I'll walk you through each step and help troubleshoot any problems that come up.**

What system are you working with, and shall we start the installation process? 🚀`
    }

    if (userMessage.toLowerCase().includes('crs') || userMessage.toLowerCase().includes('coordinate')) {
      return `Great question about coordinate systems! This is fundamental to GIS work. 🎯

📍 **Here's exactly where to find this information:**
${topResult.content}

🤔 **Let's think about this conceptually first:**
- Imagine giving directions to a friend - what reference points do you use?
- Why might maps of the world look different in different projections?
- How do you think GPS coordinates relate to measurements in meters?

💡 **Uganda-specific guidance:** For this workshop, we use EPSG:32636 (UTM Zone 36N) for accurate distance measurements.

Are you looking for the basic concepts or specific setup steps in QGIS? 🌟`
    }

    // Default comprehensive response
    return `Great question about "${topResult.title}"! 🎓

${topResult.content.split('\n').slice(0, 6).join('\n')}

🤔 **Let's explore this together:**
- What specific aspect interests you most?
- How does this relate to your current work or goals?
- What questions come to mind as you read this?

💡 **My approach:** I'll guide you through discovery and hands-on learning rather than just providing answers.

What would you like to dive deeper into? 🚀`
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

export interface LearningTutorProps {
  currentLab?: string
  currentStep?: number
  studentLevel?: "beginner" | "intermediate" | "advanced"
  onMessage?: (message: string, context: any) => Promise<string>
  className?: string
}

const LearningTutorChatbot = React.forwardRef<HTMLDivElement, LearningTutorProps>(
  ({
    currentLab = "lab1",
    currentStep = 1,
    studentLevel = "beginner",
    onMessage,
    className,
    ...props
  }, ref) => {
    const [messages, setMessages] = React.useState<TutorMessage[]>([
      {
        id: "welcome",
        role: "tutor",
        content: `Hello! I'm your GIS Learning Tutor 🎓

I'm here to guide you through your GIS journey using the Socratic method - I'll help you discover concepts through questions and exploration rather than just giving you answers.

🎯 **My Teaching Approach:**
- Ask you probing questions to build understanding
- Guide you to discover solutions yourself  
- Help you connect concepts to real-world applications
- Provide workshop navigation and content guidance

📚 **I can help you with:**
- Workshop structure and daily activities
- GIS concepts and fundamentals  
- QGIS installation and setup
- Coordinate reference systems
- Google Earth Engine basics
- Finding specific information in the workshop materials

💡 **Try asking me:**
- "What are the activities for Day 2?"
- "What is GIS?"
- "How can I install QGIS?"
- "Where can I find CRS setup information?"

**Today's Focus:** ${currentLab.toUpperCase()} - Step ${currentStep}

What would you like to explore or learn about? 🌟`,
        timestamp: new Date(),
        type: "assessment",
        learningLevel: studentLevel
      }
    ])
    
    const [input, setInput] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(false)
    const [isMinimized, setIsMinimized] = React.useState(false)
    const [studentProfile, setStudentProfile] = React.useState({
      level: studentLevel,
      strengths: [] as string[],
      challenges: [] as string[],
      goals: [] as string[]
    })

    // Enhanced tutor response generation
    const generateTutorResponse = async (userMessage: string): Promise<string> => {
      const lowerMessage = userMessage.toLowerCase()
      
      // Check for direct topic matches with tutoring approach
      for (const [topic, response] of Object.entries(TUTOR_KNOWLEDGE_BASE.contextResponses)) {
        if (lowerMessage.includes(topic.replace(/[_\s]/g, "")) || 
            lowerMessage.includes(topic.replace(/_/g, " "))) {
          return response.tutorResponse
        }
      }
      
      // Assess student level and provide appropriate guidance
      if (lowerMessage.includes("beginner") || lowerMessage.includes("new") || lowerMessage.includes("first time")) {
        return generateBeginnerGuidance(lowerMessage)
      }
      
      if (lowerMessage.includes("error") || lowerMessage.includes("problem") || lowerMessage.includes("not working")) {
        return generateTroubleshootingGuidance(lowerMessage)
      }
      
      if (lowerMessage.includes("help") || lowerMessage.includes("how")) {
        return generateSocraticResponse(lowerMessage)
      }
      
      // Default encouraging response
      return `That's an interesting point! Let me help you explore this further.

🤔 **Let's think about this together:**

To give you the most helpful guidance, I'd like to understand:
- What specific aspect of "${userMessage}" are you most curious about?
- What's the context - are you working on a particular project or analysis?
- What have you tried so far, if anything?

💡 **My approach:** Instead of just giving you the answer, I'll guide you to discover it. This helps build deeper understanding that you can apply to future challenges.

What would you like to explore first?`
    }

    const generateBeginnerGuidance = (message: string): string => {
      return `Welcome to the world of GIS! 🌟 I love working with beginners because you bring fresh perspectives.

🎯 **Let's start with the foundations:**

**First, let's get oriented:**
- Are you using QGIS, ArcGIS, or another GIS software?
- Do you have any specific data you're working with?
- What drew you to learn GIS?

**My teaching philosophy for beginners:**
1️⃣ **Explore before explaining** - I'll have you try things first
2️⃣ **Connect to real world** - Every concept ties to practical applications  
3️⃣ **Build step by step** - Each skill builds on the previous one
4️⃣ **Embrace mistakes** - They're the best learning opportunities!

🚀 **Let's start your GIS journey!**
What would you like to tackle first: loading data, understanding maps, or learning about coordinate systems?

Remember: Every expert was once a beginner! 💪`
    }

    const generateTroubleshootingGuidance = (message: string): string => {
      const troubleshootingQuestions = TUTOR_KNOWLEDGE_BASE.assessment.troubleshooting
      const randomQuestion = troubleshootingQuestions[Math.floor(Math.random() * troubleshootingQuestions.length)]
      
      return `I see you're encountering a challenge - that's part of the learning process! 🔍

🧩 **Let's debug this together using systematic thinking:**

**My detective approach:**
1️⃣ **Understand the situation** - What exactly happened?
2️⃣ **Identify the context** - What were you trying to accomplish?
3️⃣ **Trace the steps** - What did you do just before this occurred?
4️⃣ **Form hypotheses** - What might be causing this?
5️⃣ **Test solutions** - Let's try fixes systematically

**To start our investigation:**
${randomQuestion}

**Also helpful to know:**
- What software/version are you using?
- What did you expect to happen vs. what actually happened?
- Are there any error messages? (Don't worry if you don't understand them!)

🎯 **Learning goal:** By the end of this, you'll not only solve this problem but understand the debugging process for future challenges!

What details can you share to start our detective work?`
    }

    const generateSocraticResponse = (message: string): string => {
      const conceptPatterns = TUTOR_KNOWLEDGE_BASE.socraticPatterns.concept_understanding
      const randomPattern = conceptPatterns[Math.floor(Math.random() * conceptPatterns.length)]
      
      return `Great question! I love that you're asking "how" - it shows you want to understand the process, not just memorize steps. 🧠

🎓 **Let's use the Socratic method - learning through discovery:**

**Instead of me just telling you the answer, let's explore together:**

${randomPattern.replace("[concept]", "this topic")}

**My guided discovery approach:**
1️⃣ **Start with what you know** - What's your current understanding?
2️⃣ **Make connections** - How does this relate to things you've learned?
3️⃣ **Test hypotheses** - What do you think should happen?
4️⃣ **Experiment safely** - Let's try it and see what we learn
5️⃣ **Reflect on results** - What worked? What surprised you?

🤔 **Think about this first:**
- What do you already know about this topic?
- Why do you think this skill/concept is important?
- What's your best guess about how to approach this?

After you share your thoughts, I'll guide you through the discovery process!

What's your initial thinking on this?`
    }

    const handleSendMessage = async () => {
      if (!input.trim() || isLoading) return

      const userMessage: TutorMessage = {
        id: Date.now().toString(),
        role: "user",
        content: input.trim(),
        timestamp: new Date(),
        type: "question"
      }

      setMessages(prev => [...prev, userMessage])
      setInput("")
      setIsLoading(true)

      try {
        let response: string
        
        if (onMessage) {
          response = await onMessage(input.trim(), {
            currentLab,
            currentStep,
            studentLevel: studentProfile.level,
            tutorMode: true
          })
        } else {
          // Use comprehensive workshop knowledge
          response = WORKSHOP_KNOWLEDGE.generateResponse(input.trim())
        }

        const tutorMessage: TutorMessage = {
          id: (Date.now() + 1).toString(),
          role: "tutor",
          content: response,
          timestamp: new Date(),
          type: "guidance",
          learningLevel: studentProfile.level,
          concepts: [], // Would be populated by content analysis
          followUpQuestions: [] // Would be generated based on response
        }

        setTimeout(() => {
          setMessages(prev => [...prev, tutorMessage])
          setIsLoading(false)
        }, 1500) // Slightly longer to simulate thoughtful consideration

      } catch (error) {
        const errorMessage: TutorMessage = {
          id: (Date.now() + 1).toString(),
          role: "tutor",
          content: "I'm having a moment of reflection here! 🤔 Let me gather my thoughts and try again. Could you rephrase your question or try asking about something specific?",
          timestamp: new Date(),
          type: "encouragement"
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

    const quickStarters = [
      "I'm new to GIS, where should I start?",
      "I'm having trouble loading data",
      "What is a coordinate reference system?",
      "How do I calculate NDVI?",
      "Can you help me with buffer analysis?",
      "I don't understand spatial relationships"
    ]

    if (isMinimized) {
      return (
        <div 
          ref={ref}
          className={cn(
            "fixed bottom-4 right-4 w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg cursor-pointer hover:scale-105 transition-all duration-300 flex items-center justify-center",
            className
          )}
          onClick={() => setIsMinimized(false)}
          {...props}
        >
          <GraduationCap className="h-8 w-8 text-primary-foreground" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full animate-pulse-soft" />
        </div>
      )
    }

    return (
      <Card
        ref={ref}
        className={cn(
          "fixed bottom-4 right-4 w-96 h-[500px] shadow-xl flex flex-col border-primary/20 bg-gradient-to-br from-background to-primary/5 z-50",
          className
        )}
        {...props}
      >
        <CardHeader className="flex-shrink-0 pb-4 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent">
                <GraduationCap className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <CardTitle className="text-lg flex items-center">
                  GIS Learning Tutor
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {studentProfile.level}
                  </Badge>
                </CardTitle>
                <p className="text-xs text-muted-foreground">
                  Socratic Method • {currentLab.toUpperCase()} • Step {currentStep}
                </p>
              </div>
            </div>
            <div className="flex space-x-1">
              <Button size="sm" variant="ghost" onClick={() => setMessages([messages[0]])}>
                <RefreshCw className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" onClick={() => setIsMinimized(true)}>
                ✕
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col p-4 pt-0 min-h-0">
          {/* Messages */}
          <ScrollArea className="flex-1 mb-4 min-h-0">
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
                        : "bg-gradient-to-r from-muted to-muted/70 border border-border/50"
                    )}
                  >
                    <div className="flex items-start space-x-2">
                      {message.role === "tutor" && (
                        <div className="flex items-center space-x-1">
                          <GraduationCap className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                          {message.type === "assessment" && <Target className="h-3 w-3 text-blue-500" />}
                          {message.type === "guidance" && <Lightbulb className="h-3 w-3 text-yellow-500" />}
                          {message.type === "encouragement" && <ThumbsUp className="h-3 w-3 text-green-500" />}
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="whitespace-pre-wrap text-sm">{message.content}</div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center space-x-2">
                            {message.type && (
                              <Badge variant="outline" className="text-xs">
                                {message.type === "assessment" && <Eye className="h-3 w-3 mr-1" />}
                                {message.type === "guidance" && <ArrowRight className="h-3 w-3 mr-1" />}
                                {message.type === "encouragement" && <ThumbsUp className="h-3 w-3 mr-1" />}
                                {message.type}
                              </Badge>
                            )}
                            {message.learningLevel && (
                              <Badge variant="secondary" className="text-xs">
                                {message.learningLevel}
                              </Badge>
                            )}
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gradient-to-r from-muted to-muted/70 p-3 rounded-lg max-w-[85%] border border-border/50">
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="h-4 w-4 text-primary" />
                      <Loader2 className="h-4 w-4 animate-spin text-primary" />
                      <span className="text-sm text-muted-foreground">Considering your question...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Quick Starters */}
          {messages.length <= 1 && (
            <div className="mb-4">
              <p className="text-xs text-muted-foreground mb-2">Quick learning starters:</p>
              <div className="grid grid-cols-1 gap-1">
                {quickStarters.slice(0, 3).map((starter, index) => (
                  <Button
                    key={index}
                    size="sm"
                    variant="outline"
                    onClick={() => setInput(starter)}
                    className="text-xs h-8 px-2 justify-start"
                  >
                    <MessageSquare className="h-3 w-3 mr-1" />
                    {starter.length > 30 ? starter.substring(0, 30) + "..." : starter}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input - Fixed at bottom */}
          <div className="flex-shrink-0 border-t border-border/50 pt-3 mt-2">
            <div className="flex space-x-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask me anything about GIS..."
                className="flex-1 px-3 py-2 text-sm bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                disabled={isLoading}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!input.trim() || isLoading}
                size="sm"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }
)

LearningTutorChatbot.displayName = "LearningTutorChatbot"

export { LearningTutorChatbot }