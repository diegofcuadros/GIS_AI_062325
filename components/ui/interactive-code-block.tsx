"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Play, 
  Square, 
  Copy, 
  Download, 
  Code, 
  Terminal,
  CheckCircle,
  AlertCircle,
  Loader2,
  Eye,
  EyeOff
} from "lucide-react"

export interface InteractiveCodeBlockProps {
  title?: string
  language: "javascript" | "python" | "r" | "sql" | "shell"
  category?: "gis" | "health" | "ai"
  initialCode: string
  expectedOutput?: string
  isEditable?: boolean
  showLineNumbers?: boolean
  autoRun?: boolean
  onCodeChange?: (code: string) => void
  onExecute?: (code: string) => Promise<string>
  className?: string
}

const InteractiveCodeBlock = React.forwardRef<HTMLDivElement, InteractiveCodeBlockProps>(
  ({
    title,
    language,
    category = "gis",
    initialCode,
    expectedOutput,
    isEditable = true,
    showLineNumbers = true,
    autoRun = false,
    onCodeChange,
    onExecute,
    className,
    ...props
  }, ref) => {
    const [code, setCode] = React.useState(initialCode)
    const [output, setOutput] = React.useState("")
    const [isRunning, setIsRunning] = React.useState(false)
    const [hasError, setHasError] = React.useState(false)
    const [showOutput, setShowOutput] = React.useState(true)
    const [isExpanded, setIsExpanded] = React.useState(false)
    const [lastRunTime, setLastRunTime] = React.useState<Date | null>(null)

    const textareaRef = React.useRef<HTMLTextAreaElement>(null)

    const getCategoryColors = () => {
      switch (category) {
        case "gis":
          return {
            accent: "text-gis-primary",
            bg: "bg-gis-primary/5",
            border: "border-gis-primary/20"
          }
        case "health":
          return {
            accent: "text-health-primary", 
            bg: "bg-health-primary/5",
            border: "border-health-primary/20"
          }
        case "ai":
          return {
            accent: "text-ai-primary",
            bg: "bg-ai-primary/5", 
            border: "border-ai-primary/20"
          }
        default:
          return {
            accent: "text-primary",
            bg: "bg-primary/5",
            border: "border-primary/20"
          }
      }
    }

    const getLanguageIcon = () => {
      switch (language) {
        case "javascript":
          return "JS"
        case "python":
          return "PY"
        case "r":
          return "R"
        case "sql":
          return "SQL"
        case "shell":
          return "SH"
        default:
          return "CODE"
      }
    }

    const handleCodeChange = (newCode: string) => {
      setCode(newCode)
      onCodeChange?.(newCode)
    }

    const handleExecute = async () => {
      if (!onExecute || isRunning) return

      setIsRunning(true)
      setHasError(false)

      try {
        const result = await onExecute(code)
        setOutput(result)
        setLastRunTime(new Date())
      } catch (error) {
        setHasError(true)
        setOutput(error instanceof Error ? error.message : "An error occurred")
      } finally {
        setIsRunning(false)
      }
    }

    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(code)
      } catch (error) {
        console.error("Failed to copy code:", error)
      }
    }

    const handleDownload = () => {
      const extensions = {
        javascript: "js",
        python: "py", 
        r: "r",
        sql: "sql",
        shell: "sh"
      }
      
      const blob = new Blob([code], { type: "text/plain" })
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `code.${extensions[language]}`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    }

    const adjustTextareaHeight = () => {
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto"
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
      }
    }

    React.useEffect(() => {
      adjustTextareaHeight()
    }, [code])

    React.useEffect(() => {
      if (autoRun && onExecute && !isRunning) {
        handleExecute()
      }
    }, [autoRun, code, onExecute, isRunning])

    const colors = getCategoryColors()

    return (
      <Card
        ref={ref}
        className={cn(
          "font-mono text-sm transition-all duration-300",
          colors.bg,
          colors.border,
          "border",
          className
        )}
        {...props}
      >
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={cn(
                "flex items-center justify-center w-8 h-8 rounded-md text-xs font-bold",
                colors.accent,
                colors.bg,
                colors.border,
                "border"
              )}>
                {getLanguageIcon()}
              </div>
              
              {title && (
                <CardTitle className="text-base font-medium">{title}</CardTitle>
              )}
              
              <Badge variant="outline" className="text-xs">
                {language}
              </Badge>
            </div>

            <div className="flex items-center space-x-1">
              {lastRunTime && (
                <span className="text-xs text-muted-foreground mr-2">
                  Last run: {lastRunTime.toLocaleTimeString()}
                </span>
              )}
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowOutput(!showOutput)}
                className="h-8 px-2"
              >
                {showOutput ? <Eye className="h-3 w-3" /> : <EyeOff className="h-3 w-3" />}
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                className="h-8 px-2"
              >
                <Copy className="h-3 w-3" />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={handleDownload}
                className="h-8 px-2"
              >
                <Download className="h-3 w-3" />
              </Button>
              
              {onExecute && (
                <Button
                  onClick={handleExecute}
                  disabled={isRunning}
                  size="sm"
                  className={cn(
                    colors.accent,
                    "hover:opacity-90 h-8"
                  )}
                >
                  {isRunning ? (
                    <Loader2 className="h-3 w-3 animate-spin" />
                  ) : (
                    <Play className="h-3 w-3" />
                  )}
                </Button>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-0 space-y-4">
          {/* Code Editor */}
          <div className="relative">
            <div className="relative bg-muted/30 rounded-lg border border-border/50 overflow-hidden">
              {showLineNumbers && (
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-muted/50 border-r border-border/50 flex flex-col text-xs text-muted-foreground">
                  {code.split('\n').map((_, index) => (
                    <div 
                      key={index} 
                      className="px-2 py-1 text-right leading-6 min-h-[24px]"
                    >
                      {index + 1}
                    </div>
                  ))}
                </div>
              )}
              
              <textarea
                ref={textareaRef}
                value={code}
                onChange={(e) => handleCodeChange(e.target.value)}
                disabled={!isEditable}
                className={cn(
                  "w-full bg-transparent border-none outline-none resize-none font-mono text-sm leading-6 min-h-[120px]",
                  showLineNumbers ? "pl-14 pr-4" : "px-4",
                  "py-3",
                  !isEditable && "cursor-not-allowed opacity-60"
                )}
                placeholder="Enter your code here..."
                spellCheck={false}
              />
            </div>
          </div>

          {/* Output */}
          {showOutput && (output || expectedOutput) && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Terminal className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Output</span>
                  {hasError && <AlertCircle className="h-4 w-4 text-destructive" />}
                  {!hasError && output && <CheckCircle className="h-4 w-4 text-success" />}
                </div>
              </div>
              
              <div className={cn(
                "relative bg-muted/30 rounded-lg border border-border/50 p-4 text-sm",
                hasError ? "border-destructive/50 bg-destructive/5" : "",
                !hasError && output ? "border-success/50 bg-success/5" : ""
              )}>
                {isRunning ? (
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Running...</span>
                  </div>
                ) : (
                  <pre className="whitespace-pre-wrap text-sm">
                    {output || expectedOutput || "No output"}
                  </pre>
                )}
              </div>
            </div>
          )}

          {/* Expected vs Actual Comparison */}
          {expectedOutput && output && output !== expectedOutput && (
            <div className="p-3 bg-warning/10 border border-warning/20 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <AlertCircle className="h-4 w-4 text-warning" />
                <span className="text-sm font-medium text-warning">Output Mismatch</span>
              </div>
              <div className="text-xs text-muted-foreground">
                Your output doesn't match the expected result. Review your code and try again.
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    )
  }
)

InteractiveCodeBlock.displayName = "InteractiveCodeBlock"

export { InteractiveCodeBlock } 