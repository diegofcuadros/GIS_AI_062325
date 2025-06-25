// Advanced Performance Monitoring Service - Phase 9.1
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// Core Performance Metrics
export interface PerformanceMetrics {
  pageLoadTime: number
  chatResponseTime: number
  ragQueryTime: number
  mlRecommendationTime: number
  sessionDuration: number
  errorRate: number
  memoryUsage: number
}

export interface Alert {
  id: string
  type: 'performance' | 'error' | 'usage'
  severity: 'low' | 'medium' | 'high' | 'critical'
  message: string
  timestamp: number
  resolved: boolean
}

export interface PerformanceReport {
  summary: {
    averagePageLoad: number
    averageChatResponse: number
    systemHealthScore: number
  }
  recommendations: string[]
  topIssues: Alert[]
}

// Performance Store
interface PerformanceStore {
  currentMetrics: Partial<PerformanceMetrics>
  alerts: Alert[]
  updateMetric: (key: keyof PerformanceMetrics, value: number) => void
  addAlert: (alert: Omit<Alert, 'id' | 'timestamp'>) => void
  getReport: () => PerformanceReport
}

class PerformanceMonitorService {
  private store: any
  private intervalId: NodeJS.Timeout | null = null

  constructor() {
    this.store = usePerformanceStore.getState()
    this.initializeMonitoring()
  }

  private initializeMonitoring(): void {
    if (typeof window === 'undefined') return
    
    // Real-time monitoring every 5 seconds
    this.intervalId = setInterval(() => {
      this.collectMetrics()
      this.analyzePerformance()
    }, 5000)

    // Setup performance observers
    this.setupObservers()
    this.setupErrorTracking()
  }

  private setupObservers(): void {
    if (!window.PerformanceObserver) return

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming
          this.store.updateMetric('pageLoadTime', navEntry.loadEventEnd - navEntry.loadEventStart)
        }
      }
    })

    try {
      observer.observe({ entryTypes: ['navigation', 'measure'] })
    } catch (error) {
      console.warn('Performance observer setup failed:', error)
    }
  }

  private setupErrorTracking(): void {
    window.addEventListener('error', (event) => {
      this.store.addAlert({
        type: 'error',
        severity: 'medium',
        message: `Error: ${event.message}`,
        resolved: false
      })
    })
  }

  private collectMetrics(): void {
    // Memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory
      const usage = (memory.usedJSHeapSize / memory.totalJSHeapSize) * 100
      this.store.updateMetric('memoryUsage', usage)
    }

    // Session duration
    const sessionStart = performance.timing?.navigationStart || Date.now()
    this.store.updateMetric('sessionDuration', Date.now() - sessionStart)
  }

  private analyzePerformance(): void {
    const metrics = this.store.currentMetrics

    if (metrics.pageLoadTime && metrics.pageLoadTime > 3000) {
      this.store.addAlert({
        type: 'performance',
        severity: 'medium',
        message: 'Page load time exceeds 3 seconds',
        resolved: false
      })
    }

    if (metrics.chatResponseTime && metrics.chatResponseTime > 5000) {
      this.store.addAlert({
        type: 'performance',
        severity: 'high',
        message: 'Chat response time exceeds 5 seconds',
        resolved: false
      })
    }

    if (metrics.memoryUsage && metrics.memoryUsage > 80) {
      this.store.addAlert({
        type: 'performance',
        severity: 'high',
        message: 'High memory usage detected',
        resolved: false
      })
    }
  }

  // Measure chatbot operations
  public measureOperation(operation: string): () => void {
    const startTime = performance.now()

    return () => {
      const duration = performance.now() - startTime
      
      switch (operation) {
        case 'chat-response':
          this.store.updateMetric('chatResponseTime', duration)
          break
        case 'rag-query':
          this.store.updateMetric('ragQueryTime', duration)
          break
        case 'ml-recommendation':
          this.store.updateMetric('mlRecommendationTime', duration)
          break
      }
    }
  }

  public dispose(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
  }
}

// Zustand Store
export const usePerformanceStore = create<PerformanceStore>()(
  persist(
    (set, get) => ({
      currentMetrics: {},
      alerts: [],

      updateMetric: (key, value) => set((state) => ({
        currentMetrics: { ...state.currentMetrics, [key]: value }
      })),

      addAlert: (alert) => set((state) => ({
        alerts: [...state.alerts, {
          ...alert,
          id: `alert_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          timestamp: Date.now()
        }]
      })),

      getReport: () => {
        const state = get()
        const { currentMetrics, alerts } = state
        
        return {
          summary: {
            averagePageLoad: currentMetrics.pageLoadTime || 0,
            averageChatResponse: currentMetrics.chatResponseTime || 0,
            systemHealthScore: calculateHealthScore(alerts)
          },
          recommendations: generateRecommendations(currentMetrics, alerts),
          topIssues: alerts.filter(a => !a.resolved).slice(0, 5)
        }
      }
    }),
    {
      name: 'performance-store',
      partialize: (state) => ({
        alerts: state.alerts.filter(a => Date.now() - a.timestamp < 86400000) // 24 hours
      })
    }
  )
)

// Utility functions
function calculateHealthScore(alerts: Alert[]): number {
  const recentAlerts = alerts.filter(a => Date.now() - a.timestamp < 3600000) // Last hour
  let score = 100
  
  score -= recentAlerts.filter(a => a.severity === 'low').length * 2
  score -= recentAlerts.filter(a => a.severity === 'medium').length * 5
  score -= recentAlerts.filter(a => a.severity === 'high').length * 15
  score -= recentAlerts.filter(a => a.severity === 'critical').length * 30
  
  return Math.max(0, score)
}

function generateRecommendations(metrics: Partial<PerformanceMetrics>, alerts: Alert[]): string[] {
  const recommendations: string[] = []
  
  if (metrics.pageLoadTime && metrics.pageLoadTime > 3000) {
    recommendations.push('Optimize images and reduce bundle size for faster page loads')
  }
  
  if (metrics.chatResponseTime && metrics.chatResponseTime > 5000) {
    recommendations.push('Consider caching frequently asked questions')
  }
  
  if (metrics.memoryUsage && metrics.memoryUsage > 70) {
    recommendations.push('Review memory usage patterns')
  }
  
  const errorAlerts = alerts.filter(a => a.type === 'error' && !a.resolved)
  if (errorAlerts.length > 3) {
    recommendations.push('Address recurring errors to improve stability')
  }
  
  return recommendations
}

// Export singleton
export const performanceMonitor = new PerformanceMonitorService() 