---
title: "Fundamentals Of RS Edited SC"
category: "concepts"
difficulty: "intermediate"
lab: "general"
topics: ["arcgis", "coordinate system", "crs", "gis", "mapping", "projection", "remote sensing", "satellite"]
source: "C:/Users/cuadrodo/Documents/GitHub/Wookshop_GIS_AI/GIS_AI_062325/documents/Fundamentals_of_RS_Edited_SC.pdf"
type: "pdf"
pages: 39
processedAt: "2025-06-26T19:29:06.415Z"
---

# Fundamentals Of RS Edited SC



National Aeronautics and Space Administration
Fundamentals of Remote Sensing
NASA ARSET

2NASA’s Applied Remote Sensing Training Program
Outline
•Fundamentals of Remote Sensing
•Satellites and Sensors
⁃Types
⁃Resolution
•Satellite Data Processing Levels
•Projections and Coordinate Systems
•Advantages and Disadvantages of 
Remote Sensing
•Remote Sensing Terminology

Fundamentals of Remote Sensing

NASA’s Applied Remote Sensing Training Program4
What is Remote Sensing?
Remote sensingis obtaining information 
about an object from a distance. 
Photography is a very common form of 
remote sensing. 
There are different ways to collect data, and 
different sensors are used depending on the 
application.
Some methods collect ground-based data, 
others airborne or spaceborne. 
•What information do you need? 
•How much detail? 
•How frequently do you need the data?

NASA’s Applied Remote Sensing Training Program5
What is Remote Sensing?
•The energy Earth receives from the sun is 
called electromagnetic radiation. 
•Radiation is reflected, absorbed, and 
emitted by the Earth's atmosphere or surface, 
as shown by the figure on the left.
•Satellites carry instruments or sensors that 
measure electromagnetic radiation reflected 
or emitted from both terrestrial and 
atmospheric sources.
•With calibrated instruments, scientists can 
measure the height, temperature, moisture 
content (and more) for nearly every feature 
of the Earth’s atmosphere, hydrosphere, 
lithosphere, and biosphere.

NASA’s Applied Remote Sensing Training Program6
What is Remote Sensing?
•The electromagnetic 
spectrum is simply the full 
range ofwave 
frequenciesthat 
characterizes solar 
radiation. 
•Although we are talking 
about light, most of the 
electromagnetic 
spectrum cannot be 
detected by the human 
eye. Even satellite 
detectors only capture a 
small portion of the entire 
electromagnetic 
spectrum.

NASA’s Applied Remote Sensing Training Program7
What is Remote Sensing?
•Different materials reflect 
and absorb different 
wavelengths of 
electromagnetic radiation.
•You can look at the 
reflected wavelengths 
detected by a sensor and 
determine the type of 
material it reflected from. 
This is known as a spectral 
signature.
•In the graph on the left, 
compare the relationship 
between percent 
reflectance and the 
reflective wavelengths of 
different components of the 
Earth’s surface. 

NASA’s Applied Remote Sensing Training Program8
What is Remote Sensing?
Vegetation
•Certain pigments in plant 
leaves strongly absorb 
wavelengths of visible (red) 
light. 
•The leaves themselves 
strongly reflect wavelengths 
of near-infrared light, which 
is invisible to human eyes. 
•As a plant canopy changes 
from early spring growth to 
late-season maturity and 
senescence, these 
reflectance properties also 
change.
•Since we can't see infrared 
radiation, we see healthy 
vegetation as green.

NASA’s Applied Remote Sensing Training Program9
What is Remote Sensing?
Water
•Longer visible wavelengths 
(green and red) and near-
infrared radiation are 
absorbed more by water 
than shorter visible 
wavelengths (blue) –so 
water usually looks blue or 
blue-green.
•Satellites provide the 
capability to map optically 
active components of 
upper water column in 
inland and near-shore 
waters.
Image Credit: NASA Earth Observatory, using Landsat data courtesy of USGS.

NASA’s Applied Remote Sensing Training Program10
What is Remote Sensing?
Atmosphere
•From the sun to the Earth and back to 
the sensor, electromagnetic energy 
passes through the atmosphere twice.
•Much of the incident energy is 
absorbed and scattered by gases 
and aerosols in the atmosphere 
before reaching the Earth’s surface.
•Atmospheric correctionremoves the 
scattering and absorption effects from 
the atmosphere to obtain the surface 
reflectance characterizing surface 
properties.

Satellites and Sensors

NASA’s Applied Remote Sensing Training Program12
Satellites and Sensors
Satellites carry sensors or instruments. The names of sensors are usually acronyms that 
can include the name of the satellite.
Landsat 9
Operational Land Imager 2
(OLI-2)
Thermal Infrared Sensor 2
(TIRS-2)
Spacecraft Bus
Image Credit: NASA

