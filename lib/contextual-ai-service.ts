// Contextual AI Service for Lab-Specific Assistance
// Provides step-specific guidance with direct links to lab content

import { labKnowledgeBase, getLabByNumber, getLabSection, getLabStep, searchLabContent } from './lab-knowledge-base';
import { EnhancedAIService } from './enhanced-ai-service';

export interface ContextualResponse {
  answer: string;
  currentStep?: {
    labNumber: string;
    sectionNumber: string;
    stepNumber: string;
    title: string;
  };
  directLinks: {
    text: string;
    url: string;
    type: 'current_step' | 'next_step' | 'previous_step' | 'related_lab' | 'external';
  }[];
  relatedSteps: {
    title: string;
    url: string;
    description: string;
  }[];
  troubleshooting?: string[];
  tips?: string[];
}

export interface LabContext {
  currentLab?: string;
  currentSection?: string;
  currentStep?: string;
  pageUrl?: string;
  pageContent?: string;
}

export class ContextualAIService {
  
  /**
   * Detect lab context from URL and page content
   */
  static detectLabContext(url: string, pageContent?: string): LabContext {
    const context: LabContext = { pageUrl: url };
    
    // Extract lab number from URL patterns
    const labMatch = url.match(/\/labs?\/(lab)?(\d+)/i);
    if (labMatch) {
      context.currentLab = labMatch[2];
    }
    
    // Extract section from URL hash or content
    const sectionMatch = url.match(/(?:#|section-)(\d+\.?\d*)/i);
    if (sectionMatch) {
      context.currentSection = sectionMatch[1];
    }
    
    // Extract step from URL or content
    const stepMatch = url.match(/(?:#|step-)(\d+)/i) || 
                     (pageContent && pageContent.match(/Step\s+(\d+):/i));
    if (stepMatch) {
      context.currentStep = stepMatch[1];
    }
    
    // Analyze page content for context clues
    if (pageContent) {
      // Look for section headers
      const sectionHeaderMatch = pageContent.match(/(\d+\.\d+)\s+([^<\n]+)/);
      if (sectionHeaderMatch && !context.currentSection) {
        context.currentSection = sectionHeaderMatch[1];
      }
      
      // Look for step indicators
      const stepHeaderMatch = pageContent.match(/Step\s+(\d+):\s*([^<\n]+)/i);
      if (stepHeaderMatch && !context.currentStep) {
        context.currentStep = stepHeaderMatch[1];
      }
    }
    
    return context;
  }
  
  /**
   * Generate contextual response based on user query and lab context
   */
  static generateContextualResponse(
    query: string, 
    context: LabContext
  ): ContextualResponse {
    const queryLower = query.toLowerCase();
    
    // Get current step information if available
    const currentStepInfo = context.currentLab && context.currentSection && context.currentStep
      ? getLabStep(context.currentLab, context.currentSection, context.currentStep)
      : null;
    
    const currentSectionInfo = context.currentLab && context.currentSection
      ? getLabSection(context.currentLab, context.currentSection)
      : null;
    
    const currentLabInfo = context.currentLab
      ? getLabByNumber(context.currentLab)
      : null;
    
    // Search for relevant content
    const searchResults = searchLabContent(query, context.currentLab);
    
    // Generate response based on query type and context
    if (this.isCSVImportQuery(queryLower)) {
      return this.generateCSVImportResponse(context, currentStepInfo, currentSectionInfo);
    }
    
    if (this.isJoinDataQuery(queryLower)) {
      return this.generateJoinDataResponse(context, currentStepInfo, currentSectionInfo);
    }
    
    if (this.isBufferAnalysisQuery(queryLower)) {
      return this.generateBufferAnalysisResponse(context, currentStepInfo);
    }
    
    if (this.isSpatialQueryQuery(queryLower)) {
      return this.generateSpatialQueryResponse(context, currentStepInfo);
    }
    
    if (this.isSymbologyQuery(queryLower)) {
      return this.generateSymbologyResponse(context, currentStepInfo);
    }
    
    // General contextual response
    return this.generateGeneralContextualResponse(query, context, searchResults, currentStepInfo, currentLabInfo);
  }
  
  private static isCSVImportQuery(query: string): boolean {
    return query.includes('import') && (query.includes('csv') || query.includes('malaria') || query.includes('data'));
  }
  
  private static generateCSVImportResponse(
    context: LabContext, 
    currentStep: any, 
    currentSection: any
  ): ContextualResponse {
    const isOnCorrectStep = currentStep?.title.toLowerCase().includes('import') && 
                           currentStep?.title.toLowerCase().includes('csv');
    
    const baseAnswer = `**Importing CSV Data in QGIS (Lab Context)**

For importing malaria prevalence data or other CSV files:

1. Click "Layer" → "Add Layer" → "Add Delimited Text Layer"
2. Browse to your CSV file (e.g., malaria_prevalence.csv)
3. Ensure "CSV (comma separated values)" is selected
4. Under "Geometry Definition," select "No geometry (attribute table only)"
5. Click "Add" then "Close"

**Key Points:**
• CSV files contain statistical data without coordinates
• Data will be joined to spatial features using common fields
• Verify CSV has proper headers and consistent formatting`;

    const links = [];
    const troubleshooting = [
      "If CSV won't load, check file format and encoding (should be UTF-8)",
      "Ensure file path is correct and accessible",
      "Verify CSV has proper headers and consistent formatting",
      "Check for special characters in file path that might cause issues"
    ];

    if (context.currentLab === "1" || context.currentLab === "3") {
      if (isOnCorrectStep) {
        links.push({
          text: "✅ You're on the right step! Complete instructions here",
          url: `/labs/lab${context.currentLab}#section-3-3-step-5`,
          type: 'current_step' as const
        });
      } else {
        links.push({
          text: "📍 Go to Lab 1, Section 3.3, Step 5: Import Malaria Prevalence Data",
          url: `/labs/lab1#section-3-3-step-5`,
          type: 'related_lab' as const
        });
      }
      
      links.push({
        text: "➡️ Next: Step 6 - Join Data to District Boundaries",
        url: `/labs/lab${context.currentLab}#section-3-3-step-6`,
        type: 'next_step' as const
      });
    }

    return {
      answer: baseAnswer,
      currentStep: isOnCorrectStep ? {
        labNumber: context.currentLab!,
        sectionNumber: context.currentSection!,
        stepNumber: context.currentStep!,
        title: currentStep.title
      } : undefined,
      directLinks: links,
      relatedSteps: [
        {
          title: "Join Malaria Data to District Boundaries",
          url: `/labs/lab${context.currentLab || '1'}#section-3-3-step-6`,
          description: "After importing CSV, join it to spatial boundaries"
        }
      ],
      troubleshooting,
      tips: [
        "Always save CSV files with UTF-8 encoding to avoid character issues",
        "Check that district names match between your CSV and spatial data",
        "Remove any leading/trailing spaces from field values"
      ]
    };
  }
  
  private static isJoinDataQuery(query: string): boolean {
    return query.includes('join') || (query.includes('data') && query.includes('district'));
  }
  
  private static generateJoinDataResponse(
    context: LabContext,
    currentStep: any,
    currentSection: any
  ): ContextualResponse {
    const baseAnswer = `**Joining Data to District Boundaries in QGIS**

To join your malaria prevalence data to district boundaries:

1. Right-click on the Uganda_districts layer → "Properties"
2. Go to the "Joins" tab and click the "+" button
3. In the "Add Vector Join" dialog:
   • Set "Join layer" to your malaria prevalence CSV
   • Set "Join field" to the district name field in your CSV
   • Set "Target field" to the district name field in your shapefile
   • Check "Custom field name prefix" and leave blank
4. Click "OK" then "Apply"
5. Verify the join by opening the districts attribute table

**Critical Success Factors:**
• District names must match exactly between datasets
• Check for spelling differences, extra spaces, or special characters
• Both datasets should use consistent naming conventions`;

    const links = [];
    
    if (context.currentLab === "1" || context.currentLab === "3") {
      links.push({
        text: "📖 Complete instructions: Lab Section 3.3, Step 6",
        url: `/labs/lab${context.currentLab}#section-3-3-step-6`,
        type: 'current_step' as const
      });
      
      links.push({
        text: "Previous: Step 5 - Import CSV Data",
        url: `/labs/lab${context.currentLab}#section-3-3-step-5`,
        type: 'previous_step' as const
      });
    }

    return {
      answer: baseAnswer,
      directLinks: links,
      relatedSteps: [
        {
          title: "Import CSV Data First",
          url: `/labs/lab${context.currentLab || '1'}#section-3-3-step-5`,
          description: "Make sure you've imported your CSV data before joining"
        }
      ],
      troubleshooting: [
        "If join fails, check for spelling differences in district names",
        "Ensure both datasets use consistent naming conventions",
        "Look for extra spaces or special characters in field names",
        "Verify that the join fields contain matching values"
      ],
      tips: [
        "Use the attribute table to verify successful joins",
        "Clean data before joining to avoid common issues",
        "Consider creating a backup before performing joins"
      ]
    };
  }
  
  private static isBufferAnalysisQuery(query: string): boolean {
    return query.includes('buffer') || query.includes('catchment') || query.includes('access');
  }
  
  private static generateBufferAnalysisResponse(
    context: LabContext,
    currentStep: any
  ): ContextualResponse {
    const baseAnswer = `**Creating Buffer Zones for Health Facility Access Analysis**

To create 10km service catchment areas around health facilities:

1. Access Vector → Geoprocessing Tools → Buffer
2. Set Input layer to your health facilities shapefile
3. Specify Distance as 10,000 meters (10 km)
4. Maintain 20 segments for smooth circular buffers
5. Save output as "facility_buffers_10km.shp"

**Why 10km?**
• Represents 2-3 hours walking time in rural Uganda
• Aligns with WHO recommendations for basic health service access
• Accounts for realistic travel patterns in rural areas`;

    return {
      answer: baseAnswer,
      directLinks: [
        {
          text: "Full Buffer Analysis Tutorial - Lab 1",
          url: `/labs/lab1#section-3-4`,
          type: 'related_lab' as const
        }
      ],
      relatedSteps: [],
      troubleshooting: [
        "If buffers appear too large/small, check distance units (should be meters)",
        "Ensure project CRS uses meters for accurate measurements",
        "Verify input layer contains point features, not lines or polygons"
      ],
      tips: [
        "Use projected coordinate systems (UTM) for accurate distance calculations",
        "Higher segment count creates smoother circles but larger file sizes",
        "Consider different buffer distances for different facility types"
      ]
    };
  }
  
  private static isSpatialQueryQuery(query: string): boolean {
    return query.includes('spatial') && query.includes('query') || 
           query.includes('select') && query.includes('location') ||
           query.includes('underserved');
  }
  
  private static generateSpatialQueryResponse(
    context: LabContext,
    currentStep: any
  ): ContextualResponse {
    const baseAnswer = `**Spatial Query Analysis for Identifying Underserved Areas**

To find districts without adequate health facility coverage:

1. Navigate to Vector → Research Tools → Select by Location
2. Configure the query:
   • "Select features from" Uganda districts layer
   • "where the features" "do not intersect"
   • "by comparing to features from" facility buffers layer
3. Run the query to identify underserved districts

**Understanding Results:**
• "Do not intersect" finds areas completely outside buffer zones
• These districts represent highest priority for intervention
• Results show populations with poor spatial access to healthcare`;

    return {
      answer: baseAnswer,
      directLinks: [
        {
          text: "Spatial Query Analysis - Lab 1, Section 3.5",
          url: `/labs/lab1#section-3-5`,
          type: 'related_lab' as const
        }
      ],
      relatedSteps: [],
      troubleshooting: [
        "If no features selected, check layer visibility and CRS consistency",
        "Ensure buffer layer covers expected geographic area",
        "Verify both layers use the same coordinate reference system"
      ]
    };
  }
  
  private static isSymbologyQuery(query: string): boolean {
    return query.includes('symbology') || query.includes('color') || 
           query.includes('classification') || query.includes('choropleth');
  }
  
  private static generateSymbologyResponse(
    context: LabContext,
    currentStep: any
  ): ContextualResponse {
    const baseAnswer = `**Creating Choropleth Maps with Graduated Symbology**

To visualize malaria prevalence data:

1. Right-click districts layer → Properties → Symbology
2. Change from "Single Symbol" to "Graduated"
3. Select malaria prevalence field for "Value"
4. Choose appropriate color ramp (e.g., YlOrRd - yellow to red)
5. Select "Natural Breaks (Jenks)" classification method
6. Set 5 classes and click "Classify"

**Classification Methods:**
• **Natural Breaks**: Best for identifying data clusters and hotspots
• **Quantiles**: Equal number of features per class
• **Equal Interval**: Consistent ranges, good for comparing time periods`;

    return {
      answer: baseAnswer,
      directLinks: [
        {
          text: "Complete Symbology Tutorial - Lab 3",
          url: `/labs/lab3#section-3-4`,
          type: 'related_lab' as const
        }
      ],
      relatedSteps: [],
      tips: [
        "Sequential color schemes work best for disease mapping",
        "Natural Breaks often ideal for health data with clusters",
        "Consider your audience when choosing classification methods"
      ]
    };
  }
  
  private static generateGeneralContextualResponse(
    query: string,
    context: LabContext,
    searchResults: any[],
    currentStep: any,
    currentLab: any
  ): ContextualResponse {
    // Handle common GIS questions directly
    const queryLower = query.toLowerCase();
    
    if (queryLower.includes('create') && queryLower.includes('map')) {
      return {
        answer: `**Creating Maps in QGIS**

To create a map in QGIS:

1. **Load your data**: Use Layer → Add Layer (vector, raster, or CSV)
2. **Set symbology**: Right-click layer → Properties → Symbology
3. **Create layout**: Project → New Print Layout
4. **Add map frame**: Add Item → Add Map in the layout
5. **Add elements**: Title, legend, north arrow, scale bar
6. **Export**: Layout → Export as Image/PDF

**For this workshop specifically:**
• Lab 1: Health facility access maps with buffer analysis
• Lab 3: Malaria prevalence choropleth maps with graduated colors
• Use Uganda district data with health statistics`,
        directLinks: [
          {
            text: "📖 Lab 1: Health Facility Access Mapping",
            url: "/labs/lab1",
            type: 'related_lab'
          },
          {
            text: "🗺️ Lab 3: Malaria Mapping Tutorial", 
            url: "/labs/lab3",
            type: 'related_lab'
          }
        ],
        relatedSteps: [],
        tips: [
          "Always set a proper coordinate reference system first",
          "Use appropriate colors for your data type (sequential for quantities)",
          "Include all essential map elements for professional maps"
        ]
      };
    }
    
    if (queryLower.includes('layers') && queryLower.includes('add')) {
      return {
        answer: `**Adding Layers in QGIS**

To add layers to your QGIS project:

1. **Vector data**: Layer → Add Layer → Add Vector Layer
2. **Raster data**: Layer → Add Layer → Add Raster Layer  
3. **CSV data**: Layer → Add Layer → Add Delimited Text Layer
4. **Web services**: Layer → Add Layer → Add WMS/WFS Layer

**For workshop data:**
• Uganda districts: Use Add Vector Layer for .gpkg files
• Health facilities: Use Add Delimited Text Layer for CSV with coordinates
• Malaria data: Use Add Delimited Text Layer for attribute-only CSV`,
        directLinks: [
          {
            text: "📋 Lab 1 Step 3: Import District Boundaries",
            url: "/labs/lab1#section-3-2-step-3",
            type: 'related_lab'
          },
          {
            text: "📋 Lab 1 Step 4: Convert Facility Coordinates",
            url: "/labs/lab1#section-3-2-step-4", 
            type: 'related_lab'
          }
        ],
        relatedSteps: []
      };
    }
    
    // Handle coordinate reference system questions
    if (queryLower.includes('coordinate') && (queryLower.includes('reference') || queryLower.includes('system') || queryLower.includes('crs'))) {
      return {
        answer: `**What is a Coordinate Reference System (CRS)?**

A **Coordinate Reference System (CRS)** defines how geographic coordinates (latitude/longitude or x/y) relate to specific locations on Earth's surface.

**Why CRS Matters:**
• Ensures accurate measurement of distances and areas
• Prevents spatial data misalignment
• Critical for combining multiple datasets

**Common CRS Used:**
• **WGS 84 (EPSG:4326)**: Global standard for GPS coordinates
• **UTM zones**: For regional mapping with metric units  
• **Local projections**: Country-specific systems for detailed work

**In this Workshop:**
• Uganda data often uses WGS 84 UTM Zone 36N (EPSG:32636)
• Health facility coordinates typically in decimal degrees (WGS 84)
• Always verify CRS consistency when combining datasets

**QGIS CRS Settings:**
• Check layer CRS: Right-click layer → Properties → Source tab
• Set project CRS: Project → Properties → CRS tab
• Reproject layer: Right-click → Export → Save Features As (choose new CRS)`,
        directLinks: [
          {
            text: "🌍 Lab 1: Working with Uganda Coordinate Systems",
            url: "/labs/lab1#section-3-2",
            type: 'related_lab'
          },
          {
            text: "📚 QGIS CRS Documentation",
            url: "https://docs.qgis.org/latest/en/docs/user_manual/working_with_projections/working_with_projections.html",
            type: 'external'
          }
        ],
        relatedSteps: [],
        tips: [
          "When in doubt, use WGS 84 UTM Zone 36N for Uganda",
          "Check that all layers use the same CRS before analysis",
          "GPS coordinates are usually in WGS 84 decimal degrees"
        ]
      };
    }
    
    // Handle vector vs raster questions  
    if ((queryLower.includes('vector') || queryLower.includes('raster')) && (queryLower.includes('difference') || queryLower.includes('vs') || queryLower.includes('what'))) {
      return {
        answer: `**Vector vs Raster Data**

**Vector Data:**
• Represents discrete features using points, lines, and polygons
• Examples: Health facilities (points), roads (lines), districts (polygons)
• Stores attributes in tables linked to geographic features
• Ideal for: Administrative boundaries, facility locations, infrastructure

**Raster Data:**
• Grid of cells/pixels covering continuous areas
• Each cell has a value (elevation, temperature, rainfall)
• Examples: Satellite imagery, elevation models, climate data
• Ideal for: Environmental variables, remote sensing, modeling

**In Health GIS:**
• **Vector**: Hospital locations, district boundaries, travel routes
• **Raster**: Population density surfaces, climate variables, disease risk maps

**File Formats:**
• **Vector**: .shp, .gpkg, .geojson, .csv (with coordinates)
• **Raster**: .tif, .tiff, .img, .asc`,
        directLinks: [
          {
            text: "📊 Lab 1: Working with Vector Health Data",
            url: "/labs/lab1",
            type: 'related_lab'
          },
          {
            text: "🛰️ Lab 3: Raster Analysis for Malaria Mapping",
            url: "/labs/lab3",
            type: 'related_lab'
          }
        ],
        relatedSteps: [],
        tips: [
          "Use vector for discrete features, raster for continuous phenomena",
          "Vector data maintains precision, raster data has resolution limits",
          "Choose format based on your analysis needs"
        ]
      };
    }
    
    // Handle basic GIS questions
    if (queryLower.includes('what') && queryLower.includes('gis')) {
      return {
        answer: `**What is GIS (Geographic Information System)?**

**GIS** is a technology that captures, stores, analyzes, and displays geographic information to solve real-world problems.

**Core Components:**
• **Geographic Data**: Spatial information about features on Earth
• **Software**: Tools like QGIS for data analysis and visualization  
• **Analysis**: Spatial operations to answer location-based questions
• **Visualization**: Maps, charts, and reports to communicate findings

**In Public Health:**
• Map disease patterns and identify hotspots
• Analyze access to healthcare facilities
• Plan intervention strategies based on geography
• Monitor environmental health risks

**This Workshop Applications:**
• Lab 1: Spatial access to health facilities in Uganda
• Lab 3: Malaria prevalence mapping and risk assessment
• Lab 4: AI-assisted programming for geospatial analysis
• Lab 5: Advanced clustering for disease surveillance

**Key Benefits:**
• Visual analysis reveals patterns invisible in tables
• Spatial relationships inform better decision-making
• Integration of multiple data sources provides comprehensive insights`,
        directLinks: [
          {
            text: "🏥 Lab 1: Health Facility Access Analysis",
            url: "/labs/lab1",
            type: 'related_lab'
          },
          {
            text: "🦟 Lab 3: Disease Mapping Tutorial",
            url: "/labs/lab3", 
            type: 'related_lab'
          }
        ],
        relatedSteps: [],
        tips: [
          "GIS answers 'where' questions that traditional analysis cannot",
          "Spatial patterns often reveal important public health insights",
          "Maps communicate complex information more effectively than tables"
        ]
      };
    }
    
    // Handle map styling/symbology questions
    if (queryLower.includes('style') && (queryLower.includes('map') || queryLower.includes('layer'))) {
      return {
        answer: `**How to Style Map Layers in QGIS**

To style your map layers for better visualization:

**1. Access Layer Properties:**
• Right-click layer name → Properties → Symbology tab

**2. Choose Symbology Type:**
• **Single Symbol**: Same style for all features
• **Graduated**: Different colors based on data values (choropleth maps)
• **Categorized**: Different symbols for different categories

**3. For Health Data Visualization:**
• **Disease prevalence**: Use Graduated symbology with sequential colors (light to dark)
• **Health facilities**: Use categorized symbols by facility type
• **Administrative boundaries**: Use simple outlines with no fill

**4. Color Selection Tips:**
• Sequential schemes: For quantitative data (low to high values)
• Diverging schemes: For data with meaningful midpoint (above/below average)
• Qualitative schemes: For categorical data (facility types)

**Workshop Examples:**
• Lab 1: Style health facilities by type using categorized symbology
• Lab 3: Create malaria prevalence choropleth using graduated colors`,
        directLinks: [
          {
            text: "🎨 Lab 1: Styling Health Facility Points",
            url: "/labs/lab1#section-3-4",
            type: 'related_lab'
          },
          {
            text: "🗺️ Lab 3: Creating Choropleth Maps",
            url: "/labs/lab3#section-3-4",
            type: 'related_lab'
          }
        ],
        relatedSteps: [],
        tips: [
          "Use ColorBrewer color schemes for professional cartography",
          "Consider colorblind-friendly palettes for accessibility",
          "Match color intensity to data values (light = low, dark = high)"
        ]
      };
    }
    
    // Try enhanced AI service as fallback for unhandled questions
    try {
      const enhancedService = new EnhancedAIService();
      const enhancedResponse = enhancedService.generateResponse(query, { currentLab: context.currentLab });
      if (enhancedResponse && enhancedResponse.trim() && !enhancedResponse.includes("I don't have specific information")) {
        return {
          answer: enhancedResponse,
          directLinks: searchResults.slice(0, 2).map(result => ({
            text: result.title,
            url: result.link,
            type: 'related_lab' as const
          })),
          relatedSteps: [],
          tips: ["For lab-specific guidance, ask about specific procedures or steps"]
        };
      }
    } catch (error) {
      console.log('Enhanced AI service fallback failed, using default response');
    }
    
    // Default general response
    let answer = "I'd be happy to help with your GIS workshop question!\n\n";
    
    if (currentStep) {
      answer += `**Current Context:** You're working on ${currentStep.title}\n\n`;
    }
    
    if (searchResults.length > 0) {
      answer += "**Relevant Lab Content:**\n";
      searchResults.slice(0, 3).forEach(result => {
        answer += `• ${result.title}\n`;
      });
      answer += "\n";
    }
    
    // Add general guidance based on current lab
    if (context.currentLab) {
      const lab = currentLab;
      if (lab) {
        answer += `**${lab.title}**\n${lab.description}\n\n`;
        answer += `**Tools:** ${lab.tools.join(', ')}\n`;
        answer += `**Estimated Time:** ${lab.estimatedTime}\n`;
      }
    } else {
      answer += `**💡 I can help with:**
• GIS fundamentals (coordinate systems, data types)
• QGIS procedures (importing data, symbology, layouts)
• Google Earth Engine basics
• Spatial analysis concepts
• Lab-specific guidance

**Try asking:**
• "How do I import CSV data?"
• "What is buffer analysis?"
• "How to create choropleth maps?"
• "What are coordinate reference systems?"`;
    }
    
    const links = searchResults.slice(0, 3).map(result => ({
      text: result.title,
      url: result.link,
      type: 'related_lab' as const
    }));
    
    return {
      answer,
      directLinks: links,
      relatedSteps: []
    };
  }
} 