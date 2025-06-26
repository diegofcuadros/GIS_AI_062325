---
title: "Lab 2: Health Facility Access Analysis - Complete QGIS Tutorial"
category: "tutorial"
difficulty: "advanced"
lab: "lab2"
topics: ["accessibility", "buffer", "coordinate system", "crs", "gis", "google earth engine", "malaria", "mapping", "public health", "python", "qgis", "remote sensing", "satellite", "shapefile", "spatial analysis", "symbology", "vector"]
source: "C:/Users/cuadrodo/Documents/GitHub/Wookshop_GIS_AI/GIS_AI_062325/documents/lab_2_health_facility_access_tutorial.pdf"
type: "pdf"
pages: 1
processedAt: "2025-06-26T19:29:07.960Z"
---

# Lab 2: Health Facility Access Analysis - Complete QGIS Tutorial



 Lab 2: Health Facility Access Analysis
Spatial Query and Buffer Analysis in QGIS
Complete Tutorial with Public Health Context
 This comprehensive tutorial covers spatial analysis techniques for evaluating healthcare accessibility, combining GIS technical skills with
public health applications.
Learning Objectives
By the end of this lab, you will be able to:
Understand the concept of spatial accessibility in healthcare
Convert CSV coordinate data to spatial point layers in QGIS
Create buffer zones around health facilities for proximity analysis
Perform spatial queries to identify underserved areas
Combine spatial and attribute queries for comprehensive analysis
Interpret results in the context of health equity and policy
Create professional maps for public health decision-making
Materials Needed
Software: QGIS 3.0 or higher
Data Files:
Uganda_districts.gpkg - District boundaries
malaria_prevalence_uganda.csv - Health indicator data
health_facilities_uganda.csv - Facility coordinates
Prerequisites: Completion of Lab 1 (recommended)
 1. Public Health Context: Healthcare Accessibility
1.1 Understanding Healthcare Accessibility
Key Concept: Spatial Accessibility
Spatial accessibility refers to the ease with which individuals can reach healthcare services from their location. It's a critical
component of healthcare equity and involves:
Physical distance to healthcare facilities
Transportation barriers and travel time
Geographic barriers like mountains, rivers, or roads
Service availability and capacity at facilities
Healthcare accessibility is particularly important in low- and middle-income countries like Uganda, where:
Rural populations may live far from health facilities
Transportation infrastructure is often limited
Geographic barriers can prevent timely access to care
Emergency conditions like malaria require prompt treatment
Figure 1: Rural-urban health disparities showing higher death rates in rural areas for many conditions, highlighting the importance of spatial
accessibility analysis.
1.2 Geographic Barriers to Healthcare
Understanding geographic barriers helps explain why spatial analysis is essential for health planning:
Barrier TypeDescriptionImpact on Access
DistancePhysical distance between home and facilityLonger travel times, higher costs
TopographyMountains, valleys, water bodiesIncreases travel time and difficulty
TransportationLimited roads, public transportReduces ability to reach facilities
Seasonal factorsWeather, road conditionsTemporary barriers during certain periods
⚠ Critical Consideration
For conditions like malaria, geographic barriers can be life-threatening. Delayed treatment significantly increases the risk of
severe complications and death, making spatial accessibility a matter of life and death.
 2. Uganda's Health System Structure
2.1 District-Level Healthcare Delivery
Uganda's health system is organized at multiple levels, with districts serving as key administrative units:
LevelFacility TypeServices ProvidedCatchment Population
DistrictDistrict HospitalSpecialized care, referrals500,000 - 1,000,000
Sub-districtHealth Centre IVGeneral medicine, surgery100,000 - 200,000
Sub-countyHealth Centre IIIOutpatient care, basic inpatient20,000 - 40,000
ParishHealth Centre IIBasic outpatient services5,000 - 10,000
VillageHealth Centre ICommunity health services1,000 - 2,000
 Why Districts Matter for Spatial Analysis
