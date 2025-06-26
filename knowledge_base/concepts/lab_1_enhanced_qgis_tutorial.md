---
title: "Lab 1 Enhanced QGIS Tutorial"
category: "tutorial"
difficulty: "intermediate"
lab: "lab1"
topics: ["arcgis", "classification", "coordinate system", "crs", "gis", "malaria", "mapping", "projection", "public health", "qgis", "raster", "remote sensing", "shapefile", "spatial analysis", "symbology", "vector"]
source: "C:/Users/cuadrodo/Documents/GitHub/Wookshop_GIS_AI/GIS_AI_062325/documents/Lab_1_Enhanced_QGIS_Tutorial.pdf"
type: "pdf"
pages: 22
processedAt: "2025-06-26T19:29:07.590Z"
---

# Lab 1 Enhanced QGIS Tutorial



 
Enhanced QGIS Malaria Mapping Tutorial: A 
Comprehensive Guide 
1. Introduction to Malaria Mapping and Public Health GIS 
1.1 The Global and Local Impact of Malaria 
Malaria remains one of the most significant public health challenges globally, with 247 million cases 
reported worldwide and particularly severe impact in sub-Saharan Africa 
[1]
. In Uganda specifically, the 
disease accounts for an estimated 12.7 million cases and approximately 17,556 deaths annually, placing 
an enormous burden on the country's healthcare system and economy 
[2][3]
. The disease affects 
approximately 95% of Uganda's population, making it a critical public health priority that requires 
sophisticated monitoring and intervention strategies. 

 
Political map of Uganda showing its administrative regions, major cities, and geographical features. 

Uganda's geographic and climatic conditions create ideal environments for malaria transmission, with 
different regions experiencing varying levels of endemicity based on factors such as altitude, rainfall 
patterns, and temperature 
[1]
. The economic impact of malaria in Uganda is estimated at $500 million 
annually, while the healthcare burden is reflected in malaria cases accounting for 30-50% of all outpatient 
visits to health facilities 
[2]
. Understanding the spatial distribution of malaria is essential for effective 
resource allocation, targeted interventions, and evaluation of control programs 
[1][4]
. 
1.2 The Power of Geographic Information Systems in Disease Mapping 
Geographic Information Systems (GIS) have revolutionized how we understand disease patterns and 
implement public health interventions by allowing visualization, analysis, and interpretation of spatial 
data 
[5][6]
. For malaria control specifically, GIS enables health professionals to identify transmission 
hotspots, direct resources where they're most needed, monitor trends over time, evaluate intervention 
programs, and predict future outbreaks 
[1][7]
. These capabilities transform abstract health statistics into 
actionable intelligence that can guide policy decisions and resource allocation 
[8][6]
. 
The integration of GIS with epidemiological data provides powerful tools for: 
• Identifying geographic patterns of disease transmission 
[4][6]
 
• Correlating environmental factors with disease prevalence 
[1][7]
 
• Monitoring changes in disease distribution over time 
[4][3]
 
• Targeting interventions to high-risk areas 
[7][2]
 
• Evaluating the effectiveness of public health programs 
[4][6]
 
1.3 Uganda's Malaria Context and Surveillance Systems 
Uganda is divided into 15 health administrative regions which are further subdivided into districts, 
creating a geographic framework for health planning and intervention 
[9][10]
. The country experiences 
seasonal malaria transmission patterns, with peak seasons occurring during March-May (long rainy 
season) and October-December (short rainy season), though transmission occurs year-round in many 
areas 
[1]
. The predominant malaria vector is Anopheles gambiae, and the most common parasite species is 
Plasmodium falciparum, which causes the most severe form of the disease 
[2]
. 
National malaria surveillance in Uganda operates through multiple systems, including: 
• Health Management Information System (HMIS) with monthly facility reporting 
[1][9]
 
• Malaria-specific surveillance systems for case-based reporting and outbreak detection 
[1][10]
 

