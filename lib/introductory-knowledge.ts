/**
 * Comprehensive Introductory GIS Knowledge Base
 * Based on expansion knowledge sources
 */

export const INTRODUCTORY_GIS_KNOWLEDGE = {
  
  "what_is_gis": {
    title: "What is GIS? - Geographic Information Systems",
    content: `**GIS (Geographic Information System)** is a multi-component environment used to create, manage, visualize and analyze data and its spatial counterpart.

**Core Components of GIS:**
1. **Hardware**: Computers, GPS units, scanners, plotters
2. **Software**: QGIS, ArcGIS, Google Earth Engine, R
3. **Data**: Spatial data (where things are) + Attribute data (what they are)
4. **People**: Users, analysts, developers, decision-makers
5. **Methods**: Procedures for analysis, modeling, and visualization

**What Makes GIS Special:**
- **Location-based**: Everything has a geographic component
- **Layered approach**: Combine different types of spatial data
- **Spatial analysis**: Understand patterns, relationships, and processes
- **Decision support**: Inform policy, planning, and resource management

**Key Capabilities:**
- **Mapping**: Create visual representations of spatial data
- **Analysis**: Perform spatial operations like buffering, overlay, proximity
- **Database management**: Store and query large spatial datasets
- **Modeling**: Simulate real-world processes and scenarios

**Why GIS Matters:**
Most datasets can be assigned a spatial location - the question is whether spatial analysis adds value to understanding the data. GIS helps answer questions like:
- Where are things located?
- What spatial patterns exist?
- What has changed over time and space?
- What if scenarios occur?

**Real-world Applications:**
- Urban planning and zoning
- Emergency response and disaster management
- Environmental monitoring and conservation
- Public health and epidemiology
- Transportation and logistics
- Agriculture and natural resource management`,
    category: "fundamentals",
    difficulty: "beginner",
    keywords: ["gis", "definition", "geographic information system", "spatial analysis"],
    examples: ["GPS navigation", "Weather maps", "Google Maps", "Emergency dispatch systems"]
  },

  "vector_vs_raster": {
    title: "Vector vs. Raster Data Models",
    content: `**Two fundamental ways to represent spatial data:**

## **Vector Data Model**

**Definition**: Represents features using geometric primitives (points, lines, polygons)

**Three Vector Types:**

**1. Points**
- **Definition**: Single coordinate pairs (X, Y)
- **Characteristics**: No length or area, represent specific locations
- **Examples**: Cities, hospitals, sample sites, GPS coordinates
- **Use cases**: Facility locations, event locations, sampling points

**2. Polylines (Lines)**
- **Definition**: Connected sequence of coordinate pairs
- **Characteristics**: Have length but no area
- **Examples**: Roads, rivers, pipelines, hiking trails
- **Use cases**: Transportation networks, utility lines, boundaries

**3. Polygons (Areas)**
- **Definition**: Closed lines that enclose an area
- **Characteristics**: Have both perimeter and area, define inside/outside
- **Examples**: Countries, lakes, forest patches, building footprints
- **Use cases**: Administrative boundaries, land use areas, service zones

## **Raster Data Model**

**Definition**: Represents space as a regular grid of cells (pixels)

**Characteristics:**
- **Structure**: Rectangular array of cells
- **Cell values**: Each cell contains a single value
- **Resolution**: Cell size determines detail level
- **Coverage**: Covers entire rectangular extent

**Examples:**
- Satellite imagery
- Digital elevation models (DEMs)
- Temperature surfaces
- Precipitation maps
- Land cover classifications

**When to Use Each:**
- **Vector**: Discrete features (buildings, roads, boundaries)
- **Raster**: Continuous phenomena (temperature, elevation, imagery)`,
    category: "data-types",
    difficulty: "beginner",
    keywords: ["vector", "raster", "data model", "points", "lines", "polygons", "pixels"],
    examples: ["GPS points vs satellite images", "Road networks vs elevation maps"]
  },

  "what_is_google_earth_engine": {
    title: "What is Google Earth Engine?",
    content: `**Google Earth Engine (GEE) is a cloud-based platform for planetary-scale geospatial analysis.**

## **Core Concept**

**Cloud Computing for Earth Science:**
- **Problem**: Satellite data is massive (petabytes), downloading and processing locally is impractical
- **Solution**: Bring your analysis to the data, not data to your analysis
- **Benefit**: Access decades of satellite imagery and environmental datasets instantly

## **What Google Earth Engine Provides**

**1. Massive Data Catalog**
- **Satellite imagery**: Landsat (1970s-present), Sentinel, MODIS
- **Climate data**: Temperature, precipitation, weather patterns
- **Environmental data**: Land cover, elevation, vegetation indices
- **Social data**: Population, nighttime lights, urban areas

**2. Cloud Computing Infrastructure**
- **Processing power**: Google's servers handle computations
- **Storage**: Petabytes of preprocessed, analysis-ready data
- **Speed**: Parallel processing across multiple machines
- **Scalability**: Handle global analyses in minutes

**3. Programming Interfaces**
- **JavaScript**: Web-based Code Editor for interactive development
- **Python**: For integration with scientific computing workflows

## **Key Capabilities**

**Image Processing:**
- **Spectral indices**: NDVI, NDWI, EVI for vegetation/water analysis
- **Image classification**: Land cover mapping, change detection
- **Time series analysis**: Trend analysis, anomaly detection
- **Cloud masking**: Remove clouds from satellite imagery

**Applications in Health and Environment:**
- **Air quality monitoring**: Track pollution from satellites
- **Disease mapping**: Environmental suitability modeling
- **Vector habitats**: Identify mosquito breeding areas
- **Climate factors**: Temperature and rainfall analysis

## **Getting Started**

**Prerequisites:**
- Google account
- Basic programming knowledge (JavaScript or Python)
- Understanding of remote sensing concepts

**First Steps:**
1. **Sign up**: Request access at earthengine.google.com
2. **Explore**: Browse the data catalog
3. **Learn**: Complete beginner tutorials
4. **Practice**: Start with simple analyses`,
    category: "software",
    difficulty: "beginner",
    keywords: ["google earth engine", "cloud computing", "satellite data", "remote sensing"],
    examples: ["Global forest change mapping", "Crop monitoring", "Disaster response"]
  },

  "point_data_explained": {
    title: "What is Point Data?",
    content: `**Point data represents discrete locations or events in space:**

## **Definition of Point Data**

**Point data** consists of features that:
- Have specific X,Y coordinate locations
- Represent zero-dimensional objects (no area or length)
- Can have associated attributes describing characteristics
- Are displayed as symbols on maps

## **Types of Point Data**

**1. Facility Locations**
- **Health facilities**: Hospitals, clinics, pharmacies
- **Educational**: Schools, universities
- **Infrastructure**: Fire stations, police stations
- **Commercial**: Stores, restaurants, banks

**2. Event Locations**
- **Disease cases**: Individual case locations
- **Accidents**: Traffic incidents, workplace injuries
- **Crimes**: Incident locations and types
- **Natural events**: Earthquake epicenters, weather observations

**3. Monitoring Stations**
- **Environmental**: Air quality monitors, weather stations
- **Water quality**: Stream gauges, well locations
- **Seismic**: Earthquake monitoring networks

**4. Sample Sites**
- **Research**: Field study locations
- **Surveys**: Interview or data collection points
- **Environmental**: Soil or water sampling locations

## **Point Attributes**

**Common attributes for point data:**
- **Identification**: Name, ID number, type
- **Quantitative**: Population, capacity, measurements
- **Qualitative**: Services offered, categories, status
- **Temporal**: Date established, last updated

## **Visualization of Point Data**

**Symbol Types:**
- **Simple symbols**: Circles, squares, triangles
- **Proportional symbols**: Size varies with attribute values
- **Categorical symbols**: Different shapes/colors for categories
- **Icon symbols**: Meaningful pictures (hospital cross, school)

## **Analysis with Point Data**

**Common analyses:**
- **Density analysis**: How many points per area?
- **Clustering**: Are points grouped or dispersed?
- **Proximity**: Distance to nearest point
- **Service areas**: What areas do points serve?

## **Applications in Health GIS**

**Health Facility Mapping:**
- Map hospital and clinic locations
- Analyze facility distribution and accessibility
- Plan new facility locations
- Assess service coverage

**Disease Surveillance:**
- Map individual case locations (with privacy protection)
- Identify disease clusters
- Track outbreak spread
- Analyze risk factors by location`,
    category: "data-types",
    difficulty: "beginner",
    keywords: ["point data", "coordinates", "locations", "facilities", "events"],
    examples: ["Hospital locations", "Disease cases", "Weather stations", "GPS coordinates"]
  },

  "area_data_explained": {
    title: "What is Area Data?",
    content: `**Area data (polygon data) represents regions or zones with defined boundaries:**

## **Definition of Area Data**

**Area data** consists of polygon features that:
- Enclose a specific geographic region
- Have measurable area and perimeter
- Define clear inside/outside boundaries
- Represent continuous or discrete spatial units

## **Types of Area Data**

**1. Administrative Areas**
- **Countries, states, provinces**: Political boundaries
- **Counties, districts**: Local government units
- **Census tracts**: Statistical reporting areas
- **Postal codes**: Service delivery zones

**2. Natural Areas**
- **Watersheds**: Drainage basins
- **Ecosystems**: Forest patches, wetlands
- **Geological units**: Rock formations, soil types
- **Climate zones**: Temperature/precipitation regions

**3. Land Use Areas**
- **Urban areas**: Cities, towns, developed land
- **Agricultural land**: Crop fields, pastures
- **Protected areas**: National parks, reserves
- **Industrial zones**: Manufacturing, commercial areas

**4. Service Areas**
- **School districts**: Educational service boundaries
- **Hospital catchments**: Healthcare service areas
- **Market areas**: Commercial service zones
- **Emergency response zones**: Police, fire districts

## **Characteristics of Area Data**

**Spatial Properties:**
- **Area**: Total space enclosed (square kilometers, hectares)
- **Perimeter**: Length of boundary (kilometers)
- **Shape**: Compactness, complexity of boundaries

**Attribute Properties:**
- **Population**: Number of people within the area
- **Density**: Population per unit area
- **Economic data**: Income, employment, GDP
- **Environmental data**: Land cover, elevation, climate

## **Working with Area Data**

**Measurement Operations:**
- Calculate area and perimeter
- Measure distances between areas
- Compute shape indices (compactness, elongation)

**Spatial Analysis:**
- **Overlay analysis**: Intersect, union, difference
- **Buffer analysis**: Create zones around areas
- **Proximity analysis**: Find nearest areas
- **Spatial joins**: Combine data from different layers

**Visualization Techniques:**
- **Choropleth maps**: Color areas by data values
- **Graduated symbols**: Vary symbol size by area values
- **Categorical maps**: Different colors for different types

## **Applications in Health GIS**

**Disease Surveillance:**
- Map disease rates by administrative areas
- Identify high-risk regions
- Track disease spread across boundaries

**Healthcare Planning:**
- Define hospital service areas
- Plan facility locations
- Analyze healthcare accessibility by region`,
    category: "data-types",
    difficulty: "beginner",
    keywords: ["area data", "polygons", "boundaries", "regions", "administrative"],
    examples: ["Country boundaries", "Hospital catchment areas", "Disease surveillance zones"]
  },

  "coordinate_systems_basics": {
    title: "Understanding Coordinate Systems",
    content: `**Coordinate systems define how locations on Earth are represented mathematically:**

## **Why Coordinate Systems Matter**

**The Challenge:**
- Earth is a 3D sphere (actually an oblate spheroid)
- Maps and computer screens are 2D flat surfaces
- Need mathematical methods to represent curved Earth on flat surfaces

**Real-world Impact:**
- Wrong coordinate system = wrong locations on map
- Inaccurate distance and area measurements
- Data layers that don't align properly

## **Types of Coordinate Systems**

**1. Geographic Coordinate Systems (GCS)**
- **Definition**: Use latitude and longitude on Earth's curved surface
- **Units**: Degrees (decimal or degrees-minutes-seconds)
- **Example**: WGS84 (EPSG:4326) - used by GPS

**Latitude:**
- North-South position
- Ranges from -90° (South Pole) to +90° (North Pole)
- Equator is 0°

**Longitude:**
- East-West position
- Ranges from -180° to +180°
- Prime Meridian (Greenwich) is 0°

**2. Projected Coordinate Systems (PCS)**
- **Definition**: Mathematical transformation of curved Earth to flat surface
- **Units**: Linear units (meters, feet)
- **Purpose**: Enable accurate distance and area measurements

## **Common Projections**

**Universal Transverse Mercator (UTM)**
- **Zones**: Earth divided into 60 zones, each 6° wide
- **Characteristics**: Minimal distortion within each zone
- **Units**: Meters
- **Uganda example**: UTM Zone 36N (EPSG:32636)

**Web Mercator**
- **Use**: Web mapping (Google Maps, OpenStreetMap)
- **EPSG code**: 3857

## **EPSG Codes**

**What are EPSG Codes?**
- Numerical identifiers for coordinate systems
- Standardized way to specify coordinate systems

**Important EPSG Codes:**
- **4326**: WGS84 Geographic (Lat/Long)
- **3857**: Web Mercator (Google Maps)
- **32636**: UTM Zone 36N (Uganda)

## **Choosing the Right Coordinate System**

**For Uganda Projects:**
- **Geographic (EPSG:4326)**: Initial data loading, web mapping
- **UTM Zone 36N (EPSG:32636)**: Analysis requiring accurate measurements

**General Guidelines:**
- **Global projects**: Geographic coordinate systems
- **Regional projects**: Local UTM zones
- **Web mapping**: Web Mercator
- **Area calculations**: Projected coordinate systems

## **Common Problems and Solutions**

**Problem 1: Data in Wrong Location**
- **Cause**: Incorrect coordinate system assignment
- **Solution**: Check and set correct coordinate system

**Problem 2: Inaccurate Measurements**
- **Cause**: Using geographic coordinates for distance/area
- **Solution**: Reproject to appropriate projected system

**Problem 3: Layers Don't Align**
- **Cause**: Different coordinate systems
- **Solution**: Reproject all layers to common system`,
    category: "concepts",
    difficulty: "intermediate",
    keywords: ["coordinate systems", "projections", "epsg", "utm", "latitude", "longitude"],
    examples: ["GPS coordinates", "UTM grid", "Web mapping", "Survey data"]
  },

  "spatial_analysis_basics": {
    title: "What is Spatial Analysis?",
    content: `**Spatial analysis focuses on understanding patterns and processes in geographic data:**

## **Spatial Analysis vs. GIS**

**GIS (Geographic Information Systems):**
- **Focus**: Data manipulation, visualization, and querying
- **Purpose**: Create, manage, and display spatial data
- **Operations**: Loading data, making maps, basic measurements
- **Example**: Creating a map showing hospital locations

**Spatial Analysis:**
- **Focus**: Statistical analysis of spatial patterns and processes
- **Purpose**: Understand WHY spatial patterns exist
- **Operations**: Pattern detection, hypothesis testing, modeling
- **Example**: Analyzing whether hospitals are clustered and why

## **Key Questions Spatial Analysis Answers**

**Pattern Detection:**
- Are features randomly distributed, clustered, or dispersed?
- Do patterns change over time or space?
- Are there spatial trends or gradients?

**Relationship Analysis:**
- How do different variables relate spatially?
- What factors influence spatial patterns?
- Are nearby things more similar than distant things?

**Process Understanding:**
- What processes created observed patterns?
- How do spatial processes operate?
- Can we model and predict spatial phenomena?

## **Types of Spatial Analysis**

**1. Point Pattern Analysis**
- **Purpose**: Analyze distribution of point features
- **Methods**: Nearest neighbor, clustering analysis
- **Applications**: Disease outbreak detection, facility planning

**2. Spatial Autocorrelation**
- **Purpose**: Measure spatial dependence
- **Concept**: "Near things are more related than distant things"
- **Applications**: Identifying spatial clusters, hot spots

**3. Spatial Interpolation**
- **Purpose**: Estimate values at unsampled locations
- **Methods**: Kriging, inverse distance weighting
- **Applications**: Creating continuous surfaces from point data

**4. Overlay Analysis**
- **Purpose**: Combine multiple spatial layers
- **Operations**: Intersect, union, buffer
- **Applications**: Site suitability, risk assessment

## **Applications in Health Geography**

**Disease Mapping:**
- **Descriptive**: Where do diseases occur?
- **Analytical**: Why do diseases occur in certain places?
- **Predictive**: Where will diseases likely occur?

**Environmental Health:**
- **Exposure assessment**: Who is exposed to environmental hazards?
- **Risk modeling**: What factors increase health risks?
- **Intervention planning**: Where should resources be allocated?

**Healthcare Access:**
- **Accessibility analysis**: How accessible are health services?
- **Service planning**: Where are new facilities needed?
- **Equity assessment**: Are services equitably distributed?

## **Tools for Spatial Analysis**

**GIS Software:**
- **QGIS**: Basic spatial analysis tools
- **ArcGIS**: Comprehensive spatial analysis suite
- **GRASS**: Advanced spatial analysis capabilities

**Statistical Software:**
- **R**: Extensive spatial analysis packages
- **Python**: GeoPandas, PySAL for spatial analysis
- **Stata**: Some spatial analysis capabilities

## **Workflow Example**

**Research Question**: Are childhood malnutrition rates spatially clustered?

**1. Data Preparation**
- Collect malnutrition data by district
- Obtain district boundary maps
- Ensure data quality and completeness

**2. Exploratory Analysis**
- Map malnutrition rates
- Examine spatial distribution visually
- Calculate basic statistics

**3. Statistical Testing**
- Test for spatial autocorrelation
- Identify significant clusters
- Assess statistical significance

**4. Interpretation**
- Explain observed patterns
- Identify potential causes
- Suggest interventions

## **Considerations for Spatial Analysis**

**Scale Effects:**
- Results may vary with spatial scale
- Choose appropriate analysis scale
- Consider multiple scales

**Data Quality:**
- Spatial accuracy affects results
- Complete coverage important
- Temporal consistency needed

**Statistical Assumptions:**
- Understand method assumptions
- Check for violations
- Use appropriate tests`,
    category: "concepts",
    difficulty: "intermediate",
    keywords: ["spatial analysis", "patterns", "clustering", "autocorrelation", "statistics"],
    examples: ["Disease cluster detection", "Environmental risk mapping", "Service accessibility analysis"]
  }
}

