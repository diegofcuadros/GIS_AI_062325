---
title: "Day 2: GEE & AI Workshop - Instructor Guide with Code Snippets"
category: "tutorial"
difficulty: "beginner"
lab: "lab1"
topics: ["buffer", "clustering", "crs", "gee", "gis", "google earth engine", "malaria", "mapping", "projection", "qgis", "raster"]
source: "C:/Users/cuadrodo/Documents/GitHub/Wookshop_GIS_AI/GIS_AI_062325/documents/Day 2_ GEE & AI Workshop - Instructor Guide with Code Snippets.pdf"
type: "pdf"
pages: 28
processedAt: "2025-06-26T19:29:06.090Z"
---

# Day 2: GEE & AI Workshop - Instructor Guide with Code Snippets



Day 2: Earth Observation and Generative AI – Complete
Instructor Guide
Overview & Timing Adjustments
09:00–09:30: Recap + Earth Observation for Health
09:30–10:30: Lab 3 - NDVI & Rainfall Visualization
10:30–11:00: Break
11:00–12:00: Lab 4 - ChatGPT for GEE (15 min lecture + 45 min hands-on)
12:00–13:00: Lunch
13:00–14:30: Lab 5 - K-means Clustering (includes 10 min coffee stretch)
14:30–15:30: Export and Visualize in QGIS
15:30–16:00: Reflection and Discussion
Lab 3: Visualizing NDVI and Rainfall in GEE (09:30-10:30)
Pre-Lab Setup
Exercise 1: Basic NDVI Visualization (15 min)
Step 1: Load and filter MODIS NDVI
javascript
// Instructor should have this ready to share
// Instructor should have this ready to share
// Base setup code for all participants
// Base setup code for all participants
var
var
 uganda 
 uganda 
=
=
 ee
 ee
.
.
FeatureCollection
FeatureCollection
(
(
'UCSB-CHG/GADM/gadm36_3'
'UCSB-CHG/GADM/gadm36_3'
)
)
  
  
.
.
filter
filter
(
(
ee
ee
.
.
Filter
Filter
.
.
eq
eq
(
(
'NAME_0'
'NAME_0'
,
,
 
 
'Uganda'
'Uganda'
)
)
)
)
;
;
var
var
 ugandaBounds 
 ugandaBounds 
=
=
 uganda
 uganda
.
.
geometry
geometry
(
(
)
)
.
.
bounds
bounds
(
(
)
)
;
;
Map
Map
.
.
centerObject
centerObject
(
(
uganda
uganda
,
,
 
 
7
7
)
)
;
;

Step 2: Apply preset palettes (Enhancement)
javascript
// Load MODIS NDVI data
// Load MODIS NDVI data
var
var
 modis 
 modis 
=
=
 ee
 ee
.
.
ImageCollection
ImageCollection
(
(
'MODIS/006/MOD13Q1'
'MODIS/006/MOD13Q1'
)
)
  
  
.
.
filterDate
filterDate
(
(
'2024-01-01'
'2024-01-01'
,
,
 
 
'2024-12-31'
'2024-12-31'
)
)
  
  
.
.
filterBounds
filterBounds
(
(
uganda
uganda
)
)
  
  
.
.
select
select
(
(
'NDVI'
'NDVI'
)
)
;
;
// Scale NDVI values (MODIS uses scale factor of 0.0001)
// Scale NDVI values (MODIS uses scale factor of 0.0001)
var
var
 ndviScaled 
 ndviScaled 
=
=
 modis
 modis
.
.
map
map
(
(
function
function
(
(
img
img
)
)
 
 
{
{
  
  
return
return
 img
 img
.
.
multiply
multiply
(
(
0.0001
0.0001
)
)
    
    
.
.
copyProperties
copyProperties
(
(
img
img
,
,
 
 
[
[
'system:time_start'
'system:time_start'
]
]
)
)
;
;
}
}
)
)
;
;
// Get median NDVI for the year
// Get median NDVI for the year
var
var
 ndviMedian 
 ndviMedian 
=
=
 ndviScaled
 ndviScaled
.
.
median
median
(
(
)
)
.
.
clip
clip
(
(
uganda
uganda
)
)
;
;

Exercise 2: Rainfall Integration (15 min)
Step 3: Load CHIRPS rainfall data
javascript
// Preset palette options
// Preset palette options
var
var
 palettes 
 palettes 
=
=
 
 
{
{
  
  
vegetation
vegetation
:
:
 
 
[
[
'FFFFFF'
'FFFFFF'
,
,
 
 
'CE7E45'
'CE7E45'
,
,
 
 
'DF923D'
'DF923D'
,
,
 
 
'F1B555'
'F1B555'
,
,
 
 
'FCD163'
'FCD163'
,
,
 
 
                
                
'99B718'
'99B718'
,
,
 
 
'74A901'
'74A901'
,
,
 
 
'66A000'
'66A000'
,
,
 
 
'529400'
'529400'
,
,
 
 
'3E8601'
'3E8601'
,
,
 
 
                
                
'207401'
'207401'
,
,
 
 
'056201'
'056201'
,
,
 
 
'004C00'
'004C00'
,
,
 
 
'023B01'
'023B01'
,
,
 
 
'012E01'
'012E01'
,
,
 
 
'011D01'
'011D01'
]
]
,
,
  
  
risk
risk
:
:
 
 
[
[
'2166AC'
'2166AC'
,
,
 
 
'4393C3'
'4393C3'
,
,
 
 
'92C5DE'
'92C5DE'
,
,
 
 
'D1E5F0'
'D1E5F0'
,
,
 
 
'F7F7F7'
'F7F7F7'
,
,
 
 
         
         
'FDDBC7'
'FDDBC7'
,
,
 
 
'F4A582'
'F4A582'
,
,
 
 
'D6604D'
'D6604D'
,
,
 
 
'B2182B'
'B2182B'
]
]
,
,
  
  
simple
simple
:
:
 
 
[
[
'brown'
'brown'
,
,
 
 
'yellow'
'yellow'
,
,
 
 
'green'
'green'
]
]
}
}
;
;
// Create UI selector for palettes
// Create UI selector for palettes
var
var
 paletteSelect 
 paletteSelect 
=
=
 ui
 ui
.
.
Select
Select
(
(
{
{
  
  
items
items
:
:
 
 
Object
Object
.
.
keys
keys
(
(
palettes
palettes
)
)
,
,
  
  
value
value
:
:
 
 
'vegetation'
'vegetation'
,
,
  
  
onChange
onChange
:
:
 
 
function
function
(
(
key
key
)
)
 
 
{
{
    
    
Map
Map
.
.
layers
layers
(
(
)
)
.
.
get
get
(
(
0
0
)
)
.
.
setVisParams
setVisParams
(
(
{
{
      
      
min
min
:
:
 
 
0
0
,
,
 
 
max
max
:
:
 
 
1
1
,
,
 
 
palette
palette
:
:
 palettes
 palettes
[
[
key
key
]
]
    
    
}
}
)
)
;
;
  
  
}
}
}
}
)
)
;
;
// Add to map
// Add to map
Map
Map
.
.
add
add
(
(
paletteSelect
paletteSelect
)
)
;
;
Map
Map
.
.
addLayer
addLayer
(
(
ndviMedian
ndviMedian
,
,
 
 
{
{
min
min
:
:
 
 
0
0
,
,
 
 
max
max
:
:
 
 
1
1
,
,
 
 
palette
palette
:
:
 palettes
 palettes
.
.
vegetation
vegetation
}
}
,
,
 
 
'NDVI'
'NDVI'
)
)
;
;

Exercise 3: District Summary Export (10 min)
Step 4: Calculate district statistics
javascript
// Load CHIRPS rainfall
// Load CHIRPS rainfall
var
var
 chirps 
 chirps 
=
=
 ee
 ee
.
.
ImageCollection
ImageCollection
(
(
'UCSB-CHG/CHIRPS/DAILY'
'UCSB-CHG/CHIRPS/DAILY'
)
)
  
  
.
.
filterDate
filterDate
(
(
'2024-01-01'
'2024-01-01'
,
,
 
 
'2024-12-31'
'2024-12-31'
)
)
  
  
.
.
filterBounds
filterBounds
(
(
uganda
uganda
)
)
;
;
// Calculate total annual rainfall
// Calculate total annual rainfall
var
var
 annualRainfall 
 annualRainfall 
=
=
 chirps
 chirps
.
.
sum
sum
(
(
)
)
.
.
clip
clip
(
(
uganda
uganda
)
)
;
;
// Create split panel map
// Create split panel map
var
var
 leftMap 
 leftMap 
=
=
 ui
 ui
.
.
Map
Map
(
(
)
)
;
;
var
var
 rightMap 
 rightMap 
=
=
 ui
 ui