• Community-based surveillance through village health teams 
[9][10]
 
Despite these systems, data quality issues including completeness, timeliness, accuracy, and consistency 
remain significant challenges 
[9][10]
. This tutorial will help you leverage GIS technology to make sense of 
available malaria data, creating visualizations that can drive better decision-making 
[5][7]
. 
2. Understanding GIS and QGIS Fundamentals 
2.1 Key GIS Concepts for Health Mapping 
Before diving into practical mapping, it's important to understand fundamental GIS concepts that will 
inform your work 
[1][5]
. Geographic Information Systems integrate hardware, software, data, and users to 
capture, analyze, manage, and present geographic or spatial data 
[5][8]
. In health applications, GIS helps us 
understand the "where" and "why" of disease patterns, enabling more effective public health responses 
[8][6]
. 
Key GIS terminology relevant to health mapping includes: 
• Vector Data: Represents features as points (health facilities), lines (roads), or polygons (districts) 
[1][11]
 
• Raster Data: Grid-based data representing continuous surfaces like population density or elevation 
[1][11]
 
• Attribute Table: Database containing information about spatial features, such as disease counts 
[1][5]
 
• Choropleth Map: Areas colored according to statistical values, commonly used for disease rates 
[1][12]
 
• Spatial Join: Combining datasets based on spatial relationships 
[1][13]
 
2.2 Coordinate Reference Systems for Uganda 
A coordinate reference system (CRS) defines how the curved surface of the Earth is represented on a flat 
map 
[1][14]
. Choosing the appropriate CRS is crucial for accurate distance measurements, area calculations, 
and spatial analysis in health applications 
[1][15]
. For mapping in Uganda, several coordinate systems are 
commonly used, each with specific applications 
[14][16]
. 

 
Coordinate Reference Systems for Uganda GIS Projects 
When working with Uganda data, you'll typically encounter these coordinate systems: 
• WGS 84 (EPSG:4326): The global standard used by GPS systems, ideal for general mapping 
[16][17]
 
• UTM Zone 35N (EPSG:32635): Provides accurate measurements for western Uganda 
[14][17]
 
• UTM Zone 36N (EPSG:32636): Best for eastern Uganda projects requiring precise measurements 
[14][17]
 
• Arc 1960: Legacy system used in historical maps and datasets 
[16][15]
 
Selecting the appropriate CRS depends on your specific application, area of interest, and the need for 
distance or area measurements 
[14][17]
. For most health mapping applications in Uganda, UTM Zone 36N is 
recommended as it covers the majority of the country and provides good metric accuracy 
[14][17]
. 
2.3 Understanding the QGIS Interface 
QGIS is a powerful, free, and open-source geographic information system that allows you to create, edit, 
visualize, analyze, and publish geospatial information 
[18][19]
. Before beginning your malaria mapping 
project, familiarize yourself with the main components of the QGIS interface 
[19][20]
. 

 
QGIS interface showing the 'Add ArcGIS REST Server Layer' option within the 'Layer' menu. 
The main elements of the QGIS interface include: 
• Menu Bar: Contains dropdown menus for all QGIS functions 
[19][20]
 
• Toolbars: Provides quick access to commonly used tools 
[19][20]
 
• Browser Panel: Helps you navigate files and databases 
[19][20]
 
• Layers Panel: Shows all data layers in your project 
[19][21]
 
• Map Canvas: The main area where your map is displayed 
[19][20]
 
• Status Bar: Shows coordinates, scale, and projection information 
[19][20]
 
You can customize the interface by showing/hiding panels and toolbars according to your needs 
[19][21]
. 
For health mapping projects, you may want to ensure that the Processing Toolbox is visible, as it contains 
analytical tools useful for spatial epidemiology 
[13][21]
. 
3. Step-by-Step QGIS Malaria Mapping Tutorial 
3.1 Project Setup and Data Preparation 

