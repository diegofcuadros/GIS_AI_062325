"use client"

import * as React from "react"
import { usePathname } from "next/navigation"

export interface ChatbotState {
  isOpen: boolean
  currentLab: string
  hasNewMessage: boolean
  isFirstVisit: boolean
  messageHistory: ChatMessage[]
}

export interface ChatMessage {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
  type?: "question" | "suggestion" | "error"
}

// Hook to detect current lab from URL
export function useCurrentLab() {
  const pathname = usePathname()
  
  return React.useMemo(() => {
    if (pathname.includes('/labs/lab1')) return 'lab1'
    if (pathname.includes('/labs/lab2')) return 'lab2'
    if (pathname.includes('/labs/lab3')) return 'lab3'
    if (pathname.includes('/labs/lab4')) return 'lab4'
    if (pathname.includes('/labs/lab5')) return 'lab5'
    if (pathname.includes('/labs/')) return 'labs'
    return 'general'
  }, [pathname])
}

// Hook for chatbot state management
export function useChatbot() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [hasNewMessage, setHasNewMessage] = React.useState(false)
  const [isFirstVisit, setIsFirstVisit] = React.useState(true)
  const [messageHistory, setMessageHistory] = React.useState<ChatMessage[]>([])
  const currentLab = useCurrentLab()

  // Initialize first visit status
  React.useEffect(() => {
    const hasVisited = localStorage.getItem('gis-chatbot-visited')
    if (!hasVisited) {
      setIsFirstVisit(true)
      setHasNewMessage(true)
      localStorage.setItem('gis-chatbot-visited', 'true')
    } else {
      setIsFirstVisit(false)
    }
  }, [])

  // Load message history from localStorage
  React.useEffect(() => {
    const savedHistory = localStorage.getItem('gis-chatbot-history')
    if (savedHistory) {
      try {
        const parsed = JSON.parse(savedHistory)
        setMessageHistory(parsed.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        })))
      } catch (error) {
        console.warn('Failed to load chatbot history:', error)
      }
    }
  }, [])

  // Save message history to localStorage
  const saveMessageHistory = React.useCallback((messages: ChatMessage[]) => {
    try {
      localStorage.setItem('gis-chatbot-history', JSON.stringify(messages))
    } catch (error) {
      console.warn('Failed to save chatbot history:', error)
    }
  }, [])

  // Auto-hide new message indicator
  React.useEffect(() => {
    if (hasNewMessage && !isOpen) {
      const timer = setTimeout(() => {
        setHasNewMessage(false)
      }, 10000)
      return () => clearTimeout(timer)
    }
  }, [hasNewMessage, isOpen])

  // Lab change notification
  React.useEffect(() => {
    if (currentLab !== 'general' && !isFirstVisit && !isOpen) {
      setHasNewMessage(true)
    }
  }, [currentLab, isFirstVisit, isOpen])

  const toggleChatbot = React.useCallback(() => {
    setIsOpen(prev => !prev)
    if (!isOpen) {
      setHasNewMessage(false)
    }
  }, [isOpen])

  const closeChatbot = React.useCallback(() => {
    setIsOpen(false)
  }, [])

  const addMessage = React.useCallback((message: ChatMessage) => {
    setMessageHistory(prev => {
      const newHistory = [...prev, message]
      saveMessageHistory(newHistory)
      return newHistory
    })
  }, [saveMessageHistory])

  const clearHistory = React.useCallback(() => {
    setMessageHistory([])
    localStorage.removeItem('gis-chatbot-history')
  }, [])

  return {
    // State
    isOpen,
    currentLab,
    hasNewMessage,
    isFirstVisit,
    messageHistory,
    
    // Actions
    toggleChatbot,
    closeChatbot,
    addMessage,
    clearHistory,
    setHasNewMessage
  }
}

// Hook for keyboard shortcuts
export function useChatbotKeyboard(onToggle: () => void) {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd + K to toggle chatbot
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        onToggle()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onToggle])
}

// Hook for responsive positioning
export function useChatbotPosition() {
  const [position, setPosition] = React.useState({ x: 20, y: 20 })
  const [isDragging, setIsDragging] = React.useState(false)
  const [dragOffset, setDragOffset] = React.useState({ x: 0, y: 0 })

  // Ensure popup stays within viewport bounds
  const constrainPosition = React.useCallback((x: number, y: number) => {
    const maxX = Math.max(0, window.innerWidth - 400) // popup width
    const maxY = Math.max(0, window.innerHeight - 600) // popup height
    
    return {
      x: Math.max(0, Math.min(x, maxX)),
      y: Math.max(0, Math.min(y, maxY))
    }
  }, [])

  const startDragging = React.useCallback((e: React.MouseEvent, popupRect: DOMRect) => {
    setIsDragging(true)
    setDragOffset({
      x: e.clientX - popupRect.left,
      y: e.clientY - popupRect.top
    })
  }, [])

  const updatePosition = React.useCallback((e: MouseEvent) => {
    if (!isDragging) return
    
    const newX = e.clientX - dragOffset.x
    const newY = e.clientY - dragOffset.y
    
    setPosition(constrainPosition(newX, newY))
  }, [isDragging, dragOffset, constrainPosition])

  const stopDragging = React.useCallback(() => {
    setIsDragging(false)
  }, [])

  // Handle window resize
  React.useEffect(() => {
    const handleResize = () => {
      setPosition(prev => constrainPosition(prev.x, prev.y))
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [constrainPosition])

  return {
    position,
    isDragging,
    startDragging,
    updatePosition,
    stopDragging,
    setPosition
  }
} 