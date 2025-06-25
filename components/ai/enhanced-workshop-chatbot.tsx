"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
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
  ChevronRight,
  ExternalLink,
  MessageSquare,
  Zap,
  Target,
  Settings,
  Maximize2,
  Minimize2,
  X
} from "lucide-react"

// Enhanced conversation memory and context
interface ConversationContext {
  currentLab: string
  currentStep: number
  recentTopics: string[]
  userExpertise: 'beginner' | 'intermediate' | 'advanced'
  previousQuestions: string[]
  sessionStartTime: Date
  helpfulResponses: string[]
  strugglingAreas: string[]
}

interface ChatMessage {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
  type?: "question" | "guidance" | "troubleshooting" | "concept" | "success"
  relatedLab?: string
  confidence?: number
  quickActions?: QuickAction[]
  contextUsed?: string[]
}

interface QuickAction {
  label: string
  action: () => void
  icon?: React.ComponentType<{ className?: string }>
  type: 'followup' | 'related' | 'troubleshoot' | 'next_step'
}

// Comprehensive local knowledge base
const ENHANCED_KNOWLEDGE_BASE = {
  // Lab-specific detailed knowledge
  labs: {
    lab1: {
      title: "QGIS Fundamentals & Health Facility Mapping",
      description: "Learn QGIS basics while mapping health facilities in Uganda",
      commonQuestions: [
        "How do I install QGIS?",
        "How to load shapefiles?",
        "What are coordinate systems?",
        "How to create choropleth maps?",
        "How to join CSV data to polygons?",
        "Why is my data not appearing?"
      ],
      stepByStepGuides: {
        "load_shapefile": {
          title: "Loading Shapefiles in QGIS",
          steps: [
            "Open QGIS Desktop",
            "Go to Layer → Add Layer → Add Vector Layer",
            "Click the '...' button to browse",
            "Navigate to your .shp file and select it",
            "Click 'Add' to load the layer",
            "The layer should appear in the Layers panel and map canvas"
          ],
          troubleshooting: [
            "If file doesn't appear: Check the file path has no spaces",
            "If data looks wrong: Verify the coordinate reference system",
            "If file won't open: Ensure all shapefile components (.shp, .shx, .dbf) are present"
          ]
        },
        "join_csv_data": {
          title: "Joining CSV Data to Polygons",
          steps: [
            "Load your polygon layer (districts)",
            "Load your CSV data: Layer → Add Layer → Add Delimited Text Layer",
            "Select 'No geometry' for CSV files with just attributes",
            "Right-click the polygon layer → Properties → Joins",
            "Click the '+' button to add a new join",
            "Select join layer (CSV), join field, and target field",
            "Click OK to apply the join"
          ],
          troubleshooting: [
            "No data after join: Check field names match exactly",
            "Partial join: Look for spelling differences in join fields",
            "Join field errors: Ensure data types match (text vs numbers)"
          ]
        }
      },
      commonErrors: {
        "invalid_geometry": {
          problem: "Invalid geometry errors when processing data",
          solution: "Use Vector → Geometry Tools → Fix Geometries tool",
          prevention: "Always check data quality after importing",
          details: "Invalid geometries occur when polygon boundaries intersect themselves or have other topological errors."
        },
        "crs_mismatch": {
          problem: "Layers don't align properly on the map",
          solution: "Set all layers to the same CRS: Right-click layer → Set CRS → Choose EPSG:32636 for Uganda",
          prevention: "Always check CRS before analysis",
          details: "For Uganda, use UTM Zone 36N (EPSG:32636) for measurements or WGS84 (EPSG:4326) for global context."
        }
      }
    },
    lab2: {
      title: "Spatial Analysis for Health Applications", 
      description: "Perform buffer analysis and accessibility studies",
      commonQuestions: [
        "How to create buffer zones?",
        "What distance for buffers?",
        "How to find facilities within areas?",
        "How to calculate accessibility?",
        "What is spatial join?",
        "How to select by location?"
      ],
      stepByStepGuides: {
        "buffer_analysis": {
          title: "Creating Buffer Zones Around Health Facilities",
          steps: [
            "Load your health facilities point layer",
            "Go to Vector → Geoprocessing Tools → Buffer",
            "Select your facilities layer as input",
            "Set distance (e.g., 5000 for 5km buffer)",
            "Choose distance units (meters for precision)",
            "Click Run to create buffer polygons"
          ],
          troubleshooting: [
            "Wrong buffer size: Check your layer's CRS and units",
            "Buffers overlap: Use Dissolve tool to merge overlapping areas",
            "No buffers created: Ensure input layer has valid geometry"
          ]
        }
      }
    },
    lab3: {
      title: "Google Earth Engine & Remote Sensing",
      description: "Use satellite data for environmental health mapping",
      commonQuestions: [
        "How to authenticate Google Earth Engine?",
        "What is NDVI?",
        "How to filter satellite images?",
        "How to calculate vegetation indices?",
        "How to export results?",
        "JavaScript errors in GEE?"
      ],
      stepByStepGuides: {
        "gee_authentication": {
          title: "Google Earth Engine Authentication",
          steps: [
            "Open Google Colab or Jupyter notebook",
            "Run: import ee",
            "Run: ee.Authenticate()",
            "Click the generated link and sign in with Google account",
            "Copy the authorization code",
            "Paste code back in notebook",
            "Run: ee.Initialize()",
            "Test with: print(ee.Image('LANDSAT/LC08/C01/T1_TOA/LC08_001001_20140811').getInfo())"
          ],
          troubleshooting: [
            "Authentication fails: Clear browser cookies and try again",
            "Initialize error: Run Authenticate first",
            "Permission denied: Ensure account has Earth Engine access"
          ]
        }
      }
    }
  },

  // Conversational patterns for natural interaction
  conversationalPatterns: {
    greetings: [
      "Hi! I'm here to help with your GIS workshop. What are you working on?",
      "Hello! Ready to tackle some GIS challenges? What can I help you with?",
      "Hey there! I see you're in {currentLab}. How's it going so far?"
    ],
    encouragement: [
      "You're doing great! {concept} can be tricky at first.",
      "Nice work getting this far! Let's solve this {problem} together.",
      "Don't worry, everyone struggles with {topic} initially. You've got this!"
    ],
    followUpQuestions: [
      "Does that make sense so far?",
      "Would you like me to explain any part in more detail?",
      "Are you ready to try the next step?",
      "Is there anything else about {topic} you'd like to know?"
    ]
  },

  // Quick action suggestions based on context
  quickActions: {
    after_explanation: [
      { label: "Show me step-by-step", type: "followup", icon: CheckCircle },
      { label: "Common errors with this", type: "troubleshoot", icon: AlertCircle },
      { label: "What's next?", type: "next_step", icon: ChevronRight }
    ],
    after_error_fix: [
      { label: "Test the solution", type: "followup", icon: Zap },
      { label: "Prevent this error", type: "related", icon: Lightbulb },
      { label: "Similar issues", type: "troubleshoot", icon: HelpCircle }
    ],
    after_success: [
      { label: "Next challenge", type: "next_step", icon: Target },
      { label: "Related concepts", type: "related", icon: BookOpen },
      { label: "Advanced tips", type: "followup", icon: Brain }
    ]
  }
}

