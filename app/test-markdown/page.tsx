'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MarkdownContent } from '@/components/ai/markdown-content'

export default function TestMarkdownPage() {
  const testContent = `Hi! I can help you with healthcare accessibility analysis.

**Direct Links:**
• [Full Buffer Analysis Tutorial - Lab 1](/labs/lab1#section-3-4)
• [QGIS Installation Guide](/labs/lab1#qgis-installation)
• [External Resource](https://qgis.org/documentation)

**💡 Tips:**
• Use projected coordinate systems (UTM) for accurate distance calculations
• Check data quality before running analysis
• Save your work frequently

For more detailed guidance, see [Lab 2 Health Facility Analysis](/labs/lab2#buffer-analysis).`

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Markdown Link Test</h1>
        <p className="text-xl text-muted-foreground">
          Testing that markdown links are properly rendered and clickable
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>With MarkdownContent Component</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 bg-muted rounded-lg">
              <MarkdownContent content={testContent} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Raw Text (Without Processing)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 bg-muted rounded-lg">
              <div className="whitespace-pre-wrap text-sm">{testContent}</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Expected Behavior</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <p><strong>Left panel (processed):</strong> Links should be blue, underlined, and clickable</p>
            <p><strong>Right panel (raw):</strong> Links should appear as plain text with brackets</p>
            <p><strong>Formatting:</strong> Bold headers and bullet points should be styled appropriately</p>
            <p><strong>External links:</strong> Should open in new tabs with external link icon</p>
            <p><strong>Internal links:</strong> Should navigate within the app</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 