NASA’s Applied Remote Sensing Training Program13
Satellite Characteristics
●Orbits: Polar/Non-Polar Orbit vs. Geostationary
●Energy Source: Passive vs. Active
●Solar and Terrestrial Spectra: Visible, UV, IR, Microwave...
●Measurement Technique: Scanning; Non-Scanning; Imager; Sounders
●Resolution Type and Quality: Spatial, Temporal, Spectral, Radiometric
●Application: Weather, Ocean Color, Land Mapping, Air Quality, Radiation Budget, etc.

NASA’s Applied Remote Sensing Training Program14
Satellite Characteristics
Geostationary Orbit
•Geostationary satellites 
typically orbit ~36,000 km 
over the equator with the 
same rotation period as 
Earth.
•Multiple observations/day
•Limited spatial coverage—
observations are always of 
the same area
•Examples: Weather or 
communications satellites
Video Credit: NASA

NASA’s Applied Remote Sensing Training Program15
Satellite Characteristics
Low Earth Orbit (LEO)
•Orbit moving relative to 
Earth –can be polar or 
nonpolar
•Less frequent 
measurements
•Global (or near-global) 
spatial coverage
•Examples:
•Polar: Landsat or Terra
•Nonpolar: ISS or GPM
Video Credit: NASA

NASA’s Applied Remote Sensing Training Program16
Satellite Characteristics
Polar Orbit & Sun-Synchronous Orbit (SSO)
•Global coverage
•Varied measurement frequency (once per 
day to once per month)
•Larger swath size means higher temporal 
resolution
•Satellites in SSO traveling over the polar 
regions are synchronous with the sun—this 
means that the satellite always visits the 
same spot at the same local time (e.g., 
passing the city of Paris every day at 
noon).
Video Credit: NASA

NASA’s Applied Remote Sensing Training Program17
Satellite Characteristics
Satellite Sensors: Passive
•Passive remote sensors measure radiant 
energy reflectedor emittedby the Earth-
atmosphere system or changes in gravity from 
the Earth.
•Radiant energy is converted to bio-
geophysical quantities such as temperature, 
precipitation, and soil moisture.
•Examples: Landsat OLI/TIRS, Terra MODIS, GPM 
GMI, GRACE, etc.
•https://earthdata.nasa.gov/learn/remote-
sensors/passive-sensors
Image Credit: ARSET

NASA’s Applied Remote Sensing Training Program18
Satellite Characteristics
Satellite Sensors: Active
•Active sensors provide their own energy source 
for illumination
•Most active sensors operate in the microwave 
portion of the electromagnetic spectrum, which 
makes them able to penetrate the atmosphere 
under most conditions and can be used day or 
night.
•Have a variety of applications related to 
meteorology and observation of the Earth's 
surface and atmosphere.
•Examples: Laser Altimeter, LiDAR, RADAR, 
Scatterometer, Sounder
•Missions: Sentinel-1 (C-SAR), ICESat-2 (ATLAS), 
GPM (DPR)
•https://earthdata.nasa.gov/learn/remote-
sensors/active-sensors
Image Credit: ARSET

NASA’s Applied Remote Sensing Training Program19
Spectral Resolution
•Resolution depends upon satellite orbit configuration and sensor design. Different 
sensors have different resolutions.
•Signifies the number and width of spectral bands of the sensor. The higher the spectral 
resolution, the narrower the wavelength range for a given channel or band.
•More and finer spectral channels enable remote sensing of different parts of the Earth’s 
surface.
•Typically, multispectral imagery refers to 3 to 10 bands, while hyperspectral imagery 
consists of hundreds or thousands of (narrower) bands (i.e., higher spectral resolution). 
Panchromatic is a single broad band that collects a wide range of wavelengths.

NASA’s Applied Remote Sensing Training Program20
Spatial Resolution
•Resolution depends upon satellite orbit configuration and sensor design. Different 
sensors have different resolutions.
•Signifies the ground surface area that forms one pixel in the image. Sub-pixel objects 
can sometimes be resolved.
•It is usually presented as a single value representing the length of one side of a 
square.
•The higher the spatial resolution, the less area is covered by a single pixel.
•The image in the bottom right shows the same image at different spatial resolutions: 
(from left to right) 1 m, 10 m, and 30 m.
SensorSpatial Resolution
DigitalGlobe (and others)<1 m -4 m
Landsat30 m
MODIS250 m -1 km
GPM IMERG~10 km
Image Credit: csc.noaa.gov

