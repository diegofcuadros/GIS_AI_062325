"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  MessageSquare, 
  Bot, 
  Sparkles,
  HelpCircle,
  Keyboard
} from "lucide-react"
import { PopupChatbot } from "./popup-chatbot"
import { usePathname } from "next/navigation"

export interface ChatbotWrapperProps {
  className?: string
}

// Detect current lab from URL
function useCurrentLab() {
  const pathname = usePathname()
  
  const currentLab = React.useMemo(() => {
    if (pathname.includes('/labs/lab1')) return 'lab1'
    if (pathname.includes('/labs/lab2')) return 'lab2'
    if (pathname.includes('/labs/lab3')) return 'lab3'
    if (pathname.includes('/labs/lab4')) return 'lab4'
    if (pathname.includes('/labs/lab5')) return 'lab5'
    if (pathname.includes('/labs/')) return 'general'
    return 'general'
  }, [pathname])

  return currentLab
}

export function ChatbotWrapper({ className }: ChatbotWrapperProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [hasNewMessage, setHasNewMessage] = React.useState(false)
  const [isFirstVisit, setIsFirstVisit] = React.useState(true)
  const currentLab = useCurrentLab()

  // Global keyboard shortcut (Ctrl/Cmd + K)
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(prev => !prev)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Show welcome animation on first visit
  React.useEffect(() => {
    const hasVisited = localStorage.getItem('gis-chatbot-visited')
    if (!hasVisited) {
      setIsFirstVisit(true)
      setHasNewMessage(true)
      localStorage.setItem('gis-chatbot-visited', 'true')
      
      // Auto-hide new message indicator after 10 seconds
      const timer = setTimeout(() => {
        setHasNewMessage(false)
      }, 10000)
      
      return () => clearTimeout(timer)
    } else {
      setIsFirstVisit(false)
    }
  }, [])

  // Reset new message indicator when chatbot is opened
  React.useEffect(() => {
    if (isOpen) {
      setHasNewMessage(false)
    }
  }, [isOpen])

  // Lab change notification
  React.useEffect(() => {
    if (currentLab !== 'general' && !isFirstVisit) {
      setHasNewMessage(true)
      
      const timer = setTimeout(() => {
        setHasNewMessage(false)
      }, 5000)
      
      return () => clearTimeout(timer)
    }
  }, [currentLab, isFirstVisit])

  const handleToggle = () => {
    setIsOpen(prev => !prev)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Floating Action Button */}
      <div className={cn("fixed bottom-6 right-6 z-40", className)}>
        <div className="relative">
          {/* Pulsing background for first visit */}
          {isFirstVisit && (
            <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping scale-110" />
          )}
          
          {/* New message indicator */}
          {hasNewMessage && (
            <div className="absolute -top-2 -right-2 z-10">
              <div className="relative">
                <div className="w-4 h-4 bg-accent rounded-full animate-pulse" />
                <div className="absolute inset-0 w-4 h-4 bg-accent rounded-full animate-ping" />
              </div>
            </div>
          )}

          {/* Main button */}
          <Button
            onClick={handleToggle}
            size="lg"
            className={cn(
              "h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300",
              "bg-primary hover:bg-primary/90 text-primary-foreground",
              "group relative overflow-hidden",
              isOpen && "scale-90"
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            <div className="relative flex items-center justify-center">
              {isOpen ? (
                <MessageSquare className="h-6 w-6" />
              ) : (
                <div className="relative">
                  <Bot className="h-6 w-6" />
                  <Sparkles className="h-3 w-3 absolute -top-1 -right-1 text-accent" />
                </div>
              )}
            </div>
          </Button>

          {/* Tooltip for first-time users */}
          {isFirstVisit && !isOpen && (
            <div className="absolute bottom-16 right-0 mb-2 mr-2 animate-bounce-in">
              <div className="bg-card border border-border rounded-lg shadow-lg p-3 max-w-xs">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Need help with GIS? 🎓</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Ask me anything about labs, concepts, or troubleshooting!
                    </p>
                    <div className="flex items-center mt-2 space-x-1">
                      <Badge variant="outline" className="text-xs">
                        <Keyboard className="h-3 w-3 mr-1" />
                        Ctrl+K
                      </Badge>
                      <span className="text-xs text-muted-foreground">to open</span>
                    </div>
                  </div>
                </div>
                
                {/* Arrow pointing to button */}
                <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-2 h-2 bg-card border-r border-b border-border" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile helper text */}
      {!isOpen && (
        <div className="fixed bottom-24 right-6 z-30 md:hidden">
          <Badge variant="outline" className="text-xs bg-card">
            <HelpCircle className="h-3 w-3 mr-1" />
            Tap for help
          </Badge>
        </div>
      )}

      {/* Popup Chatbot */}
      <PopupChatbot
        isOpen={isOpen}
        onClose={handleClose}
        currentLab={currentLab}
        className="z-50"
      />
    </>
  )
} 