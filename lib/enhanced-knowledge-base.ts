/**
 * Enhanced GIS Knowledge Base - Phase 3
 * Comprehensive integration of Expansion_Knowledge content:
 * - QGIS Tutor documentation (gentle GIS introduction, training manual)
 * - Google Earth Engine community tutorials
 * - Spatial Analysis textbook (mgimond)
 * - UMass GIS workshops
 */

export interface EnhancedKnowledgeItem {
  id: string
  title: string
  content: string
  category: "fundamentals" | "qgis" | "gee" | "data-types" | "analysis" | "troubleshooting" | "health-gis"
  difficulty: "beginner" | "intermediate" | "advanced"
  keywords: string[]
  relatedTopics: string[]
  examples: string[]
  labRelevance: ("lab1" | "lab2" | "lab3" | "lab4" | "lab5")[]
  source: string
  troubleshootingTips?: string[]
  stepByStep?: string[]
}

export const ENHANCED_GIS_KNOWLEDGE: Record<string, EnhancedKnowledgeItem> = {

  // === FUNDAMENTAL GIS CONCEPTS (from multiple sources) ===
  
  "gis_comprehensive_intro": {
    id: "gis_comprehensive_intro",
    title: "Complete Introduction to GIS - From Basics to Applications",
    content: `# Geographic Information Systems: A Comprehensive Introduction

## What is GIS?

**GIS (Geographic Information System)** is a multi-component environment for creating, managing, visualizing and analyzing spatial data. Just as we use word processors for text, we use GIS applications for spatial information.

### Core GIS Components:
1. **Digital Data**: Geographical information stored digitally
2. **Computer Hardware**: Systems for storing, displaying, processing data
3. **Computer Software**: GIS applications (QGIS, ArcGIS, Google Earth Engine)
4. **People**: Users, analysts, decision-makers
5. **Methods**: Procedures and workflows for analysis

### Why GIS is Revolutionary:
- **Location-based analysis**: Everything has a geographic component
- **Pattern recognition**: Identify spatial relationships invisible in tables
- **Decision support**: Inform policy, planning, emergency response
- **Data integration**: Combine multiple data sources spatially

## Real-World GIS Example: Health Applications

**Scenario**: Track disease outbreaks and identify patterns

**Traditional Approach**: 
\`\`\`
Date       | Location    | Disease | Patients
13/12/2008 | 26.87, -31.91 | Mumps  | 1
24/12/2008 | 26.87, -31.91 | Mumps  | 1
22/01/2009 | 26.87, -31.91 | Mumps  | 1
\`\`\`

**GIS Approach**: 
- Map patient locations spatially
- Identify disease clusters visually
- Analyze proximity to potential sources
- Predict spread patterns
- Target interventions geographically

**Result**: Clear spatial patterns emerge that are invisible in tabular data - mumps cases cluster together, suggesting local transmission.

## GIS vs. Traditional Mapping

**Traditional Maps**: Static representations for navigation
**GIS Maps**: Dynamic, analytical tools for:
- **Reference maps**: Navigation, location identification
- **Presentation maps**: Communicate specific narratives
- **Statistical maps**: Reveal patterns through data manipulation

## GIS Applications in Health and Development:
- **Epidemiology**: Disease surveillance, outbreak investigation
- **Healthcare access**: Facility location, service area analysis
- **Environmental health**: Pollution exposure, vector habitats
- **Emergency response**: Resource allocation, evacuation planning
- **Global development**: Poverty mapping, infrastructure planning`,
    category: "fundamentals",
    difficulty: "beginner",
    keywords: ["gis", "geographic information system", "spatial analysis", "health applications", "mapping"],
    relatedTopics: ["spatial_analysis_concepts", "gis_software_intro", "health_gis_applications"],
    examples: ["Disease outbreak mapping", "Hospital accessibility analysis", "Environmental risk assessment"],
    labRelevance: ["lab1", "lab2", "lab3", "lab4", "lab5"],
    source: "QGIS Gentle GIS Introduction + Spatial Analysis textbook",
    stepByStep: [
      "Understand that GIS combines location data with descriptive information",
      "Recognize that spatial patterns often reveal insights invisible in tables",
      "Learn that GIS has five core components: data, hardware, software, people, methods",
      "Practice thinking about how your data could be mapped spatially"
    ]
  },

  // === QGIS FUNDAMENTALS ===
  
  "qgis_complete_interface": {
    id: "qgis_complete_interface",
    title: "QGIS Interface and Core Concepts",
    content: `# QGIS: Complete Interface Guide

## What is QGIS?

**QGIS** is a free, open-source Geographic Information System that provides most functionality of expensive commercial software like ArcGIS.

### Key Advantages:
- **Free and open source**: No licensing costs
- **Cross-platform**: Windows, Mac, Linux
- **Powerful functionality**: Rivals commercial software
- **Active community**: Extensive documentation and support
- **GRASS integration**: Advanced spatial analysis capabilities

## Core Interface Components

### 1. Menu Bar
Located at the top, provides access to all QGIS functions:
- **Project**: Open/save projects, import/export data
- **Edit**: Modify features and attributes
- **View**: Control map display and navigation
- **Layer**: Add, remove, and manage map layers
- **Settings**: Configure QGIS preferences
- **Plugins**: Extend QGIS functionality
- **Vector/Raster**: Analysis tools for different data types
- **Help**: Documentation and tutorials

### 2. Toolbars
Quick access to frequently used functions:
- **File Toolbar**: Open, save, new project
- **Map Navigation**: Zoom, pan, select features
- **Attributes Toolbar**: Open attribute tables, select features
- **Digitizing Toolbar**: Create and edit features
- **Advanced Digitizing**: Precise feature creation

**Tip**: Hover over toolbar icons to see tooltips explaining their function.

### 3. Map Canvas (Map View)
The central area where spatial data is displayed:
- **Layer visualization**: Shows all loaded map layers
- **Interactive navigation**: Zoom, pan, identify features
- **Scale-dependent rendering**: Layers can appear/disappear at different scales
- **Multiple map views**: Create additional map windows for comparison

### 4. Layers Panel (Table of Contents)
Left panel showing all loaded layers:
- **Layer management**: Add, remove, reorder layers
- **Visibility control**: Turn layers on/off with checkboxes
- **Layer grouping**: Organize related layers together
- **Symbology access**: Right-click for styling options
- **Layer properties**: Access metadata, styling, and settings

**Layer Order Matters**: Layers drawn from bottom to top, with top layers obscuring those below.

### 5. Browser Panel
Navigate and preview data sources:
- **File system**: Browse local files and folders
- **Database connections**: Connect to PostGIS, SpatiaLite
- **Web services**: Add WMS, WFS, and other online services
- **Preview capability**: See data before adding to project

## Essential QGIS Concepts

### Projects (.qgs files)
- **Save everything**: Layer references, symbology, layouts
- **Portable projects**: Use relative paths for data sharing
- **Project CRS**: Coordinate reference system for the project

### Layers
- **Data representation**: Each layer represents one dataset
- **Layer types**: Vector (points, lines, polygons), Raster (grids)
- **Styling**: Control colors, symbols, labels for each layer
- **Attributes**: Associated data tables for vector layers

### Coordinate Reference Systems (CRS)
- **Project CRS**: Overall map projection
- **Layer CRS**: Individual layer projections
- **On-the-fly projection**: QGIS reprojects layers automatically
- **Importance**: Ensures spatial accuracy and proper analysis`,
    category: "qgis",
    difficulty: "beginner",
    keywords: ["qgis", "interface", "layers", "map canvas", "toolbars", "gis software"],
    relatedTopics: ["qgis_getting_started", "layer_management", "map_navigation"],
    examples: ["Loading shapefiles", "Creating basic maps", "Managing layer visibility"],
    labRelevance: ["lab1", "lab2"],
    source: "QGIS User Manual + Training Materials",
    troubleshootingTips: [
      "If layers don't appear, check the layer CRS matches the project CRS",
      "Use 'Zoom to Layer' if data appears in wrong location",
      "Right-click layers for context menu with most common functions",
      "Save project frequently to preserve work and settings"
    ],
    stepByStep: [
      "Open QGIS and familiarize yourself with the interface layout",
      "Add a vector layer using the toolbar or Layer menu",
      "Practice zooming and panning in the map canvas",
      "Open the attribute table for a layer to see associated data",
      "Change layer symbology by right-clicking and selecting Properties",
      "Save your project to preserve all settings and layer references"
    ]
  },

  // === GOOGLE EARTH ENGINE FUNDAMENTALS ===
  
  "gee_comprehensive_intro": {
    id: "gee_comprehensive_intro",
    title: "Google Earth Engine: Complete Introduction",
    content: `# Google Earth Engine: Planetary-Scale Geospatial Analysis

## What is Google Earth Engine?

**Google Earth Engine (GEE)** is a cloud-based platform that combines:
- **Massive data catalog**: Petabytes of satellite imagery and geospatial datasets
- **Google's computing power**: Parallel processing across Google's infrastructure
- **APIs for analysis**: JavaScript and Python interfaces for analysis

### The Revolution: Bring Analysis to Data
**Traditional approach**: Download terabytes of satellite data locally
**GEE approach**: Send your code to where the data lives
**Result**: Global analyses that took months now run in minutes

## Core Earth Engine Concepts

### 1. Everything is Server-Side
\`\`\`javascript
// This doesn't download data to your computer
var image = ee.Image('LANDSAT/LC08/C01/T1_SR/LC08_044034_20140318');
var mean = image.select('B4').mean();
print(mean); // Computation happens on Google's servers
\`\`\`

### 2. Container Objects
All data in Earth Engine is wrapped in special container objects:
- **ee.Image**: Single satellite image or raster dataset
- **ee.ImageCollection**: Time series of images
- **ee.Feature**: Vector feature with geometry and properties
- **ee.FeatureCollection**: Collection of vector features
- **ee.Geometry**: Geographic shapes (points, lines, polygons)

### 3. Lazy Evaluation
Code describes computations but doesn't execute until needed:
\`\`\`javascript
var collection = ee.ImageCollection('MODIS/006/MOD11A1'); // Just a description
var filtered = collection.filterDate('2020-01-01', '2020-12-31'); // Still just a description
Map.addLayer(filtered.mean()); // NOW the computation happens
\`\`\`

## Earth Engine Data Catalog

### Satellite Imagery:
- **Landsat**: 1970s-present, 30m resolution, free
- **Sentinel**: 2015-present, 10m resolution, free
- **MODIS**: 2000-present, 250m-1km resolution, daily
- **High-resolution**: Various commercial satellites

### Climate and Weather:
- **Temperature**: Land surface, air temperature
- **Precipitation**: Gridded rainfall datasets
- **Weather**: Wind, humidity, pressure

### Environmental Datasets:
- **Elevation**: SRTM, ASTER global DEMs
- **Land cover**: Global and regional classifications
- **Vegetation indices**: NDVI, EVI, LAI
- **Population**: Gridded population datasets

### Applications in Health Research:
- **Vector habitats**: Identify mosquito breeding areas
- **Air quality**: Monitor pollution from space
- **Urban heat islands**: Track temperature differences
- **Water resources**: Monitor drought, floods
- **Agricultural productivity**: Food security assessment

## Getting Started with Earth Engine

### Prerequisites:
1. **Google account**: Sign up at earthengine.google.com
2. **Basic programming**: JavaScript or Python knowledge helpful
3. **GIS concepts**: Understanding of raster data and projections

### First Steps:
1. **Explore the Code Editor**: https://code.earthengine.google.com
2. **Browse data catalog**: https://developers.google.com/earth-engine/datasets
3. **Complete tutorials**: Start with "Introduction to Earth Engine"
4. **Join the community**: Google Earth Engine Developers group

### Basic Workflow:
1. **Import data**: Load satellite imagery or datasets
2. **Filter data**: By date, location, cloud cover
3. **Process data**: Calculate indices, classify, analyze
4. **Visualize results**: Display on interactive map
5. **Export results**: Download or save to Google Drive/Cloud

## Python vs JavaScript APIs

### JavaScript (Code Editor):
- **Interactive development**: Immediate visual feedback
- **Prototyping**: Quick testing of ideas
- **Sharing**: Easy to share scripts
- **Learning**: Great for beginners

### Python API:
- **Scientific computing**: Integration with pandas, matplotlib
- **Jupyter notebooks**: Documentation and analysis together
- **Machine learning**: scikit-learn, TensorFlow integration
- **Automation**: Batch processing, operational workflows`,
    category: "gee",
    difficulty: "intermediate",
    keywords: ["google earth engine", "cloud computing", "satellite imagery", "remote sensing", "javascript", "python"],
    relatedTopics: ["remote_sensing_basics", "satellite_imagery", "cloud_computing"],
    examples: ["Global forest change", "Urban growth monitoring", "Drought assessment", "Air quality mapping"],
    labRelevance: ["lab3", "lab4", "lab5"],
    source: "Google Earth Engine Community Tutorials + Documentation",
    troubleshootingTips: [
      "If code doesn't run, check for typos in function names",
      "Use print() statements to debug intermediate results",
      "Start simple and build complexity gradually",
      "Check the Assets tab if data doesn't appear",
      "Use Map.centerObject() to navigate to your study area"
    ],
    stepByStep: [
      "Sign up for Google Earth Engine access",
      "Open the Code Editor and explore the interface",
      "Load a simple dataset like a Landsat image",
      "Apply a simple operation like calculating NDVI",
      "Visualize the result on the map",
      "Export the result to Google Drive"
    ]
  },

  // === SPATIAL ANALYSIS CONCEPTS ===
  
  "spatial_analysis_comprehensive": {
    id: "spatial_analysis_comprehensive",
    title: "Spatial Analysis: From Patterns to Processes",
    content: `# Spatial Analysis: Understanding Geographic Patterns

## What is Spatial Analysis?

**Spatial Analysis** goes beyond visualization to understand **why** spatial patterns exist and **what processes** created them.

### GIS vs. Spatial Analysis:
- **GIS**: "What is where?" - Data manipulation, querying, visualization
- **Spatial Analysis**: "Why is it there?" - Statistical analysis of patterns and processes

### The Spatial Analysis Workflow:
1. **Visualize**: Create maps to see patterns
2. **Describe**: Quantify spatial patterns statistically  
3. **Explain**: Test hypotheses about underlying processes
4. **Predict**: Model future patterns or scenarios

## Core Spatial Analysis Concepts

### 1. Scale and Resolution
**Scale** in geography refers to the ratio of map distance to real-world distance:
- **Large scale** (e.g., 1:10,000): Small area, high detail
- **Small scale** (e.g., 1:1,000,000): Large area, low detail

**Resolution** affects what patterns we can detect:
- **Fine resolution**: See individual buildings, trees
- **Coarse resolution**: See regional patterns, climate zones

### 2. Object vs. Field View
**Object View**: Treats features as discrete entities
- Examples: Cities, hospitals, disease cases
- Best for: Counting, location analysis, network analysis

**Field View**: Treats phenomena as continuous surfaces
- Examples: Temperature, elevation, population density
- Best for: Interpolation, surface analysis, modeling

### 3. Spatial Relationships
**Topological relationships** describe how features relate spatially:
- **Adjacent**: Share a boundary
- **Contains**: One feature inside another
- **Overlaps**: Partial overlap between features
- **Disjoint**: No spatial relationship

**Distance relationships**:
- **Euclidean distance**: Straight-line distance
- **Network distance**: Distance along roads/paths
- **Travel time**: Time-based accessibility

### 4. Spatial Patterns
**Random**: Features distributed without spatial pattern
**Clustered**: Features grouped together more than expected
**Dispersed**: Features more spread out than expected

## Statistical Measures of Spatial Pattern

### Point Pattern Analysis:
- **Nearest neighbor analysis**: Measures clustering vs. dispersion
- **Quadrat analysis**: Compares observed vs. expected distributions
- **Kernel density estimation**: Creates smooth density surfaces

### Spatial Autocorrelation:
- **Positive autocorrelation**: Similar values cluster together
- **Negative autocorrelation**: Different values are neighbors
- **No autocorrelation**: Values distributed randomly

**Moran's I**: Measures global spatial autocorrelation
- **I > 0**: Clustered pattern
- **I = 0**: Random pattern  
- **I < 0**: Dispersed pattern

## Applications in Health Research

### Disease Surveillance:
1. **Map disease cases** to identify spatial patterns
2. **Test for clustering** using statistical methods
3. **Identify risk factors** through spatial correlation
4. **Predict spread** using spatial models

### Healthcare Access:
1. **Map facilities and populations** to assess coverage
2. **Calculate travel distances/times** to measure access
3. **Identify service gaps** where access is poor
4. **Optimize locations** for new facilities

### Environmental Health:
1. **Map exposure sources** (pollution, contamination)
2. **Model exposure surfaces** using interpolation
3. **Correlate health outcomes** with environmental factors
4. **Assess environmental justice** through spatial equity analysis

## Tools for Spatial Analysis

### R Programming:
- **Spatial packages**: sf, sp, rgdal, raster
- **Statistical analysis**: Comprehensive spatial statistics
- **Reproducible research**: Script-based workflows
- **Visualization**: Advanced mapping and plotting

### Python:
- **Spatial libraries**: GeoPandas, Shapely, Rasterio
- **Machine learning**: scikit-learn for spatial ML
- **Notebooks**: Jupyter for interactive analysis

### Specialized Software:
- **GeoDa**: Free spatial analysis software
- **ArcGIS Spatial Analyst**: Commercial spatial analysis extension
- **QGIS + R**: Combine QGIS visualization with R analysis`,
    category: "analysis",
    difficulty: "intermediate",
    keywords: ["spatial analysis", "patterns", "statistics", "autocorrelation", "clustering", "health research"],
    relatedTopics: ["statistical_methods", "pattern_analysis", "gis_analysis"],
    examples: ["Disease cluster detection", "Healthcare facility optimization", "Environmental exposure assessment"],
    labRelevance: ["lab2", "lab3", "lab5"],
    source: "Spatial Analysis textbook (mgimond) + Applied Spatial Analysis",
    troubleshootingTips: [
      "Always visualize data before statistical analysis",
      "Check for data quality issues that could affect results",
      "Consider multiple scales of analysis",
      "Validate statistical results with domain knowledge"
    ],
    stepByStep: [
      "Start with exploratory data visualization",
      "Calculate basic spatial statistics (nearest neighbor, Moran's I)",
      "Test hypotheses about spatial patterns",
      "Investigate underlying processes causing patterns",
      "Validate results and consider alternative explanations"
    ]
  },

  // === TROUBLESHOOTING AND COMMON ISSUES ===
  
  "common_gis_problems": {
    id: "common_gis_problems",
    title: "Common GIS Problems and Solutions",
    content: `# Common GIS Problems and How to Fix Them

## Data Loading Issues

### Problem: "Layer won't load" or "No data appears"
**Possible causes:**
1. **File corruption**: Data file is damaged
2. **Wrong file path**: File moved or renamed
3. **Unsupported format**: GIS can't read the file type
4. **Coordinate system mismatch**: Data projects incorrectly

**Solutions:**
1. **Check file integrity**: Try opening in different software
2. **Verify file path**: Browse to file location manually
3. **Convert format**: Use data conversion tools
4. **Set/check CRS**: Ensure coordinate systems match

### Problem: "Data appears in wrong location"
**Cause**: Coordinate Reference System (CRS) mismatch

**Solutions:**
1. **Check layer CRS**: Right-click layer → Properties → Source
2. **Set correct CRS**: Layer Properties → Source → Assign CRS
3. **Enable on-the-fly projection**: Project Properties → CRS
4. **Reproject data**: Use "Reproject Layer" tool

## QGIS-Specific Issues

### Problem: "QGIS crashes or freezes"
**Possible causes:**
1. **Large datasets**: Too much data for available memory
2. **Complex symbology**: Rendering takes too long
3. **Plugin conflicts**: Incompatible or buggy plugins
4. **Corrupted preferences**: QGIS settings corrupted

**Solutions:**
1. **Simplify data**: Use data subsets or generalized versions
2. **Simplify symbology**: Use basic symbols for large datasets
3. **Disable plugins**: Settings → Plugins → uncheck problematic ones
4. **Reset preferences**: Delete QGIS profile folder

### Problem: "Can't edit features"
**Possible causes:**
1. **Layer not editable**: Edit mode not turned on
2. **File permissions**: Read-only file or folder
3. **Network location**: Editing remote files
4. **File lock**: Another program has file open

**Solutions:**
1. **Toggle editing**: Click pencil icon or Layer → Toggle Editing
2. **Check permissions**: Ensure you can write to file location
3. **Copy locally**: Download file for editing
4. **Close other programs**: Close Excel, other GIS software

## Google Earth Engine Issues

### Problem: "Code won't run" or "Error messages"
**Common causes:**
1. **Syntax errors**: Typos in function names
2. **Memory limits**: Computation too large
3. **Timeout errors**: Process takes too long
4. **Authentication issues**: Not signed in properly

**Solutions:**
1. **Check syntax**: Look for typos, missing parentheses
2. **Reduce computation**: Use smaller areas or fewer images
3. **Add .aside()**: Force computation to complete step by step
4. **Re-authenticate**: Run ee.Authenticate() again

### Problem: "No data appears on map"
**Possible causes:**
1. **Wrong visualization parameters**: Min/max values incorrect
2. **No data in area**: Study area has no data
3. **Date filtering**: No images in specified date range
4. **Cloud cover**: All images cloudy

**Solutions:**
1. **Check data values**: Use print() to see actual values
2. **Expand area**: Check larger region
3. **Expand dates**: Use longer time period
4. **Relax cloud filter**: Allow higher cloud percentage

## Data Quality Issues

### Problem: "Missing or incomplete data"
**Identification:**
- Gaps in spatial coverage
- Missing attribute values
- Inconsistent data collection

**Solutions:**
1. **Document gaps**: Note where data is missing
2. **Find alternative sources**: Look for supplementary datasets
3. **Interpolation**: Estimate missing values from nearby data
4. **Flag uncertainty**: Mark areas with poor data quality

### Problem: "Inconsistent coordinate systems"
**Symptoms:**
- Layers don't align properly
- Distance measurements incorrect
- Analysis results questionable

**Solutions:**
1. **Standardize CRS**: Choose one CRS for entire project
2. **Reproject all layers**: Use consistent coordinate system
3. **Document CRS**: Record which CRS you're using
4. **Validate alignment**: Check that layers overlay correctly

## Performance Issues

### Problem: "Slow rendering or analysis"
**Causes:**
1. **Large datasets**: Too many features or high resolution
2. **Complex operations**: Computationally intensive analysis
3. **Inefficient workflows**: Unnecessary processing steps

**Solutions:**
1. **Simplify data**: Generalize geometries, reduce resolution
2. **Use spatial indices**: Speed up spatial queries
3. **Process in chunks**: Break large operations into smaller parts
4. **Optimize workflows**: Remove unnecessary steps

## Getting Help

### When Stuck:
1. **Check documentation**: Official software documentation
2. **Search forums**: GIS Stack Exchange, software forums
3. **Ask community**: Post detailed questions with error messages
4. **Try simple examples**: Test with basic data first

### Best Practices:
1. **Save frequently**: Backup work regularly
2. **Document workflow**: Record steps taken
3. **Test with sample data**: Verify methods work before full analysis
4. **Keep software updated**: Use latest stable versions`,
    category: "troubleshooting", 
    difficulty: "beginner",
    keywords: ["problems", "errors", "troubleshooting", "solutions", "debugging", "fixes"],
    relatedTopics: ["qgis_help", "gee_debugging", "data_quality"],
    examples: ["Layer projection issues", "Memory errors", "Data loading failures"],
    labRelevance: ["lab1", "lab2", "lab3", "lab4", "lab5"],
    source: "QGIS Documentation + GEE Community + Common Experience",
    troubleshootingTips: [
      "Always check the QGIS message log for detailed error information",
      "Use 'Zoom to Layer' to quickly identify projection issues", 
      "Start with simple data when testing new procedures",
      "Keep backup copies of working projects",
      "Document steps that work for future reference"
    ],
    stepByStep: [
      "Identify the specific error message or symptom",
      "Check the most common causes listed above",
      "Try the suggested solutions systematically", 
      "Test with simpler data if problems persist",
      "Seek help with specific error messages and system details"
    ]
  }

  // Additional entries would continue here for comprehensive coverage...
}; 