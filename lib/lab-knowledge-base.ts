// Lab Knowledge Base for Contextual GIS Workshop Assistance
// Comprehensive lab content extracted from Expansion_Knowledge/Labs folder

export interface LabStep {
  stepNumber: string;
  title: string;
  instructions: string[];
  troubleshooting?: string[];
  tips?: string[];
  relatedConcepts?: string[];
  citations?: string[];
  nextStep?: string;
  previousStep?: string;
}

export interface LabSection {
  sectionNumber: string;
  title: string;
  description: string;
  steps: Record<string, LabStep>;
  learningObjectives?: string[];
  prerequisites?: string[];
}

export interface Lab {
  labNumber: string;
  title: string;
  description: string;
  sections: Record<string, LabSection>;
  overview: string;
  totalSteps: number;
  estimatedTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tools: string[];
  datasets: string[];
}

export interface LabKnowledgeBase {
  labs: Record<string, Lab>;
  quickReference: Record<string, string>;
  commonIssues: Record<string, any>;
  glossary: Record<string, string>;
}

export const labKnowledgeBase: LabKnowledgeBase = {
  labs: {
    "lab1": {
      labNumber: "1",
      title: "Enhanced QGIS Health Facility Access Analysis",
      description: "Comprehensive spatial accessibility analysis for healthcare facilities in Uganda using QGIS buffer analysis and spatial queries",
      overview: "This tutorial teaches spatial accessibility analysis using Uganda's healthcare system as a case study. Students learn to create service catchment areas, identify underserved populations, and combine spatial and health indicator data for evidence-based planning.",
      totalSteps: 15,
      estimatedTime: "3-4 hours",
      difficulty: "Intermediate",
      tools: ["QGIS", "Print Layout", "Buffer Analysis", "Spatial Queries"],
      datasets: ["Uganda_districts.gpkg", "health_facilities_uganda.csv", "malaria_prevalence_uganda.csv"],
      sections: {
        "3.1": {
          sectionNumber: "3.1",
          title: "Project Setup and Initial Configuration",
          description: "Setting up QGIS project with proper coordinate systems and workspace organization",
          learningObjectives: [
            "Create and configure QGIS project for healthcare analysis",
            "Set appropriate coordinate reference system (UTM Zone 36N)",
            "Organize workspace for efficient spatial analysis"
          ],
          prerequisites: ["Basic QGIS familiarity", "Understanding of coordinate systems"],
          steps: {
            "1": {
              stepNumber: "1",
              title: "Create and Configure Your QGIS Project",
              instructions: [
                "Launch QGIS and create a new project (Project → New)",
                "Save project as 'Uganda_Health_Facility_Access_Analysis.qgz'",
                "Create folder structure: Raw_Data, Processed_Data, Maps, Analysis_Results",
                "Set project CRS to WGS 84 / UTM Zone 36N (EPSG:32636) via Project → Properties → CRS"
              ],
              tips: [
                "UTM Zone 36N provides accurate metric measurements for Uganda",
                "Good organization prevents data management issues later",
                "Save frequently to avoid losing work"
              ],
              troubleshooting: [
                "If CRS doesn't appear, search for '32636' in the filter",
                "Verify coordinates show in meters in bottom-right corner"
              ],
              nextStep: "2"
            },
            "2": {
              stepNumber: "2",
              title: "Organize Your Data and Workspace",
              instructions: [
                "Enable Processing Toolbox (View → Panels → Processing Toolbox)",
                "Enable Browser Panel for data navigation",
                "Enable Layers Panel for layer management",
                "Create organized folder structure in project directory"
              ],
              tips: [
                "Processing Toolbox contains essential spatial analysis tools",
                "Good workspace organization improves efficiency",
                "Browser panel helps locate and manage files"
              ],
              previousStep: "1",
              nextStep: "3"
            }
          }
        },
        "3.2": {
          sectionNumber: "3.2",
          title: "Loading and Converting Spatial Data",
          description: "Importing geographic data and converting coordinates to spatial layers",
          learningObjectives: [
            "Load Uganda district boundaries as spatial framework",
            "Convert health facility coordinates to spatial points",
            "Import and join health indicator data"
          ],
          steps: {
            "3": {
              stepNumber: "3",
              title: "Import Uganda District Boundaries",
              instructions: [
                "Use Layer → Add Layer → Add Vector Layer",
                "Import Uganda_districts.gpkg file",
                "Examine attribute table (right-click → Open Attribute Table)",
                "Note district name field for future joining operations"
              ],
              tips: [
                "District boundaries provide spatial framework for analysis",
                "Check that all districts loaded correctly",
                "Note field names for later use in joins"
              ],
              troubleshooting: [
                "If layer doesn't load, check file path and format",
                "Ensure file isn't corrupted or moved"
              ],
              previousStep: "2",
              nextStep: "4"
            },
            "4": {
              stepNumber: "4",
              title: "Convert Health Facility Coordinates to Spatial Data",
              instructions: [
                "Navigate to Layer → Add Layer → Add Delimited Text Layer",
                "Select health_facilities_uganda.csv file",
                "Set File format to 'CSV'",
                "Set X field to 'Longitude' and Y field to 'Latitude'",
                "Set Geometry CRS to EPSG:4326 (WGS 84)",
                "Click 'Add' to create temporary layer",
                "Export as permanent shapefile: right-click → Export → Save Features As",
                "Save as 'health_facilities_uganda.shp' with CRS EPSG:32636"
              ],
              tips: [
                "Always convert CSV coordinates to permanent spatial files",
                "Use consistent CRS throughout project (EPSG:32636)",
                "Remove temporary CSV layer after creating permanent shapefile"
              ],
              troubleshooting: [
                "If coordinates don't appear correctly, check X/Y field assignments",
                "Ensure latitude/longitude values are in decimal degrees",
                "If points appear in wrong location, verify CRS settings"
              ],
              relatedConcepts: ["Coordinate Reference Systems", "CSV Import", "Point Data"],
              previousStep: "3",
              nextStep: "5"
            }
          }
        },
        "3.3": {
          sectionNumber: "3.3",
          title: "Importing and Joining Health Data",
          description: "Combining health facility locations with disease prevalence statistics",
          learningObjectives: [
            "Import malaria prevalence data from CSV",
            "Join health statistics to district boundaries",
            "Verify successful data integration"
          ],
          steps: {
            "5": {
              stepNumber: "5",
              title: "Import Malaria Prevalence Data (CSV)",
              instructions: [
                "Click 'Layer' → 'Add Layer' → 'Add Delimited Text Layer'",
                "Browse to your malaria_prevalence.csv file",
                "Ensure 'CSV (comma separated values)' is selected",
                "Under 'Geometry Definition,' select 'No geometry (attribute table only)'",
                "Click 'Add' then 'Close'"
              ],
              tips: [
                "CSV contains statistical data without coordinates",
                "Data will be joined to spatial features using district names",
                "Check that district names match between datasets"
              ],
              troubleshooting: [
                "If CSV won't load, check file format and encoding",
                "Ensure file path is correct and accessible",
                "Verify CSV has proper headers and consistent formatting"
              ],
              relatedConcepts: ["Attribute Data", "CSV Import", "Data Joining"],
              previousStep: "4",
              nextStep: "6"
            },
            "6": {
              stepNumber: "6",
              title: "Join Malaria Data to District Boundaries",
              instructions: [
                "Right-click on Uganda_districts layer → 'Properties'",
                "Go to 'Joins' tab, click '+' button",
                "In 'Add Vector Join' dialog:",
                "  - Set 'Join layer' to malaria prevalence CSV",
                "  - Set 'Join field' to district name field in CSV",
                "  - Set 'Target field' to district name field in shapefile",
                "  - Check 'Custom field name prefix' and leave blank",
                "Click 'OK' then 'Apply'",
                "Verify join by opening districts attribute table"
              ],
              tips: [
                "Successful joins combine geographic and health data",
                "District names must match exactly between datasets",
                "Custom prefix helps avoid field name conflicts"
              ],
              troubleshooting: [
                "If join fails, check for spelling differences in district names",
                "Ensure both datasets use consistent naming conventions",
                "Look for extra spaces or special characters in names"
              ],
              relatedConcepts: ["Table Joins", "Attribute Matching", "Data Integration"],
              previousStep: "5",
              nextStep: "7"
            }
          }
        },
        "3.4": {
          sectionNumber: "3.4",
          title: "Performing Buffer Analysis",
          description: "Creating service catchment areas around health facilities",
          steps: {
            "8": {
              stepNumber: "8",
              title: "Create Service Catchment Buffers",
              instructions: [
                "Access Vector → Geoprocessing Tools → Buffer",
                "Set Input layer to health facilities shapefile",
                "Specify Distance as 10,000 meters (10 km)",
                "Maintain 20 segments for smooth circular buffers",
                "Save output as 'facility_buffers_10km.shp'"
              ],
              tips: [
                "10km represents 2-3 hours walking time in rural Uganda",
                "Buffer zones show reasonable access distances",
                "Higher segment count creates smoother circles"
              ],
              troubleshooting: [
                "If buffers appear too large/small, check distance units",
                "Ensure project CRS uses meters for accurate measurements",
                "Verify input layer contains point features"
              ],
              previousStep: "7",
              nextStep: "9"
            }
          }
        },
        "3.5": {
          sectionNumber: "3.5",
          title: "Conducting Spatial Query Analysis",
          description: "Identifying underserved areas using spatial relationships",
          steps: {
            "10": {
              stepNumber: "10",
              title: "Identify Underserved Districts",
              instructions: [
                "Navigate to Vector → Research Tools → Select by Location",
                "Configure query: 'Select features from' Uganda districts",
                "'where the features' 'do not intersect'",
                "'by comparing to features from' facility buffers layer",
                "Run query to identify districts without facility coverage"
              ],
              tips: [
                "'Do not intersect' finds areas completely outside buffer zones",
                "These districts represent highest priority for intervention",
                "Results show most underserved populations"
              ],
              previousStep: "9",
              nextStep: "11"
            }
          }
        }
      }
    },
    "lab2": {
      labNumber: "2",
      title: "Enhanced Google Earth Engine Environmental Risk Mapping",
      description: "Using Google Earth Engine for satellite-based environmental risk assessment and malaria mapping",
      overview: "Advanced remote sensing tutorial using Google Earth Engine to analyze environmental factors influencing malaria transmission, including precipitation, temperature, and vegetation indices.",
      totalSteps: 12,
      estimatedTime: "4-5 hours",
      difficulty: "Advanced",
      tools: ["Google Earth Engine", "JavaScript API", "Remote Sensing", "Time Series Analysis"],
      datasets: ["CHIRPS Precipitation", "MODIS Temperature", "NDVI", "Landsat Imagery"],
      sections: {}
    },
    "lab3": {
      labNumber: "3",
      title: "Enhanced QGIS Malaria Mapping Tutorial",
      description: "Comprehensive malaria mapping with choropleth visualization and classification methods",
      overview: "Complete tutorial for creating professional malaria prevalence maps using QGIS, covering data visualization, classification methods, and cartographic design principles.",
      totalSteps: 12,
      estimatedTime: "2-3 hours",
      difficulty: "Beginner",
      tools: ["QGIS", "Symbology", "Print Layout", "Data Classification"],
      datasets: ["Uganda_districts.gpkg", "malaria_prevalence.csv"],
      sections: {}
    },
    "lab4": {
      labNumber: "4",
      title: "Enhanced AI-Assisted Google Earth Engine Programming",
      description: "Using AI tools to accelerate Google Earth Engine programming for environmental analysis",
      overview: "Learn to leverage AI assistants like ChatGPT and GitHub Copilot to write more efficient Google Earth Engine code for environmental and health applications.",
      totalSteps: 10,
      estimatedTime: "3-4 hours",
      difficulty: "Intermediate",
      tools: ["Google Earth Engine", "AI Assistants", "JavaScript", "Python API"],
      datasets: ["Sentinel-2", "Landsat", "MODIS", "Climate Data"],
      sections: {}
    },
    "lab5": {
      labNumber: "5",
      title: "Enhanced AI-Based Clustering for Malaria Risk Mapping",
      description: "Machine learning approaches for identifying malaria risk zones using clustering algorithms",
      overview: "Advanced tutorial combining environmental data with machine learning clustering to identify and map malaria risk zones in East Africa.",
      totalSteps: 15,
      estimatedTime: "4-5 hours",
      difficulty: "Advanced",
      tools: ["Python", "Scikit-learn", "QGIS", "K-means Clustering"],
      datasets: ["Environmental Variables", "Malaria Cases", "Population Data"],
      sections: {}
    }
  },
  
  quickReference: {
    "import_csv": "Layer → Add Layer → Add Delimited Text Layer",
    "buffer_analysis": "Vector → Geoprocessing Tools → Buffer", 
    "spatial_query": "Vector → Research Tools → Select by Location",
    "symbology": "Right-click layer → Properties → Symbology",
    "print_layout": "Project → New Print Layout",
    "export_map": "Layout → Export as Image/PDF"
  },
  
  commonIssues: {
    "csv_import_fails": {
      "problem": "CSV file won't import or appears corrupted",
      "solutions": [
        "Check file encoding (should be UTF-8)",
        "Verify CSV has proper headers",
        "Ensure no special characters in file path",
        "Try opening CSV in text editor to check format"
      ],
      "prevention": "Always save CSV files with UTF-8 encoding"
    },
    "coordinates_wrong_location": {
      "problem": "Points appear in wrong geographic location",
      "solutions": [
        "Verify X field is Longitude, Y field is Latitude",
        "Check coordinate reference system (should be EPSG:4326 for lat/long)",
        "Ensure coordinates are in decimal degrees, not degrees/minutes/seconds",
        "Check for swapped X/Y coordinates"
      ],
      "prevention": "Always verify coordinate system before importing"
    },
    "join_fails": {
      "problem": "Attribute table join doesn't work",
      "solutions": [
        "Check that join field names match exactly",
        "Remove leading/trailing spaces from field values",
        "Ensure both datasets use consistent naming",
        "Check for special characters or encoding issues"
      ],
      "prevention": "Clean and standardize data before joining"
    },
    "buffer_wrong_size": {
      "problem": "Buffer appears too large or too small",
      "solutions": [
        "Check project coordinate reference system",
        "Verify distance units (meters vs degrees)",
        "Ensure input layer uses projected CRS",
        "Reproject to appropriate UTM zone"
      ],
      "prevention": "Always use projected coordinate systems for distance analysis"
    }
  },
  
  glossary: {
    "Buffer Analysis": "Creating zones of specified distance around geographic features",
    "Spatial Query": "Selecting features based on their spatial relationship to other features",
    "Choropleth Map": "Thematic map using color/shading to represent statistical data",
    "Attribute Join": "Combining data tables based on common field values",
    "CRS": "Coordinate Reference System - defines how coordinates relate to Earth's surface",
    "Shapefile": "Popular vector data format for storing geographic features",
    "Vector Data": "Geographic data represented as points, lines, or polygons",
    "Raster Data": "Geographic data represented as a grid of cells/pixels"
  }
};