Step 1: Launch QGIS and Create a New Project 
1. Open QGIS from your applications menu or desktop shortcut 
[1][19]
. 
2. Click on "Project" → "New" to create a new project 
[1][22]
. 
3. Immediately save your project by clicking "Project" → "Save As" and name it 
"Uganda_Malaria_Mapping.qgz" 
[1][22]
. 
4. Choose an appropriate folder where you'll store all project files 
[1][22]
. 
Step 2: Set Up the Coordinate Reference System 
1. Go to "Project" → "Properties" → "CRS" 
[1][14]
. 
2. In the filter box, search for "32636" to find the WGS 84 / UTM Zone 36N projection 
[1][16]
. 
3. Select this CRS and click "Apply" then "OK" 
[1][14]
. 
4. Verify the CRS is set correctly by checking the bottom-right corner of the QGIS window 
[1][19]
. 
Selecting the appropriate CRS is crucial as it affects all distance measurements and spatial analyses you'll 
perform 
[14][17]
. For Uganda, UTM Zone 36N provides accurate measurements for most of the country 
[14][16]
. 
3.2 Loading Spatial Data 
Step 3: Add Uganda District Boundaries 
1. Click on "Layer" → "Data Source Manager" or press Ctrl+L 
[1][18]
. 
2. In the Data Source Manager, select "Vector" from the left panel 
[1][18]
. 
3. For "Source Type," select "File" 
[1][18]
. 
4. Click the "..." button to browse for your Uganda_districts shapefile or geopackage 
[1][18]
. 
5. Click "Add" and then "Close" 
[1][18]
. 

 
Adding a vector layer from a local GeoJSON file in QGIS using the Data Source Manager. 
The district boundaries layer is the foundation of your malaria map, providing the geographic framework 
for visualizing health data 
[1][23]
. Once loaded, the districts should appear in the map canvas and be listed 
in the Layers panel 
[1][19]
. 
Step 4: Examine the District Boundaries Attribute Table 
1. Right-click on the Uganda_districts layer in the Layers panel and select "Open Attribute Table" 
[1][13]
. 
2. Examine the table to familiarize yourself with the available attributes 
[1][13]
. 
3. Take note of the field containing district names (likely "DIST_NAME" or similar) as this will be used 
for joining with health data 
[1][13]
. 
4. Close the attribute table when finished 
[1][13]
. 
Understanding the structure of your spatial data is essential before attempting to join it with health 
statistics 
[1][13]
. Make sure the district names are consistent and free of typographical errors that might 
prevent proper joining 
[1][13]
. 

3.3 Importing and Joining Health Data 
Step 5: Import Malaria Prevalence Data 
1. Click on "Layer" → "Add Layer" → "Add Delimited Text Layer" 
[1][18]
. 
2. Browse to your malaria_prevalence.csv file 
[1][18]
. 
3. Ensure "CSV (comma separated values)" is selected as the file format 
[1][18]
. 
4. Under "Geometry Definition," select "No geometry (attribute table only)" 
[1][18]
. 
5. Click "Add" and then "Close" 
[1][18]
. 
The CSV file should contain malaria prevalence data by district, with at least one field matching the 
district names in your spatial data 
[1][18]
. This tabular data will be joined to the geographic features to 
create your malaria map 
[1][13]
. 
Step 6: Join Malaria Data to District Boundaries 
1. Right-click on the Uganda_districts layer and select "Properties" 
[1][13]
. 
2. Go to the "Joins" tab and click the "+" button 
[1][13]
. 
3. In the "Add Vector Join" dialog: 
o Set "Join layer" to your malaria prevalence CSV 
[1][13]
 
o Set "Join field" to the district name field in your CSV 
[1][13]
 
o Set "Target field" to the district name field in your shapefile 
[1][13]
 
o Optionally check "Custom field name prefix" and leave it blank to avoid field name prefixes 
[1][13]
 