/**
 * Search function for introductory knowledge
 */
export function searchIntroductoryKnowledge(query: string): any[] {
  const searchTerms = query.toLowerCase().split(' ')
  const results: any[] = []

  Object.entries(INTRODUCTORY_GIS_KNOWLEDGE).forEach(([key, item]) => {
    let score = 0
    
    searchTerms.forEach(term => {
      if (item.title.toLowerCase().includes(term)) score += 25
      if (item.keywords?.some((keyword: string) => keyword.includes(term))) score += 20
      if (item.content.toLowerCase().includes(term)) score += 5
    })

    if (score > 0) {
      results.push({key, ...item, score})
    }
  })

  return results.sort((a, b) => b.score - a.score).slice(0, 5)
}

/**
 * Generate comprehensive introductory response
 */
export function generateIntroductoryResponse(query: string): string {
  const results = searchIntroductoryKnowledge(query)
  
  if (results.length === 0) {
    return `I can help you understand "${query}"! 🎓

📚 **I have comprehensive introductory knowledge about:**
- **GIS Fundamentals**: What is GIS, spatial analysis, software overview
- **Data Types**: Vector vs raster, points/lines/polygons, attribute data
- **Software**: Google Earth Engine, QGIS, cloud computing
- **Concepts**: Coordinate systems, scale, resolution, projections
- **Applications**: Health GIS, environmental monitoring, mapping

**Popular introductory topics:**
- "What is GIS?"
- "Vector vs raster data"
- "What is Google Earth Engine?"
- "Understanding coordinate systems"
- "Point, line, and polygon data"

What specific concept would you like me to explain?`
  }

  const topResult = results[0]
  
  return `# ${topResult.title} 📚

${topResult.content}

**💡 Difficulty level:** ${topResult.difficulty || 'beginner'}
**🏷️ Category:** ${topResult.category || 'general'}

**📋 Real-world examples:**
${topResult.examples?.slice(0, 3).map((example: string) => `- ${example}`).join('\n') || '- GPS navigation\n- Weather maps\n- Disease mapping'}

Need me to explain any specific part in more detail?`
}

export const introductoryKnowledge = {
  search: searchIntroductoryKnowledge,
  generateResponse: generateIntroductoryResponse,
  knowledge: INTRODUCTORY_GIS_KNOWLEDGE
}