---
title: "Lab 3: Environmental Risk Mapping for Malaria - Complete Google Earth Engine Tutorial"
category: "tutorial"
difficulty: "advanced"
lab: "lab3"
topics: ["classification", "gee", "gis", "google earth engine", "machine learning", "malaria", "mapping", "public health", "qgis", "raster", "remote sensing", "satellite", "shapefile", "spatial analysis", "symbology", "vector"]
source: "C:/Users/cuadrodo/Documents/GitHub/Wookshop_GIS_AI/GIS_AI_062325/documents/lab_3_environmental_risk_mapping_tutorial.pdf"
type: "pdf"
pages: 1
processedAt: "2025-06-26T19:29:08.036Z"
---

# Lab 3: Environmental Risk Mapping for Malaria - Complete Google Earth Engine Tutorial



 Lab 3: Environmental Risk Mapping
for Malaria
Complete Google Earth Engine Tutorial
Table of Contents
1. Learning Objectives & Introduction
2. Environmental Epidemiology Background
3. Remote Sensing Fundamentals
4. Google Earth Engine Platform
5. MODIS and CHIRPS Data
6. Step-by-Step Tutorial
7. Environmental Risk Assessment
8. Professional Applications
Learning Objectives & Introduction
By the end of this lab, you will be able to:
✓Understand how environmental factors influence malaria transmission
✓Access and process satellite data using Google Earth Engine
✓Analyze NDVI and rainfall patterns for disease risk assessment
✓Export environmental data for integration with health datasets
✓Create environmental risk maps for public health applications
Why Environmental Mapping Matters
Malaria transmission is heavily influenced by environmental conditions that affect mosquito vector
ecology. By mapping these environmental factors using satellite data, we can:
Predict Risk Areas
Identify regions with optimal conditions for mosquito
breeding and survival
Monitor Changes
Track seasonal and long-term environmental
changes affecting transmission
Target Interventions
Guide resource allocation and control measures to
high-risk areas
Early Warning
Develop systems to predict malaria outbreaks based
on environmental conditions
Environmental Epidemiology Background
Environmental Determinants of Malaria Transmission
Key factors influencing malaria transmission
Key environmental factors influencing malaria transmission (Source: ResearchGate)
Vegetation Factors
Humidity: Dense vegetation maintains high
humidity favorable for mosquito survival
Temperature: Vegetation provides optimal
temperature zones for parasite development
Resting Sites: Vegetation offers protected areas
for mosquito resting
Breeding Habitat: Plant debris creates
microhabitats for larval development
⛆Rainfall Factors
Breeding Sites: Rainfall creates temporary
water bodies for mosquito breeding
Seasonal Patterns: Transmission peaks typically
follow rainy seasons
Water Quality: Fresh rainwater provides optimal
breeding conditions
Duration: Extended wet periods increase vector
population size
Mosquito Vector Ecology

Temperature
20-30°C optimal for development

Humidity
>60% for adult survival