4. Click "OK" and then "Apply" 
[1][13]
. 
5. Verify the join by opening the attribute table of the districts layer, which should now include the 
malaria data fields 
[1][13]
. 
A successful join combines the geographic information from your districts layer with the health statistics 
from your CSV file 
[1][13]
. If some districts are not joining properly, check for inconsistencies in spelling or 
formatting between the two datasets 
[1][13]
. 
3.4 Creating a Choropleth Map with Graduated Symbology 
Step 7: Apply Graduated Symbology to Visualize Malaria Prevalence 

1. Right-click on the Uganda_districts layer and select "Properties" 
[1][12]
. 
2. Go to the "Symbology" tab 
[1][12]
. 
3. From the dropdown at the top, change from "Single Symbol" to "Graduated" 
[1][12]
. 
4. For "Value," select your malaria prevalence field 
[1][12]
. 
5. Choose an appropriate color ramp (e.g., YlOrRd - yellow to orange to red) 
[1][12]
. 
6. For "Mode," select "Natural Breaks (Jenks)" 
[1][12]
. 
7. Set the number of classes to 5 
[1][12]
. 
8. Click "Classify" to generate the class breaks 
[1][12]
. 
9. Optionally, double-click on each class to adjust the ranges or labels 
[1][12]
. 
10. Click "Apply" and "OK" 
[1][12]
. 

 
QGIS interface showing a Uganda malaria mapping project with graduated symbology dialog 
The graduated symbology visually represents the different levels of malaria prevalence across districts, 
making patterns easier to identify 
[1][12]
. Yellow typically represents lower values while darker reds 
indicate higher prevalence areas 
[1][12]
. 
Step 8: Customize the Classification Method 
1. Return to the layer properties and Symbology tab 
[1][24]
. 
2. Experiment with different classification methods: 

o Natural Breaks: Identifies inherent groupings in the data 
[1][24]
 
o Quantiles: Creates classes with equal numbers of features 
[1][24]
 
o Equal Interval: Creates equal-sized ranges 
[1][24]
 
o Standard Deviation: Based on deviation from the mean 
[1][24]
 
3. Choose the method that best represents your data patterns 
[1][24]
. 
 
Comparison of GIS Data Classification Methods for Health Mapping 
Different classification methods can dramatically change how your data is visualized and interpreted 
[1][24]
. Natural Breaks is often ideal for disease data as it identifies natural clusters, while Quantiles ensures 
each color is equally represented on the map 
[1][24]
. 
Step 9: Customize the Color Ramp 
1. In the Symbology tab, click on the color ramp dropdown 
[1][12]
. 
2. Select "Create New Color Ramp" 
[1][12]
. 
3. Choose "cpt-city" for access to a wide range of professionally designed color schemes 
[1][12]
. 

4. Browse categories like "Health" or "Sequential" to find appropriate gradients for disease mapping 
[1][12]
. 
5. Select a color scheme and click "OK" 
[1][12]
. 
 
The QGIS color ramp selection dialog, displaying various color palettes categorized by theme for map 
symbology. 
Color choice significantly impacts how audiences interpret your map 
[1][12]
. For disease mapping, 
sequential color schemes (light to dark) effectively show intensity, while diverging schemes can highlight 
areas above or below a significant threshold 
[1][12]
. 
3.5 Creating a Professional Map Layout 
Step 10: Create a New Print Layout 

1. Click on "Project" → "New Print Layout" 
[1][22]
. 
2. Enter a name for your layout (e.g., "Uganda Malaria Map") and click "OK" 
[1][22]
. 
3. In the print layout window, click on "Add Item" → "Add Map" from the menu 
[1][22]
. 
4. Click and drag on the canvas to draw a rectangle where your map will appear 
[1][22]
. 
The print layout is where you transform your working map into a professional, presentation-ready 
product by adding essential cartographic elements 
[1][22]
. Think of the layout as the frame that will 
showcase your analytical work 
[1][22]
. 
Step 11: Add Essential Map Elements 
1. Add a title: 
o Click "Add Item" → "Add Label" 
[1][22]
 
