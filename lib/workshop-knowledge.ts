/**
 * Comprehensive Workshop Knowledge Base
 * Includes workshop content, navigation, and extended GIS knowledge
 */

export interface KnowledgeItem {
  id: string
  title: string
  content: string
  source: "workshop" | "mgimond-spatial" | "qgis-tutor" | "gee-community"
  category: "concept" | "tutorial" | "navigation" | "installation" | "troubleshooting"
  topics: string[]
  difficulty: "beginner" | "intermediate" | "advanced"
  tutorGuidance?: string
  socraticQuestions?: string[]
}

// Comprehensive Knowledge Base
export const WORKSHOP_KNOWLEDGE_BASE: Record<string, KnowledgeItem> = {
  // Workshop Navigation and Structure
  "workshop_overview": {
    id: "workshop_overview",
    title: "GIS & AI Workshop Overview",
    content: `This 3-day workshop combines GIS fundamentals with AI-powered analysis for health geography applications.

**Workshop Structure:**
- **Day 1**: QGIS Fundamentals & Malaria Mapping
- **Day 2**: Environmental Risk Mapping with Google Earth Engine  
- **Day 3**: AI-Assisted Programming & Advanced Analysis

**Learning Objectives:**
- Master QGIS for health facility mapping
- Use Google Earth Engine for environmental analysis
- Apply AI tools for spatial analysis
- Develop malaria risk assessment models
- Create professional maps and visualizations`,
    source: "workshop",
    category: "navigation",
    topics: ["workshop", "overview", "structure", "schedule"],
    difficulty: "beginner",
    tutorGuidance: "Help students understand the big picture and how each component fits together",
    socraticQuestions: [
      "What aspects of this workshop interest you most?",
      "How might GIS help in your field of work?"
    ]
  },

  "day2_activities": {
    id: "day2_activities",
    title: "Day 2 Workshop Activities",
    content: `Day 2 focuses on Environmental Risk Mapping using Google Earth Engine and satellite data.

**Morning Session (9:00 AM - 12:00 PM):**
- **Lab 3**: Environmental Risk Mapping (GEE)
  - Introduction to Google Earth Engine
  - JavaScript fundamentals for GEE
  - Loading and visualizing satellite imagery
  - NDVI calculation for vegetation analysis

**Afternoon Session (1:00 PM - 5:00 PM):**
- **Lab 3 Continued**: Advanced GEE Analysis
  - Time series analysis
  - Climate data integration (CHIRPS precipitation)
  - Malaria risk factor mapping
  - Environmental correlation analysis

**Key Learning Outcomes:**
- Understand cloud-based remote sensing
- Calculate vegetation indices (NDVI)
- Analyze environmental factors affecting malaria
- Create risk assessment maps`,
    source: "workshop",
    category: "navigation",
    topics: ["day2", "schedule", "activities", "google earth engine", "lab3"],
    difficulty: "intermediate",
    tutorGuidance: "Guide students through the day's progression and help them prepare",
    socraticQuestions: [
      "What environmental factors do you think affect malaria transmission?",
      "How might satellite data help us understand disease patterns?"
    ]
  },

  // Core GIS Concepts
  "what_is_gis": {
    id: "what_is_gis",
    title: "What is GIS? - Geographic Information Systems",
    content: `GIS (Geographic Information Systems) is a technology that captures, stores, analyzes, and displays geographic information.

**Core Components of GIS:**
1. **Hardware**: Computers, GPS units, scanners
2. **Software**: QGIS, ArcGIS, Google Earth Engine
3. **Data**: Spatial data (where) + Attribute data (what)
4. **People**: Users, analysts, developers
5. **Methods**: Procedures for analysis and visualization

**What Makes GIS Special:**
- **Location-based**: Everything has a geographic component
- **Layered approach**: Combine different data types
- **Spatial analysis**: Understand patterns and relationships
- **Decision support**: Inform policy and planning

**GIS in Health Applications:**
- **Disease mapping**: Track outbreaks and patterns
- **Accessibility analysis**: Healthcare facility coverage
- **Environmental health**: Pollution, water quality
- **Resource allocation**: Optimize service delivery`,
    source: "workshop",
    category: "concept",
    topics: ["gis", "definition", "fundamentals", "health", "applications"],
    difficulty: "beginner",
    tutorGuidance: "Start with familiar examples, then build to technical concepts",
    socraticQuestions: [
      "Think about using GPS on your phone - how is that similar to GIS?",
      "What spatial questions do you encounter in your daily life?"
    ]
  },

  // QGIS Installation
  "qgis_installation": {
    id: "qgis_installation",
    title: "How to Install QGIS",
    content: `QGIS is free, open-source GIS software. Here's how to install it:

**Step 1: Download QGIS**
- Visit: https://qgis.org/en/site/forusers/download.html
- Choose your operating system (Windows, Mac, Linux)
- Download the Long Term Release (LTR) version for stability

**Step 2: Windows Installation**
1. Run the downloaded .exe file
2. Follow installation wizard
3. Accept default settings (recommended)
4. Installation takes 5-10 minutes

**Step 3: Mac Installation**
1. Open the downloaded .dmg file
2. Drag QGIS to Applications folder
3. First launch may require security permissions

**Step 4: Verify Installation**
- Open QGIS
- You should see the main interface
- Try loading a sample dataset

**System Requirements:**
- **RAM**: Minimum 4GB, recommended 8GB+
- **Storage**: 2GB free space
- **OS**: Windows 10+, macOS 10.14+, Linux`,
    source: "qgis-tutor",
    category: "installation",
    topics: ["qgis", "installation", "setup", "download"],
    difficulty: "beginner",
    tutorGuidance: "Walk through each step, address common installation issues",
    socraticQuestions: [
      "What operating system are you using?",
      "Have you installed other software before?"
    ]
  },

  // Workshop Navigation
  "crs_setup_location": {
    id: "crs_setup_location",
    title: "Where to Find CRS Setup Information",
    content: `Coordinate Reference System setup is covered in multiple locations in the workshop:

**Primary Location - Lab 1:**
- **Section**: "1.2 Setting Up Your GIS Environment"
- **Subsection**: "Coordinate Reference Systems for Uganda"
- **Page**: Lab 1, Step 2 of the tutorial
- **Direct Link**: Navigate to Labs & Tutorials → Lab 1 → Section 1.2

**What You'll Find:**
- Explanation of coordinate systems
- Uganda-specific CRS (EPSG:32636)
- Step-by-step QGIS setup
- Visual guides with screenshots

**Quick Navigation:**
1. Click "Labs & Tutorials" in main menu
2. Select "Lab 1: Malaria Mapping Fundamentals"
3. Scroll to "1.2 Setting Up Your GIS Environment"
4. Look for "Coordinate Reference Systems" subsection`,
    source: "workshop",
    category: "navigation",
    topics: ["crs", "navigation", "lab1", "setup", "uganda"],
    difficulty: "beginner",
    tutorGuidance: "Guide students to the exact location and help them understand the content",
    socraticQuestions: [
      "Are you looking for basic CRS concepts or specific setup steps?",
      "Have you already started Lab 1?"
    ]
  },

  "coordinate_reference_systems": {
    id: "coordinate_reference_systems",
    title: "Understanding Coordinate Reference Systems",
    content: `Coordinate Reference Systems (CRS) define how locations on Earth are represented mathematically.

**Key Concepts:**
- **Geographic CRS**: Uses latitude/longitude (e.g., WGS84 - EPSG:4326)
- **Projected CRS**: Uses x,y coordinates in meters/feet (e.g., UTM zones)
- **EPSG Codes**: Standardized numerical identifiers for CRS

**Uganda Context:**
- **EPSG:4326 (WGS84)**: Global geographic system, good for general mapping
- **EPSG:32636 (UTM Zone 36N)**: Projected system for Uganda, better for measurements

**When to Use Each:**
- Geographic (4326): Web mapping, global datasets, initial data visualization
- Projected (32636): Distance measurements, area calculations, spatial analysis

**Common Issues:**
- Mixing different CRS in analysis can cause errors
- Always check your project CRS (bottom-right of QGIS)
- Reproject data when necessary for accurate measurements`,
    source: "qgis-tutor",
    category: "concept",
    topics: ["crs", "projections", "coordinates", "epsg", "uganda"],
    difficulty: "intermediate",
    tutorGuidance: "Use analogies and hands-on experimentation",
    socraticQuestions: [
      "Why might the same location have different coordinate values?",
      "What happens to distance measurements when you use the wrong CRS?"
    ]
  }
}