// Smart response generator with conversation awareness
class EnhancedResponseGenerator {
  static generateResponse(
    query: string, 
    context: ConversationContext,
    previousMessages: ChatMessage[]
  ): {
    content: string
    type: ChatMessage['type']
    quickActions: QuickAction[]
    confidence: number
  } {
    const queryLower = query.toLowerCase()
    const labInfo = ENHANCED_KNOWLEDGE_BASE.labs[context.currentLab as keyof typeof ENHANCED_KNOWLEDGE_BASE.labs]
    
    // Analyze conversation history for context
    const recentContext = this.analyzeConversationContext(previousMessages, query)
    
    // Check for step-by-step guide requests
    for (const [guideKey, guide] of Object.entries(labInfo?.stepByStepGuides || {})) {
      if (this.matchesGuide(queryLower, guideKey, guide.title)) {
        return {
          content: this.formatStepByStepGuide(guide, context.currentLab),
          type: "guidance",
          quickActions: this.generateQuickActions("after_explanation", guide.title),
          confidence: 0.95
        }
      }
    }

    // Check for error/troubleshooting
    if (this.isErrorQuery(queryLower)) {
      return this.generateErrorResponse(queryLower, context, labInfo)
    }

    // Check for concept explanations
    if (this.isConceptQuery(queryLower)) {
      return this.generateConceptResponse(queryLower, context, recentContext)
    }

    // Check for progress/encouragement needs
    if (this.needsEncouragement(queryLower, recentContext)) {
      return this.generateEncouragementResponse(context, recentContext)
    }

    // Default conversational response
    return this.generateDefaultResponse(query, context, labInfo)
  }

