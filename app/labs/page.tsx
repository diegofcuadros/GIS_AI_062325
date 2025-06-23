import Link from "next/link"
import { labsData } from "@/lib/constants"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function LabsPage() {
  return (
    <div className="space-y-10">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Labs & Tutorials</h1>
        <p className="text-xl text-muted-foreground">Dive into hands-on exercises and real-world projects.</p>
      </section>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {labsData.map((lab) => (
          <Card key={lab.id} className="flex flex-col bg-card/70 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                {lab.icon && <lab.icon className="mr-2 h-6 w-6 text-primary" />}
                {lab.title}
              </CardTitle>
              <CardDescription>
                Day {lab.day}
                {lab.theme ? ` - ${lab.theme}` : ""}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground text-sm mb-4">{lab.shortDescription}</p>
            </CardContent>
            <div className="p-6 pt-0">
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href={`/labs/${lab.id}`}>
                  Start Lab <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
