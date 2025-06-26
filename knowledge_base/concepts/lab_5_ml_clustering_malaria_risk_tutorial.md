---
title: "Lab 5: AI-Based Clustering for Malaria Risk Mapping - Complete Machine Learning Tutorial"
category: "tutorial"
difficulty: "advanced"
lab: "lab1,lab3,lab4,lab5"
topics: ["classification", "clustering", "crs", "gee", "gis", "google earth engine", "machine learning", "malaria", "mapping", "projection", "public health", "qgis", "raster", "remote sensing", "satellite", "spatial analysis", "symbology", "vector"]
source: "C:/Users/cuadrodo/Documents/GitHub/Wookshop_GIS_AI/GIS_AI_062325/documents/lab_5_ml_clustering_malaria_risk_tutorial.pdf"
type: "pdf"
pages: 2
processedAt: "2025-06-26T18:56:39.128Z"
---

# Lab 5: AI-Based Clustering for Malaria Risk Mapping - Complete Machine Learning Tutorial



Lab 5: AI-Based Clustering for Malaria
Risk Mapping
2-3 HoursAdvanced LevelIndividual/Group
Table of Contents

1. Machine Learning in Public Health

2. K-means Clustering Theory

3. Environmental Risk Modeling

4. Google Earth Engine ML

5. AI-Assisted Development

6. Step-by-Step Tutorial

7. Results & Validation

8. Professional Applications
Learning Objectives

Understand unsupervised machine learning concepts and
applications in epidemiology

Implement K-means clustering algorithms for
environmental risk assessment

Combine NDVI and rainfall data for malaria transmission
risk modeling

Use ChatGPT for AI-assisted machine learning code
development

Process large-scale satellite data using Google Earth
Engine clustering tools

Interpret and validate unsupervised classification results

Export and visualize machine learning results in QGIS

Apply clustering techniques to real-world public health
problems
1. Machine Learning in Public Health
Unsupervised Learning Concepts
Unsupervised Learning discovers hidden patterns in data
without labeled examples. Unlike supervised learning, we
don't have "correct answers" to train from.
Key Characteristics:
No predefined target variable or outcome
Explores data structure and relationships
Identifies natural groupings or clusters
Useful for exploratory data analysis
In public health, unsupervised learning helps identify:
Disease outbreak patterns
Risk factor combinations
Population health subgroups
Environmental exposure zones
Applications in Epidemiology

Spatial Clustering
Identify disease hotspots and
transmission zones

