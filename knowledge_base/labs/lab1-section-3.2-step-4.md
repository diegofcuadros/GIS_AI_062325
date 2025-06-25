---
title: "Convert Health Facility Coordinates to Spatial Data"
category: lab-step
difficulty: intermediate
lab: lab1
topics: ["Coordinate Reference Systems", "CSV Import", "Point Data"]
---

# Convert Health Facility Coordinates to Spatial Data

## Step 4: Convert Health Facility Coordinates to Spatial Data

### Instructions
1. Navigate to Layer → Add Layer → Add Delimited Text Layer
2. Select health_facilities_uganda.csv file
3. Set File format to 'CSV'
4. Set X field to 'Longitude' and Y field to 'Latitude'
5. Set Geometry CRS to EPSG:4326 (WGS 84)
6. Click 'Add' to create temporary layer
7. Export as permanent shapefile: right-click → Export → Save Features As
8. Save as 'health_facilities_uganda.shp' with CRS EPSG:32636

### 💡 Tips
- Always convert CSV coordinates to permanent spatial files
- Use consistent CRS throughout project (EPSG:32636)
- Remove temporary CSV layer after creating permanent shapefile

### 🔧 Troubleshooting
- **Issue**: If coordinates don't appear correctly, check X/Y field assignments
- **Issue**: Ensure latitude/longitude values are in decimal degrees
- **Issue**: If points appear in wrong location, verify CRS settings

### Related Concepts
- Coordinate Reference Systems
- CSV Import
- Point Data

### Navigation
- **Previous**: Step 3
- **Next**: Step 5

### Need Help?
- Ask the AI assistant: "Explain step 4 in detail"
- Common question: "I'm stuck on convert health facility coordinates to spatial data"
- Troubleshooting: "Error with convert health facility coordinates to spatial data"
