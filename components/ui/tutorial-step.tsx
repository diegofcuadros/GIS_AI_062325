"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  CheckCircle, 
  Circle, 
  Clock, 
  HelpCircle, 
  ChevronRight, 
  ChevronLeft,
  Lightbulb,
  AlertTriangle,
  Play,
  Pause
} from "lucide-react"

export interface TutorialStepProps {
  stepNumber: number
  title: string
  description: string
  content: React.ReactNode
  estimatedTime?: number
  difficulty?: "beginner" | "intermediate" | "advanced"
  category?: "gis" | "health" | "ai"
  isCompleted?: boolean
  isActive?: boolean
  hints?: string[]
  prerequisites?: string[]
  validation?: () => Promise<boolean>
  onComplete?: () => void
  onNext?: () => void
  onPrevious?: () => void
  className?: string
}

const TutorialStep = React.forwardRef<HTMLDivElement, TutorialStepProps>(
  ({
    stepNumber,
    title,
    description,
    content,
    estimatedTime = 10,
    difficulty = "beginner",
    category = "gis",
    isCompleted = false,
    isActive = false,
    hints = [],
    prerequisites = [],
    validation,
    onComplete,
    onNext,
    onPrevious,
    className,
    ...props
  }, ref) => {
    const [showHints, setShowHints] = React.useState(false)
    const [isValidating, setIsValidating] = React.useState(false)
    const [validationError, setValidationError] = React.useState<string>("")
    const [timeSpent, setTimeSpent] = React.useState(0)
    const [isTimerRunning, setIsTimerRunning] = React.useState(false)

    // Timer logic
    React.useEffect(() => {
      let interval: NodeJS.Timeout
      if (isTimerRunning && isActive) {
        interval = setInterval(() => {
          setTimeSpent(prev => prev + 1)
        }, 1000)
      }
      return () => clearInterval(interval)
    }, [isTimerRunning, isActive])

    // Auto-start timer when step becomes active
    React.useEffect(() => {
      if (isActive && !isCompleted) {
        setIsTimerRunning(true)
      } else {
        setIsTimerRunning(false)
      }
    }, [isActive, isCompleted])

    const getCategoryColors = () => {
      switch (category) {
        case "gis":
          return {
            bg: "bg-gis-primary/10",
            border: "border-gis-primary/20",
            text: "text-gis-primary",
            accent: "bg-gis-primary"
          }
        case "health":
          return {
            bg: "bg-health-primary/10",
            border: "border-health-primary/20", 
            text: "text-health-primary",
            accent: "bg-health-primary"
          }
        case "ai":
          return {
            bg: "bg-ai-primary/10",
            border: "border-ai-primary/20",
            text: "text-ai-primary", 
            accent: "bg-ai-primary"
          }
        default:
          return {
            bg: "bg-primary/10",
            border: "border-primary/20",
            text: "text-primary",
            accent: "bg-primary"
          }
      }
    }

    const getDifficultyColor = () => {
      switch (difficulty) {
        case "beginner":
          return "bg-success/10 text-success border-success/20"
        case "intermediate": 
          return "bg-warning/10 text-warning border-warning/20"
        case "advanced":
          return "bg-destructive/10 text-destructive border-destructive/20"
        default:
          return "bg-info/10 text-info border-info/20"
      }
    }

    const handleValidation = async () => {
      if (!validation) return

      setIsValidating(true)
      setValidationError("")

      try {
        const isValid = await validation()
        if (isValid) {
          onComplete?.()
          setIsTimerRunning(false)
        } else {
          setValidationError("Validation failed. Please check your work and try again.")
        }
      } catch (error) {
        setValidationError("An error occurred during validation. Please try again.")
      } finally {
        setIsValidating(false)
      }
    }

    const formatTime = (seconds: number) => {
      const mins = Math.floor(seconds / 60)
      const secs = seconds % 60
      return `${mins}:${secs.toString().padStart(2, '0')}`
    }

    const colors = getCategoryColors()

    return (
      <Card
        ref={ref}
        className={cn(
          "relative transition-all duration-500",
          isActive ? `${colors.bg} ${colors.border} border-2 shadow-lg` : "border-border",
          isCompleted ? "opacity-75" : "",
          className
        )}
        {...props}
      >
        {/* Progress indicator */}
        <div className={cn(
          "absolute top-0 left-0 h-1 transition-all duration-300 rounded-t-lg",
          colors.accent,
          isCompleted ? "w-full" : isActive ? "w-1/2" : "w-0"
        )} />

        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className={cn(
                "flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300",
                isCompleted 
                  ? "bg-success text-success-foreground border-success" 
                  : isActive 
                    ? `${colors.text} ${colors.border} border-2`
                    : "border-muted-foreground text-muted-foreground"
              )}>
                {isCompleted ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  <span className="text-sm font-semibold">{stepNumber}</span>
                )}
              </div>
              
              <div>
                <CardTitle className="text-lg">{title}</CardTitle>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Badge className={getDifficultyColor()}>
                {difficulty}
              </Badge>
              <Badge variant="outline" className="text-xs">
                <Clock className="h-3 w-3 mr-1" />
                {estimatedTime}m
              </Badge>
            </div>
          </div>

          {/* Timer and Prerequisites */}
          <div className="flex items-center justify-between pt-3 border-t border-border/50">
            <div className="flex items-center space-x-4">
              {isActive && (
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsTimerRunning(!isTimerRunning)}
                    className="h-8 px-2"
                  >
                    {isTimerRunning ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
                  </Button>
                  <span className="text-sm font-mono text-muted-foreground">
                    {formatTime(timeSpent)}
                  </span>
                </div>
              )}
              
              {prerequisites.length > 0 && (
                <div className="flex items-center space-x-1">
                  <AlertTriangle className="h-4 w-4 text-warning" />
                  <span className="text-xs text-muted-foreground">
                    {prerequisites.length} prerequisite(s)
                  </span>
                </div>
              )}
            </div>

            {hints.length > 0 && (
              <Button
                variant="ghost"
                size="sm" 
                onClick={() => setShowHints(!showHints)}
                className="text-xs"
              >
                <HelpCircle className="h-3 w-3 mr-1" />
                {showHints ? "Hide" : "Show"} Hints ({hints.length})
              </Button>
            )}
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Content */}
          <div className={cn(
            "transition-all duration-300",
            isActive ? "opacity-100" : "opacity-60"
          )}>
            {content}
          </div>

          {/* Hints */}
          {showHints && hints.length > 0 && (
            <div className="space-y-2 p-4 bg-info/10 border border-info/20 rounded-lg">
              <div className="flex items-center space-x-2">
                <Lightbulb className="h-4 w-4 text-info" />
                <span className="text-sm font-medium text-info">Hints</span>
              </div>
              <ul className="space-y-1">
                {hints.map((hint, index) => (
                  <li key={index} className="text-sm text-muted-foreground pl-4">
                    • {hint}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Validation Error */}
          {validationError && (
            <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
              <p className="text-sm text-destructive">{validationError}</p>
            </div>
          )}

          {/* Actions */}
          {isActive && (
            <div className="flex items-center justify-between pt-4 border-t border-border/50">
              <Button
                variant="outline"
                size="sm"
                onClick={onPrevious}
                disabled={stepNumber === 1}
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>

              <div className="flex space-x-2">
                {validation && !isCompleted && (
                  <Button
                    onClick={handleValidation}
                    disabled={isValidating}
                    className={cn(colors.accent, "text-white hover:opacity-90")}
                  >
                    {isValidating ? "Validating..." : "Validate & Complete"}
                    <CheckCircle className="h-4 w-4 ml-1" />
                  </Button>
                )}

                <Button
                  onClick={onNext}
                  disabled={!isCompleted && !!validation}
                  variant={isCompleted ? "default" : "outline"}
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    )
  }
)

TutorialStep.displayName = "TutorialStep"

export { TutorialStep } 