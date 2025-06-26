---
title: "Complete Guide to Accessing Google Earth Engine - Workshop Setup"
category: "tutorial"
difficulty: "advanced"
lab: "lab1"
topics: ["gee", "gis", "google earth engine", "malaria", "mapping", "public health", "python", "qgis", "satellite"]
source: "C:/Users/cuadrodo/Documents/GitHub/Wookshop_GIS_AI/GIS_AI_062325/documents/Complete Guide to Accessing Google Earth Engine - Workshop Setup.pdf"
type: "pdf"
pages: 11
processedAt: "2025-06-26T19:29:05.830Z"
---

# Complete Guide to Accessing Google Earth Engine - Workshop Setup



Complete Guide to Accessing Google Earth Engine
Pre-Workshop Setup Instructions
Overview
Google Earth Engine (GEE) is a cloud-based platform for planetary-scale environmental data analysis.
Before the workshop, all participants must complete these setup steps.
Time Requirements:
Application process: 30-45 minutes
GEE approval wait: 1-3 business days
⚠ IMPORTANT: Complete Steps 1-3 at least ONE WEEK before the workshop to ensure approval!
Step 1: Prerequisites
Required:
Modern web browser (Chrome, Firefox, Edge, or Safari)
Stable internet connection
Google account (Gmail or Google Workspace)
Check your browser:
1. Open your browser
2. Navigate to: chrome://version (Chrome) or about:support (Firefox)
3. Ensure you're using a version from the last 2 years
4. If your browser is older, please update it before proceeding
Step 2: Create or Verify Google Account
If you already have a Google account:
1. Go to https://accounts.google.com
2. Click "Sign in"
3. Enter your email and password
4. Verify you can access your account

If you need a Google account:
1. Go to https://accounts.google.com/signup
2. Fill in the form:
First and last name
Username (this will be your email)
Password (use a strong password)
Confirm password
3. Add recovery information:
Phone number (recommended)
Recovery email (optional)
4. Complete verification:
Enter the code sent to your phone
Accept terms and conditions
5. Important: Write down your login credentials and keep them in a safe, private place!
Step 3: Sign Up for Google Earth Engine
Access the signup page:
1. Open a new browser tab
2. Navigate to: https://earthengine.google.com/signup/
3. You should see "Sign up for Earth Engine" page
Complete the registration form:
Section 1: Account Type
Select the account type that best fits your use. For this workshop, common choices are:
"Non-commercial / research project": If you are using GEE for personal projects, NGO work, or
non-degree research (most common choice)
"Education": If you are a student using GEE for coursework or a university educator
"Government": If you work for a government agency
Note: The exact wording on the GEE form may differ slightly. Choose the option that best describes your
participation in this non-commercial, educational/research-focused workshop.

Section 2: Your Information
Fill in all required fields:
Email: Use your Google account email
Name: Your full name
Organization: Your institution/company name
Country: Select from dropdown
Intended use: Select "Research" or "Education"
Section 3: Project Details
Be specific but concise:
Project description:
Geographic area: "Uganda, East Africa"
Time period: "2024-2025"
Section 4: Agreement
Check the box: "I agree to the terms of service"
Click "Submit"
Wait for approval:
Typical wait time: 1-3 business days
You'll receive an email to your registered address
Subject line: "Welcome to Google Earth Engine"
If urgent: Contact the workshop organizer for expedited approval
⚠ CRITICAL: Please complete Steps 1-3 (submitting your GEE application) AT LEAST ONE WEEK before
the workshop to allow ample time for approval. If you sign up later, approval before the workshop cannot
be guaranteed.
Step 4: First Access to Code Editor
"Participating in a workshop on using GIS and AI for public health 
"Participating in a workshop on using GIS and AI for public health 
mapping in Uganda, focusing on malaria risk assessment using 
mapping in Uganda, focusing on malaria risk assessment using 
environmental variables"
environmental variables"

Once approved, access the Code Editor:
1. Direct URL: https://code.earthengine.google.com/
2. Alternative path:
Go to https://earthengine.google.com/
Click "Platform" → "Code Editor"
First-time login:
1. Click "Sign in with Google"
2. Select your Google account
3. Grant permissions:
"View your email address" → Allow
"View your basic profile info" → Allow
4. You should see the Code Editor interface
Step 5: Understanding the Code Editor Interface
Main Components:
 Tip: An annotated screenshot of the interface would be helpful here. Ask your instructor if one is
available.
Top Section:
Scripts tab (left panel): Your saved scripts
Docs tab (left panel): API documentation
Assets tab (left panel): Your uploaded data
Middle Section:
Code Editor: Where you write JavaScript code
Line numbers on the left
Syntax highlighting for easier reading
Right Section:
Inspector tab: Click map features to inspect
Console tab: View print outputs and errors

