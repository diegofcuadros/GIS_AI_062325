import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function DesignSystemShowcase() {
  return (
    <div className="p-8 space-y-12 max-w-6xl mx-auto">
      <div className="text-center">
        <h1 className="text-display-lg text-gradient mb-4">
          Enhanced Design System Showcase
        </h1>
        <p className="text-xl text-muted-foreground">
          Demonstrating our sophisticated color palette, animations, and components
        </p>
      </div>

      {/* Color Palette Demo */}
      <section className="space-y-6">
        <h2 className="text-display-sm">Domain-Specific Color Themes</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-gis-primary/10 border-gis-primary/20">
            <CardHeader>
              <CardTitle className="text-gis-primary">GIS Theme</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="h-4 bg-gis-primary rounded"></div>
                <div className="h-4 bg-gis-secondary rounded"></div>
                <div className="h-4 bg-gis-accent rounded"></div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-health-primary/10 border-health-primary/20">
            <CardHeader>
              <CardTitle className="text-health-primary">Health Theme</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="h-4 bg-health-primary rounded"></div>
                <div className="h-4 bg-health-secondary rounded"></div>
                <div className="h-4 bg-health-accent rounded"></div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-ai-primary/10 border-ai-primary/20">
            <CardHeader>
              <CardTitle className="text-ai-primary">AI Theme</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="h-4 bg-ai-primary rounded"></div>
                <div className="h-4 bg-ai-secondary rounded"></div>
                <div className="h-4 bg-ai-accent rounded"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Status Indicators */}
      <section className="space-y-6">
        <h2 className="text-display-sm">Status Indicators</h2>
        
        <div className="flex flex-wrap gap-4">
          <div className="status-success px-4 py-2 rounded-lg border">
            Success Status
          </div>
          <div className="status-warning px-4 py-2 rounded-lg border">
            Warning Status
          </div>
          <div className="status-info px-4 py-2 rounded-lg border">
            Info Status
          </div>
          <div className="status-error px-4 py-2 rounded-lg border">
            Error Status
          </div>
        </div>
      </section>

      {/* Interactive Cards */}
      <section className="space-y-6">
        <h2 className="text-display-sm">Interactive Components</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="card-interactive group">
            <CardHeader>
              <CardTitle>Hover Interactive Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                This card demonstrates our enhanced interactive states with hover effects,
                subtle animations, and improved visual feedback.
              </p>
            </CardContent>
          </Card>

          <Card className="glass glow group hover:glow-lg transition-all duration-500">
            <CardHeader>
              <CardTitle>Glass Morphism + Glow</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Combining glass morphism effects with dynamic glow animations for
                a modern, sophisticated appearance.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Animation Showcase */}
      <section className="space-y-6">
        <h2 className="text-display-sm">Animation System</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-6 bg-card rounded-lg border animate-fade-in">
            <div className="text-center">
              <div className="w-8 h-8 bg-primary rounded-full mx-auto mb-2"></div>
              <p className="text-sm">Fade In</p>
            </div>
          </div>
          
          <div className="p-6 bg-card rounded-lg border animate-bounce-in">
            <div className="text-center">
              <div className="w-8 h-8 bg-accent rounded-full mx-auto mb-2"></div>
              <p className="text-sm">Bounce In</p>
            </div>
          </div>
          
          <div className="p-6 bg-card rounded-lg border animate-pulse-soft">
            <div className="text-center">
              <div className="w-8 h-8 bg-success rounded-full mx-auto mb-2"></div>
              <p className="text-sm">Soft Pulse</p>
            </div>
          </div>
          
          <div className="p-6 bg-card rounded-lg border">
            <div className="text-center">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-2 shimmer"></div>
              <p className="text-sm">Shimmer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Typography Scale */}
      <section className="space-y-6">
        <h2 className="text-display-sm">Enhanced Typography</h2>
        
        <div className="space-y-4">
          <div>
            <p className="text-display-2xl">Display 2XL</p>
            <p className="text-display-xl">Display XL</p>
            <p className="text-display-lg">Display LG</p>
            <p className="text-display-md">Display MD</p>
            <p className="text-display-sm">Display SM</p>
            <p className="text-display-xs">Display XS</p>
          </div>
          
          <div className="text-gradient text-4xl font-bold">
            Gradient Text Effect
          </div>
        </div>
      </section>

      {/* Enhanced Buttons */}
      <section className="space-y-6">
        <h2 className="text-display-sm">Enhanced Buttons</h2>
        
        <div className="flex flex-wrap gap-4">
          <Button className="bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300">
            Gradient Button
          </Button>
          
          <Button variant="outline" className="border-gis-primary text-gis-primary hover:bg-gis-primary/10">
            GIS Theme Button
          </Button>
          
          <Button variant="outline" className="border-health-primary text-health-primary hover:bg-health-primary/10">
            Health Theme Button
          </Button>
          
          <Button variant="outline" className="border-ai-primary text-ai-primary hover:bg-ai-primary/10">
            AI Theme Button
          </Button>
        </div>
      </section>

      {/* Phase 1.2 Component Library */}
      <section className="space-y-6">
        <h2 className="text-display-sm">Phase 1.2: Advanced Component Library</h2>
        <p className="text-lg text-muted-foreground">
          Sophisticated interactive components built on our enhanced design system
        </p>
        
        <div className="grid gap-6">
          {/* TutorialStep Preview */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-gis-primary/5 border-b border-gis-primary/20">
              <CardTitle className="flex items-center gap-2 text-gis-primary">
                <div className="w-6 h-6 bg-gis-primary rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                TutorialStep Component
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Interactive step-by-step guidance with built-in timer, validation system, and progressive hints
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse-soft"></div>
                    <span className="text-sm">Timer: 02:45</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="px-2 py-1 bg-success/10 text-success text-xs rounded border border-success/20">
                      Beginner
                    </div>
                    <div className="px-2 py-1 bg-info/10 text-info text-xs rounded border border-info/20">
                      15m
                    </div>
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gis-primary h-2 rounded-full w-1/2 transition-all duration-500"></div>
                </div>
                <div className="flex gap-2">
                  <div className="px-3 py-1 bg-warning/10 text-warning text-xs rounded border border-warning/20">
                    💡 Hints Available (3)
                  </div>
                  <div className="px-3 py-1 bg-info/10 text-info text-xs rounded border border-info/20">
                    ⚠️ Prerequisites (1)
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* InteractiveCodeBlock Preview */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-ai-primary/5 border-b border-ai-primary/20">
              <CardTitle className="flex items-center gap-2 text-ai-primary">
                <div className="w-6 h-6 bg-ai-primary rounded text-white text-xs font-bold flex items-center justify-center">
                  JS
                </div>
                InteractiveCodeBlock Component
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Live code editing with multi-language support, execution, and output validation
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="bg-muted/30 rounded-lg border border-border/50 p-4 font-mono text-sm">
                  <div className="flex">
                    <div className="w-8 text-right text-muted-foreground text-xs mr-4">
                      1<br/>2<br/>3
                    </div>
                    <div className="flex-1">
                      <span className="text-blue-400">const</span> <span className="text-white">data</span> = <span className="text-green-400">"Hello World"</span>;<br/>
                      <span className="text-blue-400">console</span>.<span className="text-yellow-400">log</span>(<span className="text-white">data</span>);<br/>
                      <span className="text-gray-400">// Output: Hello World</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>Last run: 10:30:45</span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="h-7 px-2 text-xs">
                      Copy
                    </Button>
                    <Button size="sm" className="h-7 px-3 text-xs bg-ai-primary hover:bg-ai-primary/90">
                      Run
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ChatAssistant Preview */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-health-primary/5 border-b border-health-primary/20">
              <CardTitle className="flex items-center gap-2 text-health-primary">
                <div className="w-6 h-6 bg-health-primary rounded-full flex items-center justify-center text-white">
                  🤖
                </div>
                ChatAssistant Component
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                AI-powered contextual help with real-time chat interface and suggested prompts
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-health-primary rounded-full flex items-center justify-center text-white text-xs">
                      AI
                    </div>
                    <div className="bg-muted p-3 rounded-lg flex-1 text-sm">
                      Hello! I'm your AI assistant. How can I help you with your GIS analysis today?
                    </div>
                  </div>
                  <div className="flex items-start gap-2 justify-end">
                    <div className="bg-primary text-primary-foreground p-3 rounded-lg text-sm max-w-[80%]">
                      How do I calculate NDVI from satellite data?
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-health-primary rounded-full flex items-center justify-center text-white text-xs">
                      AI
                    </div>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Button size="sm" variant="outline" className="h-7 text-xs">
                    Explain this code
                  </Button>
                  <Button size="sm" variant="outline" className="h-7 text-xs">
                    Debug my issue
                  </Button>
                  <Button size="sm" variant="outline" className="h-7 text-xs">
                    Show example
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
} 