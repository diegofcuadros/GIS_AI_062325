/**
 * Knowledge Expansion Service
 * Processes and indexes the comprehensive GIS learning materials from Expansion_Knowledge folder
 * Provides intelligent content retrieval for the Learning Tutor Chatbot
 */

import fs from 'fs';
import path from 'path';

export interface KnowledgeSource {
  id: string;
  title: string;
  content: string;
  category: "qgis" | "gee" | "python" | "health" | "general";
  type: "local" | "web" | "curated";
  lastUpdated: Date;
  keywords: string[];
}

export interface KnowledgeItem {
  id: string
  title: string
  content: string
  source: "mgimond-spatial" | "qgis-tutor" | "gee-community"
  category: "concept" | "tutorial" | "example" | "troubleshooting" | "reference"
  topics: string[]
  difficulty: "beginner" | "intermediate" | "advanced"
  learningPath?: string
  prerequisites?: string[]
  relatedItems?: string[]
  tutorGuidance?: string
  socraticQuestions?: string[]
}

export interface LearningPath {
  id: string
  title: string
  description: string
  difficulty: "beginner" | "intermediate" | "advanced"
  estimatedTime: string
  steps: LearningPathStep[]
  prerequisites: string[]
  learningOutcomes: string[]
}

export interface LearningPathStep {
  id: string
  title: string
  description: string
  concepts: string[]
  activities: TutorActivity[]
  checkpoints: string[]
  resources: string[]
}

export interface TutorActivity {
  type: "exploration" | "hands_on" | "reflection" | "assessment"
  instruction: string
  expectedOutcome: string
  commonMistakes: string[]
  guidingQuestions: string[]
}

