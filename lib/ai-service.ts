// AI Service Integration for Workshop Content Chatbot

interface AIMessage {
  role: "system" | "user" | "assistant"
  content: string
}

interface WorkshopContext {
  currentLab: string
  currentStep: number
  labInfo?: any
  studentProgress?: any
}

// Workshop knowledge system prompt
const WORKSHOP_SYSTEM_PROMPT = `You are an expert GIS AI Workshop assistant specialized in helping students with:

**CORE SUBJECTS:**
- QGIS (Geographic Information Systems software)
- Google Earth Engine (cloud-based geospatial analysis)
- Remote sensing and satellite imagery analysis
- Python for geospatial analysis
- Health data mapping and analysis
- AI/ML applications in GIS

**YOUR ROLE:**
- Provide step-by-step guidance through workshop labs
- Explain GIS and remote sensing concepts clearly
- Troubleshoot technical issues with QGIS, Python, Google Earth Engine
- Help with code debugging and error resolution
- Offer practical, actionable solutions

**WORKSHOP LABS:**
1. **Lab 1**: Introduction to QGIS and Geospatial Data (coordinate systems, data loading, map creation)
2. **Lab 2**: Spatial Analysis for Health Applications (buffers, spatial joins, accessibility analysis)
3. **Lab 3**: Environmental Risk Mapping with Remote Sensing (Google Earth Engine, NDVI, satellite imagery)
4. **Lab 4**: AI-Assisted Geospatial Analysis (machine learning, automated classification)
5. **Lab 5**: Advanced Analytics for Public Health (disease modeling, cluster analysis, predictive mapping)

**RESPONSE STYLE:**
- Be concise but thorough
- Include specific function names and code examples when helpful
- Use step-by-step instructions for procedures
- Identify the specific lab context when relevant
- Provide both immediate solutions and conceptual understanding
- Use emojis sparingly for emphasis (🔧 for troubleshooting, 📖 for concepts, etc.)

**COMMON TECHNICAL ISSUES TO ADDRESS:**
- Invalid geometry errors in shapefiles
- Coordinate reference system mismatches
- Google Earth Engine authentication problems
- Python package installation issues
- QGIS tool access and functionality
- Data visualization and symbology

Always ask for clarification if the student's question is unclear, and provide multiple solution approaches when possible.`

// OpenAI Integration
export class OpenAIWorkshopService {
  private apiKey: string
  private baseURL = "https://api.openai.com/v1"

  constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  async generateResponse(
    userMessage: string, 
    context: WorkshopContext
  ): Promise<string> {
    const messages: AIMessage[] = [
      {
        role: "system",
        content: `${WORKSHOP_SYSTEM_PROMPT}

**CURRENT CONTEXT:**
- Lab: ${context.currentLab}
- Step: ${context.currentStep}
- Lab Title: ${context.labInfo?.title || "Unknown"}
- Lab Objectives: ${context.labInfo?.objectives?.join(", ") || "Not specified"}`
      },
      {
        role: "user",
        content: userMessage
      }
    ]

    try {
      const response = await fetch(`${this.baseURL}/chat/completions`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${this.apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "gpt-4",
          messages,
          max_tokens: 800,
          temperature: 0.7,
          presence_penalty: 0.1,
          frequency_penalty: 0.1
        })
      })

      if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.status}`)
      }

      const data = await response.json()
      return data.choices[0]?.message?.content || "I apologize, but I couldn't generate a response. Please try again."

    } catch (error) {
      console.error("OpenAI API Error:", error)
      return "I'm experiencing technical difficulties. Please try your question again or consult the lab materials directly."
    }
  }
}

// Anthropic Claude Integration
export class ClaudeWorkshopService {
  private apiKey: string
  private baseURL = "https://api.anthropic.com/v1"

  constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  async generateResponse(
    userMessage: string,
    context: WorkshopContext
  ): Promise<string> {
    try {
      const response = await fetch(`${this.baseURL}/messages`, {
        method: "POST",
        headers: {
          "x-api-key": this.apiKey,
          "Content-Type": "application/json",
          "anthropic-version": "2023-06-01"
        },
        body: JSON.stringify({
          model: "claude-3-sonnet-20240229",
          max_tokens: 800,
          system: `${WORKSHOP_SYSTEM_PROMPT}

