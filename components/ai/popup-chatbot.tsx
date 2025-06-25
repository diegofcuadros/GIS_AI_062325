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
import { MarkdownContent } from "./markdown-content"
import { QuickActionsPanel } from "./quick-actions-panel"
import { SmartSuggestionsCompact } from "./smart-suggestions-card"
import { SmartActionService } from "@/lib/smart-action-service"
import { SmartSuggestionsEngine } from "@/lib/smart-suggestions-engine"

export interface QuickAction {
  id: string
  label: string
  type: 'followup' | 'troubleshoot' | 'next_step' | 'related' | 'explain_more'
  icon: string
  priority: number
  contextTriggers: string[]
  payload?: any
}

export interface ChatMessage {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
  type?: "question" | "suggestion" | "error" | "guidance"
  quickActions?: QuickAction[]
  metadata?: {
    lab?: string
    difficulty?: string
    concepts?: string[]
    userInteraction?: 'helpful' | 'not_helpful'
  }
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

// User preferences interface
interface UserPreferences {
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  showQuickActions: boolean
  autoDetectLab: boolean
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
      content: `Hi! I'm your GIS AI Assistant! 🎓\n\nI'm powered by advanced AI and have access to all workshop materials. I can help you with:\n\n• **Lab procedures** and step-by-step guidance\n• **GIS fundamentals** and technical concepts\n• **Troubleshooting** for QGIS and Google Earth Engine\n• **Practical examples** from the workshop\n\nAsk me anything about the workshop content!`,
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
  const [userPreferences, setUserPreferences] = React.useState<UserPreferences>({
    difficulty: 'beginner',
    showQuickActions: true,
    autoDetectLab: true
  })

  // Phase 4B: Smart Actions and Suggestions state
  const [smartSuggestions, setSmartSuggestions] = React.useState<any[]>([])
  const [showSuggestions, setShowSuggestions] = React.useState(false)
  
  // Initialize Phase 4B services
  const smartActionService = React.useMemo(() => new SmartActionService(), [])
  const smartSuggestionsEngine = React.useMemo(() => new SmartSuggestionsEngine(), [])

  // Refs for dragging functionality
  const popupRef = React.useRef<HTMLDivElement>(null)
  const headerRef = React.useRef<HTMLDivElement>(null)
  const messagesEndRef = React.useRef<HTMLDivElement>(null)

  // Load user preferences from localStorage
  React.useEffect(() => {
    const savedPreferences = localStorage.getItem('gis-chatbot-preferences')
    if (savedPreferences) {
      try {
        setUserPreferences(JSON.parse(savedPreferences))
      } catch (error) {
        console.warn('Failed to load user preferences:', error)
      }
    }
  }, [])

  // Save user preferences to localStorage
  const updateUserPreferences = (newPreferences: Partial<UserPreferences>) => {
    const updatedPreferences = { ...userPreferences, ...newPreferences }
    setUserPreferences(updatedPreferences)
    localStorage.setItem('gis-chatbot-preferences', JSON.stringify(updatedPreferences))
  }

  // Phase 4B: Generate smart actions using advanced service
  const generateSmartActions = React.useCallback((response: string, messageId: string): QuickAction[] => {
    const userContext = {
      currentLab: userPreferences.autoDetectLab ? currentLab : 'general',
      difficulty: userPreferences.difficulty,
      currentStep: currentStep || 1,
      recentTopics: messages.slice(-5).map(m => m.content.toLowerCase()),
      strugglingConcepts: [], // Could be enhanced with conversation analysis
      masteredTopics: [] // Could be enhanced with conversation analysis
    }

    // Use the advanced SmartActionService for intelligent action generation
    const actions = smartActionService.generateActionsForResponse(
      response, 
      userContext, 
      messages
    )

    return actions.slice(0, 4) // Return top 4 prioritized actions
  }, [currentLab, currentStep, userPreferences, messages, smartActionService])

