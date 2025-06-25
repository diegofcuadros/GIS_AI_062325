---
title: "Coordinate Reference System Issues"
category: troubleshooting
difficulty: beginner
lab: all
topics: ["errors", "troubleshooting", "common-issues"]
---

# Fixing Coordinate Reference System Problems

## The Problem
Layers appear in wrong locations, don't align properly, or distances are calculated incorrectly.

## Why This Happens
Different layers use different coordinate reference systems (CRS), causing spatial misalignment.

## Solutions

### Quick Fix
1. Right-click problematic layer → Properties → Source tab
2. Note the current CRS (e.g., EPSG:4326)
3. Right-click layer → Export → Save Features As
4. Change CRS to EPSG:32636 (Uganda UTM Zone 36N)
5. Load the new file and remove the old one

### Project-Wide Fix
1. Project → Properties → CRS tab
2. Set project CRS to EPSG:32636
3. Enable "on-the-fly" reprojection
4. All layers will display in the same coordinate system

### Prevention
- Always check CRS before loading data
- Use consistent CRS throughout project
- For Uganda: EPSG:32636 for measurements, EPSG:4326 for GPS data

## Common CRS for Uganda
- **EPSG:32636**: UTM Zone 36N - best for measurements and analysis
- **EPSG:4326**: WGS84 - best for GPS coordinates and global context
- **EPSG:21036**: Arc 1960 UTM 36N - historical surveys

## Ask the AI Assistant
- "My layers don't align, help with CRS"
- "What CRS should I use for Uganda?"
- "How to reproject layers in QGIS"
