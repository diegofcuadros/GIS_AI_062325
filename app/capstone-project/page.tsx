import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { capstoneProject } from "@/lib/constants"
import { Target, CheckSquare, Users, Presentation, Settings, BookOpen } from "lucide-react"

export default function CapstoneProjectPage() {
  return (
    <div className="space-y-10">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-2 flex items-center justify-center">
          <Target className="mr-3 h-10 w-10 text-primary" /> {capstoneProject.title}
        </h1>
        <p className="text-xl text-muted-foreground">{capstoneProject.description}</p>
      </section>

      <Card className="bg-card/80">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Settings className="mr-2 h-6 w-6 text-accent" /> Capstone Project Platform
          </CardTitle>
          <CardDescription>Tools and resources to guide your independent research.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {capstoneProject.platformFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckSquare className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">{feature}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Project Phases</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-card/60">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="mr-2" />
                Topic Selection & Planning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Utilize the Project Selection Wizard and Research Framework Templates.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card/60">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2" />
                Work & Collaboration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Engage in independent or group work with instructor support in Live Collaboration Spaces.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card/60">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Presentation className="mr-2" />
                Analysis & Presentation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Complete analysis, export visuals, and prepare slides using the Presentation Builder.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="text-center">
        <p className="text-lg text-muted-foreground">
          This capstone project allows you to apply all learned skills to a real or simulated public health challenge,
          culminating in a portfolio-ready piece.
        </p>
      </section>
    </div>
  )
}