  // Phase 4B: Generate smart suggestions using advanced engine
  const generateSmartSuggestions = React.useCallback(() => {
    const userContext = {
      currentLab: userPreferences.autoDetectLab ? currentLab : 'general',
      difficulty: userPreferences.difficulty,
      currentStep: currentStep || 1,
      recentTopics: messages.slice(-5).map(m => m.content.toLowerCase()),
      strugglingConcepts: [], // Could be enhanced with conversation analysis
      masteredTopics: [], // Could be enhanced with conversation analysis
      sessionDuration: Math.floor((Date.now() - (messages[0]?.timestamp.getTime() || Date.now())) / 1000),
      totalInteractions: messages.length
    }

    // Use the advanced SmartSuggestionsEngine for intelligent suggestions
    const suggestions = smartSuggestionsEngine.generateContextualSuggestions(
      messages, 
      userContext, 
      currentLab
    )

    setSmartSuggestions(suggestions)
    setShowSuggestions(suggestions.length > 0 && messages.length >= 2)
  }, [currentLab, currentStep, userPreferences, messages, smartSuggestionsEngine])

  // Update suggestions when context changes
  React.useEffect(() => {
    generateSmartSuggestions()
  }, [generateSmartSuggestions])

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

  // RAG API Integration - Generate response using our new RAG system
  const generateRAGResponse = async (userMessage: string, conversationHistory: ChatMessage[]): Promise<string> => {
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

      // Prepare user context
      const userContext = {
        currentLab: userPreferences.autoDetectLab ? currentLab : 'general',
        difficulty: userPreferences.difficulty,
        currentStep: currentStep,
        sessionInfo: {
          totalMessages: conversationHistory.length,
          startTime: conversationHistory[0]?.timestamp || new Date()
        }
      }

      // Call our RAG API endpoint
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

      return fullResponse

    } catch (error) {
      console.error('RAG API Error:', error)
      
      // Provide helpful fallback message
      return `I apologize, but I'm having trouble accessing the workshop materials right now. 

**Please try:**
• Refreshing the page and asking again
• Checking your internet connection
• Asking a more specific question

**Common questions I can help with:**
• "How do I load a shapefile in QGIS?"
• "What is buffer analysis?"
• "Explain coordinate reference systems"
• "I'm getting an error in Google Earth Engine"

What would you like to know about?`
    }
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

    // Add temporary loading message for streaming effect
    const tempAssistantMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: "...",
      timestamp: new Date()
    }

    setMessages(prev => [...prev, tempAssistantMessage])

    try {
      // Use RAG system for response generation
      const aiResponse = await generateRAGResponse(input.trim(), messages)
      
      // Update the temporary message with the final response and generate smart actions
      setMessages(prev => {
        const newMessages = [...prev]
        const lastMessage = newMessages[newMessages.length - 1]
        
        if (lastMessage && lastMessage.role === 'assistant') {
          const messageId = (Date.now() + 1).toString()
          lastMessage.content = aiResponse
          lastMessage.id = messageId
          
          // Phase 4B: Generate smart actions for this response
          if (userPreferences.showQuickActions) {
            lastMessage.quickActions = generateSmartActions(aiResponse, messageId)
          }
          
          // Add metadata for tracking
          lastMessage.metadata = {
            lab: currentLab,
            difficulty: userPreferences.difficulty,
            concepts: [] // Could extract concepts from response
          }
        }
        
        return newMessages
      })

    } catch (error) {
      console.error('Error generating response:', error)
      
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I apologize, but I encountered an error processing your question. Please try asking again or rephrase your question.",
        timestamp: new Date(),
        type: "error"
      }