NASA’s Applied Remote Sensing Training Program21
Spatial Resolution vs. Spatial Extent
•Generally, the higher the spatial resolution, the less area is covered by a 
single image.
MODIS (250 m -1 km)Landsat OLI (30 m)

NASA’s Applied Remote Sensing Training Program22
Temporal Resolution
•The time it takes for a satellite to complete 
one orbit cycle—also called “revisit time”
•Depends on satellite/sensor capabilities, 
swath overlap, and latitude
•Some satellites have greater temporal 
resolution because:
–They can maneuver their sensors
–They have increasing overlap at higher 
latitudes
SensorRevisit time
Landsat16-days
MODIS2-days
Commercial (OrbView)1-2 days

NASA’s Applied Remote Sensing Training Program23
Radiometric Resolution
•Describes a sensor's ability to discriminate 
differences in energy (or radiance). 
•The betterthe radiometric resolution, the 
more sensitive the sensor is to small 
differences in energy. The larger this 
number, the higher the radiometric 
resolution, and the sharper the imagery.
–12-bit sensor, 4,096 levels: Landsat OLI
–10-bit sensor, 1,024 levels: AVHRR
–8-bit sensor, 256 levels: Landsat TM
–6-bit sensor, 64 levels: Landsat MSS
The images show what the same scene looks like at different 
levels. From left to right: 2-bit, 4-bit, and 8-bit.
Image Credit: NASA's Earth Observatory

Satellite Data Processing Levels

NASA’s Applied Remote Sensing Training Program25
Satellite Data Processing Levels
•Satellite data is available at different stages (or levels) of processing, going from raw data 
collected from the satellite to polished products that visualize information.
•NASA takes the data from satellites and processes it to make it more usable for a broad 
array of applications. There is a set of terminology that NASA uses to refer to the levels of 
processing it conducts:
–Level 0 & 1is the raw instrument data that may be time-referenced. It is the most 
difficult to use.
–Level 2is Level 1 data that has been converted into a geophysical quantity through a 
computer algorithm (known as retrieval). This data is geo-referenced and calibrated. 
–Level 3is Level 2 data that has been mapped on a uniform space-time grid and 
quality controlled.
–Level 4is Level 3 data that has been combined with models or other instrument data.
–Level 3 & 4 data is the easiest to use.

Projections and Coordinate Systems

NASA’s Applied Remote Sensing Training Program27
The Shape of the Earth
•Although it is commonly thought of as 
a sphere, Earth is not perfectly 
spherical.
•Its actual shape is what we refer to as 
a “geoid.”
•Geoid: The hypothetical shape of the 
Earth, coinciding with mean sea level 
and its imagined extension under (or 
over) land areas.
Image Credit: European Space Agency (ESA)

NASA’s Applied Remote Sensing Training Program28
The Shape of the Earth
•For spatial data to be displayed in a 
spatially consistent way, we use an 
elliptical spheroidto approximate the 
surface of the Earth.
•No spheroid is a perfect fit, so many 
different approximations are used.
•Each approximation will fit one part of 
the Earth’s surface better than others.
•Each of these spheroids is calculated 
using a specific datumas a reference 
point.
Image Credit: European Space Agency (ESA)

NASA’s Applied Remote Sensing Training Program29
Datums
•A datumis a known point on Earth’s 
surface or within its geometry that we 
can use as a reference point for all 
other locations.
•Because of the irregular shape of the 
planet, the use of datums is necessary 
to portray spatial data as accurately 
as possible.
•Example: NAD 83 (North American 
Datum 1983)
Image Credit: ascelibrary.org

NASA’s Applied Remote Sensing Training Program30
Coordinate Reference Systems
•All spatial data, including satellite 
imagery, must be indexed, or 
georeferenced, to a fixed point on 
Earth’s surface.
•Pairing a data point or pixel with a 
specific location on the ground 
requires a coordinate reference 
system (CRS).
•Two types of coordinate systems are 
commonly used, geographicand 
projected.
Image Credit: GIS Stack Exchange

31NASA’s Applied Remote Sensing Training Program
Types of Coordinate Reference Systems
•Geographic Coordinate Systems
•Pros:
•Better for the entire Earth
•Good for data with a large 
spatial extent
•Cons:
•Less accurate for specific 
regions
•Bad for data with a small 
spatial extent
•Example of a commonly-used 
Geographic Coordinate System:
WGS84
Image Credit: ArcGIS.com

32NASA’s Applied Remote Sensing Training Program
•Projected Coordinate Systems
•Pros:
•Better for specific locations
•Good for data with a small 
spatial extent
•Cons:
•Accuracy is skewed to one 
specific location
•Not useful for data with a large 
spatial extent
•Example of a commonly used 
Projected Coordinate System:
UTM (Universal Transverse 
Mercator)
Types of Coordinate Reference Systems
Image Credit: Earth Data Science