**CURRENT CONTEXT:**
- Lab: ${context.currentLab}
- Step: ${context.currentStep}
- Lab Title: ${context.labInfo?.title || "Unknown"}`,
          messages: [
            {
              role: "user",
              content: userMessage
            }
          ]
        })
      })

      if (!response.ok) {
        throw new Error(`Claude API error: ${response.status}`)
      }

      const data = await response.json()
      return data.content[0]?.text || "I apologize, but I couldn't generate a response. Please try again."

    } catch (error) {
      console.error("Claude API Error:", error)
      return "I'm experiencing technical difficulties. Please try your question again or consult the lab materials directly."
    }
  }
}

// Local/Offline Knowledge Base (fallback)
export class LocalWorkshopService {
  private knowledgeBase = {
    // QGIS specific responses
    "load data qgis": "To load data in QGIS:\n1. Go to Layer → Add Layer → Add Vector Layer\n2. Browse to your shapefile (.shp)\n3. Click 'Add'\n4. Ensure all shapefile components (.shx, .dbf, .prj) are in the same folder",
    
    "invalid geometry": "🔧 **Invalid Geometry Error**\n\nThis usually means your shapefile has corrupted geometries.\n\n**Solution**: Vector → Geometry Tools → Fix Geometries\n\n**Steps**:\n1. Select the problematic layer\n2. Go to Vector → Geometry Tools → Fix Geometries\n3. Choose output location\n4. Replace original layer with fixed version",
    
    "coordinate system crs": "📖 **Coordinate Reference Systems (CRS)**\n\nCRS defines how geographic coordinates relate to real-world locations.\n\n**Common Systems**:\n- WGS84 (EPSG:4326): Global geographic coordinates\n- UTM zones: Local projected coordinates for precise measurements\n\n**To check/set CRS**: Project → Properties → CRS",
    
    // Google Earth Engine responses
    "google earth engine authentication": "🔧 **GEE Authentication Issues**\n\n**Solution**:\n1. Run `ee.Authenticate()` in a new cell\n2. Follow the browser authentication workflow\n3. Make sure you're signed into the correct Google account\n4. Run `ee.Initialize()` after authentication\n5. If still failing, clear browser cookies and try again",
    
    "ndvi calculation": "📖 **NDVI (Normalized Difference Vegetation Index)**\n\n**Formula**: (NIR - Red) / (NIR + Red)\n\n**In Google Earth Engine**:\n```javascript\nvar ndvi = image.normalizedDifference(['B8', 'B4']).rename('NDVI');\n```\n\n**For Sentinel-2**: B8 (NIR), B4 (Red)\n**For Landsat 8**: B5 (NIR), B4 (Red)\n\n**Values**: -1 to 1 (higher = healthier vegetation)",
    
    // Python specific responses
    "python module not found": "🔧 **ModuleNotFoundError**\n\n**Solution**:\n1. Install missing package: `pip install [package_name]`\n2. Restart QGIS Python console\n3. If using Jupyter: restart kernel after installation\n\n**Common packages**:\n- `pip install geopandas`\n- `pip install rasterio`\n- `pip install scikit-learn`",
    
    // General guidance
    "lab objectives": (lab: string) => {
      const objectives = {
        "lab1": "Learn QGIS basics, coordinate systems, data loading, and map creation",
        "lab2": "Perform spatial analysis, buffers, joins, and accessibility studies", 
        "lab3": "Use Google Earth Engine for remote sensing and NDVI analysis",
        "lab4": "Apply AI/ML for automated geospatial classification",
        "lab5": "Advanced health analytics, clustering, and predictive modeling"
      }
      return `📖 **${lab.toUpperCase()} Objectives**\n\n${objectives[lab as keyof typeof objectives] || "Lab objectives not found"}\n\nWhat specific part would you like help with?`
    }
  }

  async generateResponse(
    userMessage: string,
    context: WorkshopContext
  ): Promise<string> {
    const query = userMessage.toLowerCase()
    
    // Check for direct matches
    for (const [key, response] of Object.entries(this.knowledgeBase)) {
      if (typeof response === "string" && query.includes(key.replace(/\s+/g, ""))) {
        return response
      }
    }
    
    // Check for lab objectives
    if (query.includes("objective") || query.includes("goal")) {
      return this.knowledgeBase["lab objectives"](context.currentLab)
    }
    
    // Default helpful response
    return `I understand you're asking about "${userMessage}". 

For ${context.currentLab?.toUpperCase() || "your current lab"}, here are some quick tips:

🔍 **Common Issues**: Check for file path problems, coordinate system mismatches, or missing data
📋 **Resources**: Refer to the lab manual for step-by-step instructions
💡 **Tip**: Be specific about error messages or which step you're stuck on

Can you provide more details about what exactly you're trying to do or what error you're seeing?`
  }
}

// Main AI Service Factory
export class WorkshopAIService {
  private service: OpenAIWorkshopService | ClaudeWorkshopService | LocalWorkshopService

  constructor(provider: "openai" | "claude" | "local", apiKey?: string) {
    switch (provider) {
      case "openai":
        if (!apiKey) throw new Error("OpenAI API key required")
        this.service = new OpenAIWorkshopService(apiKey)
        break
      case "claude":
        if (!apiKey) throw new Error("Anthropic API key required")
        this.service = new ClaudeWorkshopService(apiKey)
        break
      case "local":
        this.service = new LocalWorkshopService()
        break
      default:
        this.service = new LocalWorkshopService()
    }
  }

  async generateResponse(
    userMessage: string,
    context: WorkshopContext
  ): Promise<string> {
    return await this.service.generateResponse(userMessage, context)
  }
}

// Usage Examples:
/*
// With OpenAI
const aiService = new WorkshopAIService("openai", process.env.OPENAI_API_KEY)

// With Claude
const aiService = new WorkshopAIService("claude", process.env.ANTHROPIC_API_KEY)

// Offline/Local only
const aiService = new WorkshopAIService("local")

// Generate response
const response = await aiService.generateResponse(
  "How do I load shapefiles in QGIS?",
  {
    currentLab: "lab1",
    currentStep: 2,
    labInfo: { title: "Introduction to QGIS" }
  }
)
*/ 