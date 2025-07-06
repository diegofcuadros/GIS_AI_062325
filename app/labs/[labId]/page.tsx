import { Button } from "@/components/ui/button"
import type { ReactNode } from "react"
import { labsData } from "@/lib/constants"
import { notFound } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import {
  CheckSquare,
  Lightbulb,
  PlayCircle,
  Code2,
  BarChartHorizontalBig,
  Bot,
  Zap,
  Briefcase,
  Rocket,
  Globe,
  ListOrdered,
  BookOpen,
  GraduationCap,
  HeartPulse,
  Layers,
  BarChart3,
  ShieldCheck,
  AlertTriangle,
  Database,
  Settings,
  Share2,
  Eye,
  Filter,
  LayoutDashboard,
  TestTube,
  TerminalSquare,
  Users,
  Settings2,
  Award,
  Cloud,
  Sigma,
  Waypoints,
  FileText,
  Palette,
  FileOutput,
  Brain,
  MessageSquare,
  GitBranch,
  UserCheck,
  ShieldAlert,
  Cpu,
  AreaChart,
  FlaskConical,
  LightbulbIcon,
  Download,
} from "lucide-react"
import { Laptop } from "lucide-react"



// PDF Download Component
function PDFDownload({ labId }: { labId: string }) {
  const pdfMap: { [key: string]: string } = {
    lab1: "Lab_1_Tutorial.pdf",
    lab2: "Lab_2_Tutorial.pdf", 
    lab3: "Lab_3_Tutorial.pdf",
    lab4: "Lab_4_Tutorial.pdf",
    lab5: "Lab_5_Tutorial.pdf"
  }

  const pdfFile = pdfMap[labId]
  if (!pdfFile) return null

  return (
    <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
      <div className="flex items-center gap-3">
        <Download className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        <div>
          <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
            Simplified Tutorial Available
          </p>
          <p className="text-xs text-blue-700 dark:text-blue-300 mb-2">
            A simplified version of the tutorial for this lab can be found here:
          </p>
          <a 
            href={`/Tutorials/${pdfFile}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
          >
            <FileText className="h-4 w-4 mr-1" />
            Download PDF Tutorial
          </a>
        </div>
      </div>
    </div>
  )
}

// Placeholder for Code Block / Interactive Cell
function CodeBlockPlaceholder({
  language,
  title,
  children,
}: { language: string; title: string; children?: ReactNode }) {
  return (
    <div className="my-4 font-sans">
      <p className="text-sm font-semibold mb-1 text-primary">
        {title} ({language})
      </p>
      <div className="p-4 bg-muted rounded-md border border-dashed">
        <Code2 className="h-5 w-5 text-muted-foreground mb-2" />
        <pre className="text-xs text-muted-foreground whitespace-pre-wrap bg-transparent border-none p-0">
          {children ||
            `Interactive ${language} code cell placeholder. Execute code, see instant results, reactive updates.`}
        </pre>
        {title.includes("GEE") && language === "javascript" && (
          <div className="mt-2 p-2 bg-muted/50 rounded border border-dashed border-yellow-500/50">
            <p className="font-semibold text-xs text-yellow-400">Live GEE Code Editor (Conceptual)</p>
          </div>
        )}
      </div>
    </div>
  )
}

// Placeholder for Interactive Visualization
function InteractiveVisualizationPlaceholder({ title, description }: { title: string; description: string }) {
  return (
    <Card className="my-6 bg-card/50">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <BarChartHorizontalBig className="mr-2 h-5 w-5 text-accent" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="font-serif text-base">
        <p className="text-sm text-muted-foreground mb-2">{description}</p>
        <div className="h-48 bg-muted rounded flex items-center justify-center border border-dashed">
          <p className="text-muted-foreground text-sm">(Interactive Visualization Placeholder)</p>
        </div>
        {title.includes("K-means Clustering") && (
          <div className="mt-2 p-2 bg-muted/50 rounded border border-dashed border-purple-500/50 font-sans">
            <p className="font-semibold text-xs text-purple-400">Interactive K-means Visualization (Conceptual)</p>
            <p className="text-xs text-muted-foreground">Adjust parameters, see clustering in action.</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

// Helper for Interactive Verification Points
const InteractiveVerificationPoints = ({ section }: { section: string }) => (
  <Card className="mt-4 mb-2 bg-green-900/30 border-green-500/50">
    <CardHeader className="pb-2">
      <CardTitle className="text-base flex items-center text-green-400 font-sans">
        <CheckSquare className="mr-2 h-5 w-5" /> Interactive Verification Point
      </CardTitle>
    </CardHeader>
    <CardContent className="font-serif text-sm">
      <p className="text-xs text-muted-foreground mb-2">After completing section {section}:</p>
      <ul className="list-disc list-inside space-y-0.5 text-xs text-muted-foreground/80">
        <li>"Does your map/data look like this?" (Comparison image/data snippet placeholder)</li>
        <li>Automatic data validation checks (Conceptual: e.g., "Is CRS set to EPSG:32636?")</li>
        <li>Common error detection and fixes (AI-assisted placeholder)</li>
      </ul>
    </CardContent>
  </Card>
)

// Content for Lab 1 (Malaria Mapping)
const lab1Content = (
  <div className="font-serif text-lg space-y-6">
    <PDFDownload labId="lab1" />
    {/* ... Lab 1 content from previous steps ... */}
    <Card id="lab1-introduction" className="mb-6 bg-card/80 scroll-mt-20">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <PlayCircle className="mr-2 h-6 w-6 text-primary" />
          1. Introduction to Malaria Mapping and Public Health GIS
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-base">
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">1.1 The Global and Local Impact of Malaria</h4>
          <p className="text-muted-foreground mb-2 leading-relaxed">
            Malaria remains one of the most significant public health challenges globally, with 247 million cases
            reported worldwide and particularly severe impact in sub-Saharan Africa. In Uganda specifically, the disease
            accounts for an estimated 12.7 million cases and approximately 17,556 deaths annually, placing an enormous
            burden on the country's healthcare system and economy. The disease affects approximately 95% of Uganda's
            population, making it a critical public health priority.
          </p>
          <div className="my-3 p-2 bg-muted rounded-md text-center">
            <img
              src="/lab1/uganda-political-map-detailed.png"
              alt="Political map of Uganda showing administrative regions, neighboring countries, and major cities."
              className="mx-auto rounded-md max-w-full h-auto"
            />
            <p className="text-xs text-muted-foreground mt-1 font-sans">
              Political map of Uganda showing administrative regions.
            </p>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Uganda's geographic and climatic conditions create ideal environments for malaria transmission.
            Understanding the spatial distribution of malaria is essential for effective resource allocation, targeted
            interventions, and evaluation of control programs.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">
            1.2 The Power of Geographic Information Systems in Disease Mapping
          </h4>
          <p className="text-muted-foreground mb-2 leading-relaxed">
            Geographic Information Systems (GIS) have revolutionized how we understand disease patterns and implement
            public health interventions. For malaria control, GIS enables health professionals to identify transmission
            hotspots, direct resources, monitor trends, evaluate programs, and predict outbreaks.
          </p>
          <p className="text-muted-foreground font-sans font-medium">
            GIS with epidemiological data provides tools for:
          </p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 text-base leading-relaxed">
            <li>Identifying geographic patterns of disease transmission.</li>
            <li>Correlating environmental factors with disease prevalence.</li>
            <li>Monitoring changes in disease distribution over time.</li>
            <li>Targeting interventions to high-risk areas.</li>
            <li>Evaluating the effectiveness of public health programs.</li>
          </ul>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">
            1.3 Uganda's Malaria Context and Surveillance Systems
          </h4>
          <p className="text-muted-foreground leading-relaxed">
            Uganda is divided into 15 health administrative regions, further subdivided into districts. The country
            experiences seasonal malaria transmission, with Anopheles gambiae as the predominant vector and Plasmodium
            falciparum as the most common parasite. National malaria surveillance operates through systems like HMIS,
            malaria-specific surveillance, and community-based surveillance, though data quality can be a challenge.
            This tutorial helps leverage GIS for better decision-making.
          </p>
        </div>
      </CardContent>
    </Card>

    {/* Section 2: Understanding GIS and QGIS Fundamentals */}
    <Card id="lab1-fundamentals" className="mb-6 bg-card/80 scroll-mt-20">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <Lightbulb className="mr-2 h-6 w-6 text-yellow-400" />
          2. Understanding GIS and QGIS Fundamentals
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-base">
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">2.1 Key GIS Concepts for Health Mapping</h4>
          <p className="text-muted-foreground mb-2 leading-relaxed">
            GIS integrates hardware, software, data, and users to manage and present geographic data. Key terms include:
          </p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 text-base leading-relaxed">
            <li>
              <strong>Vector Data:</strong> Points (health facilities), lines (roads), polygons (districts).
            </li>
            <li>
              <strong>Raster Data:</strong> Grid-based data (population density, elevation).
            </li>
            <li>
              <strong>Attribute Table:</strong> Database with info about spatial features (disease counts).
            </li>
            <li>
              <strong>Choropleth Map:</strong> Areas colored by statistical values (disease rates).
            </li>
            <li>
              <strong>Spatial Join:</strong> Combining datasets based on spatial relationships.
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">2.2 Coordinate Reference Systems for Uganda</h4>
          <p className="text-muted-foreground mb-2 leading-relaxed">
            A Coordinate Reference System (CRS) defines how Earth's curved surface is mapped flat. Crucial for accuracy.
            Common systems for Uganda:
          </p>
          <div className="my-3 p-2 bg-muted rounded-md text-center">
            <img
              src="/lab1/uganda-crs-table.png"
              alt="Table detailing common GIS Coordinate Reference Systems for Uganda, including EPSG code, type, coverage, use cases, and advantages."
              className="mx-auto rounded-md max-w-full h-auto"
            />
            <p className="text-xs text-muted-foreground mt-1 font-sans">Uganda GIS Coordinate Reference Systems.</p>
          </div>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 text-base leading-relaxed">
            <li>
              <strong>WGS 84 (EPSG:4326):</strong> Global standard, for general mapping.
            </li>
            <li>
              <strong>UTM Zone 35N (EPSG:32635):</strong> Accurate measurements for western Uganda.
            </li>
            <li>
              <strong>UTM Zone 36N (EPSG:32636):</strong> Best for eastern Uganda, precise measurements. (Recommended
              for this workshop)
            </li>
            <li>
              <strong>Arc 1960:</strong> Legacy system.
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">2.3 Understanding the QGIS Interface</h4>
          <p className="text-muted-foreground mb-2 leading-relaxed">
            QGIS is a free, open-source GIS. Main interface components:
          </p>
          <div className="my-3 p-2 bg-muted rounded-md text-center">
            <img
              src="/lab1/qgis-menu-add-arcgis-rest-layer.png"
              alt="QGIS interface screenshot showing the 'Layer' menu expanded, with 'Add Layer' and then 'Add ArcGIS REST Server Layer...' highlighted."
              className="mx-auto rounded-md max-w-full h-auto"
            />
            <p className="text-xs text-muted-foreground mt-1 font-sans">
              QGIS interface: Adding an ArcGIS REST Server Layer.
            </p>
          </div>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 text-base leading-relaxed">
            <li>
              <strong>Menu Bar:</strong> All QGIS functions.
            </li>
            <li>
              <strong>Toolbars:</strong> Quick access to common tools.
            </li>
            <li>
              <strong>Browser Panel:</strong> Navigate files and databases.
            </li>
            <li>
              <strong>Layers Panel:</strong> Shows all data layers.
            </li>
            <li>
              <strong>Map Canvas:</strong> Main map display area.
            </li>
            <li>
              <strong>Status Bar:</strong> Coordinates, scale, projection info.
            </li>
          </ul>
          <p className="text-muted-foreground mt-2 leading-relaxed">
            Ensure the Processing Toolbox is visible for analytical tools.
          </p>
        </div>
      </CardContent>
    </Card>

    {/* Section 3: Step-by-Step QGIS Malaria Mapping Tutorial */}
    <h2 id="lab1-tutorial" className="font-sans text-3xl font-bold mt-10 mb-6 text-center text-primary scroll-mt-20">
      3. Step-by-Step QGIS Malaria Mapping Tutorial
    </h2>

    <Card className="mb-6 bg-card/90">
      <CardHeader>
        <CardTitle className="font-sans">3.1 Project Setup and Data Preparation</CardTitle>
      </CardHeader>
      <CardContent className="text-base">
        <h4 className="font-sans font-semibold text-xl mb-2">Step 1: Launch QGIS and Create a New Project</h4>
        <ol className="list-decimal list-inside space-y-1 text-muted-foreground mb-3 pl-4 leading-relaxed">
          <li>Open QGIS from your applications menu or desktop shortcut.</li>
          <li>Click on "Project" → "New" to create a new project.</li>
          <li>Immediately save your project: "Project" → "Save As", name it "Uganda_Malaria_Mapping.qgz".</li>
          <li>Choose an appropriate folder for all project files.</li>
        </ol>
        <CodeBlockPlaceholder language="QGIS (GUI)" title="QGIS Action: New Project">
          Conceptual representation of creating and saving a new project in QGIS.
        </CodeBlockPlaceholder>
        <h4 className="font-sans font-semibold text-xl mt-4 mb-2">
          Step 2: Set Up the Coordinate Reference System (CRS)
        </h4>
        <ol className="list-decimal list-inside space-y-1 text-muted-foreground mb-3 pl-4 leading-relaxed">
          <li>Go to "Project" → "Properties" → "CRS".</li>
          <li>In the filter box, search for "32636" (WGS 84 / UTM Zone 36N).</li>
          <li>Select this CRS and click "Apply" then "OK".</li>
          <li>Verify the CRS in the bottom-right corner of QGIS. This is crucial for accurate measurements.</li>
        </ol>
        <CodeBlockPlaceholder language="QGIS (GUI)" title="QGIS Action: Set Project CRS">
          Conceptual representation of setting the project CRS to UTM Zone 36N.
        </CodeBlockPlaceholder>
        <InteractiveVerificationPoints section="3.1" />
      </CardContent>
    </Card>

    <Card className="mb-6 bg-card/90">
      <CardHeader>
        <CardTitle className="font-sans">3.2 Loading Spatial Data</CardTitle>
      </CardHeader>
      <CardContent className="text-base">
        <h4 className="font-sans font-semibold text-xl mb-2">Step 3: Add Uganda District Boundaries</h4>
        <ol className="list-decimal list-inside space-y-1 text-muted-foreground mb-3 pl-4 leading-relaxed">
          <li>Click "Layer" → "Data Source Manager" (or Ctrl+L).</li>
          <li>Select "Vector" from the left panel.</li>
          <li>For "Source Type," select "File".</li>
          <li>Click "..." to browse for your Uganda_districts shapefile/geopackage.</li>
          <li>Click "Add" then "Close". Districts should appear on map.</li>
        </ol>
        <div className="my-3 p-2 bg-muted rounded-md text-center">
          <img
            src="/lab1/qgis-data-source-manager-vector-geojson.png"
            alt="QGIS Data Source Manager window, Vector tab, showing how to add a vector dataset from a local GeoJSON file."
            className="mx-auto rounded-md max-w-full h-auto"
          />
          <p className="text-xs text-muted-foreground mt-1 font-sans">
            QGIS Data Source Manager: Adding a vector layer.
          </p>
        </div>
        <CodeBlockPlaceholder language="QGIS (GUI)" title="QGIS Action: Add Vector Layer">
          Conceptual representation of adding the Uganda districts layer.
        </CodeBlockPlaceholder>

        <h4 className="font-sans font-semibold text-xl mt-4 mb-2">
          Step 4: Examine the District Boundaries Attribute Table
        </h4>
        <ol className="list-decimal list-inside space-y-1 text-muted-foreground mb-3 pl-4 leading-relaxed">
          <li>Right-click on Uganda_districts layer in Layers panel → "Open Attribute Table".</li>
          <li>Examine available attributes.</li>
          <li>Note the field with district names (e.g., "DIST_NAME") for joining.</li>
          <li>Close attribute table. Ensure district names are consistent.</li>
        </ol>
        <InteractiveVisualizationPlaceholder
          title="Attribute Table Preview"
          description="Placeholder for showing a snippet of the district attribute table."
        />
        <InteractiveVerificationPoints section="3.2" />
      </CardContent>
    </Card>

    <Card className="mb-6 bg-card/90">
      <CardHeader>
        <CardTitle className="font-sans">3.3 Importing and Joining Health Data</CardTitle>
      </CardHeader>
      <CardContent className="text-base">
        <h4 className="font-sans font-semibold text-xl mb-2">Step 5: Import Malaria Prevalence Data (CSV)</h4>
        <ol className="list-decimal list-inside space-y-1 text-muted-foreground mb-3 pl-4 leading-relaxed">
          <li>Click "Layer" → "Add Layer" → "Add Delimited Text Layer".</li>
          <li>Browse to your malaria_prevalence.csv file.</li>
          <li>Ensure "CSV (comma separated values)" is selected.</li>
          <li>Under "Geometry Definition," select "No geometry (attribute table only)".</li>
          <li>Click "Add" then "Close".</li>
        </ol>
        <CodeBlockPlaceholder language="QGIS (GUI)" title="QGIS Action: Add Delimited Text Layer">
          Conceptual representation of importing the malaria CSV data.
        </CodeBlockPlaceholder>

        <h4 className="font-sans font-semibold text-xl mt-4 mb-2">Step 6: Join Malaria Data to District Boundaries</h4>
        <ol className="list-decimal list-inside space-y-1 text-muted-foreground mb-3 pl-4 leading-relaxed">
          <li>Right-click on Uganda_districts layer → "Properties".</li>
          <li>Go to "Joins" tab, click "+".</li>
          <li>
            In "Add Vector Join" dialog:
            <ul className="list-disc list-inside ml-6">
              <li>Join layer: your malaria prevalence CSV.</li>
              <li>Join field: district name field in CSV.</li>
              <li>Target field: district name field in shapefile.</li>
              <li>Optionally, uncheck "Custom field name prefix" or leave blank.</li>
            </ul>
          </li>
          <li>Click "OK", then "Apply".</li>
          <li>
            Verify join by opening attribute table of districts layer (should now include malaria data). Check for
            inconsistencies if join fails.
          </li>
        </ol>
        <CodeBlockPlaceholder language="QGIS (GUI)" title="QGIS Action: Add Vector Join">
          Conceptual representation of joining the malaria data to district boundaries.
        </CodeBlockPlaceholder>
        <InteractiveVerificationPoints section="3.3" />
      </CardContent>
    </Card>

    <Card className="mb-6 bg-card/90">
      <CardHeader>
        <CardTitle className="font-sans">3.4 Creating a Choropleth Map with Graduated Symbology</CardTitle>
      </CardHeader>
      <CardContent className="text-base">
        <h4 className="font-sans font-semibold text-xl mb-2">Step 7: Apply Graduated Symbology</h4>
        <ol className="list-decimal list-inside space-y-1 text-muted-foreground mb-3 pl-4 leading-relaxed">
          <li>Right-click Uganda_districts layer → "Properties".</li>
          <li>Go to "Symbology" tab.</li>
          <li>Change from "Single Symbol" to "Graduated".</li>
          <li>Value: your malaria prevalence field.</li>
          <li>Color ramp: e.g., YlOrRd (Yellow-Orange-Red).</li>
          <li>Mode: "Natural Breaks (Jenks)".</li>
          <li>Classes: 5.</li>
          <li>Click "Classify".</li>
          <li>Optionally, double-click classes to adjust ranges/labels.</li>
          <li>Click "Apply" and "OK". Map should now show prevalence.</li>
        </ol>
        <div className="my-3 p-2 bg-muted rounded-md text-center">
          <img
            src="/lab1/qgis-graduated-symbology-malaria.png"
            alt="QGIS map view of Uganda with districts colored by malaria prevalence, and the Graduated Symbology panel open on the right."
            className="mx-auto rounded-md max-w-full h-auto"
          />
          <p className="text-xs text-muted-foreground mt-1 font-sans">
            QGIS Graduated Symbology for malaria prevalence.
          </p>
        </div>
        <CodeBlockPlaceholder language="QGIS (GUI)" title="QGIS Action: Apply Graduated Symbology">
          Conceptual representation of applying graduated symbology.
        </CodeBlockPlaceholder>

        <h4 className="font-sans font-semibold text-xl mt-4 mb-2">
          Step 8: Customize the Classification Method (Optional)
        </h4>
        <ol className="list-decimal list-inside space-y-1 text-muted-foreground mb-3 pl-4 leading-relaxed">
          <li>Return to layer properties → Symbology tab.</li>
          <li>Experiment with methods: Natural Breaks, Quantiles, Equal Interval, Standard Deviation.</li>
          <li>Choose method that best represents data patterns.</li>
        </ol>
        <div className="my-3 p-2 bg-muted rounded-md text-center">
          <img
            src="/lab1/gis-data-classification-methods-table.png"
            alt="Table comparing GIS Data Classification Methods: Natural Breaks (Jenks), Quantiles (Equal Count), Equal Interval, and Standard Deviation, with their use cases, advantages, disadvantages, and best applications."
            className="mx-auto rounded-md max-w-full h-auto"
          />
          <p className="text-xs text-muted-foreground mt-1 font-sans">Comparison of GIS Data Classification Methods.</p>
        </div>

        <h4 className="font-sans font-semibold text-xl mt-4 mb-2">Step 9: Customize the Color Ramp (Optional)</h4>
        <ol className="list-decimal list-inside space-y-1 text-muted-foreground mb-3 pl-4 leading-relaxed">
          <li>In Symbology tab, click color ramp dropdown.</li>
          <li>Select "Create New Color Ramp".</li>
          <li>Choose "cpt-city" for diverse schemes.</li>
          <li>Browse categories like "Health" or "Sequential".</li>
          <li>Select a scheme and click "OK".</li>
        </ol>
        <div className="my-3 p-2 bg-muted rounded-md text-center">
          <img
            src="/lab1/qgis-cpt-city-color-ramp-dialog.png"
            alt="QGIS 'cpt-city color ramp' dialog, showing a selection of available color ramps categorized by theme and author."
            className="mx-auto rounded-md max-w-full h-auto"
          />
          <p className="text-xs text-muted-foreground mt-1 font-sans">QGIS cpt-city color ramp selection dialog.</p>
        </div>
        <InteractiveVerificationPoints section="3.4" />
      </CardContent>
    </Card>

    <Card className="mb-6 bg-card/90">
      <CardHeader>
        <CardTitle className="font-sans">3.5 Creating a Professional Map Layout</CardTitle>
      </CardHeader>
      <CardContent className="text-base">
        <h4 className="font-sans font-semibold text-xl mb-2">Step 10: Create a New Print Layout</h4>
        <ol className="list-decimal list-inside space-y-1 text-muted-foreground mb-3 pl-4 leading-relaxed">
          <li>Click "Project" → "New Print Layout".</li>
          <li>Name it (e.g., "Uganda Malaria Map"), click "OK".</li>
          <li>In print layout window, "Add Item" → "Add Map".</li>
          <li>Click and drag on canvas to draw map rectangle.</li>
        </ol>

        <h4 className="font-sans font-semibold text-xl mt-4 mb-2">Step 11: Add Essential Map Elements</h4>
        <p className="text-muted-foreground mb-2 leading-relaxed">Use "Add Item" menu to add:</p>
        <div className="my-3 p-2 bg-muted rounded-md text-center">
          <img
            src="/lab1/common-map-elements-diagram.png"
            alt="Diagram illustrating common map elements: Title, North arrow, Scale bar, Map body, Legend, Acknowledgement, and Map border."
            className="mx-auto rounded-md mb-4 max-w-full h-auto"
          />
          <p className="text-xs text-muted-foreground mt-1 font-sans mb-3">Common map elements.</p>
        </div>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-3 pl-4 text-base leading-relaxed">
          <li>
            <strong>Title:</strong> Add Label, enter "Uganda Malaria Prevalence Map", format text.
          </li>
          <li>
            <strong>Legend:</strong> Add Legend, customize title and appearance, select relevant layers.
          </li>
          <li>
            <strong>North Arrow:</strong> Add North Arrow, choose style.
          </li>
          <li>
            <strong>Scale Bar:</strong> Add Scale Bar, set units and segments.
          </li>
          <li>
            <strong>Data Sources & Date:</strong> Add Label, enter source info and map creation date.
          </li>
        </ul>
        <div className="my-3 p-2 bg-muted rounded-md text-center">
          <img
            src="/lab1/qgis-print-layout-malaria-map.png"
            alt="QGIS Print Layout window displaying a composed Uganda Malaria Prevalence Map with title, map, legend, scale bar, and north arrow."
            className="mx-auto rounded-md max-w-full h-auto"
          />
          <p className="text-xs text-muted-foreground mt-1 font-sans">
            QGIS Print Layout window showing a completed map.
          </p>
        </div>
        <InteractiveVerificationPoints section="3.5" />
      </CardContent>
    </Card>

    <Card className="mb-6 bg-card/90">
      <CardHeader>
        <CardTitle className="font-sans">3.6 Exporting Your Map</CardTitle>
      </CardHeader>
      <CardContent className="text-base">
        <h4 className="font-sans font-semibold text-xl mb-2">Step 12: Export the Map</h4>
        <ol className="list-decimal list-inside space-y-1 text-muted-foreground mb-3 pl-4 leading-relaxed">
          <li>
            <strong>As Image:</strong> "Layout" → "Export as Image". Choose resolution (300 dpi for print), folder,
            filename. Click "Save".
          </li>
          <li>
            <strong>As PDF:</strong> "Layout" → "Export as PDF". Adjust settings, folder, filename. Click "Save".
          </li>
          <li>
            <strong>To Print:</strong> "Layout" → "Print". Configure printer settings. Click "Print".
          </li>
        </ol>
        <p className="text-muted-foreground leading-relaxed">
          Choose export resolution and format based on intended use.
        </p>
        <InteractiveVerificationPoints section="3.6" />
      </CardContent>
    </Card>

    {/* Section 4: Advanced Analysis Techniques (Summary) */}
    <Card id="lab1-advanced" className="my-6 bg-card/80 scroll-mt-20">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <Zap className="mr-2 h-6 w-6 text-purple-400" />
          4. Advanced Analysis Techniques for Malaria Mapping
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-base">
        <p className="text-muted-foreground leading-relaxed">
          Brief overview of advanced techniques (detailed in extension challenges or future labs):
        </p>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 text-base leading-relaxed">
          <li>
            <strong>Effective Use of Classification Methods:</strong> Beyond Natural Breaks, explore Quantiles, Equal
            Interval, Standard Deviation for different insights.
          </li>
          <li>
            <strong>Integrating Other Health and Environmental Data:</strong> Combine with temperature, rainfall,
            population, health facility data for richer analysis.
          </li>
          <li>
            <strong>Temporal Analysis of Malaria Patterns:</strong> Use QGIS Temporal Controller to animate changes over
            time, compare seasons.
          </li>
        </ul>
        <div className="my-3 p-2 bg-muted rounded-md text-center">
          <img
            src="/lab1/uganda-malaria-prevalence-stylized-map.png"
            alt="Stylized map of Uganda showing malaria prevalence as colored circles by region (Northern, Eastern, Central, Western) with a cases per 100k color scale bar."
            className="mx-auto rounded-md max-w-full h-auto"
          />
          <p className="text-xs text-muted-foreground mt-1 font-sans">Simulated Malaria Prevalence Map of Uganda.</p>
        </div>
      </CardContent>
    </Card>

    {/* Section 5: Applications and Real-World Use Cases (Summary) */}
    <Card id="lab1-applications" className="my-6 bg-card/80 scroll-mt-20">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <Briefcase className="mr-2 h-6 w-6 text-indigo-400" />
          5. Applications and Real-World Use Cases
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-base">
        <p className="text-muted-foreground leading-relaxed">How GIS-based malaria mapping supports public health:</p>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 text-base leading-relaxed">
          <li>Resource allocation to high-burden areas.</li>
          <li>Targeting interventions (bed nets, spraying).</li>
          <li>Health facility planning.</li>
          <li>Program evaluation.</li>
          <li>Outbreak response.</li>
        </ul>
        <p className="text-muted-foreground font-sans font-medium mt-2">
          Recommendations for Effective Health Mapping:
        </p>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 text-base leading-relaxed">
          <li>Know your audience.</li>
          <li>Choose appropriate metrics (e.g., rates vs. counts).</li>
          <li>Include context (boundaries, cities).</li>
          <li>Mind color choices (color-blind friendly).</li>
          <li>Maintain data integrity and communicate limitations.</li>
          <li>Provide interpretation.</li>
        </ul>
      </CardContent>
    </Card>

    {/* Section 6: Conclusion and Next Steps (Summary) */}
    <Card id="lab1-conclusion" className="my-6 bg-card/80 scroll-mt-20">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <Rocket className="mr-2 h-6 w-6 text-teal-400" />
          6. Conclusion and Next Steps
        </CardTitle>
      </CardHeader>
      <CardContent className="text-base">
        <p className="text-muted-foreground mb-2 leading-relaxed">
          This tutorial provides a foundation for creating professional malaria maps. Skills are transferable to other
          health challenges.
        </p>
        <p className="text-muted-foreground font-sans font-medium">To continue developing your skills:</p>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 text-base leading-relaxed">
          <li>Practice with different datasets.</li>
          <li>Learn advanced spatial analysis (hotspot detection).</li>
          <li>Explore time-series visualization.</li>
          <li>Integrate remote sensing data.</li>
          <li>Develop interactive web maps.</li>
        </ul>
      </CardContent>
    </Card>

    {/* Extension Challenges from Design Plan */}
    <h3 id="lab1-challenges" className="font-sans text-2xl font-semibold mt-8 mb-4 flex items-center scroll-mt-20">
      <GraduationCap className="mr-2 h-6 w-6 text-yellow-400" />
      Extension Challenges for Lab 1
    </h3>
    <ul className="list-disc list-inside space-y-1 text-muted-foreground text-base leading-relaxed">
      <li>Create maps for different diseases using similar techniques.</li>
      <li>
        Experiment with all available classification methods in QGIS and document the differences in visual output and
        interpretation.
      </li>
      <li>
        Design maps specifically tailored for different audiences (e.g., policymakers, community health workers,
        researchers).
      </li>
      <li>
        Research and compare your generated malaria prevalence map with official WHO malaria maps or reports for Uganda.
      </li>
      <li>Integrate population data to calculate and map malaria incidence rates instead of raw prevalence.</li>
    </ul>
  </div>
)

// Content for Lab 2 (Health Facility Access Analysis)
const lab2Content = (
  <div className="font-serif text-lg space-y-6">
    {/* ... Lab 2 content from previous steps ... */}
    <Card id="lab2-introduction" className="mb-6 bg-card/80 scroll-mt-20">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <HeartPulse className="mr-2 h-6 w-6 text-primary" />
          1. Introduction to Healthcare Accessibility and Spatial Analysis
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-base">
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">
            1.1 The Critical Importance of Healthcare Accessibility
          </h4>
          <p className="text-muted-foreground mb-2 leading-relaxed">
            Healthcare accessibility represents one of the most fundamental determinants of health outcomes and a
            cornerstone of health equity. In Uganda, where approximately 86.6% of the population lives in rural areas,
            geographic barriers to healthcare access create substantial disparities in health outcomes and contribute to
            preventable morbidity and mortality. Spatial accessibility, defined as the ease with which individuals can
            reach healthcare services from their location, encompasses both physical distance and the availability of
            transportation infrastructure.
          </p>
          <div className="my-3 p-2 bg-muted rounded-md text-center">
            <img
              src="/lab2/clinic-eastern-uganda.png"
              alt="A newly opened clinic building with a green roof and yellow walls, surrounded by people in rural Eastern Uganda."
              className="mx-auto rounded-md max-w-full h-auto"
            />
            <p className="text-xs text-muted-foreground mt-1 font-sans">
              A newly opened clinic building with a green roof and yellow walls, surrounded by people in rural Eastern
              Uganda.
            </p>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            The relationship between geographic access and health outcomes is particularly pronounced for time-sensitive
            conditions like malaria, where delayed treatment significantly increases the risk of severe complications
            and death. Research demonstrates that mortality in children under 5 years doubles when healthcare facilities
            are more than a 4-hour walk away, emphasizing the life-or-death importance of spatial accessibility
            analysis. In Uganda's context, where malaria accounts for 30-50% of all outpatient visits, understanding and
            improving spatial access patterns becomes essential for reducing disease burden and achieving health equity.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">1.2 Understanding Uganda's Health System Hierarchy</h4>
          <p className="text-muted-foreground leading-relaxed">
            Uganda's decentralized health system operates through a well-defined hierarchy designed to provide
            comprehensive coverage across diverse geographic and demographic contexts. The system consists of seven
            levels, each serving specific population catchments and providing defined service packages. At the community
            level, Village Health Teams (Level I) serve approximately 1,000-2,000 people and provide basic health
            education and referrals. Health Centre II facilities, intended to serve 5,000 people, offer outpatient
            services and are typically staffed by enrolled nurses.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The intermediate levels include Health Centre III facilities serving 20,000-40,000 people with basic
            inpatient services and laboratory capabilities, and Health Centre IV facilities serving 100,000-200,000
            people with surgical capacity and specialized care. District hospitals provide comprehensive services for
            populations of 500,000-1,000,000, while regional referral hospitals and national referral hospitals offer
            increasingly specialized care. This hierarchical structure creates the spatial framework within which
            accessibility analysis becomes crucial for health planning and resource allocation.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">1.3 The Science of Spatial Accessibility Measurement</h4>
          <p className="text-muted-foreground mb-2 leading-relaxed">
            Spatial accessibility measurement in healthcare has evolved from simple distance-based metrics to
            sophisticated models that account for multiple factors influencing access. Traditional approaches using
            Euclidean (straight-line) distance provide useful approximations but fail to capture the realities of road
            networks, topographic barriers, and transportation availability. More advanced methods incorporate travel
            time, facility capacity, population demand, and competing destinations to create realistic accessibility
            measures.
          </p>
          <div className="my-3 p-2 bg-muted rounded-md text-center">
            <img
              src="/lab2/healthcare-accessibility-scenarios.png"
              alt="Geospatial analysis showing healthcare accessibility under walking-only and motorized plus walking scenarios, illustrating population coverage and facility catchments."
              className="mx-auto rounded-md max-w-full h-auto"
            />
            <p className="text-xs text-muted-foreground mt-1 font-sans">
              Geospatial analysis showing healthcare accessibility under walking-only and motorized plus walking
              scenarios, illustrating population coverage and facility catchments.
            </p>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            The choice of distance threshold for accessibility analysis significantly impacts policy recommendations and
            resource allocation decisions. International guidelines suggest that 1-2 hours of travel time represents
            acceptable access to health services, though this varies by service level and urgency. For Uganda's context,
            where walking remains the primary mode of transportation for many rural residents, the 10-kilometer buffer
            used in this tutorial represents approximately 2-3 hours of walking time, aligning with WHO recommendations
            for basic health service access.
          </p>
        </div>
      </CardContent>
    </Card>

    {/* Section 2: Theoretical Foundations of Buffer Analysis and Spatial Queries */}
    <Card id="lab2-theory" className="mb-6 bg-card/80 scroll-mt-20">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <Layers className="mr-2 h-6 w-6 text-yellow-400" />
          2. Theoretical Foundations of Buffer Analysis and Spatial Queries
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-base">
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">2.1 Buffer Analysis in Health Geography</h4>
          <p className="text-muted-foreground mb-2 leading-relaxed">
            Buffer analysis represents one of the most fundamental techniques in health geography, creating zones of
            specified distance around geographic features to analyze spatial relationships and accessibility patterns.
            In healthcare applications, buffers around health facilities represent service catchment areas, helping
            identify populations within reasonable access distances and highlighting underserved areas requiring
            intervention. The technique assumes that people are more likely to access services within the buffer zone,
            though actual utilization patterns may vary based on factors including service quality, transportation
            availability, and cultural preferences.
          </p>
          <div className="my-3 p-2 bg-muted rounded-md text-center">
            <img
              src="/lab2/distance-decay-healthcare-use.png"
              alt="Healthcare utilization decreases exponentially with distance, supporting 10km buffer analysis"
              className="mx-auto rounded-md max-w-full h-auto"
            />
            <p className="text-xs text-muted-foreground mt-1 font-sans">
              Healthcare utilization decreases exponentially with distance, supporting 10km buffer analysis.
            </p>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            The distance decay effect, fundamental to understanding healthcare utilization patterns, demonstrates that
            healthcare use decreases exponentially with distance from facilities. This relationship justifies the use of
            buffer analysis and provides empirical support for distance-based accessibility thresholds. Research from
            sub-Saharan Africa consistently shows dramatic decreases in facility utilization beyond 5-10 kilometers,
            supporting the choice of 10-kilometer buffers for identifying adequately served populations.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">2.2 Spatial Query Theory and Applications</h4>
          <p className="text-muted-foreground mb-2 leading-relaxed">
            Spatial queries enable analysts to identify complex geographic relationships between different layers of
            spatial data, moving beyond simple visual analysis to quantitative assessment of accessibility patterns. The
            fundamental spatial relationships used in accessibility analysis include intersects (overlapping areas),
            contains (complete containment), and disjoint (no overlap), each providing different insights into access
            patterns. For healthcare accessibility, the "do not intersect" relationship identifies populations
            completely outside service catchment areas, representing the most underserved areas requiring immediate
            attention.
          </p>
          <div className="my-3 p-2 bg-muted rounded-md text-center">
            <img
              src="/lab2/qgis-spatial-query-interface.png"
              alt="QGIS spatial query interface demonstrating selection of regions that contain airports."
              className="mx-auto rounded-md max-w-full h-auto"
            />
            <p className="text-xs text-muted-foreground mt-1 font-sans">
              QGIS spatial query interface demonstrating selection of regions that contain airports.
            </p>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            The power of spatial queries lies in their ability to combine multiple criteria, enabling analysts to
            identify areas with compound disadvantages such as high disease burden and poor access. This analytical
            capability transforms simple mapping into sophisticated equity analysis, revealing hidden patterns of health
            inequality and guiding evidence-based intervention strategies.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">2.3 Coordinate Reference Systems for Uganda</h4>
          <p className="text-muted-foreground leading-relaxed">
            Accurate spatial analysis requires appropriate coordinate reference systems (CRS) that minimize distortion
            and enable precise distance measurements. For Uganda, several coordinate systems are commonly used, each
            with specific applications and advantages. The WGS 84 geographic coordinate system (EPSG:4326) provides
            global compatibility and GPS integration but lacks the metric properties necessary for accurate distance
            calculations.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            For analytical work requiring precise distance measurements, projected coordinate systems offer superior
            accuracy. UTM Zone 36N (EPSG:32636) provides excellent coverage for most of Uganda, offering meter-based
            measurements essential for buffer analysis and distance calculations. This coordinate system covers the area
            between 30°E and 36°E in the northern hemisphere, encompassing Uganda's entire territory with minimal
            distortion.
          </p>
        </div>
      </CardContent>
    </Card>

    {/* Section 3: Comprehensive Step-by-Step QGIS Tutorial */}
    <h2 id="lab2-tutorial" className="font-sans text-3xl font-bold mt-10 mb-6 text-center text-primary scroll-mt-20">
      3. Comprehensive Step-by-Step QGIS Tutorial
    </h2>

    <Card className="mb-6 bg-card/90">
      <CardHeader>
        <CardTitle className="font-sans flex items-center">
          <Settings className="mr-2 h-5 w-5 text-primary" />
          3.1 Project Setup and Initial Configuration
        </CardTitle>
      </CardHeader>
      <CardContent className="text-base">
        <h4 className="font-sans font-semibold text-xl mb-2">Step 1: Create and Configure Your QGIS Project</h4>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Begin by launching QGIS and creating a new project specifically for healthcare accessibility analysis.
          Navigate to Project → New to start fresh, then immediately save your project using Project → Save As with the
          filename "Uganda_Health_Facility_Access_Analysis.qgz". Choose a dedicated folder structure that will
          accommodate all project files, data inputs, and analytical outputs.
        </p>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Configure the project's coordinate reference system by accessing Project → Properties → CRS. Search for
          "32636" to locate WGS 84 / UTM Zone 36N and select this projection for accurate metric measurements throughout
          Uganda. Verify the CRS selection by checking the coordinate display in the bottom-right corner of the QGIS
          interface, which should now show coordinates in meters rather than decimal degrees.
        </p>

        <h4 className="font-sans font-semibold text-xl mt-4 mb-2">Step 2: Organize Your Data and Workspace</h4>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Effective spatial analysis requires well-organized data management and an optimized workspace. Create a folder
          structure within your project directory including subfolders for "Raw_Data," "Processed_Data," "Maps," and
          "Analysis_Results." This organization facilitates data management and ensures reproducible analysis workflows.
        </p>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Customize the QGIS interface for healthcare analysis by ensuring the Processing Toolbox is visible (View →
          Panels → Processing Toolbox) as this contains essential tools for spatial analysis. Also enable the Browser
          Panel to facilitate data navigation and the Layers Panel to manage multiple data layers effectively.
        </p>
      </CardContent>
    </Card>

    <Card className="mb-6 bg-card/90">
      <CardHeader>
        <CardTitle className="font-sans flex items-center">
          <Database className="mr-2 h-5 w-5 text-primary" />
          3.2 Loading and Converting Spatial Data
        </CardTitle>
      </CardHeader>
      <CardContent className="text-base">
        <h4 className="font-sans font-semibold text-xl mb-2">Step 3: Import Uganda District Boundaries</h4>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Load the foundational geographic framework by importing Uganda district boundaries, which will serve as the
          spatial units for accessibility analysis. Use Layer → Add Layer → Add Vector Layer to import the
          Uganda_districts.gpkg file, ensuring the layer loads correctly in the map canvas. These administrative
          boundaries provide the geographic framework for calculating population-level accessibility metrics and
          identifying districts requiring intervention.
        </p>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Examine the attribute table by right-clicking the districts layer and selecting "Open Attribute Table" to
          familiarize yourself with available fields. Key attributes should include district names, population data, and
          any existing health indicators that will be joined with accessibility metrics. Note the field containing
          district names as this will be crucial for data joining operations.
        </p>

        <h4 className="font-sans font-semibold text-xl mt-4 mb-2">
          Step 4: Convert Health Facility Coordinates to Spatial Data
        </h4>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Transform the health facility coordinate data from tabular format to spatial points using QGIS's delimited
          text import functionality. Navigate to Layer → Add Layer → Add Delimited Text Layer and select the
          health_facilities_uganda.csv file. Configure the import settings carefully: set File format to "CSV," identify
          the X field as "Longitude" and Y field as "Latitude," and set the Geometry CRS to EPSG:4326 (WGS 84) since the
          coordinates are in decimal degrees.
        </p>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Click "Add" to create the temporary point layer, then immediately convert it to a permanent shapefile to
          ensure data persistence. Right-click the temporary layer, select Export → Save Features As, choose ESRI
          Shapefile format, and save as "health_facilities_uganda.shp" with CRS set to EPSG:32636 for consistency with
          your project. Remove the temporary CSV layer and work exclusively with the permanent shapefile for all
          subsequent analysis.
        </p>

        <h4 className="font-sans font-semibold text-xl mt-4 mb-2">Step 5: Import and Join Health Indicator Data</h4>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Import additional health data that will be used for compound analysis of access and health outcomes. Use Layer
          → Add Layer → Add Delimited Text Layer to import malaria_prevalence_uganda.csv, selecting "No geometry
          (attribute table only)" since this contains only statistical data without coordinates.
        </p>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Create a table join to combine district boundaries with health indicator data, enabling analysis that
          considers both accessibility and health outcomes. Right-click the districts layer, select Properties → Joins,
          and click the "+" button to add a new join. Configure the join by setting Join layer to the malaria prevalence
          data, selecting appropriate field names for both Join field and Target field (typically district names), and
          enabling the join.
        </p>
      </CardContent>
    </Card>

    <Card className="mb-6 bg-card/90">
      <CardHeader>
        <CardTitle className="font-sans flex items-center">
          <Eye className="mr-2 h-5 w-5 text-primary" />
          3.3 Visualizing Health Facility Distribution
        </CardTitle>
      </CardHeader>
      <CardContent className="text-base">
        <h4 className="font-sans font-semibold text-xl mb-2">Step 6: Create Effective Point Symbology</h4>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Develop clear visualization of health facility locations using appropriate symbology that communicates
          facility types and service levels. Right-click the health facilities layer and select Properties → Symbology
          to access styling options. Choose "Categorized" symbology and set the Value to "Facility_Type" to create
          distinct symbols for different facility levels.
        </p>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Configure symbols that effectively communicate the healthcare hierarchy: use large red crosses for District
          Hospitals, medium blue plus signs for Health Centre IV, smaller green circles for Health Centre III, and small
          orange dots for Health Centre II. Ensure symbol sizes are large enough for clear visibility (3-5 mm) while
          maintaining map clarity and avoiding overlap in dense areas.
        </p>

        <h4 className="font-sans font-semibold text-xl mt-4 mb-2">Step 7: Assess Initial Spatial Patterns</h4>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Before conducting formal analysis, visually assess the spatial distribution of health facilities to identify
          obvious patterns and potential accessibility gaps. Look for clustering around urban centers, sparse coverage
          in rural areas, and geographic barriers that might influence access patterns. This preliminary assessment
          provides context for subsequent quantitative analysis and helps identify areas of particular concern.
        </p>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Use the map canvas navigation tools to systematically examine different regions of Uganda, noting the
          relationship between facility distribution and population centers. Areas with obvious gaps in facility
          coverage or regions where facilities appear clustered while large areas remain unserved should be noted for
          particular attention in the accessibility analysis.
        </p>
      </CardContent>
    </Card>

    <Card className="mb-6 bg-card/90">
      <CardHeader>
        <CardTitle className="font-sans flex items-center">
          <Layers className="mr-2 h-5 w-5 text-primary" />
          3.4 Performing Buffer Analysis
        </CardTitle>
      </CardHeader>
      <CardContent className="text-base">
        <h4 className="font-sans font-semibold text-xl mb-2">Step 8: Create Service Catchment Buffers</h4>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Generate 10-kilometer buffer zones around each health facility to represent reasonable access distances for
          the Ugandan context. Access the buffer tool through Vector → Geoprocessing Tools → Buffer, and configure the
          analysis parameters carefully. Set the Input layer to your health facilities shapefile, specify Distance as
          10,000 meters (10 km), and maintain 20 segments for smooth circular buffers.
        </p>
        <div className="my-3 p-2 bg-muted rounded-md text-center">
          <img
            src="/lab2/gis-map-injury-playground-buffers.png"
            alt="GIS map displaying injury locations and various playground buffer zones in a city."
            className="mx-auto rounded-md max-w-full h-auto"
          />
          <p className="text-xs text-muted-foreground mt-1 font-sans">
            GIS map displaying injury locations and various playground buffer zones in a city.
          </p>
        </div>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Save the output as "facility_buffers_10km.shp" in your processed data folder for future reference. The
          resulting buffer zones represent areas within reasonable walking distance of health facilities, accounting for
          the reality that most rural Ugandans rely on walking for transportation. The 10-kilometer distance represents
          approximately 2-3 hours of walking time, aligning with international recommendations for basic health service
          access.
        </p>

        <h4 className="font-sans font-semibold text-xl mt-4 mb-2">Step 9: Analyze Buffer Coverage Patterns</h4>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Examine the resulting buffer pattern to understand spatial coverage and identify areas with overlapping
          service areas versus gaps in coverage. Areas with multiple overlapping buffers indicate well-served
          populations with choice of facilities, while gaps between buffers reveal underserved areas requiring
          attention. Use different colors for the buffer symbology (transparent fill with distinct outline) to clearly
          visualize overlapping areas.
        </p>
        <div className="my-3 p-2 bg-muted rounded-md text-center">
          <img
            src="/lab2/gis-map-covid-referral-hospitals.png"
            alt="GIS map illustrating distance-based service areas and origin-destination connections for COVID-19 referral hospitals."
            className="mx-auto rounded-md max-w-full h-auto"
          />
          <p className="text-xs text-muted-foreground mt-1 font-sans">
            GIS map illustrating distance-based service areas and origin-destination connections for COVID-19 referral
            hospitals.
          </p>
        </div>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Calculate basic coverage statistics by examining the total area covered by buffers relative to Uganda's total
          area, providing a preliminary metric of national accessibility. Areas of particular concern include border
          regions, mountainous areas, and sparsely populated regions where geographic barriers compound distance
          challenges.
        </p>
      </CardContent>
    </Card>

    <Card className="mb-6 bg-card/90">
      <CardHeader>
        <CardTitle className="font-sans flex items-center">
          <Filter className="mr-2 h-5 w-5 text-primary" />
          3.5 Conducting Spatial Query Analysis
        </CardTitle>
      </CardHeader>
      <CardContent className="text-base">
        <h4 className="font-sans font-semibold text-xl mb-2">Step 10: Identify Underserved Districts</h4>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Use spatial queries to systematically identify districts with inadequate facility coverage. Navigate to Vector
          → Research Tools → Select by Location to access the spatial query interface. Configure the query to "Select
          features from" the Uganda districts layer "where the features" "do not intersect" "by comparing to the
          features from" the facility buffers layer.
        </p>
        <div className="my-3 p-2 bg-muted rounded-md text-center">
          <img
            src="/lab2/qgis-extract-by-location-tool.png"
            alt="QGIS interface with the Extract by location tool highlighted in the Processing Toolbox for spatial queries."
            className="mx-auto rounded-md max-w-full h-auto"
          />
          <p className="text-xs text-muted-foreground mt-1 font-sans">
            QGIS interface with the "Extract by location" tool highlighted in the Processing Toolbox for spatial
            queries.
          </p>
        </div>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          This query identifies districts that have no overlap with any facility buffer zones, indicating areas
          completely outside the 10-kilometer service areas of all health facilities. These districts represent the most
          underserved areas from a spatial accessibility perspective and should receive priority for health system
          strengthening interventions.
        </p>

        <h4 className="font-sans font-semibold text-xl mt-4 mb-2">Step 11: Combine Spatial and Attribute Queries</h4>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Enhance the analysis by combining spatial accessibility criteria with health outcome indicators to identify
          areas with compound disadvantages. With districts still selected from the previous spatial query, access the
          attribute table and use the "Select by Expression" tool to further refine the selection.
        </p>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Create an expression to identify districts with both poor access and high disease burden:
          "Malaria_Prevalence_Percent" {">"} 20 AND current selection. Set the selection mode to "Intersect current
          selection" to find districts meeting both criteria. This identifies areas with the greatest need for
          intervention, combining high disease burden with poor facility access.
        </p>

        <h4 className="font-sans font-semibold text-xl mt-4 mb-2">Step 12: Export and Save Analysis Results</h4>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Save the results of your compound analysis for further use and reporting. Right-click the districts layer and
          select Export → Save Selected Features As to create a new layer containing only the high-priority districts.
          Save as "high_priority_districts.gpkg" to preserve all attribute information for subsequent analysis and
          reporting.
        </p>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          This layer represents districts requiring immediate attention for health system strengthening, combining
          evidence of both accessibility gaps and health needs. These results form the foundation for evidence-based
          policy recommendations and resource allocation decisions.
        </p>
      </CardContent>
    </Card>

    <Card className="mb-6 bg-card/90">
      <CardHeader>
        <CardTitle className="font-sans flex items-center">
          <LayoutDashboard className="mr-2 h-5 w-5 text-primary" />
          3.6 Creating Professional Map Layouts
        </CardTitle>
      </CardHeader>
      <CardContent className="text-base">
        <h4 className="font-sans font-semibold text-xl mb-2">Step 13: Design Comprehensive Map Layout</h4>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Transform your analytical results into professional presentation materials using QGIS's print layout
          functionality. Create a new print layout (Project → New Print Layout) named "Health Facility Access Analysis"
          and configure the page orientation and size appropriate for your intended use.
        </p>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Add the main map frame by clicking Add Item → Add Map and drawing a rectangle covering most of the layout
          area. Configure the map extent to show all of Uganda with appropriate margins, ensuring all analytical results
          are clearly visible. Lock the map extent to prevent accidental changes during layout refinement.
        </p>

        <h4 className="font-sans font-semibold text-xl mt-4 mb-2">Step 14: Add Essential Cartographic Elements</h4>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Create a professional map by including all essential cartographic elements that enable proper interpretation.
          Add a clear, descriptive title such as "Health Facility Access Analysis: Identifying Underserved Districts in
          Uganda" using Add Item → Add Label. Position the title prominently at the top of the layout with appropriate
          font size and styling.
        </p>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Include a comprehensive legend explaining all map symbols: facility types, buffer zones, and district
          classification. Use Add Item → Add Legend and customize to show only relevant layers with clear, descriptive
          labels. Add a north arrow (Add Item → Add North Arrow) and scale bar (Add Item → Add Scale Bar) to provide
          geographic orientation and scale reference.
        </p>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Add data source information and map creation details at the bottom of the layout, including coordinate system
          used, data sources, analysis date, and creator information. This metadata ensures transparency and enables
          others to reproduce or verify your analysis.
        </p>
      </CardContent>
    </Card>

    <Card className="mb-6 bg-card/90">
      <CardHeader>
        <CardTitle className="font-sans flex items-center">
          <Share2 className="mr-2 h-5 w-5 text-primary" />
          3.7 Exporting and Sharing Results
        </CardTitle>
      </CardHeader>
      <CardContent className="text-base">
        <h4 className="font-sans font-semibold text-xl mb-2">Step 15: Export High-Quality Maps</h4>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Generate final map products suitable for various uses by configuring appropriate export settings. For printed
          materials, export as PDF using Layout → Export as PDF with high resolution (300 dpi) to ensure crisp text and
          clear symbol definition. For digital presentations, export as PNG using Layout → Export as Image with moderate
          resolution (150-200 dpi) for optimal file size and display quality.
        </p>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Consider creating multiple versions of your map for different audiences: a detailed technical version for
          health planners and a simplified version for community stakeholders and policymakers. Each version should
          maintain analytical integrity while adapting visual complexity to audience needs and technical literacy.
        </p>
      </CardContent>
    </Card>

    {/* Section 4: Advanced Analysis and Interpretation */}
    <Card id="lab2-advanced-analysis" className="mb-6 bg-card/80 scroll-mt-20">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <BarChart3 className="mr-2 h-6 w-6 text-purple-400" />
          4. Advanced Analysis and Interpretation
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-base">
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">
            4.1 Understanding Accessibility Patterns and Health Equity
          </h4>
          <p className="text-muted-foreground mb-2 leading-relaxed">
            The spatial analysis reveals critical patterns of healthcare accessibility that directly impact health
            equity and population health outcomes. Districts identified through the compound spatial and attribute query
            represent areas experiencing a "double burden" of high disease prevalence and poor spatial access to care.
            These patterns reflect broader inequities in health system development, infrastructure investment, and
            resource allocation that perpetuate health disparities.
          </p>
          <div className="my-3 p-2 bg-muted rounded-md text-center">
            <img
              src="/lab2/healthcare-vs-malaria-uganda.png"
              alt="Healthcare accessibility strongly correlates with health outcomes in Uganda districts"
              className="mx-auto rounded-md max-w-full h-auto"
            />
            <p className="text-xs text-muted-foreground mt-1 font-sans">
              Healthcare accessibility strongly correlates with health outcomes in Uganda districts.
            </p>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            The strong negative correlation between healthcare accessibility and malaria prevalence demonstrates the
            public health significance of spatial access patterns. Areas with better facility coverage consistently show
            lower malaria prevalence, supporting the hypothesis that improved access enables earlier treatment, reduces
            transmission, and improves overall health outcomes. This relationship provides compelling evidence for
            targeted health system strengthening in underserved areas.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">
            4.2 District-Level Access Patterns and Urban-Rural Disparities
          </h4>
          <p className="text-muted-foreground mb-2 leading-relaxed">
            Analysis of facility access by district type reveals stark disparities that mirror broader patterns of
            urban-rural inequality in Uganda. Urban districts demonstrate significantly higher facility density and
            better population coverage, reflecting historical patterns of health infrastructure development and ongoing
            urban bias in health investment.
          </p>
          <div className="my-3 p-2 bg-muted rounded-md text-center">
            <img
              src="/lab2/avg-health-facility-access-by-district.png"
              alt="Urban districts have significantly better healthcare facility access than rural areas in Uganda"
              className="mx-auto rounded-md max-w-full h-auto"
            />
            <p className="text-xs text-muted-foreground mt-1 font-sans">
              Urban districts have significantly better healthcare facility access than rural areas in Uganda.
            </p>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Semi-urban districts show intermediate access levels, often benefiting from proximity to urban centers while
            still facing infrastructure challenges. Rural districts demonstrate the greatest accessibility challenges,
            with limited facility coverage and large populations living beyond reasonable access distances. These
            patterns contribute to rural-urban health disparities and highlight the need for targeted rural health
            strategies.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">4.3 Population-Level Accessibility Metrics</h4>
          <p className="text-muted-foreground leading-relaxed">
            Detailed analysis of population distribution relative to health facilities reveals the scale of
            accessibility challenges facing Uganda's health system. The majority of rural populations live more than
            optimal distances from health facilities, creating barriers to timely care and contributing to preventable
            morbidity and mortality.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The distance decay effect in healthcare utilization provides strong empirical justification for
            accessibility improvement interventions. Areas where significant populations live beyond 10-15 kilometers
            from facilities experience dramatically reduced healthcare utilization, supporting the need for additional
            facilities or alternative service delivery approaches.
          </p>
        </div>
      </CardContent>
    </Card>

    {/* Section 5: Policy Implications and Public Health Applications */}
    <Card id="lab2-policy" className="mb-6 bg-card/80 scroll-mt-20">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <ShieldCheck className="mr-2 h-6 w-6 text-green-400" />
          5. Policy Implications and Public Health Applications
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-base">
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">5.1 Evidence-Based Health System Planning</h4>
          <p className="text-muted-foreground leading-relaxed">
            The accessibility analysis provides robust evidence for health system planning decisions, including facility
            location planning, resource allocation, and service delivery optimization. Districts identified as having
            poor access and high disease burden represent clear priorities for health infrastructure investment and
            should receive preferential consideration for new facility construction or mobile health programs.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The analysis also reveals opportunities for service delivery optimization in areas with overlapping
            catchment areas, where resources might be redistributed to extend coverage to underserved populations.
            Mobile health services, community health worker programs, and telemedicine initiatives offer potential
            solutions for addressing accessibility gaps without requiring major infrastructure investment.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">5.2 Health Equity and Social Justice Applications</h4>
          <p className="text-muted-foreground leading-relaxed">
            Spatial accessibility analysis serves as a powerful tool for advancing health equity by quantifying
            disparities and providing evidence for targeted interventions. The compound analysis of access and health
            outcomes reveals areas where geographic inequities intersect with health burden, creating priority areas for
            equity-focused interventions.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Results from this analysis can inform advocacy efforts for health equity, provide evidence for resource
            allocation decisions, and support community mobilization around health access issues. The visual nature of
            spatial analysis makes complex equity patterns accessible to diverse stakeholders, from policymakers to
            community leaders.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">5.3 Integration with Health System Strengthening</h4>
          <p className="text-muted-foreground leading-relaxed">
            The analytical framework developed in this tutorial can be adapted and extended to support comprehensive
            health system strengthening efforts. By incorporating additional health indicators, service quality
            measures, and population vulnerability data, the analysis can provide increasingly sophisticated guidance
            for health system improvement.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Regular repetition of this analysis enables monitoring of progress in addressing accessibility gaps and
            evaluation of health system interventions. As new facilities are constructed or existing services are
            expanded, updated accessibility analysis can quantify improvements and identify remaining gaps requiring
            attention.
          </p>
        </div>
      </CardContent>
    </Card>

    {/* Section 6: Methodological Considerations and Limitations */}
    <Card id="lab2-methodology" className="mb-6 bg-card/80 scroll-mt-20">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <AlertTriangle className="mr-2 h-6 w-6 text-orange-400" />
          6. Methodological Considerations and Limitations
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-base">
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">6.1 Analytical Assumptions and Limitations</h4>
          <p className="text-muted-foreground leading-relaxed">
            The buffer analysis approach employed in this tutorial makes several simplifying assumptions that users
            should understand when interpreting results. The use of Euclidean distance assumes straight-line travel,
            which may not reflect actual travel routes constrained by road networks, topography, or seasonal barriers.
            In Uganda's context, where road infrastructure varies significantly and seasonal factors affect
            accessibility, these assumptions may underestimate actual travel times and distances.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The 10-kilometer buffer threshold, while based on international recommendations and local context,
            represents an approximation of reasonable access distance. Actual willingness to travel for healthcare
            varies by individual factors, health condition severity, and service quality perceptions. Some populations
            may travel much further for specialized care, while others may consider smaller distances prohibitive for
            routine services.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">6.2 Data Quality and Availability Considerations</h4>
          <p className="text-muted-foreground leading-relaxed">
            The accuracy of accessibility analysis depends heavily on the quality and completeness of input data. Health
            facility location data may not capture all service delivery points, particularly private facilities,
            faith-based organizations, or informal care providers that serve significant portions of the population.
            Similarly, facility service level classifications may not reflect actual service availability, which can
            vary due to staffing, supply, or infrastructure constraints.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Population data used for accessibility calculations may not reflect current demographic patterns,
            particularly in areas experiencing rapid urbanization, displacement, or migration. Regular updates to both
            facility and population data are essential for maintaining analytical accuracy and policy relevance.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">6.3 Extensions and Future Enhancements</h4>
          <p className="text-muted-foreground leading-relaxed">
            The analytical framework presented here provides a foundation for more sophisticated accessibility analysis.
            Network analysis using actual road data would provide more realistic travel time estimates and enable
            consideration of transportation mode differences. Integration of elevation data could account for
            topographic barriers that significantly affect travel times in mountainous regions.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Temporal analysis incorporating seasonal factors, facility operating hours, and service availability would
            provide more nuanced understanding of accessibility patterns. Population-weighted analysis considering
            demographic characteristics and health needs would enable more targeted intervention planning and resource
            allocation.
          </p>
        </div>
      </CardContent>
    </Card>

    {/* Section 7: Conclusion and Professional Development */}
    <Card id="lab2-conclusion" className="mb-6 bg-card/80 scroll-mt-20">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <GraduationCap className="mr-2 h-6 w-6 text-teal-400" />
          7. Conclusion and Professional Development
        </CardTitle>
      </CardHeader>
      <CardContent className="text-base">
        <p className="text-muted-foreground mb-2 leading-relaxed">
          This comprehensive tutorial demonstrates the power of GIS-based spatial analysis for understanding and
          addressing healthcare accessibility challenges in Uganda and similar contexts. The skills developed through
          this tutorial—from basic data management to sophisticated spatial analysis and professional mapping—are
          directly applicable to public health practice, health system planning, and health equity research.
        </p>
        <p className="text-muted-foreground mb-2 leading-relaxed">
          The analytical approach combines technical GIS skills with public health knowledge to generate actionable
          intelligence for health system improvement. By quantifying accessibility patterns and identifying priority
          areas for intervention, this analysis contributes to evidence-based health policy and supports efforts to
          achieve universal health coverage and health equity.
        </p>
        <p className="text-muted-foreground mb-2 leading-relaxed">
          Future applications of these skills might include analysis of other health services (maternal care,
          immunization, chronic disease management), integration with health outcome data for impact evaluation, or
          development of predictive models for health facility planning. The foundational spatial analysis concepts
          learned here provide a platform for increasingly sophisticated health geography applications throughout your
          professional career.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          The integration of spatial analysis with public health practice represents a growing field with significant
          potential for impact. As health systems worldwide grapple with challenges of equity, efficiency, and
          effectiveness, spatial analysis provides essential tools for understanding complex geographic patterns and
          developing targeted solutions that can improve health outcomes for all populations.
        </p>
      </CardContent>
    </Card>
    <hr className="my-8 border-dashed" />
  </div>
)

// Content for Lab 3 (Environmental Risk Mapping - GEE)
const lab3Content = (
  <div className="font-serif text-lg space-y-6">
    {/* ... Lab 3 content from previous steps ... */}
    <p className="text-base leading-relaxed">
      This comprehensive tutorial builds upon cutting-edge remote sensing technologies and cloud-based geospatial
      analysis to address one of the most pressing public health challenges in Uganda and sub-Saharan Africa. By
      leveraging Google Earth Engine's planetary-scale computing capabilities with MODIS vegetation indices and CHIRPS
      precipitation data, this tutorial transforms complex environmental monitoring into actionable intelligence for
      malaria control programs. The integration of satellite-derived environmental indicators with epidemiological
      understanding provides unprecedented opportunities for predictive modeling, early warning systems, and
      evidence-based intervention targeting that can significantly improve public health outcomes in
      resource-constrained settings.
    </p>

    {/* Section 1: Introduction to Environmental Epidemiology and Remote Sensing Applications */}
    <Card id="lab3-introduction" className="mb-6 bg-card/80 scroll-mt-20">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <TestTube className="mr-2 h-6 w-6 text-primary" />
          1. Introduction to Environmental Epidemiology and Remote Sensing Applications
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-base">
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">
            1.1 The Environmental Determinants of Malaria Transmission
          </h4>
          <p className="text-muted-foreground mb-2 leading-relaxed">
            Malaria transmission represents a complex interaction between environmental conditions, vector ecology, and
            human populations that creates distinct spatial and temporal patterns of disease risk. The relationship
            between climate-based factors, particularly temperature and precipitation, and malaria transmission has been
            extensively documented, with these environmental determinants serving as primary constraints on the
            geographical suitability for malaria transmission. Temperature impacts both vector and parasite development,
            with recent models indicating that malaria transmission is constrained to temperatures between 16°C and
            34°C, with optimal transmission occurring at approximately 25°C.
          </p>
          <div className="my-3 p-2 bg-muted rounded-md text-center">
            <img
              src="/lab3/malaria-life-cycle.png"
              alt="Diagram illustrating the malaria parasite's life cycle in mosquito and human hosts, alongside potential vaccine strategies targeting various stages."
              className="mx-auto rounded-md max-w-full h-auto"
            />
            <p className="text-xs text-muted-foreground mt-1 font-sans">
              Malaria parasite's life cycle and vaccine strategies.
            </p>
          </div>
          <p className="text-muted-foreground mb-2 leading-relaxed">
            Precipitation patterns contribute fundamentally to malaria transmission dynamics through their influence on
            mosquito breeding habitat availability and quality. The frequency, duration, and intensity of precipitation
            events create suitable aquatic habitats for mosquito development, though the relationship between rainfall
            and malaria transmission often produces complex and sometimes contradictory results depending on local
            ecological conditions. Moderate to heavy rainfall events can synchronize mosquito population activity by
            increasing near-surface humidity levels and stimulating resting gravid mosquitoes to seek new hosts for
            blood feeding.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Environmental factors beyond climate also play crucial roles in determining malaria transmission patterns.
            Local hydrography, hydrology, and topography affect water flow and collection patterns, influencing the
            formation of water pools suitable for mosquito breeding. The presence of natural predators, humidity levels
            affecting mosquito survival, and natural disasters that create population displacement and habitat changes
            all contribute to the complex environmental epidemiology of malaria transmission.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">
            1.2 The Revolution of Remote Sensing in Public Health
          </h4>
          <p className="text-muted-foreground mb-2 leading-relaxed">
            Remote sensing technology has fundamentally transformed our ability to monitor and understand environmental
            determinants of disease transmission at scales ranging from local to global. The utilization of remote
            sensing-driven climatic and environmental variables has become essential for determining malaria
            transmission patterns in sub-Saharan Africa, providing researchers and public health practitioners with
            unprecedented access to spatially and temporally consistent environmental data. This technological
            revolution enables the assessment of environmental conditions across vast geographic areas without the need
            for extensive ground-based monitoring networks, which are often impractical or impossible to maintain in
            resource-limited settings.
          </p>
          <div className="my-3 p-2 bg-muted rounded-md text-center">
            <img
              src="/lab3/africa-rainfall-distribution.png"
              alt="Map of Africa showing rainfall distribution in millimeters, with higher precipitation observed in Central and West African countries."
              className="mx-auto rounded-md max-w-full h-auto"
            />
            <p className="text-xs text-muted-foreground mt-1 font-sans">Rainfall distribution in Africa.</p>
          </div>
          <p className="text-muted-foreground mb-2 leading-relaxed">
            The emergence of satellite-based remote sensing has provided a wide array of environmental variables at
            different spatial and temporal scales, creating new opportunities to enhance our understanding of the
            associations between malaria disease patterns and various environmental and climatic variables. Remote
            sensing applications in vector-borne disease monitoring have expanded dramatically, enabling the
            identification of environmental conditions that influence disease vectors and transmission patterns while
            supporting the development of surveillance, prevention, and control strategies.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Satellite observations offer unique advantages for malaria surveillance including the ability to monitor
            environmental changes in real-time, track seasonal patterns that influence transmission dynamics, and
            identify areas with optimal conditions for mosquito breeding and survival. The integration of multiple
            satellite data sources enables comprehensive environmental monitoring that can support predictive modeling
            efforts and early warning systems for malaria outbreaks.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">
            1.3 Google Earth Engine: Democratizing Planetary-Scale Analysis
          </h4>
          <p className="text-muted-foreground mb-2 leading-relaxed">
            Google Earth Engine represents a paradigm shift in geospatial analysis by combining a multi-petabyte catalog
            of satellite imagery and geospatial datasets with planetary-scale computational capabilities. This
            cloud-based platform democratizes access to advanced remote sensing analysis by eliminating the traditional
            barriers of data acquisition, storage, and computational resources that have historically limited the
            application of satellite data in public health research.
          </p>
          <p className="text-muted-foreground mb-2 leading-relaxed">
            The platform's key features include massive data repositories containing over thirty years of historical
            imagery and scientific datasets, cloud-based processing power that leverages Google's computational
            infrastructure, and scalability that enables analysis from local to global scales. The integrated
            development environment supports both JavaScript and Python programming languages, making advanced
            geospatial analysis accessible to researchers with varying technical backgrounds.
          </p>
          <div className="my-3 p-2 bg-muted rounded-md text-center">
            <img
              src="/lab3/modis-chirps-comparison.png"
              alt="Comparison of MODIS NDVI and CHIRPS datasets for malaria environmental risk mapping"
              className="mx-auto rounded-md max-w-full h-auto"
            />
            <p className="text-xs text-muted-foreground mt-1 font-sans">
              Comparison of MODIS NDVI and CHIRPS datasets.
            </p>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            For malaria environmental risk assessment, Google Earth Engine provides seamless access to critical datasets
            including MODIS vegetation indices for monitoring habitat conditions and CHIRPS precipitation data for
            tracking rainfall patterns that influence mosquito breeding. The platform's ability to process these
            datasets at scale enables researchers to conduct comprehensive environmental risk assessments across entire
            countries or regions without requiring local computational infrastructure.
          </p>
        </div>
      </CardContent>
    </Card>

    {/* Section 2: Theoretical Foundations of Environmental Risk Assessment */}
    <Card id="lab3-theory" className="mb-6 bg-card/80 scroll-mt-20">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <Sigma className="mr-2 h-6 w-6 text-yellow-400" />
          2. Theoretical Foundations of Environmental Risk Assessment
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-base">
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">
            2.1 Understanding Vegetation Indices and Mosquito Ecology
          </h4>
          <p className="text-muted-foreground mb-2 leading-relaxed">
            The Normalized Difference Vegetation Index (NDVI) serves as a critical indicator of environmental conditions
            that influence malaria transmission through its relationship with mosquito vector ecology. NDVI measures
            vegetation health and density using the relationship between near-infrared and red light reflectance,
            providing insights into habitat conditions that affect mosquito survival, reproduction, and host-seeking
            behavior. Research has demonstrated that remote sensing NDVI maintains close correlations with Anopheles
            density and can serve as a sensitive evaluation index for both mosquito populations and malaria incidence
            rates.
          </p>
          <div className="my-3 p-2 bg-muted rounded-md text-center">
            <img
              src="/lab3/ndvi-map-hotspots.png"
              alt="NDVI map displaying varying vegetation density across a landscape, with dark green indicating high density and red squares marking potential hot spots."
              className="mx-auto rounded-md max-w-full h-auto"
            />
            <p className="text-xs text-muted-foreground mt-1 font-sans">NDVI map with potential hot spots.</p>
          </div>
          <p className="text-muted-foreground mb-2 leading-relaxed">
            Vegetation factors influence malaria transmission through multiple pathways including humidity maintenance,
            temperature regulation, provision of resting sites, and creation of breeding habitats. Dense vegetation
            maintains high humidity levels that are favorable for adult mosquito survival, while also providing optimal
            temperature zones for parasite development within the mosquito vector. The relationship between NDVI and
            malaria risk follows a generally positive correlation, with areas of higher vegetation density typically
            supporting larger and more stable mosquito populations.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The interpretation of NDVI values for malaria risk assessment requires understanding of the ecological
            thresholds that define suitable habitat conditions. Areas with NDVI values greater than 0.6 typically
            indicate dense vegetation that creates high humidity environments optimal for mosquito habitat, while
            moderate NDVI values between 0.3 and 0.6 suggest suitable conditions for some vector species. Areas with
            NDVI values below 0.3 generally represent sparse vegetation that is less suitable for mosquito survival and
            reproduction.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">
            2.2 Precipitation Patterns and Breeding Site Dynamics
          </h4>
          <p className="text-muted-foreground mb-2 leading-relaxed">
            Precipitation serves as the primary environmental driver of mosquito breeding site availability and quality,
            with rainfall patterns directly influencing the temporal and spatial dynamics of malaria transmission. The
            Climate Hazards Group Infrared Precipitation with Stations (CHIRPS) dataset provides high-resolution
            precipitation estimates that enable detailed analysis of rainfall patterns relevant to mosquito ecology and
            malaria transmission.
          </p>
          <div className="my-3 p-2 bg-muted rounded-md text-center">
            <img
              src="/lab3/seasonal-rainfall-anomaly-africa.png"
              alt="Map showing seasonal rainfall accumulation anomaly across Africa from October 2024 to May 2025, based on CHIRPS data."
              className="mx-auto rounded-md max-w-full h-auto"
            />
            <p className="text-xs text-muted-foreground mt-1 font-sans">
              Seasonal rainfall accumulation anomaly in Africa.
            </p>
          </div>
          <p className="text-muted-foreground mb-2 leading-relaxed">
            The relationship between precipitation and malaria transmission operates through multiple mechanisms
            including the creation of temporary water bodies for mosquito breeding, seasonal patterns that drive
            transmission cycles, and the provision of fresh water conditions optimal for larval development. However,
            the relationship between rainfall and malaria transmission is complex, with both insufficient and excessive
            precipitation potentially limiting transmission through different mechanisms.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Rainfall risk interpretation for malaria assessment considers both total precipitation amounts and temporal
            patterns. Areas receiving more than 1200mm of annual rainfall typically provide abundant breeding sites that
            support extended transmission seasons, while moderate rainfall between 600-1200mm creates seasonal breeding
            sites with intermittent transmission patterns. Areas with less than 600mm of annual rainfall generally
            experience limited water sources that are unsuitable for most vector species.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">
            2.3 Environmental Risk Integration and Assessment Methods
          </h4>
          <p className="text-muted-foreground mb-2 leading-relaxed">
            The integration of multiple environmental variables into comprehensive risk assessments requires
            sophisticated analytical approaches that account for the complex interactions between different
            environmental factors. The combination of vegetation indices and precipitation data provides a foundation
            for environmental risk assessment, but the relationship between these variables and malaria transmission
            varies significantly based on local ecological conditions and vector species characteristics.
          </p>
          <div className="my-3 p-2 bg-muted rounded-md text-center">
            <img
              src="/lab3/malaria-risk-matrix.png"
              alt="Environmental Risk Matrix for Malaria Transmission Based on NDVI and Rainfall Patterns"
              className="mx-auto rounded-md max-w-full h-auto"
            />
            <p className="text-xs text-muted-foreground mt-1 font-sans">
              Environmental Risk Matrix for Malaria Transmission.
            </p>
          </div>
          <p className="text-muted-foreground mb-2 leading-relaxed">
            Environmental risk assessment methodologies must account for seasonal variations in transmission risk, with
            different combinations of NDVI and rainfall values creating varying levels of malaria transmission
            potential. The development of risk matrices that combine environmental variables enables the classification
            of areas into different risk categories, supporting targeted intervention strategies and resource allocation
            decisions.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The application of environmental risk assessment requires consideration of local factors that may modify the
            relationship between environmental conditions and malaria transmission, including vector control
            interventions, housing quality, population immunity levels, and healthcare access. These factors can
            significantly alter the expected relationship between environmental suitability and actual malaria
            incidence, emphasizing the importance of integrating environmental risk assessment with comprehensive
            epidemiological surveillance systems.
          </p>
        </div>
      </CardContent>
    </Card>

    {/* Section 3: Comprehensive Google Earth Engine Tutorial */}
    <h2 id="lab3-tutorial" className="font-sans text-3xl font-bold mt-10 mb-6 text-center text-primary scroll-mt-20">
      3. Comprehensive Google Earth Engine Tutorial
    </h2>
    <Card className="mb-6 bg-card/90">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <Cloud className="mr-2 h-6 w-6 text-blue-400" /> 3.1 Platform Orientation and Account Setup
        </CardTitle>
      </CardHeader>
      <CardContent className="text-base">
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Google Earth Engine requires user registration and project setup before accessing the platform's analytical
          capabilities. The registration process involves selecting project purposes (commercial or noncommercial),
          creating or selecting Google Cloud projects, and confirming project information. For academic and research
          applications, Google Earth Engine remains freely available, while commercial applications require licensing
          through Google Cloud.
        </p>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Access to the Google Earth Engine Code Editor begins by navigating to code.earthengine.google.com, where users
          encounter a web-based interactive development environment designed for geospatial analysis. The Code Editor
          interface consists of several key components including the script repository for code management, the map
          display for visualization, the console for output inspection, and the tasks panel for managing export
          operations.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          The Code Editor environment supports JavaScript programming with extensive documentation and tutorial
          resources available through the platform. Users new to JavaScript programming can leverage the platform's
          autocompletion features and extensive example repository to develop proficiency in Earth Engine API usage. The
          platform's design philosophy emphasizes accessibility, enabling researchers with limited programming
          experience to conduct sophisticated geospatial analyses.
        </p>
      </CardContent>
    </Card>
    <Card className="mb-6 bg-card/90">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <FileText className="mr-2 h-6 w-6 text-green-400" /> 3.2 Data Access and Collection Overview
        </CardTitle>
      </CardHeader>
      <CardContent className="text-base">
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Google Earth Engine's data catalog contains over 900 geospatial datasets spanning more than 40 years of
          satellite observations and environmental measurements. For malaria environmental risk assessment, the platform
          provides access to critical datasets including the MODIS Vegetation Indices (MOD13Q1) collection and the
          CHIRPS precipitation dataset. These datasets offer complementary environmental information necessary for
          comprehensive risk assessment activities.
        </p>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          The MODIS MOD13Q1 product provides vegetation indices at 250-meter spatial resolution with 16-day temporal
          compositing, enabling detailed monitoring of vegetation conditions that influence mosquito habitat quality.
          The dataset includes both Normalized Difference Vegetation Index (NDVI) and Enhanced Vegetation Index (EVI)
          products, along with quality assessment layers that enable users to identify and filter low-quality
          observations.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          CHIRPS precipitation data offers daily rainfall estimates at 5-kilometer spatial resolution covering the
          period from 1981 to near real-time. The dataset builds on infrared Cold Cloud Duration observations combined
          with station data to provide accurate precipitation estimates particularly valuable for regions with sparse
          ground-based monitoring networks. The combination of spatial resolution, temporal coverage, and data quality
          makes CHIRPS particularly suitable for malaria environmental risk assessment applications.
        </p>
      </CardContent>
    </Card>
    <Card className="mb-6 bg-card/90">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <TerminalSquare className="mr-2 h-6 w-6 text-purple-400" /> 3.3 Detailed Step-by-Step Implementation
        </CardTitle>
      </CardHeader>
      <CardContent className="text-base">
        <h4 className="font-sans font-semibold text-xl mb-2">Step 1: Project Initialization and Environment Setup</h4>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Begin your Google Earth Engine analysis by accessing the Code Editor at code.earthengine.google.com and
          creating a new script named "Malaria_Environmental_Risk_Uganda". The initial setup involves establishing the
          analytical framework and loading the necessary datasets for environmental risk assessment. Proper project
          organization facilitates reproducible analysis and enables efficient collaboration with other researchers.
        </p>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Initialize your analysis by defining the temporal scope for your environmental assessment, typically focusing
          on a complete annual cycle to capture seasonal variations in environmental conditions. For this tutorial, we
          focus on 2022 data to demonstrate the analytical approach, though the methodology can be applied to any time
          period of interest depending on research objectives and data availability requirements.
        </p>

        <h4 className="font-sans font-semibold text-xl mt-4 mb-2">Step 2: MODIS NDVI Data Loading and Processing</h4>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Load the MODIS vegetation index collection using the Earth Engine ImageCollection constructor, applying
          temporal filters to select data for your analysis period. The MOD13Q1 product provides 16-day composite
          vegetation indices that reduce cloud contamination and atmospheric interference while maintaining high spatial
          resolution necessary for detailed habitat assessment.
        </p>
        <CodeBlockPlaceholder language="javascript" title="GEE Code: Load MODIS NDVI">
          {`// Load MODIS NDVI Image Collection for 2022
var ndvi = ee.ImageCollection('MODIS/006/MOD13Q1')
  .filterDate('2022-01-01', '2022-12-31')
  .select('NDVI')
  .mean();

print('NDVI Image:', ndvi);`}
        </CodeBlockPlaceholder>
        <div className="my-3 p-2 bg-muted rounded-md text-center">
          <img
            src="/lab3/modis-ndvi-east-africa.png"
            alt="MODIS NDVI satellite data showing vegetation density in East Africa, including Tsavo National Park and Mount Kilimanjaro, between February 18 and March 5, 2009."
            className="mx-auto rounded-md max-w-full h-auto"
          />
          <p className="text-xs text-muted-foreground mt-1 font-sans">MODIS NDVI data for East Africa.</p>
        </div>

        <h4 className="font-sans font-semibold text-xl mt-4 mb-2">Step 3: CHIRPS Precipitation Data Integration</h4>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Access the CHIRPS daily precipitation dataset and process it to generate annual rainfall totals that represent
          the cumulative water availability for mosquito breeding throughout the analysis period. The CHIRPS dataset
          provides daily precipitation estimates that can be aggregated to various temporal scales depending on
          analytical requirements.
        </p>
        <CodeBlockPlaceholder language="javascript" title="GEE Code: Load CHIRPS Rainfall">
          {`// Load CHIRPS Daily Rainfall and compute total for 2022
var rainfall = ee.ImageCollection('UCSB-CHG/CHIRPS/DAILY')
  .filterDate('2022-01-01', '2022-12-31')
  .sum();

print('Rainfall Image:', rainfall);`}
        </CodeBlockPlaceholder>

        <h4 className="font-sans font-semibold text-xl mt-4 mb-2">
          Step 4: Spatial Boundary Definition and Geographic Filtering
        </h4>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Define the geographic extent of your analysis by loading administrative boundary data for Uganda from the
          Earth Engine feature collection catalog. Administrative boundaries provide the spatial framework for clipping
          global datasets to your study area and enable country-specific analysis of environmental risk patterns.
        </p>
        <CodeBlockPlaceholder language="javascript" title="GEE Code: Load Uganda Boundary">
          {`// Load Uganda Boundary
var uganda = ee.FeatureCollection('USDOS/LSIB_SIMPLE/2017')
  .filter(ee.Filter.eq('country_na', 'Uganda'));

print('Uganda Boundary:', uganda);

// Center the map on Uganda
Map.centerObject(uganda, 6);`}
        </CodeBlockPlaceholder>
      </CardContent>
    </Card>
    <Card className="mb-6 bg-card/90">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <Palette className="mr-2 h-6 w-6 text-orange-400" /> 3.4 Data Visualization and Quality Assessment
        </CardTitle>
      </CardHeader>
      <CardContent className="text-base">
        <h4 className="font-sans font-semibold text-xl mb-2">Step 5: Environmental Data Visualization</h4>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Create informative visualizations of your environmental datasets using Earth Engine's mapping capabilities,
          applying appropriate color schemes and scaling parameters to effectively communicate spatial patterns.
          Visualization serves both analytical and communication purposes, enabling pattern recognition during analysis
          and supporting effective presentation of results to stakeholders.
        </p>
        <CodeBlockPlaceholder language="javascript" title="GEE Code: Visualize Data">
          {`// NDVI Visualization
Map.addLayer(ndvi.clip(uganda), 
  {min: 0, max: 9000, palette: ['white', 'lightgreen', 'darkgreen']}, 
  'Mean NDVI 2022');

// Rainfall Visualization  
Map.addLayer(rainfall.clip(uganda), 
  {min: 0, max: 2000, palette: ['white', 'lightblue', 'darkblue']}, 
  'Total Rainfall 2022');

// Add Uganda boundary outline
Map.addLayer(uganda, {color: 'red'}, 'Uganda Boundary');`}
        </CodeBlockPlaceholder>
        <div className="my-3 p-2 bg-muted rounded-md text-center">
          <img
            src="/lab3/gee-workflow-malaria-risk.png"
            alt="Google Earth Engine Workflow for Environmental Malaria Risk Mapping"
            className="mx-auto rounded-md max-w-full h-auto"
          />
          <p className="text-xs text-muted-foreground mt-1 font-sans">
            Google Earth Engine Workflow for Malaria Risk Mapping.
          </p>
        </div>

        <h4 className="font-sans font-semibold text-xl mt-4 mb-2">Step 6: Data Quality Verification and Assessment</h4>
        <p className="text-muted-foreground leading-relaxed">
          Implement quality assessment procedures to verify data completeness and identify potential issues that might
          affect analysis results. Quality assessment involves examining data distributions, identifying outliers, and
          assessing spatial coverage to ensure that analytical results are based on reliable environmental information.
          Data quality considerations for MODIS NDVI include cloud contamination, atmospheric interference, and sensor
          calibration issues. CHIRPS precipitation data quality depends on satellite sensor performance and ground
          station data.
        </p>
      </CardContent>
    </Card>
    <Card className="mb-6 bg-card/90">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <Layers className="mr-2 h-6 w-6 text-red-400" /> 3.5 Environmental Risk Assessment and Classification
        </CardTitle>
      </CardHeader>
      <CardContent className="text-base">
        <h4 className="font-sans font-semibold text-xl mb-2">Step 7: Risk Matrix Application and Classification</h4>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Apply environmental risk classification methods that combine NDVI and rainfall data to create comprehensive
          risk assessments for malaria transmission. Risk classification requires establishing thresholds for
          environmental variables and defining risk categories that correspond to different levels of transmission
          potential.
        </p>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          The risk classification approach combines vegetation density categories (based on NDVI values) with
          precipitation categories (based on annual rainfall totals) to create a matrix of environmental risk levels.
          This classification system enables identification of areas with optimal environmental conditions for malaria
          transmission while highlighting regions where environmental factors may limit transmission potential.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Environmental risk assessment must account for the complex relationships between different environmental
          factors and their combined effects on mosquito ecology and malaria transmission. The integration of multiple
          environmental variables requires careful consideration of how different combinations of conditions influence
          vector populations and disease transmission dynamics.
        </p>
      </CardContent>
    </Card>
    <Card className="mb-6 bg-card/90">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <FileOutput className="mr-2 h-6 w-6 text-indigo-400" /> 3.6 Data Export and Integration Capabilities
        </CardTitle>
      </CardHeader>
      <CardContent className="text-base">
        <h4 className="font-sans font-semibold text-xl mb-2">Step 8: Data Export for External Analysis</h4>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Configure data export operations to save processed environmental data for integration with external analytical
          platforms and geographic information systems. Google Earth Engine's export capabilities enable users to
          download processed datasets in standard geospatial formats compatible with desktop GIS software and
          statistical analysis packages.
        </p>
        <CodeBlockPlaceholder language="javascript" title="GEE Code: Export Data">
          {`// Export NDVI to Google Drive
Export.image.toDrive({
  image: ndvi.clip(uganda),
  description: 'Uganda_NDVI_2022',
  scale: 250,
  region: uganda.geometry(),
  maxPixels: 1e9
});

// Export Rainfall to Google Drive  
Export.image.toDrive({
  image: rainfall.clip(uganda),
  description: 'Uganda_Rainfall_2022', 
  scale: 5000,
  region: uganda.geometry(),
  maxPixels: 1e9
});`}
        </CodeBlockPlaceholder>
        <p className="text-muted-foreground leading-relaxed">
          Export operations require specification of spatial resolution (scale parameter), geographic extent (region
          parameter), and output format preferences. The exported GeoTIFF files maintain spatial reference information
          and can be directly imported into desktop GIS platforms. The export process operates asynchronously, with
          tasks appearing in the Earth Engine Tasks panel.
        </p>
      </CardContent>
    </Card>

    {/* Section 4: Advanced Environmental Analysis and Interpretation */}
    <Card id="lab3-advanced" className="my-6 bg-card/80 scroll-mt-20">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <Waypoints className="mr-2 h-6 w-6 text-purple-400" />
          4. Advanced Environmental Analysis and Interpretation
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-base">
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">4.1 Temporal Dynamics and Seasonal Patterns</h4>
          <p className="text-muted-foreground leading-relaxed">
            Environmental risk assessment for malaria requires understanding of temporal dynamics that influence
            transmission patterns throughout annual cycles. Uganda experiences distinct seasonal patterns with peak
            transmission typically occurring during March-May and October-December rainy seasons. Temporal analysis in
            GEE enables examination of environmental changes over multiple time scales. Climate change impacts require
            long-term monitoring.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">
            4.2 Spatial Heterogeneity and Local Environmental Factors
          </h4>
          <p className="text-muted-foreground leading-relaxed">
            Environmental risk assessment must account for spatial heterogeneity. Uganda's diverse topography and
            climate create substantial spatial variation. Vector control interventions can modify the relationship
            between environmental conditions and malaria transmission. Local ecological factors like vector species
            composition also influence risk.
          </p>
          <div className="my-3 p-2 bg-muted rounded-md text-center">
            <img
              src="/lab3/urban-footprint-network-diagram.png"
              alt="Methodological diagram illustrating the process of deriving urban area and population nodes on a road network from remote sensing, population, and road data for infectious disease modeling."
              className="mx-auto rounded-md max-w-full h-auto"
            />
            <p className="text-xs text-muted-foreground mt-1 font-sans">
              Deriving urban area and population nodes from remote sensing data.
            </p>
          </div>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">
            4.3 Integration with Health System Data and Surveillance
          </h4>
          <p className="text-muted-foreground leading-relaxed">
            Environmental risk assessment provides greatest value when integrated with health system surveillance data.
            Early warning systems combining environmental monitoring with epidemiological surveillance support proactive
            public health responses. Integration with health facility data helps identify areas with high risk and
            limited healthcare access.
          </p>
        </div>
      </CardContent>
    </Card>

    {/* Section 5: Professional Applications and Career Development */}
    <Card id="lab3-applications" className="my-6 bg-card/80 scroll-mt-20">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <Users className="mr-2 h-6 w-6 text-indigo-400" />
          5. Professional Applications and Career Development
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-base">
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">5.1 Public Health Program Applications</h4>
          <p className="text-muted-foreground leading-relaxed">
            Environmental risk mapping supports malaria control programs by targeting interventions, optimizing timing,
            and monitoring changes. Vector control programs benefit by identifying high-risk areas for spraying or bed
            net distribution. Epidemic preparedness relies on environmental monitoring for early warnings.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">5.2 Research and Academic Applications</h4>
          <p className="text-muted-foreground leading-relaxed">
            GEE provides powerful tools for researching environmental drivers of malaria. Spatial epidemiology benefits
            from integrating multiple datasets. Climate change research can monitor long-term trends and predict future
            patterns.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">5.3 Operational Integration and Decision Support</h4>
          <p className="text-muted-foreground leading-relaxed">
            Health ministries use risk mapping for strategic planning and resource allocation. District health offices
            use it for targeting local interventions. Community health programs use it for deploying workers and
            tailoring education.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">5.4 Career Pathways and Professional Development</h4>
          <p className="text-muted-foreground leading-relaxed">
            Skills in GEE environmental risk mapping lead to careers in spatial epidemiology, environmental health, and
            global health program management. Geospatial health analysis is a growing field. Understanding spatial
            analysis is valuable for global health program managers.
          </p>
        </div>
      </CardContent>
    </Card>

    {/* Section 6: Methodological Considerations and Future Directions */}
    <Card id="lab3-methodology" className="my-6 bg-card/80 scroll-mt-20">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <Settings2 className="mr-2 h-6 w-6 text-red-400" />
          6. Methodological Considerations and Future Directions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-base">
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">6.1 Data Quality and Validation Considerations</h4>
          <p className="text-muted-foreground leading-relaxed">
            Satellite data requires attention to quality (cloud cover, sensor issues). Validation with ground-based
            observations and epidemiological data is crucial. Temporal stability of environmental-malaria relationships
            needs ongoing monitoring.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">6.2 Technological Advances and Platform Evolution</h4>
          <p className="text-muted-foreground leading-relaxed">
            GEE evolves with new datasets and machine learning tools. Emerging satellite missions offer higher
            resolution data. AI and machine learning enable automated risk assessment.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">6.3 Integration with Global Health Initiatives</h4>
          <p className="text-muted-foreground leading-relaxed">
            Environmental risk mapping contributes to global malaria elimination efforts (e.g., WHO strategy). It aids
            Sustainable Development Goal monitoring. It informs climate change adaptation planning for health systems.
          </p>
        </div>
      </CardContent>
    </Card>

    {/* Section 7: Conclusion and Professional Impact */}
    <Card id="lab3-conclusion" className="my-6 bg-card/80 scroll-mt-20">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <Award className="mr-2 h-6 w-6 text-teal-400" />
          7. Conclusion and Professional Impact
        </CardTitle>
      </CardHeader>
      <CardContent className="text-base">
        <p className="text-muted-foreground mb-2 leading-relaxed">
          This tutorial shows GEE's potential for malaria environmental risk assessment. Skills developed support
          evidence-based public health decisions. GEE democratizes advanced geospatial analysis, aiding local capacity
          building.
        </p>
        <p className="text-muted-foreground mb-2 leading-relaxed">
          Future applications include real-time monitoring, mobile health integration, and predictive models. As
          environmental conditions change, these skills become more critical.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Integrating environmental risk assessment with health system strengthening helps address multiple challenges
          and supports sustainable disease control, contributing to universal health coverage and equity.
        </p>
      </CardContent>
    </Card>
    <hr className="my-8 border-dashed" />
  </div>
)

// Content for Lab 4 (AI-Assisted GEE Programming)
const lab4Content = (
  <div className="font-serif text-lg space-y-6">
    <p className="text-base leading-relaxed">
      This revolutionary tutorial introduces a paradigm shift in environmental programming education by integrating
      artificial intelligence tools with Google Earth Engine's powerful cloud-based geospatial analysis capabilities.
      Through the strategic use of ChatGPT and other AI coding assistants, students and researchers can accelerate their
      learning curve, improve code quality, and focus on scientific insights rather than syntax challenges. The
      integration of AI assistance in programming education has demonstrated significant benefits including 92%
      productivity increases and 89% improvement in debugging capabilities, while maintaining academic integrity through
      proper verification practices. This comprehensive guide provides the foundation for leveraging AI tools to enhance
      environmental research capabilities while developing genuine programming expertise in the rapidly evolving field
      of Earth observation science.
    </p>
    <div className="my-3 p-2 bg-muted rounded-md text-center">
      <img
        src="/lab4/ai-assisted-programming-book-cover.png"
        alt='Cover of the book "AI Assisted Programming for Web and Machine Learning" detailing the use of ChatGPT and GitHub Copilot.'
        className="mx-auto rounded-md max-w-md h-auto"
      />
      <p className="text-xs text-muted-foreground mt-1 font-sans">
        Cover of the book "AI Assisted Programming for Web and Machine Learning".
      </p>
    </div>

    {/* Section 1: Introduction to AI-Assisted Programming in Environmental Science */}
    <Card id="lab4-introduction" className="mb-6 bg-card/80 scroll-mt-20">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <Brain className="mr-2 h-6 w-6 text-primary" />
          1. Introduction to AI-Assisted Programming in Environmental Science
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-base">
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">
            1.1 The Revolution of Intelligent Programming Assistance
          </h4>
          <p className="text-muted-foreground mb-2 leading-relaxed">
            Artificial intelligence has fundamentally transformed the landscape of programming education and practice,
            particularly in specialized domains like environmental science and remote sensing. AI-assisted programming
            represents a collaborative approach where human programmers work alongside intelligent systems to write,
            debug, and optimize code more effectively than either could accomplish independently. The emergence of large
            language models like ChatGPT has democratized access to sophisticated programming assistance, enabling
            researchers and students to overcome technical barriers and focus on scientific problem-solving.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The application of AI programming assistance in environmental science addresses several critical challenges
            including the complexity of satellite data processing, the steep learning curve associated with platforms
            like Google Earth Engine, and the need for rapid prototyping of analytical workflows. Modern environmental
            challenges require interdisciplinary approaches that combine domain expertise with technical programming
            skills, making AI assistance particularly valuable for bridging knowledge gaps. Research has demonstrated
            that AI-assisted programming can reduce development time by up to 50% while improving code quality and
            reducing errors.
          </p>
          <div className="my-3 p-2 bg-muted rounded-md text-center">
            <img
              src="/lab4/satellite-remote-sensing.png"
              alt="A satellite with extended solar panels orbits in space, representing remote sensing capabilities for environmental monitoring."
              className="mx-auto rounded-md max-w-lg h-auto"
            />
            <p className="text-xs text-muted-foreground mt-1 font-sans">
              Satellite remote sensing for environmental monitoring.
            </p>
          </div>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">1.2 Educational Benefits and Transformative Learning</h4>
          <p className="text-muted-foreground mb-2 leading-relaxed">
            AI-assisted programming education offers transformative benefits that extend beyond simple code generation
            to encompass accelerated learning, enhanced confidence building, and improved understanding of complex
            programming concepts. Students using AI programming assistants demonstrate 85% faster learning curves for
            new programming concepts and 78% improvement in confidence when tackling complex analytical challenges. The
            interactive nature of AI assistance provides immediate feedback and explanation, creating a personalized
            tutoring experience that adapts to individual learning styles and pace.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The educational value of AI assistance lies not in replacing traditional learning but in amplifying human
            capabilities and removing barriers to entry in technical fields. By handling routine syntax concerns and
            providing instant debugging support, AI tools enable students to focus on higher-level conceptual
            understanding and problem-solving strategies. This approach is particularly valuable in environmental
            science education where students must master both domain-specific knowledge and technical programming skills
            to conduct meaningful research.
          </p>
          <div className="my-3 p-2 bg-muted rounded-md text-center">
            <img
              src="/lab4/ai-programming-education-analysis-chart.png"
              alt="Bar chart showing benefits and considerations of AI-Assisted Programming in Education, with benefits like productivity and debug assist rated highly."
              className="mx-auto rounded-md max-w-lg h-auto"
            />
            <p className="text-xs text-muted-foreground mt-1 font-sans">
              Benefits and Considerations of AI-Assisted Programming in Education.
            </p>
          </div>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">1.3 Ethical Considerations and Academic Integrity</h4>
          <p className="text-muted-foreground leading-relaxed">
            The integration of AI assistance in programming education requires careful consideration of ethical
            implications and academic integrity principles. While AI tools provide substantial benefits, their use must
            be balanced with the development of independent programming skills and critical thinking abilities.
            Educational institutions and instructors must establish clear guidelines for AI tool usage that promote
            learning while maintaining academic honesty.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Responsible AI use in education involves transparency about AI assistance, verification of generated code,
            and ensuring that students develop genuine understanding rather than mere dependence on automated tools. The
            goal is to use AI as a learning amplifier that accelerates skill development while preserving the essential
            human elements of creativity, problem-solving, and domain expertise. Best practices include disclosing AI
            assistance, understanding generated code thoroughly, and building incremental expertise through guided
            practice.
          </p>
        </div>
      </CardContent>
    </Card>

    {/* Section 2: Understanding ChatGPT for Google Earth Engine Programming */}
    <Card id="lab4-chatgpt" className="mb-6 bg-card/80 scroll-mt-20">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <Bot className="mr-2 h-6 w-6 text-yellow-400" />
          2. Understanding ChatGPT for Google Earth Engine Programming
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-base">
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">2.1 Natural Language to Code Translation</h4>
          <p className="text-muted-foreground leading-relaxed">
            ChatGPT's ability to translate natural language descriptions into functional Google Earth Engine JavaScript
            code represents a breakthrough in accessibility for environmental programming. The model's training on
            extensive code repositories and documentation enables it to understand both the intent behind programming
            requests and the specific syntax requirements of the Earth Engine API. This capability allows researchers to
            describe their analytical goals in plain language and receive immediate, functional code implementations.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The natural language interface significantly reduces the cognitive load associated with learning new
            programming languages and APIs, enabling domain experts to focus on scientific questions rather than
            technical implementation details. For Google Earth Engine specifically, ChatGPT can generate code for common
            tasks including data loading, filtering, processing, visualization, and export operations. This capability
            is particularly valuable for researchers who need to rapidly prototype analytical workflows or explore new
            methodological approaches.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">2.2 Code Explanation and Learning Support</h4>
          <p className="text-muted-foreground leading-relaxed">
            Beyond code generation, ChatGPT provides sophisticated code explanation capabilities that support deep
            learning and understanding of Earth Engine programming concepts. When presented with existing code, the
            model can break down complex operations line by line, explaining the purpose and function of each component.
            This explanatory capability transforms opaque code into learning opportunities, helping users understand not
            just what the code does but why specific approaches are used.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The interactive nature of ChatGPT's explanations allows for follow-up questions and clarification requests,
            creating a personalized tutoring experience that adapts to individual knowledge levels. For Earth Engine
            programming, this includes explanations of data structures, function parameters, processing workflows, and
            optimization strategies. Users can request explanations at different levels of detail, from high-level
            conceptual overviews to detailed technical implementation discussions.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">2.3 Debugging and Error Resolution</h4>
          <p className="text-muted-foreground leading-relaxed">
            ChatGPT's debugging capabilities provide immediate assistance for resolving programming errors and
            optimizing code performance. When presented with error messages and problematic code, the model can identify
            likely causes and suggest specific fixes. This debugging support is particularly valuable for Earth Engine
            programming, where complex data processing workflows can generate obscure error messages that are difficult
            for beginners to interpret.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The AI's debugging approach typically involves systematic analysis of error patterns, identification of
            common mistake categories, and provision of corrected code examples. For Earth Engine applications, this
            includes assistance with coordinate reference system errors, data filtering problems, memory limitations,
            and export configuration issues. The immediate availability of debugging support reduces frustration and
            maintains learning momentum, particularly important for complex environmental analysis projects.
          </p>
        </div>
      </CardContent>
    </Card>

    {/* Section 3: Google Earth Engine-Specific AI Applications */}
    <Card id="lab4-gee-ai-apps" className="mb-6 bg-card/80 scroll-mt-20">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <Cloud className="mr-2 h-6 w-6 text-blue-400" />
          3. Google Earth Engine-Specific AI Applications
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-base">
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">3.1 Satellite Data Access and Processing</h4>
          <p className="text-muted-foreground leading-relaxed">
            AI assistance proves particularly valuable for navigating Google Earth Engine's extensive satellite data
            catalog and implementing appropriate processing workflows. ChatGPT can help users identify relevant datasets
            for specific research questions, understand data characteristics and limitations, and implement proper
            filtering and preprocessing steps. The complexity of satellite data products, with their various bands,
            quality flags, and temporal characteristics, makes AI assistance especially beneficial for researchers new
            to remote sensing.
          </p>
          <div className="my-3 p-2 bg-muted rounded-md text-center">
            <img
              src="/lab4/earth-observation-satellites-orbit.png"
              alt="Earth observation satellites like Aura, CloudSat, CALIPSO, Aqua, GCOM-W1, OCO-2, and PARASOL shown in orbit collecting data over Earth."
              className="mx-auto rounded-md max-w-lg h-auto"
            />
            <p className="text-xs text-muted-foreground mt-1 font-sans">
              Earth observation satellites collecting data.
            </p>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            The AI can generate code for common satellite data processing tasks including cloud masking, atmospheric
            correction, temporal compositing, and multi-sensor data fusion. For environmental monitoring applications,
            this includes implementing vegetation index calculations, water body detection, land cover classification,
            and change detection analyses. The ability to quickly prototype different analytical approaches enables
            researchers to explore methodological alternatives and optimize their workflows.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">3.2 Spatial Analysis and Visualization</h4>
          <p className="text-muted-foreground leading-relaxed">
            Google Earth Engine's spatial analysis capabilities can be efficiently leveraged through AI-assisted code
            generation for complex geospatial operations. ChatGPT can help implement spatial filtering, geometric
            operations, zonal statistics, and advanced analytical techniques that would otherwise require extensive
            manual coding. This capability is particularly valuable for environmental applications requiring
            sophisticated spatial analysis workflows.
          </p>
          <div className="my-3 p-2 bg-muted rounded-md text-center">
            <img
              src="/lab4/land-cover-map-mozambique.png"
              alt="A land cover map of Albufeira dos Pequenos, Mozambique, illustrating various land classifications derived from satellite remote sensing data."
              className="mx-auto rounded-md max-w-lg h-auto"
            />
            <p className="text-xs text-muted-foreground mt-1 font-sans">Land cover map derived from satellite data.</p>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Visualization of results represents another area where AI assistance provides significant value, helping
            users create effective maps, charts, and interactive displays of their analytical results. The AI can
            generate code for customizing color palettes, classification schemes, layout parameters, and export settings
            to create publication-ready visualizations. This capability enables researchers to focus on interpretation
            and communication of results rather than technical visualization details.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">3.3 Environmental Monitoring Applications</h4>
          <p className="text-muted-foreground leading-relaxed">
            AI-assisted programming excels in implementing environmental monitoring workflows that require integration
            of multiple data sources and complex analytical procedures. ChatGPT can help generate code for monitoring
            applications including air quality assessment, water resource monitoring, deforestation tracking, and
            agricultural productivity analysis. These applications often require sophisticated temporal analysis,
            statistical modeling, and multi-scale assessment approaches that benefit significantly from AI assistance.
          </p>
          <div className="my-3 p-2 bg-muted rounded-md text-center">
            <img
              src="/lab4/optical-sar-remote-sensing-diagram.png"
              alt="Diagram illustrating the use of optical and SAR remote sensing satellites for monitoring various environmental phenomena and hazards like ground subsidence, coastal flooding, and oil spills."
              className="mx-auto rounded-md max-w-lg h-auto"
            />
            <p className="text-xs text-muted-foreground mt-1 font-sans">
              Optical and SAR remote sensing for environmental monitoring.
            </p>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            The integration of environmental domain knowledge with programming assistance enables rapid development of
            monitoring systems that can track environmental changes, assess intervention effectiveness, and support
            policy decision-making. AI assistance is particularly valuable for implementing early warning systems,
            anomaly detection algorithms, and predictive modeling approaches that require complex programming logic.
          </p>
        </div>
      </CardContent>
    </Card>

    {/* Section 4: Prompt Engineering Best Practices for Earth Engine */}
    <Card id="lab4-prompt-engineering" className="mb-6 bg-card/80 scroll-mt-20">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <MessageSquare className="mr-2 h-6 w-6 text-green-400" />
          4. Prompt Engineering Best Practices for Earth Engine
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-base">
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">4.1 Constructing Effective Programming Prompts</h4>
          <p className="text-muted-foreground leading-relaxed">
            Effective prompt engineering for Google Earth Engine programming requires clear specification of objectives,
            constraints, and desired outputs. The most successful prompts combine specific technical requirements with
            sufficient context about the analytical goals and data characteristics. For Earth Engine applications, this
            includes specifying geographic areas of interest, temporal periods, satellite datasets, processing
            requirements, and output formats.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Optimal prompts follow a structured format that includes role assignment, context provision, step-by-step
            task breakdown, format specification, and quality requirements. For example, effective prompts might begin
            by establishing the AI as a remote sensing expert, provide background on the research question, specify the
            exact analytical steps required, and request code with comprehensive documentation. This structured approach
            ensures that generated code meets both technical and scientific requirements.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">4.2 Iterative Prompt Refinement</h4>
          <p className="text-muted-foreground leading-relaxed">
            Prompt engineering for complex Earth Engine applications typically requires iterative refinement to achieve
            optimal results. Initial prompts often generate functional code that requires modification to address
            specific requirements, handle edge cases, or optimize performance. The iterative process involves testing
            generated code, identifying limitations or errors, and refining prompts to address specific issues.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Successful refinement strategies include providing example inputs and outputs, specifying error handling
            requirements, requesting alternative approaches, and asking for code optimization suggestions. For Earth
            Engine programming, refinement often focuses on memory management, processing efficiency, data quality
            control, and visualization enhancement. The goal is to develop increasingly sophisticated prompts that
            generate production-ready code for complex environmental analysis tasks.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">4.3 Domain-Specific Prompt Templates</h4>
          <p className="text-muted-foreground leading-relaxed">
            Developing standardized prompt templates for common Earth Engine tasks improves efficiency and ensures
            consistent code quality. These templates can be customized for specific applications including vegetation
            monitoring, water resource assessment, urban analysis, and climate studies. Effective templates incorporate
            best practices for data access, processing workflows, quality control, and result visualization.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Template development should consider common analysis patterns, typical data requirements, standard
            processing steps, and frequent troubleshooting needs. For environmental applications, templates might
            address seasonal analysis, trend detection, anomaly identification, and multi-temporal comparison.
            Well-designed templates enable researchers to quickly generate customized code for their specific research
            questions while maintaining consistency and quality standards.
          </p>
        </div>
      </CardContent>
    </Card>

    {/* Section 5: Step-by-Step Implementation Tutorial */}
    <h2 id="lab4-tutorial" className="font-sans text-3xl font-bold mt-10 mb-6 text-center text-primary scroll-mt-20">
      5. Step-by-Step Implementation Tutorial
    </h2>
    <Card className="mb-6 bg-card/90">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <TerminalSquare className="mr-2 h-6 w-6 text-purple-400" />
          5.1 Platform Setup and Initial Configuration
        </CardTitle>
      </CardHeader>
      <CardContent className="text-base">
        <p className="text-muted-foreground leading-relaxed">
          Begin your AI-assisted Earth Engine programming by establishing accounts and configuring your development
          environment. Access Google Earth Engine at code.earthengine.google.com and ChatGPT at chat.openai.com in
          separate browser tabs to enable efficient workflow between platforms. Create a new Earth Engine script named
          "Lab4_AI_Assisted_Analysis" and save it in your workshop folder for organized project management.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Configure your workspace by enabling the Earth Engine documentation panel, setting up the code editor
          preferences, and familiarizing yourself with the debugging console. Open ChatGPT in a separate window and
          begin your session by establishing context with an introductory prompt such as "I'm working on Google Earth
          Engine JavaScript programming for environmental analysis and need assistance with code generation and
          debugging". This context-setting improves the relevance and accuracy of subsequent AI responses.
        </p>
      </CardContent>
    </Card>
    <Card className="mb-6 bg-card/90">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <Code2 className="mr-2 h-6 w-6 text-primary" />
          5.2 Your First AI-Generated Earth Engine Code
        </CardTitle>
      </CardHeader>
      <CardContent className="text-base">
        <p className="text-muted-foreground leading-relaxed">
          Start with a fundamental Earth Engine task to demonstrate the AI assistance workflow. Copy this comprehensive
          prompt to ChatGPT to generate your first analytical code:
        </p>
        <blockquote className="mt-2 mb-2 border-l-2 pl-6 italic bg-muted/50 p-3 rounded">
          "As a Google Earth Engine expert, write JavaScript code that: 1. Loads Landsat 8 Surface Reflectance data
          ('LANDSAT/LC08/C02/T1_L2') for Kenya, 2. Filters for images from January 2023 to December 2023, 3. Applies
          cloud masking using the QA_PIXEL band, 4. Calculates NDVI using the formula (NIR - Red) / (NIR + Red), 5.
          Creates a median composite for the year, 6. Clips the result to Kenya's boundary using
          'USDOS/LSIB_SIMPLE/2017', 7. Displays the result with a green color palette, 8. Centers the map on Kenya with
          zoom level 6, 9. Includes comprehensive comments explaining each step".
        </blockquote>
        <div className="my-3 p-2 bg-muted rounded-md text-center">
          <img
            src="/lab4/ai-assisted-gee-workflow.png"
            alt="Diagram showing AI-assisted Google Earth Engine programming workflow: 1. Load data, 2. Start code editor, 3. Enter prompt, 4. Generate script, 5. Run and modify."
            className="mx-auto rounded-md max-w-lg h-auto"
          />
          <p className="text-xs text-muted-foreground mt-1 font-sans">
            AI-assisted Google Earth Engine programming workflow.
          </p>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          The AI will generate comprehensive code that demonstrates proper Earth Engine syntax, data handling
          procedures, and visualization techniques. Copy the generated code into your Earth Engine script and execute it
          to verify functionality. Examine each section of the code to understand the logical flow, data processing
          steps, and parameter specifications.
        </p>
      </CardContent>
    </Card>
    <Card className="mb-6 bg-card/90">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <CheckSquare className="mr-2 h-6 w-6 text-green-500" />
          5.3 Code Testing and Validation
        </CardTitle>
      </CardHeader>
      <CardContent className="text-base">
        <p className="text-muted-foreground leading-relaxed">
          Execute the AI-generated code and systematically verify its functionality. Check the map display for proper
          visualization, examine the console output for any error messages, and verify that the analysis extent matches
          your expectations. Common issues might include incorrect dataset IDs, improper date formatting, visualization
          parameter errors, or memory limitations with large datasets.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          If errors occur, copy the exact error message and problematic code section back to ChatGPT with a debugging
          request such as "I received this error message: [ERROR TEXT]. Here's the code that generated it: [CODE
          SECTION]. Please help me identify and fix the problem". The AI will typically provide both corrected code and
          an explanation of the error cause, supporting your learning process.
        </p>
      </CardContent>
    </Card>
    <Card className="mb-6 bg-card/90">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <Zap className="mr-2 h-6 w-6 text-yellow-500" />
          5.4 Code Enhancement and Optimization
        </CardTitle>
      </CardHeader>
      <CardContent className="text-base">
        <p className="text-muted-foreground leading-relaxed">
          Request code improvements and additional functionality to extend your analysis capabilities. Ask ChatGPT to
          enhance your code with features such as "Add a function to calculate and export zonal statistics for
          administrative boundaries," "Include time series analysis to show seasonal NDVI trends," or "Add interactive
          charting capabilities to display temporal patterns".
        </p>
        <p className="text-muted-foreground leading-relaxed">
          The enhancement process demonstrates the iterative nature of AI-assisted programming, where initial functional
          code serves as a foundation for increasingly sophisticated analysis. Request explanations for new
          functionality to ensure you understand the enhanced capabilities and can modify them for future applications.
        </p>
      </CardContent>
    </Card>
    <Card className="mb-6 bg-card/90">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <BookOpen className="mr-2 h-6 w-6 text-blue-500" />
          5.5 Documentation and Code Organization
        </CardTitle>
      </CardHeader>
      <CardContent className="text-base">
        <p className="text-muted-foreground leading-relaxed">
          Generate comprehensive documentation for your analytical workflow using AI assistance. Request that ChatGPT
          create detailed comments, function documentation, and user guides for your code. Ask for explanations of
          parameter choices, discussion of limitations and assumptions, and suggestions for alternative approaches.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Proper documentation ensures that your code is reproducible, maintainable, and understandable to
          collaborators. AI assistance can help generate professional-quality documentation that follows best practices
          and includes all necessary information for code reuse and modification.
        </p>
      </CardContent>
    </Card>

    {/* Section 6: Advanced Analysis Techniques with AI Assistance */}
    <Card id="lab4-advanced-analysis" className="mb-6 bg-card/80 scroll-mt-20">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <GitBranch className="mr-2 h-6 w-6 text-purple-400" />
          6. Advanced Analysis Techniques with AI Assistance
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-base">
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">6.1 Multi-Temporal Change Detection</h4>
          <p className="text-muted-foreground leading-relaxed">
            AI assistance enables rapid implementation of sophisticated change detection analyses that track
            environmental changes over time. Request code for comparing satellite imagery across different time periods,
            implementing change detection algorithms, and quantifying the magnitude and direction of observed changes.
            ChatGPT can generate code for both simple difference calculations and complex statistical change detection
            methods.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Advanced change detection implementations might include trend analysis using linear regression, breakpoint
            detection algorithms, or machine learning-based change classification approaches. The AI can help implement
            quality control procedures, statistical significance testing, and uncertainty assessment for change
            detection results. These capabilities enable researchers to develop robust monitoring systems for
            environmental applications.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">6.2 Machine Learning Integration</h4>
          <p className="text-muted-foreground leading-relaxed">
            Leverage AI assistance to implement machine learning workflows within Google Earth Engine for
            classification, regression, and pattern recognition tasks. ChatGPT can generate code for supervised
            classification using Random Forest, Support Vector Machine, or Gradient Tree Boosting algorithms. The AI
            assistance includes help with training data preparation, feature selection, model validation, and accuracy
            assessment procedures.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Advanced machine learning implementations might include unsupervised clustering, dimensionality reduction,
            ensemble methods, or deep learning integration. AI assistance proves particularly valuable for optimizing
            hyperparameters, implementing cross-validation procedures, and interpreting model results. These
            capabilities enable sophisticated analytical approaches that would otherwise require extensive manual
            programming.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">6.3 Scalable Processing Workflows</h4>
          <p className="text-muted-foreground leading-relaxed">
            Implement large-scale processing workflows using AI assistance to handle continental or global analyses.
            Request code for batch processing multiple images, implementing parallel processing strategies, and managing
            memory limitations for large datasets. ChatGPT can help design efficient workflows that maximize Earth
            Engine's computational capabilities while minimizing processing time and resource consumption.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Scalable workflow implementations include strategies for data chunking, progressive processing, error
            handling, and result aggregation. AI assistance can help implement monitoring and logging systems that track
            processing progress and identify potential issues. These capabilities enable researchers to conduct
            large-scale environmental assessments that would be impractical with traditional desktop processing.
          </p>
        </div>
      </CardContent>
    </Card>

    {/* Section 7: Professional Development and Career Applications */}
    <Card id="lab4-professional-dev" className="mb-6 bg-card/80 scroll-mt-20">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <UserCheck className="mr-2 h-6 w-6 text-indigo-400" />
          7. Professional Development and Career Applications
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-base">
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">7.1 Building Technical Expertise</h4>
          <p className="text-muted-foreground leading-relaxed">
            AI-assisted programming provides a pathway for rapidly developing technical expertise in environmental
            remote sensing and geospatial analysis. The combination of immediate code assistance, comprehensive
            explanations, and iterative refinement enables accelerated learning that builds both practical skills and
            conceptual understanding. Students can progress from basic programming tasks to sophisticated analytical
            workflows more quickly than traditional learning approaches.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The key to professional development through AI assistance lies in maintaining balance between tool
            utilization and independent skill building. Successful learners use AI tools to overcome initial barriers
            while gradually building the expertise needed for independent programming and problem-solving. This approach
            enables career advancement in fields requiring both domain expertise and technical programming capabilities.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">7.2 Research and Academic Applications</h4>
          <p className="text-muted-foreground leading-relaxed">
            AI-assisted Earth Engine programming opens new possibilities for research productivity and methodological
            innovation. Researchers can rapidly prototype analytical approaches, test alternative methodologies, and
            implement complex workflows that would otherwise require extensive development time. This capability enables
            more ambitious research projects and faster iteration cycles for methodological development.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Academic applications include developing new analytical methods, implementing reproducible research
            workflows, and creating educational materials and tutorials. AI assistance can help generate code for novel
            research approaches, implement cutting-edge algorithms, and develop tools for sharing research methods with
            the broader scientific community. These capabilities enhance research impact and facilitate collaboration
            across institutions and disciplines.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">7.3 Operational and Commercial Applications</h4>
          <p className="text-muted-foreground leading-relaxed">
            The skills developed through AI-assisted Earth Engine programming have direct applications in operational
            environmental monitoring and commercial geospatial services. Professional applications include developing
            automated monitoring systems, implementing real-time analysis workflows, and creating custom analytical
            tools for specific client needs. AI assistance enables rapid development of production-ready systems that
            meet operational requirements.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Commercial applications span industries including agriculture, forestry, urban planning, insurance, and
            environmental consulting. The ability to quickly develop and deploy analytical solutions using AI assistance
            provides competitive advantages in markets requiring rapid response to client needs. These applications
            demonstrate the practical value of combining domain expertise with AI-enhanced programming capabilities.
          </p>
        </div>
      </CardContent>
    </Card>

    {/* Section 8: Ethical Considerations and Best Practices */}
    <Card id="lab4-ethics" className="mb-6 bg-card/80 scroll-mt-20">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <ShieldAlert className="mr-2 h-6 w-6 text-red-400" />
          8. Ethical Considerations and Best Practices
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-base">
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">8.1 Responsible AI Use in Environmental Science</h4>
          <p className="text-muted-foreground leading-relaxed">
            Responsible use of AI programming assistance requires understanding both the capabilities and limitations of
            these tools in environmental science applications. Users must verify AI-generated code for scientific
            accuracy, validate results against known benchmarks, and understand the assumptions and limitations of
            implemented methods. The goal is to use AI assistance to enhance human capabilities while maintaining
            scientific rigor and methodological transparency.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Ethical considerations include proper attribution of AI assistance, transparent reporting of methodological
            approaches, and careful validation of results. Environmental science applications have particular
            responsibilities for accuracy given their potential impact on policy decisions and resource management. Best
            practices include independent verification of results, peer review of AI-assisted analyses, and clear
            documentation of AI tool usage.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">8.2 Academic Integrity and Learning Goals</h4>
          <p className="text-muted-foreground leading-relaxed">
            Maintaining academic integrity while using AI programming assistance requires clear guidelines and
            transparent practices. Educational institutions must develop policies that encourage beneficial AI use while
            preserving learning objectives and assessment validity. Students should disclose AI assistance, demonstrate
            understanding of generated code, and develop independent programming capabilities alongside AI tool usage.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Learning goals should emphasize understanding over code production, with AI assistance serving as a learning
            amplifier rather than a replacement for skill development. Successful educational approaches use AI tools to
            remove barriers and accelerate learning while ensuring that students develop the critical thinking and
            problem-solving skills essential for independent research. This balance enables students to benefit from AI
            assistance while building the expertise needed for long-term career success.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">8.3 Future Perspectives and Continuous Learning</h4>
          <p className="text-muted-foreground leading-relaxed">
            The rapid evolution of AI tools requires continuous learning and adaptation of best practices. Environmental
            scientists and programmers must stay current with new capabilities, emerging limitations, and evolving
            ethical considerations. The goal is to maintain effectiveness and responsibility as AI tools become
            increasingly sophisticated and integrated into scientific workflows.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Future developments may include more specialized AI assistants for environmental applications, improved
            integration with scientific computing platforms, and enhanced capabilities for complex analytical tasks.
            Successful professionals will adapt their practices to leverage new capabilities while maintaining
            scientific standards and ethical principles. This adaptive approach ensures continued benefit from AI
            assistance throughout evolving technological landscapes.
          </p>
        </div>
      </CardContent>
    </Card>

    {/* Section 9: Conclusion and Next Steps */}
    <Card id="lab4-conclusion" className="my-6 bg-card/80 scroll-mt-20">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <Award className="mr-2 h-6 w-6 text-teal-400" />
          9. Conclusion and Next Steps
        </CardTitle>
      </CardHeader>
      <CardContent className="text-base">
        <p className="text-muted-foreground mb-2 leading-relaxed">
          This comprehensive tutorial demonstrates the transformative potential of AI-assisted programming for Google
          Earth Engine applications in environmental science and remote sensing. The integration of ChatGPT and similar
          AI tools with Earth Engine's powerful analytical capabilities creates unprecedented opportunities for
          accelerated learning, enhanced productivity, and methodological innovation. Through proper implementation of
          AI assistance, researchers and students can overcome technical barriers, focus on scientific insights, and
          develop sophisticated analytical capabilities more rapidly than traditional approaches allow.
        </p>
        <p className="text-muted-foreground mb-2 leading-relaxed">
          The success of AI-assisted programming depends on maintaining balance between tool utilization and skill
          development, ensuring that AI assistance enhances rather than replaces human expertise. The most effective
          practitioners use AI tools to amplify their capabilities while building the independent skills and critical
          thinking abilities essential for scientific research. This approach enables both immediate productivity gains
          and long-term professional development in the rapidly evolving field of environmental remote sensing.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Future applications of AI-assisted Earth Engine programming will likely expand to include real-time monitoring
          systems, automated analysis pipelines, and integration with machine learning platforms. The foundational
          skills and best practices developed through this tutorial provide preparation for these emerging applications
          while contributing immediately to current research and operational needs. As environmental challenges become
          increasingly complex and urgent, the combination of human expertise with AI assistance offers powerful tools
          for developing effective monitoring, analysis, and decision-support systems that can contribute to
          environmental sustainability and informed policy-making.
        </p>
      </CardContent>
    </Card>
    <hr className="my-8 border-dashed" />
  </div>
)

// Content for Lab 5 (AI-Based Clustering for Malaria Risk Mapping)
const lab5Content = (
  <div className="font-serif text-lg space-y-6">
    <p className="text-base leading-relaxed">
      This groundbreaking tutorial represents the convergence of artificial intelligence, machine learning, and public
      health surveillance, introducing advanced unsupervised learning techniques for environmental disease risk
      assessment. The integration of AI-assisted programming with Google Earth Engine's machine learning capabilities
      creates unprecedented opportunities for rapid development of sophisticated analytical tools that can transform how
      we approach malaria surveillance and control. Through the strategic application of K-means clustering algorithms
      to satellite-derived environmental data, this tutorial demonstrates how modern computational approaches can
      identify complex patterns in environmental conditions that influence disease transmission dynamics.
    </p>
    <div className="my-3 p-2 bg-muted rounded-md text-center">
      <img
        src="/lab5/ml-workflow-risk-assessment.jpg"
        alt="Machine Learning Workflow for Environmental Risk Assessment Using K-means Clustering"
        className="mx-auto rounded-md max-w-lg h-auto"
      />
      <p className="text-xs text-muted-foreground mt-1 font-sans">
        Machine Learning Workflow for Environmental Risk Assessment Using K-means Clustering.
      </p>
    </div>

    {/* Section 1: Introduction to Machine Learning Revolution in Public Health Surveillance */}
    <Card id="lab5-introduction" className="mb-6 bg-card/80 scroll-mt-20">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <LightbulbIcon className="mr-2 h-6 w-6 text-primary" />
          1. Introduction to Machine Learning Revolution in Public Health Surveillance
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-base">
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">
            1.1 The Paradigm Shift to Intelligent Disease Monitoring
          </h4>
          <p className="text-muted-foreground mb-2 leading-relaxed">
            Machine learning has fundamentally transformed epidemiological research by enabling the discovery of hidden
            patterns in complex, high-dimensional health data without requiring predetermined hypotheses or labeled
            training examples. Unsupervised learning techniques, particularly clustering algorithms, have emerged as
            powerful tools for identifying latent structures within environmental and health datasets that traditional
            statistical approaches might overlook. The application of these techniques to malaria surveillance
            represents a significant advancement in our ability to understand and predict disease transmission patterns
            at multiple spatial and temporal scales.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The integration of artificial intelligence with environmental health surveillance addresses several critical
            challenges in malaria control including the complexity of environmental determinants, the need for real-time
            risk assessment, and the requirement for scalable analytical approaches that can be applied across diverse
            geographic settings. Research demonstrates that AI-assisted analytical workflows can reduce development time
            by up to 50% while improving analytical accuracy and enabling non-technical users to conduct sophisticated
            spatial analyses. This democratization of advanced analytical capabilities has profound implications for
            global health equity and local capacity building in malaria-endemic regions.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">
            1.2 Unsupervised Learning Applications in Spatial Epidemiology
          </h4>
          <p className="text-muted-foreground mb-2 leading-relaxed">
            Unsupervised machine learning techniques excel in exploratory data analysis where the goal is to identify
            natural groupings or patterns within complex datasets without prior knowledge of expected outcomes. In the
            context of malaria environmental risk assessment, clustering algorithms can identify areas with similar
            combinations of environmental conditions that may support disease transmission, revealing patterns that
            might not be apparent through traditional mapping approaches. K-means clustering, in particular, has proven
            effective for partitioning environmental data into distinct risk zones based on vegetation indices and
            precipitation patterns.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The power of unsupervised learning lies in its ability to process multiple environmental variables
            simultaneously, identifying complex interactions and threshold effects that influence mosquito ecology and
            malaria transmission. Unlike supervised classification approaches that require extensive training data with
            known outcomes, unsupervised methods can be applied in data-scarce environments and can reveal unexpected
            patterns that challenge existing assumptions about disease ecology. This capability is particularly valuable
            for emerging infectious diseases or areas where limited epidemiological surveillance data is available.
          </p>
          <div className="my-3 p-2 bg-muted rounded-md text-center">
            <img
              src="/lab5/kmeans-process-diagram.jpg"
              alt="K-means Clustering Process for Malaria Environmental Risk Assessment"
              className="mx-auto rounded-md max-w-lg h-auto"
            />
            <p className="text-xs text-muted-foreground mt-1 font-sans">
              K-means Clustering Process for Malaria Environmental Risk Assessment.
            </p>
          </div>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">1.3 The ChatGPT Revolution in Scientific Programming</h4>
          <p className="text-muted-foreground leading-relaxed">
            The emergence of large language models like ChatGPT has created unprecedented opportunities for accelerating
            scientific programming and reducing barriers to advanced analytical techniques. AI-assisted programming
            enables researchers to rapidly prototype complex analytical workflows, debug code efficiently, and learn new
            programming concepts through interactive dialogue. Studies demonstrate that programmers using AI assistance
            show 92% productivity increases and 89% improvement in debugging capabilities while maintaining code quality
            and scientific rigor.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The integration of AI programming assistance with Google Earth Engine represents a particularly powerful
            combination, enabling researchers to leverage cloud-based planetary-scale computing capabilities without
            requiring extensive programming expertise. This democratization of advanced geospatial analysis tools has
            profound implications for global health research, particularly in resource-limited settings where technical
            capacity may be constrained. The key to successful AI-assisted learning lies in maintaining balance between
            tool utilization and genuine skill development, ensuring that AI augments rather than replaces human
            expertise and critical thinking.
          </p>
        </div>
      </CardContent>
    </Card>

    {/* Section 2: Theoretical Foundations of Clustering and Environmental Risk Assessment */}
    <Card id="lab5-theory" className="mb-6 bg-card/80 scroll-mt-20">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <Sigma className="mr-2 h-6 w-6 text-yellow-400" />
          2. Theoretical Foundations of Clustering and Environmental Risk Assessment
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-base">
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">
            2.1 K-means Clustering Algorithm and Spatial Applications
          </h4>
          <p className="text-muted-foreground mb-2 leading-relaxed">
            K-means clustering represents one of the most widely used unsupervised learning algorithms for partitioning
            data into distinct groups based on similarity in feature space. The algorithm operates by iteratively
            assigning data points to the nearest cluster centroid and updating centroid positions to minimize
            within-cluster sum of squared distances. For environmental health applications, this approach enables
            identification of areas with similar combinations of environmental conditions that may support disease
            transmission or vector survival.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The mathematical foundation of K-means clustering relies on minimizing the objective function J = Σᵢ₌₁ⁿ
            Σⱼ₌₁ᵏ wᵢⱼ ||xᵢ - μⱼ||², where wᵢⱼ indicates cluster membership and μⱼ represents cluster centroids. For
            malaria risk assessment, this translates to identifying geographic areas where combinations of vegetation
            density (NDVI) and precipitation patterns create similar ecological conditions for mosquito breeding and
            survival. The algorithm's computational efficiency and interpretability make it particularly suitable for
            large-scale environmental analysis using satellite data.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Spatial applications of K-means clustering must consider geographic context and spatial autocorrelation
            effects that can influence cluster formation and interpretation. The choice of optimal cluster number (k)
            becomes critical for meaningful environmental risk assessment, requiring validation through domain
            knowledge, statistical metrics like silhouette analysis, and comparison with epidemiological data where
            available. Advanced implementations may incorporate spatial constraints or distance-weighted clustering to
            account for geographic proximity and spatial dependence in environmental variables.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">2.2 Environmental Variables and Disease Ecology</h4>
          <p className="text-muted-foreground mb-2 leading-relaxed">
            The selection and preprocessing of environmental variables for clustering analysis requires deep
            understanding of vector ecology and disease transmission dynamics. NDVI serves as a proxy for vegetation
            density and habitat suitability, with research demonstrating significant correlations between vegetation
            indices and mosquito density, particularly in savannah environments. Values above 0.36-0.4 typically
            indicate conditions favorable for increased malaria transmission, though these thresholds vary by geographic
            region and vector species.
          </p>
          <div className="my-3 p-2 bg-muted rounded-md text-center">
            <img
              src="/lab5/ndvi-map-vegetation-density-red-points.jpg"
              alt="Normalized Difference Vegetation Index (NDVI) map showing varying vegetation density across a geographical region, marked with red data points."
              className="mx-auto rounded-md max-w-lg h-auto"
            />
            <p className="text-xs text-muted-foreground mt-1 font-sans">
              Normalized Difference Vegetation Index (NDVI) map showing varying vegetation density.
            </p>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Precipitation patterns influence malaria transmission through multiple pathways including creation of
            breeding sites, provision of humidity for adult mosquito survival, and seasonal synchronization of vector
            population dynamics. CHIRPS precipitation data provides high-resolution rainfall estimates that enable
            detailed analysis of temporal and spatial patterns relevant to mosquito breeding cycles. The relationship
            between rainfall and malaria transmission follows complex non-linear patterns, with both insufficient and
            excessive precipitation potentially limiting transmission through different mechanisms.
          </p>
          <div className="my-3 p-2 bg-muted rounded-md text-center">
            <img
              src="/lab5/africa-rainfall-estimates-cloudinary.jpg"
              alt="Rainfall estimates across the African continent, with darker shades indicating higher precipitation."
              className="mx-auto rounded-md max-w-lg h-auto"
            />
            <p className="text-xs text-muted-foreground mt-1 font-sans">
              Rainfall estimates across the African continent.
            </p>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            The integration of multiple environmental variables requires careful consideration of scale, temporal
            alignment, and ecological relevance to disease transmission processes. Preprocessing steps including
            temporal aggregation, spatial resampling, and normalization ensure that variables contribute appropriately
            to clustering outcomes. Advanced approaches may incorporate additional variables such as temperature,
            elevation, land use patterns, and human population density to create more comprehensive risk assessments.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">
            2.3 Spatial Scale and Temporal Dynamics in Risk Assessment
          </h4>
          <p className="text-muted-foreground leading-relaxed">
            Environmental risk assessment for vector-borne diseases requires careful consideration of spatial and
            temporal scales that align with ecological processes and operational decision-making needs. Mosquito
            breeding sites typically operate at scales of meters to kilometers, while population-level transmission
            patterns may be relevant at district or regional scales. The choice of spatial resolution for clustering
            analysis must balance ecological relevance with computational efficiency and data availability.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Temporal dynamics in environmental risk assessment reflect seasonal patterns of transmission that vary with
            climate cycles, vector phenology, and human activities. Annual aggregation of environmental variables
            provides baseline risk assessment capabilities, while seasonal or monthly analysis enables identification of
            temporal patterns relevant for intervention timing and early warning systems. Multi-year analysis can reveal
            longer-term trends associated with climate change or land use modifications that may influence transmission
            patterns.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The integration of spatial and temporal analysis enables development of dynamic risk assessment systems that
            can adapt to changing environmental conditions and support real-time decision-making. Cloud-based platforms
            like Google Earth Engine provide the computational infrastructure necessary for processing large-scale
            spatiotemporal datasets and implementing sophisticated analytical workflows. These capabilities are
            essential for operational applications that require regular updates and responsive adaptation to changing
            conditions.
          </p>
        </div>
      </CardContent>
    </Card>

    {/* Section 3: Google Earth Engine Machine Learning Implementation */}
    <Card id="lab5-gee-ml" className="mb-6 bg-card/80 scroll-mt-20">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <Cpu className="mr-2 h-6 w-6 text-blue-400" />
          3. Google Earth Engine Machine Learning Implementation
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-base">
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">3.1 Platform Capabilities and Data Access</h4>
          <p className="text-muted-foreground mb-2 leading-relaxed">
            Google Earth Engine provides unprecedented access to planetary-scale environmental datasets and
            computational resources necessary for large-scale machine learning applications. The platform's data catalog
            includes over 900 datasets spanning more than 40 years of satellite observations, enabling comprehensive
            environmental analysis across multiple spatial and temporal scales. For malaria risk assessment, key
            datasets include MODIS vegetation indices at 250-meter resolution and CHIRPS precipitation data at
            5.5-kilometer resolution, both providing the environmental variables necessary for clustering analysis.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The platform's cloud-based architecture eliminates traditional barriers associated with satellite data
            acquisition, storage, and processing, enabling researchers in resource-limited settings to conduct
            sophisticated analyses without requiring local computational infrastructure. Built-in machine learning
            algorithms including K-means clustering, Random Forest, and Support Vector Machine classifiers provide
            ready-to-use tools for environmental classification and risk assessment. The JavaScript and Python APIs
            enable flexible development of custom analytical workflows while maintaining access to Google's
            computational infrastructure.
          </p>
          <div className="my-3 p-2 bg-muted rounded-md text-center">
            <img
              src="/lab5/satellite-data-integration-malaria-risk.png"
              alt="Integration of Satellite Data Sources for AI-Based Malaria Risk Assessment"
              className="mx-auto rounded-md max-w-lg h-auto"
            />
            <p className="text-xs text-muted-foreground mt-1 font-sans">
              Integration of Satellite Data Sources for AI-Based Malaria Risk Assessment.
            </p>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Integration capabilities with external platforms including QGIS, R, and Python enable seamless workflows
            that combine Earth Engine's processing power with specialized analytical tools and visualization
            capabilities. Export functions support multiple formats including GeoTIFF, Shapefile, and CSV, ensuring
            compatibility with downstream analysis and decision support systems. The platform's sharing and
            collaboration features facilitate reproducible research and enable capacity building through code sharing
            and educational applications.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">
            3.2 Clustering Algorithm Implementation and Optimization
          </h4>
          <p className="text-muted-foreground leading-relaxed">
            Google Earth Engine's implementation of K-means clustering provides efficient processing of large satellite
            datasets through distributed computing and optimized algorithms. The basic workflow involves loading and
            preprocessing environmental data, generating training samples, training the clustering algorithm, and
            applying the classifier to create risk zone maps. Parameter optimization including cluster number selection,
            sample size determination, and spatial resolution choices significantly influence clustering outcomes and
            computational efficiency.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Training sample generation strategies must balance representativeness with computational efficiency,
            typically using random sampling with 1000-5000 points for country-scale analysis. Stratified sampling
            approaches can ensure representation across environmental gradients, while systematic sampling provides more
            spatially distributed coverage. Sample size affects both clustering accuracy and computational time,
            requiring optimization based on dataset characteristics and analytical objectives.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Performance optimization techniques include spatial and temporal filtering to reduce data volume,
            appropriate coordinate reference system selection for accurate distance calculations, and memory management
            strategies for large datasets. Advanced implementations may incorporate preprocessing steps such as cloud
            masking, outlier detection, and data quality assessment to improve clustering accuracy. Parallel processing
            capabilities within Earth Engine enable efficient handling of continental or global-scale analyses.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">3.3 Validation and Quality Assessment</h4>
          <p className="text-muted-foreground leading-relaxed">
            Validation of unsupervised clustering results requires multiple approaches including statistical metrics,
            domain knowledge assessment, and comparison with independent datasets where available. Internal validation
            metrics such as within-cluster sum of squares, silhouette scores, and cluster separation indices provide
            quantitative assessment of clustering quality. These metrics help determine optimal cluster numbers and
            identify potential issues with clustering results.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            External validation through comparison with epidemiological data, expert knowledge, or field observations
            provides assessment of ecological and public health relevance. Areas identified as high-risk based on
            environmental clustering should correspond to known transmission patterns or areas with favorable ecological
            conditions for vector populations. Discrepancies between environmental risk and observed transmission
            patterns may indicate the influence of interventions, surveillance gaps, or additional factors not captured
            in the environmental analysis.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Sensitivity analysis through parameter variation, temporal stability assessment, and cross-validation with
            different time periods provides insight into clustering robustness and reliability. Geographic validation
            across different regions or ecological zones helps assess the generalizability of clustering approaches and
            identifies potential limitations. Documentation of validation results and limitations ensures appropriate
            interpretation and application of clustering outcomes.
          </p>
        </div>
      </CardContent>
    </Card>

    {/* Section 4: Comprehensive AI-Assisted Tutorial Implementation */}
    <h2 id="lab5-tutorial" className="font-sans text-3xl font-bold mt-10 mb-6 text-center text-primary scroll-mt-20">
      4. Comprehensive AI-Assisted Tutorial Implementation
    </h2>
    <Card className="mb-6 bg-card/90">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <TerminalSquare className="mr-2 h-6 w-6 text-purple-400" />
          4.1 Environment Setup and ChatGPT Integration
        </CardTitle>
      </CardHeader>
      <CardContent className="text-base">
        <p className="text-muted-foreground mb-3 leading-relaxed">
          The integration of ChatGPT with Google Earth Engine programming requires strategic planning and structured
          interaction to maximize learning outcomes and code quality. Begin by establishing clear learning objectives
          and identifying specific analytical goals for your malaria risk assessment project. Open both Google Earth
          Engine (code.earthengine.google.com) and ChatGPT (chat.openai.com) in separate browser tabs to enable
          efficient iterative development between AI assistance and code testing.
        </p>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Effective AI-assisted learning begins with context-setting prompts that establish the analytical framework and
          technical requirements. Inform ChatGPT about your project objectives, geographic area of interest, technical
          skill level, and specific learning goals to enable more targeted and appropriate assistance. The initial
          prompt should clearly specify the integration of MODIS NDVI data, CHIRPS precipitation data, and K-means
          clustering for malaria risk assessment, providing the necessary context for generating relevant code examples.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Create a structured workspace within Google Earth Engine by organizing scripts, importing necessary libraries,
          and establishing consistent coding practices that facilitate collaboration and reproducibility. Save your
          project with descriptive names and maintain version control through Earth Engine's script management system.
          This organized approach enables more effective AI assistance by providing clear context for debugging and
          enhancement requests.
        </p>
      </CardContent>
    </Card>
    <Card className="mb-6 bg-card/90">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <Code2 className="mr-2 h-6 w-6 text-primary" />
          4.2 Initial Code Generation and Testing
        </CardTitle>
      </CardHeader>
      <CardContent className="text-base">
        <p className="text-muted-foreground mb-3 leading-relaxed">
          The first step in AI-assisted clustering implementation involves generating foundational code that loads and
          processes environmental datasets for your study area. Use structured prompts that specify data sources,
          temporal periods, geographic boundaries, and processing requirements to ensure ChatGPT generates appropriate
          and functional code. Request comprehensive commenting and explanation to support learning and understanding of
          Earth Engine API functions and clustering concepts.
        </p>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Begin with a basic implementation that loads MODIS NDVI data for a single year, processes CHIRPS precipitation
          data, and combines these datasets for clustering analysis. Test the generated code incrementally, starting
          with data loading functions before proceeding to more complex processing steps. This approach enables early
          identification of errors and facilitates iterative improvement through targeted AI assistance.
        </p>
        <CodeBlockPlaceholder language="javascript" title="GEE Code: Load & Prep Data (Conceptual)">
          {`// Prompt to ChatGPT:
// "Generate GEE JavaScript to:
// 1. Load MODIS NDVI (MOD13Q1) for Uganda, 2022, calculate mean.
// 2. Load CHIRPS Daily rainfall for Uganda, 2022, calculate annual sum.
// 3. Combine mean NDVI and total rainfall into a single image.
// 4. Clip to Uganda boundary ('USDOS/LSIB_SIMPLE/2017').
// 5. Print the combined image and display NDVI."

// --- Example GEE Code (Illustrative) ---
var uganda = ee.FeatureCollection('USDOS/LSIB_SIMPLE/2017')
  .filter(ee.Filter.eq('country_na', 'Uganda'));

var modisNDVI = ee.ImageCollection('MODIS/006/MOD13Q1')
  .filterDate('2022-01-01', '2022-12-31')
  .select('NDVI')
  .mean()
  .multiply(0.0001); // Scale factor

var chirpsRain = ee.ImageCollection('UCSB-CHG/CHIRPS/DAILY')
  .filterDate('2022-01-01', '2022-12-31')
  .sum();

var combined = ee.Image.cat([modisNDVI, chirpsRain])
  .rename(['ndvi', 'rainfall'])
  .clip(uganda);

print('Combined Environmental Data:', combined);
Map.centerObject(uganda, 6);
Map.addLayer(combined.select('ndvi'), {min:0, max:1, palette:['beige','lightgreen','green','darkgreen']}, 'Mean NDVI 2022');`}
        </CodeBlockPlaceholder>
        <p className="text-muted-foreground leading-relaxed">
          Common initial challenges include dataset ID specifications, temporal filtering syntax, geographic boundary
          definition, and coordinate reference system consistency. Use specific error messages and problematic code
          sections in follow-up prompts to ChatGPT for targeted debugging assistance. Request explanations for
          corrections to support learning and prevent similar issues in future development.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Monitor memory usage and processing time during initial testing to identify potential optimization needs.
          Earth Engine's computational limitations may require modifications to spatial resolution, temporal extent, or
          sampling strategies, which can be addressed through AI-assisted optimization prompts. Document successful
          parameter combinations and optimization strategies for future reference and sharing.
        </p>
      </CardContent>
    </Card>
    <Card className="mb-6 bg-card/90">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <Zap className="mr-2 h-6 w-6 text-yellow-500" />
          4.3 Clustering Implementation and Parameter Optimization
        </CardTitle>
      </CardHeader>
      <CardContent className="text-base">
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Implement K-means clustering through Earth Engine's built-in machine learning functions, beginning with basic
          parameter settings and systematically optimizing for your specific application. Use ChatGPT to generate code
          that creates training samples, configures clustering parameters, and applies the trained algorithm to your
          environmental dataset. Request multiple approaches to parameter selection including statistical methods and
          domain knowledge guidance.
        </p>
        <CodeBlockPlaceholder language="javascript" title="GEE Code: K-means Clustering (Conceptual)">
          {`// Prompt to ChatGPT:
// "Using the 'combined' image from previous step:
// 1. Generate 1000 random training points within Uganda.
// 2. Train a K-means classifier (ee.Clusterer.wekaKMeans) with 5 clusters.
// 3. Apply the classifier to the 'combined' image.
// 4. Display the clustered image with a distinct color palette."

// --- Example GEE Code (Illustrative) ---
var training = combined.sample({
  region: uganda.geometry(),
  scale: 1000, // Adjust scale for performance
  numPixels: 1000
});

var clusterer = ee.Clusterer.wekaKMeans(5).train(training);
var result = combined.cluster(clusterer);

Map.addLayer(result.randomVisualizer(), {}, 'Environmental Clusters');`}
        </CodeBlockPlaceholder>
        <p className="text-muted-foreground leading-relaxed">
          Cluster number selection represents a critical decision that significantly influences risk assessment outcomes
          and interpretation. Generate code that tests multiple cluster numbers (typically 3-7 for malaria risk
          assessment) and implements validation metrics to support decision-making. Use AI assistance to implement
          silhouette analysis, within-cluster sum of squares calculations, and domain-specific validation approaches.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Sample size optimization balances computational efficiency with clustering accuracy, typically ranging from
          1000-5000 points for national-scale analysis. Request ChatGPT assistance for implementing adaptive sampling
          strategies that ensure representation across environmental gradients while maintaining computational
          efficiency. Test different sampling approaches including random, stratified, and systematic methods to
          identify optimal strategies for your specific application.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Spatial resolution choices affect both clustering detail and computational requirements, requiring careful
          balance between analytical precision and operational feasibility. Use AI assistance to implement
          multi-resolution analysis that compares clustering outcomes at different spatial scales. This approach enables
          identification of scale-dependent patterns and supports selection of appropriate resolution for operational
          applications.
        </p>
      </CardContent>
    </Card>
    <Card className="mb-6 bg-card/90">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <Palette className="mr-2 h-6 w-6 text-orange-400" />
          4.4 Visualization and Export Configuration
        </CardTitle>
      </CardHeader>
      <CardContent className="text-base">
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Develop comprehensive visualization capabilities that support both analytical interpretation and communication
          to diverse stakeholders. Use ChatGPT to generate code for customized color schemes that represent risk levels
          intuitively, with appropriate legends, labels, and cartographic elements. Request multiple visualization
          approaches including continuous and categorical representations to support different analytical needs.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Interactive visualization capabilities enable exploration of clustering results and support quality assessment
          through visual inspection. Generate code for overlay capabilities that combine clustering results with
          administrative boundaries, population data, and existing epidemiological information. These integrated
          visualizations provide context for interpreting environmental risk patterns and identifying priority areas for
          intervention.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Export configuration must support diverse downstream applications including QGIS integration, statistical
          analysis, and operational decision support systems. Use AI assistance to implement flexible export functions
          that provide multiple formats, appropriate metadata, and consistent spatial reference systems. Automated
          export workflows enable regular updates and operational implementation of clustering results.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Quality control visualization includes maps of input data, intermediate processing results, and final
          clustering outcomes to support validation and interpretation. Generate code for statistical summaries, cluster
          statistics, and validation metrics that provide quantitative assessment of clustering quality. These materials
          support both technical validation and communication to non-technical stakeholders.
        </p>
      </CardContent>
    </Card>
    <Card className="mb-6 bg-card/90">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <BookOpen className="mr-2 h-6 w-6 text-blue-500" />
          4.5 Advanced Enhancement and Integration
        </CardTitle>
      </CardHeader>
      <CardContent className="text-base">
        <p className="text-muted-foreground mb-3 leading-relaxed">
          Enhance basic clustering implementation with advanced features including temporal analysis, multi-variable
          integration, and predictive capabilities. Use ChatGPT to generate code for time-series clustering that
          identifies seasonal patterns and long-term trends in environmental risk. These capabilities support
          development of early warning systems and climate change adaptation planning.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Integration with external datasets including population data, health facility locations, and intervention
          coverage enables comprehensive risk assessment that considers multiple determinants of transmission. Request
          AI assistance for spatial join operations, proximity analysis, and multi-criteria assessment approaches that
          combine environmental clustering with operational considerations. These integrated analyses provide more
          actionable intelligence for malaria control programs.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Automated quality control and validation routines ensure consistent and reliable clustering results across
          different time periods and geographic areas. Generate code for outlier detection, temporal consistency
          checking, and comparison with historical patterns. These quality assurance measures support operational
          implementation and build confidence in analytical results.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Documentation and metadata generation enable reproducible research and facilitate sharing with collaborators
          and stakeholders. Use AI assistance to create comprehensive documentation including methodology descriptions,
          parameter specifications, validation results, and usage guidelines. This documentation supports sustainable
          implementation and knowledge transfer to local partners.
        </p>
      </CardContent>
    </Card>

    {/* Section 5: Advanced Analysis Techniques and Interpretation */}
    <Card id="lab5-advanced-analysis" className="mb-6 bg-card/80 scroll-mt-20">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <AreaChart className="mr-2 h-6 w-6 text-purple-400" />
          5. Advanced Analysis Techniques and Interpretation
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-base">
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">5.1 Multi-dimensional Environmental Risk Assessment</h4>
          <p className="text-muted-foreground mb-2 leading-relaxed">
            Advanced clustering applications extend beyond simple NDVI-rainfall combinations to incorporate multiple
            environmental variables that influence malaria transmission patterns. Integration of temperature data,
            elevation models, land use classifications, and hydrological variables creates more comprehensive
            environmental profiles that better capture the complexity of mosquito ecology. Use AI assistance to develop
            multi-variable clustering approaches that maintain interpretability while incorporating additional
            environmental dimensions.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Temporal clustering analysis reveals seasonal and inter-annual patterns in environmental risk that support
            intervention timing and early warning system development. Generate code for time-series clustering that
            identifies distinct seasonal patterns and anomalous conditions that may indicate elevated transmission risk.
            These capabilities enable proactive response to environmental conditions favorable for malaria transmission.
          </p>
          <div className="my-3 p-2 bg-muted rounded-md text-center">
            <img
              src="/lab5/kenya-malaria-risk-zones.png"
              alt="Maps of Kenya illustrating geographical features and malaria epidemiological risk zones."
              className="mx-auto rounded-md max-w-lg h-auto"
            />
            <p className="text-xs text-muted-foreground mt-1 font-sans">
              Maps of Kenya illustrating geographical features and malaria epidemiological risk zones.
            </p>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Hierarchical clustering approaches provide insight into the nested structure of environmental risk,
            revealing how broad regional patterns subdivide into local risk variations. Request ChatGPT assistance for
            implementing hierarchical clustering algorithms that complement K-means analysis and provide alternative
            perspectives on environmental risk patterns. These multi-scale approaches support decision-making at
            different administrative levels and enable targeted intervention strategies.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">5.2 Validation and Uncertainty Assessment</h4>
          <p className="text-muted-foreground leading-relaxed">
            Comprehensive validation of clustering results requires integration of multiple assessment approaches
            including statistical metrics, epidemiological validation, and expert knowledge evaluation. Generate code
            for computing cluster validity indices including silhouette scores, Calinski-Harabasz indices, and
            Davies-Bouldin indices that provide quantitative assessment of clustering quality. These metrics support
            parameter optimization and enable comparison of different clustering approaches.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Cross-validation approaches using different time periods, geographic regions, or environmental datasets
            provide assessment of clustering stability and generalizability. Use AI assistance to implement temporal
            cross-validation that tests clustering consistency across multiple years and seasonal patterns. Geographic
            cross-validation assesses whether clustering approaches developed in one region transfer effectively to
            other areas with similar ecological conditions.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Uncertainty assessment acknowledges the inherent limitations of environmental data and clustering algorithms
            while providing bounds on risk estimates. Request code for implementing bootstrap sampling, sensitivity
            analysis, and confidence interval estimation that quantify uncertainty in clustering outcomes. These
            uncertainty measures support appropriate interpretation and application of clustering results in operational
            settings.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Epidemiological validation through comparison with disease surveillance data provides the ultimate test of
            clustering relevance for malaria control applications. Generate code for spatial overlay analysis that
            compares environmental risk clusters with reported malaria incidence, intervention coverage, and health
            facility utilization. Discrepancies between environmental risk and epidemiological patterns may indicate
            intervention effects, surveillance gaps, or additional risk factors not captured in environmental analysis.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">5.3 Seasonal Dynamics and Temporal Analysis</h4>
          <p className="text-muted-foreground leading-relaxed">
            Seasonal analysis of environmental clustering reveals temporal patterns that align with malaria transmission
            cycles and support intervention timing optimization. Use ChatGPT to generate code for seasonal aggregation
            of environmental variables, seasonal clustering analysis, and comparison of risk patterns across different
            time periods. These temporal approaches enable identification of peak transmission periods and support
            seasonal intervention strategies.
          </p>
          <div className="my-3 p-2 bg-muted rounded-md text-center">
            <img
              src="/lab5/seasonal-rainfall-anomaly-africa.png"
              alt="Map showing seasonal rainfall accumulation anomaly across Africa from October 2024 to May 2025, based on CHIRPS satellite data."
              className="mx-auto rounded-md max-w-lg h-auto"
            />
            <p className="text-xs text-muted-foreground mt-1 font-sans">
              Seasonal rainfall accumulation anomaly across Africa.
            </p>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Inter-annual variability analysis identifies long-term trends and climate anomalies that may influence
            malaria transmission patterns. Generate code for trend analysis, anomaly detection, and climate index
            integration that provides context for environmental risk assessment. These capabilities support climate
            change adaptation planning and enable early warning of unusual environmental conditions.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Real-time analysis capabilities enable operational implementation of environmental risk assessment for
            current conditions and short-term forecasting. Request AI assistance for developing automated workflows that
            process recent satellite data and generate updated risk assessments on regular schedules. These operational
            systems support responsive malaria control and enable evidence-based resource allocation.
          </p>
        </div>
      </CardContent>
    </Card>

    {/* Section 6: Professional Applications and Career Development */}
    <Card id="lab5-professional-dev" className="mb-6 bg-card/80 scroll-mt-20">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <UserCheck className="mr-2 h-6 w-6 text-indigo-400" />
          6. Professional Applications and Career Development
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-base">
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">6.1 Public Health Program Implementation</h4>
          <p className="text-muted-foreground mb-2 leading-relaxed">
            Environmental clustering analysis provides direct support for national malaria control programs through
            evidence-based targeting of interventions and resources. Integration of clustering results with program
            planning enables optimization of bed net distribution campaigns, indoor residual spraying programs, and case
            management strategies based on environmental risk patterns. The spatial precision of clustering analysis
            supports sub-district level targeting that maximizes intervention impact while optimizing resource
            allocation.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Early warning system development represents a critical application of environmental clustering for epidemic
            preparedness and response. Automated processing of satellite data combined with clustering analysis enables
            identification of environmental conditions favorable for malaria transmission before increases in case
            numbers become apparent through surveillance systems. These early warning capabilities support proactive
            deployment of prevention measures and enhanced surveillance activities.
          </p>
          <div className="my-3 p-2 bg-muted rounded-md text-center">
            <img
              src="/lab5/kmeans-malaria-risk-assessment-plot.png"
              alt="K-means Malaria Risk Assessment plot showing clusters based on NDVI and Precipitation."
              className="mx-auto rounded-md max-w-lg h-auto"
            />
            <p className="text-xs text-muted-foreground mt-1 font-sans">K-means Malaria Risk Assessment plot.</p>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Monitoring and evaluation of intervention programs benefits from environmental clustering through assessment
            of coverage patterns and identification of areas requiring enhanced intervention intensity. Integration of
            clustering results with intervention monitoring data enables assessment of whether high-risk areas are
            receiving appropriate intervention coverage. This analytical capability supports adaptive management
            approaches that respond to changing environmental and epidemiological conditions.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">6.2 Research and Academic Applications</h4>
          <p className="text-muted-foreground leading-relaxed">
            Academic research applications of environmental clustering span multiple disciplines including spatial
            epidemiology, environmental health, and climate science. Researchers can use clustering approaches to
            investigate relationships between environmental change and disease patterns, evaluate intervention
            effectiveness, and develop predictive models for future transmission scenarios. The accessibility of
            AI-assisted programming enables researchers in resource-limited settings to conduct sophisticated analyses
            without requiring extensive programming expertise.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Climate change research applications include assessment of changing environmental suitability for malaria
            transmission under different climate scenarios. Long-term clustering analysis can identify shifting
            transmission zones, changing seasonal patterns, and emerging risk areas that require enhanced surveillance
            and control efforts. These research applications provide critical information for adaptation planning and
            resource allocation under changing environmental conditions.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Methodological research focuses on improving clustering algorithms, validation approaches, and integration
            with other analytical methods. AI-assisted programming enables rapid prototyping of new approaches and
            comparison of different methodological alternatives. These research activities contribute to the broader
            development of spatial analytical tools for environmental health applications.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">6.3 Technology Transfer and Capacity Building</h4>
          <p className="text-muted-foreground leading-relaxed">
            Knowledge transfer to national health systems requires development of user-friendly tools and training
            programs that enable local implementation of clustering approaches. AI-assisted programming facilitates
            development of simplified interfaces and automated workflows that reduce technical barriers to
            implementation. These capacity building efforts support sustainable implementation and local ownership of
            analytical capabilities.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Educational applications include development of training materials, workshops, and online courses that teach
            environmental clustering concepts and implementation techniques. The combination of AI assistance with
            hands-on practice provides effective learning approaches that build both conceptual understanding and
            practical skills. These educational resources support development of local expertise and sustainable
            capacity for environmental health analysis.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Collaboration networks enable sharing of code, data, and analytical approaches across institutions and
            countries. AI-assisted programming facilitates standardization of analytical workflows and enables
            collaborative development of improved methods. These collaborative approaches accelerate methodological
            development and support global capacity building for environmental health surveillance.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">6.4 Career Pathways and Professional Development</h4>
          <p className="text-muted-foreground leading-relaxed">
            Skills developed through AI-assisted environmental clustering provide foundations for careers in spatial
            epidemiology, environmental health assessment, and global health program management. The combination of
            machine learning expertise with public health knowledge creates unique professional capabilities that are
            increasingly valued in global health organizations. Career opportunities include positions with
            international organizations, government health agencies, academic institutions, and technology companies
            focused on health applications.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Professional development pathways include advanced training in machine learning, spatial analysis, and
            public health applications. The rapid evolution of AI tools requires continuous learning and adaptation to
            new capabilities and best practices. Professional networks and continuing education opportunities support
            career advancement and knowledge sharing across the environmental health community.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Entrepreneurial opportunities include development of consulting services, software tools, and analytical
            platforms that serve the growing market for environmental health assessment. The combination of technical
            skills with domain expertise enables development of innovative solutions that address real-world public
            health challenges. These entrepreneurial pathways contribute to the broader ecosystem of tools and services
            that support global health improvement.
          </p>
        </div>
      </CardContent>
    </Card>

    {/* Section 7: Methodological Considerations and Future Directions */}
    <Card id="lab5-methodology" className="mb-6 bg-card/80 scroll-mt-20">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <FlaskConical className="mr-2 h-6 w-6 text-red-400" />
          7. Methodological Considerations and Future Directions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-base">
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">7.1 Limitations and Validation Requirements</h4>
          <p className="text-muted-foreground mb-2 leading-relaxed">
            Environmental clustering approaches must acknowledge inherent limitations including data quality
            constraints, algorithm assumptions, and ecological complexity that may not be fully captured in
            satellite-derived variables. MODIS NDVI data quality can be affected by cloud contamination, atmospheric
            interference, and seasonal vegetation changes that may not directly relate to mosquito habitat suitability.
            CHIRPS precipitation estimates vary in accuracy depending on ground station density and may not capture
            localized rainfall patterns that influence breeding site availability.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            K-means clustering assumes spherical clusters and similar cluster sizes, which may not reflect the complex,
            irregular patterns of environmental suitability for malaria transmission. The algorithm's sensitivity to
            initialization and outliers requires careful parameter selection and validation to ensure robust results.
            Alternative clustering approaches including hierarchical clustering, density-based clustering, or mixture
            model approaches may provide different perspectives on environmental risk patterns.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Validation requirements include both internal cluster validation using statistical metrics and external
            validation through comparison with epidemiological data and expert knowledge. The lack of comprehensive
            epidemiological surveillance data in many malaria-endemic areas limits opportunities for external validation
            and requires careful interpretation of clustering results. Temporal validation across multiple years and
            seasonal patterns provides assessment of clustering stability and reliability.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">7.2 Integration with Emerging Technologies</h4>
          <p className="text-muted-foreground leading-relaxed">
            Machine learning advances including deep learning, ensemble methods, and automated feature selection offer
            opportunities for improving environmental risk assessment accuracy and reducing parameter dependence.
            Integration of convolutional neural networks with satellite imagery analysis may enable more sophisticated
            pattern recognition and feature extraction. Ensemble clustering approaches that combine multiple algorithms
            and parameter settings can provide more robust risk assessments.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Real-time data streams from weather stations, mobile phone data, and social media platforms offer
            opportunities for enhancing environmental clustering with additional information sources. Internet of Things
            (IoT) sensors deployed in field settings can provide ground-truth data for validating satellite-derived
            environmental indicators. These emerging data sources require development of new integration and analysis
            approaches.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Cloud computing advances enable increasingly sophisticated analysis of planetary-scale datasets and support
            development of operational monitoring systems. Edge computing capabilities may enable local processing and
            real-time analysis in resource-limited settings. These technological advances create opportunities for more
            responsive and locally relevant environmental health surveillance.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-semibold text-xl mb-2">7.3 Policy and Implementation Considerations</h4>
          <p className="text-muted-foreground leading-relaxed">
            Policy applications of environmental clustering require consideration of decision-making contexts, resource
            constraints, and implementation feasibility. Results must be presented in formats and at scales that align
            with administrative structures and planning processes. Integration with existing health information systems
            requires compatibility with current data formats and analytical workflows.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Implementation challenges include technical capacity building, infrastructure requirements, and sustainable
            financing for operational systems. Success requires collaboration between technical specialists, public
            health professionals, and policy makers to ensure that analytical capabilities align with operational needs.
            Training programs and technical assistance must address both analytical skills and institutional capacity
            for sustained implementation.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Ethical considerations include data privacy, community consent, and equitable access to benefits from
            environmental health surveillance. International collaboration and data sharing require careful attention to
            sovereignty and local ownership of analytical capabilities. These ethical considerations become increasingly
            important as analytical capabilities expand and become more operationally relevant.
          </p>
        </div>
      </CardContent>
    </Card>

    {/* Section 8: Conclusion and Future Impact */}
    <Card id="lab5-conclusion" className="my-6 bg-card/80 scroll-mt-20">
      <CardHeader>
        <CardTitle className="flex items-center font-sans">
          <Award className="mr-2 h-6 w-6 text-teal-400" />
          8. Conclusion and Future Impact
        </CardTitle>
      </CardHeader>
      <CardContent className="text-base">
        <p className="text-muted-foreground mb-2 leading-relaxed">
          This comprehensive tutorial demonstrates the transformative potential of AI-assisted machine learning for
          environmental health surveillance through the integration of advanced clustering algorithms with
          satellite-based environmental monitoring. The combination of Google Earth Engine's planetary-scale computing
          capabilities with ChatGPT's intelligent programming assistance creates unprecedented opportunities for rapid
          development of sophisticated analytical tools that can significantly improve malaria surveillance and control
          effectiveness. The skills and methodological approaches developed through this tutorial provide a foundation
          for addressing complex environmental health challenges that require integration of multiple data sources and
          analytical approaches.
        </p>
        <p className="text-muted-foreground mb-2 leading-relaxed">
          The democratization of advanced machine learning capabilities through AI-assisted programming has profound
          implications for global health equity and local capacity building. Researchers and public health professionals
          in resource-limited settings can now access and implement analytical approaches that were previously available
          only to well-resourced institutions with extensive technical expertise. This technological democratization
          supports development of locally relevant solutions and enables indigenous research leadership that can enhance
          the sustainability and cultural appropriateness of environmental health interventions.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Future applications of these AI-assisted clustering approaches will likely expand to include real-time
          environmental monitoring systems, integration with mobile health technologies, and development of predictive
          models that combine environmental data with social, economic, and behavioral indicators of disease risk. The
          rapid advancement of machine learning algorithms, satellite sensor technologies, and AI programming assistance
          tools ensures that the capabilities demonstrated in this tutorial represent the foundation for increasingly
          sophisticated analytical approaches. As environmental conditions continue to change due to climate change and
          human activities, the importance of intelligent environmental health surveillance will only increase, making
          these skills essential for future public health professionals working in malaria-endemic regions.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          The integration of environmental clustering with broader health system strengthening efforts provides
          opportunities to address multiple health challenges simultaneously while building local analytical capacity
          that supports sustainable disease control programs. The evidence-based approach demonstrated in this tutorial
          contributes to the broader goal of achieving universal health coverage and health equity through more
          effective targeting of limited resources and more responsive public health systems that adapt to changing
          environmental and epidemiological conditions. Through the strategic application of artificial intelligence and
          machine learning to environmental health challenges, this tutorial provides the foundation for a new
          generation of public health professionals equipped with the analytical tools necessary to address the complex
          health challenges of the 21st century.
        </p>
      </CardContent>
    </Card>
    <hr className="my-8 border-dashed" />
  </div>
)

const labSpecificContent: Record<string, ReactNode> = {
  lab1: lab1Content,
  lab2: lab2Content,
  lab3: lab3Content,
  lab4: lab4Content,
  lab5: lab5Content,
}

export default async function LabPage({ params }: { params: Promise<{ labId: string }> }) {
  const { labId } = await params
  const lab = labsData.find((l) => l.id === labId)

  if (!lab) {
    notFound()
  }

  const IconComponent = lab.icon || Laptop

  const lab1Features = [
    {
      title: "Public Health Context",
      description: "Understand the real-world impact of malaria in Uganda.",
      icon: Globe,
      href: "#lab1-introduction",
    },
    {
      title: "GIS & QGIS Fundamentals",
      description: "Learn the core concepts and tools you'll be using.",
      icon: BookOpen,
      href: "#lab1-fundamentals",
    },
    {
      title: "Step-by-Step Mapping Tutorial",
      description: "Follow a detailed guide to create your first choropleth map.",
      icon: ListOrdered,
      href: "#lab1-tutorial",
    },
    {
      title: "Advanced Analysis Preview",
      description: "Get a glimpse into more complex spatial analysis methods.",
      icon: Zap,
      href: "#lab1-advanced",
    },
    {
      title: "Applications & Use Cases",
      description: "See how GIS mapping supports public health decisions.",
      icon: Briefcase,
      href: "#lab1-applications",
    },
    {
      title: "Extension Challenges",
      description: "Test your new skills with optional, more difficult tasks.",
      icon: GraduationCap,
      href: "#lab1-challenges",
    },
  ]

  const lab2Features = [
    {
      title: "Healthcare Accessibility & Spatial Analysis",
      description: "Grasp the critical role of spatial access in public health and Uganda's health system.",
      icon: HeartPulse,
      href: "#lab2-introduction",
    },
    {
      title: "Buffer Analysis & Spatial Query Theory",
      description: "Understand the core GIS techniques for accessibility measurement.",
      icon: Layers,
      href: "#lab2-theory",
    },
    {
      title: "QGIS Tutorial: Health Facility Access",
      description: "A comprehensive step-by-step guide to performing access analysis.",
      icon: ListOrdered,
      href: "#lab2-tutorial",
    },
    {
      title: "Advanced Analysis & Interpretation",
      description: "Explore patterns, disparities, and population-level metrics.",
      icon: BarChart3,
      href: "#lab2-advanced-analysis",
    },
    {
      title: "Policy Implications & Applications",
      description: "Learn how analysis informs health planning and equity.",
      icon: ShieldCheck,
      href: "#lab2-policy",
    },
    {
      title: "Methodology & Limitations",
      description: "Understand assumptions, data quality, and future enhancements.",
      icon: AlertTriangle,
      href: "#lab2-methodology",
    },
  ]

  const lab3Features = [
    {
      title: "Environmental Epidemiology & Remote Sensing",
      description: "Explore malaria's environmental links and remote sensing's role.",
      icon: TestTube,
      href: "#lab3-introduction",
    },
    {
      title: "Theoretical Foundations of Risk Assessment",
      description: "Understand NDVI, precipitation, and their integration for risk.",
      icon: Sigma,
      href: "#lab3-theory",
    },
    {
      title: "Google Earth Engine Tutorial",
      description: "Step-by-step guide to GEE for environmental risk mapping.",
      icon: TerminalSquare,
      href: "#lab3-tutorial",
    },
    {
      title: "Advanced Analysis & Interpretation",
      description: "Delve into temporal dynamics and spatial heterogeneity.",
      icon: Waypoints,
      href: "#lab3-advanced",
    },
    {
      title: "Professional Applications",
      description: "See how GEE skills apply in public health and research.",
      icon: Users,
      href: "#lab3-applications",
    },
    {
      title: "Methodology & Future Directions",
      description: "Consider data quality, tech advances, and global health integration.",
      icon: Settings2,
      href: "#lab3-methodology",
    },
    {
      title: "Conclusion & Impact",
      description: "Summarize learnings and professional impact.",
      icon: Award,
      href: "#lab3-conclusion",
    },
  ]

  const lab4Features = [
    {
      title: "Intro to AI-Assisted Programming",
      description: "Discover the revolution of AI in environmental science programming.",
      icon: Brain,
      href: "#lab4-introduction",
    },
    {
      title: "Understanding ChatGPT for GEE",
      description: "Learn how ChatGPT translates language to code, explains, and debugs.",
      icon: Bot,
      href: "#lab4-chatgpt",
    },
    {
      title: "GEE-Specific AI Applications",
      description: "Explore AI use in satellite data, spatial analysis, and monitoring.",
      icon: Cloud,
      href: "#lab4-gee-ai-apps",
    },
    {
      title: "Prompt Engineering Best Practices",
      description: "Master constructing effective prompts for Earth Engine tasks.",
      icon: MessageSquare,
      href: "#lab4-prompt-engineering",
    },
    {
      title: "Step-by-Step AI Implementation",
      description: "Follow a tutorial for your first AI-generated GEE code.",
      icon: ListOrdered,
      href: "#lab4-tutorial",
    },
    {
      title: "Advanced Analysis with AI",
      description: "Leverage AI for change detection, ML, and scalable workflows.",
      icon: GitBranch,
      href: "#lab4-advanced-analysis",
    },
    {
      title: "Professional Development",
      description: "Build expertise and explore career applications.",
      icon: UserCheck,
      href: "#lab4-professional-dev",
    },
    {
      title: "Ethical Considerations",
      description: "Understand responsible AI use and academic integrity.",
      icon: ShieldAlert,
      href: "#lab4-ethics",
    },
  ]

  const lab5Features = [
    {
      title: "Intro to ML Revolution in Surveillance",
      description: "Explore AI and unsupervised learning in disease monitoring.",
      icon: LightbulbIcon,
      href: "#lab5-introduction",
    },
    {
      title: "Theoretical Foundations of Clustering",
      description: "Understand K-means, environmental variables, and risk assessment.",
      icon: Sigma,
      href: "#lab5-theory",
    },
    {
      title: "GEE Machine Learning Implementation",
      description: "Learn GEE's ML capabilities, data access, and clustering.",
      icon: Cpu,
      href: "#lab5-gee-ml",
    },
    {
      title: "AI-Assisted Tutorial Implementation",
      description: "Step-by-step guide using ChatGPT for GEE clustering.",
      icon: TerminalSquare,
      href: "#lab5-tutorial",
    },
    {
      title: "Advanced Analysis & Interpretation",
      description: "Delve into multi-dimensional risk, validation, and temporal dynamics.",
      icon: AreaChart,
      href: "#lab5-advanced-analysis",
    },
    {
      title: "Professional Applications",
      description: "Discover uses in public health, research, and capacity building.",
      icon: Users,
      href: "#lab5-professional-dev",
    },
    {
      title: "Methodology & Future Directions",
      description: "Consider limitations, emerging tech, and policy implications.",
      icon: FlaskConical,
      href: "#lab5-methodology",
    },
    {
      title: "Conclusion & Future Impact",
      description: "Summarize learnings and the future of AI in environmental health.",
      icon: Award,
      href: "#lab5-conclusion",
    },
  ]

  let featuresForCurrentLab = []
  if (lab.id === "lab1") {
    featuresForCurrentLab = lab1Features
  } else if (lab.id === "lab2") {
    featuresForCurrentLab = lab2Features
  } else if (lab.id === "lab3") {
    featuresForCurrentLab = lab3Features
  } else if (lab.id === "lab4") {
    featuresForCurrentLab = lab4Features
  } else if (lab.id === "lab5") {
    featuresForCurrentLab = lab5Features
  }

  return (
    <div className="space-y-8">
      <header className="pb-6 border-b font-sans">
        <h1 className="text-4xl font-bold tracking-tight mb-2 flex items-center">
          <IconComponent className="mr-3 h-10 w-10 text-primary" />
          {lab.title}
        </h1>
        {lab.theme && <p className="text-lg text-accent mb-1">{lab.theme}</p>}
        <p className="text-lg text-muted-foreground">{lab.shortDescription}</p>
        <p className="text-sm text-muted-foreground mt-1">Day {lab.day}</p>
      </header>

      <PDFDownload labId={lab.id} />

      <Card className="bg-card/50 font-sans">
        <CardHeader>
          <CardTitle className="text-lg">Choose Your Learning Path</CardTitle>
        </CardHeader>
        <CardContent className="flex space-x-2">
          <Button variant="outline" className="bg-background text-foreground">
            Beginner Track
          </Button>
          <Button variant="outline" className="bg-background text-foreground">
            Intermediate Track
          </Button>
          <Button variant="outline" className="bg-background text-foreground">
            Advanced Track
          </Button>
        </CardContent>
      </Card>

      <section className="mt-10 font-sans">
        <h2 className="text-2xl font-semibold mb-6 text-center">Key Features in this Lab</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuresForCurrentLab.length > 0
            ? featuresForCurrentLab.map((feature) => (
                <a key={feature.title} href={feature.href} className="block">
                  <Card className="h-full bg-card/60 hover:bg-card/90 hover:shadow-primary/10 hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <feature.icon className="h-8 w-8 text-primary flex-shrink-0" />
                      <CardTitle className="text-base">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </a>
              ))
            : lab.specialFeatures?.map((feature, index) => (
                <Card key={index} className="bg-card/60">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <CheckSquare className="h-8 w-8 text-primary flex-shrink-0" /> {/* Default icon */}
                    <CardTitle className="text-base">{feature}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Explore this key aspect of {lab.title}.</p>
                  </CardContent>
                </Card>
              ))}
        </div>
      </section>

      {labSpecificContent[lab.id] || (
        <p className="text-muted-foreground font-serif text-lg">
          Detailed content for {lab.title} will be displayed here, following the interactive micro-learning module
          structure.
        </p>
      )}



      <Card className="mt-8 bg-card/50 font-sans">
        <CardHeader>
          <CardTitle className="text-lg">Your Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Skill Trees, Achievement Badges, Leaderboards (Conceptual Placeholders)
          </p>
          <div className="w-full bg-muted h-4 rounded-full mt-2 overflow-hidden">
            <div className="bg-primary h-4 w-1/3 rounded-full"></div> {/* Example progress */}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
