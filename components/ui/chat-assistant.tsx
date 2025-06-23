"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  MessageSquare, 
  Send, 
  Bot, 
  User, 
  Minimize2, 
  Maximize2,
  RotateCcw,
  Sparkles,
  Code,
  HelpCircle,
  Lightbulb,
  Loader2
} from "lucide-react"

export interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
  context?: string
  type?: "code" | "explanation" | "hint" | "general"
}

export interface ChatAssistantProps {
  labContext?: string
  category?: "gis" | "health" | "ai"
  isMinimized?: boolean
  onMinimize?: () => void
  onMessage?: (message: string) => Promise<string>
  suggestedPrompts?: string[]
  className?: string
}

const ChatAssistant = React.forwardRef<HTMLDivElement, ChatAssistantProps>(
  ({
    labContext = "GIS Workshop",
    category = "ai",
    isMinimized = false,
    onMinimize,
    onMessage,
    suggestedPrompts = [
      "Explain this code snippet",
      "What does this error mean?", 
      "Help me debug this issue",
      "Show me an example"
    ],
    className,
    ...props
  }, ref) => {
    const [messages, setMessages] = React.useState<Message[]>([
      {
        id: "welcome",
        role: "assistant", 
        content: `Hello! I'm your AI assistant for ${labContext}. I can help you with code, explanations, debugging, and answering questions. How can I assist you today?`,
        timestamp: new Date(),
        context: labContext,
        type: "general"
      }
    ])
    const [inputValue, setInputValue] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(false)
    const [isTyping, setIsTyping] = React.useState(false)

    const messagesEndRef = React.useRef<HTMLDivElement>(null)
    const inputRef = React.useRef<HTMLInputElement>(null)

    const getCategoryColors = () => {
      switch (category) {
        case "gis":
          return {
            accent: "text-gis-primary",
            bg: "bg-gis-primary/10", 
            border: "border-gis-primary/20",
            button: "bg-gis-primary hover:bg-gis-primary/90"
          }
        case "health":
          return {
            accent: "text-health-primary",
            bg: "bg-health-primary/10",
            border: "border-health-primary/20", 
            button: "bg-health-primary hover:bg-health-primary/90"
          }
        case "ai":
          return {
            accent: "text-ai-primary",
            bg: "bg-ai-primary/10",
            border: "border-ai-primary/20",
            button: "bg-ai-primary hover:bg-ai-primary/90"
          }
        default:
          return {
            accent: "text-primary",
            bg: "bg-primary/10",
            border: "border-primary/20",
            button: "bg-primary hover:bg-primary/90"
          }
      }
    }

    const handleSendMessage = async (content: string) => {
      if (!content.trim() || isLoading) return

      const userMessage: Message = {
        id: Date.now().toString(),
        role: "user",
        content: content.trim(),
        timestamp: new Date(),
        context: labContext
      }

      setMessages(prev => [...prev, userMessage])
      setInputValue("")
      setIsLoading(true)
      setIsTyping(true)

      try {
        let response = "I'm here to help! Please integrate with your preferred AI service."
        
        if (onMessage) {
          response = await onMessage(content.trim())
        }

        // Simulate typing delay
        setTimeout(() => {
          const assistantMessage: Message = {
            id: (Date.now() + 1).toString(),
            role: "assistant", 
            content: response,
            timestamp: new Date(),
            context: labContext,
            type: content.toLowerCase().includes("code") ? "code" : "general"
          }

          setMessages(prev => [...prev, assistantMessage])
          setIsTyping(false)
        }, 1000)

      } catch (error) {
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again.",
          timestamp: new Date(),
          context: labContext
        }
        setMessages(prev => [...prev, errorMessage])
        setIsTyping(false)
      } finally {
        setIsLoading(false)
      }
    }

    const handleClearMessages = () => {
      setMessages([messages[0]]) // Keep welcome message
    }

    const handleSuggestedPrompt = (prompt: string) => {
      setInputValue(prompt)
      inputRef.current?.focus()
    }

    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    React.useEffect(() => {
      scrollToBottom()
    }, [messages, isTyping])

    const colors = getCategoryColors()

    if (isMinimized) {
      return (
        <Card 
          ref={ref}
          className={cn(
            "fixed bottom-4 right-4 w-16 h-16 cursor-pointer transition-all duration-300 hover:scale-105",
            colors.bg,
            colors.border,
            "border-2 shadow-lg",
            className
          )}
          onClick={onMinimize}
          {...props}
        >
          <CardContent className="p-0 flex items-center justify-center h-full">
            <div className="relative">
              <Bot className={cn("h-6 w-6", colors.accent)} />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full animate-pulse-soft" />
            </div>
          </CardContent>
        </Card>
      )
    }

    return (
      <Card
        ref={ref}
        className={cn(
          "fixed bottom-4 right-4 w-96 h-[500px] flex flex-col transition-all duration-300",
          colors.bg,
          colors.border,
          "border-2 shadow-xl",
          className
        )}
        {...props}
      >
        <CardHeader className="pb-3 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={cn(
                "flex items-center justify-center w-8 h-8 rounded-full",
                colors.bg,
                colors.border,
                "border-2"
              )}>
                <Bot className={cn("h-4 w-4", colors.accent)} />
              </div>
              <div>
                <CardTitle className="text-sm">AI Assistant</CardTitle>
                <p className="text-xs text-muted-foreground">{labContext}</p>
              </div>
            </div>

            <div className="flex items-center space-x-1">
              <Badge className={colors.bg + " " + colors.accent + " " + colors.border}>
                <Sparkles className="h-3 w-3 mr-1" />
                Smart
              </Badge>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClearMessages}
                className="h-8 px-2"
              >
                <RotateCcw className="h-3 w-3" />
              </Button>
              
              <Button
                variant="ghost" 
                size="sm"
                onClick={onMinimize}
                className="h-8 px-2"
              >
                <Minimize2 className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col pt-0 space-y-4 overflow-hidden">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto space-y-3 pr-2 hide-scrollbar">
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
                    "max-w-[80%] p-3 rounded-lg text-sm",
                    message.role === "user"
                      ? "bg-primary text-primary-foreground ml-auto"
                      : "bg-muted"
                  )}
                >
                  <div className="flex items-start space-x-2">
                    {message.role === "assistant" && (
                      <Bot className="h-4 w-4 mt-0.5 flex-shrink-0 text-muted-foreground" />
                    )}
                    <div className="flex-1">
                      <p className="whitespace-pre-wrap">{message.content}</p>
                      {message.type && (
                        <div className="flex items-center mt-2 space-x-1">
                          {message.type === "code" && <Code className="h-3 w-3" />}
                          {message.type === "hint" && <Lightbulb className="h-3 w-3" />}
                          {message.type === "explanation" && <HelpCircle className="h-3 w-3" />}
                          <span className="text-xs opacity-70">{message.type}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-muted p-3 rounded-lg max-w-[80%]">
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
            
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Prompts */}
          {messages.length <= 1 && suggestedPrompts.length > 0 && (
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">Try asking:</p>
              <div className="flex flex-wrap gap-1">
                {suggestedPrompts.map((prompt, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleSuggestedPrompt(prompt)}
                    className="text-xs h-7"
                  >
                    {prompt}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="flex-shrink-0 flex space-x-2">
            <input
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  handleSendMessage(inputValue)
                }
              }}
              placeholder="Ask me anything..."
              className="flex-1 px-3 py-2 text-sm bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
              disabled={isLoading}
            />
            <Button
              onClick={() => handleSendMessage(inputValue)}
              disabled={!inputValue.trim() || isLoading}
              size="sm"
              className={colors.button + " text-white"}
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

ChatAssistant.displayName = "ChatAssistant"

export { ChatAssistant, type Message } 