import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, Laptop, Brain } from "lucide-react"

export default function WorkshopOverviewPage() {
  const objectives = [
    "Understand GIS and Earth observation in health research",
    "Map disease prevalence and health service access using QGIS",
    "Analyze environmental risk factors with Google Earth Engine",
    "Use ChatGPT for code generation and debugging",
    "Apply machine learning clustering for risk assessment",
    "Conduct independent spatial health research",
  ]

  const targetAudience = [
    "Public health practitioners and researchers",
    "GIS analysts and spatial data professionals",
    "Graduate students in public health or geography",
    "International development professionals",
    "Government health officials and planners",
  ]

  const prerequisites = [
    "No prior GIS or programming experience required",
    "Basic computer literacy (file management, web browsers)",
    "Interest in public health and spatial analysis",
    "Access to reliable internet connection",
  ]

  const technicalRequirements = [
    "Modern web browser (Chrome, Firefox, Safari)",
    "Google account for Earth Engine access",
    "QGIS software (installation guide provided)",
    "Optional: ChatGPT account for enhanced AI assistance",
  ]

  return (
    <div className="space-y-10">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Workshop Overview</h1>
        <p className="text-xl text-muted-foreground">
          Spatial Data and Artificial Intelligence for Health Research and Planning
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CheckCircle className="mr-2 h-6 w-6 text-green-500" /> Workshop Objectives
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {objectives.map((obj, i) => (
                <li key={i}>{obj}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2 h-6 w-6 text-blue-500" /> Target Audience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {targetAudience.map((aud, i) => (
                <li key={i}>{aud}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Brain className="mr-2 h-6 w-6 text-purple-500" /> Prerequisites
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {prerequisites.map((pre, i) => (
                <li key={i}>{pre}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Laptop className="mr-2 h-6 w-6 text-orange-500" /> Technical Requirements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {technicalRequirements.map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              Note: The workshop platform itself runs in your browser, minimizing setup. QGIS installation will be
              guided.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