// Comprehensive Knowledge Base from Expansion_Knowledge folder
export const EXPANDED_KNOWLEDGE_BASE: Record<string, KnowledgeItem> = {
  // QGIS Fundamentals (from diegofcuadros-QGIS_Tutor)
  "qgis_interface_basics": {
    id: "qgis_interface_basics",
    title: "QGIS Interface and GUI Components",
    content: `The QGIS interface consists of several key components that work together to provide a comprehensive GIS environment:

**Main Components:**
1. **Menu Bar**: Contains all major functions organized by category (File, Edit, View, Layer, etc.)
2. **Toolbars**: Quick access to frequently used tools (can be customized)
3. **Map Canvas**: Central area where your spatial data is displayed
4. **Panels**: Browser, Layers, Processing Toolbox (can be docked or floating)
5. **Status Bar**: Shows coordinate information, scale, and project CRS

**Key Panels:**
- **Browser Panel**: Navigate and preview data sources
- **Layers Panel**: Manage layer visibility, order, and symbology
- **Processing Toolbox**: Access to analysis algorithms
- **Python Console**: Advanced scripting capabilities`,
    source: "qgis-tutor",
    category: "concept",
    topics: ["qgis", "interface", "gui", "workspace"],
    difficulty: "beginner",
    learningPath: "qgis_fundamentals",
    tutorGuidance: "Guide students to explore each interface component hands-on rather than just describing them. Ask them to identify each component and predict its function.",
    socraticQuestions: [
      "What do you think each panel might be used for?",
      "Why do you think the Map Canvas is placed in the center?",
      "How might you customize this interface for your workflow?",
      "What similarities do you see with other software you've used?"
    ]
  },

  "coordinate_reference_systems": {
    id: "coordinate_reference_systems",
    title: "Understanding Coordinate Reference Systems",
    content: `Coordinate Reference Systems (CRS) are fundamental to GIS, defining how locations on Earth are represented mathematically.

**Key Concepts:**
- **Geographic CRS**: Uses latitude/longitude (e.g., WGS84 - EPSG:4326)
- **Projected CRS**: Uses x,y coordinates in meters/feet (e.g., UTM zones)
- **EPSG Codes**: Standardized numerical identifiers for CRS

**Uganda Context:**
- **EPSG:4326 (WGS84)**: Global geographic system, good for general mapping
- **EPSG:32636 (UTM Zone 36N)**: Projected system for Uganda, better for measurements
- **EPSG:21036**: Arc 1960 UTM Zone 36N, legacy system still sometimes used

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
    learningPath: "spatial_fundamentals",
    tutorGuidance: "Use analogies (like different languages for describing locations) and hands-on experimentation to help students understand CRS impact on measurements.",
    socraticQuestions: [
      "Why might the same location have different coordinate values in different systems?",
      "What happens to distance measurements when you use the wrong CRS?",
      "How do you think GPS coordinates relate to what you see in QGIS?",
      "Why might Uganda specifically use UTM Zone 36N?"
    ]
  },

  // Spatial Analysis (from mgimond-Spatial)
  "spatial_relationships": {
    id: "spatial_relationships",
    title: "Understanding Spatial Relationships",
    content: `Spatial relationships describe how geographic features relate to each other in space. These relationships are fundamental to spatial analysis and decision-making.

**Types of Spatial Relationships:**

1. **Topological Relationships:**
   - Contains/Within: One feature completely inside another
   - Intersects: Features share some space
   - Touches: Features share a boundary but no interior space
   - Disjoint: Features don't interact spatially

2. **Distance Relationships:**
   - Proximity: How close features are to each other
   - Buffer zones: Areas within specified distance of features
   - Accessibility: Ease of reaching from one location to another

3. **Directional Relationships:**
   - Cardinal directions (N, S, E, W)
   - Relative position (left, right, upstream, downstream)

**Health Geography Applications:**
- Clinic accessibility: How far are communities from healthcare?
- Disease spread: Spatial patterns of transmission
- Service areas: Which populations does each facility serve?
- Barrier effects: How do rivers, mountains affect access?

**Analysis Methods:**
- Buffer analysis for service areas
- Network analysis for travel routes
- Spatial joins to combine attribute data
- Point-in-polygon for jurisdictional analysis`,
    source: "mgimond-spatial",
    category: "concept",
    topics: ["spatial analysis", "relationships", "topology", "distance", "accessibility"],
    difficulty: "intermediate",
    learningPath: "spatial_analysis_mastery",
    tutorGuidance: "Use real-world health scenarios to make spatial relationships concrete. Have students identify relationships they can observe in their own environment.",
    socraticQuestions: [
      "Think about your journey to school/work - what spatial relationships do you encounter?",
      "How might a river affect healthcare access in rural areas?",
      "What factors beyond distance might affect accessibility to services?",
      "How would you define the 'service area' of a health clinic?"
    ]
  },

  "buffer_analysis": {
    id: "buffer_analysis",
    title: "Buffer Analysis for Service Area Assessment",
    content: `Buffer analysis creates zones of specified distance around geographic features, commonly used to assess service areas, impact zones, or accessibility.

**Buffer Types:**
1. **Simple Buffers**: Single distance around features
2. **Variable Buffers**: Different distances based on attributes
3. **Multi-ring Buffers**: Multiple distance zones from same features

**Health Applications:**
- **Clinic Service Areas**: 5km walking distance buffers
- **Emergency Response**: 30-minute drive time zones
- **Disease Prevention**: Mosquito breeding site buffers
- **Vaccination Coverage**: Population within reach of campaigns

**Key Considerations:**
- **Distance vs. Travel Time**: Straight-line vs. network distance
- **Terrain Effects**: Hills, rivers, roads affect real accessibility  
- **Population Distribution**: Buffer area vs. people served
- **Seasonal Variations**: Wet season may limit access

**QGIS Implementation:**
1. Vector → Geoprocessing Tools → Buffer
2. Specify distance (consider units!)
3. Choose dissolve option if needed
4. Analyze population coverage using spatial joins

**Advanced Techniques:**
- Cost-distance analysis for realistic travel
- Network analysis for road-based accessibility
- Temporal buffers for time-based access`,
    source: "mgimond-spatial",
    category: "tutorial",
    topics: ["buffer analysis", "service areas", "accessibility", "health geography"],
    difficulty: "intermediate",
    learningPath: "spatial_analysis_mastery",
    tutorGuidance: "Start with conceptual understanding (what is a service area?) before diving into technical implementation. Use local examples students can relate to.",
    socraticQuestions: [
      "What's the difference between 'as the crow flies' and actual travel distance?",
      "How might a 5km buffer around a clinic be misleading?",
      "What factors could make some areas within a buffer less accessible?",
      "How would you validate that your buffer analysis reflects reality?"
    ]
  },

  // Google Earth Engine (from google-earthengine-community)
  "gee_introduction": {
    id: "gee_introduction",
    title: "Introduction to Google Earth Engine",
    content: `Google Earth Engine (GEE) is a cloud-based platform for planetary-scale geospatial analysis, providing access to decades of satellite imagery and powerful computing resources.

**Key Advantages:**
- **Massive Data Catalog**: Landsat, Sentinel, MODIS, and more
- **Cloud Computing**: No need to download/store large datasets
- **Scalable Processing**: Analysis across large areas and time periods
- **JavaScript API**: Accessible programming interface
- **Python API**: Integration with scientific workflows

**Core Concepts:**
1. **Images**: Single satellite scenes with bands (spectral channels)
2. **ImageCollections**: Time series of images
3. **Features**: Vector geometries with properties
4. **FeatureCollections**: Sets of vector features
5. **Reducers**: Statistical operations across space/time

**Typical Workflow:**
1. Define area of interest (geometry)
2. Filter image collection by location/time
3. Apply cloud masking and preprocessing
4. Calculate indices (NDVI, NDWI, etc.)
5. Perform temporal/spatial analysis
6. Export results for further analysis

**Health Applications:**
- **Land Cover Mapping**: Urban expansion, deforestation
- **Environmental Monitoring**: Air quality, water resources
- **Disease Vector Habitat**: Mosquito breeding environments
- **Climate Analysis**: Temperature, precipitation trends`,
    source: "gee-community",
    category: "concept",
    topics: ["google earth engine", "satellite imagery", "cloud computing", "remote sensing"],
    difficulty: "intermediate",
    learningPath: "gee_fundamentals",
    tutorGuidance: "Emphasize the paradigm shift from desktop to cloud computing. Help students understand the scale and power before diving into code.",
    socraticQuestions: [
      "What challenges would you face downloading 30 years of satellite data?",
      "How might cloud computing change the way we approach large-scale analysis?",
      "What types of questions could you answer with decades of satellite imagery?",
      "Why might JavaScript be chosen for a web-based analysis platform?"
    ]
  },

  "ndvi_calculation": {
    id: "ndvi_calculation",
    title: "NDVI Calculation and Vegetation Analysis",
    content: `The Normalized Difference Vegetation Index (NDVI) is a widely-used indicator of vegetation health and density, calculated from red and near-infrared satellite bands.

**The Science:**
- **Healthy Vegetation**: Absorbs red light for photosynthesis, reflects near-infrared
- **Stressed/Dead Vegetation**: Lower chlorophyll = different spectral signature
- **Formula**: NDVI = (NIR - Red) / (NIR + Red)

**NDVI Value Interpretation:**
- **-1 to 0**: Water, bare soil, built areas
- **0 to 0.3**: Sparse vegetation, grassland
- **0.3 to 0.7**: Moderate to dense vegetation
- **0.7 to 1**: Very dense, healthy vegetation

**Satellite Band Information:**
- **Landsat 8**: Band 4 (Red), Band 5 (NIR)
- **Sentinel-2**: Band 4 (Red), Band 8 (NIR)
- **MODIS**: Band 1 (Red), Band 2 (NIR)

**Google Earth Engine Implementation:**
\`\`\`javascript
// Load Sentinel-2 image collection
var sentinel2 = ee.ImageCollection('COPERNICUS/S2_SR')
  .filterDate('2023-01-01', '2023-12-31')
  .filterBounds(geometry)
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20));

// Calculate NDVI
var ndvi = sentinel2.map(function(image) {
  return image.normalizedDifference(['B8', 'B4']).rename('NDVI');
});

// Get median NDVI
var ndviMedian = ndvi.median();
\`\`\`

**Health Applications:**
- **Malaria Risk**: Vegetation density affects mosquito habitat
- **Agricultural Monitoring**: Food security assessments
- **Urban Health**: Green space availability
- **Environmental Change**: Deforestation, drought impact`,
    source: "gee-community",
    category: "tutorial",
    topics: ["ndvi", "vegetation", "remote sensing", "health", "google earth engine"],
    difficulty: "intermediate",
    learningPath: "gee_health_applications",
    tutorGuidance: "Build understanding from first principles - why do plants look green? Lead students to discover the relationship between plant health and light reflection.",
    socraticQuestions: [
      "Why do you think healthy plants appear green to our eyes?",
      "What happens to plant color when they're stressed or dying?",
      "How might we detect plant health using invisible light wavelengths?",
      "What NDVI values would you expect for a maize field vs. a dense forest?"
    ]
  },

  "malaria_risk_mapping": {
    id: "malaria_risk_mapping",
    title: "Malaria Risk Mapping using Environmental Data",
    content: `Malaria risk is influenced by environmental factors that affect mosquito breeding and survival. GIS and remote sensing provide powerful tools for mapping and predicting malaria risk patterns.

**Environmental Risk Factors:**
1. **Temperature**: Affects parasite development (optimal 20-30°C)
2. **Precipitation**: Creates breeding sites, but too much can flush larvae
3. **Humidity**: Necessary for mosquito survival
4. **Elevation**: Higher altitudes generally lower risk
5. **Vegetation**: Provides mosquito resting sites and breeding habitat
6. **Water Bodies**: Breeding sites for Anopheles mosquitoes

**Data Sources:**
- **Climate Data**: Temperature, precipitation, humidity from weather stations/satellites
- **Elevation**: Digital Elevation Models (SRTM, ASTER)
- **Land Cover**: MODIS, Landsat classification
- **Water Bodies**: Surface water occurrence datasets
- **Health Data**: Reported malaria cases, health facility records

**GIS Analysis Workflow:**
1. **Data Collection**: Gather environmental and health datasets
2. **Preprocessing**: Reproject, resample, clip to study area
3. **Variable Calculation**: NDVI, distance to water, elevation zones
4. **Risk Modeling**: Statistical correlation with malaria cases
5. **Validation**: Compare predictions with ground truth data
6. **Risk Map Creation**: Classify areas by risk level

**Google Earth Engine Implementation:**
- Climate data from ERA5, CHIRPS
- Elevation analysis using SRTM
- Land cover from Dynamic World
- Temporal analysis for seasonal patterns

**Applications:**
- **Prevention Planning**: Target interventions in high-risk areas
- **Resource Allocation**: Distribute bed nets, indoor spraying
- **Early Warning**: Predict outbreaks based on environmental conditions
- **Impact Assessment**: Monitor intervention effectiveness`,
    source: "gee-community",
    category: "tutorial",
    topics: ["malaria", "health mapping", "environmental factors", "risk assessment"],
    difficulty: "advanced",
    learningPath: "gis_health_applications",
    prerequisites: ["ndvi_calculation", "buffer_analysis", "gee_introduction"],
    tutorGuidance: "Connect environmental factors to mosquito biology. Help students understand the ecological relationships before diving into technical analysis.",
    socraticQuestions: [
      "What environmental conditions do you think mosquitoes need to thrive?",
      "How might rainfall both increase and decrease malaria risk?",
      "Why would elevation affect malaria transmission?",
      "How could we validate our risk map with real health data?"
    ]
  },

  // Troubleshooting and Common Issues
  "qgis_data_loading_issues": {
    id: "qgis_data_loading_issues",
    title: "Troubleshooting QGIS Data Loading Problems",
    content: `Common data loading issues in QGIS and their solutions, based on frequent student challenges.

**File Format Issues:**
- **Shapefiles**: Must have .shp, .shx, .dbf (minimum) - select .shp file
- **CSV Files**: Check delimiter (comma vs semicolon), coordinate column names
- **Raster Files**: Ensure proper format (GeoTIFF, TIFF with world file)

**Path and Permission Problems:**
- **File Paths**: Avoid spaces, special characters in folder/file names
- **Network Drives**: Copy files locally if loading from network is slow
- **Permissions**: Ensure read access to files and folders

**Coordinate System Issues:**
- **No CRS Defined**: QGIS may ask you to define CRS for CSV files
- **Wrong CRS**: Data appears in wrong location due to CRS mismatch
- **Degree vs Meter Confusion**: Check if coordinates are in decimal degrees or meters

**Common Error Messages:**
1. **"Invalid Data Source"**: File path wrong or file corrupted
2. **"Layer is not valid"**: CRS issues or file format problems  
3. **"Driver not found"**: Missing GDAL driver for specific format

**Systematic Troubleshooting:**
1. **Check File Integrity**: Can you open in other software?
2. **Verify Coordinates**: Do coordinates make sense for your area?
3. **Test with Simple Data**: Try loading a known-good file first
4. **Check QGIS Version**: Some formats require newer versions
5. **Review File Paths**: Ensure no special characters or long paths

**Student Learning Approach:**
- Encourage systematic debugging
- Document what works for future reference
- Learn to read error messages carefully
- Develop file management best practices`,
    source: "qgis-tutor",
    category: "troubleshooting",
    topics: ["qgis", "data loading", "errors", "troubleshooting"],
    difficulty: "beginner",
    tutorGuidance: "Turn troubleshooting into a learning opportunity. Guide students through systematic diagnosis rather than just providing solutions.",
    socraticQuestions: [
      "What information does this error message give us?",
      "What would you check first when data doesn't load properly?",
      "How could we test whether the problem is with QGIS or with the data file?",
      "What file management practices might prevent these issues?"
    ]
  }
}