      setMessages(prev => {
        const newMessages = prev.slice(0, -1) // Remove temp message
        return [...newMessages, errorMessage]
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleQuickSuggestion = (suggestion: string) => {
    setInput(suggestion)
  }

  // Phase 4B: Handle quick action clicks
  const handleQuickAction = React.useCallback((action: QuickAction) => {
    // Generate query based on action type and context
    let query = ''
    
    switch (action.type) {
      case 'followup':
        if (action.label.includes('step-by-step')) {
          query = 'Show me detailed step-by-step instructions for this'
        } else if (action.label.includes('example')) {
          query = 'Can you show me a practical example of this?'
        } else {
          query = action.label
        }
        break
        
      case 'troubleshoot':
        if (action.label.includes('Common errors')) {
          query = 'What are the most common errors with this and how do I fix them?'
        } else if (action.label.includes('coordinate system')) {
          query = 'Help me troubleshoot coordinate system issues'
        } else {
          query = `Help me troubleshoot: ${action.label}`
        }
        break
        
      case 'next_step':
        query = "What's the next step I should take?"
        break
        
      case 'related':
        query = 'What are related concepts I should learn?'
        break
        
      case 'explain_more':
        query = 'Can you explain this in more detail with examples?'
        break
        
      default:
        query = action.label
    }
    
    setInput(query)
    
    // Track action usage for learning using Phase 4B service
    try {
      smartActionService.trackActionUsage(action.id, true)
      
      // Also keep local storage for backward compatibility
      const usage = JSON.parse(localStorage.getItem('action_usage') || '{}')
      if (!usage[action.id]) {
        usage[action.id] = { clicks: 0 }
      }
      usage[action.id].clicks++
      localStorage.setItem('action_usage', JSON.stringify(usage))
    } catch (error) {
      console.warn('Failed to track action usage:', error)
    }
  }, [smartActionService])

  // Phase 4B: Handle smart suggestion selection
  const handleSuggestionSelect = React.useCallback((suggestion: any) => {
    setInput(suggestion.actionQuery)
    setShowSuggestions(false) // Hide suggestions after selection
  }, [])

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  // Get current suggestions based on lab context
  const currentSuggestions = React.useMemo(() => {
    return QUICK_SUGGESTIONS[currentLab as keyof typeof QUICK_SUGGESTIONS] || QUICK_SUGGESTIONS.general
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
              <h3 className="font-medium text-sm">GIS AI Assistant</h3>
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

        {/* Content area - only show when not minimized */}
        {!isMinimized && (
          <>
            {/* Messages area */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex w-full",
                      message.role === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    <div
                      className={cn(
                        "flex max-w-[85%] space-x-3",
                        message.role === "user" ? "flex-row-reverse space-x-reverse" : "flex-row"
                      )}
                    >
                      {/* Avatar */}
                      <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                        message.role === "user" 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-muted"
                      )}>
                        {message.role === "user" ? (
                          <User className="h-4 w-4" />
                        ) : (
                          <Bot className="h-4 w-4" />
                        )}
                      </div>

                      {/* Message content */}
                      <div
                        className={cn(
                          "rounded-lg px-3 py-2 text-sm",
                          message.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted",
                          message.type === "error" && "bg-destructive/10 border border-destructive/20"
                        )}
                      >
                        {message.role === "assistant" ? (
                          <MarkdownContent content={message.content} />
                        ) : (
                          <p>{message.content}</p>
                        )}
                        
                        <div className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Phase 4B: Quick Actions Panel for assistant messages */}
                    {message.role === "assistant" && message.quickActions && userPreferences.showQuickActions && (
                      <div className="mt-3 ml-11">
                        <QuickActionsPanel
                          actions={message.quickActions}
                          onActionClick={handleQuickAction}
                          isVisible={true}
                          position="bottom"
                        />
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Loading indicator */}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="flex space-x-3 max-w-[85%]">
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                        <Bot className="h-4 w-4" />
                      </div>
                      <div className="bg-muted rounded-lg px-3 py-2">
                        <div className="flex items-center space-x-1">
                          <Loader2 className="h-3 w-3 animate-spin" />
                          <span className="text-sm text-muted-foreground">Thinking...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Phase 4B: Smart Suggestions */}
            {showSuggestions && smartSuggestions.length > 0 && (
              <div className="p-3 border-t border-border">
                <SmartSuggestionsCompact
                  suggestions={smartSuggestions}
                  onSuggestionSelect={handleSuggestionSelect}
                  maxItems={3}
                />
              </div>
            )}

            {/* Quick suggestions */}
            {userPreferences.showQuickActions && messages.length <= 2 && !showSuggestions && (
              <div className="p-3 border-t border-border">
                <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {currentSuggestions.slice(0, 4).map((suggestion, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-xs h-7"
                      onClick={() => handleQuickSuggestion(suggestion)}
                    >
                      {suggestion}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Input area */}
            <div className="p-4 border-t border-border">
              <div className="flex space-x-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask anything about GIS, labs, or concepts..."
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  disabled={!input.trim() || isLoading}
                  className="px-3"
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </div>
              
              {/* Context info */}
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-xs">
                    {currentLab !== 'general' ? `Lab ${currentLab.slice(-1)}` : 'General'}
                  </Badge>
                  <Badge variant="outline" className="text-xs capitalize">
                    {userPreferences.difficulty}
                  </Badge>
                </div>
                <div className="text-xs text-muted-foreground">
                  Powered by RAG + Llama 3
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
} 