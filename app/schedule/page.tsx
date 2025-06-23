import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { labsData, capstoneProject } from "@/lib/constants"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarCheck, ChevronRight, Lightbulb, Zap } from "lucide-react"

export default function SchedulePage() {
  const getLabsForDay = (day: number) => labsData.filter((lab) => lab.day === day)

  const renderLabCard = (lab: (typeof labsData)[0]) => (
    <Card key={lab.id} className="mb-4 bg-card/70 hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {lab.title}
          {lab.icon && <lab.icon className="h-6 w-6 text-primary" />}
        </CardTitle>
        {lab.theme && <CardDescription className="text-accent">{lab.theme}</CardDescription>}
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-3">{lab.shortDescription}</p>
        {lab.specialFeatures && lab.specialFeatures.length > 0 && (
          <div className="mb-3">
            <h4 className="font-semibold text-sm mb-1 text-foreground/80">Special Features:</h4>
            <ul className="list-disc list-inside text-xs text-muted-foreground space-y-0.5">
              {lab.specialFeatures.slice(0, 3).map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
              {lab.specialFeatures.length > 3 && <li>And more...</li>}
            </ul>
          </div>
        )}
        <Button asChild variant="link" className="p-0 h-auto text-primary">
          <Link href={`/labs/${lab.id}`}>
            Go to Lab <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )

  return (
    <div className="space-y-10">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">3-Day Workshop Schedule</h1>
        <p className="text-xl text-muted-foreground">
          An intensive journey from fundamentals to advanced applications.
        </p>
      </section>

      {/* Day 1 */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 flex items-center">
          <CalendarCheck className="mr-3 h-8 w-8 text-primary" /> Day 1: Foundations of GIS and Public Health
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-medium mb-3">Morning Session (9:00 AM - 12:00 PM)</h3>
            <p className="text-muted-foreground mb-2">Welcome & Workshop Overview</p>
            <p className="text-muted-foreground mb-2">Lecture: GIS for Health</p>
            {renderLabCard(getLabsForDay(1)[0])} {/* Lab 1 */}
          </div>
          <div>
            <h3 className="text-xl font-medium mb-3">Afternoon Session (1:00 PM - 4:00 PM)</h3>
            {renderLabCard(getLabsForDay(1)[1])} {/* Lab 2 */}
            <p className="text-muted-foreground mt-4">Map Review & Discussion</p>
            <p className="text-muted-foreground">Q&A and Wrap-Up</p>
          </div>
        </div>
      </section>

      {/* Day 2 */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 flex items-center">
          <Lightbulb className="mr-3 h-8 w-8 text-yellow-400" /> Day 2: Remote Sensing & AI Integration
        </h2>
        <p className="text-lg text-muted-foreground mb-4">{labsData.find((lab) => lab.id === "lab3")?.theme}</p>
        <div className="grid md:grid-cols-3 gap-6">
          {getLabsForDay(2).map(renderLabCard)} {/* Labs 3, 4, 5 */}
        </div>
        <p className="text-muted-foreground mt-4">Export and Visualize Cluster Maps in QGIS</p>
        <p className="text-muted-foreground">Reflection and Discussion on AI Tools</p>
      </section>

      {/* Day 3 */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 flex items-center">
          <Zap className="mr-3 h-8 w-8 text-green-400" /> Day 3: Independent Research Projects
        </h2>
        <Card className="bg-card/70">
          <CardHeader>
            <CardTitle>{capstoneProject.title}</CardTitle>
            <CardDescription>{capstoneProject.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-3">Project Kickoff, Planning, Work Sessions, and Presentations.</p>
            <h4 className="font-semibold text-sm mb-1 text-foreground/80">Capstone Platform Features:</h4>
            <ul className="list-disc list-inside text-xs text-muted-foreground space-y-0.5">
              {capstoneProject.platformFeatures.slice(0, 5).map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
              {capstoneProject.platformFeatures.length > 5 && <li>And many more...</li>}
            </ul>
            <Button asChild variant="link" className="p-0 h-auto text-primary mt-3">
              <Link href="/capstone-project">
                Explore Capstone Project <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
