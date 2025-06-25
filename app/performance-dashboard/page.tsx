'use client'

import React from 'react'
import PerformanceDashboard from '@/components/ai/performance-dashboard'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function PerformanceDashboardPage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold gradient-text">
          Performance Dashboard
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Real-time monitoring and analytics for the GIS AI Workshop platform. 
          Track performance metrics, system health, and user analytics in real-time.
        </p>
      </div>

      {/* Features Overview */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Real-time Monitoring</CardTitle>
            <CardDescription>
              Live performance metrics updated every 5 seconds
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Page load times</li>
              <li>• Chat response speeds</li>
              <li>• Memory usage tracking</li>
              <li>• Error rate monitoring</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Smart Alerts</CardTitle>
            <CardDescription>
              Intelligent alerts for performance issues
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Performance degradation</li>
              <li>• High error rates</li>
              <li>• Memory leaks</li>
              <li>• System health issues</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Analytics & Insights</CardTitle>
            <CardDescription>
              Comprehensive analytics and recommendations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• User behavior analysis</li>
              <li>• Performance trends</li>
              <li>• AI-powered recommendations</li>
              <li>• Exportable reports</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Main Dashboard */}
      <PerformanceDashboard />

      {/* Implementation Notes */}
      <Card className="border-dashed">
        <CardHeader>
          <CardTitle className="text-lg">📊 Phase 9.1 Implementation</CardTitle>
          <CardDescription>
            Advanced Performance Monitoring & Analytics - Complete
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-semibold text-sm mb-2">✅ Implemented Features:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Real-time performance monitoring service</li>
                <li>• Comprehensive metrics collection</li>
                <li>• Smart alert system with severity levels</li>
                <li>• Interactive dashboard with 4 main sections</li>
                <li>• Data persistence with Zustand</li>
                <li>• Export functionality for analytics</li>
                <li>• Performance recommendations engine</li>
                <li>• System health scoring</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-2">🔧 Technical Details:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Performance Observer API integration</li>
                <li>• Error tracking and monitoring</li>
                <li>• Memory usage analysis</li>
                <li>• Chatbot operation timing</li>
                <li>• User interaction analytics</li>
                <li>• Trend analysis algorithms</li>
                <li>• Auto-refresh capabilities</li>
                <li>• Mobile-responsive design</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-4 border-t">
            <p className="text-sm text-muted-foreground">
              <strong>Integration:</strong> This dashboard is ready for production use and can be integrated 
              into the admin panel or accessed as a standalone monitoring tool. All performance data 
              is automatically collected from the chatbot and other platform components.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 