  private static analyzeConversationContext(messages: ChatMessage[], currentQuery: string) {
    const recentMessages = messages.slice(-5) // Last 5 messages
    const topics = recentMessages
      .filter(m => m.type !== undefined)
      .map(m => m.type)
    
    const hasErrors = topics.includes('troubleshooting')
    const hasSuccess = topics.includes('success')
    const repeatQuestion = recentMessages.some(m => 
      m.role === 'user' && 
      this.calculateSimilarity(m.content, currentQuery) > 0.7
    )

    return { topics, hasErrors, hasSuccess, repeatQuestion }
  }

  private static matchesGuide(query: string, guideKey: string, guideTitle: string): boolean {
    const keywords = guideKey.split('_').concat(guideTitle.toLowerCase().split(' '))
    return keywords.some(keyword => query.includes(keyword))
  }

  private static formatStepByStepGuide(guide: any, currentLab: string): string {
    let response = `# ${guide.title}\n\n`
    
    response += "## Step-by-Step Instructions:\n\n"
    guide.steps.forEach((step: string, index: number) => {
      response += `**${index + 1}.** ${step}\n\n`
    })

    if (guide.troubleshooting && guide.troubleshooting.length > 0) {
      response += "## 🔧 Common Issues:\n\n"
      guide.troubleshooting.forEach((issue: string) => {
        response += `• ${issue}\n\n`
      })
    }

    response += `💡 **Need help with a specific step?** Just ask "explain step X" or "I'm stuck on step X"!`

    return response
  }

  private static isErrorQuery(query: string): boolean {
    const errorKeywords = ['error', 'not working', 'failed', 'broken', 'wrong', 'problem', 'issue', 'help']
    return errorKeywords.some(keyword => query.includes(keyword))
  }

  private static generateErrorResponse(query: string, context: ConversationContext, labInfo: any) {
    // Try to match specific errors
    for (const [errorKey, errorInfo] of Object.entries(labInfo?.commonErrors || {})) {
      if (query.includes(errorKey.replace('_', ' ')) || this.matchesErrorKeywords(query, errorInfo)) {
        return {
          content: this.formatErrorSolution(errorInfo),
          type: "troubleshooting" as const,
          quickActions: this.generateQuickActions("after_error_fix", errorKey),
          confidence: 0.9
        }
      }
    }

    // Generic troubleshooting response
    return {
      content: `I see you're having trouble! Let me help you troubleshoot this step by step.

🔍 **First, let's identify the issue:**
1. What exactly were you trying to do?
2. What did you expect to happen?
3. What actually happened instead?
4. Are there any error messages?

💡 **Quick checks for common issues:**
• File paths have no spaces or special characters
• All data layers use the same coordinate system
• Required data files are properly loaded
• QGIS/software is up to date

Tell me more about what you're seeing, and I'll give you a specific solution!`,
      type: "troubleshooting" as const,
      quickActions: [
        { label: "Common QGIS errors", type: "troubleshoot", icon: AlertCircle },
        { label: "File loading issues", type: "troubleshoot", icon: HelpCircle },
        { label: "Coordinate system help", type: "related", icon: Map }
      ],
      confidence: 0.7
    }
  }

  private static formatErrorSolution(errorInfo: any): string {
    return `## 🔧 ${errorInfo.problem}

**Solution:**
${errorInfo.solution}

**Why this happens:**
${errorInfo.details}

**Prevention:**
${errorInfo.prevention}

✅ **Try this fix and let me know if it works!**`
  }

  private static isConceptQuery(query: string): boolean {
    const conceptKeywords = ['what is', 'explain', 'how does', 'define', 'meaning', 'concept']
    return conceptKeywords.some(keyword => query.includes(keyword))
  }

