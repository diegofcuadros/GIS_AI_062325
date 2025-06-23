import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { MapPin, BrainCircuit, Users, Briefcase, Rocket } from "lucide-react"
import { labsData } from "@/lib/constants"
import Image from "next/image"

export default function HomePage() {
  const keyFeatures = [
    { title: "Real-World Impact", description: "Work with actual Uganda health data.", icon: MapPin },
    { title: "AI-Powered Learning", description: "ChatGPT integration for coding assistance.", icon: BrainCircuit },
    { title: "Satellite Data Analysis", description: "Google Earth Engine cloud computing.", icon: Rocket },
    { title: "Portfolio Ready", description: "Professional maps and analysis for your career.", icon: Briefcase },
    { title: "Public Health Focus", description: "Address real malaria transmission challenges.", icon: Users },
  ]

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary">
          Master GIS, Remote Sensing, and AI for Public Health Impact
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          No Prior Experience Required. Go from Zero to GIS Expert in 3 Days.
        </p>
        <div className="relative w-full max-w-4xl mx-auto aspect-[2.35/1] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/gis-ai-health-banner.png"
            alt="GIS AI Health - Spatial Intelligence for Global Health Banner"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <div className="mt-8">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href={`/labs/${labsData[0].id}`}>Start Learning Now (Lab 1)</Link>
          </Button>
        </div>
        {/* Progress Indicators could be a simple visual or text */}
        <p className="mt-4 text-sm text-muted-foreground">Your learning path: Beginner → Intermediate → Expert</p>
      </section>

      {/* Key Features Showcase */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-10">Why This Workshop?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keyFeatures.map((feature) => (
            <Card key={feature.title} className="bg-card/50 hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                <feature.icon className="h-10 w-10 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action / Next Steps */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold mb-6">Ready to Make an Impact?</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Join us to develop critical skills for addressing public health challenges using cutting-edge spatial data
          science.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/workshop-overview">Learn More About the Workshop</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-card text-card-foreground hover:bg-muted">
            <Link href="/schedule">View Full Schedule</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
