"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  AlertTriangle, 
  CheckCircle, 
  Code, 
  Zap,
  RefreshCw,
  ArrowRight,
  Lightbulb,
  Bug,
  Terminal,
  Eye,
  Settings
} from "lucide-react"

export interface ErrorPattern {
  id: string
  type: 'syntax' | 'runtime' | 'logic' | 'data' | 'environment'
  pattern: string | RegExp
  category: 'qgis' | 'gee' | 'python' | 'r' | 'data'
  description: string
  commonCauses: string[]
  autoFix?: string
  manualSteps: string[]
  frequency: number
  severity: 'low' | 'medium' | 'high' | 'critical'
}

export interface DetectedError {
  id: string
  patternId: string
  studentId: string
  timestamp: Date
  context: string
  errorMessage: string
  suggestedFix: string
  isAutoResolved: boolean
  confidence: number
}

export interface ErrorDetectionSystemProps {
  onErrorDetected?: (error: DetectedError) => void
  onAutoResolve?: (errorId: string) => Promise<boolean>
  className?: string
}

const ErrorDetectionSystem = React.forwardRef<HTMLDivElement, ErrorDetectionSystemProps>(
  ({
    onErrorDetected,
    onAutoResolve,
    className,
    ...props
  }, ref) => {
    const [detectedErrors, setDetectedErrors] = React.useState<DetectedError[]>([
      {
        id: "err_001",
        patternId: "qgis_invalid_geometry",
        studentId: "student_123",
        timestamp: new Date(),
        context: "Lab 1, Step 4 - Vector Analysis",
        errorMessage: "Invalid geometry found in layer 'uganda_districts'",
        suggestedFix: "Run Vector → Geometry Tools → Fix Geometries",
        isAutoResolved: false,
        confidence: 0.95
      },
      {
        id: "err_002", 
        patternId: "gee_auth_failed",
        studentId: "student_456",
        timestamp: new Date(),
        context: "Lab 3, Step 2 - Earth Engine Authentication",
        errorMessage: "Authentication failed: Invalid credentials",
        suggestedFix: "Re-run ee.Authenticate() and check your Google account",
        isAutoResolved: true,
        confidence: 0.98
      },
      {
        id: "err_003",
        patternId: "python_module_not_found",
        studentId: "student_789",
        timestamp: new Date(),
        context: "Lab 4, Step 1 - Python Environment Setup",
        errorMessage: "ModuleNotFoundError: No module named 'geopandas'",
        suggestedFix: "Install required packages: pip install geopandas",
        isAutoResolved: false,
        confidence: 0.99
      }
    ])

    const [errorPatterns, setErrorPatterns] = React.useState<ErrorPattern[]>([
      {
        id: "qgis_invalid_geometry",
        type: "data",
        pattern: /Invalid geometry|Geometry is not valid/i,
        category: "qgis",
        description: "Shapefile contains invalid geometries",
        commonCauses: [
          "Corrupted shapefile data",
          "Self-intersecting polygons",
          "Incorrect coordinate system"
        ],
        autoFix: "Vector → Geometry Tools → Fix Geometries",
        manualSteps: [
          "Select the problematic layer",
          "Go to Vector → Geometry Tools → Fix Geometries",
          "Choose output location",
          "Replace original layer with fixed version"
        ],
        frequency: 15,
        severity: "medium"
      },
      {
        id: "gee_auth_failed",
        type: "environment",
        pattern: /Authentication failed|Invalid credentials/i,
        category: "gee",
        description: "Google Earth Engine authentication issues",
        commonCauses: [
          "Expired authentication token",
          "Wrong Google account",
          "Browser cookies cleared"
        ],
        autoFix: "ee.Authenticate()",
        manualSteps: [
          "Run ee.Authenticate() in a new cell",
          "Follow the authentication workflow",
          "Make sure you're using the correct Google account",
          "Clear browser cache if needed"
        ],
        frequency: 23,
        severity: "high"
      },
      {
        id: "python_module_not_found",
        type: "environment",
        pattern: /ModuleNotFoundError|No module named/i,
        category: "python",
        description: "Required Python packages not installed",
        commonCauses: [
          "Missing package installation",
          "Wrong Python environment",
          "Virtual environment not activated"
        ],
        autoFix: "pip install [package_name]",
        manualSteps: [
          "Open terminal/command prompt",
          "Run: pip install [missing_package]",
          "Restart kernel if using Jupyter",
          "Verify installation with import statement"
        ],
        frequency: 31,
        severity: "medium"
      }
    ])

    const [stats, setStats] = React.useState({
      totalErrors: 47,
      autoResolved: 32,
      manualResolved: 12,
      pending: 3,
      resolutionRate: 94
    })

    const getSeverityColor = (severity: string) => {
      switch (severity) {
        case 'critical': return "bg-destructive text-destructive-foreground"
        case 'high': return "bg-destructive/80 text-destructive-foreground"
        case 'medium': return "bg-warning text-warning-foreground"
        case 'low': return "bg-info text-info-foreground"
        default: return "bg-muted"
      }
    }

    const getCategoryColor = (category: string) => {
      switch (category) {
        case 'qgis': return "bg-gis-primary/10 text-gis-primary border-gis-primary/20"
        case 'gee': return "bg-success/10 text-success border-success/20"
        case 'python': return "bg-ai-primary/10 text-ai-primary border-ai-primary/20"
        case 'r': return "bg-info/10 text-info border-info/20"
        case 'data': return "bg-warning/10 text-warning border-warning/20"
        default: return "bg-muted"
      }
    }

    const handleAutoResolve = async (errorId: string) => {
      if (onAutoResolve) {
        const success = await onAutoResolve(errorId)
        if (success) {
          setDetectedErrors(prev => 
            prev.map(err => 
              err.id === errorId ? { ...err, isAutoResolved: true } : err
            )
          )
        }
      }
    }

    const handleManualResolve = (errorId: string) => {
      setDetectedErrors(prev => 
        prev.filter(err => err.id !== errorId)
      )
    }

    return (
      <div
        ref={ref}
        className={cn("space-y-6", className)}
        {...props}
      >
        {/* Error Detection Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Bug className="h-4 w-4 text-destructive" />
                <div>
                  <div className="text-2xl font-bold">{stats.totalErrors}</div>
                  <div className="text-xs text-muted-foreground">Total Errors</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4 text-success" />
                <div>
                  <div className="text-2xl font-bold">{stats.autoResolved}</div>
                  <div className="text-xs text-muted-foreground">Auto-Resolved</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-info" />
                <div>
                  <div className="text-2xl font-bold">{stats.manualResolved}</div>
                  <div className="text-xs text-muted-foreground">Manual Help</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-4 w-4 text-warning" />
                <div>
                  <div className="text-2xl font-bold">{stats.pending}</div>
                  <div className="text-xs text-muted-foreground">Pending</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Eye className="h-4 w-4 text-success" />
                <div>
                  <div className="text-2xl font-bold">{stats.resolutionRate}%</div>
                  <div className="text-xs text-muted-foreground">Resolution Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Active Errors */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              <span>Active Error Detection</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {detectedErrors.map((error) => (
                <Card key={error.id} className="border-l-4 border-l-warning">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            Student {error.studentId.split('_')[1]}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {error.context}
                          </Badge>
                          <Badge className={cn(
                            "text-xs",
                            error.isAutoResolved ? "bg-success/10 text-success" : "bg-warning/10 text-warning"
                          )}>
                            {error.isAutoResolved ? "Auto-Resolved" : "Pending"}
                          </Badge>
                        </div>
                        
                        <h4 className="font-medium mb-1">{error.errorMessage}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{error.suggestedFix}</p>
                        
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <span>Confidence: {Math.round(error.confidence * 100)}%</span>
                          <span>{error.timestamp.toLocaleTimeString()}</span>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        {!error.isAutoResolved && (
                          <>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => handleAutoResolve(error.id)}
                            >
                              <Zap className="h-4 w-4 mr-1" />
                              Auto-Fix
                            </Button>
                            <Button 
                              size="sm" 
                              className="bg-info hover:bg-info/90"
                              onClick={() => handleManualResolve(error.id)}
                            >
                              <Lightbulb className="h-4 w-4 mr-1" />
                              Manual Help
                            </Button>
                          </>
                        )}
                        {error.isAutoResolved && (
                          <Button size="sm" variant="outline" disabled>
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Resolved
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Error Patterns */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Code className="h-5 w-5 text-ai-primary" />
              <span>Known Error Patterns</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {errorPatterns.map((pattern) => (
                <Card key={pattern.id}>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge className={getCategoryColor(pattern.category)}>
                            {pattern.category.toUpperCase()}
                          </Badge>
                          <Badge className={getSeverityColor(pattern.severity)}>
                            {pattern.severity.toUpperCase()}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            Seen {pattern.frequency} times
                          </span>
                        </div>
                        
                        <h4 className="font-medium mb-1">{pattern.description}</h4>
                        
                        <div className="space-y-2 text-sm">
                          <div>
                            <span className="font-medium">Common Causes:</span>
                            <ul className="list-disc list-inside text-muted-foreground ml-4">
                              {pattern.commonCauses.map((cause, index) => (
                                <li key={index}>{cause}</li>
                              ))}
                            </ul>
                          </div>
                          
                          {pattern.autoFix && (
                            <div>
                              <span className="font-medium text-success">Auto-Fix:</span>
                              <code className="ml-2 px-2 py-1 bg-muted rounded text-xs">
                                {pattern.autoFix}
                              </code>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Settings className="h-4 w-4 mr-1" />
                          Configure
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-1" />
                          Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }
)

ErrorDetectionSystem.displayName = "ErrorDetectionSystem"

export { ErrorDetectionSystem, type ErrorPattern, type DetectedError } 