Water Bodies
Standing water for breeding
⚠Climate Change Implications
Changing rainfall patterns and rising temperatures are altering malaria transmission zones globally. Remote
sensing allows us to monitor these changes and adapt control strategies accordingly.
Remote Sensing Fundamentals
Introduction to Satellite Data
Remote sensing uses electromagnetic radiation reflected or emitted from Earth's surface to gather
information about environmental conditions. For malaria risk assessment, we focus on:
Vegetation Indices (NDVI)
NDVI values comparison
NDVI measures vegetation health and density
using near-infrared and red light reflectance.
NDVI = (NIR - Red) / (NIR + Red)
⛆Precipitation Data
CHIRPS combines satellite infrared observations
with ground station data to estimate rainfall at
high resolution.
NDVI Interpretation Guide
-1 to 0
Water, Snow,
Clouds
0 to 0.2
Bare Soil, Rock
0.2 to 0.4
Sparse
Vegetation
0.4 to 0.7
Moderate
Vegetation
0.7 to 1
Dense Vegetation
Applications in Disease Mapping
Remote sensing applications in disease mapping (Source: IntechOpen)
☁Google Earth Engine Platform
What is Google Earth Engine?
Google Earth Engine (GEE) is a cloud-based platform for planetary-scale geospatial analysis. It
provides:
Massive Data Archive
Petabytes of satellite imagery and geospatial
datasets
Cloud Computing
No need to download data or have powerful local
computers
JavaScript API
User-friendly programming interface for analysis
Interactive Interface
Web-based code editor with instant visualization
Code Editor Interface
Google Earth Engine Code Editor interface components
Left Panel - Scripts & Assets
• Script repository and management
• Asset imports and uploads
• Documentation and examples
Right Panel - Inspector & Console
• Interactive map inspection
• Console output and debugging
• Task management for exports
JavaScript Basics for GEE
Key Programming Concepts
Variables: Store data and objects
var myVariable = value;
Functions: Perform operations on data
.filterDate(), .mean(), .sum()
Image Collections: Time series of satellite images
ee.ImageCollection('dataset')
Feature Collections: Vector datasets like boundaries
ee.FeatureCollection('shapefile')
MODIS and CHIRPS Data
MODIS NDVI Data
MOD13Q1 Product Specifications:
Spatial Resolution:250 meters
Temporal Resolution:16 days
Coverage:Global
Data Range:2000 - Present
Applications for Malaria:
• Identify vegetation density patterns
• Monitor seasonal vegetation changes
• Assess habitat suitability for vectors
• Track land use changes over time
⛆CHIRPS Precipitation Data
CHIRPS Dataset Specifications:
Spatial Resolution:5 kilometers
Temporal Resolution:Daily
Coverage:50°S-50°N, global
Data Range:1981 - Near real-time
Applications for Malaria:
• Map breeding site potential
• Track seasonal rainfall patterns
• Identify outbreak risk periods
• Monitor drought/flood impacts
Data Quality Considerations
MODIS NDVI Limitations:
• Cloud contamination in tropical regions
• Mixed pixel effects in heterogeneous areas
• Atmospheric interference
• Temporal compositing artifacts
CHIRPS Limitations:
• Lower accuracy for light precipitation
• Limited ground station validation in remote areas
• Satellite sensor calibration changes
• Spatial interpolation uncertainties
Step-by-Step Tutorial
Prerequisites
• Google Earth Engine account (sign up at earthengine.google.com)
• Modern web browser (Chrome, Firefox, or Safari recommended)
• Stable internet connection
• Basic familiarity with programming concepts (helpful but not required)
Step 1: Access Google Earth Engine
1.1 Navigate to https://code.earthengine.google.com
1.2 Sign in with your Google account that has Earth
Engine access
1.3 You'll see the Code Editor interface with four main
panels
1.4 Take a moment to familiarize yourself with the layout
Google Earth Engine Code Editor interface
Step 2: Create a New Script
2.1 In the Scripts panel (left side), click the "New" button
2.2 Name your script: "Malaria_Environment_Uganda"
2.3 Click "OK" to create a blank script
2.4 The script will open in the center code editor panel
Tip: Save your script frequently using Ctrl+S (Windows) or Cmd+S (Mac)
Step 3: Load and Process NDVI Data
Copy and paste the following code block into your script:
// Load MODIS NDVI Image Collection for 2022 var ndvi =
ee.ImageCollection('MODIS/006/MOD13Q1') .filterDate('2022-01-01', '2022-12-31')
.select('NDVI') .mean(); print('NDVI Image:', ndvi);
Code Explanation:
ee.ImageCollection(): Loads the MODIS vegetation index dataset
.filterDate(): Filters images to the year 2022
.select('NDVI'): Selects only the NDVI band from the dataset
.mean(): Computes the average NDVI value across all 2022 images
print(): Displays information about the image in the Console
Step 4: Load and Process Rainfall Data
Add this code block below your NDVI code:
// Load CHIRPS Daily Rainfall and compute total for 2022 var rainfall =
ee.ImageCollection('UCSB-CHG/CHIRPS/DAILY') .filterDate('2022-01-01', '2022-12-31')
.sum(); print('Rainfall Image:', rainfall);
Code Explanation:
UCSB-CHG/CHIRPS/DAILY: Daily precipitation dataset from Climate Hazards Group
.sum(): Adds up all daily rainfall values to get total annual rainfall
This creates a single image showing total 2022 rainfall for each pixel
Step 5: Define the Uganda Boundary
Add this code to clip your data to Uganda:
// Load Uganda Boundary var uganda = ee.FeatureCollection('USDOS/LSIB_SIMPLE/2017')
.filter(ee.Filter.eq('country_na', 'Uganda')); print('Uganda Boundary:', uganda);
// Center the map on Uganda Map.centerObject(uganda, 6);
Code Explanation:
USDOS/LSIB_SIMPLE/2017: US State Department world boundaries dataset
.filter(): Selects only Uganda from the global boundaries
Map.centerObject(): Centers and zooms the map to Uganda at zoom level 6
Step 6: Visualize NDVI and Rainfall
Add visualization parameters to display your data:
// NDVI Visualization Map.addLayer(ndvi.clip(uganda), {min: 0, max: 9000, palette:
['white', 'lightgreen', 'darkgreen']}, 'Mean NDVI 2022'); // Rainfall Visualization
Map.addLayer(rainfall.clip(uganda), {min: 0, max: 2000, palette: ['white',
'lightblue', 'darkblue']}, 'Total Rainfall 2022'); // Add Uganda boundary outline
Map.addLayer(uganda, {color: 'red'}, 'Uganda Boundary');
Visualization Parameters:
.clip(): Clips the global data to Uganda boundaries
min/max: Sets the data range for color mapping
palette: Defines colors from low to high values
Layer name: Appears in the Layers panel for easy toggling
Click "Run" button to execute your code and see the results on the map!
Step 7: Export Data to Google Drive
Add export functions to download your processed data:
// Export NDVI to Google Drive Export.image.toDrive({ image: ndvi.clip(uganda),
description: 'Uganda_NDVI_2022', scale: 250, region: uganda.geometry(), maxPixels:
1e9 }); // Export Rainfall to Google Drive Export.image.toDrive({ image:
rainfall.clip(uganda), description: 'Uganda_Rainfall_2022', scale: 5000, region:
uganda.geometry(), maxPixels: 1e9 });
Export Process:
1. Run the script to queue the export tasks
2. Go to the "Tasks" tab in the right panel
3. Click "Run" for each export task
4. Files will be saved to your Google Drive in GeoTIFF format
5. Download may take 5-15 minutes depending on data size
Complete Script
Here's the complete code for copy-paste convenience:
// Lab 3: Environmental Risk Mapping for Malaria in Uganda // Load MODIS NDVI Image Collection for 2022 var
ndvi = ee.ImageCollection('MODIS/006/MOD13Q1') .filterDate('2022-01-01', '2022-12-31') .select('NDVI') .mean();
// Load CHIRPS Daily Rainfall and compute total for 2022 var rainfall = ee.ImageCollection('UCSB-
CHG/CHIRPS/DAILY') .filterDate('2022-01-01', '2022-12-31') .sum(); // Load Uganda Boundary var uganda =
ee.FeatureCollection('USDOS/LSIB_SIMPLE/2017') .filter(ee.Filter.eq('country_na', 'Uganda')); // Center the map
on Uganda Map.centerObject(uganda, 6); // Visualize NDVI and Rainfall Map.addLayer(ndvi.clip(uganda), {min: 0,
max: 9000, palette: ['white', 'lightgreen', 'darkgreen']}, 'Mean NDVI 2022');
Map.addLayer(rainfall.clip(uganda), {min: 0, max: 2000, palette: ['white', 'lightblue', 'darkblue']}, 'Total
Rainfall 2022'); Map.addLayer(uganda, {color: 'red'}, 'Uganda Boundary'); // Export data to Google Drive
Export.image.toDrive({ image: ndvi.clip(uganda), description: 'Uganda_NDVI_2022', scale: 250, region:
uganda.geometry(), maxPixels: 1e9 }); Export.image.toDrive({ image: rainfall.clip(uganda), description:
'Uganda_Rainfall_2022', scale: 5000, region: uganda.geometry(), maxPixels: 1e9 }); print('Script completed
successfully!');
Environmental Risk Assessment
Interpreting NDVI and Rainfall Patterns
NDVI Risk Interpretation
High Risk (NDVI > 0.6): Dense vegetation,
high humidity, optimal mosquito habitat
Moderate Risk (NDVI 0.3-0.6): Moderate
vegetation, suitable for some vector species
Low Risk (NDVI < 0.3): Sparse vegetation,
less suitable for mosquito survival
⛆Rainfall Risk Interpretation
High Risk (>1200mm/year): Abundant
breeding sites, extended transmission
seasons
Moderate Risk (600-1200mm/year):
Seasonal breeding sites, intermittent
transmission
Low Risk (<600mm/year): Limited water
sources, unsuitable for most vectors
Malaria Transmission Risk Zones
Combined Environmental Risk Matrix
NDVI / Rainfall
Low Rainfall
(<600mm)
Moderate Rainfall
(600-1200mm)
High Rainfall
(>1200mm)
High NDVI (>0.6)Moderate RiskHigh RiskVery High Risk
Moderate NDVI (0.3-0.6)Low RiskModerate RiskHigh Risk
Low NDVI (<0.3)Very Low RiskLow RiskModerate Risk
Seasonal Risk Variation
⛆
Wet Season
March-May, Oct-Nov
Peak transmission risk due to
abundant breeding sites
☀
Dry Season
Dec-Feb, Jun-Aug
Reduced transmission but persistent
risk in suitable areas

Transition
Sep, May
Variable risk depending on rainfall
onset/cessation
⚠Important Considerations
• Environmental suitability doesn't guarantee malaria presence - human factors matter too
• Vector species vary in their environmental preferences
• Climate change is shifting traditional risk zones
• Control interventions can reduce transmission despite suitable environment
Professional Applications
Disease Surveillance Applications
Surveillance Enhancement
• Risk Stratification: Prioritize surveillance
efforts in high-risk environmental zones
• Seasonal Alerts: Intensify monitoring during
peak transmission periods
• Resource Allocation: Deploy limited
surveillance resources efficiently
• Early Detection: Identify potential outbreak
areas before cases spike
Predictive Modeling
• Risk Forecasting: Predict malaria risk based
on environmental conditions
• Outbreak Prediction: Use environmental
triggers to forecast epidemics
• Intervention Timing: Optimize timing of
control measures
• Climate Adaptation: Plan for changing
transmission patterns
Early Warning Systems
Satellite observations for malaria early warning
Satellite-based early warning system framework for malaria (Source: Cell Press)
⚠Early Warning System Components
Environmental Monitoring
• Real-time rainfall tracking
• Vegetation condition monitoring
• Temperature and humidity data
• Seasonal pattern analysis
Risk Assessment
• Environmental risk scoring
• Threshold-based alerts
• Multi-factor risk indices
• Spatial risk mapping
Response Activation
• Automated alert generation
• Stakeholder notifications
• Response protocol activation
• Resource mobilization
Climate Change Impact Assessment
Climate Impacts on Transmission
• Temperature Changes: Altered vector
development rates and survival
• Precipitation Shifts: Changed breeding site
availability
• Extreme Events: Droughts and floods affecting
transmission
• Seasonal Shifts: Extended or altered
transmission seasons
Adaptation Strategies
• Risk Zone Mapping: Identify new areas at risk
• Intervention Planning: Adapt control
strategies to new patterns
• Health System Prep: Strengthen capacity in
emerging risk areas
• Community Education: Raise awareness in
newly affected regions
Public Health Planning Applications
Program Implementation
Vector Control Programs
• Target high-risk environmental zones
• Time interventions with environmental conditions
• Optimize resource allocation geographically
• Monitor intervention effectiveness
Health Service Planning
• Plan facility capacity based on risk zones
• Stock medical supplies seasonally
• Train healthcare workers in high-risk areas
• Develop referral systems for remote areas
Career Applications
Skills from this lab are valuable for careers in:
• Epidemiology and Disease Surveillance
• Public Health Emergency Response
• Environmental Health Assessment
• Climate Change and Health Adaptation
• Geospatial Health Analysis
• Remote Sensing Applications
• Global Health Program Management
• Health Research and Academia
Extensions and Next Steps
Optional Exercises
Temporal Analysis
• Compare NDVI patterns across different years
• Analyze seasonal rainfall variations
• Create time-series animations
• Identify long-term environmental trends
Try this:
filterDate('2021-01-01', '2021-12-31')
Advanced Integration
• Combine with population density data
• Add land use classification
• Include elevation and slope data
• Create composite risk indices
Explore:
ee.Image("WORLDPOP/GP/100m/pop")
Advanced Google Earth Engine Techniques
Statistical Analysis Tools
Chart Generation
• Time-series plots
• Histogram analysis
• Scatter plot correlation
• Regional comparisons
Zonal Statistics
• District-level summaries
• Mean values by region
• Area calculations
• Percentile analysis
Classification
• Risk category mapping
• Threshold-based classes
• Multi-criteria decision
• Machine learning approaches
Integration with QGIS
Working with Exported Data
1. Download GeoTIFF files from Google Drive
2. Load into QGIS as raster layers
3. Apply appropriate symbology and classification
4. Combine with district boundaries and health data from previous labs
5. Create comprehensive risk assessment maps
6. Export publication-ready maps and analysis results
Using AI to Enhance Your Work
ChatGPT and other AI tools can help with:
• Writing and debugging Google Earth Engine code
• Explaining error messages and troubleshooting
• Suggesting visualization parameters
• Creating documentation and reports
• Interpreting analysis results
Example prompt: "Help me modify this GEE code to calculate NDVI for the rainy season months (March-May) only"
Troubleshooting Guide
Common Code Errors
Error: "Collection.filter: No band named..."
Solution: Check band names using .bandNames()
or verify dataset documentation
Error: "Exported 0 pixels"
Solution: Ensure region geometry is valid and
overlaps with data
Error: "User memory limit exceeded"
Solution: Reduce spatial resolution or region size
Performance Issues
• Increase scale parameter for faster processing
• Use smaller date ranges for initial testing
• Apply .limit() to image collections during
development
• Cache intermediate results with .getInfo()
Visualization Problems
Issue: Map appears blank or wrong colors
Fix: Adjust min/max values in visualization
parameters
Issue: Export files are too large
Fix: Increase scale parameter or reduce region size
Issue: Layers not loading
Fix: Check Console for error messages and data
availability
Getting Help
• Google Earth Engine Developers Guide
• GEE Help Forum and Stack Overflow
• Dataset documentation pages
• YouTube tutorials and courses
• AI assistants like ChatGPT for code help
Conclusion and Key Takeaways
What You've Accomplished
• Accessed and processed satellite data using
Google Earth Engine
• Analyzed environmental factors relevant to
malaria transmission
• Created meaningful visualizations of NDVI and
rainfall patterns
• Exported geospatial data for further analysis
• Understood the connection between
environment and disease risk
Key Concepts Learned
• Remote sensing applications in public health
• Environmental determinants of vector-borne
diseases
• Cloud-based geospatial analysis platforms
• Integration of multiple environmental datasets
• Spatial risk assessment methodologies
Congratulations!
You have successfully completed Lab 3: Environmental Risk Mapping for Malaria using Google
Earth Engine.
You now have the skills to analyze environmental factors influencing disease transmission using cutting-edge
satellite data and cloud computing platforms.
This tutorial was created for educational purposes to demonstrate the application of remote sensing and GIS
technologies in public health research and practice.
For more advanced applications and continued learning, explore the Google Earth Engine documentation and
consider formal training in remote sensing and spatial epidemiology.
Using Remote Sensing to Analyze Environmental Factors Influencing Malaria Transmission in
Uganda

## Document Information
- **Source**: PDF Document (1 pages)
- **Category**: tutorial
- **Difficulty**: advanced
- **Relevant Labs**: lab3
- **Topics**: classification, gee, gis, google earth engine, machine learning, malaria, mapping, public health, qgis, raster, remote sensing, satellite, shapefile, spatial analysis, symbology, vector

## AI Assistant Usage
Ask the chatbot:
- "Explain lab 3: environmental risk mapping for malaria - complete google earth engine tutorial"
- "How does this relate to [specific topic]?"
- "Give me examples from this document"
- "What are the key points about [topic] in this document?"

## Quick References
- classification
- gee
- gis
- google earth engine
- machine learning
- malaria
- mapping
- public health
- qgis
- raster