// Learning Paths that utilize the expanded knowledge
export const LEARNING_PATHS: Record<string, LearningPath> = {
  qgis_fundamentals: {
    id: "qgis_fundamentals",
    title: "QGIS Fundamentals for Health Geography",
    description: "Master the essential QGIS skills needed for health and spatial analysis applications",
    difficulty: "beginner",
    estimatedTime: "4-6 hours",
    prerequisites: ["basic_computer_skills", "understanding_of_maps"],
    learningOutcomes: [
      "Navigate the QGIS interface confidently",
      "Load and manage different types of spatial data", 
      "Understand coordinate reference systems",
      "Perform basic spatial operations",
      "Create professional maps"
    ],
    steps: [
      {
        id: "interface_exploration",
        title: "Exploring the QGIS Interface",
        description: "Get familiar with QGIS components through guided discovery",
        concepts: ["qgis_interface_basics"],
        activities: [
          {
            type: "exploration",
            instruction: "Open QGIS and identify each major interface component without looking at documentation",
            expectedOutcome: "Student can name and locate Menu Bar, Toolbars, Map Canvas, and main Panels",
            commonMistakes: ["Confusing panels with toolbars", "Not noticing status bar"],
            guidingQuestions: [
              "What do you think this component is used for?",
              "How is this similar to other software you've used?",
              "What happens when you right-click on different areas?"
            ]
          },
          {
            type: "hands_on",
            instruction: "Customize your interface by moving panels and toolbars around",
            expectedOutcome: "Understanding that interface is flexible and customizable",
            commonMistakes: ["Accidentally closing important panels"],
            guidingQuestions: [
              "How might you arrange this for your workflow?",
              "What panels do you think you'll use most often?"
            ]
          }
        ],
        checkpoints: [
          "Can identify Map Canvas and explain its purpose",
          "Can locate and open the Browser panel",
          "Understands that interface can be customized"
        ],
        resources: ["qgis_interface_basics"]
      },
      
      {
        id: "crs_understanding",
        title: "Understanding Coordinate Reference Systems",
        description: "Develop intuitive understanding of how locations are represented digitally",
        concepts: ["coordinate_reference_systems"],
        activities: [
          {
            type: "reflection",
            instruction: "Think about how you give directions to someone - what reference points do you use?",
            expectedOutcome: "Connects CRS concept to everyday spatial references",
            commonMistakes: ["Thinking CRS is just technical detail"],
            guidingQuestions: [
              "How do GPS coordinates relate to what you see on a map?",
              "Why might the same location have different coordinate values?"
            ]
          },
          {
            type: "hands_on",
            instruction: "Compare the same Uganda dataset in EPSG:4326 vs EPSG:32636",
            expectedOutcome: "Observes how CRS affects visualization and measurements",
            commonMistakes: ["Not noticing coordinate value differences"],
            guidingQuestions: [
              "What differences do you notice in the coordinates?",
              "Which system would be better for measuring distances in Uganda?"
            ]
          }
        ],
        checkpoints: [
          "Can explain why coordinate systems matter",
          "Knows Uganda's appropriate projected CRS",
          "Can identify current project CRS in QGIS"
        ],
        resources: ["coordinate_reference_systems"]
      }
    ]
  },
  
  spatial_analysis_mastery: {
    id: "spatial_analysis_mastery", 
    title: "Spatial Analysis for Health Applications",
    description: "Learn to analyze spatial relationships and patterns relevant to health geography",
    difficulty: "intermediate",
    estimatedTime: "6-8 hours",
    prerequisites: ["qgis_fundamentals", "basic_statistics"],
    learningOutcomes: [
      "Understand different types of spatial relationships",
      "Perform buffer analysis for service area assessment",
      "Analyze accessibility and coverage patterns",
      "Apply spatial analysis to health geography questions"
    ],
    steps: [
      {
        id: "spatial_relationships_discovery",
        title: "Discovering Spatial Relationships",
        description: "Explore how geographic features relate to each other",
        concepts: ["spatial_relationships"],
        activities: [
          {
            type: "reflection",
            instruction: "Consider your local health clinic - what spatial relationships exist between it and the community?",
            expectedOutcome: "Identifies distance, accessibility, and service area concepts",
            commonMistakes: ["Only thinking about straight-line distances"],
            guidingQuestions: [
              "What makes one location more accessible than another?",
              "How do geographic barriers affect access to services?"
            ]
          }
        ],
        checkpoints: [
          "Can identify different types of spatial relationships",
          "Understands accessibility vs. proximity"
        ],
        resources: ["spatial_relationships"]
      }
    ]
  }
}