  private static generateConceptResponse(query: string, context: ConversationContext, recentContext: any) {
    // This would contain concept explanations similar to current contextual service
    // but with more conversational tone and interactive elements
    
    if (query.includes('coordinate') || query.includes('crs')) {
      return {
        content: `# Understanding Coordinate Reference Systems (CRS) 🌍

Think of CRS like giving directions - you need a common reference point!

**Simple Explanation:**
• CRS tells QGIS where things are located on Earth
• Different CRS = different "maps" of the same place
• Like using different languages to describe the same location

**For Uganda (this workshop):**
• **WGS 84 UTM Zone 36N (EPSG:32636)** → Best for measurements
• **WGS 84 (EPSG:4326)** → Best for GPS coordinates

**Why it matters:**
• Wrong CRS = incorrect distances and areas
• Mismatched CRS = data won't align properly
• Proper CRS = accurate analysis results

🎯 **Quick tip:** When in doubt, use EPSG:32636 for Uganda!`,
        type: "concept" as const,
        quickActions: [
          { label: "Show me how to set CRS", type: "followup", icon: Settings },
          { label: "Fix CRS alignment issues", type: "troubleshoot", icon: AlertCircle },
          { label: "More about projections", type: "related", icon: BookOpen }
        ],
        confidence: 0.95
      }
    }

    return this.generateDefaultResponse(query, context, null)
  }

  private static needsEncouragement(query: string, recentContext: any): boolean {
    const frustrationKeywords = ['frustrated', 'stuck', 'confused', 'hard', 'difficult', 'lost']
    return frustrationKeywords.some(keyword => query.includes(keyword)) || 
           recentContext.hasErrors && recentContext.topics.length > 3
  }

  private static generateEncouragementResponse(context: ConversationContext, recentContext: any) {
    const labInfo = ENHANCED_KNOWLEDGE_BASE.labs[context.currentLab as keyof typeof ENHANCED_KNOWLEDGE_BASE.labs]
    
    return {
      content: `I understand ${labInfo?.title || 'GIS'} can feel overwhelming sometimes - that's completely normal! 🤗

**You're not alone:**
• Everyone struggles with these concepts initially
• Each challenge you overcome makes you stronger
• The learning process is just as valuable as the end result

**Let's break this down together:**
• We can tackle one small step at a time
• I'll explain things as simply as possible
• No question is too basic - ask away!

🎯 **What specific part would you like to start with?** I'm here to help you succeed!`,
      type: "guidance" as const,
      quickActions: [
        { label: "Start with basics", type: "followup", icon: Lightbulb },
        { label: "Common beginner issues", type: "troubleshoot", icon: HelpCircle },
        { label: "Study tips", type: "related", icon: Brain }
      ],
      confidence: 0.85
    }
  }

  private static generateDefaultResponse(query: string, context: ConversationContext, labInfo: any) {
    return {
      content: `I'm here to help with "${query}"! 

${labInfo ? `For **${labInfo.title}**, I can help you with:` : 'I can help you with:'}

${labInfo?.commonQuestions ? 
  labInfo.commonQuestions.map((q: string) => `• ${q}`).join('\n') :
  `• QGIS fundamentals and troubleshooting
• Google Earth Engine and remote sensing
• Spatial analysis concepts
• Data management and visualization
• Step-by-step guidance through labs`
}

🤔 **Could you be more specific about what you're trying to do?** The more details you give me, the better I can help!`,
      type: "question" as const,
      quickActions: [
        { label: "Common questions", type: "related", icon: HelpCircle },
        { label: "Getting started", type: "followup", icon: Target },
        { label: "Browse lab topics", type: "related", icon: BookOpen }
      ],
      confidence: 0.6
    }
  }

  private static generateQuickActions(type: string, context?: string): QuickAction[] {
    const actionTemplates = ENHANCED_KNOWLEDGE_BASE.quickActions[type as keyof typeof ENHANCED_KNOWLEDGE_BASE.quickActions] || []
    
    return actionTemplates.map(template => ({
      ...template,
      action: () => {
        // These would trigger specific responses
        console.log(`Quick action: ${template.label}`)
      }
    }))
  }

  private static matchesErrorKeywords(query: string, errorInfo: any): boolean {
    const errorText = `${errorInfo.problem} ${errorInfo.solution}`.toLowerCase()
    const queryWords = query.split(' ')
    return queryWords.some(word => word.length > 3 && errorText.includes(word))
  }

