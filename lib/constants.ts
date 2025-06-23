import { HomeIcon, BookOpen, CalendarDays, Laptop, Target, type LucideIcon } from "lucide-react"

export type NavLink = {
  href: string
  label: string
  icon?: LucideIcon
}

export const siteConfig = {
  name: "GIS, AI & Public Health Workshop",
  navLinks: [
    { href: "/", label: "Home", icon: HomeIcon },
    { href: "/workshop-overview", label: "Workshop Overview", icon: BookOpen },
    { href: "/schedule", label: "3-Day Schedule", icon: CalendarDays },
    { href: "/labs", label: "Labs & Tutorials", icon: Laptop },
    { href: "/capstone-project", label: "Capstone Project", icon: Target },
    // { href: "/progress-dashboard", label: "Progress", icon: BarChart },
    // { href: "/community", label: "Community", icon: Users },
    // { href: "/resources", label: "Resources", icon: FolderArchive },
  ] as NavLink[],
}

export type LabInfo = {
  id: string
  day: number
  title: string
  shortDescription: string
  icon?: LucideIcon
  theme?: string
  objectivesFile?: string // Path to markdown file with objectives
  contentFile?: string // Path to markdown file with lab content
  specialFeatures?: string[]
}

export const labsData: LabInfo[] = [
  {
    id: "lab1",
    day: 1,
    title: "Lab 1: Malaria Mapping (QGIS)",
    shortDescription: "Load district shapefiles and join malaria CSV. Create choropleth maps.",
    icon: Laptop,
    objectivesFile: "lab1_objectives.md", // Placeholder
    // contentFile: "Lab_1_Enhanced_QGIS_Tutorial_M-8zib70jafffuLtcaf7TgH8Y3RxZOvn.md", // Content is in page.tsx
    specialFeatures: [
      "Interactive Tutorial Structure",
      "Introduction Video (3 min)",
      "Data Exploration Interface",
      "Step-by-Step Mapping Tutorial",
      "Interactive Verification Points",
      "Extension Challenges",
      "Public Health Context Integration (Dr. Sarah Nakimuli case study)",
    ],
  },
  {
    id: "lab2",
    day: 1,
    title: "Lab 2: Health Facility Access Analysis (QGIS)",
    shortDescription: "Load XY facility CSV, convert to points, buffer, and identify underserved areas.",
    icon: Laptop,
    // contentFile: "Lab_2 QGIS Health Facility Access Analysis Tuto-iojcTg5UjMssO66QdmEBC2mgRfUsrX.md", // Content is in page.tsx
    specialFeatures: [
      "Healthcare Accessibility Fundamentals",
      "Uganda's Health System Overview",
      "Buffer Analysis for Catchment Areas",
      "Spatial Queries for Underserved Areas",
      "Step-by-Step QGIS Workflow",
      "Health Facility Data Conversion & Visualization",
      "Compound Analysis (Access & Health Indicators)",
      "Professional Map Design in QGIS",
      "Health Equity & Policy Implications",
    ],
  },
  {
    id: "lab3",
    day: 2,
    title: "Lab 3: Environmental Risk Mapping (GEE)",
    shortDescription: "Load, clip, and display MODIS and CHIRPS datasets. Apply color ramps.",
    theme: "Harnessing Satellite Data and Artificial Intelligence",
    icon: Laptop,
    // contentFile: "Lab_3 Google Earth Engine Environmental Risk Ma-lkSA4ufmQIIsDrywvENcb2xklDepl1.md", // Content is in page.tsx
    specialFeatures: [
      "Live Code Editor (Browser-based GEE interface)",
      "Satellite Data Visualization (Real-time NDVI & rainfall)",
      "Interactive Parameter Adjustment (Sliders for date ranges)",
      "Google Earth Engine Integration",
      "Remote Sensing Tutorial",
      "NDVI Analysis Workshop",
      "Rainfall Pattern Analysis",
    ],
  },
  {
    id: "lab4",
    day: 2,
    title: "Lab 4: AI-Assisted Programming (GEE & ChatGPT)",
    shortDescription: "Write basic GEE scripts with ChatGPT. Learn debugging and explanation prompts.",
    theme: "Harnessing Satellite Data and Artificial Intelligence",
    icon: Laptop,
    // contentFile: "Lab_4 AI-Assisted Google Earth Engine Programmi-NlOoH9OcCkmzNMix9QyoCn0fm5BjV7.md", // Content is in page.tsx
    specialFeatures: [
      "Embedded ChatGPT Interface",
      "Smart Prompt Templates for GEE",
      "Code Explanation Engine",
      "Error Diagnosis & Suggested Fixes",
      "Intelligent Prompt Engineering",
      "Code Development Workshop",
      "Learning Scaffolding",
    ],
  },
  {
    id: "lab5",
    day: 2,
    title: "Lab 5: ML Risk Clustering (GEE)",
    shortDescription: "Stack NDVI and rainfall. Use k-means clustering to identify risk zones.",
    theme: "Harnessing Satellite Data and Artificial Intelligence",
    icon: Laptop,
    // contentFile: "Lab_5 AI-Based Clustering for Malaria Risk Mapp-VXxnKZTaqropoKVHsPalqxGYVFaqFk.md", // Content is now embedded
    specialFeatures: [
      "Interactive Algorithm Visualization (k-means)",
      "Parameter Experimentation (cluster numbers)",
      "Model Validation Tools (Silhouette analysis)",
      "Results Interpretation Guide",
      "Machine Learning Workshop",
      "Risk Assessment Framework",
      "Interactive Model Building",
      "Research Integration",
    ],
  },
]

export const capstoneProject = {
  title: "Day 3: Independent Research Projects",
  description: "Applying Spatial Tools to Public Health Challenges",
  platformFeatures: [
    "Project Selection Wizard: Guided topic selection",
    "Research Framework Templates: Scientific method scaffolding",
    "Live Collaboration Spaces: Real-time project sharing and feedback",
    "Presentation Builder: Automated poster and slide generation",
    "Portfolio Integration: Professional documentation and showcase",
    "Scientific method tutorial",
    "Research question development guide",
    "Hypothesis formation workshop",
    "Literature review tools",
    "Methodology selection assistance",
    "Timeline creation and tracking",
    "Integrated QGIS and GEE environments",
    "AI-assisted coding and debugging",
  ],
}