/**
 * Knowledge Expansion Service
 * Provides intelligent retrieval and tutoring support for the expanded knowledge base
 */
export class KnowledgeExpansionService {
  private knowledgeBase: Record<string, KnowledgeItem>
  private learningPaths: Record<string, LearningPath>

  constructor() {
    this.knowledgeBase = EXPANDED_KNOWLEDGE_BASE
    this.learningPaths = LEARNING_PATHS
  }

  /**
   * Search knowledge base by query
   */
  searchKnowledge(query: string, filters?: {
    difficulty?: "beginner" | "intermediate" | "advanced"
    category?: "concept" | "tutorial" | "example" | "troubleshooting" | "reference"
    topics?: string[]
  }): KnowledgeItem[] {
    const searchTerms = query.toLowerCase().split(' ')
    const results: Array<{item: KnowledgeItem, score: number}> = []

    Object.values(this.knowledgeBase).forEach(item => {
      let score = 0
      
      // Apply filters first
      if (filters?.difficulty && item.difficulty !== filters.difficulty) return
      if (filters?.category && item.category !== filters.category) return
      if (filters?.topics && !filters.topics.some(topic => item.topics.includes(topic))) return

      // Calculate relevance score
      searchTerms.forEach(term => {
        if (item.title.toLowerCase().includes(term)) score += 10
        if (item.content.toLowerCase().includes(term)) score += 5
        if (item.topics.some(topic => topic.toLowerCase().includes(term))) score += 8
        if (item.tutorGuidance?.toLowerCase().includes(term)) score += 3
      })

      if (score > 0) {
        results.push({item, score})
      }
    })

    return results
      .sort((a, b) => b.score - a.score)
      .slice(0, 10)
      .map(r => r.item)
  }

  /**
   * Get tutoring guidance for a specific topic
   */
  getTutorGuidance(knowledgeId: string): {
    content: string
    guidance: string
    socraticQuestions: string[]
    activities: TutorActivity[]
  } | null {
    const item = this.knowledgeBase[knowledgeId]
    if (!item) return null

    // Find activities from learning paths
    const activities: TutorActivity[] = []
    Object.values(this.learningPaths).forEach(path => {
      path.steps.forEach(step => {
        if (step.concepts.includes(knowledgeId)) {
          activities.push(...step.activities)
        }
      })
    })

    return {
      content: item.content,
      guidance: item.tutorGuidance || "Guide students through hands-on exploration of this concept.",
      socraticQuestions: item.socraticQuestions || [],
      activities
    }
  }

  /**
   * Get learning path for student level and interests
   */
  recommendLearningPath(
    studentLevel: "beginner" | "intermediate" | "advanced",
    interests: string[] = [],
    currentKnowledge: string[] = []
  ): LearningPath | null {
    // Simple recommendation logic - could be enhanced with ML
    const candidates = Object.values(this.learningPaths).filter(path => {
      // Match difficulty level
      if (path.difficulty !== studentLevel) return false
      
      // Check if student has prerequisites
      const hasPrereqs = path.prerequisites.every(prereq => 
        currentKnowledge.includes(prereq)
      )
      if (!hasPrereqs) return false

      // Match interests
      if (interests.length > 0) {
        const pathTopics = path.steps.flatMap(step => 
          step.concepts.flatMap(conceptId => 
            this.knowledgeBase[conceptId]?.topics || []
          )
        )
        const hasInterestMatch = interests.some(interest => 
          pathTopics.some(topic => topic.toLowerCase().includes(interest.toLowerCase()))
        )
        if (!hasInterestMatch) return false
      }

      return true
    })

    return candidates.length > 0 ? candidates[0] : null
  }