Districts are ideal units for spatial health analysis because they:
Represent administrative boundaries for health planning
Have defined populations and health service responsibilities
Allow for resource allocation and policy implementation
Enable comparison of health outcomes and service coverage
2.2 Malaria and Healthcare Access
Malaria remains a leading cause of morbidity and mortality in Uganda, making healthcare accessibility particularly critical for:
Early diagnosis: Rapid diagnostic tests and microscopy
Prompt treatment: Artemisinin-based combination therapy (ACT)
Severe case management: Inpatient care and monitoring
Prevention services: Insecticide-treated nets, indoor spraying
Figure 2: Example of spatial accessibility analysis showing healthcare facility coverage areas and population access patterns.
 3. Spatial Analysis Fundamentals
3.1 Buffer Analysis Concepts
 What is Buffer Analysis?
A buffer is a zone of specified distance around a geographic feature. In healthcare accessibility analysis, buffers represent:
Service catchment areas around health facilities
Reasonable travel distances for accessing care
Coverage zones for planning service delivery
Buffer analysis helps answer critical questions:
Which areas are within reasonable distance of health facilities?
How many people live outside service catchment areas?
Where should new facilities be located to improve coverage?
Which districts have the poorest spatial access to care?
3.2 Proximity Measures and Distance
Distance TypeDefinitionUse CaseLimitations
Euclidean DistanceStraight-line distanceQuick approximation, air transportIgnores roads, terrain
Manhattan
Distance
Distance along grid/roadsUrban areas with grid systemsLimited to regular patterns
Network Distance
Distance along actual
roads
Most realistic travel analysisRequires road network data
Travel TimeTime to reach destination
Patient experience, emergency
care
Depends on transport mode,
traffic
 Best Practice
For this lab, we use Euclidean distance (straight-line buffers) as a starting point. While this doesn't account for roads or
terrain, it provides a useful first approximation and is computationally simple. More advanced analyses would incorporate
road networks and travel time.
3.3 Spatial Relationships and Queries
Spatial queries help identify relationships between different geographic features:
Spatial RelationshipDescriptionHealthcare Application
IntersectsFeatures that overlap or touchDistricts served by facility buffers
ContainsFeatures completely inside othersFacilities within district boundaries
WithinFeatures completely contained by othersPopulation centers within service areas
DisjointFeatures that don't touch or overlapAreas with no nearby facilities
 4. Essential GIS Techniques
4.1 Working with Coordinate Data
 Understanding Coordinate Systems
Geographic coordinates (latitude/longitude) represent locations on Earth's surface:
Latitude: North-South position (-90° to +90°)
Longitude: East-West position (-180° to +180°)
WGS 84 (EPSG:4326): Global standard coordinate system
Uganda coordinates: Latitude ~4°N to -1°S, Longitude ~29°E to 35°E
Health facility data often comes as CSV files with latitude/longitude coordinates. Converting this to spatial data allows for
geographic analysis and visualization.
 5. Step-by-Step QGIS Tutorial
1 Load and Convert Health Facility Data
First, we'll load the health facility coordinates and convert them to a spatial point layer.
Step 1a: Add Delimited Text Layer
1. Go to Layer → Add Layer → Add Delimited Text Layer
2. Browse and select health_facilities_uganda.csv
3. Configure the import settings as shown below
Figure 3: Add Delimited Text Layer dialog showing coordinate field configuration.
⚙ Dialog Configuration
File format: CSV (comma separated values)
X field: Longitude
Y field: Latitude
Geometry CRS: EPSG:4326 - WGS 84
Sample data: Preview should show facility locations
Step 1b: Convert to Permanent Shapefile
1. Right-click the newly loaded layer in the Layers panel
2. Select Export → Save Features As...
3. Choose ESRI Shapefile format
4. Save as health_facilities_uganda.shp
5. Remove the temporary CSV layer
⚠ Troubleshooting: Points Not Appearing
If your points don't appear on the map:
Check that X field = Longitude, Y field = Latitude
Verify coordinates are in decimal degrees (not degrees/minutes/seconds)
Ensure CRS is set to EPSG:4326
Right-click layer → Zoom to Layer
2 Visualize Facility Distribution
Step 2: Customize Point Symbology
1. Right-click the health facilities layer → Properties
2. Go to the Symbology tab
3. Choose a distinctive symbol (cross, plus, or circle)
4. Set color to red or blue for visibility
5. Adjust size to 3-4 mm for clear visibility
6. Click OK to apply
 Visualization Tips
