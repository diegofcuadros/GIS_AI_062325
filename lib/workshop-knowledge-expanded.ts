// Expanded Workshop Knowledge Base for Enhanced Local AI Assistant

export const EXPANDED_WORKSHOP_KNOWLEDGE = {
  // Lab 1: QGIS and Geospatial Data
  lab1: {
    title: "Introduction to QGIS and Geospatial Data",
    common_questions: {
      // Data Loading
      "load shapefile qgis": {
        category: "Technical",
        response: `📁 **Loading Shapefiles in QGIS**

**Method 1 - Layer Menu:**
1. Layer → Add Layer → Add Vector Layer
2. Click "..." to browse for your .shp file
3. Select the shapefile and click "Add"
4. Click "Close" when done

**Method 2 - Data Source Manager:**
1. Click "Open Data Source Manager" button (Ctrl+L)
2. Select "Vector" tab
3. Browse to your shapefile
4. Click "Add" then "Close"

⚠️ **Important**: Ensure all shapefile components are in the same folder:
- .shp (geometry)
- .shx (index)
- .dbf (attributes)  
- .prj (projection)

💡 **Troubleshooting**: If file won't load, check file paths for spaces or special characters.`,
        related_topics: ["coordinate systems", "file formats", "data source manager"]
      },

      "coordinate reference system": {
        category: "Concept",
        response: `🌍 **Coordinate Reference Systems (CRS) Explained**

**What is CRS?**
A mathematical framework that defines how geographic coordinates relate to real-world locations.

**Key Types:**
1. **Geographic CRS** (lat/lon): WGS84 (EPSG:4326)
   - Global coverage, degrees as units
   - Good for: Web maps, global analysis

2. **Projected CRS** (x/y): UTM zones
   - Uganda uses UTM Zone 36N (EPSG:32636)
   - Units in meters, good for measurements

**In QGIS:**
- **Check CRS**: Project → Properties → CRS
- **Set Project CRS**: Choose EPSG:32636 for Uganda
- **Reproject Layer**: Right-click layer → Export → Save As → Change CRS

**Uganda-Specific:**
- UTM Zone 36N (EPSG:32636) - Most accurate for measurements
- WGS84 (EPSG:4326) - For web maps and global context`,
        related_topics: ["projections", "utm zones", "epsg codes", "uganda data"]
      },

      "invalid geometry error": {
        category: "Troubleshooting",
        response: `🔧 **Invalid Geometry Error - Complete Fix Guide**

**What Causes This:**
- Self-intersecting polygons
- Duplicate vertices
- Corrupted shapefile data
- Topology errors

**Solution Steps:**
1. **Fix Geometries Tool:**
   - Vector → Geometry Tools → Fix Geometries
   - Input: Your problematic layer
   - Output: Choose location for fixed layer
   - Click "Run"

2. **Check Geometry Tool (First):**
   - Vector → Geometry Tools → Check Validity
   - This shows what's wrong before fixing

3. **Alternative - GRASS Tools:**
   - Processing → Toolbox → GRASS → v.clean
   - More advanced cleaning options

**Prevention:**
- Always validate data before analysis
- Use "Check Validity" tool on imported data
- Keep backups of original data

**Still Having Issues?**
Try: Processing → Toolbox → "Fix geometries" (different algorithm)`,
        related_topics: ["topology", "data quality", "vector analysis"]
      },

      "symbology styling": {
        category: "Technical", 
        response: `🎨 **QGIS Symbology and Styling Guide**

**Access Symbology:**
- Right-click layer → Properties → Symbology
- Or double-click layer name

**For Health Data Visualization:**

**1. Graduated Symbols (Choropleth Maps):**
- Choose "Graduated" 
- Value: Your data column (e.g., malaria_cases)
- Method: Natural Breaks (Jenks)
- Classes: 5-7 for clear visualization
- Color Ramp: ColorBrewer → Sequential → Reds/OrRd

**2. Color Ramps for Health Data:**
- **Disease Incidence**: White → Red (low to high)
- **Risk Levels**: Green → Yellow → Red  
- **Population Density**: Light → Dark Blue

**3. Labels:**
- Labels tab → Show labels for this layer
- Label with: District name or value
- Font: Arial, size 8-10
- Buffer: White background for readability

**Pro Tips:**
- Use transparency (50-70%) for overlays
- Add outline to polygons (0.5 width, darker color)
- Test color combinations for colorblind accessibility`,
        related_topics: ["color theory", "cartography", "data visualization"]
      },

      "print layout export": {
        category: "Technical",
        response: `🖨️ **Creating Publication-Ready Maps**

**Start Print Layout:**
1. Project → New Print Layout
2. Give it a name (e.g., "Uganda Malaria Map")

**Essential Elements:**

**1. Add Map:**
- Add Item → Add Map
- Draw rectangle for map area
- Item Properties → Scale: Set appropriate scale

**2. Add Title:**
- Add Item → Add Label
- Main Properties: "Malaria Prevalence in Uganda, 2023"
- Font: Arial Bold, 16-20pt

**3. Add Legend:**
- Add Item → Add Legend
- Link to map item
- Remove unnecessary layers
- Adjust symbol sizes

**4. Add Scale Bar:**
- Add Item → Add Scale Bar
- Link to map
- Style: Single box or numeric

**5. Add North Arrow:**
- Add Item → Add North Arrow
- Choose simple design
- Position in corner

**6. Add Attribution:**
- Data sources, date, author
- Small text at bottom

**Export Options:**
- Layout → Export as PDF (best for printing)
- Layout → Export as Image (PNG for web)
- Resolution: 300 DPI for print, 150 DPI for web`,
        related_topics: ["cartography", "map design", "publication"]
      }
    },
    
    step_by_step_guides: {
      "uganda_malaria_map": `🗺️ **Complete Uganda Malaria Map Tutorial**

**Step 1: Setup Project**
1. Open QGIS
2. Project → Properties → CRS → Set to EPSG:32636 (UTM 36N)
3. Save project as "Uganda_Malaria_Analysis"

**Step 2: Load Data**
1. Layer → Add Vector Layer → Browse to Uganda_districts.shp
2. Add malaria_data.csv via Layer → Add Delimited Text Layer
3. Join CSV to shapefile: Layer Properties → Joins → Add

**Step 3: Create Choropleth**
1. Right-click districts layer → Properties → Symbology
2. Change from "Single Symbol" to "Graduated"
3. Value: malaria_prevalence_rate
4. Method: Natural Breaks, 5 classes
5. Color ramp: ColorBrewer → Reds

**Step 4: Style and Label**
1. Add white outline, 0.5 width
2. Labels tab → Show labels → district_name
3. Font: Arial 8pt, white buffer

**Step 5: Create Layout**
1. Project → New Print Layout
2. Add map, title, legend, scale bar, north arrow
3. Export as PDF

**Expected Result:** Professional choropleth map showing malaria prevalence across Uganda districts.`
    }
  },

  // Lab 2: Spatial Analysis for Health
  lab2: {
    title: "Spatial Analysis for Health Applications",
    common_questions: {
      "buffer analysis": {
        category: "Concept",
        response: `⭕ **Buffer Analysis for Healthcare Accessibility**

**What are Buffers?**
Zones of specified distance around geographic features.

**Healthcare Applications:**
- **Facility Access**: Who lives within 5km of a hospital?
- **Service Areas**: Coverage zones for health services  
- **Risk Zones**: Areas within disease transmission distance
- **Policy Planning**: Underserved area identification

**Creating Buffers in QGIS:**
1. Vector → Geoprocessing Tools → Buffer
2. Input layer: Health facilities
3. Distance: 5000 (meters for UTM)
4. Segments: 25 (smoother circles)
5. Output: Save as health_facility_buffers.shp

**Analysis Applications:**
- Count population within buffers
- Identify gaps in coverage
- Optimize facility placement
- Plan mobile clinic routes

**Pro Tip:** Always use projected CRS (UTM) for accurate distance measurements.`,
        related_topics: ["accessibility", "service areas", "distance analysis"]
      },

      "spatial join": {
        category: "Technical",
        response: `🔗 **Spatial Joins - Connecting Geographic Data**

**What is Spatial Join?**
Combines data from different layers based on spatial relationships.

**Common Health Applications:**
- Join population data to administrative boundaries
- Assign districts to health facility points
- Combine disease cases with environmental zones

**Types of Spatial Relationships:**
1. **Intersects**: Any overlap
2. **Within**: Completely inside
3. **Contains**: Completely surrounds
4. **Nearest**: Closest feature

**QGIS Process:**
1. Vector → Data Management Tools → Join Attributes by Location
2. **Target layer**: What gets the new data (e.g., districts)
3. **Join layer**: Source of data (e.g., health facilities)
4. **Geometric predicate**: Choose relationship type
5. **Join type**: How to handle multiple matches

**Example - Hospitals per District:**
- Target: Uganda districts (polygons)
- Join: Hospital points
- Predicate: "Intersects"
- Summary: Count hospitals per district

**Troubleshooting:**
- Ensure both layers use same CRS
- Check for invalid geometries first
- Preview results before running full analysis

**Advanced:** Use "Summary" options to calculate statistics (count, sum, average).`,
        related_topics: ["attribute joins", "spatial relationships", "data integration"]
      },

      "distance calculations": {
        category: "Technical",
        response: `📏 **Distance Calculations and Analysis**

**Distance Measurement Types:**

**1. Straight-Line Distance (Euclidean):**
- Vector → Analysis Tools → Distance Matrix
- Fastest calculation
- Good for: Air travel, bird migration, initial analysis

**2. Network Distance (Road/Path):**
- Processing → Network Analysis → Shortest Path
- Requires road network data
- Good for: Travel time, ambulance routing

**3. Travel Time Analysis:**
- Considers speed limits, traffic, terrain
- Use QGIS Network Analyst plugin
- Essential for healthcare accessibility

**Creating Distance Matrix:**
1. Input: Origin points (villages)
2. Target: Destination points (hospitals)  
3. Output: Table with all distances
4. Analysis: Find nearest facility for each village

**Healthcare Applications:**
- **Average travel distance** to health facilities
- **Service catchment areas** based on distance
- **Equity analysis**: Rural vs urban access
- **Emergency response** optimization

**Distance Decay Analysis:**
- Healthcare use decreases with distance
- Model: Usage = 1/(Distance^2)
- Create zones: <2km, 2-5km, 5-10km, >10km

**Units Important:**
- UTM (meters): Accurate measurements
- Geographic (degrees): Approximate only
- Always specify units in reports`,
        related_topics: ["accessibility modeling", "catchment areas", "network analysis"]
      }
    }
  },

  // Lab 3: Remote Sensing and Google Earth Engine
  lab3: {
    title: "Environmental Risk Mapping with Remote Sensing",
    common_questions: {
      "google earth engine authentication": {
        category: "Troubleshooting",
        response: `🔐 **Google Earth Engine Authentication - Complete Guide**

**Initial Setup:**
1. Go to code.earthengine.google.com
2. Sign in with Google account
3. Accept terms of service
4. Wait for account approval (usually instant)

**In Code Editor:**
\`\`\`javascript
// Run this first
ee.Authenticate()
\`\`\`

**Authentication Process:**
1. Click generated link
2. Sign in to Google account
3. Copy authorization code
4. Paste back in Code Editor
5. Run: \`ee.Initialize()\`

**Common Issues & Solutions:**

**Issue 1:** "User not registered"
- Solution: Visit earthengine.google.com, register account

**Issue 2:** "Authentication failed"  
- Clear browser cache/cookies
- Try incognito/private window
- Use same Google account throughout

**Issue 3:** "Initialize failed"
- Run \`ee.Authenticate()\` first
- Wait for "Successfully saved authorization token"
- Then run \`ee.Initialize()\`

**Issue 4:** Code Editor blank/won't load
- Check internet connection
- Try different browser (Chrome recommended)
- Disable ad blockers

**Pro Tips:**
- Use same Google account for all GEE services
- Keep browser logged in during workshop
- Bookmark: code.earthengine.google.com`,
        related_topics: ["account setup", "cloud computing", "javascript"]
      },

      "ndvi calculation": {
        category: "Concept", 
        response: `🌱 **NDVI (Normalized Difference Vegetation Index) Explained**

**What is NDVI?**
A measure of vegetation health and density using satellite imagery.

**Formula:**
NDVI = (NIR - Red) / (NIR + Red)

**Interpretation:**
- **-1 to 0**: Water, snow, clouds, bare soil
- **0 to 0.3**: Sparse vegetation, urban areas
- **0.3 to 0.7**: Moderate vegetation, crops
- **0.7 to 1**: Dense vegetation, forests

**Satellite Band Information:**
**Landsat 8:**
- Red: Band 4
- NIR: Band 5

**Sentinel-2:**
- Red: Band 4 (B4)
- NIR: Band 8 (B8)

**Google Earth Engine Code:**
\`\`\`javascript
// For Sentinel-2
var ndvi = image.normalizedDifference(['B8', 'B4']).rename('NDVI');

// For Landsat 8
var ndvi = image.normalizedDifference(['B5', 'B4']).rename('NDVI');
\`\`\`

**Health Applications:**
- **Malaria Risk**: Dense vegetation = mosquito breeding
- **Food Security**: Monitor crop health
- **Urban Planning**: Green space assessment
- **Environmental Health**: Air quality correlation

**Visualization:**
\`\`\`javascript
var ndviParams = {
  min: -1,
  max: 1,
  palette: ['blue', 'white', 'green']
};
Map.addLayer(ndvi, ndviParams, 'NDVI');
\`\`\`

**Seasonal Considerations:**
- Dry season: Lower NDVI values
- Wet season: Higher NDVI values
- Use multi-temporal analysis for trends`,
        related_topics: ["vegetation indices", "satellite imagery", "environmental monitoring"]
      },

      "gee image collection": {
        category: "Technical",
        response: `📡 **Google Earth Engine Image Collections**

**What are Image Collections?**
Stacks of satellite images over time and space.

**Common Collections:**
1. **Sentinel-2**: 10m resolution, 5-day revisit
2. **Landsat 8**: 30m resolution, 16-day revisit  
3. **MODIS**: 250m-1km, daily
4. **CHIRPS**: Rainfall data, monthly

**Filtering Collections:**

**1. By Date:**
\`\`\`javascript
var collection = ee.ImageCollection('COPERNICUS/S2_SR')
  .filterDate('2023-01-01', '2023-12-31');
\`\`\`

**2. By Location:**
\`\`\`javascript
// Define Uganda boundary
var uganda = ee.FeatureCollection('USDOS/LSIB_SIMPLE/2017')
  .filter(ee.Filter.eq('country_na', 'Uganda'));

var collection = ee.ImageCollection('COPERNICUS/S2_SR')
  .filterBounds(uganda);
\`\`\`

**3. By Cloud Cover:**
\`\`\`javascript
var collection = ee.ImageCollection('COPERNICUS/S2_SR')
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20));
\`\`\`

**Creating Composites:**
\`\`\`javascript
// Median composite (reduces clouds)
var composite = collection.median();

// Mean composite
var composite = collection.mean();
\`\`\`

**Uganda-Specific Example:**
\`\`\`javascript
var uganda = ee.FeatureCollection('USDOS/LSIB_SIMPLE/2017')
  .filter(ee.Filter.eq('country_na', 'Uganda'));

var s2 = ee.ImageCollection('COPERNICUS/S2_SR')
  .filterDate('2023-06-01', '2023-08-31')  // Wet season
  .filterBounds(uganda)
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 30))
  .median();

Map.centerObject(uganda, 7);
Map.addLayer(s2.clip(uganda), {bands: ['B4', 'B3', 'B2'], max: 3000}, 'Uganda S2');
\`\`\``,
        related_topics: ["satellite data", "temporal analysis", "cloud masking"]
      }
    }
  },

  // Lab 4: AI-Assisted Analysis  
  lab4: {
    title: "AI-Assisted Geospatial Analysis",
    common_questions: {
      "python environment setup": {
        category: "Troubleshooting",
        response: `🐍 **Python Environment Setup for GIS**

**Required Packages:**
- geopandas (spatial data)
- rasterio (raster data)
- matplotlib (visualization)
- scikit-learn (machine learning)
- numpy, pandas (data processing)

**Installation Methods:**

**Option 1 - Conda (Recommended):**
\`\`\`bash
# Create new environment
conda create -n gis-workshop python=3.9
conda activate gis-workshop

# Install packages
conda install -c conda-forge geopandas rasterio matplotlib scikit-learn
\`\`\`

**Option 2 - Pip:**
\`\`\`bash
pip install geopandas rasterio matplotlib scikit-learn pandas numpy
\`\`\`

**QGIS Python Console:**
1. Plugins → Python Console
2. Built-in packages: qgis, pandas, numpy
3. Install additional: 
   - Click settings → Install from repository
   - Or use pip in QGIS Python

**Common Import Errors:**

**"No module named 'geopandas'":**
\`\`\`bash
pip install geopandas
# Restart QGIS after installation
\`\`\`

**"GDAL not found":**
- Use conda-forge channel
- Or install OSGeo4W on Windows

**Testing Installation:**
\`\`\`python
import geopandas as gpd
import rasterio
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
print("All packages loaded successfully!")
\`\`\`

**Virtual Environment Best Practice:**
- Always use virtual environments
- Keep requirements.txt updated
- Document environment for reproducibility`,
        related_topics: ["package management", "development environment", "qgis python"]
      },

      "machine learning classification": {
        category: "Concept",
        response: `🤖 **Machine Learning for Land Cover Classification**

**Supervised Classification Process:**

**1. Data Preparation:**
- Satellite imagery (Sentinel-2/Landsat)
- Training data (ground truth samples)
- Feature extraction (spectral bands, indices)

**2. Training Sample Collection:**
\`\`\`python
# Load training data
training_data = gpd.read_file('training_samples.shp')
# Classes: Water, Forest, Agriculture, Urban, Bare soil
\`\`\`

**3. Feature Extraction:**
\`\`\`python
# Extract pixel values for training
features = []
labels = []

for index, row in training_data.iterrows():
    # Extract spectral values at sample points
    pixel_values = extract_pixels(image, row.geometry)
    features.append(pixel_values)
    labels.append(row.land_cover)
\`\`\`

**4. Model Training:**
\`\`\`python
from sklearn.ensemble import RandomForestClassifier

# Train model
model = RandomForestClassifier(n_estimators=100)
model.fit(features, labels)

# Check accuracy
accuracy = model.score(test_features, test_labels)
print(f"Accuracy: {accuracy:.2%}")
\`\`\`

**5. Classification:**
\`\`\`python
# Apply model to entire image
classified = model.predict(all_pixels)
\`\`\`

**Health Applications:**
- **Vector Habitat Mapping**: Identify breeding sites
- **Land Use Change**: Monitor deforestation
- **Urban Growth**: Track settlement expansion
- **Agricultural Monitoring**: Food security assessment

**Model Selection:**
- **Random Forest**: Good general performance
- **SVM**: Good for small datasets
- **Neural Networks**: Best for complex patterns

**Validation:**
- Use 70% training, 30% testing split
- Cross-validation for robust results
- Field validation when possible`,
        related_topics: ["supervised learning", "remote sensing", "classification accuracy"]
      }
    }
  },

  // Lab 5: Advanced Health Analytics
  lab5: {
    title: "Advanced Analytics for Public Health",
    common_questions: {
      "kmeans clustering": {
        category: "Concept",
        response: `📊 **K-means Clustering for Health Data Analysis**

**What is K-means?**
Unsupervised algorithm that groups similar data points into clusters.

**Health Applications:**
- **Disease Hotspots**: Identify high-risk areas
- **Population Segmentation**: Group similar communities
- **Resource Allocation**: Optimize service distribution
- **Risk Stratification**: Classify areas by risk levels

**How K-means Works:**
1. Choose number of clusters (k)
2. Randomly place cluster centers
3. Assign points to nearest center
4. Move centers to point averages
5. Repeat until convergence

**Python Implementation:**
\`\`\`python
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt

# Prepare data
features = ['malaria_rate', 'population_density', 'healthcare_access']
X = health_data[features]

# Standardize data (important!)
from sklearn.preprocessing import StandardScaler
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Apply K-means
kmeans = KMeans(n_clusters=4, random_state=42)
clusters = kmeans.fit_predict(X_scaled)

# Add clusters to data
health_data['cluster'] = clusters
\`\`\`

**Choosing Optimal K:**
\`\`\`python
# Elbow method
inertias = []
k_range = range(1, 11)

for k in k_range:
    kmeans = KMeans(n_clusters=k)
    kmeans.fit(X_scaled)
    inertias.append(kmeans.inertia_)

# Plot elbow curve
plt.plot(k_range, inertias)
plt.xlabel('Number of Clusters')
plt.ylabel('Inertia')
plt.title('Elbow Method')
\`\`\`

**Interpreting Results:**
- **Cluster 0**: High risk, low access
- **Cluster 1**: Low risk, high access  
- **Cluster 2**: Medium risk, medium access
- **Cluster 3**: High risk, high access

**Visualization:**
\`\`\`python
# Scatter plot with clusters
plt.scatter(X_scaled[:, 0], X_scaled[:, 1], c=clusters, cmap='viridis')
plt.xlabel('Malaria Rate (standardized)')
plt.ylabel('Population Density (standardized)')
\`\`\`

**Important Notes:**
- Always standardize features
- Try different k values
- Consider domain knowledge for interpretation`,
        related_topics: ["unsupervised learning", "cluster analysis", "health surveillance"]
      },

      "disease risk modeling": {
        category: "Concept",
        response: `🦠 **Disease Risk Modeling Framework**

**Risk Model Components:**
1. **Environmental Factors**: Climate, vegetation, water
2. **Social Factors**: Population, poverty, education  
3. **Healthcare Factors**: Access, quality, utilization
4. **Behavioral Factors**: Prevention practices, mobility

**Malaria Risk Model Example:**

**Step 1: Data Collection**
\`\`\`python
risk_factors = {
    'temperature': temperature_data,
    'rainfall': rainfall_data, 
    'ndvi': vegetation_data,
    'population_density': census_data,
    'healthcare_distance': facility_distance,
    'poverty_rate': socioeconomic_data
}
\`\`\`

**Step 2: Risk Score Calculation**
\`\`\`python
# Weighted risk score
weights = {
    'temperature': 0.25,    # Higher temp = higher risk
    'rainfall': 0.20,       # Optimal range exists
    'ndvi': 0.15,          # Vegetation for breeding
    'population_density': 0.15,  # More people = more cases
    'healthcare_distance': 0.15,  # Access to treatment
    'poverty_rate': 0.10    # Socioeconomic factors
}

risk_score = sum(factor * weights[name] for name, factor in risk_factors.items())
\`\`\`

**Step 3: Risk Categories**
\`\`\`python
def categorize_risk(score):
    if score < 0.3:
        return 'Low Risk'
    elif score < 0.6:
        return 'Medium Risk'  
    elif score < 0.8:
        return 'High Risk'
    else:
        return 'Very High Risk'
\`\`\`

**Step 4: Model Validation**
- Compare with actual case data
- Calculate correlation coefficients
- Use ROC curves for binary classification
- Cross-validate with different time periods

**Advanced Modeling:**
\`\`\`python
# Logistic regression for probability
from sklearn.linear_model import LogisticRegression

model = LogisticRegression()
model.fit(X_features, y_outbreak_occurred)

# Predict outbreak probability
outbreak_prob = model.predict_proba(new_data)[:, 1]
\`\`\`

**Model Applications:**
- **Early Warning Systems**: Predict outbreaks
- **Resource Planning**: Allocate interventions
- **Policy Guidance**: Target high-risk areas
- **Impact Assessment**: Evaluate interventions

**Key Considerations:**
- Model is only as good as input data
- Regular validation and updating needed
- Consider temporal and spatial autocorrelation
- Combine with expert knowledge`,
        related_topics: ["epidemiology", "predictive modeling", "public health surveillance"]
      }
    }
  },

  // Cross-cutting troubleshooting
  troubleshooting: {
    "file_path_errors": {
      category: "Troubleshooting",
      response: `📁 **File Path Issues - Complete Solutions**

**Common Problems:**
1. Spaces in file/folder names
2. Special characters (é, ñ, etc.)
3. Very long file paths
4. Network drive issues
5. Permission problems

**Solutions:**

**1. Rename Files/Folders:**
- Remove spaces: "My Data.shp" → "My_Data.shp"
- Remove special characters
- Keep names short and descriptive

**2. Use Forward Slashes:**
- Even on Windows: C:/Users/Data/file.shp
- Not: C:\\Users\\Data\\file.shp

**3. Copy Files Locally:**
- Avoid network drives during processing
- Copy to: C:/Workshop_Data/
- Process locally, save results to network

**4. Check Permissions:**
- Right-click folder → Properties → Security
- Ensure full control for your user
- Run QGIS as administrator if needed

**5. Path Length Limit (Windows):**
- Keep total path under 260 characters
- Use shorter folder names
- Work closer to root directory

**Best Practices:**
- Create workshop folder: C:/GIS_Workshop/
- Use consistent naming: district_data_2023.shp
- No spaces, no special characters
- Test file access before workshop`,
      related_topics: ["data management", "file organization", "system administration"]
    },

    "memory_performance": {
      category: "Troubleshooting", 
      response: `⚡ **QGIS Performance and Memory Issues**

**Common Symptoms:**
- QGIS running slowly
- "Out of memory" errors
- Crashes during processing
- Long processing times

**Immediate Solutions:**

**1. Close Unnecessary Programs:**
- Close web browsers, Office apps
- Free up RAM for QGIS
- Check Task Manager (Ctrl+Shift+Esc)

**2. Reduce Layer Complexity:**
- Remove unnecessary layers
- Use "Set Layer Scale Visibility"
- Simplify geometries if needed

**3. Process Smaller Areas:**
- Clip data to study area first
- Use "Processing Extent" settings
- Process by administrative units

**4. Increase Virtual Memory:**
- Windows: System → Advanced → Performance Settings
- Increase page file size
- Restart computer

**QGIS Settings Optimization:**

**1. Processing Settings:**
- Processing → Options
- Increase "Maximum threads"
- Adjust "Memory usage"

**2. Rendering Settings:**
- View → Panels → Layer Styling
- Reduce "Render quality"
- Enable "Render layers in parallel"

**3. Cache Settings:**
- Settings → Options → Network
- Increase cache size
- Clear cache if issues persist

**Large Dataset Strategies:**
- Use GeoPackage instead of Shapefiles
- Create spatial indexes: Layer → Create Spatial Index
- Use PyQGIS for batch processing
- Consider PostGIS for very large datasets

**Hardware Recommendations:**
- Minimum 8GB RAM (16GB preferred)
- SSD storage for better I/O
- Dedicated graphics card helps
- Close other applications during processing`,
      related_topics: ["system optimization", "large datasets", "hardware requirements"]
    }
  },

  // Quick reference commands
  quick_commands: {
    "qgis_shortcuts": {
      "Ctrl+L": "Open Data Source Manager",
      "Ctrl+Shift+A": "Add Vector Layer",
      "Ctrl+Alt+A": "Add Raster Layer", 
      "F7": "Toggle Editing Mode",
      "Ctrl+Z": "Undo",
      "Ctrl+Y": "Redo",
      "Ctrl+Shift+P": "Print Layout",
      "Ctrl+M": "Measure Tool",
      "Space": "Pan Map"
    },
    
    "gee_snippets": {
      "basic_setup": "ee.Authenticate()\nee.Initialize()",
      "load_country": "var country = ee.FeatureCollection('USDOS/LSIB_SIMPLE/2017').filter(ee.Filter.eq('country_na', 'Uganda'));",
      "sentinel2": "var s2 = ee.ImageCollection('COPERNICUS/S2_SR').filterDate('2023-01-01', '2023-12-31').filterBounds(geometry);",
      "ndvi": "var ndvi = image.normalizedDifference(['B8', 'B4']).rename('NDVI');"
    }
  }
}; 