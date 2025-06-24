"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LearningTutorChatbot } from "@/components/ai/learning-tutor-chatbot"
import { 
  BookOpen, 
  GraduationCap, 
  Brain, 
  Target, 
  Lightbulb,
  Users,
  Globe,
  Database,
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Eye,
  Heart
} from "lucide-react"

const demoScenarios = [
  {
    id: "qgis_beginner",
    title: "QGIS Interface Discovery",
    description: "First-time QGIS user exploring the interface",
    studentLevel: "beginner" as const,
    sampleQuestion: "I'm new to QGIS, where should I start?",
    expectedApproach: "Socratic questioning to explore interface components"
  },
  {
    id: "crs_confusion",
    title: "Coordinate System Confusion",
    description: "Student struggling with coordinate reference systems",
    studentLevel: "intermediate" as const,
    sampleQuestion: "What is a coordinate reference system?",
    expectedApproach: "Real-world analogies and hands-on discovery"
  },
  {
    id: "ndvi_calculation",
    title: "NDVI Calculation Understanding",
    description: "Health researcher wanting to understand vegetation indices",
    studentLevel: "intermediate" as const,
    sampleQuestion: "How do I calculate NDVI?",
    expectedApproach: "Scientific reasoning from first principles"
  },
  {
    id: "troubleshooting",
    title: "Data Loading Issues",
    description: "Student encountering technical problems",
    studentLevel: "beginner" as const,
    sampleQuestion: "I'm having trouble loading data",
    expectedApproach: "Systematic debugging and problem-solving"
  }
]

const knowledgeSourcesHighlights = [
  {
    source: "mgimond-Spatial",
    title: "Comprehensive Spatial Analysis",
    description: "Academic-quality GIS concepts and statistical methods",
    topics: ["Spatial Relationships", "Buffer Analysis", "Point Patterns", "Autocorrelation"],
    icon: <Database className="h-5 w-5" />
  },
  {
    source: "QGIS-Tutor",
    title: "Hands-On QGIS Training",
    description: "Practical tutorials and troubleshooting guidance",
    topics: ["Interface Navigation", "Data Management", "CRS Handling", "Common Errors"],
    icon: <Globe className="h-5 w-5" />
  },
  {
    source: "GEE-Community",
    title: "Google Earth Engine Mastery",
    description: "Official tutorials for cloud-based remote sensing",
    topics: ["JavaScript API", "NDVI Calculation", "Time Series", "Health Applications"],
    icon: <Brain className="h-5 w-5" />
  }
]

const tutorPhilosophy = [
  {
    principle: "Socratic Method",
    description: "Guides students to discover answers through questioning",
    icon: <MessageSquare className="h-4 w-4" />
  },
  {
    principle: "Hands-On Learning",
    description: "Encourages experimentation and learning from mistakes",
    icon: <Eye className="h-4 w-4" />
  },
  {
    principle: "Scaffolded Support",
    description: "Adapts guidance based on student level and understanding",
    icon: <Target className="h-4 w-4" />
  },
  {
    principle: "Real-World Context",
    description: "Connects concepts to practical health geography applications",
    icon: <Heart className="h-4 w-4" />
  }
]

export default function LearningTutorDemo() {
  const [activeScenario, setActiveScenario] = React.useState<(typeof demoScenarios)[0] | null>(null)
  const [studentLevel, setStudentLevel] = React.useState<"beginner" | "intermediate" | "advanced">("beginner")

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/5 text-foreground">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-block p-3 bg-gradient-to-r from-primary to-accent rounded-full mb-4">
            <GraduationCap className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Enhanced GIS Learning Tutor
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Powered by a comprehensive knowledge base, this AI tutor uses the Socratic method to guide students through GIS discovery.
          </p>
        </header>

        {/* Main Content Grid */}
        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Column: Controls and Scenarios */}
          <div className="lg:col-span-1 space-y-8 lg:sticky lg:top-8">
            {/* Knowledge Sources */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-center lg:text-left">📚 Knowledge Foundation</h2>
              <div className="space-y-4">
                {knowledgeSourcesHighlights.map((source, index) => (
                  <Card key={index} className="bg-background/70 border-primary/20 hover:border-primary/40 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        {source.icon}
                        <span className="ml-2">{source.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {source.topics.map((topic, topicIndex) => (
                          <Badge key={topicIndex} variant="secondary" className="text-xs">{topic}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Learning Scenarios */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-center lg:text-left">🚀 Learning Scenarios</h2>
              <div className="flex justify-center lg:justify-start mb-4">
                <div className="flex bg-muted rounded-lg p-1">
                  {(["beginner", "intermediate", "advanced"] as const).map((level) => (
                    <Button
                      key={level}
                      variant={studentLevel === level ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setStudentLevel(level)}
                      className="capitalize"
                    >
                      {level}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                {demoScenarios.map((scenario) => (
                  <Card 
                    key={scenario.id} 
                    className={`cursor-pointer transition-all duration-300 ${
                      activeScenario?.id === scenario.id 
                        ? 'border-primary ring-2 ring-primary bg-primary/5' 
                        : 'bg-background/70 hover:bg-muted'
                    }`}
                    onClick={() => setActiveScenario(scenario)}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">{scenario.title}</CardTitle>
                        <Badge variant={scenario.studentLevel === studentLevel ? "default" : "secondary"}>
                          {scenario.studentLevel}
                        </Badge>
                      </div>
                      <CardDescription className="text-xs">{scenario.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                       <p className="text-xs text-muted-foreground italic">
                        Start by asking: "{scenario.sampleQuestion}"
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Chatbot */}
          <div className="lg:col-span-2 lg:sticky lg:top-8">
            {activeScenario ? (
              <LearningTutorChatbot
                key={`${activeScenario.id}-${studentLevel}`}
                studentLevel={studentLevel}
                currentLab={activeScenario.title}
                className="h-auto min-h-[75vh] lg:h-[calc(100vh-4rem)]"
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-[75vh] min-h-[600px] bg-muted/50 rounded-lg border-2 border-dashed">
                <div className="text-center p-8">
                  <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                    <GraduationCap className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Select a Scenario</h3>
                  <p className="text-muted-foreground mt-2 max-w-sm mx-auto">
                    Choose a learning scenario from the left to begin your interactive demo with the AI Tutor.
                  </p>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
} 