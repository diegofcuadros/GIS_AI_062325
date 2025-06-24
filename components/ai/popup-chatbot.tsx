"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { 
  Bot, 
  Send, 
  Loader2,
  Minimize2,
  Maximize2,
  X,
  GripHorizontal,
  MessageSquare,
  Lightbulb,
  BookOpen,
  User,
  Sparkles,
  HelpCircle,
  ArrowUp,
  Keyboard
} from "lucide-react"
import { introductoryKnowledge } from "@/lib/introductory-knowledge"
import { enhancedAI } from "@/lib/enhanced-ai-service"
import { ContextualAIService } from "@/lib/contextual-ai-service"
import { dynamicKnowledge } from "@/lib/dynamic-knowledge-service"
import { smartLinkService, SmartLink, CitationInfo, LinkContext } from "@/lib/smart-link-service"
import { SmartLinksDisplay } from "./smart-links-display"

export interface ChatMessage {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
  type?: "question" | "suggestion" | "error"
  smartLinks?: SmartLink[]
  citations?: CitationInfo[]
  relatedContent?: SmartLink[]
}

export interface PopupChatbotProps {
  isOpen: boolean
  onClose: () => void
  currentLab?: string
  currentStep?: number
  className?: string
}

// Quick suggestion prompts for different contexts
const QUICK_SUGGESTIONS = {
  general: [
    "What is GIS?",
    "Vector vs raster data",
    "What is Google Earth Engine?",
    "What is a shapefile?"
  ],
  lab1: [
    "How do I load data in QGIS?",
    "What is a coordinate reference system?",
    "How to fix invalid geometry?",
    "Creating choropleth maps"
  ],
  lab2: [
    "What are buffer zones?",
    "How to do spatial joins?",
    "Healthcare accessibility analysis",
    "Distance analysis in QGIS"
  ],
  lab3: [
    "Google Earth Engine authentication",
    "What is NDVI?",
    "How to calculate vegetation indices?",
    "Working with satellite imagery"
  ],
  lab4: [
    "AI-assisted programming tips",
    "Debugging Earth Engine code",
    "ChatGPT for GIS coding",
    "Best coding practices"
  ],
  lab5: [
    "What is k-means clustering?",
    "Machine learning in GIS",
    "Risk assessment modeling",
    "Interpreting cluster results"
  ]
}

