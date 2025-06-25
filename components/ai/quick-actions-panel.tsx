'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { 
  ArrowRight, 
  HelpCircle, 
  Lightbulb, 
  Target, 
  BookOpen, 
  Zap, 
  AlertCircle, 
  ChevronRight, 
  Settings, 
  Brain, 
  TrendingUp 
} from 'lucide-react'
import { QuickAction } from './popup-chatbot'

interface QuickActionsPanelProps {
  actions: QuickAction[]
  onActionClick: (action: QuickAction) => void
  position?: 'bottom' | 'side'
  isVisible: boolean
  className?: string
}

// Map icon strings to actual icon components
const iconMap = {
  'ArrowRight': ArrowRight,
  'HelpCircle': HelpCircle,
  'Lightbulb': Lightbulb,
  'Target': Target,
  'BookOpen': BookOpen,
  'Zap': Zap,
  'AlertCircle': AlertCircle,
  'ChevronRight': ChevronRight,
  'Settings': Settings,
  'Brain': Brain,
  'TrendingUp': TrendingUp
}

// Action type styling
const actionTypeStyles = {
  followup: {
    variant: 'outline' as const,
    className: 'border-blue-200 hover:bg-blue-50 hover:border-blue-300',
    badgeColor: 'bg-blue-100 text-blue-700'
  },
  troubleshoot: {
    variant: 'outline' as const,
    className: 'border-red-200 hover:bg-red-50 hover:border-red-300',
    badgeColor: 'bg-red-100 text-red-700'
  },
  next_step: {
    variant: 'outline' as const,
    className: 'border-green-200 hover:bg-green-50 hover:border-green-300',
    badgeColor: 'bg-green-100 text-green-700'
  },
  related: {
    variant: 'outline' as const,
    className: 'border-purple-200 hover:bg-purple-50 hover:border-purple-300',
    badgeColor: 'bg-purple-100 text-purple-700'
  },
  explain_more: {
    variant: 'outline' as const,
    className: 'border-orange-200 hover:bg-orange-50 hover:border-orange-300',
    badgeColor: 'bg-orange-100 text-orange-700'
  }
}

export function QuickActionsPanel({ 
  actions, 
  onActionClick, 
  position = 'bottom', 
  isVisible,
  className 
}: QuickActionsPanelProps) {
  if (!isVisible || actions.length === 0) {
    return null
  }

  // Sort actions by priority
  const sortedActions = [...actions].sort((a, b) => b.priority - a.priority)

  return (
    <div className={cn(
      "transition-all duration-300 ease-in-out",
      position === 'bottom' ? "mt-3" : "ml-3",
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
      className
    )}>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-medium text-muted-foreground">Quick actions:</span>
        <Badge variant="secondary" className="text-xs">
          {actions.length} available
        </Badge>
      </div>
      
      <div className={cn(
        "flex gap-2",
        position === 'bottom' ? "flex-wrap" : "flex-col"
      )}>
        {sortedActions.slice(0, 4).map((action) => {
          const IconComponent = iconMap[action.icon as keyof typeof iconMap] || Target
          const styling = actionTypeStyles[action.type] || actionTypeStyles.followup

          return (
            <Button
              key={action.id}
              size="sm"
              variant={styling.variant}
              onClick={() => onActionClick(action)}
              className={cn(
                "h-8 text-xs font-medium transition-all duration-200",
                "flex items-center gap-1.5",
                styling.className,
                position === 'side' && "justify-start w-full"
              )}
            >
              <IconComponent className="h-3 w-3 flex-shrink-0" />
              <span className="truncate">{action.label}</span>
              
              {/* Priority indicator for high-priority actions */}
              {action.priority >= 8 && (
                <div className="w-2 h-2 rounded-full bg-current opacity-60 ml-1" />
              )}
            </Button>
          )
        })}
      </div>

      {/* Action type legend (appears when there are multiple types) */}
      {new Set(actions.map(a => a.type)).size > 1 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {Object.entries(
            actions.reduce((acc, action) => {
              if (!acc[action.type]) acc[action.type] = 0
              acc[action.type]++
              return acc
            }, {} as Record<string, number>)
          ).map(([type, count]) => {
            const styling = actionTypeStyles[type as keyof typeof actionTypeStyles]
            return (
              <Badge 
                key={type} 
                variant="secondary"
                className={cn("text-xs", styling?.badgeColor)}
              >
                {type.replace('_', ' ')} ({count})
              </Badge>
            )
          })}
        </div>
      )}
    </div>
  )
}

// Utility component to wrap quick actions functionality
export function QuickActionsWrapper({ 
  children, 
  actions, 
  onActionClick,
  showActionsPanel = true 
}: {
  children: React.ReactNode
  actions: QuickAction[]
  onActionClick: (action: QuickAction) => void
  showActionsPanel?: boolean
}) {
  return (
    <div className="relative">
      {children}
      
      {showActionsPanel && (
        <QuickActionsPanel
          actions={actions}
          onActionClick={onActionClick}
          isVisible={actions.length > 0}
          className="mt-3"
        />
      )}
    </div>
  )
} 