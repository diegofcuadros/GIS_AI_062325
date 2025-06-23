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

export default function LearningTutorDemo() {
  const [activeDemo, setActiveDemo] = React.useState<string | null>(null)
  const [studentLevel, setStudentLevel] = React.useState<"beginner" | "intermediate" | "advanced">("beginner")

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/5">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-primary to-accent rounded-full">
              <GraduationCap className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Enhanced GIS Learning Tutor
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powered by your comprehensive knowledge base from the Expansion_Knowledge folder, 
            this AI tutor uses the Socratic method to guide students through GIS discovery.
          </p>
        </div>

        {/* Knowledge Sources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">
            📚 Rich Knowledge Foundation
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {knowledgeSourcesHighlights.map((source, index) => (
              <Card key={index} className="bg-background/70 border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    {source.icon}
                    <span className="ml-2">{source.title}</span>
                  </CardTitle>
                  <CardDescription>{source.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {source.topics.map((topic, topicIndex) => (
                      <Badge key={topicIndex} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Teaching Philosophy */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">
            🎓 Socratic Teaching Philosophy
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tutorPhilosophy.map((item, index) => (
              <Card key={index} className="bg-background/50 text-center">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center mb-3">
                    <div className="p-2 bg-primary/10 rounded-full">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">{item.principle}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">
            🚀 Interactive Learning Scenarios
          </h2>
          
          {/* Student Level Selector */}
          <div className="flex justify-center mb-6">
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

          {/* Demo Scenarios */}
          <div className="grid md:grid-cols-2 gap-6">
            {demoScenarios.map((scenario) => (
              <Card 
                key={scenario.id} 
                className={`cursor-pointer transition-all duration-300 ${
                  activeDemo === scenario.id 
                    ? 'border-primary bg-primary/5' 
                    : 'bg-background/70 hover:bg-background/90'
                }`}
                onClick={() => setActiveDemo(activeDemo === scenario.id ? null : scenario.id)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{scenario.title}</CardTitle>
                    <Badge variant={scenario.studentLevel === studentLevel ? "default" : "secondary"}>
                      {scenario.studentLevel}
                    </Badge>
                  </div>
                  <CardDescription>{scenario.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded-md">
                      <p className="text-sm font-medium mb-1">Sample Student Question:</p>
                      <p className="text-sm text-muted-foreground italic">
                        "{scenario.sampleQuestion}"
                      </p>
                    </div>
                    <div className="p-3 bg-accent/10 rounded-md">
                      <p className="text-sm font-medium mb-1">Tutor Approach:</p>
                      <p className="text-sm text-muted-foreground">
                        {scenario.expectedApproach}
                      </p>
                    </div>
                    <Button 
                      variant={activeDemo === scenario.id ? "default" : "outline"}
                      size="sm"
                      className="w-full"
                      onClick={(e) => {
                        e.stopPropagation()
                        setActiveDemo(activeDemo === scenario.id ? null : scenario.id)
                      }}
                    >
                      {activeDemo === scenario.id ? "Try Interactive Demo" : "Start Demo"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Comparison */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">
            ⚡ Enhanced vs Traditional Approach
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-red-50/50 border-red-200">
              <CardHeader>
                <CardTitle className="text-red-700">❌ Traditional Chatbot</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-red-600">• Gives direct answers without exploration</p>
                <p className="text-sm text-red-600">• One-size-fits-all responses</p>
                <p className="text-sm text-red-600">• Limited to pre-programmed responses</p>
                <p className="text-sm text-red-600">• Doesn't encourage critical thinking</p>
                <p className="text-sm text-red-600">• No connection to learning theory</p>
              </CardContent>
            </Card>
            
            <Card className="bg-green-50/50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700">✅ Learning Tutor Enhanced</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-green-600">• Guides students to discover answers</p>
                <p className="text-sm text-green-600">• Adapts to student level and context</p>
                <p className="text-sm text-green-600">• Rich knowledge from expert materials</p>
                <p className="text-sm text-green-600">• Builds deep conceptual understanding</p>
                <p className="text-sm text-green-600">• Based on proven pedagogical methods</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">
            🌟 Key Benefits for Your Workshop
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: <Users className="h-5 w-5" />,
                title: "Scalable Support",
                description: "Handle multiple students simultaneously with personalized guidance"
              },
              {
                icon: <Target className="h-5 w-5" />,
                title: "Deeper Learning",
                description: "Students develop critical thinking and problem-solving skills"
              },
              {
                icon: <Zap className="h-5 w-5" />,
                title: "Reduced Instructor Load",
                description: "AI handles routine questions, instructor focuses on complex issues"
              },
              {
                icon: <BookOpen className="h-5 w-5" />,
                title: "Expert Knowledge",
                description: "Leverages your comprehensive GIS learning materials"
              },
              {
                icon: <Star className="h-5 w-5" />,
                title: "Adaptive Teaching",
                description: "Adjusts approach based on student responses and progress"
              },
              {
                icon: <CheckCircle className="h-5 w-5" />,
                title: "Learning Verification",
                description: "Confirms understanding before moving to next concepts"
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center bg-background/50">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center mb-3">
                    <div className="p-2 bg-primary/10 rounded-full text-primary">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Live Demo */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">
            🎯 Try It Live!
          </h2>
          <p className="text-muted-foreground mb-6">
            The Learning Tutor is ready to guide you through GIS concepts. 
            Try asking questions like the scenarios above.
          </p>
          <div className="flex justify-center space-x-4">
            <Badge variant="outline" className="bg-background">
              <Brain className="h-3 w-3 mr-1" />
              Socratic Method
            </Badge>
            <Badge variant="outline" className="bg-background">
              <BookOpen className="h-3 w-3 mr-1" />
              Expert Knowledge
            </Badge>
            <Badge variant="outline" className="bg-background">
              <Target className="h-3 w-3 mr-1" />
              Adaptive Learning
            </Badge>
          </div>
        </div>
      </div>

      {/* The actual Learning Tutor - positioned as floating widget */}
      <LearningTutorChatbot
        currentLab="demo"
        currentStep={1}
        studentLevel={studentLevel}
      />
    </div>
  )
} 