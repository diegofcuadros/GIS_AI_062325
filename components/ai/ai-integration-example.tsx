"use client"

import * as React from "react"
import { SmartLearningAssistant } from "./smart-learning-assistant"
import { ChatAssistant } from "../ui/chat-assistant"
import { TutorialStep } from "../ui/tutorial-step"
import { InteractiveCodeBlock } from "../ui/interactive-code-block"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"

// Simulated AI service integration
const simulateAIResponse = async (message: string, context: any): Promise<string> => {
  // This would connect to OpenAI, Claude, or your preferred AI service
  const responses: Record<string, string> = {
    "how do i load data in qgis": "To load data in QGIS: 1) Go to Layer → Add Layer → Add Vector Layer, 2) Browse to your shapefile (.shp), 3) Click Add. Make sure all related files (.shx, .dbf, .prj) are in the same folder.",
    "what is ndvi": "NDVI (Normalized Difference Vegetation Index) measures vegetation health using the formula: (NIR - Red) / (NIR + Red). Values range from -1 to 1, with higher values indicating healthier vegetation.",
    "authentication failed google earth engine": "For GEE authentication issues: 1) Run ee.Authenticate() in a new cell, 2) Follow the browser authentication flow, 3) Make sure you're signed into the correct Google account, 4) Try ee.Initialize() after authentication.",
    "invalid geometry error": "Invalid geometry errors usually mean corrupted shapefiles. Try: Vector → Geometry Tools → Fix Geometries. This will create a new layer with corrected geometries."
  }
  
  const key = message.toLowerCase()
  const response = responses[key] || `I understand you're asking about "${message}". Based on your current context in ${context.labContext}, I'd recommend checking the step-by-step instructions or trying the suggested troubleshooting steps. Would you like me to break this down further?`
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500))
  return response
}

// Error detection simulation
const detectCodeErrors = async (code: string): Promise<string> => {
  const patterns = [
    {
      pattern: /ee\.Image\([^)]*\)/,
      message: "Good! You're using ee.Image() correctly for single images."
    },
    {
      pattern: /\.select\([^)]*\)/,
      message: "Great use of .select() to choose specific bands."
    },
    {
      pattern: /Map\.addLayer/,
      message: "Perfect! Adding layers to the map for visualization."
    }
  ]
  
  for (const p of patterns) {
    if (p.pattern.test(code)) {
      return p.message
    }
  }
  
  return "Code looks good! Try running it to see the results."
}