.
.
Map
Map
(
(
)
)
;
;
// Configure maps
// Configure maps
leftMap
leftMap
.
.
addLayer
addLayer
(
(
ndviMedian
ndviMedian
,
,
 
 
{
{
min
min
:
:
 
 
0
0
,
,
 
 
max
max
:
:
 
 
1
1
,
,
 
 
palette
palette
:
:
 palettes
 palettes
.
.
vegetation
vegetation
}
}
,
,
 
 
'NDVI'
'NDVI'
)
)
;
;
rightMap
rightMap
.
.
addLayer
addLayer
(
(
annualRainfall
annualRainfall
,
,
 
 
{
{
min
min
:
:
 
 
0
0
,
,
 
 
max
max
:
:
 
 
3000
3000
,
,
 
 
palette
palette
:
:
 palettes
 palettes
.
.
risk
risk
}
}
,
,
 
 
'Rainfall'
'Rainfall'
)
)
;
;
// Link the maps
// Link the maps
var
var
 linker 
 linker 
=
=
 ui
 ui
.
.
Map
Map
.
.
Linker
Linker
(
(
[
[
leftMap
leftMap
,
,
 rightMap
 rightMap
]
]
)
)
;
;
leftMap
leftMap
.
.
centerObject
centerObject
(
(
uganda
uganda
,
,
 
 
7
7
)
)
;
;
// Create split panel
// Create split panel
var
var
 splitPanel 
 splitPanel 
=
=
 ui
 ui
.
.
SplitPanel
SplitPanel
(
(
{
{
  
  
firstPanel
firstPanel
:
:
 leftMap
 leftMap
,
,
  
  
secondPanel
secondPanel
:
:
 rightMap
 rightMap
,
,
  
  
orientation
orientation
:
:
 
 
'horizontal'
'horizontal'
,
,
  
  
wipe
wipe
:
:
 
 
true
true
}
}
)
)
;
;
// Replace the root with split panel
// Replace the root with split panel
ui
ui
.
.
root
root
.
.
clear
clear
(
(
)
)
;
;
ui
ui
.
.
root
root
.
.
add
add
(
(
splitPanel
splitPanel
)
)
;
;

Exercise 4: QA Visualization (10 min)
Step 5: Create validation charts
javascript
// Load district boundaries
// Load district boundaries
var
var
 districts 
 districts 
=
=
 ee
 ee
.
.
FeatureCollection
FeatureCollection
(
(
'UCSB-CHG/GADM/gadm36_2'
'UCSB-CHG/GADM/gadm36_2'
)
)
  
  
.
.
filter
filter
(
(
ee
ee
.
.
Filter
Filter
.
.
eq
eq
(
(
'NAME_0'
'NAME_0'
,
,
 
 
'Uganda'
'Uganda'
)
)
)
)
;
;
// Function to extract mean values per district
// Function to extract mean values per district
var
var
 
 
extractStats
extractStats
 
 
=
=
 
 
function
function
(
(
feature
feature
)
)
 
 
{
{
  
  
var
var
 ndviMean 
 ndviMean 
=
=
 ndviMedian
 ndviMedian
.
.
reduceRegion
reduceRegion
(
(
{
{
    
    
reducer
reducer
:
:
 ee
 ee
.
.
Reducer
Reducer
.
.
mean
mean
(
(
)
)
,
,
    
    
geometry
geometry
:
:
 feature
 feature
.
.
geometry
geometry
(
(
)
)
,
,
    
    
scale
scale
:
:
 
 
250
250
,
,
    
    
maxPixels
maxPixels
:
:
 
 
1e9
1e9
  
  
}
}
)
)
;
;
  
  
  
  
var
var
 rainfallMean 
 rainfallMean 
=
=
 annualRainfall
 annualRainfall
.
.
reduceRegion
reduceRegion
(
(
{
{
    
    
reducer
reducer
:
:
 ee
 ee
.
.
Reducer
Reducer
.
.
mean
mean
(
(
)
)
,
,
    
    
geometry
geometry
:
:
 feature
 feature
.
.
geometry
geometry
(
(
)
)
,
,
    
    
scale
scale
:
:
 
 
5000
5000
,
,
    
    
maxPixels
maxPixels
:
:
 
 
1e9
1e9
  
  
}
}
)
)
;
;
  
  
  
  
return
return
 feature
 feature
.
.
set
set
(
(
{
{
    
    
'ndvi_mean'
'ndvi_mean'
:
:
 ndviMean
 ndviMean
.
.
get
get
(
(
'NDVI'
'NDVI'
)
)
,
,
    
    
'rainfall_mean'
'rainfall_mean'
:
:
 rainfallMean
 rainfallMean
.
.
get
get
(
(
'precipitation'
'precipitation'
)
)
,
,
    
    
'district'
'district'
:
:
 feature
 feature
.
.
get
get
(
(
'NAME_2'
'NAME_2'
)
)
  
  
}
}
)
)
;
;
}
}
;
;
// Apply to all districts
// Apply to all districts
var
var
 districtStats 
 districtStats 
=
=
 districts
 districts
.
.
map
map
(
(
extractStats
extractStats
)
)
;
;
// Export to Drive
// Export to Drive
Export
Export
.
.
table
table
.
.
toDrive
toDrive
(
(
{
{
  
  
collection
collection
:
:
 districtStats
 districtStats
,
,
  
  
description
description
:
:
 
 
'Uganda_District_Environmental_Stats'
'Uganda_District_Environmental_Stats'
,
,
  
  
fileFormat
fileFormat
:
:
 
 
'CSV'
'CSV'
,
,
  
  
selectors
selectors
:
:
 
 
[
[
'district'
'district'
,
,
 
 
'ndvi_mean'
'ndvi_mean'
,
,
 
 
'rainfall_mean'
'rainfall_mean'
]
]
}
}
)
)
;
;

Why These Variables? (5 min debrief)
Instructor talking points:
NDVI indicates vegetation density - higher values suggest more mosquito breeding habitat
Rainfall creates standing water - critical for mosquito larvae
Combined, they predict malaria transmission potential
Temporal patterns matter - lag between rainfall and cases
Lab 4: Using ChatGPT to Prompt and Write GEE Code (11:00-12:00)
Mini-Lecture: Prompt Patterns (15 min)
Distribute this cheat sheet:
javascript
// Select two contrasting points
// Select two contrasting points
var
var
 wetPoint 
 wetPoint 
=
=
 ee
 ee
.
.
Geometry
Geometry
.
.
Point
Point
(
(
[
[
32.5
32.5
,
,
 
 
0.5
0.5
]
]
)
)
;
;
 
 
// Near Lake Victoria
// Near Lake Victoria
var
var
 dryPoint 
 dryPoint 
=
=
 ee
 ee
.
.
Geometry
Geometry
.
.
Point
Point
(
(
[
[
34.0
34.0
,
,
 
 
3.5
3.5
]
]
)
)
;
;
 
 
// Karamoja region
// Karamoja region
// Time series chart
// Time series chart
var
var
 chart 
 chart 
=
=
 ui
 ui
.
.
Chart
Chart
.
.
image
image
.
.
series
series
(
(
{
{
  
  
imageCollection
imageCollection
:
:
 ndviScaled
 ndviScaled
.
.
select
select
(
(
'NDVI'
'NDVI'
)
)
,
,
  
  
region
region
:
:
 wetPoint
 wetPoint
,
,
  
  
reducer
reducer
:
:
 ee
 ee
.
.
Reducer
Reducer
.
.
mean
mean
(
(
)
)
,
,
  
  
scale
scale
:
:
 
 
250
250
}
}
)
)
.
.
setOptions
setOptions
(
(
{
{
  
  
title
title
:
:
 
 
'NDVI Time Series - Wet vs Dry Regions'
'NDVI Time Series - Wet vs Dry Regions'
,
,
  
  
vAxis
vAxis
:
:
 
 
{
{
title
title
:
:
 
 
'NDVI'
'NDVI'
}
}
,
,
  
  
hAxis
hAxis
:
:
 
 
{
{
title
title
:
:
 
 
'Date'
'Date'
}
}
,
,
  
  
series
series
:
:
 
 
{
{
    
    
0
0
:
:
 
 
{
{
color
color
:
:
 
 
'green'
'green'
,
,
 
 
label
label
:
:
 
 
'Wet Region'
'Wet Region'
}
}
,
,
    
    
1
1
:
:
 
 
{
{
color
color
:
:
 
 
'brown'
'brown'
,
,
 
 
label
label
:
:
 
 
'Dry Region'
'Dry Region'
}
}
  
  
}
}
}
}
)
)
;
;
print
print
(
(
chart
chart
)
)
;
;

Hands-On Exercises (45 min)
Exercise 1: Debug a Broken Script (15 min)
Give participants this broken code:
markdown
#
#
 ChatGPT Prompt Patterns for GEE
 ChatGPT Prompt Patterns for GEE
##
##
 1. Diagnose Pattern
 1. Diagnose Pattern
"I'm getting this error in Google Earth Engine: [paste error]. 
"I'm getting this error in Google Earth Engine: [paste error]. 
My code is: [paste code]. What's wrong and how do I fix it?"
My code is: [paste code]. What's wrong and how do I fix it?"
##
##
 2. Refactor Pattern
 2. Refactor Pattern
"Optimize this GEE code for better performance: [paste code]. 
"Optimize this GEE code for better performance: [paste code]. 
Focus on reducing computation time and memory usage."
Focus on reducing computation time and memory usage."
##
##
 3. Explain-as-Analogy Pattern
 3. Explain-as-Analogy Pattern
