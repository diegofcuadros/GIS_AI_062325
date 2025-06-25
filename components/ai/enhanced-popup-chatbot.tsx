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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { MarkdownContent } from "./markdown-content"

export interface EnhancedChatMessage {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
  type?: "question" | "suggestion" | "error"
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
      content: `Hi! I'm your Enhanced GIS AI Assistant! 🎓\n\nI'm powered by RAG technology and have access to all workshop materials. I can help you with:\n\n• **Lab procedures** and step-by-step guidance\n• **GIS fundamentals** and technical concepts\n• **Troubleshooting** for QGIS and Google Earth Engine\n• **Practical examples** from the workshop\n\nAsk me anything about the workshop content!`,
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

  // RAG API Integration for Enhanced Chatbot
  const generateEnhancedResponse = async (userMessage: string, conversationHistory: EnhancedChatMessage[]): Promise<EnhancedChatMessage> => {
    try {
      // Prepare conversation history for API
      const apiMessages = conversationHistory
        .filter(msg => msg.role === 'user' || msg.role === 'assistant')
        .map(msg => ({
          role: msg.role,
          content: msg.content
        }))

      // Add the current user message
      apiMessages.push({
        role: 'user',
        content: userMessage
      })

      // Prepare enhanced user context
      const userContext = {
        currentLab: currentLab,
        difficulty: 'intermediate', // Enhanced version defaults to intermediate
        currentStep: currentStep,
        enhancedMode: true,
        sessionInfo: {
          totalMessages: conversationHistory.length,
          startTime: conversationHistory[0]?.timestamp || new Date(),
          isEnhancedSession: true
        }
      }

      // Call RAG API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: apiMessages,
          userContext: userContext
        })
      })

      if (!response.ok) {
        throw new Error(`RAG API error: ${response.status} ${response.statusText}`)
      }

      // Handle Vercel AI SDK data stream response
      const reader = response.body?.getReader()
      if (!reader) {
        throw new Error('No response stream available')
      }

      let fullResponse = ''
      const decoder = new TextDecoder()

      // Read the entire streaming response
      let responseText = ''
      
      // Read all chunks from the stream
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        responseText += decoder.decode(value, { stream: true })
      }
      
      // Parse Vercel AI SDK streaming format
      const lines = responseText.split('\n').filter(line => line.trim())
      
      for (const line of lines) {
        if (line.startsWith('0:')) {
          // Extract text content from Vercel AI format
          try {
            const jsonStr = line.slice(2)
            const parsed = JSON.parse(jsonStr)
            
            // Handle different response formats
            if (typeof parsed === 'string') {
              fullResponse += parsed
            } else if (parsed && typeof parsed === 'object') {
              // Extract text from object format
              if (parsed.content) fullResponse += parsed.content
              else if (parsed.text) fullResponse += parsed.text
              else if (parsed.delta) fullResponse += parsed.delta
              else fullResponse += JSON.stringify(parsed)
            }
          } catch (parseError) {
            // If JSON parsing fails, try direct text extraction
            const textContent = line.slice(2).replace(/"/g, '')
            if (textContent && textContent.length > 0) {
              fullResponse += textContent
            }
          }
        } else if (line.includes('"')) {
          // Handle direct text responses
          try {
            const textMatch = line.match(/"([^"]+)"/)
            if (textMatch && textMatch[1]) {
              fullResponse += textMatch[1]
            }
          } catch (e) {
            // Fallback: add the line as-is if it contains meaningful text
            if (line.length > 10 && !line.includes('data:') && !line.includes('event:')) {
              fullResponse += line
            }
          }
        }
      }
      
      // If we still don't have a response, try to read the response as text
      if (!fullResponse && responseText) {
        // Final fallback: try to extract any meaningful text
        const meaningfulText = responseText
          .replace(/^data:\s*/gm, '')
          .replace(/^event:\s*/gm, '')
          .replace(/^\d+:/gm, '')
          .replace(/[{}[\]"]/g, '')
          .split('\n')
          .filter(line => line.trim() && line.length > 10)
          .join(' ')
          .trim()
          
        if (meaningfulText) {
          fullResponse = meaningfulText
        }
      }

      return {
        id: Date.now().toString(),
        role: "assistant",
        content: fullResponse,
        timestamp: new Date()
      }

    } catch (error) {
      console.error('Enhanced RAG API Error:', error)
      
      return {
        id: Date.now().toString(),
        role: "assistant",
        content: `I apologize, but I'm having trouble accessing the workshop materials right now. 

**Please try:**
• Refreshing the page and asking again
• Checking your internet connection
• Asking a more specific question

**Enhanced features I can help with:**
• "Explain coordinate systems in detail"
• "Advanced buffer analysis techniques"
• "Complex Google Earth Engine workflows"
• "Machine learning for GIS applications"

What would you like to explore?`,
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
      const response = await generateEnhancedResponse(input.trim(), messages)
      setMessages(prev => [...prev, response])
    } catch (error) {
      const errorMessage: EnhancedChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I apologize, but I encountered an error processing your question. Please try asking again.",
        timestamp: new Date(),
        type: "error"
      }

      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleQuickSuggestion = async (suggestion: string) => {
    setInput(suggestion)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const currentSuggestions = QUICK_SUGGESTIONS[currentLab as keyof typeof QUICK_SUGGESTIONS] || QUICK_SUGGESTIONS.general

  if (!isOpen) return null

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
        onClick={onClose}
      />
      
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
        }}
        onMouseDown={handleMouseDown}
      >
        {/* Header */}
        <div 
          ref={headerRef}
          className={cn(
            "flex items-center justify-between p-4 border-b border-border bg-card rounded-t-xl",
            "cursor-move select-none"
          )}
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Bot className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-sm">Enhanced GIS AI Assistant</h3>
              <p className="text-xs text-muted-foreground">
                {currentLab !== 'general' ? `Lab ${currentLab.slice(-1)} • ` : ''}
                Powered by RAG
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(!isMinimized)}
              className="h-7 w-7 p-0"
            >
              {isMinimized ? (
                <Maximize2 className="h-3 w-3" />
              ) : (
                <Minimize2 className="h-3 w-3" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-7 w-7 p-0"
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        </div>

        {/* Content area */}
        {!isMinimized && (
          <>
            {/* Messages area */}
            <ScrollArea className="flex-grow pr-4 -mr-4">
              <div className="space-y-6">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex gap-3",
                      message.role === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    {message.role === "assistant" && (
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Bot className="w-5 h-5 text-primary" />
                      </div>
                    )}
                    <div className="max-w-[85%]">
                      <div
                        className={cn(
                          "p-3 rounded-lg relative",
                          message.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        )}
                      >
                        <MarkdownContent content={message.content} />
                        {message.role === 'assistant' && message.id !== 'welcome' && (
                          <div className="mt-2 pt-2 border-t border-muted-foreground/20">
                            <h4 className="text-xs font-semibold mb-1">Quick actions:</h4>
                             <Button variant="outline" size="sm" className="text-xs mr-2">
                              Show step-by-step
                             </Button>
                             <Button variant="outline" size="sm" className="text-xs">
                              Explain this concept
                             </Button>
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>

                    {message.role === "user" && (
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                        <img src="/placeholder-logo.png" alt="User" className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            <div className="mt-4">
               <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Suggestions for you</AccordionTrigger>
                    <AccordionContent>
                        <div className="grid grid-cols-2 gap-2">
                          {(QUICK_SUGGESTIONS[currentLab as keyof typeof QUICK_SUGGESTIONS] || QUICK_SUGGESTIONS.general).map((suggestion, i) => (
                            <Button
                              key={i}
                              variant="outline"
                              size="sm"
                              className="h-auto text-left py-2"
                              onClick={() => handleQuickSuggestion(suggestion)}
                            >
                              {suggestion}
                            </Button>
                          ))}
                        </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
            </div>

            {/* Input area */}
            <div className="p-4 border-t border-border">
              <div className="flex space-x-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about advanced GIS concepts..."
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  disabled={!input.trim() || isLoading}
                  className="px-3"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-xs">
                    Enhanced Mode
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {currentLab !== 'general' ? `Lab ${currentLab.slice(-1)}` : 'General'}
                  </Badge>
                </div>
                <div className="text-xs text-muted-foreground">
                  RAG + Llama 3
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
} 