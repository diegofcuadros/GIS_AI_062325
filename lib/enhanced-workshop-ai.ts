/**
 * Enhanced Workshop AI Service
 * Designed for local deployment on Vercel with comprehensive knowledge
 * No external API dependencies - everything runs client-side
 */

// Comprehensive local knowledge base
const WORKSHOP_KNOWLEDGE = {
  // Detailed lab information
  labs: {
    lab1: {
      title: "QGIS Fundamentals & Health Facility Mapping",
      objectives: [
        "Install and navigate QGIS interface",
        "Load vector data (shapefiles, CSV)",
        "Understand coordinate reference systems",
        "Create choropleth maps with health data",
        "Join CSV attributes to polygon features",
        "Export publication-ready maps"
      ],
      detailedSteps: {
        "install_qgis": {
          title: "Installing QGIS",
          content: `**QGIS Installation Guide**

**Step 1: Download QGIS**
• Visit: https://qgis.org/en/site/forusers/download.html
• Choose your operating system (Windows/Mac/Linux)
• Download the Long Term Release (LTR) version

**Step 2: Installation Process**
• **Windows**: Run the .exe file, follow installation wizard
• **Mac**: Open .dmg file, drag QGIS to Applications folder
• **Linux**: Use package manager (apt, yum, etc.)

**Step 3: First Launch**
• Open QGIS Desktop
• The interface shows: Menu bar, Toolbars, Map canvas, Browser panel, Layers panel
• If panels are missing: View → Panels → check missing panels

**System Requirements:**
• RAM: 4GB minimum, 8GB+ recommended
• Storage: 2GB free space
• Graphics: Modern graphics card recommended`,
          troubleshooting: [
            "Installation fails → Run as administrator (Windows) or check permissions",
            "Won't start → Check system compatibility and update graphics drivers",
            "Interface looks wrong → Reset to default: Settings → Options → System → Reset"
          ]
        },
        "load_vector_data": {
          title: "Loading Vector Data in QGIS",
          content: `**Loading Shapefiles and Vector Data**

**Method 1: Using Menu (Recommended)**
1. Layer → Add Layer → Add Vector Layer
2. Click the "..." button next to "Vector Dataset(s)"
3. Navigate to your shapefile (.shp) or geopackage (.gpkg)
4. Select the file and click "Open"
5. Click "Add" to load the layer

**Method 2: Drag and Drop**
1. Open file explorer/finder
2. Drag the .shp file directly into QGIS map canvas
3. Layer loads automatically

**Method 3: Browser Panel**
1. Use Browser panel (left side)
2. Navigate to your data folder
3. Double-click the shapefile to load

**Supported Formats:**
• Shapefile (.shp + .shx + .dbf + .prj)
• GeoPackage (.gpkg) - preferred format
• GeoJSON (.geojson)
• KML/KMZ (.kml/.kmz)`,
          troubleshooting: [
            "File won't load → Check all shapefile components present (.shp, .shx, .dbf, .prj)",
            "Data appears in wrong location → Check coordinate reference system",
            "File path errors → Remove spaces and special characters from file/folder names",
            "Nothing visible → Right-click layer → Zoom to Layer"
          ]
        },
        "coordinate_systems": {
          title: "Understanding Coordinate Reference Systems",
          content: `**Coordinate Reference Systems (CRS) Explained**

**What is CRS?**
A mathematical system that defines how coordinates relate to real-world locations on Earth.

**Key Concepts:**
• **Geographic CRS**: Uses latitude/longitude (e.g., WGS 84)
• **Projected CRS**: Uses x/y coordinates in meters/feet (e.g., UTM)
• **EPSG Codes**: Standardized numbers for each CRS

**For Uganda (This Workshop):**
• **EPSG:4326 (WGS 84)**: For GPS coordinates, global context
• **EPSG:32636 (UTM Zone 36N)**: For measurements, local analysis
• **EPSG:21036 (Arc 1960 UTM 36N)**: Historical Uganda surveys

**Setting CRS in QGIS:**
1. **Project CRS**: Project → Properties → CRS tab
2. **Layer CRS**: Right-click layer → Properties → Source tab
3. **Reproject layer**: Right-click → Export → Save Features As → choose new CRS

**Why CRS Matters:**
• Wrong CRS = incorrect distances and areas
• Mismatched CRS = data won't align
• Proper CRS = accurate analysis results`,
          troubleshooting: [
            "Layers don't align → Check all layers use same CRS or enable on-the-fly projection",
            "Distances wrong → Use projected CRS (UTM) not geographic (lat/lon) for measurements",
            "Can't find Uganda CRS → Search for 'UTM 36N' or 'EPSG:32636'",
            "CRS keeps changing → Set project CRS permanently: Project → Properties → CRS"
          ]
        }
      },
      commonErrors: {
        "invalid_geometry": {
          problem: "Invalid geometry errors when processing data",
          cause: "Polygon boundaries intersect themselves or have topological errors",
          solution: "Vector → Geometry Tools → Fix Geometries",
          prevention: "Always validate data after import using Check Validity tool",
          code: "processing.run('native:fixgeometries', parameters)"
        },
        "crs_mismatch": {
          problem: "Layers appear in wrong locations or don't align",
          cause: "Different coordinate reference systems between layers",
          solution: "Reproject all layers to same CRS (EPSG:32636 for Uganda)",
          prevention: "Set project CRS before loading data",
          code: "Right-click layer → Export → Save Features As → Change CRS"
        },
        "file_path_spaces": {
          problem: "Data won't load or processing fails",
          cause: "File paths contain spaces or special characters",
          solution: "Rename files/folders to remove spaces, use underscores instead",
          prevention: "Always use simple names: my_data.shp not 'my data (2021).shp'",
          code: "mv 'file name.shp' file_name.shp"
        }
      }
    },
    lab2: {
      title: "Spatial Analysis for Health Applications",
      objectives: [
        "Perform buffer analysis around health facilities",
        "Calculate service areas and accessibility",
        "Use spatial queries and selection tools",
        "Join spatial and attribute data",
        "Analyze healthcare coverage gaps",
        "Create accessibility maps"
      ],
      detailedSteps: {
        "buffer_analysis": {
          title: "Buffer Analysis for Health Facilities",
          content: `**Creating Buffer Zones Around Health Facilities**

**Step 1: Prepare Data**
• Load health facilities point layer
• Ensure layer uses projected CRS (EPSG:32636 for Uganda)
• Check layer has valid geometry

**Step 2: Buffer Tool**
1. Vector → Geoprocessing Tools → Buffer
2. **Input layer**: Select health facilities
3. **Distance**: Enter buffer distance (e.g., 5000 for 5km)
4. **Segments**: Keep default (5) for smooth circles
5. **End cap style**: Round (for circles)
6. **Join style**: Round
7. **Dissolve result**: Check if you want overlapping buffers merged

**Step 3: Run Buffer**
• Click "Run" to execute
• New buffer layer appears
• Buffers show service catchment areas

**Distance Guidelines:**
• Walking distance: 1-5 km
• Vehicle access: 10-25 km
• Emergency services: 30-50 km
• Specialty care: 50+ km`,
          troubleshooting: [
            "Buffers wrong size → Check layer CRS is projected (meters), not geographic (degrees)",
            "No buffers created → Verify input layer has valid point geometry",
            "Buffers overlap messily → Use 'Dissolve result' option to merge overlapping areas",
            "Buffer tool missing → Enable Processing toolbox: Processing → Toolbox"
          ]
        },
        "spatial_join": {
          title: "Spatial Joins - Linking Data by Location",
          content: `**Joining Data Based on Spatial Relationships**

**What is Spatial Join?**
Links features from two layers based on their spatial relationship (within, intersects, nearest, etc.)

**Example: Facilities within Districts**
1. Vector → Data Management Tools → Join Attributes by Location
2. **Target features**: Districts (polygons)
3. **Join features**: Health facilities (points)
4. **Geometric predicate**: Contains (facilities within districts)
5. **Join type**: Take attributes of first feature
6. **Field summary**: Count (number of facilities per district)

**Common Spatial Relationships:**
• **Contains**: Points within polygons
• **Intersects**: Features that touch or overlap
• **Within distance**: Features within X meters
• **Nearest**: Closest features to each target

**Output Options:**
• **Count**: Number of features per area
• **Sum**: Total values (e.g., total beds per district)
• **Average**: Mean values per area
• **List**: Concatenate all values`,
          troubleshooting: [
            "No join results → Check both layers use same CRS",
            "Wrong counts → Verify geometric predicate (contains vs intersects)",
            "Missing features → Check for invalid geometries in both layers",
            "Tool crashes → Try with smaller datasets first"
          ]
        }
      }
    },
    lab3: {
      title: "Google Earth Engine & Remote Sensing",
      objectives: [
        "Authenticate and initialize Google Earth Engine",
        "Access satellite imagery collections",
        "Calculate vegetation indices (NDVI, EVI)",
        "Filter imagery by date and location",
        "Visualize results on interactive maps",
        "Export processed imagery"
      ],
      detailedSteps: {
        "gee_setup": {
          title: "Google Earth Engine Setup",
          content: `**Setting Up Google Earth Engine**

**Step 1: Account Setup**
• Visit: https://earthengine.google.com/
• Sign up with Google account
• Request access (usually approved quickly)
• Wait for approval email

**Step 2: Python Setup**
• Install: pip install earthengine-api
• Or in Colab: !pip install earthengine-api

**Step 3: Authentication**
\`\`\`python
import ee

# Authenticate (first time only)
ee.Authenticate()
# This opens browser → sign in → copy token back

# Initialize (every session)
ee.Initialize()

# Test connection
print(ee.Image('LANDSAT/LC08/C01/T1_TOA/LC08_001001_20140811').getInfo())
\`\`\`

**Step 4: Verify Setup**
• No errors = success!
• Test with simple image loading
• Check quota limits (sufficient for workshop)`,
          troubleshooting: [
            "Authentication fails → Clear browser cookies, try incognito mode",
            "Initialize error → Run ee.Authenticate() first",
            "Permission denied → Check Earth Engine access approved",
            "Quota exceeded → Wait 24 hours or use different account"
          ]
        },
        "ndvi_calculation": {
          title: "NDVI Calculation with Satellite Data",
          content: `**Calculating NDVI (Vegetation Index)**

**What is NDVI?**
• Normalized Difference Vegetation Index
• Measures vegetation health and density
• Range: -1 to +1 (higher = more vegetation)
• Formula: (NIR - Red) / (NIR + Red)

**Step 1: Load Sentinel-2 Data**
\`\`\`python
# Define area of interest
uganda = ee.Geometry.Rectangle([29.5, -1.5, 35.0, 4.0])

# Load Sentinel-2 collection
collection = (ee.ImageCollection('COPERNICUS/S2_SR')
  .filterDate('2020-01-01', '2020-12-31')
  .filterBounds(uganda)
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20)))

# Get median composite
image = collection.median()
\`\`\`

**Step 2: Calculate NDVI**
\`\`\`python
# Method 1: Using normalizedDifference
ndvi = image.normalizedDifference(['B8', 'B4']).rename('NDVI')

# Method 2: Manual calculation
nir = image.select('B8')
red = image.select('B4')
ndvi = nir.subtract(red).divide(nir.add(red)).rename('NDVI')
\`\`\`

**Step 3: Visualize**
\`\`\`python
# Create map
Map = geemap.Map()
Map.centerObject(uganda, 7)

# Add NDVI layer
vis_params = {
  'min': -0.2,
  'max': 0.8,
  'palette': ['blue', 'white', 'green']
}
Map.addLayer(ndvi, vis_params, 'NDVI')
Map
\`\`\``,
          troubleshooting: [
            "No data → Check date range and cloud filter",
            "NDVI values wrong → Verify band names (B8=NIR, B4=Red for Sentinel-2)",
            "Map won't display → Check geometry bounds are valid",
            "Out of memory → Reduce area or use fewer images"
          ]
        }
      }
    }
  },

  // Conversational responses for natural interaction
  conversational: {
    greetings: [
      "Hello! Ready to tackle some GIS challenges? What can I help you with?",
      "Hi there! I see you're working on {lab}. How's it going so far?",
      "Hey! I'm here to help with your workshop. What would you like to learn about?"
    ],
    encouragement: [
      "You're doing great! {concept} can be tricky at first, but you're getting it.",
      "Nice progress! Don't worry if {topic} seems complex - everyone finds it challenging initially.",
      "Excellent question! That shows you're really thinking about {concept}."
    ],
    clarification: [
      "I want to make sure I understand correctly - are you asking about {topic}?",
      "Just to clarify, are you working on {step} or something else?",
      "Let me make sure I've got this right - you're trying to {action}?"
    ],
    followUp: [
      "Does that make sense so far?",
      "Would you like me to explain any part in more detail?",
      "Are you ready to try the next step, or do you have other questions?",
      "How did that work for you?"
    ]
  },

  // Common question patterns and responses
  questionPatterns: {
    "how_to": {
      keywords: ["how to", "how do i", "how can i"],
      responseType: "step_by_step"
    },
    "what_is": {
      keywords: ["what is", "what does", "define", "explain"],
      responseType: "concept_explanation"
    },
    "error_help": {
      keywords: ["error", "not working", "failed", "problem", "issue", "broken"],
      responseType: "troubleshooting"
    },
    "comparison": {
      keywords: ["vs", "versus", "difference", "compare", "better"],
      responseType: "comparison"
    }
  }
}

