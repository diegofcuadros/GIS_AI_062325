import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Bot, 
  MessageSquare, 
  Sparkles, 
  CheckCircle,
  Zap,
  Globe,
  Users,
  BookOpen,
  Code,
  HelpCircle
} from "lucide-react"

export default function ChatbotDemoPage() {
  const features = [
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      title: "AI-Powered Assistant",
      description: "Intelligent chatbot trained on comprehensive GIS and workshop content",
      status: "✅ Implemented"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-accent" />,
      title: "Popup Interface",
      description: "Floating, draggable popup accessible from anywhere on the site",
      status: "✅ Implemented"
    },
    {
      icon: <Sparkles className="h-8 w-8 text-success" />,
      title: "Context Awareness",
      description: "Automatically detects current lab and provides relevant suggestions",
      status: "✅ Implemented"
    },
    {
      icon: <Zap className="h-8 w-8 text-warning" />,
      title: "Instant Responses",
      description: "Fast knowledge base search with comprehensive GIS fundamentals",
      status: "✅ Implemented"
    },
    {
      icon: <Globe className="h-8 w-8 text-info" />,
      title: "Global Access",
      description: "Available on every page with keyboard shortcut (Ctrl+K)",
      status: "✅ Implemented"
    },
    {
      icon: <Users className="h-8 w-8 text-health-primary" />,
      title: "Student-Focused",
      description: "Designed for workshop participants with beginner-friendly explanations",
      status: "✅ Implemented"
    }
  ]

  const demoQuestions = [
    {
      category: "GIS Fundamentals",
      icon: <BookOpen className="h-4 w-4" />,
      questions: [
        "What is GIS?",
        "Vector vs raster data",
        "What is a shapefile?",
        "Understanding coordinate systems"
      ]
    },
    {
      category: "Lab Support",
      icon: <Code className="h-4 w-4" />,
      questions: [
        "How do I load data in QGIS?",
        "Google Earth Engine authentication",
        "What is NDVI?",
        "Creating choropleth maps"
      ]
    },
    {
      category: "Troubleshooting",
      icon: <HelpCircle className="h-4 w-4" />,
      questions: [
        "How to fix invalid geometry?",
        "Debugging Earth Engine code",
        "Buffer analysis issues",
        "Map projection problems"
      ]
    }
  ]

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
          <Bot className="h-4 w-4 mr-2" />
          Live Demo Available
        </div>
        
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          🤖 GIS Learning Assistant
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Experience the intelligent popup chatbot that provides instant help with GIS concepts, 
          lab procedures, and troubleshooting. Built specifically for the workshop with comprehensive 
          knowledge integration.
        </p>
      </section>

      {/* Live Demo Instructions */}
      <section className="max-w-4xl mx-auto">
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Sparkles className="mr-2 h-6 w-6 text-primary" />
              Try the Live Demo
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold">How to Access:</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Look for the floating bot icon in the bottom-right corner</li>
                  <li>• Press <Badge variant="outline" className="text-xs">Ctrl+K</Badge> to open instantly</li>
                  <li>• Click the button to open the popup chatbot</li>
                  <li>• Try asking questions from the examples below</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Features to Test:</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Drag the popup around your screen</li>
                  <li>• Try minimize/maximize functionality</li>
                  <li>• Test context-aware suggestions</li>
                  <li>• Navigate to different lab pages to see context change</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Features Grid */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Implemented Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  {feature.icon}
                  <Badge variant="outline" className="text-xs text-success">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Done
                  </Badge>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-2">{feature.description}</p>
                <Badge variant="secondary" className="text-xs">
                  {feature.status}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Demo Questions */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Try These Questions</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {demoQuestions.map((category, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  {category.icon}
                  <span className="ml-2">{category.category}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {category.questions.map((question, qIndex) => (
                    <Button
                      key={qIndex}
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start text-left h-auto py-2 px-3 text-sm"
                    >
                      "{question}"
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Technical Implementation</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Frontend Components</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• <code className="text-xs bg-muted px-1 rounded">PopupChatbot.tsx</code> - Main popup interface</li>
                <li>• <code className="text-xs bg-muted px-1 rounded">ChatbotWrapper.tsx</code> - Global integration</li>
                <li>• <code className="text-xs bg-muted px-1 rounded">useChatbot.ts</code> - State management hooks</li>
                <li>• <code className="text-xs bg-muted px-1 rounded">introductory-knowledge.ts</code> - Knowledge base</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Draggable popup with boundary constraints</li>
                <li>• Context-aware lab detection from URL</li>
                <li>• Persistent message history in localStorage</li>
                <li>• Responsive design for mobile devices</li>
                <li>• Keyboard shortcuts and accessibility</li>
                <li>• Smart knowledge base search algorithm</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="text-center bg-muted/30 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Phase 2 Completion ✅</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">100%</div>
            <div className="text-sm text-muted-foreground">Popup UI Complete</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent mb-1">✅</div>
            <div className="text-sm text-muted-foreground">Global Integration</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-success mb-1">5+</div>
            <div className="text-sm text-muted-foreground">UX Features</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-info mb-1">📱</div>
            <div className="text-sm text-muted-foreground">Mobile Ready</div>
          </div>
        </div>
      </section>
    </div>
  )
} 