<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# Enhanced QGIS Health Facility Access Analysis Tutorial: A Comprehensive Guide to Spatial Accessibility and Public Health Equity

## 1. Introduction to Healthcare Accessibility and Spatial Analysis

### 1.1 The Critical Importance of Healthcare Accessibility

Healthcare accessibility represents one of the most fundamental determinants of health outcomes and a cornerstone of health equity [^1]. In Uganda, where approximately 86.6% of the population lives in rural areas, geographic barriers to healthcare access create substantial disparities in health outcomes and contribute to preventable morbidity and mortality [^2]. Spatial accessibility, defined as the ease with which individuals can reach healthcare services from their location, encompasses both physical distance and the availability of transportation infrastructure [^3].

![A newly opened clinic building with a green roof and yellow walls, surrounded by people in rural Eastern Uganda.](https://pplx-res.cloudinary.com/image/upload/v1750430798/pplx_project_search_images/60692332a85f77c8407aabce43599312244e2201.jpg)

A newly opened clinic building with a green roof and yellow walls, surrounded by people in rural Eastern Uganda.

The relationship between geographic access and health outcomes is particularly pronounced for time-sensitive conditions like malaria, where delayed treatment significantly increases the risk of severe complications and death [^4]. Research demonstrates that mortality in children under 5 years doubles when healthcare facilities are more than a 4-hour walk away, emphasizing the life-or-death importance of spatial accessibility analysis [^5]. In Uganda's context, where malaria accounts for 30-50% of all outpatient visits, understanding and improving spatial access patterns becomes essential for reducing disease burden and achieving health equity [^6].

### 1.2 Understanding Uganda's Health System Hierarchy

Uganda's decentralized health system operates through a well-defined hierarchy designed to provide comprehensive coverage across diverse geographic and demographic contexts [^7]. The system consists of seven levels, each serving specific population catchments and providing defined service packages [^8]. At the community level, Village Health Teams (Level I) serve approximately 1,000-2,000 people and provide basic health education and referrals [^9]. Health Centre II facilities, intended to serve 5,000 people, offer outpatient services and are typically staffed by enrolled nurses [^9].

The intermediate levels include Health Centre III facilities serving 20,000-40,000 people with basic inpatient services and laboratory capabilities, and Health Centre IV facilities serving 100,000-200,000 people with surgical capacity and specialized care [^10]. District hospitals provide comprehensive services for populations of 500,000-1,000,000, while regional referral hospitals and national referral hospitals offer increasingly specialized care [^9]. This hierarchical structure creates the spatial framework within which accessibility analysis becomes crucial for health planning and resource allocation.

### 1.3 The Science of Spatial Accessibility Measurement

Spatial accessibility measurement in healthcare has evolved from simple distance-based metrics to sophisticated models that account for multiple factors influencing access [^11]. Traditional approaches using Euclidean (straight-line) distance provide useful approximations but fail to capture the realities of road networks, topographic barriers, and transportation availability [^12]. More advanced methods incorporate travel time, facility capacity, population demand, and competing destinations to create realistic accessibility measures [^13].

![Geospatial analysis showing healthcare accessibility under walking-only and motorized plus walking scenarios, illustrating population coverage and facility catchments.](https://pplx-res.cloudinary.com/image/upload/v1750430799/pplx_project_search_images/919feb4713c591a4321b23db4e21f0b70c5c285c.jpg)

Geospatial analysis showing healthcare accessibility under walking-only and motorized plus walking scenarios, illustrating population coverage and facility catchments.

The choice of distance threshold for accessibility analysis significantly impacts policy recommendations and resource allocation decisions [^12]. International guidelines suggest that 1-2 hours of travel time represents acceptable access to health services, though this varies by service level and urgency [^12]. For Uganda's context, where walking remains the primary mode of transportation for many rural residents, the 10-kilometer buffer used in this tutorial represents approximately 2-3 hours of walking time, aligning with WHO recommendations for basic health service access [^14].

## 2. Theoretical Foundations of Buffer Analysis and Spatial Queries

### 2.1 Buffer Analysis in Health Geography

Buffer analysis represents one of the most fundamental techniques in health geography, creating zones of specified distance around geographic features to analyze spatial relationships and accessibility patterns [^15]. In healthcare applications, buffers around health facilities represent service catchment areas, helping identify populations within reasonable access distances and highlighting underserved areas requiring intervention [^16]. The technique assumes that people are more likely to access services within the buffer zone, though actual utilization patterns may vary based on factors including service quality, transportation availability, and cultural preferences [^11].

![Healthcare utilization decreases exponentially with distance, supporting 10km buffer analysis](https://pplx-res.cloudinary.com/image/upload/v1750431378/pplx_code_interpreter/258f75a3_pibeey.jpg)

Healthcare utilization decreases exponentially with distance, supporting 10km buffer analysis

The distance decay effect, fundamental to understanding healthcare utilization patterns, demonstrates that healthcare use decreases exponentially with distance from facilities [^11]. This relationship justifies the use of buffer analysis and provides empirical support for distance-based accessibility thresholds. Research from sub-Saharan Africa consistently shows dramatic decreases in facility utilization beyond 5-10 kilometers, supporting the choice of 10-kilometer buffers for identifying adequately served populations [^12].

### 2.2 Spatial Query Theory and Applications

Spatial queries enable analysts to identify complex geographic relationships between different layers of spatial data, moving beyond simple visual analysis to quantitative assessment of accessibility patterns [^17]. The fundamental spatial relationships used in accessibility analysis include intersects (overlapping areas), contains (complete containment), and disjoint (no overlap), each providing different insights into access patterns [^17]. For healthcare accessibility, the "do not intersect" relationship identifies populations completely outside service catchment areas, representing the most underserved areas requiring immediate attention [^18].

![QGIS spatial query interface demonstrating selection of regions that contain airports.](https://pplx-res.cloudinary.com/image/upload/v1750430798/pplx_project_search_images/25286b713d355d781f37d84e27a048f38cf00a94.jpg)

QGIS spatial query interface demonstrating selection of regions that contain airports.

The power of spatial queries lies in their ability to combine multiple criteria, enabling analysts to identify areas with compound disadvantages such as high disease burden and poor access [^17]. This analytical capability transforms simple mapping into sophisticated equity analysis, revealing hidden patterns of health inequality and guiding evidence-based intervention strategies [^3].

### 2.3 Coordinate Reference Systems for Uganda

Accurate spatial analysis requires appropriate coordinate reference systems (CRS) that minimize distortion and enable precise distance measurements [^19]. For Uganda, several coordinate systems are commonly used, each with specific applications and advantages [^20]. The WGS 84 geographic coordinate system (EPSG:4326) provides global compatibility and GPS integration but lacks the metric properties necessary for accurate distance calculations [^21].

For analytical work requiring precise distance measurements, projected coordinate systems offer superior accuracy [^20]. UTM Zone 36N (EPSG:32636) provides excellent coverage for most of Uganda, offering meter-based measurements essential for buffer analysis and distance calculations [^21]. This coordinate system covers the area between 30°E and 36°E in the northern hemisphere, encompassing Uganda's entire territory with minimal distortion [^22].

## 3. Comprehensive Step-by-Step QGIS Tutorial

### 3.1 Project Setup and Initial Configuration

#### Step 1: Create and Configure Your QGIS Project

Begin by launching QGIS and creating a new project specifically for healthcare accessibility analysis [^23]. Navigate to Project → New to start fresh, then immediately save your project using Project → Save As with the filename "Uganda_Health_Facility_Access_Analysis.qgz" [^23]. Choose a dedicated folder structure that will accommodate all project files, data inputs, and analytical outputs.

Configure the project's coordinate reference system by accessing Project → Properties → CRS [^23]. Search for "32636" to locate WGS 84 / UTM Zone 36N and select this projection for accurate metric measurements throughout Uganda [^21]. Verify the CRS selection by checking the coordinate display in the bottom-right corner of the QGIS interface, which should now show coordinates in meters rather than decimal degrees.

#### Step 2: Organize Your Data and Workspace

Effective spatial analysis requires well-organized data management and an optimized workspace [^23]. Create a folder structure within your project directory including subfolders for "Raw_Data," "Processed_Data," "Maps," and "Analysis_Results." This organization facilitates data management and ensures reproducible analysis workflows.

Customize the QGIS interface for healthcare analysis by ensuring the Processing Toolbox is visible (View → Panels → Processing Toolbox) as this contains essential tools for spatial analysis [^17]. Also enable the Browser Panel to facilitate data navigation and the Layers Panel to manage multiple data layers effectively [^23].

### 3.2 Loading and Converting Spatial Data

#### Step 3: Import Uganda District Boundaries

Load the foundational geographic framework by importing Uganda district boundaries, which will serve as the spatial units for accessibility analysis [^10]. Use Layer → Add Layer → Add Vector Layer to import the Uganda_districts.gpkg file, ensuring the layer loads correctly in the map canvas. These administrative boundaries provide the geographic framework for calculating population-level accessibility metrics and identifying districts requiring intervention.

Examine the attribute table by right-clicking the districts layer and selecting "Open Attribute Table" to familiarize yourself with available fields [^24]. Key attributes should include district names, population data, and any existing health indicators that will be joined with accessibility metrics. Note the field containing district names as this will be crucial for data joining operations.

#### Step 4: Convert Health Facility Coordinates to Spatial Data

Transform the health facility coordinate data from tabular format to spatial points using QGIS's delimited text import functionality [^24]. Navigate to Layer → Add Layer → Add Delimited Text Layer and select the health_facilities_uganda.csv file. Configure the import settings carefully: set File format to "CSV," identify the X field as "Longitude" and Y field as "Latitude," and set the Geometry CRS to EPSG:4326 (WGS 84) since the coordinates are in decimal degrees [^24].

Click "Add" to create the temporary point layer, then immediately convert it to a permanent shapefile to ensure data persistence [^24]. Right-click the temporary layer, select Export → Save Features As, choose ESRI Shapefile format, and save as "health_facilities_uganda.shp" with CRS set to EPSG:32636 for consistency with your project [^24]. Remove the temporary CSV layer and work exclusively with the permanent shapefile for all subsequent analysis.

#### Step 5: Import and Join Health Indicator Data

Import additional health data that will be used for compound analysis of access and health outcomes [^24]. Use Layer → Add Layer → Add Delimited Text Layer to import malaria_prevalence_uganda.csv, selecting "No geometry (attribute table only)" since this contains only statistical data without coordinates [^24].

Create a table join to combine district boundaries with health indicator data, enabling analysis that considers both accessibility and health outcomes [^24]. Right-click the districts layer, select Properties → Joins, and click the "+" button to add a new join. Configure the join by setting Join layer to the malaria prevalence data, selecting appropriate field names for both Join field and Target field (typically district names), and enabling the join [^24].

### 3.3 Visualizing Health Facility Distribution

#### Step 6: Create Effective Point Symbology

Develop clear visualization of health facility locations using appropriate symbology that communicates facility types and service levels [^25]. Right-click the health facilities layer and select Properties → Symbology to access styling options. Choose "Categorized" symbology and set the Value to "Facility_Type" to create distinct symbols for different facility levels [^25].

Configure symbols that effectively communicate the healthcare hierarchy: use large red crosses for District Hospitals, medium blue plus signs for Health Centre IV, smaller green circles for Health Centre III, and small orange dots for Health Centre II [^25]. Ensure symbol sizes are large enough for clear visibility (3-5 mm) while maintaining map clarity and avoiding overlap in dense areas.

#### Step 7: Assess Initial Spatial Patterns

Before conducting formal analysis, visually assess the spatial distribution of health facilities to identify obvious patterns and potential accessibility gaps [^25]. Look for clustering around urban centers, sparse coverage in rural areas, and geographic barriers that might influence access patterns. This preliminary assessment provides context for subsequent quantitative analysis and helps identify areas of particular concern.

Use the map canvas navigation tools to systematically examine different regions of Uganda, noting the relationship between facility distribution and population centers [^23]. Areas with obvious gaps in facility coverage or regions where facilities appear clustered while large areas remain unserved should be noted for particular attention in the accessibility analysis.

### 3.4 Performing Buffer Analysis

#### Step 8: Create Service Catchment Buffers

Generate 10-kilometer buffer zones around each health facility to represent reasonable access distances for the Ugandan context [^15]. Access the buffer tool through Vector → Geoprocessing Tools → Buffer, and configure the analysis parameters carefully. Set the Input layer to your health facilities shapefile, specify Distance as 10,000 meters (10 km), and maintain 20 segments for smooth circular buffers [^15].

![GIS map displaying injury locations and various playground buffer zones in a city.](https://pplx-res.cloudinary.com/image/upload/v1750430798/pplx_project_search_images/3b37fe0e458b0b76b7629950991487fd057c3f94.jpg)

GIS map displaying injury locations and various playground buffer zones in a city.

Save the output as "facility_buffers_10km.shp" in your processed data folder for future reference [^15]. The resulting buffer zones represent areas within reasonable walking distance of health facilities, accounting for the reality that most rural Ugandans rely on walking for transportation [^26]. The 10-kilometer distance represents approximately 2-3 hours of walking time, aligning with international recommendations for basic health service access [^14].

#### Step 9: Analyze Buffer Coverage Patterns

Examine the resulting buffer pattern to understand spatial coverage and identify areas with overlapping service areas versus gaps in coverage [^15]. Areas with multiple overlapping buffers indicate well-served populations with choice of facilities, while gaps between buffers reveal underserved areas requiring attention. Use different colors for the buffer symbology (transparent fill with distinct outline) to clearly visualize overlapping areas.

![GIS map illustrating distance-based service areas and origin-destination connections for COVID-19 referral hospitals.](https://pplx-res.cloudinary.com/image/upload/v1750173397/pplx_project_search_images/b03b59ae90936a15d0d9742d410ca7ab200f0895.jpg)

GIS map illustrating distance-based service areas and origin-destination connections for COVID-19 referral hospitals.

Calculate basic coverage statistics by examining the total area covered by buffers relative to Uganda's total area, providing a preliminary metric of national accessibility [^15]. Areas of particular concern include border regions, mountainous areas, and sparsely populated regions where geographic barriers compound distance challenges.

### 3.5 Conducting Spatial Query Analysis

#### Step 10: Identify Underserved Districts

Use spatial queries to systematically identify districts with inadequate facility coverage [^17]. Navigate to Vector → Research Tools → Select by Location to access the spatial query interface. Configure the query to "Select features from" the Uganda districts layer "where the features" "do not intersect" "by comparing to the features from" the facility buffers layer [^17].

![QGIS interface with the "Extract by location" tool highlighted in the Processing Toolbox for spatial queries.](https://pplx-res.cloudinary.com/image/upload/v1750430798/pplx_project_search_images/bf91c737b84ff4f467bbdc94d1090daa2b8512dd.jpg)

QGIS interface with the "Extract by location" tool highlighted in the Processing Toolbox for spatial queries.

This query identifies districts that have no overlap with any facility buffer zones, indicating areas completely outside the 10-kilometer service areas of all health facilities [^18]. These districts represent the most underserved areas from a spatial accessibility perspective and should receive priority for health system strengthening interventions.

#### Step 11: Combine Spatial and Attribute Queries

Enhance the analysis by combining spatial accessibility criteria with health outcome indicators to identify areas with compound disadvantages [^17]. With districts still selected from the previous spatial query, access the attribute table and use the "Select by Expression" tool to further refine the selection [^18].

Create an expression to identify districts with both poor access and high disease burden: "Malaria_Prevalence_Percent" > 20 AND current selection [^18]. Set the selection mode to "Intersect current selection" to find districts meeting both criteria. This identifies areas with the greatest need for intervention, combining high disease burden with poor facility access.

#### Step 12: Export and Save Analysis Results

Save the results of your compound analysis for further use and reporting [^17]. Right-click the districts layer and select Export → Save Selected Features As to create a new layer containing only the high-priority districts. Save as "high_priority_districts.gpkg" to preserve all attribute information for subsequent analysis and reporting [^17].

This layer represents districts requiring immediate attention for health system strengthening, combining evidence of both accessibility gaps and health needs [^27]. These results form the foundation for evidence-based policy recommendations and resource allocation decisions.

### 3.6 Creating Professional Map Layouts

#### Step 13: Design Comprehensive Map Layout

Transform your analytical results into professional presentation materials using QGIS's print layout functionality [^23]. Create a new print layout (Project → New Print Layout) named "Health Facility Access Analysis" and configure the page orientation and size appropriate for your intended use [^23].

Add the main map frame by clicking Add Item → Add Map and drawing a rectangle covering most of the layout area [^23]. Configure the map extent to show all of Uganda with appropriate margins, ensuring all analytical results are clearly visible. Lock the map extent to prevent accidental changes during layout refinement.

#### Step 14: Add Essential Cartographic Elements

Create a professional map by including all essential cartographic elements that enable proper interpretation [^23]. Add a clear, descriptive title such as "Health Facility Access Analysis: Identifying Underserved Districts in Uganda" using Add Item → Add Label [^23]. Position the title prominently at the top of the layout with appropriate font size and styling.

Include a comprehensive legend explaining all map symbols: facility types, buffer zones, and district classification [^23]. Use Add Item → Add Legend and customize to show only relevant layers with clear, descriptive labels. Add a north arrow (Add Item → Add North Arrow) and scale bar (Add Item → Add Scale Bar) to provide geographic orientation and scale reference [^23].

Add data source information and map creation details at the bottom of the layout, including coordinate system used, data sources, analysis date, and creator information [^23]. This metadata ensures transparency and enables others to reproduce or verify your analysis.

### 3.7 Exporting and Sharing Results

#### Step 15: Export High-Quality Maps

Generate final map products suitable for various uses by configuring appropriate export settings [^23]. For printed materials, export as PDF using Layout → Export as PDF with high resolution (300 dpi) to ensure crisp text and clear symbol definition [^23]. For digital presentations, export as PNG using Layout → Export as Image with moderate resolution (150-200 dpi) for optimal file size and display quality.

Consider creating multiple versions of your map for different audiences: a detailed technical version for health planners and a simplified version for community stakeholders and policymakers [^23]. Each version should maintain analytical integrity while adapting visual complexity to audience needs and technical literacy.

## 4. Advanced Analysis and Interpretation

### 4.1 Understanding Accessibility Patterns and Health Equity

The spatial analysis reveals critical patterns of healthcare accessibility that directly impact health equity and population health outcomes [^3]. Districts identified through the compound spatial and attribute query represent areas experiencing a "double burden" of high disease prevalence and poor spatial access to care [^1]. These patterns reflect broader inequities in health system development, infrastructure investment, and resource allocation that perpetuate health disparities.

![Healthcare accessibility strongly correlates with health outcomes in Uganda districts](https://pplx-res.cloudinary.com/image/upload/v1750431015/pplx_code_interpreter/9a2a4c2e_xp2fh1.jpg)

Healthcare accessibility strongly correlates with health outcomes in Uganda districts

The strong negative correlation between healthcare accessibility and malaria prevalence demonstrates the public health significance of spatial access patterns [^4]. Areas with better facility coverage consistently show lower malaria prevalence, supporting the hypothesis that improved access enables earlier treatment, reduces transmission, and improves overall health outcomes [^4]. This relationship provides compelling evidence for targeted health system strengthening in underserved areas.

### 4.2 District-Level Access Patterns and Urban-Rural Disparities

Analysis of facility access by district type reveals stark disparities that mirror broader patterns of urban-rural inequality in Uganda [^2]. Urban districts demonstrate significantly higher facility density and better population coverage, reflecting historical patterns of health infrastructure development and ongoing urban bias in health investment [^10].

![Urban districts have significantly better healthcare facility access than rural areas in Uganda](https://pplx-res.cloudinary.com/image/upload/v1750431184/pplx_code_interpreter/39f3f790_omwl8t.jpg)

Urban districts have significantly better healthcare facility access than rural areas in Uganda

Semi-urban districts show intermediate access levels, often benefiting from proximity to urban centers while still facing infrastructure challenges [^10]. Rural districts demonstrate the greatest accessibility challenges, with limited facility coverage and large populations living beyond reasonable access distances [^26]. These patterns contribute to rural-urban health disparities and highlight the need for targeted rural health strategies.

### 4.3 Population-Level Accessibility Metrics

Detailed analysis of population distribution relative to health facilities reveals the scale of accessibility challenges facing Uganda's health system [^12]. The majority of rural populations live more than optimal distances from health facilities, creating barriers to timely care and contributing to preventable morbidity and mortality [^14].

![Rural populations face significantly longer distances to health facilities compared to urban areas](https://pplx-res.cloudinary.com/image/upload/v1750431296/pplx_code_interpreter/b34bcfa1_vdc10b.jpg)

Rural populations face significantly longer distances to health facilities compared to urban areas

The distance decay effect in healthcare utilization provides strong empirical justification for accessibility improvement interventions [^11]. Areas where significant populations live beyond 10-15 kilometers from facilities experience dramatically reduced healthcare utilization, supporting the need for additional facilities or alternative service delivery approaches [^12].

## 5. Policy Implications and Public Health Applications

### 5.1 Evidence-Based Health System Planning

The accessibility analysis provides robust evidence for health system planning decisions, including facility location planning, resource allocation, and service delivery optimization [^27]. Districts identified as having poor access and high disease burden represent clear priorities for health infrastructure investment and should receive preferential consideration for new facility construction or mobile health programs [^6].

The analysis also reveals opportunities for service delivery optimization in areas with overlapping catchment areas, where resources might be redistributed to extend coverage to underserved populations [^27]. Mobile health services, community health worker programs, and telemedicine initiatives offer potential solutions for addressing accessibility gaps without requiring major infrastructure investment.

### 5.2 Health Equity and Social Justice Applications

Spatial accessibility analysis serves as a powerful tool for advancing health equity by quantifying disparities and providing evidence for targeted interventions [^3]. The compound analysis of access and health outcomes reveals areas where geographic inequities intersect with health burden, creating priority areas for equity-focused interventions [^28].

Results from this analysis can inform advocacy efforts for health equity, provide evidence for resource allocation decisions, and support community mobilization around health access issues [^28]. The visual nature of spatial analysis makes complex equity patterns accessible to diverse stakeholders, from policymakers to community leaders.

### 5.3 Integration with Health System Strengthening

The analytical framework developed in this tutorial can be adapted and extended to support comprehensive health system strengthening efforts [^29]. By incorporating additional health indicators, service quality measures, and population vulnerability data, the analysis can provide increasingly sophisticated guidance for health system improvement [^13].

Regular repetition of this analysis enables monitoring of progress in addressing accessibility gaps and evaluation of health system interventions [^13]. As new facilities are constructed or existing services are expanded, updated accessibility analysis can quantify improvements and identify remaining gaps requiring attention.

## 6. Methodological Considerations and Limitations

### 6.1 Analytical Assumptions and Limitations

The buffer analysis approach employed in this tutorial makes several simplifying assumptions that users should understand when interpreting results [^11]. The use of Euclidean distance assumes straight-line travel, which may not reflect actual travel routes constrained by road networks, topography, or seasonal barriers [^12]. In Uganda's context, where road infrastructure varies significantly and seasonal factors affect accessibility, these assumptions may underestimate actual travel times and distances.

The 10-kilometer buffer threshold, while based on international recommendations and local context, represents an approximation of reasonable access distance [^14]. Actual willingness to travel for healthcare varies by individual factors, health condition severity, and service quality perceptions [^30]. Some populations may travel much further for specialized care, while others may consider smaller distances prohibitive for routine services.

### 6.2 Data Quality and Availability Considerations

The accuracy of accessibility analysis depends heavily on the quality and completeness of input data [^11]. Health facility location data may not capture all service delivery points, particularly private facilities, faith-based organizations, or informal care providers that serve significant portions of the population [^7]. Similarly, facility service level classifications may not reflect actual service availability, which can vary due to staffing, supply, or infrastructure constraints.

Population data used for accessibility calculations may not reflect current demographic patterns, particularly in areas experiencing rapid urbanization, displacement, or migration [^10]. Regular updates to both facility and population data are essential for maintaining analytical accuracy and policy relevance.

### 6.3 Extensions and Future Enhancements

The analytical framework presented here provides a foundation for more sophisticated accessibility analysis [^13]. Network analysis using actual road data would provide more realistic travel time estimates and enable consideration of transportation mode differences [^11]. Integration of elevation data could account for topographic barriers that significantly affect travel times in mountainous regions.

Temporal analysis incorporating seasonal factors, facility operating hours, and service availability would provide more nuanced understanding of accessibility patterns [^12]. Population-weighted analysis considering demographic characteristics and health needs would enable more targeted intervention planning and resource allocation [^13].

## 7. Conclusion and Professional Development

This comprehensive tutorial demonstrates the power of GIS-based spatial analysis for understanding and addressing healthcare accessibility challenges in Uganda and similar contexts [^3]. The skills developed through this tutorial—from basic data management to sophisticated spatial analysis and professional mapping—are directly applicable to public health practice, health system planning, and health equity research [^23].

The analytical approach combines technical GIS skills with public health knowledge to generate actionable intelligence for health system improvement [^27]. By quantifying accessibility patterns and identifying priority areas for intervention, this analysis contributes to evidence-based health policy and supports efforts to achieve universal health coverage and health equity [^1].

Future applications of these skills might include analysis of other health services (maternal care, immunization, chronic disease management), integration with health outcome data for impact evaluation, or development of predictive models for health facility planning [^13]. The foundational spatial analysis concepts learned here provide a platform for increasingly sophisticated health geography applications throughout your professional career.

The integration of spatial analysis with public health practice represents a growing field with significant potential for impact [^3]. As health systems worldwide grapple with challenges of equity, efficiency, and effectiveness, spatial analysis provides essential tools for understanding complex geographic patterns and developing targeted solutions that can improve health outcomes for all populations.

<div style="text-align: center">⁂</div>

[^1]: lab2_health_facility_access_tutorial.pdf

[^2]: https://pmc.ncbi.nlm.nih.gov/articles/PMC11535691/

[^3]: https://thinkmd.org/project/addressing-healthcare-challenges-in-uganda/

[^4]: https://pmc.ncbi.nlm.nih.gov/articles/PMC8238135/

[^5]: https://www.volusia.org/services/financial-and-administrative-services/finance-department/information-technology/geographic-information-services/geographic-spatial-analysis/buffer-analysis.stml

[^6]: https://www.medrxiv.org/content/10.1101/2025.02.13.25322240v1.full-text

[^7]: https://realhealthuganda.org/our-work/access/

[^8]: https://academic.oup.com/eurjcn/article/22/8/832/7244655

[^9]: https://en.wikipedia.org/wiki/Healthcare_in_Uganda

[^10]: https://pmc.ncbi.nlm.nih.gov/articles/PMC8505862/

[^11]: https://sonams.ac.ug/Notes/UGANDA HEALTH CARE SYSTEM.pdf

[^12]: https://pmc.ncbi.nlm.nih.gov/articles/PMC8886189/

[^13]: https://bmchealthservres.biomedcentral.com/articles/10.1186/s12913-017-2059-9

[^14]: https://www.pewresearch.org/short-reads/2018/12/12/how-far-americans-live-from-the-closest-hospital-differs-by-community-type/

[^15]: https://library.health.go.ug/sites/default/files/resources/National Health Facility MasterLlist 2017.pdf

[^16]: https://www.qgistutorials.com/en/docs/3/performing_spatial_queries.html

[^17]: https://www.youtube.com/watch?v=WfMvc-4jERM

[^18]: https://astuntechnology.github.io/qgis-tutorials/html/en/docs/performing_spatial_queries.html

[^19]: https://www.youtube.com/watch?v=zoElYnD2G5o

[^20]: https://mapscaping.com/converting-csv-files-into-shapefiles-with-qgis/

[^21]: https://www.igismap.com/mapping-healthcare-efficiency-gis-buffer-analysis-of-hospital-locations/

[^22]: https://www.youtube.com/watch?v=EPmmFIzO3P8

[^23]: https://www.youtube.com/watch?v=CU1A86JJMIk

[^24]: https://pmc.ncbi.nlm.nih.gov/articles/PMC8597972/

[^25]: https://www.ruralhealth.us/blogs/2019/05/nrha-supports-bipartisan-legislation-to-eliminate-mileage-limitation-for-critical-access-hospital-de

[^26]: https://pmc.ncbi.nlm.nih.gov/articles/PMC3515413/

[^27]: https://pmc.ncbi.nlm.nih.gov/articles/PMC7571702/

[^28]: https://pmc.ncbi.nlm.nih.gov/articles/PMC5178808/

[^29]: https://pubmed.ncbi.nlm.nih.gov/21262911/

[^30]: https://epsg.io/?q=Uganda

[^31]: https://spatialreference.org/ref/epsg/32636/

[^32]: https://pro.arcgis.com/en/pro-app/latest/help/mapping/properties/pdf/projected_coordinate_systems.pdf

[^33]: https://generic.wordpress.soton.ac.uk/gah/unit-4/4-2-choropleth-mapping/

[^34]: https://ncstoragemlunchealthcare.blob.core.windows.net/public/pdf-system-data-visualization-standards.pdf

[^35]: https://smorgasbord.cdp.arch.columbia.edu/modules/15-intro-qgis/152-print-layout/

[^36]: https://gis.stackexchange.com/questions/381088/choosing-projected-crs-for-uganda

[^37]: https://geographicdata.science/book/notebooks/05_choropleth.html

[^38]: https://sites.brown.edu/publichealthjournal/2024/03/29/beyond-borders-a-glimpse-into-ugandas-healthcare-challenges-and-solutions/

[^39]: https://pmc.ncbi.nlm.nih.gov/articles/PMC2778436/

[^40]: https://www.trade.gov/country-commercial-guides/uganda-healthcare

[^41]: https://library.health.go.ug/sites/default/files/resources/GUIDLINES FOR GOVERNANCE AND MANAGEMENT STRUCTURES.pdf

[^42]: https://library.health.go.ug/leadership-and-governance/governance/re-aligned-organization-structure-final-ministry-health-uganda

[^43]: https://www.hfp.tum.de/fileadmin/w00cjd/globalhealth/_my_direct_uploads/Policy-Brief-Uganda_Beltran-Juanita.pdf

[^44]: https://docs.qgis.org/latest/en/docs/training_manual/spatial_databases/spatial_queries.html

[^45]: https://www.qgistutorials.com/en/docs/performing_spatial_queries.html

[^46]: https://www.who.int/data/gho/indicator-metadata-registry/imr-details/859

[^47]: https://journals.plos.org/plosone/article/file?id=10.1371%2Fjournal.pone.0203130\&type=printable

[^48]: https://docs.up42.com/data/reference/utm

[^49]: https://epsg.io/32636

[^50]: https://ppl-ai-code-interpreter-files.s3.amazonaws.com/web/direct-files/4ef7a4fd3edf5a009f30dcc56fc5e081/a0711a5b-0b00-4f90-b666-20d974d7549d/2de16625.csv

[^51]: https://ppl-ai-code-interpreter-files.s3.amazonaws.com/web/direct-files/4ef7a4fd3edf5a009f30dcc56fc5e081/a0711a5b-0b00-4f90-b666-20d974d7549d/188ef0b5.csv