  /**
   * Generate contextual tutoring response
   */
  generateTutorResponse(
    userMessage: string,
    context: {
      currentLab?: string
      studentLevel?: "beginner" | "intermediate" | "advanced"
      recentTopics?: string[]
    }
  ): string {
    // Search for relevant knowledge
    const relevantItems = this.searchKnowledge(userMessage, {
      difficulty: context.studentLevel
    })

    if (relevantItems.length === 0) {
      return this.generateExploratoryResponse(userMessage, context)
    }

    const topItem = relevantItems[0]
    const tutorGuidance = this.getTutorGuidance(topItem.id)

    if (!tutorGuidance) {
      return this.generateExploratoryResponse(userMessage, context)
    }

    // Generate Socratic response based on knowledge item
    const questions = tutorGuidance.socraticQuestions.slice(0, 2)
    const questionText = questions.length > 0 ? 
      questions.map((q, i) => `${i + 1}. ${q}`).join('\n') : 
      "What's your current understanding of this topic?"

    return `Great question about ${topItem.title}! Let's explore this together using the Socratic method.

🤔 **Before I explain, let me understand your thinking:**

${questionText}

💡 **My teaching approach for this topic:**
${tutorGuidance.guidance}

📚 **Once you share your thoughts, I'll guide you through:**
- Key concepts with real-world connections
- Hands-on exploration activities  
- Common misconceptions to avoid
- Practical applications in health geography

What's your initial thinking on this? Don't worry about being "right" - I'm here to guide you to discovery! 🌟`
  }

  private generateExploratoryResponse(
    userMessage: string, 
    context: any
  ): string {
    return `That's an interesting question about "${userMessage}"! 

🎓 **Let's explore this together:**

I'd like to understand your perspective first - this helps me tailor my guidance to your learning style and current understanding.

🤔 **To get started:**
- What do you already know about this topic?
- What specific aspect interests you most?
- How does this relate to what you're working on?

💭 **My approach:** Rather than just giving you information, I'll guide you to discover insights through questions and hands-on exploration. This builds deeper understanding that sticks with you.

What would you like to explore first? Remember, there are no wrong answers - only learning opportunities! 🚀`
  }
}

// Export singleton instance
export const knowledgeExpander = new KnowledgeExpansionService()

/**
 * Expanded GIS & AI Workshop Knowledge Base
 * Comprehensive practical tutorial assistance
 */

