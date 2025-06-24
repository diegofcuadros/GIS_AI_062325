"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Bot, 
  Brain, 
  Code, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  Users,
  TrendingUp,
  Lightbulb,
  MessageSquare,
  Activity,
  Search,
  BookOpen,
  Target,
  Zap,
  Eye,
  BarChart3
} from "lucide-react"

export interface StudentProgress {
  studentId: string
  currentLab: number
  currentStep: number
  completedSteps: number[]
  timeSpent: number
  errorCount: number
  helpRequests: number
  lastActivity: Date
  strugglingAreas: string[]
  masteredConcepts: string[]
}

export interface AIInsight {
  type: 'error_pattern' | 'progress_concern' | 'concept_gap' | 'time_concern'
  priority: 'high' | 'medium' | 'low'
  message: string
  suggestedAction: string
  affectedStudents: number
  context: string
}

export interface SmartLearningAssistantProps {
  labContext: string
  totalStudents: number
  activeStudents: number
  onAIResponse?: (message: string, context: any) => Promise<string>
  onInstructorAlert?: (insight: AIInsight) => void
  className?: string
}

const SmartLearningAssistant = React.forwardRef<HTMLDivElement, SmartLearningAssistantProps>(
  ({
    labContext,
    totalStudents,
    activeStudents,
    onAIResponse,
    onInstructorAlert,
    className,
    ...props
  }, ref) => {
    const [activeTab, setActiveTab] = React.useState("monitor")
    const [insights, setInsights] = React.useState<AIInsight[]>([
      {
        type: 'error_pattern',
        priority: 'high',
        message: '15 students struggling with QGIS data loading',
        suggestedAction: 'Send targeted help message about file path requirements',
        affectedStudents: 15,
        context: 'Lab 1, Step 3'
      },
      {
        type: 'progress_concern',
        priority: 'medium',
        message: '8 students significantly behind schedule',
        suggestedAction: 'Offer simplified version or additional office hours',
        affectedStudents: 8,
        context: 'Lab 2, Overall Progress'
      },
      {
        type: 'concept_gap',
        priority: 'medium',
        message: 'Many students confused about coordinate systems',
        suggestedAction: 'Create quick explainer video or diagram',
        affectedStudents: 22,
        context: 'Coordinate Reference Systems'
      }
    ])

    const [commonQuestions, setCommonQuestions] = React.useState([
      {
        question: "How do I fix 'Invalid geometry' error in QGIS?",
        frequency: 12,
        lastAsked: "2 min ago",
        autoResponse: "This usually means your shapefile has corrupted geometries. Try: Vector → Geometry Tools → Fix Geometries"
      },
      {
        question: "Why is my Google Earth Engine script not running?",
        frequency: 8,
        lastAsked: "5 min ago", 
        autoResponse: "Common issues: 1) Check your authentication, 2) Verify dataset names, 3) Check for syntax errors in filters"
      },
      {
        question: "What does NDVI actually measure?",
        frequency: 15,
        lastAsked: "1 min ago",
        autoResponse: "NDVI measures vegetation health using red and near-infrared light. Values range from -1 to 1, with higher values indicating healthier vegetation."
      }
    ])

    const [liveStats, setLiveStats] = React.useState({
      averageProgress: 65,
      studentsNeedingHelp: 7,
      commonErrorsCount: 3,
      avgTimePerStep: 12,
      conceptMastery: 78
    })

    const getPriorityColor = (priority: string) => {
      switch (priority) {
        case 'high': return "bg-destructive/10 text-destructive border-destructive/20"
        case 'medium': return "bg-warning/10 text-warning border-warning/20"
        case 'low': return "bg-info/10 text-info border-info/20"
        default: return "bg-muted"
      }
    }

    const handleSendBroadcast = (message: string, targetGroup: string) => {
      console.log(`Broadcasting to ${targetGroup}: ${message}`)
    }

    const handleCreateHelpResource = (topic: string) => {
      console.log(`Creating help resource for: ${topic}`)
    }

    return (
      <Card
        ref={ref}
        className={cn(
          "w-full max-w-6xl mx-auto",
          className
        )}
        {...props}
      >
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-ai-primary/10 border-2 border-ai-primary/20">
                <Brain className="h-6 w-6 text-ai-primary" />
              </div>
              <div>
                <CardTitle className="text-xl">AI Assistant</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {labContext} • {activeStudents}/{totalStudents} active students
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-2xl font-bold text-success">{liveStats.averageProgress}%</div>
                <div className="text-xs text-muted-foreground">Avg Progress</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-warning">{liveStats.studentsNeedingHelp}</div>
                <div className="text-xs text-muted-foreground">Need Help</div>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="monitor" className="flex items-center gap-2">
                <Activity className="h-4 w-4" />
                Live Monitor
              </TabsTrigger>
              <TabsTrigger value="insights" className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                AI Insights
              </TabsTrigger>
              <TabsTrigger value="questions" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Auto-Help
              </TabsTrigger>
              <TabsTrigger value="broadcast" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Broadcast
              </TabsTrigger>
              <TabsTrigger value="analytics" className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                Analytics
              </TabsTrigger>
            </TabsList>

            <TabsContent value="monitor" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-blue-500" />
                      <div>
                        <div className="text-2xl font-bold">{activeStudents}</div>
                        <div className="text-xs text-muted-foreground">Active Now</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-green-500" />
                      <div>
                        <div className="text-2xl font-bold">{liveStats.avgTimePerStep}m</div>
                        <div className="text-xs text-muted-foreground">Avg Time/Step</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="h-4 w-4 text-orange-500" />
                      <div>
                        <div className="text-2xl font-bold">{liveStats.commonErrorsCount}</div>
                        <div className="text-xs text-muted-foreground">Common Errors</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Target className="h-4 w-4 text-purple-500" />
                      <div>
                        <div className="text-2xl font-bold">{liveStats.conceptMastery}%</div>
                        <div className="text-xs text-muted-foreground">Concept Mastery</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Real-time Student Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[1, 2, 3, 4, 5].map((lab) => (
                      <div key={lab} className="flex items-center space-x-4">
                        <div className="w-20 text-sm font-medium">Lab {lab}</div>
                        <div className="flex-1 bg-muted rounded-full h-2">
                          <div 
                            className="bg-gis-primary h-2 rounded-full transition-all duration-500"
                            style={{ width: `${Math.max(20, 100 - lab * 15)}%` }}
                          />
                        </div>
                        <div className="text-sm text-muted-foreground w-16">
                          {Math.max(5, 35 - lab * 5)} students
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="insights" className="space-y-4">
              <div className="space-y-4">
                {insights.map((insight, index) => (
                  <Card key={index} className={cn("border-l-4", 
                    insight.priority === 'high' ? "border-l-destructive" :
                    insight.priority === 'medium' ? "border-l-warning" : "border-l-info"
                  )}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge className={getPriorityColor(insight.priority)}>
                              {insight.priority.toUpperCase()}
                            </Badge>
                            <span className="text-sm text-muted-foreground">{insight.context}</span>
                          </div>
                          <h4 className="font-medium mb-1">{insight.message}</h4>
                          <p className="text-sm text-muted-foreground mb-3">{insight.suggestedAction}</p>
                          <div className="text-xs text-muted-foreground">
                            Affects {insight.affectedStudents} students
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            Dismiss
                          </Button>
                          <Button size="sm" className="bg-ai-primary hover:bg-ai-primary/90">
                            Take Action
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="questions" className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Most Frequent Questions</h3>
                  <Button size="sm" variant="outline">
                    <Search className="h-4 w-4 mr-2" />
                    Search FAQ
                  </Button>
                </div>
                
                {commonQuestions.map((q, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium mb-2">{q.question}</h4>
                          <p className="text-sm text-muted-foreground mb-3">{q.autoResponse}</p>
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <span>Asked {q.frequency} times</span>
                            <span>Last: {q.lastAsked}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            Edit Response
                          </Button>
                          <Button size="sm" className="bg-success hover:bg-success/90">
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Auto-Reply: ON
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="broadcast" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Broadcasts</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button 
                      onClick={() => handleSendBroadcast("Take a 10-minute break. We'll resume with Lab 3 shortly.", "all")}
                      className="w-full justify-start"
                      variant="outline"
                    >
                      <Clock className="h-4 w-4 mr-2" />
                      Announce Break
                    </Button>
                    
                    <Button 
                      onClick={() => handleSendBroadcast("Common issue: Make sure your file paths don't contain spaces.", "struggling")}
                      className="w-full justify-start"
                      variant="outline"
                    >
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      Address Common Error
                    </Button>
                    
                    <Button 
                      onClick={() => handleSendBroadcast("Great progress everyone! You're doing well.", "all")}
                      className="w-full justify-start"
                      variant="outline"
                    >
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Encourage Students
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Smart Interventions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="p-3 bg-warning/10 border border-warning/20 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Lightbulb className="h-4 w-4 text-warning" />
                        <span className="font-medium text-warning">Suggested Action</span>
                      </div>
                      <p className="text-sm mb-3">7 students stuck on coordinate systems. Send explanation?</p>
                      <Button size="sm" className="bg-warning hover:bg-warning/90 text-warning-foreground">
                        Send CRS Explainer
                      </Button>
                    </div>

                    <div className="p-3 bg-info/10 border border-info/20 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <BookOpen className="h-4 w-4 text-info" />
                        <span className="font-medium text-info">Resource Needed</span>
                      </div>
                      <p className="text-sm mb-3">Multiple questions about NDVI calculation. Create quick guide?</p>
                      <Button size="sm" className="bg-info hover:bg-info/90 text-info-foreground">
                        Generate NDVI Guide
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Learning Effectiveness</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Concepts Mastered</span>
                        <span className="font-bold text-success">78%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Average Completion Time</span>  
                        <span className="font-bold">2.3 hrs</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Help Requests per Student</span>
                        <span className="font-bold">3.2</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Error Resolution Rate</span>
                        <span className="font-bold text-success">92%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">AI Assistant Impact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Questions Auto-Resolved</span>
                        <span className="font-bold text-success">67%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Instructor Interventions</span>
                        <span className="font-bold">12 today</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Student Satisfaction</span>
                        <span className="font-bold text-success">4.7/5</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Time Saved</span>
                        <span className="font-bold text-success">3.2 hrs</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    )
  }
)

SmartLearningAssistant.displayName = "SmartLearningAssistant"

export { SmartLearningAssistant, type AIInsight, type StudentProgress } 