// Enhanced response generator with conversation memory
export class EnhancedWorkshopAI {
  private conversationHistory: Array<{
    timestamp: Date
    userQuery: string
    response: string
    confidence: number
    topics: string[]
  }> = []

  private userContext = {
    currentLab: 'lab1',
    experienceLevel: 'beginner',
    recentTopics: [] as string[],
    strugglingAreas: [] as string[],
    successfulTopics: [] as string[]
  }

  constructor(initialLab: string = 'lab1') {
    this.userContext.currentLab = initialLab
  }

  // Main response generation method
  generateResponse(query: string, context?: any): {
    content: string
    type: 'guidance' | 'troubleshooting' | 'concept' | 'encouragement' | 'question'
    confidence: number
    quickActions: Array<{
      label: string
      type: 'followup' | 'related' | 'troubleshoot' | 'next_step'
    }>
    topics: string[]
  } {
    const queryLower = query.toLowerCase()
    const labInfo = WORKSHOP_KNOWLEDGE.labs[this.userContext.currentLab as keyof typeof WORKSHOP_KNOWLEDGE.labs]
    
    // Update context
    if (context) {
      this.userContext = { ...this.userContext, ...context }
    }

    // Analyze query type
    const queryType = this.analyzeQueryType(queryLower)
    const topics = this.extractTopics(queryLower)
    
    // Check for specific step-by-step guides
    const stepGuide = this.findStepByStepGuide(queryLower, labInfo)
    if (stepGuide) {
      return this.formatStepByStepResponse(stepGuide, topics)
    }

    // Check for error/troubleshooting
    if (queryType === 'error_help') {
      return this.generateTroubleshootingResponse(queryLower, labInfo, topics)
    }

    // Check for concept explanations
    if (queryType === 'what_is') {
      return this.generateConceptResponse(queryLower, topics)
    }

    // Check for comparisons
    if (queryType === 'comparison') {
      return this.generateComparisonResponse(queryLower, topics)
    }

    // Check if user needs encouragement
    if (this.needsEncouragement()) {
      return this.generateEncouragementResponse(query, topics)
    }

    // Default helpful response
    return this.generateDefaultResponse(query, labInfo, topics)
  }

