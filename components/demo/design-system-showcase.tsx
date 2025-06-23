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
    </div>
  );
} 