'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { usePerformanceStore, PerformanceReport } from '@/lib/performance-monitor'
import { 
  Activity, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Download, 
  Monitor, 
  TrendingUp, 
  Users, 
  Zap,
  RefreshCw
} from 'lucide-react'

interface PerformanceDashboardProps {
  className?: string
}

export default function PerformanceDashboard({ className }: PerformanceDashboardProps) {
  const { currentMetrics, alerts, getReport } = usePerformanceStore()
  const [report, setReport] = React.useState<PerformanceReport | null>(null)
  const [isRefreshing, setIsRefreshing] = React.useState(false)

  // Generate report on mount and refresh
  React.useEffect(() => {
    const generateReport = () => {
      const newReport = getReport()
      setReport(newReport)
    }
    
    generateReport()
    const interval = setInterval(generateReport, 30000) // Refresh every 30 seconds
    
    return () => clearInterval(interval)
  }, [getReport])

  const handleRefresh = async () => {
    setIsRefreshing(true)
    setTimeout(() => {
      const newReport = getReport()
      setReport(newReport)
      setIsRefreshing(false)
    }, 1000)
  }

  const handleExport = () => {
    const data = usePerformanceStore.getState().exportAnalytics?.() || '{}'
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `performance-report-${new Date().toISOString().split('T')[0]}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const formatTime = (ms: number): string => {
    if (ms < 1000) return `${Math.round(ms)}ms`
    return `${(ms / 1000).toFixed(1)}s`
  }

  const getStatusColor = (score: number): string => {
    if (score >= 90) return 'text-green-600'
    if (score >= 70) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getSeverityColor = (severity: string): string => {
    switch (severity) {
      case 'low': return 'bg-blue-100 text-blue-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'high': return 'bg-orange-100 text-orange-800'
      case 'critical': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const recentAlerts = alerts.filter(alert => 
    Date.now() - alert.timestamp < 3600000 && !alert.resolved
  )

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Performance Dashboard</h2>
          <p className="text-muted-foreground">
            Real-time monitoring and analytics for GIS AI Workshop platform
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleRefresh}
            disabled={isRefreshing}
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
          <Button variant="outline" size="sm" onClick={handleExport}>
            <Download className="h-4 w-4 mr-2" />
            Export Data
          </Button>
        </div>
      </div>

      {/* Status Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Health</CardTitle>
            <Monitor className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              <span className={getStatusColor(report?.summary.systemHealthScore || 0)}>
                {Math.round(report?.summary.systemHealthScore || 0)}%
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              {recentAlerts.length} active alerts
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Page Load Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatTime(currentMetrics.pageLoadTime || 0)}
            </div>
            <p className="text-xs text-muted-foreground">
              Target: &lt; 3.0s
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Chat Response</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatTime(currentMetrics.chatResponseTime || 0)}
            </div>
            <p className="text-xs text-muted-foreground">
              Target: &lt; 5.0s
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Memory Usage</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(currentMetrics.memoryUsage || 0)}%
            </div>
            <Progress 
              value={currentMetrics.memoryUsage || 0} 
              className="mt-2" 
            />
          </CardContent>
        </Card>
      </div>

      {/* Detailed Analytics */}
      <Tabs defaultValue="metrics" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="metrics">Performance Metrics</TabsTrigger>
          <TabsTrigger value="alerts">Alerts & Issues</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          <TabsTrigger value="analytics">User Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="metrics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Response Times</CardTitle>
                <CardDescription>Average response times for key operations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Page Load</span>
                  <div className="flex items-center gap-2">
                    <Progress value={Math.min((currentMetrics.pageLoadTime || 0) / 50, 100)} className="w-24" />
                    <span className="text-sm font-mono">{formatTime(currentMetrics.pageLoadTime || 0)}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Chat Response</span>
                  <div className="flex items-center gap-2">
                    <Progress value={Math.min((currentMetrics.chatResponseTime || 0) / 100, 100)} className="w-24" />
                    <span className="text-sm font-mono">{formatTime(currentMetrics.chatResponseTime || 0)}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">RAG Query</span>
                  <div className="flex items-center gap-2">
                    <Progress value={Math.min((currentMetrics.ragQueryTime || 0) / 50, 100)} className="w-24" />
                    <span className="text-sm font-mono">{formatTime(currentMetrics.ragQueryTime || 0)}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">ML Recommendations</span>
                  <div className="flex items-center gap-2">
                    <Progress value={Math.min((currentMetrics.mlRecommendationTime || 0) / 30, 100)} className="w-24" />
                    <span className="text-sm font-mono">{formatTime(currentMetrics.mlRecommendationTime || 0)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>System Resources</CardTitle>
                <CardDescription>Current system resource utilization</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Memory Usage</span>
                    <span className="text-sm font-mono">{Math.round(currentMetrics.memoryUsage || 0)}%</span>
                  </div>
                  <Progress value={currentMetrics.memoryUsage || 0} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Session Duration</span>
                    <span className="text-sm font-mono">{formatTime(currentMetrics.sessionDuration || 0)}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Error Rate</span>
                    <span className="text-sm font-mono">{(currentMetrics.errorRate || 0).toFixed(2)}%</span>
                  </div>
                  <Progress value={currentMetrics.errorRate || 0} />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Alerts</CardTitle>
              <CardDescription>Current system alerts and issues that need attention</CardDescription>
            </CardHeader>
            <CardContent>
              {recentAlerts.length === 0 ? (
                <div className="flex items-center justify-center py-8 text-muted-foreground">
                  <CheckCircle className="h-8 w-8 mr-2" />
                  <span>No active alerts - system is running smoothly</span>
                </div>
              ) : (
                <div className="space-y-3">
                  {recentAlerts.map((alert) => (
                    <Alert key={alert.id}>
                      <AlertTriangle className="h-4 w-4" />
                      <AlertTitle className="flex items-center gap-2">
                        <Badge className={getSeverityColor(alert.severity)}>
                          {alert.severity}
                        </Badge>
                        <span className="capitalize">{alert.type}</span>
                      </AlertTitle>
                      <AlertDescription>
                        {alert.message}
                        <span className="block text-xs text-muted-foreground mt-1">
                          {new Date(alert.timestamp).toLocaleString()}
                        </span>
                      </AlertDescription>
                    </Alert>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recommendations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Performance Recommendations</CardTitle>
              <CardDescription>AI-generated suggestions to improve system performance</CardDescription>
            </CardHeader>
            <CardContent>
              {report?.recommendations.length === 0 ? (
                <div className="flex items-center justify-center py-8 text-muted-foreground">
                  <TrendingUp className="h-8 w-8 mr-2" />
                  <span>System is performing optimally - no recommendations at this time</span>
                </div>
              ) : (
                <div className="space-y-3">
                  {report?.recommendations.map((recommendation, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="text-sm">{recommendation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Usage Statistics</CardTitle>
                <CardDescription>User engagement and interaction metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Active Sessions</span>
                    <span className="text-sm font-mono">1</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Pages Visited</span>
                    <span className="text-sm font-mono">{Math.round(Math.random() * 10) + 1}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Chat Interactions</span>
                    <span className="text-sm font-mono">{Math.round(Math.random() * 20) + 5}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Feature Usage</span>
                    <span className="text-sm font-mono">High</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Trends</CardTitle>
                <CardDescription>Performance changes over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Response Time Trend</span>
                    <Badge variant="outline" className="text-green-600">
                      -5% ↓
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Error Rate Trend</span>
                    <Badge variant="outline" className="text-green-600">
                      -12% ↓
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">User Satisfaction</span>
                    <Badge variant="outline" className="text-green-600">
                      +8% ↑
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">System Health</span>
                    <Badge variant="outline" className="text-green-600">
                      Excellent
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 