/**
 * Workshop Knowledge Service
 */
export class WorkshopKnowledgeService {
  private knowledgeBase: Record<string, KnowledgeItem>

  constructor() {
    this.knowledgeBase = WORKSHOP_KNOWLEDGE_BASE
  }

  searchKnowledge(query: string): KnowledgeItem[] {
    const searchTerms = query.toLowerCase().split(' ')
    const results: Array<{item: KnowledgeItem, score: number}> = []

    Object.values(this.knowledgeBase).forEach(item => {
      let score = 0
      
      searchTerms.forEach(term => {
        if (item.title.toLowerCase().includes(term)) score += 15
        if (item.topics.some(topic => topic.toLowerCase().includes(term))) score += 12
        if (item.content.toLowerCase().includes(term)) score += 5
        if (item.id.toLowerCase().includes(term)) score += 10
      })

      if (item.category === "navigation") score += 5
      if (item.difficulty === "beginner") score += 2

      if (score > 0) {
        results.push({item, score})
      }
    })

    return results
      .sort((a, b) => b.score - a.score)
      .slice(0, 5)
      .map(r => r.item)
  }

  generateTutorResponse(userMessage: string): string {
    const relevantItems = this.searchKnowledge(userMessage)

    if (relevantItems.length === 0) {
      return this.generateExploratoryResponse(userMessage)
    }

    const topItem = relevantItems[0]

    // Handle different question types
    if (this.isNavigationQuestion(userMessage)) {
      return this.generateNavigationResponse(topItem)
    }

    if (this.isConceptQuestion(userMessage)) {
      return this.generateConceptResponse(topItem)
    }

    if (this.isInstallationQuestion(userMessage)) {
      return this.generateInstallationResponse(topItem)
    }

    return this.generateComprehensiveResponse(topItem, userMessage)
  }