Temporal Patterns
Discover outbreak timing and
seasonality
Environmental Risk Assessment with ML
Machine learning enables us to combine multiple environmental variables to identify areas with similar conditions that
may support disease transmission. This approach moves beyond simple thematic mapping to reveal complex
environmental patterns.
Traditional Mapping
Single variable visualization
Multi-variable Analysis
Combines multiple risk factors
Pattern Discovery
Reveals hidden relationships
2. K-means Clustering Theory
Algorithm Fundamentals
K-means clustering partitions data into k clusters by
minimizing within-cluster sum of squared distances to cluster
centroids.
Objective Function:
J = Σᵢ₌₁ⁿ Σⱼ₌₁ᵏ wᵢⱼ ||xᵢ - μⱼ||²
Where wᵢⱼ = 1 if xᵢ belongs to cluster j, 0 otherwise
Algorithm Steps:
1. Initialize k cluster centroids randomly
2. Assign each point to nearest centroid
3. Update centroids to cluster means
4. Repeat steps 2-3 until convergence
Clustering Visualization
K-means Clustering Process
Advantages for Spatial Analysis
Simple and computationally efficient
Works well with spherical clusters
Scales to large datasets (like satellite imagery)
Produces interpretable results
Compatible with GIS software
⚠Limitations & Considerations
Requires pre-defining number of clusters (k)
Sensitive to initialization and outliers
Assumes clusters are spherical and similar size
May struggle with non-linear patterns
Results can vary between runs
Choosing Optimal Number of Clusters
Elbow Method
Plot within-cluster sum of squares vs. k
and look for "elbow" point
Silhouette Analysis
Measure how similar points are to their
own cluster vs. other clusters
Domain Knowledge
Use epidemiological understanding to
guide cluster number selection
3. Environmental Risk Modeling
NDVI as Predictive Variable
NDVI Values and Sensor Comparison
NDVI Formula:
NDVI = (NIR - RED) / (NIR + RED)
Where NIR = Near Infrared reflectance, RED = Red reflectance
Malaria Relevance:
High NDVI indicates dense vegetation
Provides mosquito resting sites
Creates humid microenvironments
Correlates with suitable breeding conditions
⛆CHIRPS Rainfall Data
CHIRPS Characteristics:
Daily precipitation estimates since 1981
0.05° spatial resolution (~5.5 km)
Combines satellite and station data
Optimized for drought monitoring
Mosquito Breeding Relevance:
Creates standing water bodies
Optimal breeding occurs at moderate rainfall
Too little: insufficient breeding sites
Too much: washes away larvae
Ecological Niche Modeling Concepts
Environmental Space
Multi-dimensional space defined by
environmental variables (NDVI, rainfall,
temperature, etc.)
Realized Niche
Actual environmental conditions where
species (mosquitoes) occur in nature
Fundamental Niche
Full range of environmental conditions
where species can potentially survive
Environmental Suitability Mapping Process
1
Data Collection
Gather environmental
variables (NDVI, rainfall)
2
Data Processing
Normalize and combine
variables
3
Clustering
Apply K-means to identify
similar areas
4
Risk Assessment
Interpret clusters as risk
zones
4. Google Earth Engine Machine Learning
GEE Clustering Implementation
GEE Clustering Workflow:
1. Load and process image collections
2. Create composite multi-band image
3. Generate training samples
4. Train clustering algorithm
5. Apply classifier to full image
6. Visualize and export results
// Basic GEE K-means structure
var clusterer = ee.Clusterer.wekaKMeans(numClusters
var trainedClusterer = clusterer.train(trainingSamp
var clusteredImage = inputImage.cluster(trainedClus
Data Preprocessing & Feature
Engineering
Key Preprocessing Steps:
Temporal Aggregation: Mean, median, or sum over
time periods
Spatial Resampling: Ensure consistent resolution
Cloud Masking: Remove cloudy pixels from optical
data
Normalization: Scale variables to similar ranges
Band Stacking: Combine variables into single image
// Preprocessing example
var ndvi = ndviCollection.filterDate(start, end)
    .select('NDVI').mean().multiply(0.0001);
var rainfall = rainfallCollection.filterDate(start,
    .sum();
// Stack bands and normalize
var input = ndvi.addBands(rainfall.rename('rainfall
    .unitScale(-1, 1); // Normalize to -1 to 1
Sampling Strategies:
Random sampling: Uniform distribution across study
area
Stratified sampling: Ensure representation of all
environments
Sample size: Balance between performance and
computation time
Parameter Tuning & Optimization
Number of Clusters (k)
Start with 3-5 clusters for malaria risk zones
Sample Size
Typically 1000-5000 points for country-scale analysis
Spatial Resolution
Balance detail with computational efficiency
Large-Scale Analysis Considerations
Memory Management
Use .clip() to reduce processing area
Parallel Processing
GEE automatically parallelizes operations
Export Limitations
Maximum 1e13 pixels per export task
Performance Monitoring
5. AI-Assisted Development Workflow
Using ChatGPT for ML Code
Generation
Effective Prompting Strategies:
Be specific about the task and context
Include data types and expected outputs
Mention relevant libraries (Google Earth Engine)
Request explanations with code
Ask for error handling and best practices
Example Prompt:
"Write a Google Earth Engine script to perform K-means
clustering on NDVI and rainfall data for Uganda. Use 3 clusters,
sample 2000 points, and visualize results with distinct colors.
Include comments explaining each step."
Iterative Development Process
Development Cycle:
1Initial prompt and code generation
2Test code in GEE environment
3Identify issues or improvements
4Refine prompt and regenerate
// Example refinement prompt:
"The previous code works but takes too long to proc
Can you optimize it by reducing the sample size to 
points and using a coarser spatial resolution of 1k
Common Refinement Requests:
Performance optimization
Error handling improvements
Additional visualization options
Export format modifications
Parameter adjustments
Debugging Machine Learning Algorithms
Common ML Debugging Issues:
Memory errors with large datasets
Incorrect data types or scaling
Empty or invalid training samples
Projection mismatches between datasets
Convergence failures in clustering
Debugging with ChatGPT:
Example: "I'm getting this error in GEE: 'Image.sample: Too
many pixels in the region.' How can I fix this while maintaining
good clustering results?"
Best Practices for AI-Assisted ML Development
Start Simple
Begin with basic clustering, then add
complexity incrementally
Validate Results
Always test AI-generated code with
small datasets first
Learn Actively
Ask ChatGPT to explain the reasoning
behind code suggestions
6. Step-by-Step Tutorial
1
Environment Setup and ChatGPT Preparation
Google Earth Engine Setup
1. Navigate to
https://code.earthengine.google.com
2. Sign in with your registered Google account
3. Create new script: Lab5_Malaria_Clustering.js
4. Verify access to the Code Editor interface
ChatGPT Preparation
1. Open https://chat.openai.com in new tab
2. Start fresh conversation session
3. Prepare context prompt about your project
4. Have both tabs ready for iterative development
2
Generate Initial Clustering Code with ChatGPT
Initial ChatGPT Prompt:
Write a Google Earth Engine JavaScript script that performs K-means clustering for malaria risk mapping in
Uganda. The script should:
1. Load MODIS NDVI data (MODIS/061/MOD13Q1) for 2022
2. Load CHIRPS rainfall data (UCSB-CHG/CHIRPS/DAILY) for 2022
3. Compute mean NDVI and total rainfall for the year
4. Clip data to Uganda boundaries (USDOS/LSIB_SIMPLE/2017)
5. Stack the bands and perform K-means clustering with 3 clusters
6. Sample 2000 training points
7. Visualize results with distinct colors
8. Add detailed comments explaining each step
Expected ChatGPT Response Structure:
// Load and process NDVI data
var ndvi = ee.ImageCollection('MODIS/061/MOD13Q1')
  .filterDate('2022-01-01', '2022-12-31')
  .select('NDVI')
  .mean()
  .multiply(0.0001); // Scale factor
// Load and process rainfall data  
var rainfall = ee.ImageCollection('UCSB-CHG/CHIRPS/DAILY')
  .filterDate('2022-01-01', '2022-12-31')
  .sum();
// Load Uganda boundary
var uganda = ee.FeatureCollection('USDOS/LSIB_SIMPLE/2017')
  .filter(ee.Filter.eq('country_na', 'Uganda'));
// Stack bands and clip to Uganda
var input = ndvi.addBands(rainfall.rename('rainfall'))
  .clip(uganda);
// Generate training samples
var training = input.sample({
  region: uganda,
  scale: 5000,
  numPixels: 2000,
  seed: 42
});
// Train K-means clusterer
var clusterer = ee.Clusterer.wekaKMeans(3)
  .train(training);
// Apply clustering
var result = input.cluster(clusterer);
// Visualize results
Map.centerObject(uganda, 6);
Map.addLayer(result.randomVisualizer(), {}, 'Malaria Risk Clusters');
Map.addLayer(uganda, {color: 'red'}, 'Uganda Boundary', false);
3
Test and Debug the Initial Code
Testing Process:
1. Copy code into GEE Code Editor
2. Click Run button
3. Monitor Console for errors
4. Check Map for visualization
5. Verify Tasks tab for exports
Common Issues & ChatGPT Fixes:
Memory Error: "Too many pixels"
Ask ChatGPT to reduce sample size or increase scale
Timeout Error: "User memory limit exceeded"
Request optimization for computational efficiency
4
Enhance Visualization and Add Export Functionality
Enhancement Prompt for ChatGPT:
"Enhance the clustering script with: 1) Custom color palette for 3 risk levels (low=green, medium=yellow, high=red), 2) Export
functionality to Google Drive as GeoTIFF, 3) Add legends and better visualization parameters, 4) Include cluster statistics in console
output"
// Enhanced visualization with custom colors
var palette = ['#00FF00', '#FFFF00', '#FF0000']; // Green, Yellow, Red
Map.addLayer(result, {
  min: 0, 
  max: 2, 
  palette: palette
}, 'Malaria Risk Zones');
// Add input data layers for comparison
Map.addLayer(ndvi, {min: 0, max: 0.8, palette: ['white', 'green']}, 'NDVI', false);
Map.addLayer(rainfall, {min: 0, max: 2000, palette: ['white', 'blue']}, 'Rainfall', false);
// Export to Google Drive
Export.image.toDrive({
  image: result,
  description: 'Uganda_Malaria_Risk_Clusters_2022',
  folder: 'GEE_Exports',
  fileNamePrefix: 'malaria_risk_clusters',
  region: uganda.geometry(),
  scale: 5000,
  crs: 'EPSG:4326',
  maxPixels: 1e13
});
// Print cluster statistics
print('Cluster Statistics:', training.aggregate_histogram('cluster'));
print('Number of training samples:', training.size());
5
Optimize Parameters and Validate Results
Parameter Optimization with ChatGPT:
Cluster Number: Test 3, 4, and 5 clusters
Ask ChatGPT to create comparison script
Sample Size: Balance accuracy vs. performance
Request optimization recommendations
Spatial Resolution: Test different scale values
Get advice on resolution trade-offs
Validation Approaches:
Visual Inspection: Check if clusters make ecological
sense
Cluster Statistics: Examine within-cluster variance
Domain Knowledge: Compare with known malaria
patterns
Sensitivity Analysis: Test parameter stability
6
Export and Post-Process in QGIS
GEE Export Process:
1. Run the enhanced script with export code
2. Check Tasks tab in GEE
3. Click Run on the export task
4. Monitor progress and download from Google Drive
5. Verify file integrity and projection
QGIS Visualization:
1. Open QGIS and create new project
2. Add raster layer (exported GeoTIFF)
3. Set symbology to Paletted/Unique values
4. Assign meaningful labels and colors
5. Create professional map layout
Tutorial Completion Checklist
Technical Achievements:
☐ Successfully ran K-means clustering in GEE
☐ Combined NDVI and rainfall data effectively
☐ Generated meaningful cluster visualizations
☐ Exported results for further analysis
Learning Outcomes:
☐ Understood unsupervised ML concepts
☐ Applied ChatGPT for code development
☐ Interpreted environmental clustering results
☐ Connected analysis to public health applications
7. Results Interpretation and Validation
Understanding Cluster
Characteristics
Cluster Interpretation Framework:
Cluster 0 (Green): Low NDVI, Low Rainfall - Minimal
Risk
Cluster 1 (Yellow): Moderate NDVI, Moderate Rainfall
- Medium Risk
Cluster 2 (Red): High NDVI, High Rainfall - High Risk
Statistical Interpretation:
Examine cluster centroids in feature space
Calculate within-cluster sum of squares
Assess cluster separation and compactness
Analyze cluster size distribution
Environmental Interpretation
Ecological Significance:
High Risk Areas:
Dense vegetation + abundant rainfall = optimal mosquito
habitat
Medium Risk Areas:
Seasonal suitability depending on rainfall patterns
Low Risk Areas:
Arid or sparse vegetation limiting mosquito survival
Geographic Context:
Compare with known malaria endemic regions
Consider altitude and climate variations
Account for land use and human settlements
Evaluate seasonal transmission patterns
Validation Approaches
Internal Validation
Silhouette analysis for cluster quality
Within-cluster sum of squares (WCSS)
Calinski-Harabasz index
External Validation
Compare with epidemiological data
Expert knowledge assessment
Historical outbreak location analysis
Cross-Validation
Temporal validation with different years
Spatial validation with different regions
Bootstrap sampling validation
Uncertainty Assessment &
Limitations
Data Limitations
Satellite data quality and cloud cover
Temporal resolution limitations
Spatial resolution constraints
Model Limitations
K-means assumes spherical clusters
Sensitive to initialization
May not capture complex patterns
Interpretation Caveats
Correlation does not imply causation
Other factors influence transmission
Human behavior and interventions matter
⚖Validation Checklist for Clustering Results
Statistical Validation:
☐ Optimal number of clusters determined
☐ Cluster quality metrics calculated
☐ Sensitivity analysis performed
☐ Statistical significance assessed
Ecological Validation:
☐ Results align with ecological theory
☐ Spatial patterns make geographic sense
☐ Seasonal variations considered
☐ Expert knowledge incorporated
Practical Validation:
☐ Compared with field data (if available)
☐ Results useful for decision-making
☐ Limitations clearly documented
☐ Future validation strategy defined
8. Professional Applications
Disease Surveillance & Early
Warning
Malaria Risk Mapping Application
Early Warning System Components:
Real-time Monitoring: Automated processing of
latest satellite data
Risk Alerts: Threshold-based warnings for high-risk
conditions
Seasonal Forecasting: Predict favorable
transmission periods
Resource Allocation: Target interventions to high-
risk clusters
Implementation Strategy:
1. Establish baseline risk maps using historical data
2. Develop automated GEE workflows for regular updates
3. Integrate with national surveillance systems
4. Train local health officials in interpretation
5. Validate with field observations and case data
Public Health Program Planning
Program Applications:

Bed Net Distribution: Prioritize high-risk clusters for
ITN campaigns

Indoor Spraying: Target IRS programs to medium-
high risk areas

Preventive Treatment: Plan IPT distribution in high-
transmission zones

Active Surveillance: Intensify case detection in high-
risk clusters
Budget Optimization:
Use cluster analysis to optimize intervention coverage vs. cost.
High-risk clusters receive intensive interventions, medium-risk
areas get targeted approaches, and low-risk zones focus on
surveillance and prevention.
Environmental
Monitoring
Climate Change Adaptation
Monitor shifting risk patterns due to
changing climate
Land Use Planning
Inform development projects about
disease risk implications
Vector Control
Target environmental management
strategies
Research
Applications
Academic Research
Environmental epidemiology and disease
ecology studies
Method Development
Improve clustering algorithms for health
applications
Multi-Disease Studies
Apply similar methods to other vector-
borne diseases
Policy Support
National Strategies
Inform national malaria control strategic
plans
International Aid
Guide donor funding and resource
allocation
Cross-Border Coordination
Regional approaches to transboundary
transmission
Implementation Roadmap
1
Pilot Phase
Test methodology in limited
geographic area with
validation data
2
Scale-Up
Expand to national level
with automated processing
workflows
3
Integration
Connect with existing
surveillance and health
information systems
4
Sustainability
Establish local capacity and
continuous improvement
processes
Career Development Pathways
Technical Skills Development:
Advanced machine learning techniques (Random Forest, SVM)
Deep learning applications in remote sensing
Time series analysis and forecasting
Bayesian spatial modeling approaches
Cloud computing and big data processing
Professional Opportunities:
Spatial epidemiologist at WHO, CDC, or national health agencies
GIS analyst for international development organizations
Research scientist in academic institutions
Data scientist for health technology companies
Consultant for environmental health assessments
⭐Congratulations!

Machine Learning Mastery
Applied unsupervised learning to real-
world health problems

Remote Sensing Integration
Combined satellite data for environmental
risk assessment

AI-Assisted Development
Leveraged ChatGPT for efficient code
development and learning
Advanced tutorial combining machine learning clustering techniques, Google Earth
Engine programming, and AI-assisted development for environmental health risk
assessment
Understanding the role of AI in disease surveillance and risk assessment
Mathematical foundations and algorithmic understanding
Combining vegetation and climate data for disease transmission risk
Cloud-based implementation of clustering algorithms
Leveraging ChatGPT for machine learning code development
Complete implementation guide with ChatGPT assistance
Understanding and validating unsupervised clustering outcomes
Real-world implementation in public health and research settings
You have successfully completed the AI-based clustering tutorial for malaria risk mapping

“ The future of public health lies at the intersection of artificial intelligence, remote sensing, and epidemiological
expertise. ”

## Document Information
- **Source**: PDF Document (2 pages)
- **Category**: tutorial
- **Difficulty**: advanced
- **Relevant Labs**: lab1,lab3,lab4,lab5
- **Topics**: classification, clustering, crs, gee, gis, google earth engine, machine learning, malaria, mapping, projection, public health, qgis, raster, remote sensing, satellite, spatial analysis, symbology, vector

## AI Assistant Usage
Ask the chatbot:
- "Explain lab 5: ai-based clustering for malaria risk mapping - complete machine learning tutorial"
- "How does this relate to [specific topic]?"
- "Give me examples from this document"
- "What are the key points about [topic] in this document?"

## Quick References
- classification
- clustering
- crs
- gee
- gis
- google earth engine
- machine learning
- malaria
- mapping
- projection