export function getLabByNumber(labNumber: string): Lab | null {
  return labKnowledgeBase.labs[`lab${labNumber}`] || null;
}

export function getLabSection(labNumber: string, sectionNumber: string): LabSection | null {
  const lab = getLabByNumber(labNumber);
  return lab?.sections[sectionNumber] || null;
}

export function getLabStep(labNumber: string, sectionNumber: string, stepNumber: string): LabStep | null {
  const section = getLabSection(labNumber, sectionNumber);
  return section?.steps[stepNumber] || null;
}

export function searchLabContent(query: string, labNumber?: string): any[] {
  const results: any[] = [];
  const queryLower = query.toLowerCase();
  
  const labsToSearch = labNumber ? [labKnowledgeBase.labs[`lab${labNumber}`]] : Object.values(labKnowledgeBase.labs);
  
  labsToSearch.forEach(lab => {
    if (!lab) return;
    
    // Search in lab overview
    if (lab.overview.toLowerCase().includes(queryLower) || 
        lab.title.toLowerCase().includes(queryLower)) {
      results.push({
        type: 'lab_overview',
        labNumber: lab.labNumber,
        title: lab.title,
        relevance: 'high',
        link: `/labs/lab${lab.labNumber}`
      });
    }
    
    // Search in sections and steps
    Object.values(lab.sections).forEach(section => {
      Object.values(section.steps).forEach(step => {
        if (step.title.toLowerCase().includes(queryLower) ||
            step.instructions.some(inst => inst.toLowerCase().includes(queryLower))) {
          results.push({
            type: 'lab_step',
            labNumber: lab.labNumber,
            sectionNumber: section.sectionNumber,
            stepNumber: step.stepNumber,
            title: step.title,
            relevance: 'high',
            link: `/labs/lab${lab.labNumber}#section-${section.sectionNumber}-step-${step.stepNumber}`
          });
        }
      });
    });
  });
  
  return results;
} 