  private static calculateSimilarity(str1: string, str2: string): number {
    // Simple similarity calculation
    const words1 = str1.toLowerCase().split(' ')
    const words2 = str2.toLowerCase().split(' ')
    const commonWords = words1.filter(word => words2.includes(word))
    return commonWords.length / Math.max(words1.length, words2.length)
  }
}

export interface EnhancedWorkshopChatbotProps {
  currentLab?: string
  currentStep?: number
  isMinimized?: boolean
  onToggleMinimize?: () => void
  className?: string
}

export const EnhancedWorkshopChatbot = React.forwardRef<HTMLDivElement, EnhancedWorkshopChatbotProps>(
  ({ currentLab = "lab1", currentStep = 1, isMinimized = false, onToggleMinimize, className }, ref) => {
    const [messages, setMessages] = React.useState<ChatMessage[]>([
      {
        id: "welcome",
        role: "assistant",
        content: `Hey there! 👋 I'm your interactive GIS workshop assistant!

I see you're working on **${ENHANCED_KNOWLEDGE_BASE.labs[currentLab as keyof typeof ENHANCED_KNOWLEDGE_BASE.labs]?.title || 'Lab 1'}**. I'm here to help you succeed!

🎯 **I can help you with:**
• Step-by-step tutorials
• Troubleshooting errors  
• Explaining concepts clearly
• Encouraging you when stuck
• Providing quick solutions

**What would you like to work on first?**`,
        timestamp: new Date(),
        type: "guidance",
        quickActions: [
          { label: "Lab overview", type: "related", icon: BookOpen },
          { label: "Common issues", type: "troubleshoot", icon: AlertCircle },
          { label: "Getting started", type: "followup", icon: Target }
        ]
      }
    ])

    const [input, setInput] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(false)
    const [context, setContext] = React.useState<ConversationContext>({
      currentLab,
      currentStep,
      recentTopics: [],
      userExpertise: 'beginner',
      previousQuestions: [],
      sessionStartTime: new Date(),
      helpfulResponses: [],
      strugglingAreas: []
    })

    const messagesEndRef = React.useRef<HTMLDivElement>(null)

    // Auto-scroll to bottom
    React.useEffect(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    // Update context when lab changes
    React.useEffect(() => {
      setContext(prev => ({
        ...prev,
        currentLab,
        currentStep
      }))
    }, [currentLab, currentStep])

    const handleSendMessage = async () => {
      if (!input.trim() || isLoading) return

      const userMessage: ChatMessage = {
        id: Date.now().toString(),
        role: "user",
        content: input.trim(),
        timestamp: new Date()
      }

      setMessages(prev => [...prev, userMessage])
      setInput("")
      setIsLoading(true)

      // Update context with user question
      setContext(prev => ({
        ...prev,
        previousQuestions: [...prev.previousQuestions, input.trim()].slice(-10) // Keep last 10
      }))

      try {
        // Generate enhanced response
        const response = EnhancedResponseGenerator.generateResponse(
          input.trim(),
          context,
          messages
        )

        const assistantMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: response.content,
          timestamp: new Date(),
          type: response.type,
          confidence: response.confidence,
          quickActions: response.quickActions,
          relatedLab: currentLab
        }

        setTimeout(() => {
          setMessages(prev => [...prev, assistantMessage])
          setIsLoading(false)
        }, 800) // Slightly faster response

      } catch (error) {
        const errorMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "I'm having a brief moment of confusion! 😅 Could you try rephrasing your question? I want to make sure I give you the best help possible!",
          timestamp: new Date(),
          type: "troubleshooting"
        }

        setMessages(prev => [...prev, errorMessage])
        setIsLoading(false)
      }
    }

    const handleQuickAction = (action: QuickAction, messageId: string) => {
      // Set input to trigger the quick action
      const actionQueries = {
        'Show me step-by-step': 'Show me detailed step-by-step instructions',
        'Common errors with this': 'What are common errors with this topic?',
        "What's next?": 'What should I do next?',
        'Test the solution': 'How can I test if this solution worked?',
        'Next challenge': 'What should I learn next?',
        'Common questions': 'What are the most common questions for this lab?'
      }
      
      const query = actionQueries[action.label as keyof typeof actionQueries] || action.label
      setInput(query)
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault()
        handleSendMessage()
      }
    }

    const clearChat = () => {
      setMessages([messages[0]]) // Keep welcome message
      setContext(prev => ({
        ...prev,
        recentTopics: [],
        previousQuestions: [],
        helpfulResponses: [],
        strugglingAreas: []
      }))
    }

    if (isMinimized) {
      return (
        <div 
          ref={ref}
          className={cn(
            "fixed bottom-6 right-6 w-16 h-16 bg-primary rounded-full shadow-lg cursor-pointer hover:scale-105 transition-all duration-300 flex items-center justify-center z-50",
            className
          )}
          onClick={onToggleMinimize}
        >
          <MessageSquare className="h-8 w-8 text-primary-foreground" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-pulse" />
        </div>
      )
    }

    return (
      <Card
        ref={ref}
        className={cn(
          "fixed bottom-6 right-6 w-[420px] h-[650px] shadow-2xl flex flex-col z-50",
          className
        )}
      >
        <CardHeader className="flex-shrink-0 pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Brain className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <CardTitle className="text-lg">GIS Workshop Assistant</CardTitle>
                <p className="text-xs text-muted-foreground">
                  {ENHANCED_KNOWLEDGE_BASE.labs[currentLab as keyof typeof ENHANCED_KNOWLEDGE_BASE.labs]?.title || 'Interactive Help'}
                </p>
              </div>
            </div>
            <div className="flex space-x-1">
              <Button size="sm" variant="ghost" onClick={clearChat} title="Clear chat">
                <RefreshCw className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" onClick={onToggleMinimize} title="Minimize">
                <Minimize2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col p-4 pt-0 min-h-0">
          {/* Messages */}
          <ScrollArea className="flex-1 mb-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className="space-y-3">
                  <div
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
                          
                          {/* Message metadata */}
                          {message.role === "assistant" && (
                            <div className="flex items-center justify-between mt-2 text-xs">
                              <div className="flex items-center space-x-2">
                                {message.type && (
                                  <Badge variant="outline" className="text-xs">
                                    {message.type === "troubleshooting" && <AlertCircle className="h-3 w-3 mr-1" />}
                                    {message.type === "concept" && <BookOpen className="h-3 w-3 mr-1" />}
                                    {message.type === "guidance" && <Lightbulb className="h-3 w-3 mr-1" />}
                                    {message.type}
                                  </Badge>
                                )}
                                {message.confidence && (
                                  <span className="text-muted-foreground">
                                    {Math.round(message.confidence * 100)}% confident
                                  </span>
                                )}
                              </div>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => navigator.clipboard.writeText(message.content)}
                                className="h-6 px-2 opacity-0 group-hover:opacity-100"
                              >
                                <Copy className="h-3 w-3" />
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  {message.role === "assistant" && message.quickActions && message.quickActions.length > 0 && (
                    <div className="flex flex-wrap gap-2 ml-6">
                      {message.quickActions.slice(0, 3).map((action, index) => (
                        <Button
                          key={index}
                          size="sm"
                          variant="outline"
                          onClick={() => handleQuickAction(action, message.id)}
                          className="h-7 text-xs"
                        >
                          {action.icon && <action.icon className="h-3 w-3 mr-1" />}
                          {action.label}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted p-3 rounded-lg max-w-[85%]">
                    <div className="flex items-center space-x-2">
                      <Bot className="h-4 w-4 text-muted-foreground" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.1s'}} />
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.2s'}} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div ref={messagesEndRef} />
          </ScrollArea>

          {/* Quick suggestions for first message */}
          {messages.length <= 1 && (
            <div className="mb-4">
              <p className="text-xs text-muted-foreground mb-2">Popular questions:</p>
              <div className="flex flex-wrap gap-2">
                {ENHANCED_KNOWLEDGE_BASE.labs[currentLab as keyof typeof ENHANCED_KNOWLEDGE_BASE.labs]?.commonQuestions?.slice(0, 3).map((question, index) => (
                  <Button
                    key={index}
                    size="sm"
                    variant="outline"
                    onClick={() => setInput(question)}
                    className="text-xs h-7"
                  >
                    {question.length > 25 ? question.substring(0, 25) + "..." : question}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input area */}
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask anything about GIS, labs, or concepts..."
              disabled={isLoading}
              className="flex-1"
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

EnhancedWorkshopChatbot.displayName = "EnhancedWorkshopChatbot" 