export const EXPANDED_TUTORIAL_KNOWLEDGE = {
  // QGIS Practical Help
  "qgis_data_loading": {
    title: "Loading Data in QGIS - Complete Guide",
    content: `**Method 1: Menu-based loading**
1. Layer → Add Layer → Add Vector Layer (for shapefiles, GeoJSON, etc.)
2. Click the "..." button to browse for your file
3. Navigate to your data folder
4. Select the .shp file (for shapefiles)
5. Click "Add" - layer appears in Layers panel

**Method 2: Drag and drop**
- Simply drag files from Windows Explorer/Mac Finder into QGIS
- Works for most common formats (.shp, .geojson, .kml, .gpx)

**Method 3: Browser panel**
- Use Browser panel (left side) to navigate folders
- Double-click files to add them

**For Uganda workshop data:**
- Load uganda_districts.shp for district boundaries
- Load health_facilities.shp for clinic/hospital locations
- Load population_centers.shp for settlement data

**Troubleshooting:**
- If layer doesn't appear: Right-click → Zoom to Layer
- If wrong location: Check coordinate system
- If missing files: Ensure all shapefile components (.shp, .shx, .dbf, .prj) are present`,
    category: "tutorial",
    difficulty: "beginner",
    keywords: ["load data", "import", "shapefile", "vector", "qgis"]
  },

  "qgis_symbology": {
    title: "QGIS Styling and Symbology Guide",
    content: `**Access symbology:** Right-click layer → Properties → Symbology tab

**Single Symbol (uniform styling):**
- Use for simple display of all features the same way
- Click color box to change fill/outline colors
- Adjust size for points, width for lines

**Categorized (style by categories):**
- Choose attribute field (e.g., facility_type)
- Click "Classify" to create categories
- Different symbol for each unique value
- Good for: facility types, land use classes

**Graduated (style by numeric values):**
- Choose numeric field (e.g., population, distance)
- Select classification method (Natural Breaks recommended)
- Choose color ramp (e.g., Reds for high values)
- Set number of classes (5-7 usually optimal)

**For health facility mapping:**
- Categorized by facility type (hospital, clinic, health center)
- Use medical symbols: red cross for hospitals, circles for clinics
- Graduated by population served or distance to nearest facility

**Color schemes for health data:**
- Disease incidence: Light to dark red
- Population density: Light to dark blue  
- Access/distance: Green (good) to red (poor)
- Risk levels: Blue (low) to red (high)`,
    category: "tutorial", 
    difficulty: "beginner",
    keywords: ["style", "symbology", "color", "classification", "graduated"]
  },

  "qgis_coordinate_systems": {
    title: "Coordinate Systems Setup for Uganda",
    content: `**Understanding coordinate systems:**
- **Geographic (Lat/Long)**: EPSG:4326 (WGS84) - global system
- **Projected (meters)**: EPSG:32636 (UTM Zone 36N) - Uganda's system

**Set project CRS (recommended for Uganda):**
1. Project → Properties → CRS tab
2. Search for "32636" 
3. Select "WGS 84 / UTM zone 36N - EPSG:32636"
4. Click OK
5. Verify bottom-right shows "EPSG:32636"

**Set layer CRS (if data appears wrong):**
1. Right-click layer → Properties → Source tab
2. If shows "Unknown CRS" or wrong CRS:
3. Right-click layer → Set CRS
4. Choose correct CRS (usually EPSG:4326 for GPS data)

**Why this matters:**
- EPSG:4326: Good for web maps, global data
- EPSG:32636: Accurate distance/area measurements in Uganda
- Wrong CRS = wrong measurements and misaligned data

**Common problems:**
- Data appears at wrong location → Set correct layer CRS
- Distance measurements wrong → Use EPSG:32636 project CRS
- Layers don't align → Check all layer CRS are correct

**Quick fix:** Enable "On-the-fly CRS transformation" to automatically align different CRS`,
    category: "tutorial",
    difficulty: "intermediate", 
    keywords: ["crs", "coordinate system", "projection", "epsg", "utm", "uganda"]
  },

  // Google Earth Engine Practical Help
  "gee_authentication": {
    title: "Google Earth Engine Authentication Setup",
    content: `**Step 1: Get GEE access**
1. Go to earthengine.google.com
2. Sign up with your Google account
3. Wait for approval (usually instant for academic use)

**Step 2: Authenticate in Python/Colab**
\`\`\`python
import ee

# First time setup
ee.Authenticate()
# Click the link, sign in, copy code back

# Initialize (run every session)
ee.Initialize()

# Test it works
print(ee.String('Hello World').getInfo())
\`\`\`

**Step 3: JavaScript Code Editor**
1. Go to code.earthengine.google.com
2. Sign in with same Google account
3. Should work immediately

**Troubleshooting:**
- "Not authorized" → Check you have GEE access approved
- Authentication expires → Re-run ee.Authenticate()
- Import errors → Install earthengine-api: \`pip install earthengine-api\`
- Colab issues → Restart runtime after authentication

**For workshop:** We'll use both Python (Colab) and JavaScript (Code Editor) interfaces`,
    category: "tutorial",
    difficulty: "beginner",
    keywords: ["authentication", "google earth engine", "gee", "setup", "access"]
  },

  "gee_ndvi_calculation": {
    title: "NDVI Calculation in Google Earth Engine",
    content: `**What is NDVI?**
Normalized Difference Vegetation Index: (NIR - Red) / (NIR + Red)
- Values: -1 to +1
- Higher values = more vegetation
- Useful for: crop monitoring, forest mapping, environmental analysis

**JavaScript Code (GEE Code Editor):**
\`\`\`javascript
// Load Landsat 8 image
var image = ee.Image('LANDSAT/LC08/C02/T1_TOA/LC08_171059_20200101');

// Calculate NDVI (B5=NIR, B4=Red for Landsat 8)
var ndvi = image.normalizedDifference(['B5', 'B4']).rename('NDVI');

// Visualization parameters
var ndviVis = {
  min: -1, 
  max: 1, 
  palette: ['red', 'yellow', 'green']
};

// Display
Map.centerObject(image, 8);
Map.addLayer(ndvi, ndviVis, 'NDVI');
\`\`\`

**Python Code (Colab):**
\`\`\`python
import ee
ee.Initialize()

# Load image
image = ee.Image('LANDSAT/LC08/C02/T1_TOA/LC08_171059_20200101')

# Calculate NDVI
ndvi = image.normalizedDifference(['B5', 'B4']).rename('NDVI')

# For visualization in Colab, use folium
import folium
import geemap

Map = geemap.Map()
Map.addLayer(ndvi, {'min': -1, 'max': 1, 'palette': ['red', 'yellow', 'green']}, 'NDVI')
Map
\`\`\`

**Band numbers for different satellites:**
- Landsat 8/9: NIR=B5, Red=B4
- Landsat 5/7: NIR=B4, Red=B3  
- Sentinel-2: NIR=B8, Red=B4

**For Uganda malaria mapping:**
- High NDVI = dense vegetation = potential mosquito habitat
- Moderate NDVI = agricultural areas = human-mosquito contact zones
- Low NDVI = urban/bare areas = lower transmission risk`,
    category: "tutorial",
    difficulty: "intermediate",
    keywords: ["ndvi", "vegetation", "satellite", "landsat", "calculation"]
  },

  "gee_image_collections": {
    title: "Working with Image Collections in GEE",
    content: `**Image Collections vs Images:**
- Image: Single satellite scene from one date
- ImageCollection: Multiple images over time/space

**Load and filter collections:**
\`\`\`javascript
// Load Landsat 8 collection
var collection = ee.ImageCollection('LANDSAT/LC08/C02/T1_TOA')
  .filterBounds(uganda)  // Spatial filter
  .filterDate('2020-01-01', '2020-12-31')  // Temporal filter
  .filterMetadata('CLOUD_COVER', 'less_than', 20);  // Quality filter

// Get median composite (reduces clouds)
var composite = collection.median();

// Get mean composite
var meanComposite = collection.mean();
\`\`\`

**Common filtering methods:**
- \`.filterBounds(geometry)\` - spatial extent
- \`.filterDate(start, end)\` - time range
- \`.filterMetadata('CLOUD_COVER', 'less_than', 20)\` - cloud cover
- \`.filter(ee.Filter.calendarRange(6, 9, 'month'))\` - specific months

**Reducing collections:**
- \`.median()\` - reduces clouds, good for composites
- \`.mean()\` - average values
- \`.min()\` / \`.max()\` - extreme values
- \`.sum()\` - total (e.g., annual precipitation)

**For Uganda analysis:**
\`\`\`javascript
// Define Uganda boundary
var uganda = ee.FeatureCollection('USDOS/LSIB_SIMPLE/2017')
  .filter(ee.Filter.eq('country_na', 'Uganda'));

// Rainy season composite (March-May, Oct-Dec)
var rainySeasonL8 = ee.ImageCollection('LANDSAT/LC08/C02/T1_TOA')
  .filterBounds(uganda)
  .filterDate('2020-01-01', '2020-12-31')
  .filter(ee.Filter.calendarRange(3, 5, 'month'))
  .filterMetadata('CLOUD_COVER', 'less_than', 30)
  .median();
\`\`\``,
    category: "tutorial",
    difficulty: "intermediate",
    keywords: ["image collection", "filter", "composite", "median", "time series"]
  },

  // Health GIS Applications
  "health_facility_analysis": {
    title: "Health Facility Accessibility Analysis",
    content: `**Analysis Types:**
1. **Point-in-polygon**: Count facilities per district
2. **Distance analysis**: Distance to nearest facility
3. **Service area analysis**: Population within facility catchments
4. **Accessibility modeling**: Travel time considering roads/terrain

**1. Count facilities per district:**
\`\`\`
Vector → Analysis Tools → Count Points in Polygon
- Input polygon: district_boundaries
- Input points: health_facilities  
- Output: districts_with_facility_count
\`\`\`

**2. Distance to nearest facility:**
\`\`\`
Vector → Analysis Tools → Distance to Nearest Hub
- Source points: population_centers
- Destination hubs: health_facilities
- Hub layer name: facility_name
- Output: distance_to_health
\`\`\`

**3. Buffer analysis (service areas):**
\`\`\`
Vector → Geoprocessing Tools → Buffer
- Input: health_facilities
- Distance: 5000 (5km radius)
- Output: facility_catchments
\`\`\`

**4. Visualizing results:**
- **Facility density**: Graduated symbology on districts by facility count
- **Access quality**: Color code by distance (green <5km, yellow 5-15km, red >15km)
- **Population coverage**: Overlay population data with service areas

**Key metrics for Uganda:**
- WHO recommendation: 1 health facility per 10,000 people
- Accessibility target: <5km to nearest facility
- Critical distance: >15km = poor access

**Interpretation:**
- High facility density + low distance = good access
- Low facility density + high distance = underserved areas
- Consider geographic barriers: mountains, rivers, roads`,
    category: "tutorial",
    difficulty: "intermediate", 
    keywords: ["health facility", "accessibility", "distance", "buffer", "service area"]
  },

  "malaria_risk_mapping": {
    title: "Malaria Risk Mapping Methodology",
    content: `**Environmental Risk Factors:**
1. **Temperature**: 20-30°C optimal for mosquito development
2. **Rainfall**: 100-200mm monthly for breeding sites
3. **Elevation**: <2000m (mosquitoes can't survive higher)
4. **Vegetation**: NDVI 0.3-0.7 optimal (resting sites)
5. **Water bodies**: Breeding sites within 2km

**Human Risk Factors:**
1. **Population density**: More people = more cases
2. **Healthcare access**: Distance to treatment
3. **Socioeconomic status**: Housing quality, bed nets
4. **Age structure**: Children <5 most vulnerable

**Data Sources:**
- **Climate**: CHIRPS precipitation, MODIS temperature
- **Elevation**: SRTM digital elevation model
- **Vegetation**: Landsat/Sentinel NDVI
- **Water**: Global Surface Water dataset
- **Population**: WorldPop population grids
- **Health**: Facility locations, case reports

**Risk Model Development:**
\`\`\`javascript
// Environmental suitability model
var temp_suit = temperature.gt(20).and(temperature.lt(30));
var precip_suit = precipitation.gt(100).and(precipitation.lt(300));
var elev_suit = elevation.lt(2000);
var ndvi_suit = ndvi.gt(0.3).and(ndvi.lt(0.7));

// Combine factors (equal weights)
var env_risk = temp_suit.add(precip_suit).add(elev_suit).add(ndvi_suit);

// Population-weighted risk
var malaria_risk = env_risk.multiply(population_density);
\`\`\`

**Risk Classification:**
- **Very Low**: 0-20% of maximum risk
- **Low**: 20-40% 
- **Moderate**: 40-60%
- **High**: 60-80%
- **Very High**: 80-100%

**Validation:**
- Compare model with actual case data
- Check against known transmission zones
- Validate with expert knowledge`,
    category: "tutorial",
    difficulty: "advanced",
    keywords: ["malaria", "risk mapping", "environmental factors", "disease modeling"]
  },

  // Programming and AI Help
  "python_gis_setup": {
    title: "Python GIS Environment Setup",
    content: `**Essential packages for GIS in Python:**
\`\`\`bash
# Core GIS packages
pip install geopandas folium earthengine-api

# Data analysis
pip install pandas numpy matplotlib seaborn

# Machine learning
pip install scikit-learn

# Jupyter/Colab specific
pip install geemap ipyleaflet
\`\`\`

**Google Colab setup:**
\`\`\`python
# Run this cell first in Colab
!pip install earthengine-api geemap geopandas folium

import ee
import geemap
import geopandas as gpd
import pandas as pd
import folium
import matplotlib.pyplot as plt

# Authenticate Earth Engine
ee.Authenticate()
ee.Initialize()
\`\`\`

**Common import errors and fixes:**
- **ModuleNotFoundError**: Install missing package with pip
- **ImportError**: Restart kernel after installation
- **Authentication errors**: Re-run ee.Authenticate()

**Working with shapefiles in Python:**
\`\`\`python
# Read shapefile
gdf = gpd.read_file('uganda_districts.shp')

# Basic info
print(gdf.head())
print(gdf.crs)  # Check coordinate system
print(gdf.shape)  # Number of features

# Reproject if needed
gdf_utm = gdf.to_crs('EPSG:32636')

# Simple map
gdf.plot(figsize=(10, 8))
plt.show()
\`\`\`

**Combining with Earth Engine:**
\`\`\`python
# Convert GEE image to numpy array
import numpy as np

# Sample image at points
points = ee.FeatureCollection('your_points')
sampled = image.sampleRegions(collection=points, scale=30)

# Export to drive for download
task = ee.batch.Export.table.toDrive(
    collection=sampled,
    description='sampled_data',
    fileFormat='CSV'
)
task.start()
\`\`\``,
    category: "tutorial",
    difficulty: "intermediate",
    keywords: ["python", "setup", "geopandas", "colab", "packages"]
  },

  "ai_assisted_gis": {
    title: "Using AI for GIS Programming",
    content: `**Effective AI prompts for GIS:**

**1. Code generation:**
"Write Google Earth Engine JavaScript code to:
- Load Landsat 8 imagery for Uganda in 2020
- Filter for images with <20% cloud cover  
- Calculate NDVI and display with green color palette
- Export the result to Google Drive"

**2. Debugging help:**
"I'm getting this error in QGIS: [paste error]
Here's what I was trying to do: [describe task]
How do I fix this?"

**3. Concept explanation:**
"Explain the difference between raster and vector data in GIS, with examples relevant to health mapping"

**4. Code optimization:**
"How can I make this Google Earth Engine code run faster: [paste code]"

**5. Analysis guidance:**
"What's the best way to analyze healthcare accessibility using QGIS? I have facility locations and population data."

**Best practices:**
- Be specific about your data and location
- Include error messages when debugging
- Ask for step-by-step instructions
- Request code comments for learning
- Specify your software (QGIS, GEE, Python)

**AI tools for GIS:**
- **ChatGPT/Claude**: Code generation, debugging, concept explanation
- **GitHub Copilot**: Real-time code completion
- **Google Bard**: Earth Engine specific help
- **Stack Overflow**: Community Q&A with AI summaries

**Example workflow:**
1. Ask AI to generate initial code
2. Test and identify issues
3. Ask AI to debug specific errors
4. Request explanations of complex parts
5. Ask for optimization suggestions`,
    category: "tutorial", 
    difficulty: "intermediate",
    keywords: ["ai", "chatgpt", "programming", "debugging", "code generation"]
  },

  // Troubleshooting Common Issues
  "qgis_common_errors": {
    title: "QGIS Common Errors and Solutions",
    content: `**1. Layer not visible after loading:**
- Check layer is turned ON (checkbox in Layers panel)
- Right-click layer → Zoom to Layer
- Check if layer is behind others (drag up in panel)
- Verify symbology has visible colors
- Check coordinate system matches project

**2. "Invalid geometry" errors:**
- Vector → Geometry Tools → Fix Geometries
- Creates new layer with repaired geometry
- Always backup original data first

**3. Coordinate system problems:**
- Data appears in wrong location
- Enable "On-the-fly CRS transformation"
- Set correct CRS: Right-click layer → Set CRS
- For Uganda: Use EPSG:32636 (UTM Zone 36N)

**4. Analysis tools grayed out:**
- Check Processing Toolbox is enabled
- View → Panels → Processing Toolbox
- Some tools require vector/raster input to be selected

**5. Slow performance:**
- Simplify complex geometries
- Use spatial indexes: Vector → Data Management → Create Spatial Index
- Reduce number of features displayed
- Close unused layers

**6. Export/save issues:**
- Right-click layer → Export → Save Features As
- Choose appropriate format (Shapefile, GeoJSON, etc.)
- Verify coordinate system in export dialog

**7. Plugin problems:**
- Plugins → Manage and Install Plugins
- Check plugin is enabled
- Restart QGIS if plugin not working
- Update plugins regularly

**8. Memory errors with large datasets:**
- Process data in smaller chunks
- Use "Selected features only" option
- Increase virtual memory in system settings
- Consider using PostGIS for very large datasets`,
    category: "troubleshooting",
    difficulty: "beginner",
    keywords: ["errors", "troubleshooting", "qgis", "problems", "solutions"]
  },

  "gee_common_errors": {
    title: "Google Earth Engine Common Errors",
    content: `**1. "User memory limit exceeded":**
- Reduce study area with .clip(geometry)
- Limit time range with .filterDate()
- Select specific bands with .select(['B4', 'B3', 'B2'])
- Use coarser resolution with .reproject(scale=100)
- Sample data instead of processing full images

**2. "Computation timed out":**
- Simplify complex calculations
- Use .limit(100) to reduce collection size
- Break analysis into smaller chunks
- Use .getInfo() sparingly (very slow)

**3. "Export failed" errors:**
- Check Google Drive has enough space
- Reduce export resolution (increase scale parameter)
- Limit export region size
- Use maxPixels parameter: maxPixels: 1e9

**4. Authentication issues:**
- Re-run ee.Authenticate() 
- Clear browser cache
- Check you have Earth Engine access approved
- Restart kernel/runtime after authentication

**5. "Collection.first() is not a function":**
- You're treating ImageCollection as Image
- Use .first() to get single image: collection.first()
- Or use reduction: collection.median()

**6. "Image.select: Pattern 'B1' did not match any bands":**
- Check band names with: print(image.bandNames())
- Different satellites have different band names
- Landsat 8: B1-B11, Sentinel-2: B1-B12

**7. JavaScript vs Python syntax:**
- JavaScript: var, camelCase, semicolons
- Python: snake_case, no var, indentation
- Use correct syntax for your platform

**8. Visualization not showing:**
- Check visualization parameters (min, max, bands)
- Ensure image has data in your area
- Use Map.centerObject() to focus on data
- Check image date range and cloud cover

**Quick debugging tips:**
- Use print() statements to check intermediate results
- Start with small test areas
- Check data availability for your region/time
- Use Inspector tool to click and see pixel values`,
    category: "troubleshooting", 
    difficulty: "intermediate",
    keywords: ["google earth engine", "errors", "memory", "timeout", "debugging"]
  }
}