  private analyzeQueryType(query: string): string {
    for (const [type, pattern] of Object.entries(WORKSHOP_KNOWLEDGE.questionPatterns)) {
      if (pattern.keywords.some(keyword => query.includes(keyword))) {
        return type
      }
    }
    return 'general'
  }

  private extractTopics(query: string): string[] {
    const topics = []
    
    // Lab-specific topics
    if (query.includes('qgis')) topics.push('QGIS')
    if (query.includes('shapefile')) topics.push('Shapefiles')
    if (query.includes('coordinate') || query.includes('crs')) topics.push('CRS')
    if (query.includes('buffer')) topics.push('Buffer Analysis')
    if (query.includes('earth engine') || query.includes('gee')) topics.push('Google Earth Engine')
    if (query.includes('ndvi')) topics.push('NDVI')
    if (query.includes('satellite')) topics.push('Satellite Imagery')
    
    return topics
  }

  private findStepByStepGuide(query: string, labInfo: any): any {
    if (!labInfo?.detailedSteps) return null

    for (const [key, guide] of Object.entries(labInfo.detailedSteps)) {
      const searchTerms = key.split('_').concat(guide.title.toLowerCase().split(' '))
      if (searchTerms.some(term => query.includes(term))) {
        return guide
      }
    }
    return null
  }

