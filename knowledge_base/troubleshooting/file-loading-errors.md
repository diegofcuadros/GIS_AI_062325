---
title: "Data Loading Problems"
category: troubleshooting
difficulty: beginner
lab: all
topics: ["errors", "troubleshooting", "common-issues"]
---

# Solving Data Loading Issues

## Common File Loading Problems

### Shapefile Won't Load
**Symptoms**: Error messages, empty layers, or files won't open

**Solutions**:
1. **Check file completeness**: Shapefiles need .shp, .shx, .dbf, and .prj files
2. **Remove spaces**: Rename files to remove spaces and special characters
3. **Check file path**: Ensure path doesn't contain special characters
4. **Verify format**: Confirm file is actually a shapefile

### CSV Coordinates Not Displaying
**Symptoms**: CSV loads but points don't appear on map

**Solutions**:
1. **Check coordinate columns**: Ensure X=Longitude, Y=Latitude
2. **Verify coordinate format**: Use decimal degrees (not degrees/minutes/seconds)
3. **Set correct CRS**: Usually EPSG:4326 for GPS coordinates
4. **Check for missing values**: Empty coordinates cause issues

### "Invalid Geometry" Errors
**Symptoms**: Processing tools fail with geometry errors

**Solutions**:
1. Vector → Geometry Tools → Fix Geometries
2. Vector → Geometry Tools → Check Validity (to identify issues)
3. Use fixed geometry layer for analysis

### File Path Problems
**Symptoms**: "File not found" errors, broken links

**Solutions**:
1. Use simple folder names (no spaces, special characters)
2. Keep project files in organized folder structure
3. Use relative paths when possible
4. Avoid cloud storage folders (OneDrive, Dropbox) for active projects

## Prevention Tips
- Always validate data after importing
- Use consistent file naming conventions
- Keep backups of original data
- Document your data sources and formats

## Ask the AI Assistant
- "My shapefile won't load, what's wrong?"
- "CSV coordinates not showing on map"
- "How to fix invalid geometry errors"