/**
 * Search function for expanded knowledge
 */
export function searchExpandedKnowledge(query: string, limit: number = 5) {
  const searchTerms = query.toLowerCase().split(' ')
  const results: Array<{item: any, score: number}> = []

  Object.entries(EXPANDED_TUTORIAL_KNOWLEDGE).forEach(([key, item]) => {
    let score = 0
    
    searchTerms.forEach(term => {
      // Title matches get highest score
      if (item.title.toLowerCase().includes(term)) score += 20
      
      // Keyword matches get high score  
      if (item.keywords.some(keyword => keyword.includes(term))) score += 15
      
      // Content matches get medium score
      if (item.content.toLowerCase().includes(term)) score += 5
      
      // Category matches get bonus
      if (item.category === "tutorial" && (term === "how" || term === "tutorial")) score += 10
      if (item.category === "troubleshooting" && (term === "error" || term === "problem")) score += 10
    })

    // Boost beginner content
    if (item.difficulty === "beginner") score += 3

    if (score > 0) {
      results.push({item: {key, ...item}, score})
    }
  })

  return results
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(r => r.item)
}

/**
 * Generate direct tutorial response
 */
export function generateDirectTutorialResponse(query: string): string {
  const results = searchExpandedKnowledge(query, 3)
  
  if (results.length === 0) {
    return `I can help you with "${query}"! 🎓

📚 **I have comprehensive knowledge about:**
- **QGIS**: Data loading, styling, coordinate systems, analysis tools
- **Google Earth Engine**: Authentication, NDVI, image collections, exports  
- **Health GIS**: Facility analysis, malaria mapping, accessibility modeling
- **Programming**: Python setup, AI-assisted coding, debugging
- **Troubleshooting**: Common errors and solutions

**Popular tutorials:**
- "How to load data in QGIS"
- "NDVI calculation in Google Earth Engine"
- "Health facility accessibility analysis"
- "Coordinate system setup for Uganda"

What specific topic would you like help with?`
  }

  const topResult = results[0]
  
  return `${topResult.title} 📚

${topResult.content}

**💡 Difficulty level:** ${topResult.difficulty}

Need help with any specific step or have questions about this tutorial?`
} 