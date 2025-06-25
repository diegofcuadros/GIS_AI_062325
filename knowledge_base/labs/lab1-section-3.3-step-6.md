---
title: "Join Malaria Data to District Boundaries"
category: lab-step
difficulty: intermediate
lab: lab1
topics: ["Table Joins", "Attribute Matching", "Data Integration"]
---

# Join Malaria Data to District Boundaries

## Step 6: Join Malaria Data to District Boundaries

### Instructions
1. Right-click on Uganda_districts layer → 'Properties'
2. Go to 'Joins' tab, click '+' button
3. In 'Add Vector Join' dialog:
4.   - Set 'Join layer' to malaria prevalence CSV
5.   - Set 'Join field' to district name field in CSV
6.   - Set 'Target field' to district name field in shapefile
7.   - Check 'Custom field name prefix' and leave blank
8. Click 'OK' then 'Apply'
9. Verify join by opening districts attribute table

### 💡 Tips
- Successful joins combine geographic and health data
- District names must match exactly between datasets
- Custom prefix helps avoid field name conflicts

### 🔧 Troubleshooting
- **Issue**: If join fails, check for spelling differences in district names
- **Issue**: Ensure both datasets use consistent naming conventions
- **Issue**: Look for extra spaces or special characters in names

### Related Concepts
- Table Joins
- Attribute Matching
- Data Integration

### Navigation
- **Previous**: Step 5
- **Next**: Step 7

### Need Help?
- Ask the AI assistant: "Explain step 6 in detail"
- Common question: "I'm stuck on join malaria data to district boundaries"
- Troubleshooting: "Error with join malaria data to district boundaries"