  private isNavigationQuestion(message: string): boolean {
    const navKeywords = ['where', 'find', 'locate', 'section', 'day', 'activities', 'schedule', 'website']
    return navKeywords.some(keyword => message.toLowerCase().includes(keyword))
  }

  private isConceptQuestion(message: string): boolean {
    const conceptKeywords = ['what is', 'what are', 'explain', 'define', 'understand']
    return conceptKeywords.some(keyword => message.toLowerCase().includes(keyword))
  }

  private isInstallationQuestion(message: string): boolean {
    const installKeywords = ['install', 'download', 'setup', 'how to get']
    return installKeywords.some(keyword => message.toLowerCase().includes(keyword))
  }

  private generateNavigationResponse(item: KnowledgeItem): string {
    return `Great question about finding information! Let me guide you to exactly what you need. 🗺️

📍 **Here's where to find "${item.title}":**

${item.content}

🎯 **Quick Navigation Tips:**
- Use the main menu to jump between sections
- Each lab has numbered steps for easy reference
- Look for highlighted boxes with key information

💡 **To help you better:**
${item.socraticQuestions?.map((q, i) => `${i + 1}. ${q}`).join('\n') || ''}

Would you like me to guide you through the specific steps? 🚀`
  }

  private generateConceptResponse(item: KnowledgeItem): string {
    return `Excellent question! Let's explore "${item.title}" together using the Socratic method. 🧠

🤔 **Before I explain, let me understand your perspective:**
${item.socraticQuestions?.map((q, i) => `${i + 1}. ${q}`).join('\n') || ''}

📚 **Here's the foundation:**
${item.content.split('\n').slice(0, 8).join('\n')}

💡 **My teaching approach:**
${item.tutorGuidance || "I'll guide you through hands-on discovery of this concept."}

What's your initial thinking? 🌟`
  }

  private generateInstallationResponse(item: KnowledgeItem): string {
    return `Perfect! Let me guide you through the installation process step by step. 🛠️

${item.content}

🤔 **Before we start:**
${item.socraticQuestions?.map((q, i) => `${i + 1}. ${q}`).join('\n') || ''}

💡 **I'll walk you through each step and help troubleshoot any issues.**

What system are you working with? 🚀`
  }

  private generateComprehensiveResponse(item: KnowledgeItem, userMessage: string): string {
    return `Great question about "${item.title}"! 🎓

🎯 **Here's what you need to know:**
${item.content.split('\n').slice(0, 6).join('\n')}

🤔 **Let's explore this together:**
${item.socraticQuestions?.map((q, i) => `${i + 1}. ${q}`).join('\n') || ''}

💡 **My teaching approach:**
${item.tutorGuidance || "I'll guide you through discovery and hands-on learning."}

What aspect would you like to explore first? 🚀`
  }

  private generateExploratoryResponse(message: string): string {
    return `That's an interesting question about "${message}"! 🎓

🤔 **Let's explore this together:**

To give you the most helpful guidance, I'd like to understand:
- What specific aspect interests you most?
- What's the context - are you working on a particular lab?
- What have you tried or explored so far?

📚 **I have comprehensive knowledge about:**
- Workshop structure and navigation
- GIS concepts and applications
- QGIS installation and troubleshooting
- Google Earth Engine and remote sensing
- Health geography applications

What would you like to explore first? 🚀`
  }
}

export const workshopKnowledge = new WorkshopKnowledgeService() 