o Draw a box at the top of your layout 
[1][22]
 
o In the Item Properties panel, enter "Uganda Malaria Prevalence Map" 
[1][22]
 
o Format the text to make it prominent (larger font size, bold) 
[1][22]
 
2. Add a legend: 
o Click "Add Item" → "Add Legend" 
[1][22]
 
o Draw a box on your layout 
[1][22]
 
o In Item Properties, customize the legend title and appearance 
[1][22]
 
o Check only the relevant layers to include 
[1][22]
 
3. Add a north arrow: 
o Click "Add Item" → "Add North Arrow" 
[1][22]
 
o Draw a small box in a corner of your layout 
[1][22]
 
o In Item Properties, choose an appropriate north arrow style 
[1][22]
 
4. Add a scale bar: 
o Click "Add Item" → "Add Scale Bar" 
[1][22]
 
o Draw a box on your layout 
[1][22]
 
o In Item Properties, set the units and segments to appropriate values 
[1][22]
 
5. Add data sources and date: 

o Click "Add Item" → "Add Label" 
[1][22]
 
o Draw a box at the bottom of your layout 
[1][22]
 
o Enter source information and map creation date 
[1][22]
 
 
Illustration of common map elements, including the title, north arrow, scale bar, legend, and map body. 
Each map element serves a specific purpose in helping readers interpret your visualization 
[1][22]
. The title 
identifies the subject, the legend explains the symbology, the north arrow provides orientation, the scale 
bar communicates distances, and the data sources establish credibility 
[1][5]
. 

 
QGIS Print Layout window showing a completed Uganda malaria map with legend, title, and map elements 
3.6 Exporting Your Map 
Step 12: Export the Map 
1. To export as an image: 
o Click "Layout" → "Export as Image" 
[1][22]
 
o Choose resolution (300 dpi recommended for printing) 
[1][22]
 
o Select a folder and filename 
[1][22]
 
o Click "Save" 
[1][22]
 
2. To export as a PDF: 
o Click "Layout" → "Export as PDF" 
[1][22]
 
o Adjust settings as needed 
[1][22]
 
o Select a folder and filename 
[1][22]
 

o Click "Save" 
[1][22]
 
3. To print directly: 
o Click "Layout" → "Print" 
[1][22]
 
o Configure your printer settings 
[1][22]
 
o Click "Print" 
[1][22]
 
The export resolution and format should match your intended use 
[1][22]
. Higher resolution (300 dpi) is 
suitable for printed materials, while lower resolution (72-150 dpi) is appropriate for digital display or 
presentations 
[1][22]
. 
4. Advanced Analysis Techniques for Malaria Mapping 
4.1 Effective Use of Classification Methods 
The choice of classification method significantly impacts how your audience interprets the mapped data 
[1][24]
. For malaria mapping in Uganda, consider these guidelines for choosing the most appropriate 
method 
[1][24]
: 
• Natural Breaks (Jenks): Ideal for identifying natural clusters in malaria prevalence, highlighting 
true patterns in the data 
[24][6]
. This method is particularly useful when looking for hotspots or when 
data is unevenly distributed 
[1][24]
. 
• Quantiles: Best when you need to rank districts from highest to lowest burden, ensuring each class 
contains an equal number of districts 
[1][24]
. This approach is useful for prioritization and comparing 
relative positions 
[1][24]
. 
• Equal Interval: Appropriate when comparing data across time periods or when working with 
standardized rates 
[1][24]
. Creates consistent ranges that are easy to interpret but may create empty 
classes if data is skewed 
[1][24]
. 
• Standard Deviation: Useful for research applications where showing statistical significance is 
important 
[1][24]
. Works best with normally distributed data and helps identify outlier districts 
[1][24]
. 

 
Simulated Malaria Prevalence Map of Uganda by District (cases per 1,000 population) 
4.2 Integrating Other Health and Environmental Data 
Malaria transmission is influenced by multiple factors beyond case counts 
[1][7]
. To create more 
comprehensive analyses, consider integrating: 
• Environmental data: Temperature, rainfall, elevation, and vegetation index can help explain 
transmission patterns 
[1][7]
 