export function PopupChatbot({ 
  isOpen, 
  onClose, 
  currentLab = "general",
  currentStep,
  className 
}: PopupChatbotProps) {
  const [messages, setMessages] = React.useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content: `Hi! I'm your GIS Learning Assistant! 🎓\n\nI can help you with:\n• **Lab procedures** and step-by-step guidance\n• **GIS fundamentals** (what is GIS, vector vs raster, etc.)\n• **Technical troubleshooting** for QGIS and Google Earth Engine\n• **Concepts** like coordinate systems, spatial analysis\n\nWhat would you like to learn about?`,
      timestamp: new Date(),
      type: "suggestion"
    }
  ])
  const [input, setInput] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const [isMinimized, setIsMinimized] = React.useState(false)
  const [position, setPosition] = React.useState({ x: 20, y: 20 })
  const [isDragging, setIsDragging] = React.useState(false)
  const [dragOffset, setDragOffset] = React.useState({ x: 0, y: 0 })

  // Refs for dragging functionality
  const popupRef = React.useRef<HTMLDivElement>(null)
  const headerRef = React.useRef<HTMLDivElement>(null)
  const messagesEndRef = React.useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when new messages arrive
  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Keyboard shortcut (Escape to close)
  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }
    
    if (isOpen) {
      document.addEventListener("keydown", handleKeyPress)
    }
    
    return () => document.removeEventListener("keydown", handleKeyPress)
  }, [isOpen, onClose])

  // Dragging functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!headerRef.current?.contains(e.target as Node)) return
    
    setIsDragging(true)
    const rect = popupRef.current?.getBoundingClientRect()
    if (rect) {
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
    }
  }

  const handleMouseMove = React.useCallback((e: MouseEvent) => {
    if (!isDragging) return
    
    const newX = e.clientX - dragOffset.x
    const newY = e.clientY - dragOffset.y
    
    // Keep popup within viewport bounds
    const maxX = window.innerWidth - 400 // popup width
    const maxY = window.innerHeight - 600 // popup height
    
    setPosition({
      x: Math.max(0, Math.min(newX, maxX)),
      y: Math.max(0, Math.min(newY, maxY))
    })
  }, [isDragging, dragOffset])

  const handleMouseUp = React.useCallback(() => {
    setIsDragging(false)
  }, [])

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }
    
    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, handleMouseMove, handleMouseUp])

  // Generate response using contextual AI service
  const generateResponse = async (userMessage: string): Promise<string> => {
    try {
      // Detect current lab context from URL and page content
      const currentUrl = typeof window !== 'undefined' ? window.location.pathname + window.location.hash : ''
      const pageContent = typeof document !== 'undefined' ? document.body.innerText : undefined
      
      const labContext = ContextualAIService.detectLabContext(currentUrl, pageContent)
      
      // Generate contextual response
      const contextualResponse = ContextualAIService.generateContextualResponse(userMessage, labContext)
      
      // Ensure we have a valid response
      if (contextualResponse && contextualResponse.answer && contextualResponse.answer.trim().length > 0) {
        // Format response with direct links
        let formattedResponse = contextualResponse.answer
        
        if (contextualResponse.directLinks && contextualResponse.directLinks.length > 0) {
          formattedResponse += "\n\n**Direct Links:**\n"
          contextualResponse.directLinks.forEach(link => {
            formattedResponse += `• [${link.text}](${link.url})\n`
          })
        }
        
        if (contextualResponse.tips && contextualResponse.tips.length > 0) {
          formattedResponse += "\n\n**💡 Tips:**\n"
          contextualResponse.tips.forEach(tip => {
            formattedResponse += `• ${tip}\n`
          })
        }
        
        if (contextualResponse.troubleshooting && contextualResponse.troubleshooting.length > 0) {
          formattedResponse += "\n\n**🔧 Troubleshooting:**\n"
          contextualResponse.troubleshooting.forEach(issue => {
            formattedResponse += `• ${issue}\n`
          })
        }
        
        return formattedResponse
      } else {
        console.warn('Contextual AI returned empty response, falling back...')
      }
      
    } catch (error) {
      console.warn('Contextual AI service error:', error)
    }
    
    // Primary fallback to dynamic knowledge service (Expansion_Knowledge integration)
    try {
      const searchResults = await dynamicKnowledge.search(userMessage, {
        maxResults: 5,
        labContext: currentLab
      })
      
      if (searchResults.length > 0) {
        const dynamicResponse = dynamicKnowledge.generateResponse(userMessage, searchResults, {
          currentLab: currentLab
        })
        
        if (dynamicResponse && dynamicResponse.length > 100) {
          return dynamicResponse
        }
      }
    } catch (dynamicError) {
      console.warn('Dynamic knowledge service error:', dynamicError)
    }
    
    // Secondary fallback to enhanced AI service
    try {
      const labContextPath = enhancedAI.detectLabContext(typeof window !== 'undefined' ? window.location.pathname : undefined)
      const enhancedResponse = enhancedAI.generateResponse(userMessage, {
        currentLab: labContextPath || currentLab,
        userExpertise: 'beginner'
      })
      
      if (enhancedResponse && enhancedResponse.length > 50) {
        return enhancedResponse
      }
    } catch (enhancedError) {
      console.warn('Enhanced AI service error:', enhancedError)
    }
    
    // Final fallback to introductory knowledge
    const results = introductoryKnowledge.search(userMessage)
    
    if (results.length > 0) {
      return introductoryKnowledge.generateResponse(userMessage)
    }
    
    // Final fallback response with context-aware suggestions
    const contextualSuggestions = enhancedAI.getContextualSuggestions(currentLab)
    const suggestionsText = contextualSuggestions.slice(0, 4).map(s => `- "${s}"`).join('\n')
    
    return `I'd love to help you with "${userMessage}"! 🤔

📚 **I have comprehensive knowledge about:**
- **GIS Fundamentals**: What is GIS, spatial analysis, coordinate systems
- **Data Types**: Vector vs raster, points/lines/polygons, shapefiles
- **Software**: QGIS basics, Google Earth Engine, troubleshooting
- **Lab Content**: Step-by-step guidance for workshop labs
- **Concepts**: NDVI, clustering, buffer analysis, spatial joins

**Try asking:**
${suggestionsText}

What specific aspect would you like me to explain?`
  }

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

    try {
      const response = await generateResponse(input.trim())
      
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I apologize, but I encountered an error. Please try asking your question again.",
        timestamp: new Date(),
        type: "error"
      }

      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleQuickSuggestion = (suggestion: string) => {
    setInput(suggestion)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  // Use enhanced AI service for context-aware suggestions or fallback to static suggestions
  const currentSuggestions = React.useMemo(() => {
    try {
      return enhancedAI.getContextualSuggestions(currentLab)
    } catch (error) {
      return QUICK_SUGGESTIONS[currentLab as keyof typeof QUICK_SUGGESTIONS] || QUICK_SUGGESTIONS.general
    }
  }, [currentLab])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop overlay */}
      <div 
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
        onClick={onClose}
      />
      
      {/* Popup container */}
      <div
        ref={popupRef}
        className={cn(
          "fixed z-50 w-[90vw] md:w-96 bg-background border border-border rounded-xl shadow-2xl",
          "transition-all duration-300 ease-in-out flex flex-col",
          isMinimized ? "h-14" : "h-[80vh] md:h-[650px]",
          isDragging ? "select-none" : "",
          className
        )}
        style={{
          left: position.x,
          top: position.y,
          cursor: isDragging ? "grabbing" : "default"
        }}

      >
        {/* Header */}
        <div
          ref={headerRef}
          className={cn(
            "flex items-center justify-between p-4 border-b border-border bg-card rounded-t-xl",
            "cursor-grab active:cursor-grabbing"
          )}
          onMouseDown={handleMouseDown}
        >
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Bot className="h-5 w-5 text-primary" />
              <Sparkles className="h-3 w-3 text-accent absolute -top-1 -right-1" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">GIS Learning Assistant</h3>
              {currentLab !== "general" && (
                <p className="text-xs text-muted-foreground">
                  Helping with {currentLab.toUpperCase()}
                  {currentStep && ` - Step ${currentStep}`}
                </p>
              )}
            </div>
          </div>
          
          <div className="flex items-center space-x-1">
            <GripHorizontal className="h-4 w-4 text-muted-foreground" />
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setIsMinimized(!isMinimized)}
            >
              {isMinimized ? (
                <Maximize2 className="h-4 w-4" />
              ) : (
                <Minimize2 className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Content */}
        {!isMinimized && (
          <div className="flex flex-col flex-1 min-h-0">
            {/* Quick suggestions */}
            <div className="p-3 border-b border-border bg-muted/30">
              <p className="text-xs font-medium text-muted-foreground mb-2">Quick help:</p>
              <div className="flex flex-wrap gap-1">
                {currentSuggestions.map((suggestion, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="h-7 text-xs"
                    onClick={() => handleQuickSuggestion(suggestion)}
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex gap-3",
                      message.role === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    {message.role === "assistant" && (
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <Bot className="h-4 w-4 text-primary" />
                        </div>
                      </div>
                    )}
                    
                    <div
                      className={cn(
                        "max-w-[80%] rounded-lg px-3 py-2 text-sm",
                        message.role === "user"
                          ? "bg-primary text-primary-foreground ml-auto"
                          : message.type === "error"
                          ? "bg-destructive/10 text-destructive border border-destructive/20"
                          : "bg-muted"
                      )}
                    >
                      <div className="whitespace-pre-wrap">{message.content}</div>
                      <div className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </div>
                    </div>

                    {message.role === "user" && (
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                          <User className="h-4 w-4 text-accent" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                    <div className="bg-muted rounded-lg px-3 py-2">
                      <div className="flex items-center space-x-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span className="text-sm text-muted-foreground">Thinking...</span>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex space-x-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about GIS, labs, or any concept..."
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  disabled={!input.trim() || isLoading}
                  className="shrink-0"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                <span>Press Enter to send, Escape to close</span>
                <Badge variant="outline" className="text-xs">
                  <Keyboard className="h-3 w-3 mr-1" />
                  Ctrl+K to open
                </Badge>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
} 