33NASA’s Applied Remote Sensing Training Program
Types of Projected Coordinate Systems
•Cylindrical
•Best for use in 
Equatorial Regions
•Distortion occurs near 
poles
•Great for medium 
spatial extents
•Example: UTM
•Planar
•Also known as 
“Azimuthal”
•Projects data onto a 
flat plane
•Great for small spatial 
extents
•Example: State Plane 
Coordinate System
•Conical
•Best for use in Polar 
regions
•Distortion occurs 
farther from pole
•Example: Albers Equal 
Area Conic
Image Credits: UN.org

Advantages and Disadvantages of Remote Sensing

NASA’s Applied Remote Sensing Training Program35
Advantages of Remote Sensing
•Provides information where there 
are no ground-based 
measurements.
•Provides globally consistent 
observations.
•Provides continuous monitoring of 
our planet.
•Earth systems models integrate 
surface-based and remote 
sensing observations and provide 
uniformly gridded, frequent 
information of water resources 
data parameters.
•Data are freely available and 
there are web-based tools for 
data analysis.
Image Credit: NASA GSFC

NASA’s Applied Remote Sensing Training Program36
Disadvantages of Remote Sensing
•It is very difficult to obtain high 
spectral, spatial, temporal, and 
radiometric resolution all at the 
same time.
•Large amounts of data in a 
variety of formats can lead to 
more time and processing.
•Applying satellite data may 
require additional processing, 
visualization, and other tools.
•While the data are generally 
validated with selected surface 
measurements, regional and 
local assessment is 
recommended.
Image Credit: NOAA

37NASA’s Applied Remote Sensing Training Program
Remote Sensing Terminology
Amplitude: The “height” of a wave or its maximum 
displacement from equilibrium.
Coordinate Reference System: A coordinate-based local, 
regional, or global system used to locate geographical 
entities.
Datum: A known point that can be used as a reference 
point for all other locations.
Electromagnetic Radiation: The energy the Earth receives 
from the Sun.
Frequency:The number of cycles of a wave passing a fixed 
point per unit of time.
Geodesy: The science of accurately measuring and 
understanding three fundamental properties of the Earth: its 
geometric shape, its orientation in space, and its gravity 
field.
Geodetic: Relating to geodesy.
Geoid: The hypothetical shape of the Earth, coinciding with 
mean sea level and its imagined extension under (or over) 
land areas.
Georeference: To link spatial data to its correct location.
Geostationary: Remaining fixed over a specific location on 
Earth’s surface.
Gridded: Spatial data displayed over a uniform grid, often 
tied to specific locations.
Nadir: The point on the Earth’s surface directly below the 
observing satellite.
Polar: A type of orbit that crosses the poles.
Polarization: The orientation of an electromagnetic wave.
Projection: Themeans by which you display the coordinate 
system and your data on a flat surface.
Radiometric Resolution: Describes a sensor's ability to 
discriminate differences in energy (or radiance). 
Spatial Extent: The overall surface area covered by a given 
dataset.
Spatial Resolution: The ground surface area that forms one 
pixel in the image. 
Spectral Resolution: The number and width of spectral 
bands of the sensor. The higher the spectral resolution, the 
narrower the wavelength range for a given channel or 
band.
Sun-Synchronous: The satellite always visits the same spot at 
the same local time.
Temporal Resolution: The time it takes for a satellite to 
complete one orbit cycle—also called “revisit time.”

NASA’s Applied Remote Sensing Training Program38
Contact Information
Contact: nasa.arset@gmail.com
Applied Remote Sensing Training 
(ARSET) Program: 
https://appliedsciences.nasa.gov/wha
t-we-do/capacity-building/arset
Twitter: @NASAARSET
YouTube: 
https://www.youtube.com/user/NASA
govVideo/playlists

39NASA’s Applied Remote Sensing Training Program
Thank You!

## Document Information
- **Source**: PDF Document (39 pages)
- **Category**: concepts
- **Difficulty**: intermediate
- **Relevant Labs**: general
- **Topics**: arcgis, coordinate system, crs, gis, mapping, projection, remote sensing, satellite

## AI Assistant Usage
Ask the chatbot:
- "Explain fundamentals of rs edited sc"
- "How does this relate to [specific topic]?"
- "Give me examples from this document"
- "What are the key points about [topic] in this document?"

## Quick References
- arcgis
- coordinate system
- crs
- gis
- mapping
- projection
- remote sensing
- satellite