• Population data: Helps calculate incidence rates and identify vulnerable populations 
[1][7]
 
• Health facility data: Shows access to care and treatment availability 
[1][7]
 
• Intervention coverage: Bed net distribution, indoor residual spraying, and other control measures 
[1][7]
 
• Socioeconomic indicators: Poverty rates, housing quality, and education levels that may influence 
risk 
[1][7]
 

These additional layers can be imported using the same methods as the district boundaries and joined 
spatially or by attribute 
[1][13]
. The resulting multi-layer analysis provides a more complete picture of 
malaria dynamics 
[1][7]
. 
4.3 Temporal Analysis of Malaria Patterns 
Malaria transmission in Uganda follows seasonal patterns, with peaks during the rainy seasons (March-
May and October-December) 
[1]
. To analyze temporal trends: 
1. Import time-series malaria data with month or season information 
[1][7]
 
2. Use the "Temporal Controller" panel in QGIS to animate changes over time 
[1][19]
 
3. Create multiple maps for different time periods in your print layout 
[1][22]
 
4. Calculate and map percent change between time periods to identify trends 
[1][13]
 
Temporal analysis helps identify seasonality, evaluate interventions, and detect unusual outbreaks that 
require investigation 
[1][7]
. For Uganda, comparing dry and rainy season patterns can inform timing of 
interventions 
[1]
. 
5. Applications and Real-World Use Cases 
5.1 Supporting Public Health Decision Making 
GIS-based malaria mapping directly supports public health decisions in multiple ways 
[1][7]
: 
• Resource allocation: Directing limited resources to highest-burden areas 
[1][7]
 
• Intervention targeting: Deploying bed nets, indoor residual spraying, and case management where 
most needed 
[1][7]
 
• Health facility planning: Identifying gaps in healthcare access in high-burden areas 
[1][7]
 
• Program evaluation: Measuring changes in spatial patterns following interventions 
[1][7]
 
• Outbreak response: Rapidly identifying and responding to unusual increases in cases 
[1][7]
 
Maps communicate complex spatial information more effectively than tables or text, making them 
powerful tools for advocating for resources and explaining strategies to stakeholders 
[1][8]
. 
5.2 Recommendations for Effective Health Mapping 
When creating malaria maps for Uganda's health sector, follow these best practices 
[1][8]
: 

• Know your audience: Create different versions for policymakers, health professionals, and the 
public 
[1][8]
 
• Choose appropriate metrics: Consider using rates (cases per 1,000 population) rather than raw 
counts to account for population differences 
[1][7]
 
• Include context: Complement disease maps with relevant boundaries, major cities, and key 
geographic features 
[1][8]
 
• Mind your colors: Ensure maps are color-blind friendly and consider cultural associations with 
colors 
[1][8]
 
• Maintain data integrity: Clearly communicate data limitations and uncertainty 
[1][8]
 
• Provide interpretation: Include brief analysis points highlighting key patterns 
[1][8]
 
Effective health maps balance technical accuracy with clarity and ease of interpretation 
[1][8]
. The most 
successful maps prompt action and inform decisions rather than merely displaying data 
[1][8]
. 
6. Conclusion and Next Steps 
This enhanced QGIS tutorial provides a comprehensive foundation for creating professional malaria maps 
using Uganda as a case study 
[1][18]
. The skills developed here—from data management to visualization 
and layout design—are transferable to mapping other diseases and public health challenges 
[1][8]
. 
To continue developing your health GIS skills: 
• Practice with different datasets and disease indicators 
[1][18]
 