"Explain how ee.Reducer.frequencyHistogram() works using 
"Explain how ee.Reducer.frequencyHistogram() works using 
a real-world analogy that health workers would understand."
a real-world analogy that health workers would understand."
##
##
 4. Translate Pseudocode Pattern
 4. Translate Pseudocode Pattern
"Convert this logic to GEE JavaScript:
"Convert this logic to GEE JavaScript:
-
-
 Load rainfall data for Uganda
 Load rainfall data for Uganda
-
-
 For each month, find areas with >100mm rain
 For each month, find areas with >100mm rain
-
-
 Count how many months each pixel exceeds threshold"
 Count how many months each pixel exceeds threshold"
##
##
 5. Rate-Limit Aware Pattern
 5. Rate-Limit Aware Pattern
"Rewrite this script to batch-export by district to avoid 
"Rewrite this script to batch-export by district to avoid 
GEE computation timeouts: [paste code]"
GEE computation timeouts: [paste code]"

Expected ChatGPT fixes:
javascript
// BROKEN CODE - FIX WITH CHATGPT
// BROKEN CODE - FIX WITH CHATGPT
var
var
 uganda 
 uganda 
=
=
 ee
 ee
.
.
FeatureCollection
FeatureCollection
(
(
'UCSB-CHG/GADM/gadm36_3'
'UCSB-CHG/GADM/gadm36_3'
)
)
  
  
.
.
filter
filter
(
(
ee
ee
.
.
Filter
Filter
.
.
eq
eq
(
(
'NAME_0'
'NAME_0'
,
,
 
 
'Uganda'
'Uganda'
)
)
;
;
  
  
// Missing parenthesis
// Missing parenthesis
var
var
 ndvi 
 ndvi 
=
=
 ee
 ee
.
.
ImageCollection
ImageCollection
(
(
'MODIS/006/MOD13Q1'
'MODIS/006/MOD13Q1'
)
)
  
  
.
.
filterdate
filterdate
(
(
'2024-01-01'
'2024-01-01'
,
,
 
 
'2024-12-31'
'2024-12-31'
)
)
  
  
// Wrong case
// Wrong case
  
  
.
.
filterBounds
filterBounds
(
(
uganda
uganda
)
)
  
  
.
.
select
select
(
(
[
[
'NDVI'
'NDVI'
]
]
)
)
;
;
var
var
 mean_ndvi 
 mean_ndvi 
=
=
 ndvi
 ndvi
.
.
mean
mean
(
(
)
)
;
;
  
  
// Forgot to scale
// Forgot to scale
Map
Map
.
.
addLayer
addLayer
(
(
mean_ndvi
mean_ndvi
,
,
 
 
{
{
}
}
,
,
 
 
'NDVI'
'NDVI'
)
)
;
;
  
  
// No visualization parameters
// No visualization parameters
// Try to export without clipping
// Try to export without clipping
Export
Export
.
.
image
image
.
.
toDrive
toDrive
(
(
{
{
  
  
image
image
:
:
 mean_ndvi
 mean_ndvi
,
,
  
  
description
description
:
:
 
 
'Uganda_NDVI'
'Uganda_NDVI'
,
,
  
  
scale
scale
:
:
 
 
250
250
}
}
)
)
;
;

Exercise 2: Build Mosquito Breeding Site Detector (15 min)
Prompt sequence for participants:
1. First prompt: "Write a GEE script that identifies potential mosquito breeding sites by finding areas
with NDVI > 0.6 and rainfall > 50mm in the last month"
2. Second prompt: "Add error handling for missing data and cloud masking to this script: [paste
result]"
3. Third prompt: "Optimize this for large areas by using reduceRegions instead of pixel-wise
operations"
Expected final code:
javascript
// FIXED CODE
// FIXED CODE
var
var
 uganda 
 uganda 
=
=
 ee
 ee
.
.
FeatureCollection
FeatureCollection
(
(
'UCSB-CHG/GADM/gadm36_3'
'UCSB-CHG/GADM/gadm36_3'
)
)
  
  
.
.
filter
filter
(
(
ee
ee
.
.
Filter
Filter
.
.
eq
eq
(
(
'NAME_0'
'NAME_0'
,
,
 
 
'Uganda'
'Uganda'
)
)
)
)
;
;
 
 
// Fixed parenthesis
// Fixed parenthesis
var
var
 ndvi 
 ndvi 
=
=
 ee
 ee
.
.
ImageCollection
ImageCollection
(
(
'MODIS/006/MOD13Q1'
'MODIS/006/MOD13Q1'
)
)
  
  
.
.
filterDate
filterDate
(
(
'2024-01-01'
'2024-01-01'
,
,
 
 
'2024-12-31'
'2024-12-31'
)
)
  
  
// Fixed case
// Fixed case
  
  
.
.
filterBounds
filterBounds
(
(
uganda
uganda
)
)
  
  
.
.
select
select
(
(
[
[
'NDVI'
'NDVI'
]
]
)
)
;
;
// Scale NDVI values
// Scale NDVI values
var
var
 ndviScaled 
 ndviScaled 
=
=
 ndvi
 ndvi
.
.
map
map
(
(
function
function
(
(
image
image
)
)
 
 
{
{
  
  
return
return
 image
 image
.
.
multiply
multiply
(
(
0.0001
0.0001
)
)
;
;
}
}
)
)
;
;
var
var
 mean_ndvi 
 mean_ndvi 
=
=
 ndviScaled
 ndviScaled
.
.
mean
mean
(
(
)
)
.
.
clip
clip
(
(
uganda
uganda
)
)
;
;
 
 
// Added clip
// Added clip
Map
Map
.
.
addLayer
addLayer
(
(
mean_ndvi
mean_ndvi
,
,
 
 
{
{
min
min
:
:
 
 
0
0
,
,
 
 
max
max
:
:
 
 
1
1
,
,
 
 
palette
palette
:
:
 
 
[
[
'white'
'white'
,
,
 
 
'green'
'green'
]
]
}
}
,
,
 
 
'NDVI'
'NDVI'
)
)
;
;
// Export with region specified
// Export with region specified
Export
Export
.
.
image
image
.
.
toDrive
toDrive
(
(
{
{
  
  
image
image
:
:
 mean_ndvi
 mean_ndvi
,
,
  
  
description
description
:
:
 
 
'Uganda_NDVI'
'Uganda_NDVI'
,
,
  
  
scale
scale
:
:
 
 
250
250
,
,
  
  
region
region
:
:
 uganda
 uganda
.
.
geometry
geometry
(
(
)
)
.
.
bounds
bounds
(
(
)
)
,
,
  
  
maxPixels
maxPixels
:
:
 
 
1e13
1e13
}
}
)
)
;
;

javascript

// Function to identify breeding sites
// Function to identify breeding sites
function
function
 
 
identifyBreedingSites
identifyBreedingSites
(
(
startDate
startDate
,
,
 endDate
 endDate
)
)
 
 
{
{
  
  
// Load data
// Load data
  
  
var
var
 uganda 
 uganda 
=
=
 ee
 ee
.
.
FeatureCollection
FeatureCollection
(
(
'UCSB-CHG/GADM/gadm36_3'
'UCSB-CHG/GADM/gadm36_3'
)
)
    
    
.
.
filter
filter
(
(
ee
ee
.
.
Filter
Filter
.
.
eq
eq
(
(
'NAME_0'
'NAME_0'
,
,
 
 
'Uganda'
'Uganda'
)
)
)
)
;
;
  
  
  
  
// Get NDVI
// Get NDVI
  
  
var
var
 ndvi 
 ndvi 
=
=
 ee
 ee
.
.
ImageCollection
ImageCollection
(
(
'MODIS/006/MOD13Q1'
'MODIS/006/MOD13Q1'
)
)
    
    
.
.
filterDate
filterDate
(
(
startDate
startDate
,
,
 endDate
 endDate
)
)
    
    
.
.
filterBounds
filterBounds
(
(
uganda
uganda
)
)
    
    
.
.
select
select
(
(
'NDVI'
'NDVI'
)
)
    
    
.
.
map
map
(
(
function
function
(
(
img
img
)
)
 
 
{
{
      
      
return
return
 img
 img
.
.
multiply
multiply
(
(
0.0001
0.0001
)
)
        
        
.
.
updateMask
updateMask
(
(
img
img
.
.
select
select
(
(
'NDVI'
'NDVI'
)
)
.
.
gt
gt
(
(
0
0
)
)
)
)
;
;
 
 
// Remove invalid pixels
// Remove invalid pixels
    
    
}
}
)
)
    
    
.
.
median
median
(
(
)
)
;
;
  
  
  
  
// Get rainfall
// Get rainfall
  
  
var
var
 rainfall 
 rainfall 
=
=
 ee
 ee
.
.
ImageCollection
ImageCollection
(
(
'UCSB-CHG/CHIRPS/DAILY'
'UCSB-CHG/CHIRPS/DAILY'
)
)
    
    
.
.
filterDate
filterDate
(
(
startDate
startDate
,
,
 endDate
 endDate
)
)
    
    
.
.
filterBounds
filterBounds
(
(
uganda
uganda
)
)
    
    
.
.
sum
sum
(
(
)
)
;
;
  
  
  
  
// Identify high-risk areas
// Identify high-risk areas
  
  
var
var
 highNDVI 
 highNDVI 
=
=
 ndvi
 ndvi
.
.
gt
gt
(
(
0.6
0.6
)
)
;
;
  
  
var
var
 highRainfall 
 highRainfall 
=
=
 rainfall
 rainfall
.
.
gt
gt
(
(
50
50
)
)
;
;
  
  
var
var
 breedingSites 
 breedingSites 
=
=
 highNDVI
 highNDVI
.
.
and
and
(
(
highRainfall
highRainfall
)
)
;
;
  
  
  
  
// Calculate area by district
// Calculate area by district
  
  
var
var
 districts 
 districts 
=
=
 ee
 ee
.
.
FeatureCollection
FeatureCollection
(
(
'UCSB-CHG/GADM/gadm36_2'
'UCSB-CHG/GADM/gadm36_2'
)
)
    
    
.
.
filter
filter
(
(
ee
ee
.
.
Filter
Filter
.
.
eq
eq
(
(
'NAME_0'
'NAME_0'
,
,
 
 
'Uganda'
'Uganda'
)
)
)
)
;
;
  
  
  
  
var
var
 areaByDistrict 
 areaByDistrict 
=
=
 breedingSites
 breedingSites
.
.
multiply
multiply
(
(
ee
ee
.
.
Image
Image
.
.
pixelArea
pixelArea
(
(
)
)
)
)
    
    
.
.
reduceRegions
reduceRegions
(
(
{
{
      
      
collection
collection
:
:
 districts
 districts
,
,
      
      
reducer
reducer
:
:
 ee
 ee
.
.
Reducer
Reducer
.
.
sum
sum
(
(
)
)
,
,
      
      
scale
scale
:
:
 
 
250
250
    
    
}
}
)
)
;
;
  
  
  
  
return
return
 
 
{
{
    
    
riskMap
riskMap
:
:
 breedingSites
 breedingSites
.
.
selfMask
selfMask
(
(
)
)
.
.
clip
clip
(
(
uganda
uganda
)
)
,
,
    
    
statistics
statistics
:
:
 areaByDistrict
 areaByDistrict
  
  
}
}
;
;

Exercise 3: Create Reusable Functions (15 min)
Prompt: "Create a reusable function library for common GEE operations in health mapping:
getMedianNDVI, getTotalRainfall, and standardizeImage"
Expected result:
}
}
// Run for last month
// Run for last month
var
var
 endDate 
 endDate 
=
=
 ee
 ee
.
.
Date
Date
(
(
Date
Date
.
.
now
now
(
(
)
)
)
)
;
;
var
var
 startDate 
 startDate 
=
=
 endDate
 endDate
.
.
advance
advance
(
(
-
-
1
1
,
,
 
 
'month'
'month'
)
)
;
;
var
var
 results 
 results 
=
=
 
 
identifyBreedingSites
identifyBreedingSites
(
(
startDate
startDate
,
,
 endDate
 endDate
)
)
;
;
// Visualize
// Visualize
Map
Map
.
.
addLayer
addLayer
(
(
results
results
.
.
riskMap
riskMap
,
,
 
 
{
{
palette
palette
:
:
 
 
[
[
'red'
'red'
]
]
}
}
,
,
 
 
'Breeding Sites'
'Breeding Sites'
)
)
;
;
print
print
(
(
'Area by district:'
'Area by district:'
,
,
 results
 results
.
.
statistics
statistics
)
)
;
;

javascript

// Reusable function library for health mapping
// Reusable function library for health mapping
var
var
 healthMapUtils 
 healthMapUtils 
=
=
 
 
{
{
  
  
// Get median NDVI for a region and time period
// Get median NDVI for a region and time period
  
  
getMedianNDVI
getMedianNDVI
:
:
 
 
function
function
(
(
region
region
,
,
 startDate
 startDate
,
,
 endDate
 endDate
)
)
 
 
{
{
    
    
return
return
 ee
 ee
.
.
ImageCollection
ImageCollection
(
(
'MODIS/006/MOD13Q1'
'MODIS/006/MOD13Q1'
)
)
      
      
.
.
filterDate
filterDate
(
(
startDate
startDate
,
,
 endDate
 endDate
)
)
      
      
.
.
filterBounds
filterBounds
(
(
region
region
)
)
      
      
.
.
select
select
(
(
'NDVI'
'NDVI'
)
)
      
      
.
.
map
map
(
(
function
function
(
(
img
img
)
)
 
 
{
{
        
        
return
return
 img
 img
.
.
multiply
multiply
(
(
0.0001
0.0001
)
)
          
          
.
.
copyProperties
copyProperties
(
(
img
img
,
,
 
 
[
[
'system:time_start'
'system:time_start'
]
]
)
)
;
;
      
      
}
}
)
)
      
      
.
.
median
median
(
(
)
)
      
      
.
.
clip
clip
(
(
region
region
)
)
;
;
  
  
}
}
,
,
  
  
  
  
// Get total rainfall
// Get total rainfall
  
  
getTotalRainfall
getTotalRainfall
:
:
 
 
function
function
(
(
region
region
,
,
 startDate
 startDate
,
,
 endDate
 endDate
)
)
 
 
{
{
    
    
return
return
 ee
 ee
.
.
ImageCollection
ImageCollection
(
(
'UCSB-CHG/CHIRPS/DAILY'
'UCSB-CHG/CHIRPS/DAILY'
)
)
      
      
.
.
filterDate
filterDate
(
(
startDate
startDate
,
,
 endDate
 endDate
)
)
      
      
.
.
filterBounds
filterBounds
(
(
region
region
)
)
      
      
.
.
sum
sum
(
(
)
)
      
      
.
.
clip
clip
(
(
region
region
)
)
;
;
  
  
}
}
,
,
  
  
  
  
// Standardize image to 0-1 range
// Standardize image to 0-1 range
  
  
standardizeImage
standardizeImage
:
:
 
 
function
function
(
(
image
image
,
,
 bandName
 bandName
)
)
 
 
{
{
    
    
var
var
 band 
 band 
=
=
 image
 image
.
.
select
select
(
(
bandName
bandName
)
)
;
;
    
    
var
var
 minMax 
 minMax 
=
=
 band
 band
.
.
reduceRegion
reduceRegion
(
(
{
{
      
      
reducer
reducer
:
:
 ee
 ee
.
.
Reducer
Reducer
.
.
minMax
minMax
(
(
)
)
,
,
      
      
geometry
geometry
:
:
 image
 image
.
.
geometry
geometry
(
(
)
)
,
,
      
      
scale
scale
:
:
 
 
1000
1000
,
,
      
      
maxPixels
maxPixels
:
:
 
 
1e9
1e9
    
    
}
}
)
)
;
;
    
    
    
    
var
var
 min 
 min 
=
=
 ee
 ee
.
.
Number
Number
(
(
minMax
minMax
.
.
get
get
(
(
bandName 
bandName 
+
+
 
 
'_min'
'_min'
)
)
)
)
;
;
    
    
var
var
 max 
 max 
=
=
 ee
 ee
.
.
Number
Number
(
(
minMax
minMax
.
.
get
get
(
(
bandName 
bandName 
+
+
 
 
'_max'
'_max'
)
)
)
)
;
;
    
    
    
    
return
return
 band
 band
.
.
subtract
subtract
(
(
min
min
)
)
.
.
divide
divide
(
(
max
max
.
.
subtract
subtract
(
(
min
min
)
)
)
)
      
      
.
.
rename
rename
(
(
bandName 
bandName 
+
+
 
 
'_normalized'
'_normalized'
)
)
;
;
  
  
}
}
}
}
;
;

Lab 5: AI-Based Clustering for Malaria Risk Mapping (13:00-14:30)
Exercise 1: Prepare Multi-band Stack with Scaling (20 min)
Step 1: Create properly scaled multi-band image
// Example usage
// Example usage
var
var
 uganda 
 uganda 
=
=
 ee
 ee
.
.
FeatureCollection
FeatureCollection
(
(
'UCSB-CHG/GADM/gadm36_3'
'UCSB-CHG/GADM/gadm36_3'
)
)
  
  
.
.
filter
filter
(
(
ee
ee
.
.
Filter
Filter
.
.
eq
eq
(
(
'NAME_0'
'NAME_0'
,
,
 
 
'Uganda'
'Uganda'
)
)
)
)
;
;
var
var
 ndvi 
 ndvi 
=
=
 healthMapUtils
 healthMapUtils
.
.
getMedianNDVI
getMedianNDVI
(
(
uganda
uganda
,
,
 
 
'2024-01-01'
'2024-01-01'
,
,
 
 
'2024-03-31'
'2024-03-31'
)
)
;
;
var
var
 rainfall 
 rainfall 
=
=
 healthMapUtils
 healthMapUtils
.
.
getTotalRainfall
getTotalRainfall
(
(
uganda
uganda
,
,
 
 
'2024-01-01'
'2024-01-01'
,
,
 
 
'2024-03-31'
'2024-03-31'
)
)
;
;
var
var
 ndviNorm 
 ndviNorm 
=
=
 healthMapUtils
 healthMapUtils
.
.
standardizeImage
standardizeImage
(
(
ndvi
ndvi
,
,
 
 
'NDVI'
'NDVI'
)
)
;
;
Map
Map
.
.
addLayer
addLayer
(
(
ndviNorm
ndviNorm
,
,
 
 
{
{
min
min
:
:
 
 
0
0
,
,
 
 
max
max
:
:
 
 
1
1
,
,
 
 
palette
palette
:
:
 
 
[
[
'brown'
'brown'
,
,
 
 
'yellow'
'yellow'
,
,
 
 
'green'
'green'
]
]
}
}
,
,
 
 
'NDVI Normalize
'NDVI Normalize

javascript

// Load all required data
// Load all required data
var
var
 uganda 
 uganda 
=
=
 ee
 ee
.
.
FeatureCollection
FeatureCollection
(
(
'UCSB-CHG/GADM/gadm36_3'
'UCSB-CHG/GADM/gadm36_3'
)
)
  
  
.
.
filter
filter
(
(
ee
ee
.
.
Filter
Filter
.
.
eq
eq
(
(
'NAME_0'
'NAME_0'
,
,
 
 
'Uganda'
'Uganda'
)
)
)
)
;
;
// Environmental variables
// Environmental variables
var
var
 ndvi 
 ndvi 
=
=
 healthMapUtils
 healthMapUtils
.
.
getMedianNDVI
getMedianNDVI
(
(
uganda
uganda
,
,
 
 
'2024-01-01'
'2024-01-01'
,
,
 
 
'2024-03-31'
'2024-03-31'
)
)
;
;
var
var
 rainfall 
 rainfall 
=
=
 healthMapUtils
 healthMapUtils
.
.
getTotalRainfall
getTotalRainfall
(
(
uganda
uganda
,
,
 
 
'2024-01-01'
'2024-01-01'
,
,
 
 
'2024-03-31'
'2024-03-31'
)
)
;
;
// Add elevation
// Add elevation
var
var
 elevation 
 elevation 
=
=
 ee
 ee
.
.
Image
Image
(
(
'USGS/SRTMGL1_003'
'USGS/SRTMGL1_003'
)
)
.
.
select
select
(
(
'elevation'
'elevation'
)
)
.
.
clip
clip
(
(
uganda
uganda
)
)
;
;
// Add temperature (optional)
// Add temperature (optional)
var
var
 temperature 
 temperature 
=
=
 ee
 ee
.
.
ImageCollection
ImageCollection
(
(
'MODIS/006/MOD11A1'
'MODIS/006/MOD11A1'
)
)
  
  
.
.
filterDate
filterDate
(
(
'2024-01-01'
'2024-01-01'
,
,
 
 
'2024-03-31'
'2024-03-31'
)
)
  
  
.
.
select
select
(
(
'LST_Day_1km'
'LST_Day_1km'
)
)
  
  
.
.
map
map
(
(
function
function
(
(
img
img
)
)
 
 
{
{
    
    
return
return
 img
 img
.
.
multiply
multiply
(
(
0.02
0.02
)
)
.
.
subtract
subtract
(
(
273.15
273.15
)
)
;
;
 
 
// Convert to Celsius
// Convert to Celsius
  
  
}
}
)
)
  
  
.
.
mean
mean
(
(
)
)
  
  
.
.
clip
clip
(
(
uganda
uganda
)
)
;
;
// ChatGPT-assisted min-max scaling
// ChatGPT-assisted min-max scaling
var
var
 
 
scaleImage
scaleImage
 
 
=
=
 
 
function
function
(
(
image
image
,
,
 bandName
 bandName
)
)
 
 
{
{
  
  
var
var
 band 
 band 
=
=
 image
 image
.
.
select
select
(
(
bandName
bandName
)
)
;
;
  
  
var
var
 minMax 
 minMax 
=
=
 band
 band
.
.
reduceRegion
reduceRegion
(
(
{
{
    
    
reducer
reducer
:
:
 ee
 ee
.
.
Reducer
Reducer
.
.
minMax
minMax
(
(
)
)
,
,
    
    
geometry
geometry
:
:
 uganda
 uganda
.
.
geometry
geometry
(
(
)
)
,
,
    
    
scale
scale
:
:
 
 
1000
1000
,
,
    
    
maxPixels
maxPixels
:
:
 
 
1e9
1e9
,
,
    
    
bestEffort
bestEffort
:
:
 
 
true
true
  
  
}
}
)
)
;
;
  
  
  
  
var
var
 min 
 min 
=
=
 ee
 ee
.
.
Number
Number
(
(
minMax
minMax
.
.
get
get
(
(
bandName 
bandName 
+
+
 
 
'_min'
'_min'
)
)
)
)
;
;
  
  
var
var
 max 
 max 
=
=
 ee
 ee
.
.
Number
Number
(
(
minMax
minMax
.
.
get
get
(
(
bandName 
bandName 
+
+
 
 
'_max'
'_max'
)
)
)
)
;
;
  
  
  
  
return
return
 band
 band
.
.
subtract
subtract
(
(
min
min
)
)
.
.
divide
divide
(
(
max
max
.
.
subtract
subtract
(
(
min
min
)
)
)
)
    
    
.
.
rename
rename
(
(
bandName 
bandName 
+
+
 
 
'_scaled'
'_scaled'
)
)
;
;
}
}
;
;
// Scale all bands
// Scale all bands
var
var
 ndviScaled 
 ndviScaled 
=
=
 
 
scaleImage
scaleImage
(
(
ndvi
ndvi
,
,
 
 
'NDVI'
'NDVI'
)
)
;
;
var
var
 rainfallScaled 
 rainfallScaled 
=
=
 
 
scaleImage
scaleImage
(
(
rainfall
rainfall
,
,
 
 
'precipitation'
'precipitation'
)
)
;
;
var
var
 elevationScaled 
 elevationScaled 
=
=
 
 
scaleImage
scaleImage
(
(
elevation
elevation
,
,
 
 
'elevation'
'elevation'
)
)
;
;

Coffee Break (10 min)
Exercise 2: K-means Clustering (30 min)
Step 2: Implement clustering with validation
var
var
 tempScaled 
 tempScaled 
=
=
 
 
scaleImage
scaleImage
(
(
temperature
temperature
,
,
 
 
'LST_Day_1km'
'LST_Day_1km'
)
)
;
;
// Create multi-band image
// Create multi-band image
var
var
 composite 
 composite 
=
=
 ndviScaled
 ndviScaled
  
  
.
.
addBands
addBands
(
(
rainfallScaled
rainfallScaled
)
)
  
  
.
.
addBands
addBands
(
(
elevationScaled
elevationScaled
)
)
  
  
.
.
addBands
addBands
(
(
tempScaled
tempScaled
)
)
;
;
print
print
(
(
'Composite bands:'
'Composite bands:'
,
,
 composite
 composite
.
.
bandNames
bandNames
(
(
)
)
)
)
;
;

Exercise 3: Spatial Cross-Validation (20 min)
Step 3: Hold-out validation
javascript
// Prepare training data
// Prepare training data
var
var
 training 
 training 
=
=
 composite
 composite
.
.
sample
sample
(
(
{
{
  
  
region
region
:
:
 uganda
 uganda
,
,
  
  
scale
scale
:
:
 
 
1000
1000
,
,
  
  
numPixels
numPixels
:
:
 
 
5000
5000
}
}
)
)
;
;
// Instantiate clusterer and train
// Instantiate clusterer and train
var
var
 clusterer 
 clusterer 
=
=
 ee
 ee
.
.
Clusterer
Clusterer
.
.
wekaKMeans
wekaKMeans
(
(
{
{
  
  
nClusters
nClusters
:
:
 
 
5
5
,
,
  
  
seed
seed
:
:
 
 
42
42
  
  
// For reproducibility
// For reproducibility
}
}
)
)
.
.
train
train
(
(
training
training
)
)
;
;
// Apply clusterer
// Apply clusterer
var
var
 clustered 
 clustered 
=
=
 composite
 composite
.
.
cluster
cluster
(
(
clusterer
clusterer
)
)
;
;
// Assign risk levels based on cluster characteristics
// Assign risk levels based on cluster characteristics
var
var
 clusterMeans 
 clusterMeans 
=
=
 ee
 ee
.
.
FeatureCollection
FeatureCollection
(
(
ee
ee
.
.
List
List
.
.
sequence
sequence
(
(
0
0
,
,
 
 
4
4
)
)
.
.
map
map
(
(
function
function
(
(
i
i
)
)
 
 
{
{
  
  
var
var
 cluster 
 cluster 
=
=
 clustered
 clustered
.
.
updateMask
updateMask
(
(
clustered
clustered
.
.
eq
eq
(
(
i
i
)
)
)
)
;
;
  
  
var
var
 means 
 means 
=
=
 composite
 composite
.
.
updateMask
updateMask
(
(
cluster
cluster
)
)
.
.
reduceRegion
reduceRegion
(
(
{
{
    
    
reducer
reducer
:
:
 ee
 ee
.
.
Reducer
Reducer
.
.
mean
mean
(
(
)
)
,
,
    
    
geometry
geometry
:
:
 uganda
 uganda
.
.
geometry
geometry
(
(
)
)
,
,
    
    
scale
scale
:
:
 
 
5000
5000
,
,
    
    
maxPixels
maxPixels
:
:
 
 
1e9
1e9
  
  
}
}
)
)
;
;
  
  
  
  
return
return
 ee
 ee
.
.
Feature
Feature
(
(
null
null
,
,
 means
 means
)
)
.
.
set
set
(
(
'cluster'
'cluster'
,
,
 i
 i
)
)
;
;
}
}
)
)
)
)
;
;
print
print
(
(
'Cluster characteristics:'
'Cluster characteristics:'
,
,
 clusterMeans
 clusterMeans
)
)
;
;
// Remap clusters to risk levels (0=lowest, 4=highest)
// Remap clusters to risk levels (0=lowest, 4=highest)
// This should be adjusted based on domain knowledge
// This should be adjusted based on domain knowledge
var
var
 riskLevels 
 riskLevels 
=
=
 clustered
 clustered
.
.
remap
remap
(
(
[
[
0
0
,
,
 
 
1
1
,
,
 
 
2
2
,
,
 
 
3
3
,
,
 
 
4
4
]
]
,
,
 
 
[
[
2
2
,
,
 
 
4
4
,
,
 
 
1
1
,
,
 
 
3
3
,
,
 
 
0
0
]
]
)
)
;
;
// Visualize with health-appropriate colors
// Visualize with health-appropriate colors
var
var
 riskPalette 
 riskPalette 
=
=
 
 
[
[
'2166AC'
'2166AC'
,
,
 
 
'67A9CF'
'67A9CF'
,
,
 
 
'F7F7F7'
'F7F7F7'
,
,
 
 
'FDDBC7'
'FDDBC7'
,
,
 
 
'B2182B'
'B2182B'
]
]
;
;
Map
Map
.
.
addLayer
addLayer
(
(
riskLevels
riskLevels
,
,
 
 
{
{
min
min
:
:
 
 
0
0
,
,
 
 
max
max
:
:
 
 
4
4
,
,
 
 
palette
palette
:
:
 riskPalette
 riskPalette
}
}
,
,
 
 
'Malaria Risk Levels'
'Malaria Risk Levels'
)
)
;
;

Exercise 4: Validate Against "Ground Truth" (20 min)
Step 4: Load and compare with malaria prevalence data
javascript
// Define hold-out region (e.g., Northern Uganda)
// Define hold-out region (e.g., Northern Uganda)
var
var
 northernRegion 
 northernRegion 
=
=
 ee
 ee
.
.
FeatureCollection
FeatureCollection
(
(
'UCSB-CHG/GADM/gadm36_1'
'UCSB-CHG/GADM/gadm36_1'
)
)
  
  
.
.
filter
filter
(
(
ee
ee
.
.
Filter
Filter
.
.
eq
eq
(
(
'NAME_0'
'NAME_0'
,
,
 
 
'Uganda'
'Uganda'
)
)
)
)
  
  
.
.
filter
filter
(
(
ee
ee
.
.
Filter
Filter
.
.
eq
eq
(
(
'NAME_1'
'NAME_1'
,
,
 
 
'Northern'
'Northern'
)
)
)
)
;
;
var
var
 trainingRegion 
 trainingRegion 
=
=
 uganda
 uganda
.
.
geometry
geometry
(
(
)
)
.
.
difference
difference
(
(
northernRegion
northernRegion
.
.
geometry
geometry
(
(
)
)
)
)
;
;
// Retrain on subset
// Retrain on subset
var
var
 trainingSubset 
 trainingSubset 
=
=
 composite
 composite
.
.
sample
sample
(
(
{
{
  
  
region
region
:
:
 trainingRegion
 trainingRegion
,
,
  
  
scale
scale
:
:
 
 
1000
1000
,
,
  
  
numPixels
numPixels
:
:
 
 
5000
5000
}
}
)
)
;
;
var
var
 clustererSubset 
 clustererSubset 
=
=
 ee
 ee
.
.
Clusterer
Clusterer
.
.
wekaKMeans
wekaKMeans
(
(
{
{
  
  
nClusters
nClusters
:
:
 
 
5
5
,
,
  
  
seed
seed
:
:
 
 
42
42
}
}
)
)
.
.
train
train
(
(
trainingSubset
trainingSubset
)
)
;
;
// Apply to full area
// Apply to full area
var
var
 clusteredValidation 
 clusteredValidation 
=
=
 composite
 composite
.
.
cluster
cluster
(
(
clustererSubset
clustererSubset
)
)
;
;
// Compare clusters in hold-out region
// Compare clusters in hold-out region
var
var
 comparisonMap 
 comparisonMap 
=
=
 clustered
 clustered
.
.
addBands
addBands
(
(
clusteredValidation
clusteredValidation
)
)
  
  
.
.
select
select
(
(
[
[
'cluster'
'cluster'
,
,
 
 
'cluster_1'
'cluster_1'
]
]
,
,
 
 
[
[
'original'
'original'
,
,
 
 
'validated'
'validated'
]
]
)
)
;
;
Map
Map
.
.
addLayer
addLayer
(
(
comparisonMap
comparisonMap
.
.
select
select
(
(
'original'
'original'
)
)
.
.
clip
clip
(
(
northernRegion
northernRegion
)
)
,
,
 
 
  
  
{
{
min
min
:
:
 
 
0
0
,
,
 
 
max
max
:
:
 
 
4
4
,
,
 
 
palette
palette
:
:
 
 
[
[
'red'
'red'
,
,
 
 
'orange'
'orange'
,
,
 
 
'yellow'
'yellow'
,
,
 
 
'lightgreen'
'lightgreen'
,
,
 
 
'darkgreen'
'darkgreen'
]
]
}
}
,
,
 
 
  
  
'Original Clusters - North'
'Original Clusters - North'
)
)
;
;
  
  
Map
Map
.
.
addLayer
addLayer
(
(
comparisonMap
comparisonMap
.
.
select
select
(
(
'validated'
'validated'
)
)
.
.
clip
clip
(
(
northernRegion
northernRegion
)
)
,
,
 
 
  
  
{
{
min
min
:
:
 
 
0
0
,
,
 
 
max
max
:
:
 
 
4
4
,
,
 
 
palette
palette
:
:
 
 
[
[
'red'
'red'
,
,
 
 
'orange'
'orange'
,
,
 
 
'yellow'
'yellow'
,
,
 
 
'lightgreen'
'lightgreen'
,
,
 
 
'darkgreen'
'darkgreen'
]
]
}
}
,
,
 
 
  
  
'Validated Clusters - North'
'Validated Clusters - North'
)
)
;
;

Wrap-up Sheet (10 min)
Teams complete this summary:
javascript
// Simulated malaria prevalence data (in practice, use real data)
// Simulated malaria prevalence data (in practice, use real data)
// For workshop, create synthetic data based on environmental conditions
// For workshop, create synthetic data based on environmental conditions
var
var
 
 
createSyntheticPrevalence
createSyntheticPrevalence
 
 
=
=
 
 
function
function
(
(
)
)
 
 
{
{
  
  
// Higher risk where NDVI is moderate and rainfall is high
// Higher risk where NDVI is moderate and rainfall is high
  
  
var
var
 prevalence 
 prevalence 
=
=
 ndvi
 ndvi
.
.
multiply
multiply
(
(
2
2
)
)
    
    
.
.
add
add
(
(
rainfall
rainfall
.
.
divide
divide
(
(
1000
1000
)
)
)
)
    
    
.
.
add
add
(
(
elevation
elevation
.
.
divide
divide
(
(
-
-
2000
2000
)
)
)
)
  
  
// Lower elevation = higher risk
// Lower elevation = higher risk
    
    
.
.
add
add
(
(
temperature
temperature
.
.
multiply
multiply
(
(
-
-
0.05
0.05
)
)
)
)
  
  
// Optimal temp around 25°C
// Optimal temp around 25°C
    
    
.
.
unitScale
unitScale
(
(
0
0
,
,
 
 
3
3
)
)
  
  
// Scale to 0-1
// Scale to 0-1
    
    
.
.
rename
rename
(
(
'prevalence'
'prevalence'
)
)
;
;
  
  
  
  
return
return
 prevalence
 prevalence
;
;
}
}
;
;
var
var
 malariaPrevalence 
 malariaPrevalence 
=
=
 
 
createSyntheticPrevalence
createSyntheticPrevalence
(
(
)
)
;
;
// Sample prevalence at cluster centroids
// Sample prevalence at cluster centroids
var
var
 validation 
 validation 
=
=
 clustered
 clustered
.
.
addBands
addBands
(
(
malariaPrevalence
malariaPrevalence
)
)
  
  
.
.
stratifiedSample
stratifiedSample
(
(
{
{
    
    
numPoints
numPoints
:
:
 
 
100
100
,
,
    
    
classBand
classBand
:
:
 
 
'cluster'
'cluster'
,
,
    
    
region
region
:
:
 uganda
 uganda
,
,
    
    
scale
scale
:
:
 
 
1000
1000
  
  
}
}
)
)
;
;
// Create scatter plot
// Create scatter plot
var
var
 chart 
 chart 
=
=
 ui
 ui
.
.
Chart
Chart
.
.
feature
feature
.
.
byFeature
byFeature
(
(
validation
validation
,
,
 
 
'cluster'
'cluster'
,
,
 
 
'prevalence'
'prevalence'
)
)
  
  
.
.
setChartType
setChartType
(
(
'ColumnChart'
'ColumnChart'
)
)
  
  
.
.
setOptions
setOptions
(
(
{
{
    
    
title
title
:
:
 
 
'Mean Malaria Prevalence by Risk Cluster'
'Mean Malaria Prevalence by Risk Cluster'
,
,
    
    
hAxis
hAxis
:
:
 
 
{
{
title
title
:
:
 
 
'Cluster ID'
'Cluster ID'
}
}
,
,
    
    
vAxis
vAxis
:
:
 
 
{
{
title
title
:
:
 
 
'Prevalence'
'Prevalence'
}
}
,
,
    
    
colors
colors
:
:
 riskPalette
 riskPalette
  
  
}
}
)
)
;
;
print
print
(
(
chart
chart
)
)
;
;

Export Bridge: Storyboard Documentation (14:30-15:30)
Auto-generate Documentation with ChatGPT
Prompt for participants: "Generate a markdown header for my GEE script that documents:
1. Data sources with citations
2. Processing steps
3. Assumptions and limitations
4. Export parameters"
Expected output:
markdown
#
#
 Cluster Analysis Summary
 Cluster Analysis Summary
Team Members: _______________________
Team Members: _______________________
##
##
 Cluster Characteristics
 Cluster Characteristics
|
|
 Cluster 
 Cluster 
|
|
 NDVI 
 NDVI 
|
|
 Rainfall 
 Rainfall 
|
|
 Elevation 
 Elevation 
|
|
 Temperature 
 Temperature 
|
|
 Assigned Risk 
 Assigned Risk 
|
|
|
|
---------
---------
|
|
------
------
|
|
----------
----------
|
|
-----------
-----------
|
|
-------------
-------------
|
|
---------------
---------------
|
|
|
|
 0       
 0       
|
|
      
      
|
|
          
          
|
|
           
           
|
|
             
             
|
|
               
               
|
|
|
|
 1       
 1       
|
|
      
      
|
|
          
          
|
|
           
           
|
|
             
             
|
|
               
               
|
|
|
|
 2       
 2       
|
|
      
      
|
|
          
          
|
|
           
           
|
|
             
             
|
|
               
               
|
|
|
|
 3       
 3       
|
|
      
      
|
|
          
          
|
|
           
           
|
|
             
             
|
|
               
               
|
|
|
|
 4       
 4       
|
|
      
      
|
|
          
          
|
|
           
           
|
|
             
             
|
|
               
               
|
|
##
##
 Interpretation
 Interpretation
Highest risk areas are characterized by: _______________________
Highest risk areas are characterized by: _______________________
Lowest risk areas are characterized by: ________________________
Lowest risk areas are characterized by: ________________________
##
##
 Validation Results
 Validation Results
Correlation with prevalence data: _____________________________
Correlation with prevalence data: _____________________________
Spatial stability (North vs. South): __________________________
Spatial stability (North vs. South): __________________________

Final Export Code
javascript
/**
/**
 * MALARIA RISK MAPPING - UGANDA
 * MALARIA RISK MAPPING - UGANDA
 * ==============================
 * ==============================
 * 
 * 
 * DATA SOURCES:
 * DATA SOURCES:
 * - MODIS NDVI (MOD13Q1): Didan, K. (2015). MOD13Q1 MODIS/Terra Vegetation Indices 
 * - MODIS NDVI (MOD13Q1): Didan, K. (2015). MOD13Q1 MODIS/Terra Vegetation Indices 
 *   16-Day L3 Global 250m SIN Grid V006. NASA EOSDIS Land Processes DAAC.
 *   16-Day L3 Global 250m SIN Grid V006. NASA EOSDIS Land Processes DAAC.
 * - CHIRPS Rainfall: Funk, et al. (2015). The climate hazards infrared precipitation 
 * - CHIRPS Rainfall: Funk, et al. (2015). The climate hazards infrared precipitation 
 *   with stations—a new environmental record for monitoring extremes. Scientific Data.
 *   with stations—a new environmental record for monitoring extremes. Scientific Data.
 * - SRTM Elevation: Farr, T.G., et al. (2007). The Shuttle Radar Topography Mission. 
 * - SRTM Elevation: Farr, T.G., et al. (2007). The Shuttle Radar Topography Mission. 
 *   Rev. Geophys., 45, RG2004.
 *   Rev. Geophys., 45, RG2004.
 * 
 * 
 * PROCESSING CHAIN:
 * PROCESSING CHAIN:
 * 1. Load environmental variables (NDVI, rainfall, elevation, temperature)
 * 1. Load environmental variables (NDVI, rainfall, elevation, temperature)
 * 2. Apply min-max scaling to standardize inputs
 * 2. Apply min-max scaling to standardize inputs
 * 3. Create multi-band composite
 * 3. Create multi-band composite
 * 4. Apply k-means clustering (k=5)
 * 4. Apply k-means clustering (k=5)
 * 5. Assign risk levels based on cluster characteristics
 * 5. Assign risk levels based on cluster characteristics
 * 6. Validate against synthetic prevalence data
 * 6. Validate against synthetic prevalence data
 * 
 * 
 * ASSUMPTIONS:
 * ASSUMPTIONS:
 * - Environmental conditions are primary drivers of malaria risk
 * - Environmental conditions are primary drivers of malaria risk
 * - 3-month average represents typical seasonal conditions
 * - 3-month average represents typical seasonal conditions
 * - Linear scaling preserves relative relationships
 * - Linear scaling preserves relative relationships
 * 
 * 
 * LIMITATIONS:
 * LIMITATIONS:
 * - Does not account for human factors (population density, interventions)
 * - Does not account for human factors (population density, interventions)
 * - Cluster assignments may vary with different initial conditions
 * - Cluster assignments may vary with different initial conditions
 * - Validation uses synthetic data for workshop purposes
 * - Validation uses synthetic data for workshop purposes
 * 
 * 
 * EXPORT:
 * EXPORT:
 * - Format: GeoTIFF
 * - Format: GeoTIFF
 * - Resolution: 250m
 * - Resolution: 250m
 * - Projection: EPSG:4326
 * - Projection: EPSG:4326
 * - Bands: risk_level (0-4, where 4 is highest risk)
 * - Bands: risk_level (0-4, where 4 is highest risk)
 */
 */
// Main script starts here...
// Main script starts here...

Optional Stretch Tasks
1. Auto-generate Interactive Leaflet Map
ChatGPT Prompt: "Convert this GEE export URL to a Leaflet web map with popup showing risk level"
Expected HTML:
javascript
// Export risk map
// Export risk map
Export
Export
.
.
image
image
.
.
toDrive
toDrive
(
(
{
{
  
  
image
image
:
:
 riskLevels
 riskLevels
.
.
byte
byte
(
(
)
)
,
,
  
  
// Convert to byte for smaller file size
// Convert to byte for smaller file size
  
  
description
description
:
:
 
 
'Uganda_Malaria_Risk_Map_'
'Uganda_Malaria_Risk_Map_'
 
 
+
+
 ee
 ee
.
.
Date
Date
(
(
Date
Date
.
.
now
now
(
(
)
)
)
)
.
.
format
format
(
(
'YYYY_MM_dd'
'YYYY_MM_dd'
)
)
.
.
getInfo
getInfo
(
(
)
)
,
,
  
  
folder
folder
:
:
 
 
'GEE_Workshop'
'GEE_Workshop'
,
,
  
  
region
region
:
:
 uganda
 uganda
.
.
geometry
geometry
(
(
)
)
.
.
bounds
bounds
(
(
)
)
,
,
  
  
scale
scale
:
:
 
 
250
250
,
,
  
  
crs
crs
:
:
 
 
'EPSG:4326'
'EPSG:4326'
,
,
  
  
maxPixels
maxPixels
:
:
 
 
1e13
1e13
}
}
)
)
;
;
// Export cluster statistics
// Export cluster statistics
Export
Export
.
.
table
table
.
.
toDrive
toDrive
(
(
{
{
  
  
collection
collection
:
:
 clusterMeans
 clusterMeans
,
,
  
  
description
description
:
:
 
 
'Cluster_Statistics'
'Cluster_Statistics'
,
,
  
  
fileFormat
fileFormat
:
:
 
 
'CSV'
'CSV'
}
}
)
)
;
;
// Export validation points
// Export validation points
Export
Export
.
.
table
table
.
.
toDrive
toDrive
(
(
{
{
  
  
collection
collection
:
:
 validation
 validation
,
,
  
  
description
description
:
:
 
 
'Validation_Points'
'Validation_Points'
,
,
  
  
fileFormat
fileFormat
:
:
 
 
'CSV'
'CSV'
,
,
  
  
selectors
selectors
:
:
 
 
[
[
'cluster'
'cluster'
,
,
 
 
'prevalence'
'prevalence'
,
,
 
 
'.geo'
'.geo'
]
]
}
}
)
)
;
;

html

<!
<!
DOCTYPE
DOCTYPE
 
 
html
html
>
>
<
<
html
html
>
>
<
<
head
head
>
>
  
  
<
<
title
title
>
>
Uganda Malaria Risk Map
Uganda Malaria Risk Map
</
</
title
title
>
>
  
  
<
<
link
link
 
 
rel
rel
=
=
"
"
stylesheet
stylesheet
"
"
 
 
href
href
=
=
"
"
https://unpkg.com/leaflet@1.7.1/dist/leaflet.css
https://unpkg.com/leaflet@1.7.1/dist/leaflet.css
"
"
 
 
/>
/>
  
  
<
<
script
script
 
 
src
src
=
=
"
"
https://unpkg.com/leaflet@1.7.1/dist/leaflet.js
https://unpkg.com/leaflet@1.7.1/dist/leaflet.js
"
"
>
>
</
</
script
script
>
>
  
  
<
<
script
script
 
 
src
src
=
=
"
"
https://unpkg.com/georaster
https://unpkg.com/georaster
"
"
>
>
</
</
script
script
>
>
  
  
<
<
script
script
 
 
src
src
=
=
"
"
https://unpkg.com/georaster-layer-for-leaflet
https://unpkg.com/georaster-layer-for-leaflet
"
"
>
>
</
</
script
script
>
>
  
  
<
<
style
style
>
>
    
    
#map
#map
 
 
{
{
 
 
height
height
:
:
 
 
600
600
px
px
;
;
 
 
}
}
    
    
.legend
.legend
 
 
{
{
      
      
background
background
:
:
 
 
white
white
;
;
      
      
padding
padding
:
:
 
 
10
10
px
px
;
;
      
      
border-radius
border-radius
:
:
 
 
5
5
px
px
;
;
      
      
box-shadow
box-shadow
:
:
 
 
0
0
 
 
1
1
px
px
 
 
5
5
px
px
 
 
rgba
rgba
(
(
0
0
,
,
0
0
,
,
0
0
,
,
0.4
0.4
)
)
;
;
    
    
}
}
  
  
</
</
style
style
>
>
</
</
head
head
>
>
<
<
body
body
>
>
  
  
<
<
div
div
 
 
id
id
=
=
"
"
map
map
"
"
>
>
</
</
div
div
>
>
  
  
<
<
script
script
>
>
    
    
// Initialize map
// Initialize map
    
    
var
var
 map 
 map 
=
=
 
 
L
L
.
.
map
map
(
(
'map'
'map'
)
)
.
.
setView
setView
(
(
[
[
1.373333
1.373333
,
,
 
 
32.290275
32.290275
]
]
,
,
 
 
7
7
)
)
;
;
    
    
    
    
// Add base layer
// Add base layer
    
    
L
L
.
.
tileLayer
tileLayer
(
(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
,
,
 
 
{
{
      
      
attribution
attribution
:
:
 
 
'© OpenStreetMap contributors'
'© OpenStreetMap contributors'
    
    
}
}
)
)
.
.
addTo
addTo
(
(
map
map
)
)
;
;
    
    
    
    
// Load GeoTIFF (participants add their export URL)
// Load GeoTIFF (participants add their export URL)
    
    
fetch
fetch
(
(
'YOUR_GEOTIFF_URL'
'YOUR_GEOTIFF_URL'
)
)
      
      
.
.
then
then
(
(
response
response
 
 
=>
=>
 response
 response
.
.
arrayBuffer
arrayBuffer
(
(
)
)
)
)
      
      
.
.
then
then
(
(
arrayBuffer
arrayBuffer
 
 
=>
=>
 
 
{
{
        
        
parseGeoraster
parseGeoraster
(
(
arrayBuffer
arrayBuffer
)
)
.
.
then
then
(
(
georaster
georaster
 
 
=>
=>
 
 
{
{
          
          
const
const
 layer 
 layer 
=
=
 
 
new
new
 
 
GeoRasterLayer
GeoRasterLayer
(
(
{
{
            
            
georaster
georaster
:
:
 georaster
 georaster
,
,
            
            
opacity
opacity
:
:
 
 
0.7
0.7
,
,
            
            
pixelValuesToColorFn
pixelValuesToColorFn
:
:
 
 
values
values
 
 
=>
=>
 
 
{
{
              
              
const
const
 riskColors 
 riskColors 
=
=
 
 
[
[
'#2166AC'
'#2166AC'
,
,
 
 
'#67A9CF'
'#67A9CF'
,
,
 
 
'#F7F7F7'
'#F7F7F7'
,
,
 
 
'#FDDBC7'
'#FDDBC7'
,
,
 
 
'#B2182B'
'#B2182B'
]
]
;
;
              
              
const
const
 value 
 value 
=
=
 values
 values
[
[
0
0
]
]
;
;
              
              
return
return
 value 
 value 
>=
>=
 
 
0
0
 
 
&&
&&
 value 
 value 
<=
<=
 
 
4
4
 
 
?
?
 riskColors
 riskColors
[
[
value
value
]
]
 
 
:
:
 
 
null
null
;
;
            
            
}
}
,
,
            
            
resolution
resolution
:
:
 
 
256
256

Instructor Notes
Common Issues and Solutions
1. GEE Computation Timeout
Solution: Reduce scale parameter, use bestEffort: true, or batch by region
2. ChatGPT Rate Limits
Solution: Have participants work in pairs, prepare backup responses
3. Visualization Not Showing
Solution: Check geometry bounds, ensure clipping is applied
4. Export Taking Too Long
Solution: Reduce resolution or export smaller regions
Assessment Rubric
          
          
}
}
)
)
;
;
          layer
          layer
.
.
addTo
addTo
(
(
map
map
)
)
;
;
          map
          map
.
.
fitBounds
fitBounds
(
(
layer
layer
.
.
getBounds
getBounds
(
(
)
)
)
)
;
;
        
        
}
}
)
)
;
;
      
      
}
}
)
)
;
;
    
    
    
    
// Add legend
// Add legend
    
    
var
var
 legend 
 legend 
=
=
 
 
L
L
.
.
control
control
(
(
{
{
position
position
:
:
 
 
'bottomright'
'bottomright'
}
}
)
)
;
;
    legend
    legend
.
.
onAdd
onAdd
 
 
=
=
 
 
function
function
(
(
map
map
)
)
 
 
{
{
      
      
var
var
 div 
 div 
=
=
 
 
L
L
.
.
DomUtil
DomUtil
.
.
create
create
(
(
'div'
'div'
,
,
 
 
'legend'
'legend'
)
)
;
;
      div
      div
.
.
innerHTML
innerHTML
 
 
=
=
 
 
'<h4>Malaria Risk</h4>'
'<h4>Malaria Risk</h4>'
 
 
+
+
        
        
'<i style="background: #B2182B"></i> Very High<br>'
'<i style="background: #B2182B"></i> Very High<br>'
 
 
+
+
        
        
'<i style="background: #FDDBC7"></i> High<br>'
'<i style="background: #FDDBC7"></i> High<br>'
 
 
+
+
        
        
'<i style="background: #F7F7F7"></i> Moderate<br>'
'<i style="background: #F7F7F7"></i> Moderate<br>'
 
 
+
+
        
        
'<i style="background: #67A9CF"></i> Low<br>'
'<i style="background: #67A9CF"></i> Low<br>'
 
 
+
+
        
        
'<i style="background: #2166AC"></i> Very Low'
'<i style="background: #2166AC"></i> Very Low'
;
;
      
      
return
return
 div
 div
;
;
    
    
}
}
;
;
    legend
    legend
.
.
addTo
addTo
(
(
map
map
)
)
;
;
  
  
</
</
script
script
>
>
</
</
body
body
>
>
</
</
html
html
>
>

ComponentExcellent (3)Good (2)
Needs Improvement
(1)
NDVI/Rainfall
Map
Both layers properly scaled and
visualized
One layer has issuesMultiple errors
ChatGPT Usage
Effective prompting, meaningful
iterations
Basic promptingStruggled with prompts
ClusteringAll 5 clusters with clear interpretation
Clusters created but
unclear
Failed to complete
DocumentationComplete storyboard with citationsPartial documentationMinimal documentation
Additional Resources
GEE Datasets Catalog
ChatGPT Prompting Guide
Malaria Atlas Project - For real prevalence data

## Document Information
- **Source**: PDF Document (28 pages)
- **Category**: tutorial
- **Difficulty**: beginner
- **Relevant Labs**: lab1
- **Topics**: buffer, clustering, crs, gee, gis, google earth engine, malaria, mapping, projection, qgis, raster

## AI Assistant Usage
Ask the chatbot:
- "Explain day 2: gee & ai workshop - instructor guide with code snippets"
- "How does this relate to [specific topic]?"
- "Give me examples from this document"
- "What are the key points about [topic] in this document?"

## Quick References
- buffer
- clustering
- crs
- gee
- gis
- google earth engine
- malaria
- mapping
- projection
- qgis