For effective visualization:
Use contrasting colors between facilities and district boundaries
Make points large enough to see but not overwhelming
Consider using medical symbols (+ or cross) for health facilities
Ensure good contrast against background maps
3 Create Buffer Zones Around Facilities
Now we'll create 10-kilometer buffer zones around each health facility to represent reasonable access distances.
Step 3: Buffer Analysis
1. Go to Vector → Geoprocessing Tools → Buffer
2. Configure buffer parameters (see dialog below)
3. Run the analysis
Figure 4: Buffer analysis tool dialog in QGIS.
⚙ Buffer Parameters
Input layer: Health facilities shapefile
Distance: 10,000 meters (10 km)
Segments: 20 (default - creates smooth circles)
End cap style: Round
Output: Save to file (e.g., facility_buffers_10km.shp)
Figure 5: Example of buffer zones around healthcare facilities showing coverage areas.
 Why 10 Kilometers?
The 10-kilometer buffer distance represents:
Reasonable walking distance: 2-3 hours on foot
Bicycle travel: 30-45 minutes
Motorcycle taxi: 15-20 minutes
WHO recommendations: Within 5-10 km for basic health services
4 Perform Spatial Query: Identify Underserved Districts
Next, we'll identify districts that do NOT intersect with any facility buffer zones, indicating areas with poor spatial access to
healthcare.
Step 4: Select by Location
1. Go to Vector → Research Tools → Select by Location
2. Configure spatial query parameters
3. Run the selection
Figure 6: Select by Location dialog for spatial queries in QGIS.
⚙ Spatial Query Configuration
Select features from: Uganda_districts (polygon layer)
Where the features: do not intersect
By comparing to the features from: facility_buffers_10km
Modify current selection: Creating new selection
 Understanding "Do Not Intersect"
The "do not intersect" relationship identifies districts that have NO overlap with any buffer zone, meaning they are completely
outside the 10km service areas of all health facilities. These represent the most underserved areas.
5 Filter for High Malaria Prevalence Areas
Now we'll combine our spatial selection with attribute data to identify districts with both high malaria burden AND poor facility
access.
Step 5a: Open Attribute Table
1. Right-click the districts layer → Open Attribute Table
2. Note that some districts are already selected (highlighted)
3. Click the Select by Expression button
Step 5b: Create Attribute Expression
1. In the expression builder, enter:
"Malaria_Prevalence_Percent" > 15
2. Set selection mode to Intersect current selection
3. Click Select Features
 Combining Selections
By using "Intersect current selection," we're finding districts that meet BOTH criteria:
Do NOT intersect with facility buffers (poor access)
AND have malaria prevalence > 15% (high disease burden)
These represent the highest-priority areas for health system strengthening.
6 Save and Export Results
Step 6: Export Selected Features
1. Right-click the districts layer → Export → Save Selected Features As...
2. Choose format: GeoPackage
3. File name: high_risk_underserved_districts.gpkg
4. Click OK to save
5. Add the new layer to your map for visualization
7 Create Professional Map Layout
Step 7: Design Map Layout
1. Go to Project → New Print Layout
2. Name: "Health Facility Access Analysis"
3. Add map frame and essential elements:
Title: "High Malaria Risk Districts Without Nearby Health Facilities"
Legend showing all layers
Scale bar and North arrow
Data source and date information
4. Export as PDF for sharing and presentation
 6. Data Interpretation and Analysis
6.1 Understanding Accessibility Gaps
The results of your spatial analysis reveal important patterns about healthcare accessibility:
Analysis ResultInterpretationPolicy Implications
Districts with no facility buffersAreas with poor spatial accessNeed new facilities or mobile services
High malaria + poor accessHighest priority areasUrgent intervention needed
Overlapping buffer zonesWell-served areasPotential for service optimization
Border districts without accessCross-border health challengesRegional cooperation needed
 Critical Insight: High-Risk Underserved Areas
Districts that appear in your final selection represent a "double burden":
High disease burden: Malaria prevalence > 15%
Poor access: No health facilities within 10km
Health inequity: Greatest need, least access
These areas should receive priority for health system investments.
6.2 Limitations and Considerations
⚠ Analysis Limitations
Remember that this analysis has several limitations:
Straight-line distance: Doesn't account for roads, terrain
Facility capacity: Doesn't consider size or service availability
Population distribution: Rural areas may have lower density
Seasonal factors: Access may vary by weather, road conditions
Transportation: Assumes universal access to transport
 7. Professional Applications
