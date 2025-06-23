/**
 * Comprehensive Introductory GIS Knowledge Base
 * Based on content from expansion knowledge sources:
 * - mgimond Spatial Analysis book
 * - QGIS Tutor documentation
 * - Google Earth Engine community resources
 * - UMass GIS workshops
 */

export interface IntroductoryKnowledgeItem {
  id: string
  title: string
  content: string
  category: "fundamentals" | "data-types" | "software" | "concepts" | "applications"
  difficulty: "beginner" | "intermediate" | "advanced"
  keywords: string[]
  relatedTopics: string[]
  examples: string[]
}

export const INTRODUCTORY_GIS_KNOWLEDGE: Record<string, IntroductoryKnowledgeItem> = {
  
  // === FUNDAMENTAL CONCEPTS ===
  
  "what_is_gis": {
    id: "what_is_gis",
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
    relatedTopics: ["spatial_analysis", "gis_software", "spatial_data"],
    examples: ["GPS navigation", "Weather maps", "Google Maps", "Emergency dispatch systems"]
  },

  "spatial_analysis_vs_gis": {
    id: "spatial_analysis_vs_gis",
    title: "Difference Between GIS and Spatial Analysis",
    content: `**GIS and Spatial Analysis serve different but complementary purposes:**

**GIS (Geographic Information Systems):**
- **Focus**: Data manipulation, visualization, and querying
- **Purpose**: Create, manage, and display spatial data
- **Operations**: Loading data, making maps, basic measurements
- **Tools**: QGIS, ArcGIS for data management and visualization
- **Example**: Creating a map showing hospital locations

**Spatial Analysis:**
- **Focus**: Statistical analysis of spatial patterns and processes
- **Purpose**: Understand WHY spatial patterns exist
- **Operations**: Pattern detection, hypothesis testing, modeling
- **Tools**: R, Python, specialized statistical software
- **Example**: Analyzing whether hospitals are clustered and why

**Key Distinction:**
- **GIS asks**: "What is where?"
- **Spatial Analysis asks**: "Why is it there?" and "What processes created this pattern?"

**Integrated Workflow:**
1. **GIS**: Collect and prepare spatial data
2. **GIS**: Create initial maps and visualizations
3. **Spatial Analysis**: Test for spatial patterns statistically
4. **Spatial Analysis**: Model processes that create patterns
5. **GIS**: Visualize analysis results

**Example - Tree Distribution Study:**
- **GIS task**: Map tree locations in a forest
- **Spatial analysis task**: Determine if trees are randomly distributed, clustered, or dispersed, and identify environmental factors causing the pattern

**When to Use Each:**
- **Use GIS when**: You need to visualize, manage, or perform basic operations on spatial data
- **Use Spatial Analysis when**: You want to understand patterns, test hypotheses, or model spatial processes`,
    category: "concepts",
    difficulty: "intermediate",
    keywords: ["spatial analysis", "gis difference", "statistical analysis", "patterns"],
    relatedTopics: ["what_is_gis", "spatial_patterns", "statistical_mapping"],
    examples: ["Disease outbreak analysis", "Crime hotspot detection", "Species distribution modeling"]
  },

  // === DATA TYPES AND REPRESENTATION ===

  "vector_vs_raster": {
    id: "vector_vs_raster",
    title: "Vector vs. Raster Data Models",
    content: `**Two fundamental ways to represent spatial data:**

## **Vector Data Model**

**Definition**: Represents features using geometric primitives (points, lines, polygons)

**Three Vector Types:**

**1. Points**
- **Definition**: Single coordinate pairs (X, Y)
- **Characteristics**: No length or area, represent specific locations
- **Examples**: Cities, hospitals, sample sites, GPS coordinates
- **Storage**: Just X,Y coordinates
- **Use cases**: Facility locations, event locations, sampling points

**2. Polylines (Lines)**
- **Definition**: Connected sequence of coordinate pairs
- **Characteristics**: Have length but no area
- **Examples**: Roads, rivers, pipelines, hiking trails
- **Storage**: Series of connected vertices
- **Use cases**: Transportation networks, utility lines, boundaries

**3. Polygons (Areas)**
- **Definition**: Closed lines that enclose an area
- **Characteristics**: Have both perimeter and area, define inside/outside
- **Examples**: Countries, lakes, forest patches, building footprints
- **Storage**: Connected vertices with same start/end point
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

**Advantages and Disadvantages:**

**Vector Advantages:**
- Precise boundaries
- Efficient storage for discrete features
- Maintains exact coordinates
- Good for network analysis

**Vector Disadvantages:**
- Complex for continuous phenomena
- Difficult to represent surfaces
- More complex data structure

**Raster Advantages:**
- Excellent for continuous data
- Simple data structure
- Easy spatial analysis operations
- Good for modeling and analysis

**Raster Disadvantages:**
- Fixed resolution
- Larger file sizes for detailed data
- Pixelated appearance
- Less precise boundaries

**When to Use Each:**
- **Vector**: Discrete features (buildings, roads, boundaries)
- **Raster**: Continuous phenomena (temperature, elevation, imagery)`,
    category: "data-types",
    difficulty: "beginner",
    keywords: ["vector", "raster", "data model", "points", "lines", "polygons", "pixels"],
    relatedTopics: ["spatial_data_types", "data_representation", "gis_data"],
    examples: ["GPS points vs satellite images", "Road networks vs elevation maps", "City boundaries vs temperature surfaces"]
  },

  "point_line_polygon_data": {
    id: "point_line_polygon_data",
    title: "Understanding Point, Line, and Polygon Data",
    content: `**Detailed explanation of vector data types:**

## **Point Data**

**What are Points?**
- Single coordinate locations (X, Y, and optionally Z for elevation)
- Represent discrete locations or events
- Have no area or length (zero-dimensional)

**Real-world Examples:**
- **Health facilities**: Hospitals, clinics, pharmacies
- **Cities and towns**: Population centers
- **Environmental monitoring**: Weather stations, air quality sensors
- **Events**: Crime locations, accident sites
- **Infrastructure**: Cell towers, fire hydrants

**Point Attributes:**
Points can have associated data like:
- Name, population (for cities)
- Capacity, services offered (for hospitals)
- Temperature, rainfall (for weather stations)

**Visualization:**
- Displayed as symbols (circles, squares, icons)
- Symbol size can represent magnitude
- Colors can represent categories or values

## **Line Data (Polylines)**

**What are Lines?**
- Connected sequences of coordinate points
- Represent linear features or networks
- Have length but no area (one-dimensional)

**Real-world Examples:**
- **Transportation**: Roads, railways, flight paths
- **Utilities**: Power lines, pipelines, fiber optic cables
- **Natural features**: Rivers, coastlines, fault lines
- **Boundaries**: Political borders, property lines

**Line Attributes:**
Lines can store information like:
- Road type, speed limit (for roads)
- Flow rate, diameter (for pipelines)
- Voltage, capacity (for power lines)

**Visualization:**
- Displayed as lines with varying width, color, style
- Width can represent capacity or importance
- Colors can show different categories

## **Polygon Data (Areas)**

**What are Polygons?**
- Closed lines that define enclosed areas
- Represent regions, zones, or areas
- Have both perimeter and area (two-dimensional)

**Real-world Examples:**
- **Administrative**: Countries, states, counties, districts
- **Land use**: Forests, agricultural fields, urban areas
- **Natural features**: Lakes, islands, wetlands
- **Service areas**: School districts, postal zones, market areas

**Polygon Attributes:**
Polygons commonly store:
- Area, perimeter measurements
- Population, demographics (for administrative areas)
- Land use type, zoning classification
- Environmental characteristics

**Visualization:**
- Displayed with fill colors and outline styles
- Fill colors represent categories or values
- Transparency can show overlapping areas

## **Choosing the Right Data Type**

**Scale Considerations:**
- **Large scale (detailed)**: Cities as polygons, roads as polygons
- **Small scale (overview)**: Cities as points, roads as lines

**Analysis Considerations:**
- **Point analysis**: Clustering, proximity, density
- **Line analysis**: Network routing, connectivity, flow
- **Polygon analysis**: Area calculations, overlay operations

**Data Quality:**
- Points: Coordinate accuracy
- Lines: Vertex density, connectivity
- Polygons: Closure, no gaps or overlaps`,
    category: "data-types",
    difficulty: "beginner",
    keywords: ["points", "lines", "polygons", "vector data", "features", "geometry"],
    relatedTopics: ["vector_vs_raster", "spatial_data_types", "attribute_data"],
    examples: ["Hospital locations (points)", "Road networks (lines)", "District boundaries (polygons)"]
  },

  "area_data_explained": {
    id: "area_data_explained",
    title: "What is Area Data? Understanding Polygon Features",
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
- **Topology**: Adjacency, connectivity with other areas

**Attribute Properties:**
- **Population**: Number of people within the area
- **Density**: Population per unit area
- **Economic data**: Income, employment, GDP
- **Environmental data**: Land cover, elevation, climate

## **Common Area Data Formats**

**Shapefiles (.shp)**
- Most common vector format
- Includes geometry and attributes
- Widely supported by GIS software

**GeoJSON**
- Web-friendly format
- Human-readable text format
- Good for web mapping

**KML/KMZ**
- Google Earth format
- Good for visualization
- Includes styling information

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

## **Quality Considerations**

**Geometric Quality:**
- **Closure**: Polygons must be properly closed
- **No gaps**: Adjacent areas should not have spaces
- **No overlaps**: Areas should not overlap inappropriately
- **Valid topology**: Proper spatial relationships

**Attribute Quality:**
- **Completeness**: All areas have required attributes
- **Accuracy**: Data values are correct
- **Currency**: Data is up-to-date
- **Consistency**: Uniform data collection methods

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
    keywords: ["area data", "polygons", "boundaries", "regions", "administrative", "land use"],
    relatedTopics: ["point_line_polygon_data", "vector_vs_raster", "spatial_analysis"],
    examples: ["Country boundaries", "Hospital catchment areas", "Disease surveillance zones", "Land use classifications"]
  },

  // === GOOGLE EARTH ENGINE ===

  "what_is_google_earth_engine": {
    id: "what_is_google_earth_engine",
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
- **REST API**: For custom applications

## **How Google Earth Engine Works**

**Data Model:**
- **Images**: Single satellite scenes or derived products
- **ImageCollections**: Time series of images
- **Features**: Vector data (points, lines, polygons)
- **FeatureCollections**: Groups of vector features

**Processing Model:**
- **Server-side**: Computations happen on Google's servers
- **Lazy evaluation**: Operations are queued until results are requested
- **Parallel processing**: Large analyses split across multiple machines

**Workflow:**
1. **Filter data**: Select imagery by location, time, cloud cover
2. **Process data**: Apply algorithms, calculate indices, classify
3. **Analyze patterns**: Temporal analysis, change detection
4. **Export results**: Download or share processed data

## **Key Capabilities**

**Image Processing:**
- **Spectral indices**: NDVI, NDWI, EVI for vegetation/water analysis
- **Image classification**: Land cover mapping, change detection
- **Time series analysis**: Trend analysis, anomaly detection
- **Cloud masking**: Remove clouds from satellite imagery

**Geospatial Analysis:**
- **Zonal statistics**: Calculate statistics within polygons
- **Proximity analysis**: Distance calculations, buffers
- **Overlay operations**: Intersect, union spatial data
- **Terrain analysis**: Slope, aspect, watershed delineation

## **Applications in Health and Environment**

**Environmental Health:**
- **Air quality monitoring**: Track pollution from satellites
- **Water quality assessment**: Monitor surface water conditions
- **Urban heat islands**: Analyze temperature patterns in cities
- **Vegetation monitoring**: Track ecosystem health

**Disease Mapping:**
- **Malaria risk**: Environmental suitability modeling
- **Vector habitats**: Identify mosquito breeding areas
- **Climate factors**: Temperature and rainfall for disease transmission
- **Land use change**: Deforestation and disease emergence

## **Advantages of Google Earth Engine**

**For Researchers:**
- **No data download**: Instant access to preprocessed data
- **No software installation**: Web-based interface
- **Reproducible analysis**: Share code and results easily
- **Global scale**: Analyze entire continents or countries

**For Students:**
- **Free access**: No cost for research and education
- **Learning resources**: Extensive documentation and tutorials
- **Community support**: Active user community and forums

## **Getting Started**

**Prerequisites:**
- Google account
- Basic programming knowledge (JavaScript or Python)
- Understanding of remote sensing concepts

**First Steps:**
1. **Sign up**: Request access at earthengine.google.com
2. **Explore**: Browse the data catalog
3. **Learn**: Complete beginner tutorials
4. **Practice**: Start with simple analyses

**Learning Path:**
1. **Basic concepts**: Images, collections, filtering
2. **Visualization**: Display data on interactive maps
3. **Analysis**: Calculate indices, perform classifications
4. **Advanced topics**: Machine learning, time series analysis`,
    category: "software",
    difficulty: "beginner",
    keywords: ["google earth engine", "cloud computing", "satellite data", "remote sensing", "earth observation"],
    relatedTopics: ["satellite_imagery", "remote_sensing", "cloud_computing", "environmental_monitoring"],
    examples: ["Global forest change mapping", "Crop monitoring", "Disaster response", "Climate analysis"]
  },

  "how_earth_engine_works": {
    id: "how_earth_engine_works",
    title: "How Does Google Earth Engine Work?",
    content: `**Understanding the technical architecture and workflow of Google Earth Engine:**

## **Cloud Computing Architecture**

**Traditional GIS Workflow Problems:**
- Download large satellite datasets (gigabytes to terabytes)
- Need powerful local computers for processing
- Time-consuming data preparation and preprocessing
- Storage limitations for large datasets

**Google Earth Engine Solution:**
- **Data stays in the cloud**: No downloads needed
- **Processing happens on Google's servers**: Massive computational power
- **Analysis-ready data**: Preprocessed and quality-controlled
- **Instant access**: Global datasets available immediately

## **Core Technical Components**

**1. Data Infrastructure**
- **Petabyte-scale storage**: Thousands of satellite datasets
- **Preprocessing pipelines**: Automatic geometric and radiometric correction
- **Metadata catalogs**: Searchable information about all datasets
- **Quality flags**: Cloud masks, data quality indicators

**2. Computational Engine**
- **Distributed computing**: Splits large analyses across many machines
- **Parallel processing**: Multiple operations run simultaneously
- **Automatic scaling**: More resources allocated for larger analyses
- **Optimization**: Efficient algorithms for spatial operations

**3. Programming Interfaces**
- **Code Editor**: Web-based JavaScript development environment
- **Python API**: Integration with scientific Python ecosystem
- **REST API**: For building custom applications

## **Data Model and Objects**

**Core Object Types:**

**Images:**
- Single satellite scenes or derived products
- Multiple bands (e.g., red, green, blue, near-infrared)
- Associated metadata (date, cloud cover, quality)

**ImageCollections:**
- Time series of related images
- Can filter by date, location, cloud cover
- Apply functions across entire collection

**Features:**
- Vector objects (points, lines, polygons)
- Associated properties (attributes)
- Geometric operations available

**FeatureCollections:**
- Groups of features
- Can filter and map functions across collection
- Spatial and attribute queries

## **Processing Model**

**Lazy Evaluation:**
- Operations are not executed immediately
- Commands build a "recipe" for analysis
- Computation only happens when results are requested
- Allows optimization of entire workflow

**Server-Side vs Client-Side:**
- **Server-side**: Heavy computations on Google's servers
- **Client-side**: Display, user interface, light processing
- **Key principle**: Keep data on server, send only results to client

## **Typical Workflow**

**1. Data Discovery and Filtering**
```javascript
// Load satellite imagery collection
var landsat = ee.ImageCollection('LANDSAT/LC08/C02/T1_TOA')
  .filterBounds(studyArea)           // Spatial filter
  .filterDate('2020-01-01', '2020-12-31')  // Temporal filter
  .filterMetadata('CLOUD_COVER', 'less_than', 20); // Quality filter
```

**2. Data Processing**
```javascript
// Calculate vegetation index
var addNDVI = function(image) {
  var ndvi = image.normalizedDifference(['B5', 'B4']).rename('NDVI');
  return image.addBands(ndvi);
};

var landsatNDVI = landsat.map(addNDVI);
```

**3. Analysis and Reduction**
```javascript
// Get median composite to reduce clouds
var medianComposite = landsatNDVI.median();

// Calculate statistics within regions
var stats = medianComposite.reduceRegions({
  collection: districts,
  reducer: ee.Reducer.mean(),
  scale: 30
});
```

**4. Visualization and Export**
```javascript
// Display on map
Map.addLayer(medianComposite, {bands: ['B4', 'B3', 'B2']}, 'True Color');

// Export results
Export.table.toDrive({
  collection: stats,
  description: 'NDVI_by_district',
  fileFormat: 'CSV'
});
```

## **Advantages of This Architecture**

**Speed:**
- No data download time
- Parallel processing across many machines
- Optimized algorithms for spatial operations

**Scale:**
- Global analyses possible
- Handle datasets too large for local computers
- Consistent processing across large areas

**Accessibility:**
- No expensive software or hardware needed
- Web-based interface works on any computer
- Sharing code and results is easy

**Reproducibility:**
- Same code produces same results
- Version-controlled datasets
- Transparent processing workflows

## **Limitations to Understand**

**Memory Limits:**
- Cannot process unlimited amounts of data at once
- Need to break large analyses into smaller pieces
- Use efficient algorithms and data structures

**Computation Limits:**
- Maximum processing time per operation
- Need to optimize code for efficiency
- Some operations may time out on large datasets

**Export Limits:**
- Limited file sizes for exports
- May need to export in tiles or reduce resolution
- Google Drive storage limitations

## **Best Practices**

**Efficient Coding:**
- Filter data early and often
- Use appropriate spatial and temporal scales
- Minimize data movement between server and client

**Debugging:**
- Start with small test areas
- Print intermediate results to understand data
- Use Inspector tool to examine pixel values

**Optimization:**
- Use built-in functions when possible
- Avoid unnecessary loops and iterations
- Consider computational complexity of operations`,
    category: "software",
    difficulty: "intermediate",
    keywords: ["google earth engine", "cloud computing", "distributed processing", "workflow", "architecture"],
    relatedTopics: ["what_is_google_earth_engine", "satellite_imagery", "remote_sensing"],
    examples: ["Global forest monitoring", "Agricultural yield prediction", "Urban growth analysis", "Climate change studies"]
  },

  // === SPATIAL CONCEPTS ===

  "coordinate_systems_explained": {
    id: "coordinate_systems_explained",
    title: "Understanding Coordinate Systems and Projections",
    content: `**Coordinate systems define how locations on Earth are represented mathematically:**

## **Why Coordinate Systems Matter**

**The Challenge:**
- Earth is a 3D sphere (actually an oblate spheroid)
- Maps and computer screens are 2D flat surfaces
- Need mathematical methods to represent curved Earth on flat surfaces
- Different methods serve different purposes

**Real-world Impact:**
- Wrong coordinate system = wrong locations on map
- Inaccurate distance and area measurements
- Data layers that don't align properly
- Navigation and surveying errors

## **Types of Coordinate Systems**

**1. Geographic Coordinate Systems (GCS)**
- **Definition**: Use latitude and longitude on Earth's curved surface
- **Units**: Degrees (decimal or degrees-minutes-seconds)
- **Reference**: Based on a specific datum (model of Earth's shape)
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
- **Trade-offs**: All projections distort shape, area, distance, or direction

## **Common Projections and Their Uses**

**Universal Transverse Mercator (UTM)**
- **Zones**: Earth divided into 60 zones, each 6° wide
- **Characteristics**: Minimal distortion within each zone
- **Units**: Meters
- **Use cases**: Local to regional mapping and analysis
- **Uganda example**: UTM Zone 36N (EPSG:32636)

**Web Mercator**
- **Use**: Web mapping (Google Maps, OpenStreetMap)
- **Characteristics**: Preserves shape but distorts area
- **Problem**: Greenland appears larger than Africa
- **EPSG code**: 3857

**Albers Equal Area**
- **Characteristics**: Preserves area relationships
- **Use**: Statistical mapping, thematic maps
- **Good for**: Large countries or continents

## **Datums - Models of Earth's Shape**

**What is a Datum?**
- Mathematical model of Earth's shape and size
- Defines the reference ellipsoid and its position
- Different datums can shift locations by hundreds of meters

**Common Datums:**
- **WGS84**: World Geodetic System 1984 (GPS standard)
- **NAD83**: North American Datum 1983
- **Local datums**: Optimized for specific regions

## **EPSG Codes - The Universal Identifier**

**What are EPSG Codes?**
- Numerical identifiers for coordinate systems
- Maintained by European Petroleum Survey Group
- Standardized way to specify coordinate systems

**Important EPSG Codes:**
- **4326**: WGS84 Geographic (Lat/Long)
- **3857**: Web Mercator (Google Maps)
- **32636**: UTM Zone 36N (Uganda)
- **4269**: NAD83 Geographic

## **Choosing the Right Coordinate System**

**For Uganda Projects:**
- **Geographic (EPSG:4326)**: Initial data loading, web mapping
- **UTM Zone 36N (EPSG:32636)**: Analysis requiring accurate measurements

**General Guidelines:**
- **Global projects**: Geographic coordinate systems
- **Regional projects**: Local UTM zones or national grids
- **Web mapping**: Web Mercator
- **Area calculations**: Equal area projections

## **Common Problems and Solutions**

**Problem 1: Data in Wrong Location**
- **Cause**: Incorrect coordinate system assignment
- **Solution**: Check and set correct coordinate system

**Problem 2: Inaccurate Measurements**
- **Cause**: Using geographic coordinates for distance/area
- **Solution**: Reproject to appropriate projected system

**Problem 3: Layers Don't Align**
- **Cause**: Different coordinate systems
- **Solution**: Reproject all layers to common system

## **Working with Coordinate Systems**

**In QGIS:**
1. **Check CRS**: Look at bottom-right status bar
2. **Set Project CRS**: Project → Properties → CRS
3. **Set Layer CRS**: Right-click layer → Set CRS
4. **Reproject Layer**: Processing → Reproject layer

**Best Practices:**
- **Always check** coordinate systems when loading data
- **Use consistent CRS** throughout a project
- **Document** which coordinate systems you use
- **Understand** the limitations of your chosen projection

## **On-the-Fly Projection**

**What it is:**
- GIS software automatically reprojects layers for display
- Allows layers with different CRS to appear aligned
- Does not change the actual data

**Benefits:**
- Can work with mixed coordinate systems
- Visual alignment for mapping

**Limitations:**
- May not be accurate for measurements
- Can slow down performance
- Better to have all data in same CRS`,
    category: "concepts",
    difficulty: "intermediate",
    keywords: ["coordinate systems", "projections", "datum", "epsg", "utm", "latitude", "longitude"],
    relatedTopics: ["spatial_reference", "map_projections", "gis_fundamentals"],
    examples: ["GPS coordinates", "UTM grid", "Web mapping", "Survey data"]
  },

  "scale_resolution_concepts": {
    id: "scale_resolution_concepts",
    title: "Understanding Scale and Resolution in GIS",
    content: `**Scale and resolution are fundamental concepts that affect how we represent and analyze spatial data:**

## **Map Scale**

**Definition:**
Map scale is the ratio of distance on the map to the corresponding distance in the real world.

**Scale Representation:**
- **Ratio**: 1:50,000 (1 unit on map = 50,000 units in reality)
- **Verbal**: "1 inch equals 1 mile"
- **Graphic**: Scale bar showing distances

**Large vs Small Scale (Geographic Definition):**
- **Large scale**: Large ratio (1:10,000) = small area, high detail
- **Small scale**: Small ratio (1:1,000,000) = large area, low detail

**Important Note:**
Geographic definition is opposite to common usage:
- **Geographic "large scale"** = detailed, local view
- **Common "large scale"** = broad, regional view

## **Resolution in GIS**

**Spatial Resolution:**
The smallest unit of area that can be distinguished in spatial data.

**For Raster Data:**
- **Pixel size**: Physical dimensions of each cell
- **Examples**: 
  - Landsat: 30m × 30m pixels
  - MODIS: 250m × 250m pixels
  - High-resolution imagery: 1m × 1m pixels

**For Vector Data:**
- **Coordinate precision**: Number of decimal places
- **Vertex density**: How many points define lines/polygons
- **Minimum mapping unit**: Smallest feature that can be represented

## **Temporal Resolution**

**Definition:**
How frequently data is collected over time.

**Examples:**
- **Daily**: Weather data, some satellite imagery
- **Weekly**: Disease surveillance reports
- **Monthly**: Economic indicators
- **Annual**: Census data, land use surveys

**Trade-offs:**
- Higher temporal resolution = more frequent updates
- May sacrifice spatial detail for temporal frequency

## **Spectral Resolution**

**Definition:**
The number and width of electromagnetic spectrum bands recorded.

**Examples:**
- **Panchromatic**: Single band (black and white)
- **Multispectral**: 3-10 bands (visible + near-infrared)
- **Hyperspectral**: 100+ narrow bands

**Applications:**
- **3-band (RGB)**: Basic visualization
- **4-band (RGB + NIR)**: Vegetation analysis
- **Hyperspectral**: Detailed material identification

## **Scale and Analysis Relationships**

**Scale Affects:**
- **Level of detail**: What features can be seen/mapped
- **Analysis methods**: Appropriate techniques for scale
- **Data requirements**: Resolution needed for analysis
- **Computational demands**: Processing time and storage

**Feature Representation by Scale:**

**Large Scale (Local - 1:10,000)**
- Buildings as polygons
- Roads as polygons with width
- Individual trees as points
- Detailed topography

**Medium Scale (Regional - 1:100,000)**
- Buildings as points or small polygons
- Roads as lines
- Forest patches as polygons
- Generalized topography

**Small Scale (National - 1:1,000,000)**
- Cities as points
- Major roads as lines
- Large forest regions
- Simplified coastlines

## **Resolution Considerations for Health GIS**

**Health Facility Mapping:**
- **Local scale**: Individual building footprints
- **Regional scale**: Point locations with service areas
- **National scale**: Points with basic attributes

**Disease Surveillance:**
- **High resolution**: Individual case locations (privacy concerns)
- **Medium resolution**: Neighborhood or district aggregation
- **Low resolution**: Regional or national summaries

**Environmental Health:**
- **Air quality**: Station points vs. interpolated surfaces
- **Water quality**: Sample points vs. watershed polygons
- **Risk mapping**: Individual addresses vs. census tracts

## **Choosing Appropriate Scale/Resolution**

**Factors to Consider:**
1. **Analysis purpose**: What questions are you asking?
2. **Available data**: What resolution is your data?
3. **Computational limits**: Processing time and storage
4. **Display medium**: Screen resolution, print size
5. **Accuracy requirements**: How precise do results need to be?

**Guidelines:**
- **Match resolution to analysis scale**: Don't use 1m imagery for continental analysis
- **Consider data integration**: All layers should have compatible scales
- **Think about end users**: Appropriate detail for audience
- **Plan for uncertainty**: Coarser data = more uncertainty

## **Scale Effects and Modifiable Areal Unit Problem (MAUP)**

**Scale Effects:**
- Same data analyzed at different scales can give different results
- Pattern strength may change with scale
- Relationships may appear or disappear

**MAUP:**
- Statistical results depend on how areas are defined
- Different boundary definitions = different results
- Important consideration for health and social data

**Example:**
Disease rates calculated by:
- Individual neighborhoods vs.
- Combined districts
- May show different patterns and correlations

## **Best Practices**

**Data Collection:**
- Collect at finest scale/resolution you might need
- Can always aggregate up, hard to add detail later
- Document scale and resolution of all data sources

**Analysis:**
- Use consistent scales across all data layers
- Be aware of scale limitations in interpretation
- Report scale and resolution in results

**Visualization:**
- Match map scale to intended use
- Include scale indicators (scale bar, grid)
- Use appropriate generalization for scale`,
    category: "concepts",
    difficulty: "intermediate",
    keywords: ["scale", "resolution", "spatial resolution", "temporal resolution", "map scale"],
    relatedTopics: ["coordinate_systems_explained", "data_quality", "spatial_analysis"],
    examples: ["Satellite imagery resolution", "Map scale bars", "Census geography", "GPS accuracy"]
  },

  // === ATTRIBUTE DATA ===

  "attribute_data_tables": {
    id: "attribute_data_tables",
    title: "Understanding Attribute Data and Tables",
    content: `**Attribute data provides the "what" information to complement spatial "where" information:**

## **What is Attribute Data?**

**Definition:**
Non-spatial information associated with spatial features. Every point, line, or polygon can have associated attributes that describe its characteristics.

**The Link:**
- Each spatial feature has a unique identifier (ID)
- This ID links the feature to a record in an attribute table
- One-to-one or many-to-one relationship between features and records

## **Structure of Attribute Tables**

**Rows (Records):**
- Each row represents one spatial feature
- Contains all attribute information for that feature

**Columns (Fields):**
- Each column represents one attribute or characteristic
- All features have the same set of possible attributes

**Example - Hospital Attribute Table:**
| ID | Name | Type | Beds | Services | District |
|----|------|------|------|----------|----------|
| 1 | City Hospital | General | 250 | Emergency, Surgery | Central |
| 2 | Rural Clinic | Clinic | 20 | Basic Care | North |
| 3 | Specialist Center | Specialty | 100 | Cardiology | Central |

## **Types of Attribute Data**

**Measurement Levels:**

**1. Nominal (Categorical)**
- **Definition**: Categories with no inherent order
- **Examples**: Land use type, hospital type, gender
- **Operations**: Count, mode (most frequent)
- **Visualization**: Different colors for each category

**2. Ordinal**
- **Definition**: Categories with meaningful order
- **Examples**: Education level, risk categories (low/medium/high)
- **Operations**: Count, mode, median
- **Visualization**: Ordered color schemes

**3. Interval**
- **Definition**: Numeric with equal intervals, no true zero
- **Examples**: Temperature in Celsius, test scores
- **Operations**: Mean, standard deviation, correlation
- **Visualization**: Color gradients, proportional symbols

**4. Ratio**
- **Definition**: Numeric with equal intervals and true zero
- **Examples**: Population, income, distance, area
- **Operations**: All mathematical operations
- **Visualization**: Proportional symbols, choropleth maps

## **Data Types in GIS**

**Text (String)**
- **Storage**: Letters, numbers, symbols as text
- **Examples**: Names, addresses, descriptions
- **Limitations**: Cannot perform mathematical operations
- **Size**: Variable length, memory considerations

**Integer**
- **Storage**: Whole numbers only
- **Examples**: Population count, number of facilities
- **Range**: -2,147,483,648 to 2,147,483,647 (32-bit)
- **Advantage**: Efficient storage, exact values

**Float/Double**
- **Storage**: Decimal numbers
- **Examples**: Temperature, coordinates, rates
- **Precision**: Float (7 digits), Double (15 digits)
- **Consideration**: Rounding errors possible

**Date/Time**
- **Storage**: Temporal information
- **Examples**: Survey date, last update, event time
- **Operations**: Temporal queries, time series analysis

## **Common Attribute Operations**

**Queries and Selection:**
- **Simple queries**: "Select all hospitals with >100 beds"
- **Complex queries**: "Hospitals in urban areas with emergency services"
- **Spatial queries**: "Facilities within 10km of city center"

**Calculations:**
- **New fields**: Calculate population density, distance ratios
- **Summary statistics**: Total, average, minimum, maximum
- **Conditional calculations**: If-then statements

**Joins and Relationships:**
- **Table joins**: Combine data from multiple tables
- **Spatial joins**: Add attributes based on spatial relationships
- **One-to-many**: One feature with multiple related records

## **Data Quality Considerations**

**Completeness:**
- **Missing values**: How to handle NULL or empty fields
- **Required fields**: Essential attributes for analysis
- **Data gaps**: Spatial or temporal coverage issues

**Accuracy:**
- **Source reliability**: How was data collected?
- **Update frequency**: How current is the information?
- **Validation**: Cross-checking with other sources

**Consistency:**
- **Standardization**: Uniform units, formats, classifications
- **Coding schemes**: Consistent category definitions
- **Naming conventions**: Standardized field names

## **Best Practices for Attribute Data**

**Field Design:**
- **Descriptive names**: Clear, meaningful field names
- **Appropriate types**: Match data type to content
- **Consistent formats**: Standardize date formats, units
- **Documentation**: Maintain metadata about fields

**Data Entry:**
- **Validation rules**: Prevent invalid data entry
- **Controlled vocabularies**: Use standardized lists
- **Quality control**: Regular data checking procedures

**Analysis Preparation:**
- **Data cleaning**: Remove errors, standardize formats
- **Classification**: Group continuous data into categories
- **Normalization**: Account for population or area differences

## **Applications in Health GIS**

**Health Facility Attributes:**
- **Basic**: Name, type, location, contact information
- **Capacity**: Number of beds, staff, equipment
- **Services**: Specialties offered, hours of operation
- **Quality**: Accreditation status, patient satisfaction

**Population Attributes:**
- **Demographics**: Age, gender, ethnicity
- **Socioeconomic**: Income, education, employment
- **Health**: Disease prevalence, risk factors
- **Geographic**: Urban/rural, accessibility measures

**Disease Surveillance:**
- **Case information**: Date, location, patient demographics
- **Disease details**: Type, severity, outcome
- **Risk factors**: Exposure history, comorbidities
- **Geographic**: Administrative area, coordinates

## **Visualization of Attribute Data**

**Choropleth Maps:**
- Color polygons based on attribute values
- Good for rates, densities, percentages
- Consider classification methods

**Proportional Symbols:**
- Symbol size represents attribute magnitude
- Good for counts, totals
- Can combine with color for multiple attributes

**Charts and Graphs:**
- Bar charts for categorical data
- Histograms for continuous data
- Scatter plots for relationships between attributes`,
    category: "data-types",
    difficulty: "beginner",
    keywords: ["attributes", "tables", "data types", "measurement levels", "nominal", "ordinal", "interval", "ratio"],
    relatedTopics: ["point_line_polygon_data", "data_quality", "spatial_analysis"],
    examples: ["Hospital capacity data", "Population demographics", "Land use classifications", "Disease surveillance records"]
  }
}

/**
 * Search function for introductory knowledge
 */
export function searchIntroductoryKnowledge(query: string, limit: number = 5): IntroductoryKnowledgeItem[] {
  const searchTerms = query.toLowerCase().split(' ')
  const results: Array<{item: IntroductoryKnowledgeItem, score: number}> = []

  Object.values(INTRODUCTORY_GIS_KNOWLEDGE).forEach(item => {
    let score = 0
    
    searchTerms.forEach(term => {
      // Title matches get highest score
      if (item.title.toLowerCase().includes(term)) score += 25
      
      // Keyword matches get high score  
      if (item.keywords.some(keyword => keyword.includes(term))) score += 20
      
      // Content matches get medium score
      if (item.content.toLowerCase().includes(term)) score += 5
      
      // Category matches get bonus
      if (item.category === "fundamentals" && (term === "what" || term === "basic" || term === "introduction")) score += 15
    })

    // Boost beginner content
    if (item.difficulty === "beginner") score += 5

    if (score > 0) {
      results.push({item, score})
    }
  })

  return results
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(r => r.item)
}

/**
 * Generate comprehensive introductory response
 */
export function generateIntroductoryResponse(query: string): string {
  const results = searchIntroductoryKnowledge(query, 3)
  
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

**💡 Difficulty level:** ${topResult.difficulty}
**🏷️ Category:** ${topResult.category}

**🔗 Related topics you might find helpful:**
${topResult.relatedTopics.slice(0, 3).map(topic => `- ${topic.replace(/_/g, ' ')}`).join('\n')}

**📋 Real-world examples:**
${topResult.examples.slice(0, 3).map(example => `- ${example}`).join('\n')}

Need me to explain any specific part in more detail?`
}

// Export singleton instance
export const introductoryKnowledge = {
  search: searchIntroductoryKnowledge,
  generateResponse: generateIntroductoryResponse,
  knowledge: INTRODUCTORY_GIS_KNOWLEDGE
} 