Tasks tab: Monitor exports and long-running tasks
Bottom Section:
Map: Interactive map display
Geometry tools: Draw points, lines, polygons
Layer manager: Toggle map layers on/off
Step 6: Initial Configuration
Set up your workspace:
1. Create a repository for workshop scripts:
2. Configure map settings: In the central Code Editor panel, you can type or paste JavaScript code.
This first script will set your default map view:
3. Test your setup with this simple script:
4. Run the test:
Click the "Run" button (top of code editor)
javascript
// Click "NEW" → "Repository" in Scripts panel
// Click "NEW" → "Repository" in Scripts panel
// Name it: "Uganda_Health_Workshop_2024"
// Name it: "Uganda_Health_Workshop_2024"
javascript
// Add this to your first script:
// Add this to your first script:
Map
Map
.
.
setOptions
setOptions
(
(
'SATELLITE'
'SATELLITE'
)
)
;
;
  
  
// or 'TERRAIN', 'ROADMAP'
// or 'TERRAIN', 'ROADMAP'
Map
Map
.
.
setCenter
setCenter
(
(
32.5
32.5
,
,
 
 
1.3
1.3
,
,
 
 
7
7
)
)
;
;
  
  
// Center on Uganda
// Center on Uganda
javascript
// Hello Earth Engine
// Hello Earth Engine
print
print
(
(
'Hello Earth Engine!'
'Hello Earth Engine!'
)
)
;
;
// Load and display Uganda boundaries
// Load and display Uganda boundaries
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
"USDOS/LSIB_SIMPLE/2017"
"USDOS/LSIB_SIMPLE/2017"
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
'country_na'
'country_na'
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
Map
Map
.
.
addLayer
addLayer
(
(
uganda
uganda
,
,
 
 
{
{
color
color
:
:
 
 
'red'
'red'
}
}
,
,
 
 
'Uganda Boundary'
'Uganda Boundary'
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
// If you see Uganda outlined in red, your setup is complete!
// If you see Uganda outlined in red, your setup is complete!

Check the map for a red outline of Uganda
Look for "Hello Earth Engine!" in the Console
Step 7: Troubleshooting Common Issues
"Access Denied" or "Not Authorized"
Solution:
Ensure you're logged into the correct Google account
Check if your Earth Engine registration is approved
Try incognito/private browsing mode
Clear browser cache and cookies for earthengine.google.com
"Script error" when running code
Solution:
Check for typos (JavaScript is case-sensitive)
Ensure all parentheses and brackets are closed
Look for red underlines in the code editor
Check the Console tab for specific error messages
Map doesn't load or is blank
Solution:
Check internet connection
Disable browser extensions (especially ad blockers)
Try a different browser
Zoom out to global view and look for layers
"Computation timed out"
Solution:
This is normal for complex operations
Reduce the geographic extent
Simplify your analysis
Will cover optimization in the workshop

Can't find the Code Editor
Solution:
Direct link: https://code.earthengine.google.com/
Bookmark this URL!
Ensure you're signed in to Google first
Step 8: Pre-Workshop Checklist
Complete these tasks before the workshop:
 Google account created and password saved
 Earth Engine signup submitted
 Approval email received
 Successfully accessed Code Editor
 Run the test script (Uganda boundary)
 Created workshop repository
 Bookmarked Code Editor URL
 Tested in your preferred browser
Recommended preparation:
 Watch "Introduction to Google Earth Engine" (YouTube)
 Review JavaScript basics (optional but helpful - see GEE's JavaScript intro)
 Install a text editor (VS Code, Notepad++) for offline notes
Step 9: Workshop Day Setup
15 minutes before the workshop:
1. Open required tabs:
Tab 1: Google Earth Engine Code Editor
Tab 2: ChatGPT (https://chat.openai.com)
Tab 3: Workshop materials (Google Drive/website)
Tab 4: Email (for sharing/receiving files)
2. Check your environment:

3. Create Day 2 folder:
In Scripts panel: Right-click your repository
Select "New Folder" → Name it "Day2_GEE_AI"
Step 10: Alternative Access Methods
Dataset Consistency Note:
Throughout this workshop, we use the USDOS/LSIB_SIMPLE/2017 dataset for Uganda boundaries. This
ensures consistency across all exercises and is a reliable, globally-available dataset.
If Code Editor is blocked:
Option 1: Python API (Colab)
1. Go to https://colab.research.google.com
2. Create new notebook
3. Run:
Option 2: QGIS Plugin
1. In QGIS: Plugins → Manage and Install Plugins
2. Search for "Google Earth Engine"
3. Install and configure with your credentials
Option 3: JavaScript API (local)
1. Requires Node.js installation
javascript
// Run this script to verify everything works:
// Run this script to verify everything works:
print
print
(
(
'Earth Engine Version:'
'Earth Engine Version:'
,
,
 ee
 ee
.
.
version
version
(
(
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
'Current Date:'
'Current Date:'
,
,
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
)
)
;
;
// This line extracts your username - just copy and run it
// This line extracts your username - just copy and run it
print
print
(
(
'User:'
'User:'
,
,
 ee
 ee
.
.
data
data
.
.
getAssetRoots
getAssetRoots
(
(
)
)
[
[
0
0
]
]
.
.
id
id
.
.
split
split
(
(
'/'
'/'
)
)
[
[
1
1
]
]
)
)
;
;
python
import
import
 ee
 ee
ee
ee
.
.
Authenticate
Authenticate
(
(
)
)
ee
ee
.
.
Initialize
Initialize
(
(
)
)

2. More complex setup (covered if needed)
Additional Resources
Essential Links:
Earth Engine Homepage: https://earthengine.google.com/
Code Editor: https://code.earthengine.google.com/
API Documentation: https://developers.google.com/earth-engine/
Dataset Catalog: https://developers.google.com/earth-engine/datasets/
Community Forum: https://groups.google.com/g/google-earth-engine-developers
Help Contacts:
Workshop Instructor: [instructor email]
Earth Engine Support: earth-engine-support@google.com
Workshop Slack/WhatsApp: [group link]
Backup Plan:
If you cannot get Earth Engine access by workshop date:
1. Notify the instructor immediately
2. You can still participate by:
Pairing with another participant
Using the instructor's shared screen
Working with exported datasets in QGIS
Quick Reference Card
Most Used Code Snippets:

Keyboard Shortcuts:
Run script: Ctrl + Enter (Cmd + Enter on Mac)
Save script: Ctrl + S (Cmd + S on Mac)
Comment line: Ctrl + / (Cmd + / on Mac)
Auto-complete: Ctrl + Space
New script: Ctrl + Alt + N
Notes for Instructors
Common Bottlenecks:
1. Earth Engine approval delay
Have a list of approved "guest accounts" as backup
Contact GEE team 2 weeks before workshop for bulk approval
2. Slow internet
Prepare offline alternatives
Have key datasets pre-exported
javascript
// Center map on Uganda
// Center map on Uganda
Map
Map
.
.
setCenter
setCenter
(
(
32.5
32.5
,
,
 
 
1.3
1.3
,
,
 
 
7
7
)
)
;
;
// Load Uganda boundaries
// Load Uganda boundaries
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
"USDOS/LSIB_SIMPLE/2017"
"USDOS/LSIB_SIMPLE/2017"
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
'country_na'
'country_na'
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
// Print to console
// Print to console
print
print
(
(
'Debug info:'
'Debug info:'
,
,
 variable
 variable
)
)
;
;
// Add layer to map
// Add layer to map
Map
Map
.
.
addLayer
addLayer
(
(
image
image
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
 
 
'Layer name'
'Layer name'
)
)
;
;
// Common visualizations
// Common visualizations
var
var
 visNDVI 
 visNDVI 
=
=
 
 
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
;
;
  
  
// For scaled NDVI (0-1
// For scaled NDVI (0-1
var
var
 visRain 
 visRain 
=
=
 
 
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
 
 
500
500
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
 
 
'blue'
'blue'
,
,
 
 
'darkblue'
'darkblue'
]
]
}
}
;
;
  
  
// For rainfall in m
// For rainfall in m
// Note: Raw MODIS NDVI values need scaling (divide by 10000)
// Note: Raw MODIS NDVI values need scaling (divide by 10000)

Use mobile hotspots as backup
3. Browser compatibility
Chrome works best
Firefox is good alternative
Safari sometimes has issues with pop-ups
Success Metrics:
All participants can log in within 10 minutes
Test script runs successfully for everyone
Participants can navigate the interface
Basic comfort with running provided code
Post-Access Next Steps
Once everyone has access:
1. Brief interface tour (10 min)
2. Run 2-3 simple examples together
3. Ensure everyone has the same view
4. Begin Lab 3 exercises
Remember: The goal is not to become JavaScript experts, but to use Earth Engine as a tool for
public health analysis!

## Document Information
- **Source**: PDF Document (11 pages)
- **Category**: tutorial
- **Difficulty**: advanced
- **Relevant Labs**: lab1
- **Topics**: gee, gis, google earth engine, malaria, mapping, public health, python, qgis, satellite

## AI Assistant Usage
Ask the chatbot:
- "Explain complete guide to accessing google earth engine - workshop setup"
- "How does this relate to [specific topic]?"
- "Give me examples from this document"
- "What are the key points about [topic] in this document?"

## Quick References
- gee
- gis
- google earth engine
- malaria
- mapping
- public health
- python
- qgis
- satellite