  private formatStepByStepResponse(guide: any, topics: string[]) {
    let content = `# ${guide.title}\n\n${guide.content}`
    
    if (guide.troubleshooting) {
      content += `\n\n## 🔧 Common Issues:\n\n`
      guide.troubleshooting.forEach((issue: string) => {
        content += `• ${issue}\n`
      })
    }

    content += `\n\n💡 **Need help with a specific step?** Just ask "explain step X" or tell me where you're stuck!`

    return {
      content,
      type: 'guidance' as const,
      confidence: 0.95,
      quickActions: [
        { label: 'Show me common errors', type: 'troubleshoot' },
        { label: 'What\'s the next step?', type: 'next_step' },
        { label: 'Explain a concept', type: 'related' }
      ],
      topics
    }
  }

  private generateTroubleshootingResponse(query: string, labInfo: any, topics: string[]) {
    // Try to match specific errors
    if (labInfo?.commonErrors) {
      for (const [errorKey, errorInfo] of Object.entries(labInfo.commonErrors)) {
        if (query.includes(errorKey.replace('_', ' ')) || 
            this.matchesErrorDescription(query, errorInfo)) {
          
          return {
            content: `## 🔧 ${errorInfo.problem}

**What's happening:**
${errorInfo.cause}

**Solution:**
${errorInfo.solution}

**How to prevent this:**
${errorInfo.prevention}

${errorInfo.code ? `**Quick fix:**\n\`${errorInfo.code}\`` : ''}

✅ **Try this solution and let me know how it goes!**`,
            type: 'troubleshooting' as const,
            confidence: 0.9,
            quickActions: [
              { label: 'Test the solution', type: 'followup' },
              { label: 'Similar problems', type: 'related' },
              { label: 'Prevention tips', type: 'related' }
            ],
            topics: topics.concat([errorInfo.problem])
          }
        }
      }
    }

    // Generic troubleshooting response
    return {
      content: `I can help you troubleshoot this! Let's work through it step by step. 🔍

**To help me understand the issue better:**

1. **What were you trying to do?** (e.g., "load a shapefile", "create a buffer")
2. **What did you expect to happen?**
3. **What actually happened?** (any error messages?)
4. **What lab and step are you on?**

**Quick checks for common issues:**
• ✅ File paths have no spaces or special characters
• ✅ All data layers use the same coordinate system  
• ✅ Required files are properly loaded
• ✅ QGIS/software is up to date

The more details you give me, the more specific help I can provide!`,
      type: 'troubleshooting' as const,
      confidence: 0.7,
      quickActions: [
        { label: 'Common QGIS errors', type: 'troubleshoot' },
        { label: 'File loading issues', type: 'troubleshoot' },
        { label: 'CRS problems', type: 'troubleshoot' }
      ],
      topics: topics.concat(['Troubleshooting'])
    }
  }

  private generateConceptResponse(query: string, topics: string[]) {
    // Handle specific concepts
    if (query.includes('coordinate') || query.includes('crs')) {
      return {
        content: `# Understanding Coordinate Reference Systems (CRS) 🌍

**Think of CRS like addresses for locations on Earth!**

**Simple explanation:**
• CRS tells your computer exactly where things are located
• Like how you need a postal system to deliver mail
• Different CRS = different "addressing systems" for the same place

**The two main types:**
1. **Geographic CRS** (like WGS 84): Uses latitude/longitude
   - Good for: GPS coordinates, global maps
   - Units: Degrees
   
2. **Projected CRS** (like UTM): Uses X/Y coordinates  
   - Good for: Measurements, local analysis
   - Units: Meters or feet

**For Uganda (this workshop):**
• **EPSG:4326 (WGS 84)**: For GPS data and global context
• **EPSG:32636 (UTM Zone 36N)**: For measurements and analysis

**Why it matters:**
• Wrong CRS = wrong distances and areas calculated
• Mixed CRS = your data won't line up properly
• Correct CRS = accurate analysis results

🎯 **Quick rule:** When in doubt for Uganda, use EPSG:32636!`,
        type: 'concept' as const,
        confidence: 0.95,
        quickActions: [
          { label: 'How to set CRS in QGIS', type: 'followup' },
          { label: 'Fix CRS alignment issues', type: 'troubleshoot' },
          { label: 'More about map projections', type: 'related' }
        ],
        topics: topics.concat(['CRS', 'Coordinate Systems'])
      }
    }

    if (query.includes('vector') || query.includes('raster')) {
      return {
        content: `# Vector vs Raster Data 📊

**Vector Data = Precise Shapes**
• Made of: Points, lines, and polygons
• Examples: Health facilities (points), roads (lines), districts (polygons)
• Good for: Exact locations, boundaries, networks
• File types: .shp, .gpkg, .geojson

**Raster Data = Grid of Pixels**
• Made of: Grid cells/pixels with values
• Examples: Satellite images, elevation, temperature
• Good for: Continuous data, modeling, imagery analysis
• File types: .tif, .img, .jpg

**In Health GIS:**
• **Vector**: Hospital locations, district boundaries, patient addresses
• **Raster**: Population density, climate variables, disease risk surfaces

**When to use which:**
• **Vector**: When you need precise locations and boundaries
• **Raster**: When working with continuous data or satellite imagery

**Key difference:** Vector keeps exact shapes, raster has pixel resolution limits.`,
        type: 'concept' as const,
        confidence: 0.9,
        quickActions: [
          { label: 'Loading vector data', type: 'followup' },
          { label: 'Working with raster data', type: 'followup' },
          { label: 'Converting between formats', type: 'related' }
        ],
        topics: topics.concat(['Vector Data', 'Raster Data'])
      }
    }

    // Generic concept response
    return {
      content: `I'd love to explain that concept! Could you be more specific about what you'd like to understand?

**I can explain:**
• **GIS fundamentals**: What is GIS, spatial analysis, coordinate systems
• **Data types**: Vector vs raster, shapefiles, attribute tables
• **Software**: QGIS tools, Google Earth Engine, Python libraries
• **Analysis methods**: Buffers, spatial joins, remote sensing
• **Health applications**: Disease mapping, accessibility analysis

**Just ask something like:**
• "What is spatial analysis?"
• "Explain buffer analysis"
• "How does satellite imagery work?"

What specific concept would you like me to break down for you?`,
      type: 'concept' as const,
      confidence: 0.6,
      quickActions: [
        { label: 'GIS basics', type: 'related' },
        { label: 'Common concepts', type: 'related' },
        { label: 'Health GIS applications', type: 'related' }
      ],
      topics: topics.concat(['Concepts'])
    }
  }

  private generateComparisonResponse(query: string, topics: string[]) {
    // Handle specific comparisons
    if ((query.includes('vector') && query.includes('raster')) || 
        (query.includes('shapefile') && query.includes('raster'))) {
      return this.generateConceptResponse(query, topics)
    }

    if (query.includes('qgis') && query.includes('arcgis')) {
      return {
        content: `# QGIS vs ArcGIS Comparison 🗺️

**QGIS (What we're using):**
✅ **Free and open source** - No licensing costs
✅ **Cross-platform** - Windows, Mac, Linux
✅ **Powerful analysis tools** - Rivals expensive software
✅ **Large community** - Lots of tutorials and plugins
✅ **Regular updates** - New features every few months

**ArcGIS:**
✅ **Industry standard** - Widely used professionally
✅ **Integrated ecosystem** - All tools work together seamlessly
✅ **Professional support** - Direct help from ESRI
❌ **Expensive licensing** - Thousands per year
❌ **Windows-focused** - Limited Mac/Linux support

**For this workshop:**
• QGIS provides all functionality we need
• Skills transfer easily to ArcGIS
• Many concepts and workflows are identical
• Learning QGIS first actually helps understand GIS principles better

**Bottom line:** Master GIS concepts in QGIS, and you'll be ready for any GIS software!`,
        type: 'concept' as const,
        confidence: 0.9,
        quickActions: [
          { label: 'QGIS advantages', type: 'related' },
          { label: 'Skill transferability', type: 'related' },
          { label: 'Professional GIS careers', type: 'related' }
        ],
        topics: topics.concat(['QGIS', 'ArcGIS', 'Software Comparison'])
      }
    }

    // Generic comparison response
    return {
      content: `I can help you compare different options! What specifically would you like me to compare?

**Common GIS comparisons I can explain:**
• **Software**: QGIS vs ArcGIS, desktop vs web GIS
• **Data formats**: Vector vs raster, shapefile vs geopackage
• **Analysis methods**: Buffer vs proximity, join vs spatial join
• **Coordinate systems**: Geographic vs projected, different UTM zones
• **Satellite data**: Landsat vs Sentinel, optical vs radar

**Just ask something like:**
• "QGIS vs ArcGIS differences"
• "Shapefile vs geopackage format"  
• "Buffer analysis vs proximity tools"

What would you like me to compare for you?`,
      type: 'concept' as const,
      confidence: 0.6,
      quickActions: [
        { label: 'Software options', type: 'related' },
        { label: 'Data format choices', type: 'related' },
        { label: 'Analysis methods', type: 'related' }
      ],
      topics: topics.concat(['Comparisons'])
    }
  }

  private needsEncouragement(): boolean {
    const recentErrors = this.conversationHistory
      .slice(-3)
      .filter(entry => entry.topics.includes('Troubleshooting')).length
    
    return recentErrors >= 2
  }

  private generateEncouragementResponse(query: string, topics: string[]) {
    const labInfo = WORKSHOP_KNOWLEDGE.labs[this.userContext.currentLab as keyof typeof WORKSHOP_KNOWLEDGE.labs]
    
    return {
      content: `I can see you're working hard on this! 🤗 ${labInfo?.title || 'GIS'} can definitely feel overwhelming sometimes - that's completely normal.

**You're not alone in this:**
• Every GIS professional started exactly where you are now
• These concepts become clearer with practice
• Getting stuck means you're pushing your understanding forward!

**Let's tackle this together:**
• We can break down any problem into smaller steps
• There's no such thing as a "dumb question" 
• Every challenge you overcome makes the next one easier

**Here's what I suggest:**
1. Take a deep breath - you've got this! 💪
2. Let's focus on just one small step at a time
3. Tell me exactly where you're stuck, and I'll guide you through it

What specific part would you like to start with? I'm here to help you succeed! 🎯`,
      type: 'encouragement' as const,
      confidence: 0.8,
      quickActions: [
        { label: 'Start with basics', type: 'followup' },
        { label: 'Common beginner tips', type: 'related' },
        { label: 'Break down the problem', type: 'followup' }
      ],
      topics: topics.concat(['Encouragement', 'Learning Support'])
    }
  }

  private generateDefaultResponse(query: string, labInfo: any, topics: string[]) {
    return {
      content: `I'm here to help with "${query}"! 

${labInfo ? `For **${labInfo.title}**, I can assist you with:` : 'I can help you with:'}

${labInfo?.objectives ? 
  labInfo.objectives.map((obj: string) => `• ${obj}`).join('\n') :
  `• QGIS fundamentals and troubleshooting
• Google Earth Engine and remote sensing  
• Spatial analysis concepts and methods
• Data management and visualization
• Step-by-step guidance through all labs`
}

🤔 **To give you the best help, could you be more specific?** 

For example:
• "How do I load a shapefile in QGIS?"
• "What does this error message mean?"
• "Explain coordinate reference systems"
• "Show me step-by-step buffer analysis"

The more details you provide, the more targeted help I can give you!`,
      type: 'question' as const,
      confidence: 0.6,
      quickActions: [
        { label: 'Common questions', type: 'related' },
        { label: 'Getting started guide', type: 'followup' },
        { label: 'Browse lab topics', type: 'related' }
      ],
      topics
    }
  }

  private matchesErrorDescription(query: string, errorInfo: any): boolean {
    const errorText = `${errorInfo.problem} ${errorInfo.cause} ${errorInfo.solution}`.toLowerCase()
    const queryWords = query.split(' ').filter(word => word.length > 3)
    return queryWords.some(word => errorText.includes(word))
  }

  // Update user context based on interaction
  updateContext(userQuery: string, response: string, helpful: boolean = true) {
    const topics = this.extractTopics(userQuery.toLowerCase())
    
    this.conversationHistory.push({
      timestamp: new Date(),
      userQuery,
      response,
      confidence: helpful ? 0.8 : 0.4,
      topics
    })

    // Update user context
    this.userContext.recentTopics = [
      ...topics,
      ...this.userContext.recentTopics
    ].slice(0, 10) // Keep last 10 topics

    if (helpful) {
      this.userContext.successfulTopics = [
        ...topics,
        ...this.userContext.successfulTopics
      ].slice(0, 5)
    } else {
      this.userContext.strugglingAreas = [
        ...topics,
        ...this.userContext.strugglingAreas
      ].slice(0, 5)
    }
  }

  // Get context-aware suggestions
  getContextualSuggestions(): string[] {
    const labInfo = WORKSHOP_KNOWLEDGE.labs[this.userContext.currentLab as keyof typeof WORKSHOP_KNOWLEDGE.labs]
    
    if (labInfo?.objectives) {
      return labInfo.objectives.slice(0, 4).map(obj => `How to: ${obj}`)
    }

    return [
      "How do I get started with QGIS?",
      "What is coordinate reference system?",
      "Help with loading data",
      "Common errors and solutions"
    ]
  }

  // Set current lab context
  setCurrentLab(lab: string) {
    this.userContext.currentLab = lab
  }
}

// Export singleton instance
export const enhancedWorkshopAI = new EnhancedWorkshopAI() 