• Learn advanced spatial analysis techniques like hotspot detection 
[1][13]
 
• Explore time-series visualization methods 
[1][7]
 
• Integrate remote sensing data for environmental analysis 
[1][7]
 
• Develop interactive web maps to share your findings 
[1][8]
 
By mastering these techniques, you contribute to the growing field of spatial epidemiology and support 
evidence-based public health decision-making in Uganda and beyond 
[1][6]
. Geographic information 
systems have become indispensable tools in the fight against malaria and other infectious diseases, 
providing clarity and direction to complex health challenges 
[1][6]
. 
⁂ 
 

1. Lab_1_Malaria.pdf                                                                                                                                                                         
2. https://targetmalaria.org/virtual-press-room/uganda-virtual-press-kit/     
3. https://pubmed.ncbi.nlm.nih.gov/37208120/   
4. https://gh.bmj.com/content/8/5/e011137     
5. https://rr-africa.woah.org/app/uploads/2023/09/04-john_up_qgis.pdf       
6. https://lib.guides.umd.edu/spatialepi         
7. https://learn.arcgis.com/en/projects/monitor-malaria-epidemics/                       
8. https://www.govpilot.com/blog/health-department-gis-map               
9. https://uniph.go.ug/timeliness-and-completeness-of-monthly-disease-surveillance-data-reporting-in-uganda-
2020─2021/     
10. https://uniph.go.ug/wp-content/uploads/2022/03/Weekly-surveillance-data-reporting-on-epidemic-prone-
diseases-Uganda-2020–2021.pdf     
11. https://www.maya-climate.com/post/gis-data-formats   
12. https://www.youtube.com/watch?v=POi7ei3pLPo                     
13. https://docs.qgis.org/latest/en/docs/training_manual/vector_analysis/basic_analysis.html                       
14. https://gis.stackexchange.com/questions/381088/choosing-projected-crs-for-uganda           
15. https://www.gim-international.com/content/article/establishing-an-accurate-geodetic-reference-network-for-
uganda   
16. https://tool-online.com/index/systemes-coordonnees/uganda.html      
17. https://www.expertgps.com/convert-coordinates/uganda.asp       
18. https://etch.lstmed.ac.uk/sites/default/files/centre/gives/gives1-3day-malaria-day1.pdf               
19. https://cartinal.leventhalmap.org/guides/get-started-qgis/interface.html              
20. https://www.youtube.com/watch?v=6lCTPJHo2eQ       
21. https://centerforspatialresearch.github.io/methods-in-spatial-research-sp2020/tutorials/01_organizing-viewing-
spatial-data-in-qgis.html    
22. https://docs.qgis.org/latest/en/docs/user_manual/print_composer/overview_composer.html                                          

23. https://www.reddit.com/r/QGIS/comments/1hk436l/how_do_i_create_a_qgis_map_on_vector_disease/  
24. https://community.environicsanalytics.com/hc/en-us/articles/13299751591437-What-are-the-Mapping-
Classification-Methods                   

## Document Information
- **Source**: PDF Document (22 pages)
- **Category**: tutorial
- **Difficulty**: intermediate
- **Relevant Labs**: lab1
- **Topics**: arcgis, classification, coordinate system, crs, gis, malaria, mapping, projection, public health, qgis, raster, remote sensing, shapefile, spatial analysis, symbology, vector

## AI Assistant Usage
Ask the chatbot:
- "Explain lab 1 enhanced qgis tutorial"
- "How does this relate to [specific topic]?"
- "Give me examples from this document"
- "What are the key points about [topic] in this document?"

## Quick References
- arcgis
- classification
- coordinate system
- crs
- gis
- malaria
- mapping
- projection
- public health
- qgis
