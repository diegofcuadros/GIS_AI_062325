'use client'

import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { 
  MessageCircle, 
  X, 
  Send, 
  Minimize2, 
  Maximize2, 
  HelpCircle,
  Lightbulb,
  GripHorizontal,
  Bot
} from "lucide-react"

import { ContextualAIService } from "@/lib/contextual-ai-service"
import { dynamicKnowledge } from "@/lib/dynamic-knowledge-service"
import { smartLinkService, SmartLink, CitationInfo, LinkContext } from "@/lib/smart-link-service"
import { SmartLinksDisplay } from "./smart-links-display"
import { MarkdownContent } from "./markdown-content"

export interface EnhancedChatMessage {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
  type?: "question" | "suggestion" | "error"
  smartLinks?: SmartLink[]
  citations?: CitationInfo[]
  relatedContent?: SmartLink[]
}

export interface EnhancedPopupChatbotProps {
  isOpen: boolean
  onClose: () => void
  currentLab?: string
  currentStep?: number
  className?: string
}

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

export function EnhancedPopupChatbot({ 
  isOpen, 
  onClose, 
  currentLab = "general",
  currentStep,
  className 
}: EnhancedPopupChatbotProps) {
  const [messages, setMessages] = React.useState<EnhancedChatMessage[]>([
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

  const popupRef = React.useRef<HTMLDivElement>(null)
  const headerRef = React.useRef<HTMLDivElement>(null)
  const messagesEndRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

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
    
    const maxX = window.innerWidth - 400
    const maxY = window.innerHeight - 600
    
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

  const generateEnhancedResponse = async (userMessage: string): Promise<EnhancedChatMessage> => {
    try {
      const currentUrl = typeof window !== 'undefined' ? window.location.pathname + window.location.hash : ''
      const pageContent = typeof document !== 'undefined' ? document.body.innerText : undefined
      
      const labContext = ContextualAIService.detectLabContext(currentUrl, pageContent)
      const contextualResponse = ContextualAIService.generateContextualResponse(userMessage, labContext)
      
      const linkContext: LinkContext = {
        currentLab: currentLab,
        userQuery: userMessage,
        relatedConcepts: [], // Can be enhanced based on lab content analysis
        difficulty: 'beginner'
      }
      
      const smartLinks = smartLinkService.generateContextualLinks(userMessage, linkContext)
      const citations = smartLinkService.extractCitationsFromText(userMessage + ' ' + (contextualResponse?.answer || ''))
      const relatedContent = currentLab !== "general" ? smartLinkService.getRelatedContentSuggestions(currentLab) : []
      
      let responseContent = contextualResponse?.answer || "I can help with GIS concepts and lab procedures. Try asking about QGIS, Google Earth Engine, or spatial analysis!"
      
      return {
        id: Date.now().toString(),
        role: "assistant",
        content: responseContent,
        timestamp: new Date(),
        smartLinks: smartLinks.length > 0 ? smartLinks : undefined,
        citations: citations.length > 0 ? citations : undefined,
        relatedContent: relatedContent.length > 0 ? relatedContent : undefined
      }
    } catch (error) {
      console.error('Error generating enhanced response:', error)
      return {
        id: Date.now().toString(),
        role: "assistant",
        content: "I'm sorry, I encountered an error processing your request. Please try asking your question again.",
        timestamp: new Date(),
        type: "error"
      }
    }
  }

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: EnhancedChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const assistantMessage = await generateEnhancedResponse(input.trim())
      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error sending message:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleQuickSuggestion = async (suggestion: string) => {
    setInput(suggestion)
    
    // Auto-send the suggestion
    const userMessage: EnhancedChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: suggestion,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setIsLoading(true)

    try {
      const assistantMessage = await generateEnhancedResponse(suggestion)
      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error with quick suggestion:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (!isOpen) return null

  const suggestions = QUICK_SUGGESTIONS[currentLab as keyof typeof QUICK_SUGGESTIONS] || QUICK_SUGGESTIONS.general

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <Card
        ref={popupRef}
        className={cn(
          "w-[90vw] md:w-[500px] flex flex-col",
          isMinimized ? "h-[60px]" : "h-[80vh] md:h-[650px]",
          "shadow-2xl border-2 transition-all duration-200",
          className
        )}
        style={{
          position: 'absolute',
          left: position.x,
          top: position.y,
          cursor: isDragging ? 'grabbing' : 'default'
        }}
      >
        <CardHeader 
          ref={headerRef}
          className="flex flex-row items-center justify-between space-y-0 pb-2 cursor-grab active:cursor-grabbing bg-primary/5"
          onMouseDown={handleMouseDown}
        >
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg">GIS Learning Assistant</CardTitle>
            {currentLab !== "general" && (
              <Badge variant="secondary" className="text-xs">
                {currentLab.toUpperCase()}
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-1">
            <GripHorizontal className="h-4 w-4 text-muted-foreground" />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(!isMinimized)}
              className="h-8 w-8 p-0"
            >
              {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        {!isMinimized && (
          <div className="flex flex-col flex-1 min-h-0">
            <CardContent className="flex-1 flex flex-col p-4 min-h-0">
              <ScrollArea className="flex-1 pr-4">
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
                            "max-w-[85%] rounded-lg px-3 py-2 text-sm",
                            message.role === "user"
                              ? "bg-primary text-primary-foreground"
                              : message.type === "error"
                              ? "bg-destructive/10 text-destructive border border-destructive/20"
                              : "bg-muted",
                            message.type === "suggestion" && "border-2 border-primary/20"
                          )}
                        >
                          <MarkdownContent content={message.content} />
                          
                          {message.role === "assistant" && (
                            <div className="text-xs text-muted-foreground mt-1">
                              {message.timestamp.toLocaleTimeString([], { 
                                hour: '2-digit', 
                                minute: '2-digit' 
                              })}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Smart Links Display */}
                      {message.role === "assistant" && (
                        message.smartLinks || message.citations || message.relatedContent
                      ) && (
                        <div className="ml-4">
                          <SmartLinksDisplay
                            links={message.smartLinks || []}
                            citations={message.citations}
                            relatedContent={message.relatedContent}
                            className="max-w-[85%]"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-muted rounded-lg px-3 py-2 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary border-t-transparent" />
                          Thinking...
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div ref={messagesEndRef} />
              </ScrollArea>

              {/* Quick suggestions */}
              {messages.length === 1 && (
                <div className="mt-4 space-y-2">
                  <p className="text-xs text-muted-foreground flex items-center gap-2">
                    <Lightbulb className="h-3 w-3" />
                    Quick suggestions:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {suggestions.map((suggestion, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuickSuggestion(suggestion)}
                        className="h-7 text-xs"
                        disabled={isLoading}
                      >
                        {suggestion}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input area */}
              <div className="flex gap-2 mt-4">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about GIS or the labs..."
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={isLoading || !input.trim()}
                  size="sm"
                  className="px-3"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </div>
        )}
      </Card>
    </div>
  )
} 