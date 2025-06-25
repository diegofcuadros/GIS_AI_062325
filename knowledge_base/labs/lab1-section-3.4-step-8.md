---
title: "Create Service Catchment Buffers"
category: lab-step
difficulty: intermediate
lab: lab1
topics: []
---

# Create Service Catchment Buffers

## Step 8: Create Service Catchment Buffers

### Instructions
1. Access Vector → Geoprocessing Tools → Buffer
2. Set Input layer to health facilities shapefile
3. Specify Distance as 10,000 meters (10 km)
4. Maintain 20 segments for smooth circular buffers
5. Save output as 'facility_buffers_10km.shp'

### 💡 Tips
- 10km represents 2-3 hours walking time in rural Uganda
- Buffer zones show reasonable access distances
- Higher segment count creates smoother circles

### 🔧 Troubleshooting
- **Issue**: If buffers appear too large/small, check distance units
- **Issue**: Ensure project CRS uses meters for accurate measurements
- **Issue**: Verify input layer contains point features



### Navigation
- **Previous**: Step 7
- **Next**: Step 9

### Need Help?
- Ask the AI assistant: "Explain step 8 in detail"
- Common question: "I'm stuck on create service catchment buffers"
- Troubleshooting: "Error with create service catchment buffers"