7.1 Health Program Planning
Spatial accessibility analysis supports evidence-based decision making:
Application AreaHow Analysis HelpsExample Decision
Facility PlanningIdentify underserved areasWhere to build new health centers
Resource AllocationPrioritize high-need areasBudget distribution across districts
Service DeliveryDesign mobile health programsRoutes for outreach services
Emergency ResponsePlan rapid response capacityPre-position supplies and staff
7.2 Health Equity Assessment
This type of analysis is fundamental to assessing and addressing health inequities:
Identify disparities: Which populations have the least access?
Measure equity: Quantify gaps in service coverage
Monitor progress: Track improvements over time
Target interventions: Focus resources where most needed
 Career Applications
These spatial analysis skills are valuable for careers in:
Public health program management
Health policy analysis and development
International development and NGO work
Health systems research
Epidemiology and disease surveillance
Emergency response and humanitarian aid
 8. Extensions and Advanced Techniques
8.1 Network Analysis vs Buffer Analysis
MethodAdvantagesDisadvantagesWhen to Use
Buffer Analysis
Simple, fast, works without road
data
Unrealistic distance
assumptions
Initial assessment, data-poor
settings
Network
Analysis
Realistic travel routes and timesRequires road network dataDetailed planning, urban areas
8.2 Additional Analysis Ideas
 Try These Extensions
1. Different buffer distances: Compare 5km, 10km, and 15km buffers
2. Population-weighted analysis: Include population density data
3. Facility type analysis: Separate hospitals from health centers
4. Multi-disease analysis: Include HIV, TB, or maternal health data
5. Temporal analysis: Compare access over multiple years
6. Cost-distance analysis: Account for terrain and travel costs
8.3 Integration with Other Tools
QGIS analysis can be enhanced by integrating with other tools:
R Statistical Software: Advanced statistical analysis of spatial patterns
Python: Automated processing of large datasets
Google Earth Engine: Satellite imagery and environmental data
OpenStreetMap: Detailed road network data
Web mapping: Interactive online maps for stakeholder engagement
 Conclusion and Key Takeaways
What You've Accomplished
Through this lab, you have successfully:
Converted coordinate data into spatial point features
Created buffer zones to represent service catchment areas
Performed spatial queries to identify underserved areas
Combined spatial and attribute queries for complex analysis
Interpreted results in public health context
Created professional maps for decision-making
Key Concepts Mastered
Spatial accessibility: Geographic barriers to healthcare access
Buffer analysis: Proximity-based service area modeling
Spatial queries: Identifying relationships between geographic features
Health equity analysis: Combining health outcomes with access measures
Evidence-based planning: Using spatial data for health policy decisions
Next Steps in Your GIS Journey
Continue building your spatial analysis skills by exploring:
Network analysis for realistic travel time calculations
Population-weighted accessibility measures
Time-series analysis of changing access patterns
Integration with remote sensing and environmental data
Advanced statistical methods for spatial health data
Web-based mapping and interactive visualization
Lab 2: Health Facility Access Analysis - Complete QGIS Tutorial
This tutorial provides foundational skills in spatial health analysis using QGIS. Continue practicing with different datasets and explore advanced
techniques to become proficient in GIS for public health applications.
 Spatial Analysis Public Health Evidence-Based Planning

## Document Information
- **Source**: PDF Document (1 pages)
- **Category**: tutorial
- **Difficulty**: advanced
- **Relevant Labs**: lab2
- **Topics**: accessibility, buffer, coordinate system, crs, gis, google earth engine, malaria, mapping, public health, python, qgis, remote sensing, satellite, shapefile, spatial analysis, symbology, vector

## AI Assistant Usage
Ask the chatbot:
- "Explain lab 2: health facility access analysis - complete qgis tutorial"
- "How does this relate to [specific topic]?"
- "Give me examples from this document"
- "What are the key points about [topic] in this document?"

## Quick References
- accessibility
- buffer
- coordinate system
- crs
- gis
- google earth engine
- malaria
- mapping
- public health
- python