export default function AIIntegrationExample() {
  const [showInstructorView, setShowInstructorView] = React.useState(false)
  const [currentStep, setCurrentStep] = React.useState(1)
  const [chatMinimized, setChatMinimized] = React.useState(true)
  const [studentProgress, setStudentProgress] = React.useState({
    completed: [1],
    current: 2,
    totalSteps: 5
  })

  // Simulated lab content
  const labSteps = [
    {
      id: 1,
      title: "Load Uganda District Data",
      description: "Import administrative boundaries for Uganda",
      category: "gis" as const,
      difficulty: "beginner" as const,
      content: (
        <div className="space-y-4">
          <p>In this step, you'll load the Uganda administrative boundaries shapefile into QGIS.</p>
          <InteractiveCodeBlock
            title="QGIS Data Loading"
            language="python"
            category="gis"
            initialCode={`# In QGIS Python Console
layer = iface.addVectorLayer(
    "/path/to/uganda_districts.shp",  # Update with your path
    "Uganda Districts",
    "ogr"
)
if layer.isValid():
    print("Layer loaded successfully!")
else:
    print("Failed to load layer")`}
            onExecute={detectCodeErrors}
          />
        </div>
      ),
      hints: [
        "Make sure the shapefile path doesn't contain spaces",
        "All shapefile components (.shp, .shx, .dbf, .prj) should be in the same folder",
        "Use forward slashes (/) in file paths, even on Windows"
      ]
    },
    {
      id: 2,
      title: "Calculate NDVI from Satellite Data",
      description: "Use Google Earth Engine to compute vegetation index",
      category: "gis" as const,
      difficulty: "intermediate" as const,
      content: (
        <div className="space-y-4">
          <p>Calculate NDVI using Sentinel-2 satellite imagery in Google Earth Engine.</p>
          <InteractiveCodeBlock
            title="NDVI Calculation"
            language="javascript"
            category="gis"
            initialCode={`// Load Sentinel-2 image collection
var s2 = ee.ImageCollection('COPERNICUS/S2_SR')
  .filterDate('2023-01-01', '2023-12-31')
  .filterBounds(uganda)
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20));

// Calculate NDVI
var ndvi = s2.map(function(image) {
  return image.normalizedDifference(['B8', 'B4']).rename('NDVI');
});

// Display the median NDVI
var ndviMedian = ndvi.median();
Map.addLayer(ndviMedian, {min: -1, max: 1, palette: ['red', 'white', 'green']}, 'NDVI');`}
            expectedOutput="Layer added to map successfully"
            onExecute={detectCodeErrors}
          />
        </div>
      ),
      hints: [
        "B8 is the Near-Infrared band, B4 is the Red band in Sentinel-2",
        "NDVI values range from -1 to 1, with higher values indicating healthier vegetation",
        "Use cloud filtering to ensure clean imagery"
      ]
    }
  ]

  const handleStepComplete = (stepId: number) => {
    setStudentProgress(prev => ({
      ...prev,
      completed: [...prev.completed, stepId],
      current: stepId + 1
    }))
    setCurrentStep(stepId + 1)
  }

  const handleStepValidation = async (stepId: number): Promise<boolean> => {
    // Simulate validation logic
    await new Promise(resolve => setTimeout(resolve, 2000))
    return Math.random() > 0.3 // 70% success rate
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Lab 3: Environmental Risk Mapping</h1>
            <p className="text-muted-foreground">AI-Enhanced Learning Experience</p>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="outline">
              Progress: {studentProgress.completed.length}/{studentProgress.totalSteps}
            </Badge>
            <Button
              variant="outline"
              onClick={() => setShowInstructorView(!showInstructorView)}
            >
              {showInstructorView ? "Student View" : "Instructor View"}
            </Button>
          </div>
        </div>

        <Tabs value={showInstructorView ? "instructor" : "student"} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="student">Student Experience</TabsTrigger>
            <TabsTrigger value="instructor">Instructor Dashboard</TabsTrigger>
          </TabsList>

          {/* Student View */}
          <TabsContent value="student" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-3 space-y-6">
                {labSteps.map((step) => (
                  <TutorialStep
                    key={step.id}
                    stepNumber={step.id}
                    title={step.title}
                    description={step.description}
                    category={step.category}
                    difficulty={step.difficulty}
                    content={step.content}
                    hints={step.hints}
                    isCompleted={studentProgress.completed.includes(step.id)}
                    isActive={currentStep === step.id}
                    validation={() => handleStepValidation(step.id)}
                    onComplete={() => handleStepComplete(step.id)}
                    onNext={() => setCurrentStep(step.id + 1)}
                    onPrevious={() => setCurrentStep(step.id - 1)}
                  />
                ))}
              </div>

              {/* Sidebar */}
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Help</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => setChatMinimized(false)}
                    >
                      Ask AI Assistant
                    </Button>
                    <Button size="sm" variant="outline" className="w-full justify-start">
                      Common Issues
                    </Button>
                    <Button size="sm" variant="outline" className="w-full justify-start">
                      Video Tutorials
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Progress</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {labSteps.map((step) => (
                        <div key={step.id} className="flex items-center space-x-2">
                          <div className={`w-3 h-3 rounded-full ${
                            studentProgress.completed.includes(step.id) 
                              ? "bg-success" 
                              : currentStep === step.id 
                                ? "bg-warning" 
                                : "bg-muted"
                          }`} />
                          <span className="text-sm">{step.title}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Instructor View */}
          <TabsContent value="instructor" className="space-y-6">
            <SmartLearningAssistant
              labContext="Lab 3: Environmental Risk Mapping"
              totalStudents={45}
              activeStudents={38}
              onAIResponse={simulateAIResponse}
              onInstructorAlert={(insight) => {
                console.log("Instructor Alert:", insight)
              }}
            />
          </TabsContent>
        </Tabs>

        {/* Floating AI Chat Assistant */}
        <ChatAssistant
          labContext="Lab 3: Environmental Risk Mapping"
          category="gis"
          isMinimized={chatMinimized}
          onMinimize={() => setChatMinimized(!chatMinimized)}
          onMessage={async (message) => {
            return await simulateAIResponse(message, {
              labContext: "Lab 3: Environmental Risk Mapping",
              currentStep,
              studentProgress
            })
          }}
          suggestedPrompts={[
            "How do I load shapefiles in QGIS?",
            "What is NDVI and how is it calculated?",
            "Why is my Google Earth Engine authentication failing?",
            "How do I fix invalid geometry errors?"
          ]}
        />
      </div>
    </div>
  )
} 