import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { MapPin, BrainCircuit, Users, Briefcase, Rocket, Zap, Heart, Globe, Brain, ChevronRight, LinkIcon, FileText } from "lucide-react"
import { labsData } from "@/lib/constants"
import Image from "next/image"

export default function HomePage() {
  const keyFeatures = [
    { 
      title: "Real-World Impact", 
      description: "Work with actual Uganda health data and make a difference.", 
      icon: MapPin,
      color: "text-health-primary",
      bgColor: "bg-health-primary/10",
      borderColor: "border-health-primary/20"
    },
    { 
      title: "AI-Powered Learning", 
      description: "Intelligent chatbot trained on workshop content - get instant help anytime.", 
      icon: BrainCircuit,
      color: "text-ai-primary",
      bgColor: "bg-ai-primary/10", 
      borderColor: "border-ai-primary/20"
    },
    { 
      title: "Satellite Data Analysis", 
      description: "Google Earth Engine cloud computing platform.", 
      icon: Rocket,
      color: "text-gis-primary",
      bgColor: "bg-gis-primary/10",
      borderColor: "border-gis-primary/20"
    },
    { 
      title: "Portfolio Ready", 
      description: "Professional maps and analysis for your career.", 
      icon: Briefcase,
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/20"
    },
    { 
      title: "Public Health Focus", 
      description: "Address real malaria transmission challenges.", 
      icon: Users,
      color: "text-success",
      bgColor: "bg-success/10",
      borderColor: "border-success/20"
    },
    { 
      title: "Global Network", 
      description: "Connect with health professionals worldwide.", 
      icon: Globe,
      color: "text-info",
      bgColor: "bg-info/10",
      borderColor: "border-info/20"
    },
  ]

  return (
    <div className="space-y-16">
      {/* Enhanced Hero Section */}
      <section className="text-center py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 -z-10" />
        <div className="relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-bounce-in">
            <Zap className="h-4 w-4 mr-2" />
            No Prior Experience Required
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-gradient animate-fade-in">
            Master GIS, Remote Sensing, and AI for Public Health Impact
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            Transform from beginner to expert in just 3 days. Learn cutting-edge tools while addressing real health challenges.
          </p>
          
          <div className="relative w-full max-w-5xl mx-auto mb-12">
            <div className="relative aspect-[2.35/1] rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
              <Image
                src="/gis-ai-health-banner.png"
                alt="GIS AI Health - Spatial Intelligence for Global Health Banner"
                fill
                className="object-contain p-4"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>

          {/* Instructor Information Section */}
          <div className="bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50 p-8 mb-12 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-primary/20">
                  <Image
                    src="/Dic_2021-V2.jpg"
                    alt="Dr. Diego F. Cuadros"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-xl font-semibold mb-2">Workshop Instructor</h3>
                <p className="text-lg font-medium text-primary mb-1">Dr. Diego F. Cuadros</p>
                <p className="text-muted-foreground mb-2">
                  Digital Epidemiology Laboratory • Digital Futures • University of Cincinnati
                </p>
                <a 
                  href="https://personal-website-dc-lgp4.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  <Globe className="h-4 w-4 mr-1" />
                  Visit Instructor Website
                </a>
              </div>
              <div className="flex-shrink-0">
                <div className="relative w-20 h-20">
                  <Image
                    src="/LOGO_DigEpi_Lab_V2.tif"
                    alt="Digital Epidemiology Laboratory Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Link href={`/labs/${labsData[0].id}`}>
                <Rocket className="h-5 w-5 mr-2" />
                Start Learning Now (Lab 1)
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10 shadow-lg">
              <Link href="/workshop-overview">
                <Heart className="h-5 w-5 mr-2" />
                Learn More About Impact
              </Link>
            </Button>
          </div>
          
          {/* Syllabus Download */}
          <div className="mt-6 text-center">
            <a 
              href="/Tutorials/Syllabus_GIS_Public_Health.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <FileText className="h-4 w-4 mr-2" />
              Download Complete Workshop Syllabus (PDF)
            </a>
          </div>
          
          <div className="mt-8 flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <div className="flex space-x-1">
              <div className="w-2 h-2 rounded-full bg-success"></div>
              <div className="w-2 h-2 rounded-full bg-warning"></div>
              <div className="w-2 h-2 rounded-full bg-info"></div>
            </div>
            <span>Beginner → Intermediate → Expert</span>
          </div>
        </div>
      </section>

      {/* Enhanced Key Features */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why This Workshop Changes Everything</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the future of health research with our integrated learning platform
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyFeatures.map((feature, index) => (
            <Card 
              key={feature.title} 
              className={`card-interactive ${feature.bgColor} ${feature.borderColor} group hover:shadow-glow transition-all duration-500`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${feature.bgColor} ${feature.borderColor} border group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="text-center py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-3xl -z-10" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Global Health?</h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Join thousands of professionals using spatial data science to solve humanity's greatest challenges.
            Your journey from novice to expert starts here.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
            <div className="text-center p-4 rounded-xl bg-success/10 border border-success/20">
              <div className="text-2xl font-bold text-success mb-1">95%</div>
              <div className="text-sm text-muted-foreground">Completion Rate</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-info/10 border border-info/20">
              <div className="text-2xl font-bold text-info mb-1">4.9★</div>
              <div className="text-sm text-muted-foreground">Student Rating</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="/workshop-overview">
                <Globe className="h-5 w-5 mr-2" />
                Explore Full Workshop
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10">
              <Link href="/schedule">
                <BrainCircuit className="h-5 w-5 mr-2" />
                View 3-Day Journey
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-accent hover:bg-accent/10">
              <Link href="/smart-links-demo">
                <Zap className="h-5 w-5 mr-2" />
                Try Smart Links Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
