---
title: "http://pcmas1.ccrs.nrcan.gc.ca/fundam/chapter1/chapter1_1_e.htm"
category: "lab-material"
difficulty: "advanced"
lab: "general"
topics: ["classification", "clustering", "coordinate system", "crs", "gee", "gis", "mapping", "projection", "raster", "remote sensing", "satellite", "vector"]
source: "C:/Users/cuadrodo/Documents/GitHub/Wookshop_GIS_AI/GIS_AI_062325/documents/fundamentals_RS.pdf"
type: "pdf"
pages: 258
processedAt: "2025-06-26T19:29:07.263Z"
---

# http://pcmas1.ccrs.nrcan.gc.ca/fundam/chapter1/chapter1_1_e.htm



FFuunnddaammeennttaallss
of Remote Sensing
Natural Resources    Ressources naturelles
CanadaCanada
A Canada Centre for Remote Sensing Remote Sensing Tutorial

     Table of Contents 
1.  Introduction
1.1  What is Remote Sensing? 5
1.2  Electromagnetic Radiation 7
1.3  Electromagnetic Spectrum 9
1.4  Interactions with the Atmosphere 12
1.5  Radiation - Target16
1.6  Passive vs. Active Sensing19
1.7  Characteristics of Images20
1.8  Endnotes22
Did You Know23
Whiz Quiz and Answers27
 
2.  Sensors
2.1  On the Ground, In the Air, In Space 34
2.2  Satellite Characteristics36
2.3  Pixel Size, and Scale 39
2.4  Spectral Resolution41
2.5  Radiometric Resolution 43
2.6  Temporal Resolution44
2.7  Cameras and Aerial Photography 45
2.8  Multispectral Scanning48
2.9  Thermal Imaging50
2.10  Geometric Distortion52
2.11  Weather Satellites54
2.12  Land Observation Satellites60
2.13  Marine Observation Satellites67
2.14  Other Sensors70
2.15  Data Reception72
2.16  Endnotes74
Did You Know75
Whiz Quiz and Answers83
  
  
Page 2Fundamentals of Remote Sensing - Table of Contents
Canada Centre for Remote Sensing

  
 
3.  Microwaves
3.1  Introduction  92
3.2  Radar Basic  96
3.3  Viewing Geometry & Spatial Resolution  99
3.4  Image distortion102
3.5  Target interaction106
3.6  Image Properties110
3.7  Advanced Applications114
3.8  Polarimetry117
3.9  Airborne vs Spaceborne123
3.10  Airborne & Spaceborne Systems125
3.11  Endnotes129
Did You Know131
Whiz Quiz and Answers135
 
4.  Image Analysis
4.1  Introduction141
4.2  Visual interpretation144
4.3  Digital processing147
4.4  Preprocessing149
4.5  Enhancement154
4.6  Transformations158
4.7  Classification161
4.8  Integration164
4.9  Endnotes166
Did You Know167
Whiz Quiz and Answers170
 
5.  Applications
5.1  Introduction174
5.2  Agriculture177

Crop Type Mapping  

Crop Monitoring  
5.3  Forestry184

Clear cut Mapping  

Species identification  

Burn Mapping  
  
  
Page 3Fundamentals of Remote Sensing - Table of Contents
Canada Centre for Remote Sensing

  
5.4  Geology196

Structural Mapping  

Geologic Units  
5.5  Hydrology203

Flood Delineation  

Soil Moisture  
5.6  Sea Ice209

Type and Concentration  

Ice Motion  
5.7  Land Cover215

Rural/Urban change  

Biomass Mapping  
5.8  Mapping222

Planimetry  

DEMs  

Topo Mapping  
5.9  Oceans & Coastal232

Ocean Features  

Ocean Colour  

Oil Spill Detection  
5.10  Endnotes240
Did You Know241
Whiz Quiz250
 
Credits
254
 
Permissions
256
 
Download
257
 
Notes for Teachers
258
Page 4Fundamentals of Remote Sensing - Table of Contents
Canada Centre for Remote Sensing

 
1. Introduction to Fundamentals
 
 
1.1 What is Remote Sensing? 
So, what exactly is 
remote sensing
? For the purposes of this tutorial, we will use the 
following definition: 
"Remote sensing is the science (and to some extent, art) of acquiring 
information about the Earth's surface without actually being in contact 
with it. This is done by sensing and recording reflected or emitted energy 
and processing, analyzing, and applying that information." 
In much of remote sensing, 
the process
 involves an interaction between incident radiation 
and the targets of interest. This is exemplified by the use of imaging systems where the 
following seven elements are involved. Note, however that remote sensing also involves the 
sensing of emitted energy and the use of non-imaging sensors.  
  
1. Energy Source or Illumination (A)
 - the 
first requirement for remote sensing is to have 
an energy source which illuminates or 
provides electromagnetic energy to the target 
of interest. 
2. Radiation and the Atmosphere (B)
 - as 
the energy travels from its source to the 
target, it will come in contact with and interact 
with the atmosphere it passes through. This 
interaction may take place a second time as 
the energy travels from the target to the 
sensor. 
  
3. Interaction with the Target (C)
 - once the energy makes its way to the target through the 
atmosphere, it interacts with the target depending on the properties of both the target and the 
radiation. 
Page 5Section 1.1 What is Remote Sensing?
Canada Centre for Remote Sensing

4. Recording of Energy by the Sensor (D)
 - after the energy has been scattered by, or 
emitted from the target, we require a sensor (remote - not in contact with the target) to collect 
and record the electromagnetic radiation. 
5. Transmission, Reception, and Processing (E)
 - the energy recorded by the sensor has 
to be transmitted, often in electronic form, to a receiving and processing station where the 
data are processed into an image (hardcopy and/or digital). 
6. Interpretation and Analysis (F)
 - the processed image is interpreted, visually and/or 
digitally or electronically, to extract information about the target which was illuminated. 
7. Application (G)
 - the final element of the remote sensing process is achieved when we 
apply the information we have been able to extract from the imagery about the target in order 
to better understand it, reveal some new information, or assist in solving a particular problem. 
These seven elements comprise the remote sensing process from beginning to end. We will 
be covering all of these in sequential order throughout the five chapters of this tutorial, 
building upon the information learned as we go. Enjoy the journey! 
  
Page 6Section 1.1 What is Remote Sensing?
Canada Centre for Remote Sensing

1.2 Electromagnetic Radiation 
As was noted in the previous section, the first 
requirement for remote sensing is to have an 
energy source to illuminate the target
 
(unless the sensed energy is being emitted by 
the target). This energy is in the form of 
electromagnetic radiation.  
  
  
All electromagnetic radiation has fundamental 
properties and behaves in predictable ways 
according to the basics of wave theory. 
Electromagnetic radiation
 consists of an 
electrical field(E) which varies in magnitude in 
a direction perpendicular to the direction in 
which the radiation is traveling, and a 
magnetic field (M) oriented at right angles to 
the electrical field. Both these fields travel at 
the speed of light (c). 
Two characteristics of electromagnetic 
radiation are particularly important for understanding remote sensing. These are the 
wavelength and frequency.
 
 
Page 7Section 1.2 Electromagnetic Radiation
Canada Centre for Remote Sensing

The wavelength is the length of one wave cycle, which can be measured as the distance 
between successive wave crests. Wavelength is usually represented by the Greek letter 
lambda (
λ
). Wavelength is measured in metres (m) or some factor of metres such as 
nanometres
 (nm, 10
-9
 metres), 
micrometres
 (
μ
m, 10
-6
 metres) (
μ
m, 10
-6
 metres) or 
centimetres (cm, 10
-2
 metres). Frequency refers to the number of cycles of a wave passing a 
fixed point per unit of time. Frequency is normally measured in 
hertz
 (Hz), equivalent to one 
cycle per second, and various multiples of hertz.  
Wavelength and frequency are related by the following formula:  
 
Therefore, the two are inversely related to each other. The shorter the wavelength, the higher 
the frequency. The longer the wavelength, the lower the frequency. Understanding the 
characteristics of electromagnetic radiation in terms of their wavelength and frequency is 
crucial to understanding the information to be extracted from remote sensing data. Next we 
will be examining the way in which we categorize electromagnetic radiation for just that 
purpose. 
Page 8Section 1.2 Electromagnetic Radiation
Canada Centre for Remote Sensing

1.3 The Electromagnetic Spectrum 
The 
electromagnetic spectrum
 ranges from the shorter wavelengths (including gamma and 
x-rays) to the longer wavelengths (including microwaves and broadcast radio waves). There 
are several regions of the electromagnetic spectrum which are useful for remote sensing.  
 
For most purposes, the 
ultraviolet or UV
 
portion of the spectrum has the shortest 
wavelengths which are practical for remote 
sensing. This radiation is just beyond the 
violet portion of the visible wavelengths, 
hence its name. Some Earth surface 
materials, primarily rocks and minerals, 
fluoresce or emit visible light when illuminated 
by UV radiation.  
  
  
Page 9Section 1.3 The Electromagnetic Spectrum
Canada Centre for Remote Sensing

  
 
The light which our eyes - our "remote 
sensors" - can detect is part of the 
visible 
spectrum
. It is important to recognize how 
small the visible portion is relative to the rest 
of the spectrum. There is a lot of radiation 
around us which is "invisible" to our eyes, but 
can be detected by other remote sensing 
instruments and used to our advantage. The 
visible wavelengths cover a range from 
approximately 0.4 to 0.7 
μ
m. The longest 
visible wavelength is red and the shortest is 
violet. Common wavelengths of what we 
perceive as particular colours from the visible 
portion of the spectrum are listed below. It is 
important to note that this is the only portion 
of the spectrum we can associate with the 
concept of 
colours
. 
  
  

Violet:
 0.4 - 0.446 
μ
m  

Blue:
 0.446 - 0.500 
μ
m  

Green:
 0.500 - 0.578 
μ
m  

Yellow:
 0.578 - 0.592 
μ
m  

Orange:
 0.592 - 0.620 
μ
m  

Red:
 0.620 - 0.7 
μ
m  
   
Blue
, 
green
, and 
red
 are the 
primary 
colours
 or wavelengths of the visible 
spectrum. They are defined as such because 
no single primary colour can be created from 
the other two, but all other colours can be 
formed by combining blue, green, and red in 
various proportions. Although we see sunlight 
as a uniform or homogeneous colour, it is 
actually composed of various wavelengths of 
radiation in primarily the ultraviolet, visible 
and infrared portions of the spectrum. The visible portion of this radiation can be shown in its 
Page 10Section 1.3 The Electromagnetic Spectrum
Canada Centre for Remote Sensing

component colours when sunlight is passed through a 
prism
, which bends the light in differing 
amounts according to wavelength.  
  
The next portion of the spectrum of interest is 
the infrared (IR) region which covers the 
wavelength range from approximately 0.7 
μ
m 
to 100 
μ
m - more than 100 times as wide as 
the visible portion! The infrared region can be 
divided into two categories based on their 
radiation properties - the 
reflected IR
, and 
the emitted or 
thermal IR
. Radiation in the 
reflected IR region is used for remote sensing 
purposes in ways very similar to radiation in 
the visible portion. The reflected IR covers 
wavelengths from approximately 0.7 
μ
m to 
3.0 
μ
m. The thermal IR region is quite 
different than the visible and reflected IR 
portions, as this energy is essentially the 
radiation that is emitted from the Earth's 
surface in the form of heat. The thermal IR 
covers wavelengths from approximately 3.0 
μ
m to 100 
μ
m.  
The portion of the spectrum of more recent 
interest to remote sensing is the 
microwave 
region
 from about 1 mm to 1 m. This covers 
the longest wavelengths used for remote 
sensing. The shorter wavelengths have 
properties similar to the thermal infrared 
region while the longer wavelengths approach 
the wavelengths used for radio broadcasts. 
Because of the special nature of this region 
and its importance to remote sensing in 
Canada, an entire chapter (Chapter 3) of the 
tutorial is dedicated to microwave sensing.  
Page 11Section 1.3 The Electromagnetic Spectrum
Canada Centre for Remote Sensing

1.4 Interactions with the Atmosphere 
Before radiation used for remote sensing reaches the Earth's surface it has to travel through 
some distance of the Earth's atmosphere. Particles and gases in the atmosphere can affect 
the incoming light and radiation. These effects are caused by the mechanisms of 
scattering
 
and 
absorption
.  
 
Scattering
 occurs when particles or large gas molecules present in the atmosphere interact 
with and cause the electromagnetic radiation to be redirected from its original path. How much 
scattering takes place depends on several factors including the wavelength of the radiation, 
the abundance of particles or gases, and the distance the radiation travels through the 
atmosphere. There are three (3) types of scattering which take place. 
  
  
  
Page 12Section 1.4 Interactions with the Atmosphere
Canada Centre for Remote Sensing

Rayleigh scattering
 occurs when particles are very small compared to the wavelength of the 
radiation. These could be particles such as small specks of dust or nitrogen and oxygen 
molecules. Rayleigh scattering causes shorter wavelengths of energy to be scattered much 
more than longer wavelengths. Rayleigh scattering is the dominant scattering mechanism in 
the upper atmosphere. The fact that the sky appears "blue" during the day is because of this 
phenomenon. As sunlight passes through the atmosphere, the shorter wavelengths (i.e. blue) 
of the visible spectrum are scattered more than the other (longer) visible wavelengths. At 
sunrise and sunset
 the light has to travel farther through the atmosphere than at midday and 
the scattering of the shorter wavelengths is more complete; this leaves a greater proportion of 
the longer wavelengths to penetrate the atmosphere. 
Mie scattering
 occurs when the particles are just about the same size as the wavelength of 
the radiation. Dust, pollen, smoke and water vapour are common causes of Mie scattering 
which tends to affect longer wavelengths than those affected by Rayleigh scattering. Mie 
scattering occurs mostly in the lower portions of the atmosphere where larger particles are 
more abundant, and dominates when cloud conditions are overcast. 
  
The final scattering mechanism of importance is 
called 
nonselective scattering
. This occurs when 
the particles are much larger than the wavelength of 
the radiation. Water droplets and large dust 
particles can cause this type of scattering. 
Nonselective scattering gets its name from the fact 
that all wavelengths are scattered about equally. 
This type of scattering causes fog and clouds to 
appear white to our eyes because blue, green, and 
red light are all scattered in approximately equal 
quantities (blue+green+red light = white light). 
  
  
Page 13Section 1.4 Interactions with the Atmosphere
Canada Centre for Remote Sensing

  
Absorption
 is the other main mechanism at work 
when electromagnetic radiation interacts with the 
atmosphere. In contrast to scattering, this 
phenomenon causes molecules in the atmosphere to 
absorb energy at various wavelengths. Ozone, 
carbon dioxide, and water vapour are the three main 
atmospheric constituents which absorb radiation.  
Ozone
 serves to absorb the harmful (to most living 
things) ultraviolet radiation from the sun. Without this 
protective layer in the atmosphere our skin would 
burn when exposed to sunlight. 
You may have heard 
carbon dioxide
 referred to as 
a greenhouse gas. This is because it tends to absorb radiation strongly in the far infrared 
portion of the spectrum - that area associated with thermal heating - which serves to trap this 
heat inside the atmosphere. Water vapour in the atmosphere absorbs much of the incoming 
longwave infrared and shortwave microwave radiation (between 22μm and 1m). The 
presence of water vapour in the lower atmosphere varies greatly from location to location and 
at different times of the year. For example, the air mass above a desert would have very little 
water vapour to absorb energy, while the tropics would have high concentrations of water 
vapour (i.e. high humidity). 
  
Because these gases absorb 
electromagnetic energy in very 
specific regions of the spectrum, they 
influence where (in the spectrum) we 
can "look" for remote sensing 
purposes. Those areas of the 
spectrum which are not severely 
influenced by atmospheric absorption 
and thus, are useful to remote 
sensors, are called 
atmospheric 
windows
. By comparing the 
characteristics of the two most 
common energy/radiation sources 
(the sun and the earth) with the 
atmospheric windows available to us, we can define those wavelengths that we can 
use 
most effectively
 for remote sensing. The visible portion of the spectrum, to 
which our eyes are most sensitive, corresponds to both an atmospheric window and 
the peak energy level of the sun. Note also that heat energy emitted by the Earth 
corresponds to a window around 10 
μ
m in the thermal IR portion of the spectrum, 
while the large window at wavelengths beyond 1 mm is associated with the 
Page 14Section 1.4 Interactions with the Atmosphere
Canada Centre for Remote Sensing

microwave region. 
  
Now that we understand how electromagnetic energy makes its journey from its source to the 
surface (and it is a difficult journey, as you can see) we will next examine what happens to 
that radiation when it does arrive at the Earth's surface.  
Page 15Section 1.4 Interactions with the Atmosphere
Canada Centre for Remote Sensing

1.5 Radiation - Target Interactions 
Radiation that is not absorbed or scattered in 
the atmosphere can reach and interact with 
the Earth's surface. There are three (3) forms 
of interaction that can take place when energy 
strikes, or is 
incident (I)
 upon the surface. 
These are: 
absorption (A)
; 
transmission 
(T)
; and 
reflection (R)
. The total incident 
energy will interact with the surface in one or 
more of these three ways. The proportions of 
each will depend on the wavelength of the 
energy and the material and condition of the 
feature. 
  
  
Absorption (A) occurs when radiation (energy) is absorbed into the target while transmission 
(T) occurs when radiation passes through a target. Reflection (R) occurs when radiation 
"bounces" off the target and is redirected. In remote sensing, we are most interested in 
measuring the radiation reflected from targets. We refer to two types of reflection, which 
represent the two extreme ends of the way in which energy is reflected from a target: 
specular reflection
 and 
diffuse reflection
. 
Page 16Section 1.5 Radiation - Target Interactions
Canada Centre for Remote Sensing

When a surface is smooth we get 
specular
 or mirror-like reflection where all (or almost all) of 
the energy is directed away from the surface in a single direction. 
Diffuse
 reflection occurs 
when the surface is rough and the energy is reflected almost uniformly in all directions. Most 
earth surface features lie somewhere between perfectly specular or perfectly diffuse 
reflectors. Whether a particular target reflects specularly or diffusely, or somewhere in 
between, depends on the surface roughness of the feature in comparison to the wavelength of 
the incoming radiation. If the wavelengths are much smaller than the surface variations or the 
particle sizes that make up the surface, diffuse reflection will dominate. For example, fine-
grained sand would appear fairly smooth to long wavelength microwaves but would appear 
quite rough to the visible wavelengths.   
Let's take a look at a couple of examples of targets at the Earth's surface and how energy at 
the visible and infrared wavelengths interacts with them. 
Leaves
: A chemical compound in leaves 
called chlorophyll strongly absorbs 
radiation in the red and blue 
wavelengths but reflects green 
wavelengths. Leaves appear "greenest" 
to us in the summer, when chlorophyll 
content is at its maximum. In autumn, 
there is less chlorophyll in the leaves, so 
there is less absorption and 
proportionately more reflection of the red 
wavelengths, making the leaves appear 
red or yellow (yellow is a combination of 
red and green wavelengths). The 
internal structure of healthy leaves act as excellent diffuse reflectors of near-infrared 
wavelengths. If our eyes were sensitive to near-infrared, trees would appear extremely bright 
to us at these wavelengths. In fact, measuring and monitoring the near-IR reflectance is one 
way that scientists can determine how healthy (or unhealthy) vegetation may be. 
Water
: Longer wavelength visible and near 
infrared radiation is absorbed more by water 
than shorter visible wavelengths. Thus water 
typically looks blue or blue-green due to 
stronger reflectance at these shorter 
wavelengths, and darker if viewed at red or 
near infrared wavelengths. If there is 
suspended sediment present in the upper 
layers of the water body, then this will allow 
better reflectivity and a brighter appearance 
of the water. The apparent colour of the 
water will show a slight shift to longer 
Page 17Section 1.5 Radiation - Target Interactions
Canada Centre for Remote Sensing

wavelengths. Suspended sediment (S) can 
be easily confused with shallow (but clear) water, since these two phenomena appear very 
similar. Chlorophyll in algae absorbs more of the blue wavelengths and reflects the green, 
making the water appear more green in colour when algae is present. The topography of the 
water surface (rough, smooth, floating materials, etc.) can also lead to complications for 
water-related interpretation due to potential problems of specular reflection and other 
influences on colour and brightness. 
 
We can see from these examples that, depending on the complex make-up of the target that 
is being looked at, and the wavelengths of radiation involved, we can observe very different 
responses to the mechanisms of absorption, transmission, and reflection. By measuring the 
energy that is reflected (or emitted) by targets on the Earth's surface over a variety of different 
wavelengths, we can build up a 
spectral response
 for that object. By comparing the 
response patterns of different features we may be able to distinguish between them, where 
we might not be able to, if we only compared them at one wavelength. For example, water 
and vegetation may reflect somewhat similarly in the visible wavelengths but are almost 
always separable in the infrared. Spectral response can be quite variable, even for the same 
target type, and can also vary with time (e.g. "green-ness" of leaves) and location. Knowing 
where to "look" spectrally and understanding the factors which influence the spectral response 
of the features of interest are critical to correctly interpreting the interaction of electromagnetic 
radiation with the surface. 
Page 18Section 1.5 Radiation - Target Interactions
Canada Centre for Remote Sensing

1.6 Passive vs. Active Sensing 
So far, throughout this chapter, we have made 
various references to the sun as a source of 
energy or radiation. The sun provides a very 
convenient source of energy for remote sensing. 
The sun's energy is either 
reflected
, as it is for 
visible wavelengths, or absorbed and then 
re-
emitted
, as it is for thermal infrared 
wavelengths. Remote sensing systems which 
measure energy that is naturally available are 
called 
passive sensors
. Passive sensors can 
only be used to detect energy when the naturally 
occurring energy is available. For all reflected 
energy, this can only take place during the time 
when the sun is illuminating the Earth. There is 
no reflected energy available from the sun at night. Energy that is naturally emitted (such as 
thermal infrared) can be detected day or night, as long as the amount of energy is large 
enough to be recorded.  
Active sensors
, on the other hand, provide their own 
energy source for illumination. The sensor emits radiation 
which is directed toward the target to be investigated. The 
radiation reflected from that target is detected and 
measured by the sensor. Advantages for active sensors 
include the ability to obtain measurements anytime, 
regardless of the time of day or season. Active sensors can 
be used for examining wavelengths that are not sufficiently 
provided by the sun, such as microwaves, or to better 
control the way a target is illuminated. However, active 
systems require the generation of a fairly large amount of 
energy to adequately illuminate targets. Some examples of 
active sensors are a laser fluorosensor and a synthetic 
aperture radar (SAR). 
Page 19Section 1.6 Passive vs. Active Sensing
Canada Centre for Remote Sensing

1.7 Characteristics of Images 
Before we go on to the next chapter, which looks in more detail at sensors and their 
characteristics, we need to define and understand a few fundamental terms and 
concepts associated with remote sensing images. 
Electromagnetic energy may be detected either 
photographically or electronically. The 
photographic process uses chemical reactions 
on the surface of light-sensitive film to detect 
and record energy variations. It is important to 
distinguish between the terms 
images
 and 
photographs
 in remote sensing. An image 
refers to any pictorial representation, regardless 
of what wavelengths or remote sensing device 
has been used to detect and record the 
electromagnetic energy. A 
photograph
 refers 
specifically to images that have been detected as well as recorded on photographic 
film. The black and white photo to the left, of part of the city of Ottawa, Canada was 
taken in the visible part of the spectrum. Photos are normally recorded over the 
wavelength range from 0.3 
μ
m to 0.9 
μ
m - the visible and reflected infrared. Based 
on these definitions, we can say that all photographs are images, but not all images 
are photographs. Therefore, unless we are talking specifically about an image 
recorded photographically, we use the term image. 
A photograph could also be 
represented and displayed in a 
digital
 format by subdividing the 
image into small equal-sized and 
shaped areas, called picture 
elements or 
pixels
, and 
representing the brightness of each 
area with a numeric value or 
digital 
number
. Indeed, that is exactly 
what has been done to the photo to 
the left. In fact, using the definitions 
we have just discussed, this is 
actually a 
digital image
 of the 
original photograph! The photograph was scanned and subdivided into pixels with 
each pixel assigned a digital number representing its relative brightness. The 
computer displays each digital value as different brightness levels. Sensors that 
Page 20Section 1.7 Characteristics of Images
Canada Centre for Remote Sensing

record electromagnetic energy, electronically record the energy as an array of 
numbers in digital format right from the start. These two different ways of 
representing and displaying remote sensing data, either pictorially or digitally, are 
interchangeable as they convey the same information (although some detail may be 
lost when converting back and forth).  
In previous sections we described the visible portion of the spectrum and the 
concept of colours. We see colour because our eyes detect the entire visible range 
of wavelengths and our brains process the information into separate colours. Can 
you imagine what the world would look like if we could only see very narrow ranges 
of wavelengths or colours? That is how many sensors work. The information from a 
narrow wavelength range is gathered and stored in a 
channel
, also sometimes 
referred to as a 
band
. We can combine and display channels of information digitally 
using the three primary colours (blue, green, and red). The data from each channel 
is represented as one of the primary colours and, depending on the relative 
brightness (i.e. the digital value) of each pixel in each channel, the primary colours 
combine in different proportions to represent different colours. 
 
 
 
When we use this method to display a single channel or range of wavelengths, we 
are actually displaying that channel through all three primary colours. Because the 
brightness level of each pixel is the same for each primary colour, they combine to 
form a 
black and white image
, showing various shades of gray from black to white. 
When we display more than one channel each as a different primary colour, then the 
brightness levels may be different for each channel/primary colour combination and 
they will combine to form a 
colour image
.  
Page 21Section 1.7 Characteristics of Images
Canada Centre for Remote Sensing

1.8 Endnotes 
You have just completed 
Chapter 1 - Fundamentals of Remote Sensing
. You can continue 
to Chapter 2 - Satellites and Sensors or first browse the CCRS Web site
1
 for other articles 
related to remote sensing fundamentals. 
For instance, you may want to look at some conventional
2
 or unconventional definitions
3
 of 
"remote sensing" developed by experts and other rif-raf from around the world. 
We have an explanation and calculation on just how much you need to worry about the effect 
of radiation
4
 from Canada's first remote sensing satellite: RADARSAT.
 
The knowledge of how radiation interacts with the atmospheric is used by scientists in the 
Environmental Monitoring Section of CCRS to develop various "radiation products"
5
. Check 
them out! 
Learn more on how various targets like water
6
, rocks
7
, ice
8
, man-made features
9
, and oil 
slicks
10
 interact with microwave energy. 
 
Our Remote Sensing Glossary
11
 can help fill out your knowledge of remote sensing 
fundamentals. Try searching for specific terms of interest or review the terms in the 
"phenomena" category. 
 
 
1
http://www.ccrs.nrcan.gc.ca/
 
2
http://www.ccrs.nrcan.gc.ca/ccrs/learn/terms/definition/convdef_e.html
 
3
http://www.ccrs.nrcan.gc.ca/ccrs/learn/terms/definition/unconvdef_e.html
 
4
http://www.ccrs.nrcan.gc.ca/ccrs/learn/fun/radiation/radiation_e.html
 
5
http://www.ccrs.nrcan.gc.ca/ccrs/rd/apps/landcov/rad/emrad_e.html
 
6
http://www.ccrs.nrcan.gc.ca/ccrs/data/satsens/radarsat/images/man/rman01_e.html
 
7
http://www.ccrs.nrcan.gc.ca/ccrs/data/satsens/radarsat/images/nwt/rnwt01_e.html
 
8
http://www.ccrs.nrcan.gc.ca/ccrs/data/satsens/radarsat/images/pei/rpei01_e.html
 
9
http://www.ccrs.nrcan.gc.ca/ccrs/rd/ana/cnfdbrig/confed_e.html
 
10
http://www.ccrs.nrcan.gc.ca/ccrs/data/satsens/radarsat/images/uk/ruk01_e.html
 
11
http://www.ccrs.nrcan.gc.ca/ccrs/learn/terms/glossary/glossary_e.html
 
Page 22Section 1.8 Endnotes
Canada Centre for Remote Sensing

 
1. Did You Know
 
 
1.1 Did You Know? 
 
Of our five senses (sight, hearing, taste, smell, touch), three may be considered forms of 
"remote sensing", where the source of information is at some distance. The other two rely on 
direct contact with the source of information - which are they? 
Page 23Section 1 Did you know?
Canada Centre for Remote Sensing

1.2 Did You Know? 
"I've Gone Batty!"  
...that remote sensing, in its broadest definition, 
includes ultrasounds, satellite weather maps, speed 
radar, graduation photos, and sonar - both for ships 
and for bats!. Hospitals use imaging technology, 
including CAT scans, magnetic resonance imaging (3-
D imaging of soft tissue), and x-rays for examining our 
bodies. These are all examples of non-intrusive remote 
sensing methods. 
...you can use an oscilloscope, a special electronic device which displays waves similar to the 
electromagnetic radiation waves you have seen here, to look at the wavelength and frequency 
patterns of your voice. High-pitched sounds have short wavelengths and high frequencies. 
Low sounds are the opposite. Scientists say that the Earth itself vibrates at a very low 
frequency, making a sound far below the human hearing range. 
...that the concept of wavelength and frequency is an important principle behind something 
called the Doppler Shift, which explains how sound and light waves are perceived to be 
compressed or expanded if the object producing them is moving relative to the sensor. As a 
train or race car advances towards us, our ears tend to hear progressively lower sounds or 
frequencies (shorter wavelengths) until it reaches us, the original frequency of the object when 
it is broadside, then even lower frequencies as it moves further away. This same principle 
(applied to light) is used by astronomers to see how quickly stars are moving away from us 
(the Red shift).  
Page 24Section 1 Did you know?
Canada Centre for Remote Sensing
1.3 Did You Know? 
 
Hue
 and 
saturation
 are independent characteristics of colour. Hue refers to the wavelength 
of light, which we commonly call "colour", while saturation indicates how pure the colour is, or 
how much white is mixed in with it. For instance, "pink" can be considered a less saturated 
version of "red". 

1.4 Did You Know? 
"...sorry, no pot of gold at the end of this rainbow..." 
 
...water droplets act as tiny, individual prisms. When sunlight passes through them, the 
constituent wavelengths are bent in varying amounts according to wavelength. Individual 
colours in the sunlight are made visible and a rainbow is the result, with shorter wavelengths 
(violet, blue) in the inner part of the arc, and longer wavelengths (orange, red) along the outer 
arc.  
...if scattering of radiation in the atmosphere did not take place, then shadows would appear 
as jet black instead of being various degrees of darkness. Scattering causes the atmosphere 
to have its own brightness (from the light scattered by particles in the path of sunlight) which 
helps to illuminate the objects in the shadows.  
Page 25Section 1 Did you know?
Canada Centre for Remote Sensing
1.5 Did You Know? 
"...now, here's something to 'reflect' on..."  
 
... the colours we perceive are a combination of these radiation interactions (absorption, 
transmission, reflection), and represent the wavelengths being reflected. If all visible 
wavelengths are reflected from an object, it will appear white, while an object absorbing all 
visible wavelengths will appear colourless, or black.  

1.6 Did You Know? 
"...say 'Cheese'!..." 
...a camera provides an excellent example of both passive and active sensors. During a bright 
sunny day, enough sunlight is illuminating the targets and then reflecting toward the camera 
lens, that the camera simply records the radiation provided (passive mode). On a cloudy day 
or inside a room, there is often not enough sunlight for the camera to record the targets 
adequately. Instead, it uses its own energy source - a flash - to illuminate the targets and 
record the radiation reflected from them (active mode). 
... radar used by police to measure the speed of 
traveling vehicles is a use of active remote sensing. 
The radar device is pointed at a vehicle, pulses of 
radiation are emitted, and the reflection of that radiation 
from the vehicle is detected and timed. The speed of 
the vehicle is determined by calculating time delays 
between the repeated emissions and reception of the 
pulses. This can be calculated very accurately because 
the speed of the radiation is moving much, much faster than most vehicles...unless you're 
driving at the speed of light!  
Page 26Section 1 Did you know?
Canada Centre for Remote Sensing
1.7 Did You Know? 
 
Photographic film has the clear advantage of 
recording extremely fine spatial detail, since 
individual silver halide molecules can record 
light sensitivity differently than their 
neighbouring molecules. But when it comes 
to spectral and radiometric qualities, digital 
sensors outperform film, by being able to use 
extremely fine spectral bands (for spectral 
'fingerprinting' of targets), and recording up 
to many thousands of levels of brightness. 

 
1. Whiz Quiz and Answers 
 
 
1.1 Whiz Quiz 
 
Can "remote sensing" employ anything other than electromagnetic radiation?    
Page 27Section 1 Whiz Quiz and Answers
Canada Centre for Remote Sensing
1.1 Whiz Quiz - Answer 
While the term 'remote sensing' typically assumes the use of electromagnetic radiation, the 
more general definition of 'acquiring information at a distance', does not preclude other forms 
of energy. The use of sound is an obvious alternative; thus you can claim that your telephone 
conversation is indeed 'remote sensing'. 

1.2 Whiz Quiz 
The first requirement for remote sensing is an energy source which can illuminate a target. 
What is the obvious source of electromagnetic energy that you can think of? What "remote 
sensing device" do you personally use to detect this energy?    
  
Assume the speed of light to be 3x10
8
 m/s. If the frequency of an 
electromagnetic wave is 500,000 GHz (GHz = gigahertz = 10
9
 m/s), what is 
the wavelength of that radiation? Express your answer in micrometres
(
μ
m).  
  
  
Page 28Section 1 Whiz Quiz and Answers
Canada Centre for Remote Sensing
1.2 Whiz Quiz - Answers 
Answer 1:
 The most obvious source of electromagnetic energy and radiation is the sun. The 
sun provides the initial energy source for much of the remote sensing of the Earth surface. 
The remote sensing device that we humans use to detect radiation from the sun is our eyes. 
Yes, they can be considered remote sensors - and very good ones - as they detect the visible 
light from the sun, which allows us to see. There are other types of light which are invisible to 
us...but more about that later. 
Answer 2:
 Using the equation for the relationship between wavelength and frequency, let's 
calculate the wavelength of radiation of a frequency of 500,000 GHz. 

1.3 Whiz Quiz 
The infrared portion of the electromagnetic spectrum has two parts: the reflective and the 
emissive. Can you take photographs in these wavelength ranges?       
 
  
Page 29Section 1 Whiz Quiz and Answers
Canada Centre for Remote Sensing
1.3 Whiz Quiz - Answer 
Yes and no. There are photographic films in black and white as well as colour emulsions, 
which are sensitive to the reflective portion of the infrared band and these are used for 
scientific and artistic purposes too. But no photographic films exist to directly record emissive 
infrared (heat). If they did, then they would have to be cooled (and kept very cold during use), 
which would be very impractical. However there are a number of electronic devices which 
detect and record thermal infrared images. 

1.4 Whiz Quiz 
1. Most remote sensing systems avoid detecting and recording 
wavelengths in the ultraviolet and blue portions of the 
spectrum. Explain why this would be the case.    
is ... 
  
2. What do you think would be some of the best atmospheric 
conditions for remote sensing in the visible portion of the 
spectrum?     
  
Page 30Section 1 Whiz Quiz and Answers
Canada Centre for Remote Sensing
1.4 Whiz Quiz - Answer 
1. Detecting and recording the ultraviolet and blue wavelengths 
of radiation is difficult because of scattering and absorption in 
the atmosphere. Ozone gas in the upper atmosphere absorbs 
most of the ultraviolet radiation of wavelengths shorter than 
about 0.25 mm. This is actually a positive thing for us and most 
other living things, because of the harmful nature of ultraviolet 
radiation below these wavelengths. Rayleigh scattering, which 
affects the shorter wavelengths more severely than longer 
wavelengths, causes the remaining UV radiation and the 
shorter visible wavelengths (i.e. blue) to be scattered much 
more than longer wavelengths, so that very little of this energy 
is able to reach and interact with the Earth's surface. In fact, 
blue light is scattered about 4 times as much as red light, while 
UV light is scattered 16 times as much as red light! 
  
2. Around noon on a sunny, dry day with no clouds and 
no pollution would be very good for remote sensing in 
the visible wavelengths. At noon the sun would be at 
its most directly overhead point, which would reduce 
the distance the radiation has to travel and therefore 
the effects of scattering, to a minimum. Cloud-free 
conditions would ensure that there will be uniform 
illumination and that there will be no shadows from clouds. Dry, pollutant-free conditions 
would minimize the scattering and absorption that would take place due to water droplets and 
other particles in the atmosphere. 

1.5 Whiz Quiz 
 
On a clear night with the crescent or half moon showing, it is possible to see the outline and 
perhaps very slight detail of the dark portion of the moon. Where is the light coming from, that 
illuminates the dark side of the moon? 
Page 31Section 1 Whiz Quiz and Answers
Canada Centre for Remote Sensing
1.5 Whiz Quiz - Answer 
 
The light originates from the sun (of course), hits the earth, bounces up to the (dark side of 
the) moon and then comes back to the earth and into your eye. A long way around - isn't it? 

1.6 Whiz Quiz 
 
Is there a passive equivalent to the radar sensor? 
Page 32Section 1 Whiz Quiz and Answers
Canada Centre for Remote Sensing
1.6 Whiz Quiz - Answer 
Indeed. The passive microwave radiometer, for instance, does not carry an illumination 
source, relying instead on detecting naturally emitted microwave energy. Such an instrument 
can be used for detecting, identifying and measuring marine oil slicks, for instance. 

1.7 Whiz Quiz 
 
1. If you wanted to map the deciduous (e.g. maple, birch) and the coniferous (e.g. pine, fir, 
spruce) trees in a forest in summer using remote sensing data, what would be the best way to 
go about this and why? Use the reflectance curves illustrating the spectral response patterns 
of these two categories to help explain your answer. 
2. What would be the advantage of displaying various wavelength ranges, or channels, in 
combination as colour images as opposed to examining each of the images individually? 
 
Page 33Section 1 Whiz Quiz and Answers
Canada Centre for Remote Sensing
1.7 Whiz Quiz - Answer 
1. Because both types of trees will appear as similar shades of green to the naked eye, 
imagery (or photography) using the visible portion of the spectrum may not be useful. Trying 
to distinguish the different types from aerial photographs based on tree crown shape or size 
might also be difficult, particularly when the tree types are intermixed. Looking at the 
reflectance curves for the two types, it is clear that they would be difficult to distinguish using 
any of the visible wavelengths. However, in the near-infrared, although both types reflect a 
significant portion of the incident radiation, they are clearly separable. Thus, a remote sensing 
system, such as black and white infrared film, which detects the infrared reflectance around 
0.8 mm wavelength would be ideal for this purpose.  
2. By combining different channels of imagery representing different wavelengths, we may be 
able to identify combinations of reflectance between the different channels which highlight 
features that we would not otherwise be able to see, if we examine only one channel at a 
time. Additionally, these combinations may manifest themselves as subtle variations in colour 
(which our eyes are more sensitive to), rather than variations in gray tone, as would be seen 
when examining only one image at a time. 

2. Satellites and Sensors
 
 
2.1 On the Ground, In the Air, In Space 
In Chapter 1 we learned some of the 
fundamental concepts required to understand 
the process that encompasses remote 
sensing. We covered in some detail the first 
three components of this process: the energy 
source, interaction of energy with the 
atmosphere, and interaction of energy with the 
surface. We touched briefly on the fourth 
component - 
recording of energy by the 
sensor
 - when we discussed passive vs. 
active sensors and characteristics of images. 
In this chapter, we will take a closer look at 
this component of the remote sensing process 
by examining in greater detail, the characteristics of remote sensing platforms and sensors 
and the data they collect. We will also touch briefly on how those data are processed once 
they have been recorded by the sensor. 
In order for a sensor to collect and record energy 
reflected or emitted from a target or surface, it must 
reside on a stable 
platform
 removed from the target or 
surface being observed. Platforms for remote sensors 
may be situated on the ground, on an aircraft or balloon 
(or some other platform within the Earth's atmosphere), 
or on a spacecraft or satellite outside of the Earth's 
atmosphere. 
  
Ground-based sensors
 are often used to record detailed information about the surface 
which is compared with information collected from aircraft or satellite sensors. In some cases, 
Page 34Section 2.1 On the Ground, In the Air, In Space
Canada Centre for Remote Sensing

this can be used to better characterize the target which is being imaged by these other 
sensors, making it possible to better understand the information in the imagery. 
  
Sensors may be placed on a ladder, 
scaffolding, tall building, cherry-picker, crane, 
etc. Aerial platforms are primarily stable wing 
aircraft
, although helicopters are occasionally 
used. Aircraft are often used to collect very 
detailed images and facilitate the collection of 
data over virtually any portion of the Earth's 
surface at any time. 
  
In space, remote sensing is sometimes conducted 
from the 
space shuttle
 or, more commonly, from 
satellites. 
Satellites
 are objects which revolve around 
another object - in this case, the Earth. For example, 
the moon is a natural satellite, whereas man-made 
satellites include those platforms launched for remote 
sensing, communication, and telemetry (location and 
navigation) purposes. Because of their orbits, 
satellites permit repetitive coverage of the Earth's 
surface on a continuing basis. Cost is often a 
significant factor in choosing among the various platform options.  
 
Page 35Section 2.1 On the Ground, In the Air, In Space
Canada Centre for Remote Sensing

2.2 Satellite Characteristics: Orbits and Swaths 
We learned in the previous section that remote sensing instruments can be placed on a 
variety of platforms to view and image targets. Although ground-based and aircraft platforms 
may be used, satellites provide a great deal of the remote sensing imagery commonly used 
today. Satellites have several unique characteristics which make them particularly useful for 
remote sensing of the Earth's surface. 
The path followed by a satellite is referred to as its 
orbit
. Satellite orbits are matched to the capability 
and objective of the sensor(s) they carry. Orbit 
selection can vary in terms of altitude (their height 
above the Earth's surface) and their orientation and 
rotation relative to the Earth. Satellites at very high 
altitudes, which view the same portion of the 
Earth's surface at all times have 
geostationary 
orbits
. These geostationary satellites, at altitudes 
of approximately 36,000 kilometres, revolve at 
speeds which match the rotation of the Earth so 
they seem stationary, relative to the Earth's 
surface. This allows the satellites to observe and collect information continuously over specific 
areas. Weather and communications satellites commonly have these types of orbits. Due to 
their high altitude, some geostationary weather satellites can monitor weather and cloud 
patterns covering an entire hemisphere of the Earth. 
Many remote sensing platforms are designed to follow an 
orbit (basically north-south) which, in conjunction with the 
Earth's rotation (west-east), allows them to cover most of the 
Earth's surface over a certain period of time. These are 
near-
polar orbits
, so named for the inclination of the orbit relative 
to a line running between the North and South poles. Many of 
these satellite orbits are also 
sun-synchronous
 such that 
they cover each area of the world at a constant local time of 
day called 
local sun time
. At any given latitude, the position 
of the sun in the sky as the satellite passes overhead will be 
the same within the same season. This ensures consistent 
illumination conditions when acquiring images in a specific 
season over successive years, or over a particular area over 
a series of days. This is an important factor for monitoring 
changes between images or for mosaicking adjacent images 
together, as they do not have to be corrected for different 
illumination conditions. 
  
Page 36Section 2.2 Satellite Characteristics: Orbits and Swaths
Canada Centre for Remote Sensing

  
Most of the remote sensing satellite platforms today 
are in near-polar orbits, which means that the satellite 
travels northwards on one side of the Earth and then 
toward the southern pole on the second half of its 
orbit. These are called 
ascending and descending 
passes
, respectively. If the orbit is also sun-
synchronous, the ascending pass is most likely on the 
shadowed side of the Earth while the descending 
pass is on the sunlit side. Sensors recording reflected 
solar energy only image the surface on a descending 
pass, when solar illumination is available. Active 
sensors which provide their own illumination or 
passive sensors that record emitted (e.g. thermal) 
radiation can also image the surface on ascending 
passes. 
  
  
As a satellite revolves around the Earth, the sensor 
"sees" a certain portion of the Earth's surface. The area 
imaged on the surface, is referred to as the 
swath
. 
Imaging swaths for spaceborne sensors generally vary 
between tens and hundreds of kilometres wide. As the 
satellite orbits the Earth from pole to pole, its east-west 
position wouldn't change if the Earth didn't rotate. 
However, as seen from the Earth, it seems that the 
satellite is shifting westward because the Earth is rotating 
(from west to east) beneath it. This apparent movement 
allows the satellite swath to cover a 
new area with each 
consecutive pass
. The satellite's orbit and the rotation o
f 
the Earth work together to allow complete coverage of 
the Earth's surface, after it has completed one complete cycle of orbits. 
  
  
  
  
 
Page 37Section 2.2 Satellite Characteristics: Orbits and Swaths
Canada Centre for Remote Sensing

 
 
 
 
 
 
 
  
 
  
  
If we start with any randomly selected pass 
in a satellite's orbit, an orbit cycle will be 
completed when the satellite retraces its 
path, passing over the same point on the 
Earth's surface directly below the satellite 
(called the 
nadir
 point) for a second time. 
The exact length of time of the orbital cycle 
will vary with each satellite. The interval of 
time required for the satellite to complete its 
orbit cycle is not the same as the "
revisit 
period
". Using steerable sensors, an 
satellite-borne instrument can view an area (off-nadir) before and after the orbit passes over a 
target, thus making the 'revisit' time less than the orbit cycle time. The revisit period is an 
important consideration for a number of monitoring applications, especially when frequent 
imaging is required (for example, to monitor the spread of an oil spill, or the extent of 
flooding). In near-polar orbits, areas at high latitudes will be imaged more frequently than the 
equatorial zone due to the increasing 
overlap in adjacent swaths
 as the orbit paths come 
closer together near the poles. 
 
Page 38Section 2.2 Satellite Characteristics: Orbits and Swaths
Canada Centre for Remote Sensing

2.3 Spatial Resolution, Pixel Size, and Scale 
For some remote sensing instruments, the distance between the target being imaged and the 
platform, plays a large role in determining the detail of information obtained and the total area 
imaged by the sensor. Sensors onboard platforms far away from their targets, typically view a 
larger area, but cannot provide great detail. Compare what an astronaut onboard the space 
shuttle sees of the Earth to what you can see from an airplane. The astronaut might see your 
whole province or country in one glance, but couldn't distinguish individual houses. Flying ove
r
a city or town, you would be able to see individual buildings and cars, but you would be 
viewing a much smaller area than the astronaut. There is a similar difference between satellite 
images and airphotos. 
The detail discernible in an image is dependent on the 
spatial resolution
 of the sensor and refers to the size of 
the smallest possible feature that can be detected. 
Spatial resolution of passive sensors (we will look at the 
special case of active microwave sensors later) depends 
primarily on their 
Instantaneous Field of View (IFOV)
. 
The IFOV is the angular cone of visibility of the sensor (A) 
and determines the area on the Earth's surface which is 
"seen" from a given altitude at one particular moment in 
time (B). The size of the area viewed is determined by 
multiplying the IFOV by the distance from the ground to 
the sensor (C). This area on the ground is called the 
resolution cell
 and determines a sensor's maximum 
spatial resolution. For a homogeneous feature to be 
detected, its size generally has to be equal to or larger than the resolution cell. If the feature is 
smaller than this, it may not be detectable as the average brightness of all features in that 
resolution cell will be recorded. However, smaller features may sometimes be detectable if 
their reflectance dominates within a articular resolution cell allowing sub-pixel or resolution cell 
detection. 
As we mentioned in Chapter 1, most remote sensing images are composed of a matrix of 
picture elements, or 
pixels
, which are the smallest units of an image. Image pixels are 
normally square and represent a certain area on an image. It is important to distinguish 
between pixel size and spatial resolution - they are not interchangeable. If a sensor has a 
spatial resolution of 20 metres and an image from that sensor is displayed at full resolution, 
each pixel represents an area of 20m x 20m on the ground. In this case the pixel size and 
resolution are the same. However, it is possible to display an image with a pixel size different 
than the resolution. Many posters of satellite images of the Earth have their pixels averaged to 
represent larger areas, although the original spatial resolution of the sensor that collected the 
imagery remains the same. 
  
Page 39Section 2.3 Spatial Resolution, Pixel Size, and Scale
Canada Centre for Remote Sensing

  
  
  
  
Images where only large features are visible are said to have 
coarse or low resolution.
 In 
fine or high resolution
 images, small objects can be detected. Military sensors for example, 
are designed to view as much detail as possible, and therefore have very fine resolution. 
Commercial satellites provide imagery with resolutions varying from a few metres to several 
kilometres. Generally speaking, the finer the resolution, the less total ground area can be 
seen.  
The ratio of distance on an image or map, to actual ground distance is referred to as scale. If 
you had a map with a scale of 1:100,000, an object of 1cm length on the map would actually 
be an object 100,000cm (1km) long on the ground. Maps or images with small "map-to-ground 
ratios" are referred to as small scale (e.g. 1:100,000), and those with larger ratios (e.g. 
1:5,000) are called large scale. 
Page 40Section 2.3 Spatial Resolution, Pixel Size, and Scale
Canada Centre for Remote Sensing

2.4 Spectral Resolution 
 
In Chapter 1, we learned about 
spectral response
 and 
spectral emissivity curves
 which 
characterize the reflectance and/or emittance of a feature or target over a variety of 
wavelengths. Different classes of features and details in an image can often be distinguished 
by comparing their responses over distinct wavelength ranges. Broad classes, such as water 
and vegetation, can usually be separated using very broad wavelength ranges - the visible 
and near infrared - as we learned in section 1.5. Other more specific classes, such as 
different rock types
, may not be easily distinguishable using either of these broad 
wavelength ranges and would require comparison at much finer wavelength ranges to 
separate them. Thus, we would require a sensor with higher 
spectral resolution
. Spectral 
resolution describes the ability of a sensor to define fine wavelength intervals. The finer the 
spectral resolution, the narrower the wavelength range for a particular channel or band. 
  
Black and white film records wavelengths extending over much, or all of the visible portion of 
the electromagnetic spectrum. Its 
spectral resolution
 is fairly coarse, as the various 
wavelengths of the visible spectrum are not individually distinguished and the overall 
Page 41Section 2.4 Spectral Resolution
Canada Centre for Remote Sensing

reflectance in the entire visible portion is recorded. Colour film is also sensitive to the reflected 
energy over the visible portion of the spectrum, but has higher spectral resolution, as it is 
individually sensitive to the reflected energy at the blue, green, and red wavelengths of the 
spectrum. Thus, it can represent features of various colours based on their reflectance in each 
of these distinct wavelength ranges. 
Many remote sensing systems record energy over several separate wavelength ranges at 
various spectral resolutions. These are referred to as 
multi-spectral sensors
 and will be 
described in some detail in following sections. Advanced multi-spectral sensors called 
hyperspectral
 sensors, detect hundreds of very narrow spectral bands throughout the visible, 
near-infrared, and mid-infrared portions of the electromagnetic spectrum. Their very high 
spectral resolution facilitates fine discrimination between different targets based on their 
spectral response in each of the narrow bands. 
Page 42Section 2.4 Spectral Resolution
Canada Centre for Remote Sensing

2.5 Radiometric Resolution 
While the arrangement of pixels describes the spatial structure of an image, the radiometric 
characteristics describe the actual information content in an image. Every time an image is 
acquired on film or by a sensor, its sensitivity to the magnitude of the electromagnetic energy 
determines the 
radiometric resolution
. The radiometric resolution of an imaging system 
describes its ability to discriminate very slight differences in energy The finer the radiometric 
resolution of a sensor, the more sensitive it is to detecting small differences in reflected or 
emitted energy. 
 
Imagery data are represented by positive digital numbers which vary from 0 to (one less than) 
a selected power of 2. This range corresponds to the number of bits used for coding numbers 
in binary format. Each bit records an exponent of power 2 (e.g. 1 bit=2 
1
=2). The maximum 
number of brightness levels available depends on the number of bits used in representing the 
energy recorded. Thus, if a sensor used 8 bits to record the data, there would be 2
8
=256 
digital values available, ranging from 0 to 255. However, if only 4 bits were used, then only 
2
4
=16 values ranging from 0 to 15 would be available. Thus, the radiometric resolution would 
be much less. Image data are generally displayed in a range of grey tones, with black 
representing a digital number of 0 and white representing the maximum value (for example, 
255 in 8-bit data). By 
comparing a 2-bit image with an 8-bit image
, we can see that there is 
a large difference in the level of detail discernible depending on their radiometric resolutions. 
Page 43Section 2.5 Radiometric Resolution
Canada Centre for Remote Sensing

2.6 Temporal Resolution 
In addition to spatial, spectral, and radiometric resolution, the concept of 
temporal resolution
is also important to consider in a remote sensing system. We alluded to this idea in section 
2.2 when we discussed the concept of revisit period, which refers to the length of time it takes 
for a satellite to complete one entire orbit cycle. The revisit period of a satellite sensor is 
usually several days. Therefore the absolute temporal resolution of a remote sensing system 
to image the exact same area at the same viewing angle a second time is equal to this period. 
However, because of some degree of overlap in the imaging swaths of adjacent orbits for 
most satellites and the increase in this overlap with increasing latitude, some areas of the 
Earth tend to be re-imaged more frequently. Also, some satellite systems are able to 
point 
their sensors to image the same area
 between different satellite passes separated by 
periods from one to five days. Thus, the actual temporal resolution of a sensor depends on a 
variety of factors, including the satellite/sensor capabilities, the swath overlap, and latitude.  
  
The ability to collect imagery of the same area of the Earth's surface at different periods of 
time is one of the most important elements for applying remote sensing data. Spectral 
characteristics of features may change over time and these changes can be detected by 
collecting and comparing 
multi-temporal
 imagery. For example, during the growing season, 
most species of vegetation are in a continual state of change and our ability to monitor those 
subtle changes using remote sensing is dependent on when and how frequently we collect 
imagery. By imaging on a continuing basis at different times we are able to monitor the 
changes that take place on the Earth's surface, whether they are naturally occurring (such as 
changes in natural vegetation cover or flooding) or induced by humans (such as urban 
development or deforestation). The time factor in imaging is important when: 

persistent clouds offer limited clear views of the Earth's surface (often in the tropics)  

short-lived phenomena (floods, oil slicks, etc.) need to be imaged  

multi-temporal comparisons are required (e.g. the spread of a forest disease from one 
year to the next)  

the changing appearance of a feature over time can be used to distinguish it from near-
similar features (wheat / maize)  
Page 44Section 2.6 Temporal Resolution
Canada Centre for Remote Sensing

2.7 Cameras and Aerial Photography 
Cameras and their use for aerial photography are the simplest and 
oldest of sensors used for remote sensing of the Earth's surface. 
Cameras are 
framing systems
 which acquire a near-instantaneous 
"snapshot" of an 
area (A)
, of the surface. Camera systems are 
passive optical sensors that use a 
lens (B)
 (or system of lenses 
collectively referred to as the optics) to form an image at the focal 
plane (C), the plane at which an image is sharply defined.  
Photographic films are sensitive to light from 0.3 
μ
m to 0.9 
μ
m in 
wavelength covering the ultraviolet (UV), visible, and near-infrared 
(NIR). 
Panchromatic
 films are sensitive to the UV and the visible 
portions of the spectrum. Panchromatic film produces black and white 
images and is the most common type of film used for aerial 
photography. UV photography also uses panchromatic film, but a filter is used with the 
camera to absorb and block the visible energy from reaching the film. As a result, only the UV 
reflectance from targets is recorded. UV photography is not widely used, because of the 
atmospheric scattering and absorption that occurs in this region of the spectrum. Black and 
white infrared photography uses film sensitive to the entire 0.3 to 0.9 
μ
m wavelength range 
and is useful for detecting differences in vegetation cover, due to its sensitivity to IR 
reflectance. 
  
  
Colour and false colour (or colour infrared, CIR) photography involves the use of a three layer 
film with each layer sensitive to different ranges of light. For a 
normal colour photograph
, 
the layers are sensitive to blue, green, and red light - the same as our eyes. These photos 
appear to us the same way that our eyes see the environment, as the colours resemble those 
which would appear to us as "normal" (i.e. trees appear green, etc.). In colour infrared (CIR) 
photography, the three emulsion layers are sensitive to green, red, and the photographic 
portion of near-infrared radiation, which are processed to appear as blue, green, and red, 
Page 45Section 2.7 Cameras and Aerial Photography
Canada Centre for Remote Sensing

respectively. In a 
false colour photograph
, targets with high near-infrared reflectance appear 
red, those with a high red reflectance appear green, and those with a high green reflectance 
appear blue, thus giving us a "false" presentation of the targets relative to the colour we 
normally perceive them to be. 
  
Cameras can be used on a variety of platforms including ground-based stages, helicopters, 
aircraft, and spacecraft. Very detailed photographs taken from aircraft are useful for many 
applications where identification of detail or small targets is required. The ground coverage of 
a photo depends on several factors, including the focal length of the lens, the platform 
altitude, and the format and size of the film. The focal length effectively controls the 
angular 
field of view
 of the lens (similar to the concept of instantaneous field of view discussed in 
section 2.3) and determines the area "seen" by the camera. Typical focal lengths used are 
90mm, 210mm, and most commonly, 152mm. The longer the focal length, the smaller the 
area covered on the ground, but with greater detail (i.e. larger scale). The area covered also 
depends on the altitude of the platform. At high altitudes, a camera will "see" a larger area on 
the ground than at lower altitudes, but with reduced detail (i.e. smaller scale). Aerial photos 
can provide fine detail down to spatial resolutions of less than 50 cm. A photo's exact spatial 
resolution varies as a complex function of many factors which vary with each acquisition of 
data. 
Most aerial photographs are classified as either 
oblique
 or 
vertical
, depending on the 
orientation of the camera relative to the ground 
during acquisition. 
Oblique aerial 
photographs
 are taken with the camera 
pointed to the side of the aircraft. High oblique 
photographs usually include the horizon while 
low oblique photographs do not. Oblique 
photographs can be useful for covering very 
large areas in a single image and for depicting 
terrain relief and scale. However, they are not widely used for mapping as distortions in scale 
from the foreground to the background preclude easy measurements of distance, area, and 
elevation. 
Vertical photographs
 taken with a single-lens frame camera is the most common use of 
aerial photography for remote sensing and mapping purposes. These cameras are specifically 
built for capturing a rapid sequence of photographs while limiting geometric distortion. They 
are often linked with navigation systems onboard the aircraft platform, to allow for accurate 
geographic coordinates to be instantly assigned to each photograph. Most camera systems 
also include mechanisms which compensate for the effect of the aircraft motion relative to the 
ground, in order to limit distortion as much as possible. 
  
Page 46Section 2.7 Cameras and Aerial Photography
Canada Centre for Remote Sensing

systems, but typically ranges between 512 x 512 to 2048 x 2048.  When obtaining vertical aerial photographs, 
the aircraft normally flies in a series of 
lines, each called a 
flight line
. Photos are 
taken in rapid succession looking straight 
down at the ground, often with a 50-60 
percent overlap (A) between successive 
photos. The overlap ensures total coverage 
along a flight line and also facilitates 
stereoscopic viewing
. Successive photo 
pairs display the overlap region from 
different perspectives and can be viewed 
through a device called a 
stereoscope
 to 
see a three-dimensional view of the area, 
called a 
stereo model
. Many applications 
of aerial photography use stereoscopic coverage and stereo viewing. 
Aerial photographs are most useful when fine spatial detail is more critical than spectral 
information, as their spectral resolution is generally coarse when compared to data captured 
with electronic sensing devices. The geometry of vertical photographs is well understood and 
it is possible to make very accurate measurements from them, for a variety of different 
applications (geology, forestry, mapping, etc.). The science of making measurements from 
photographs is called 
photogrammetry
 and has been performed extensively since the very 
beginnings of aerial photography. Photos are most often interpreted manually by a human 
analyst (often viewed stereoscopically). They can also be scanned to create a digital image 
and then analyzed in a digital computer environment. In Chapter 4, we will discuss in greater 
detail, various methods (manually and by computer) for interpreting different types of remote 
sensing images. 
Multiband photography
 uses multi-lens systems with different film-filter combinations to 
acquire photos simultaneously in a number of different spectral ranges. The advantage of 
these types of cameras is their ability to record reflected energy separately in discrete 
wavelength ranges, thus providing potentially better separation and identification of various 
features. However, simultaneous analysis of these multiple photographs can be problematic. 
Digital cameras
, which record electromagnetic radiation electronically, differ significantly from 
their counterparts which use film. Instead of using film, digital cameras use a gridded array of 
silicon coated CCDs (charge-coupled devices) that individually respond to electromagnetic 
radiation. Energy reaching the surface of the CCDs causes the generation of an electronic 
charge which is proportional in magnitude to the "brightness" of the ground area. A digital 
number for each spectral band is assigned to each pixel based on the magnitude of the 
electronic charge. The digital format of the output image is amenable to digital analysis and 
archiving in a computer environment, as well as output as a hardcopy product similar to 
regular photos. Digital cameras also provide quicker turn-around for acquisition and retrieval 
of data and allow greater control of the spectral resolution. Although parameters vary, digital 
imaging systems are capable of collecting data with a spatial resolution of 0.3m, and with a 
spectral resolution of 0.012 mm to 0.3 mm. The size of the pixel arrays varies between 
Page 47Section 2.7 Cameras and Aerial Photography
Canada Centre for Remote Sensing
systems, but typically ranges between 512 x 512 to 2048 x 2048.  

2.8 Multispectral Scanning 
Many electronic (as opposed to photographic) remote sensors acquire data using 
scanning 
systems
, which employ a sensor with a narrow field of view (i.e. IFOV) that sweeps over the 
terrain to build up and produce a two-dimensional image of the surface. Scanning systems 
can be used on both aircraft and satellite platforms and have essentially the same operating 
principles. A scanning system used to collect data over a variety of different wavelength 
ranges is called a 
multispectral scanner (MSS)
, and is the most commonly used scanning 
system. There are two main modes or methods of scanning employed to acquire multispectral 
image data - 
across-track scanning
, and 
along-track scanning
. 
Across-track scanners
 scan the Earth in a 
series of lines. The lines are oriented 
perpendicular to the direction of motion of the 
sensor platform (i.e. across the swath). Each line 
is scanned from one side of the sensor to the 
other, using a 
rotating mirror (A)
. As the 
platform moves forward over the Earth, 
successive scans build up a two-dimensional 
image of the Earth ́s surface. The incoming 
reflected or emitted radiation is separated into 
several spectral components that are detected 
independently. The UV, visible, near-infrared, 
and thermal radiation are dispersed into their 
constituent wavelengths. A bank of internal 
detectors (B)
, each sensitive to a specific range 
of wavelengths, detects and measures the energy for each spectral band and then, as an 
electrical signal, they are converted to digital data and recorded for subsequent computer 
processing. 
  
The 
IFOV (C)
 of the sensor and the altitude of the platform determine the 
ground resolution 
cell viewed (D)
, and thus the spatial resolution. The 
angular field of view (E)
 is the sweep of 
the mirror, measured in degrees, used to record a scan line, and determines the width of the 
imaged 
swath (F)
. Airborne scanners typically sweep large angles (between 90º and 120º), 
while satellites, because of their higher altitude need only to sweep fairly small angles (10-
20º) to cover a broad region. Because the distance from the sensor to the target increases 
towards the edges of the swath, the ground resolution cells also become larger and introduce 
geometric distortions to the images. Also, the length of time the IFOV "sees" a ground 
resolution cell as the rotating mirror scans (called the 
dwell time
), is generally quite short and 
influences the design of the spatial, spectral, and radiometric resolution of the sensor. 
  
  
Page 48Section 2.8 Multispectral Scanning
Canada Centre for Remote Sensing

  
Along-track scanners
 also use the forward motion 
of the platform to record successive scan lines and 
build up a two-dimensional image, perpendicular to 
the flight direction. However, instead of a scanning 
mirror, they use a linear array of detectors (A) 
located at the focal plane of the image (B) formed 
by lens systems (C), which are "pushed" along in 
the flight track direction (i.e. along track). These 
systems are also referred to as 
pushbroom 
scanners
, as the motion of the detector array is 
analogous to the bristles of a broom being pushed 
along a floor. Each individual detector measures the 
energy for a single ground resolution cell (D) and 
thus the size and IFOV of the detectors determines 
the spatial resolution of the system. A separate linear array is required to measure each 
spectral band or channel. For each scan line, the energy detected by each detector of each 
linear array is sampled electronically and digitally recorded. 
Along-track scanners with linear arrays have several advantages over across-track mirror 
scanners. The array of detectors combined with the pushbroom motion allows each detector 
to "see" and measure the energy from each ground resolution cell for a longer period of time 
(dwell time). This allows more energy to be detected and improves the radiometric resolution. 
The increased dwell time also facilitates smaller IFOVs and narrower bandwidths for each 
detector. Thus, finer spatial and spectral resolution can be achieved without impacting 
radiometric resolution. Because detectors are usually solid-state microelectronic devices, they 
are generally smaller, lighter, require less power, and are more reliable and last longer 
because they have no moving parts. On the other hand, cross-calibrating thousands of 
detectors to achieve uniform sensitivity across the array is necessary and complicated. 
Regardless of whether the scanning system used is either of these two types, it has several 
advantages over photographic systems. The spectral range of photographic systems is 
restricted to the visible and near-infrared regions while MSS systems can extend this range 
into the thermal infrared. They are also capable of much higher spectral resolution than 
photographic systems. Multi-band or multispectral photographic systems use separate lens 
systems to acquire each spectral band. This may cause problems in ensuring that the 
different bands are comparable both spatially and radiometrically and with registration of the 
multiple images. MSS systems acquire all spectral bands simultaneously through the same 
optical system to alleviate these problems. Photographic systems record the energy detected 
by means of a photochemical process which is difficult to measure and to make consistent. 
Because MSS data are recorded electronically, it is easier to determine the specific amount of 
energy measured, and they can record over a greater range of values in a digital format. 
Photographic systems require a continuous supply of film and processing on the ground after 
the photos have been taken. The digital recording in MSS systems facilitates transmission of 
Page 49Section 2.8 Multispectral Scanning
Canada Centre for Remote Sensing
data to receiving stations on the ground and immediate processing of data in a computer 
environment. 

2.9 Thermal Imaging 
Many multispectral (MSS) systems sense radiation in the thermal infrared as well as the 
visible and reflected infrared portions of the spectrum. However, remote sensing of energy 
emitted from the Earth's surface in the thermal infrared (3 
μ
m to 15 
μ
m) is different than the 
sensing of reflected energy. 
Thermal sensors
 use photo detectors sensitive to the direct 
contact of photons on their surface, to detect emitted thermal radiation. The detectors are 
cooled to temperatures close to absolute zero in order to limit their own thermal emissions. 
Thermal sensors essentially measure the surface temperature and thermal properties of 
targets. 
 
Thermal imagers
 are typically across-track 
scanners (like those described in the previous 
section) that detect emitted radiation in only the 
thermal portion of the spectrum. Thermal sensors 
employ one or more internal temperature 
references for comparison with the detected 
radiation, so they can be related to absolute radiant 
temperature. The data are generally recorded on 
film and/or magnetic tape and the temperature 
resolution of current sensors can reach 0.1 °C. For 
analysis, an image of relative radiant temperatures 
(
a thermogram
) is depicted in grey levels, with warmer temperatures shown in light tones, 
and cooler temperatures in dark tones. Imagery which portrays relative temperature 
differences in their relative spatial locations are sufficient for most applications. Absolute 
temperature measurements may be calculated but require accurate calibration and 
measurement of the temperature references and detailed knowledge of the thermal properties 
of the target, geometric distortions, and radiometric effects. 
Because of the relatively long wavelength of thermal radiation (compared to visible radiation), 
atmospheric scattering is minimal. However, absorption by atmospheric gases normally 
Page 50Section 2.9 Thermal Imaging
Canada Centre for Remote Sensing

restricts thermal sensing to two specific regions - 3 to 5 
μ
m and 8 to 14 
μ
m. Because energy 
decreases as the wavelength increases, thermal sensors generally have large IFOVs to 
ensure that enough energy reaches the detector in order to make a reliable measurement. 
Therefore the spatial resolution of thermal sensors is usually fairly coarse, relative to the 
spatial resolution possible in the visible and reflected infrared. Thermal imagery can be 
acquired during the day or night (because the radiation is emitted not reflected) and is used 
for a variety of applications such as military reconnaissance, disaster management (forest fire 
mapping), and heat loss monitoring. 
Page 51Section 2.9 Thermal Imaging
Canada Centre for Remote Sensing

2.10 Geometric Distortion in Imagery 
Any remote sensing image, regardless of whether it is acquired by a multispectral scanner on 
board a satellite, a photographic system in an aircraft, or any other platform/sensor 
combination, will have various geometric distortions. This problem is inherent in remote 
sensing, as we attempt to accurately represent the three-dimensional surface of the Earth as 
a two-dimensional image. All remote sensing images are subject to some form of geometric 
distortions, depending on the manner in which the data are acquired. These errors may be 
due to a variety of factors, including one or more of the following, to name only a few:  

the perspective of the sensor optics,  

the motion of the scanning system,  

the motion and (in)stability of the platform,  

the platform altitude, attitude, and velocity,  

the terrain relief, and  

the curvature and rotation of the Earth.  
 
Framing systems, such as cameras used for aerial photography, provide an instantaneous 
"snapshot" view of the Earth from directly overhead. The primary geometric distortion in 
vertical aerial photographs is due to 
relief displacement
. Objects directly below the centre of 
the camera lens (i.e. at the 
nadir
) will have only their tops visible, while all other objects will 
appear to lean away from the centre of the photo such that their tops and sides are visible. If 
the objects are tall or are far away from the centre of the photo, the distortion and positional 
error will be larger. 
The geometry of along-track scanner imagery is similar to that of an aerial photograph for 
each scan line as each detector essentially takes a "snapshot" of each ground resolution cell. 
Geometric variations between lines are caused by random variations in platform altitude and 
attitude along the direction of flight. 
  
Page 52Section 2.10 Geometric Distortion in Imagery
Canada Centre for Remote Sensing

 
Images from across-track scanning systems exhibit two main types of 
geometric distortion
. 
They too exhibit relief displacement (A), similar to aerial photographs, but in only one direction 
parallel to the direction of scan. There is no displacement directly below the sensor, at nadir. 
As the sensor scans across the swath, the top and side of objects are imaged and appear to 
lean away from the nadir point in each scan line. Again, the displacement increases, moving 
towards the edges of the swath. Another distortion (B) occurs due to the rotation of the 
scanning optics. As the sensor scans across each line, the distance from the sensor to the 
ground increases further away from the centre of the swath. Although the scanning mirror 
rotates at a constant speed, the IFOV of the sensor moves faster (relative to the ground) and 
scans a larger area as it moves closer to the edges. This effect results in the compression of 
image features at points away from the nadir and is called 
tangential scale distortion
.  
All images are susceptible to geometric distortions caused by variations in platform stability 
including changes in their speed, altitude, and attitude (angular orientation with respect to the 
ground) during data acquisition. These effects are most pronounced when using aircraft 
platforms and are alleviated to a large degree with the use of satellite platforms, as their orbits 
are relatively stable, particularly in relation to their distance from the Earth. However, the 
eastward rotation of the Earth,during a satellite orbit causes the sweep of scanning systems to 
cover an area slightly to the west of each previous scan. The resultant imagery is thus skewed 
across the image. This is known as 
skew distortion
and is common in imagery obtained from 
satellite multispectral scanners. 
The sources of geometric distortion and positional error vary with each specific situation, but 
are inherent in remote sensing imagery. In most instances, we may be able to remove, or at 
least reduce these errors but they must be taken into account in each instance before 
attempting to make measurements or extract further information. 
Now that we have learned about some of the general characteristics of platforms and sensors, 
in the next sections we will look at some specific sensors (primarily satellite systems) 
operating in the visible and infrared portions of the spectrum.  
Page 53Section 2.10 Geometric Distortion in Imagery
Canada Centre for Remote Sensing

2.11 Weather Satellites/Sensors 
Weather monitoring and forecasting was one of the first 
civilian (as opposed to military) applications of satellite 
remote sensing, dating back to the first true weather 
satellite, TIROS-1 (Television and Infrared Observation 
Satellite - 1), launched in 1960 by the United States. 
Several other weather satellites were launched over the 
next five years, in near-polar orbits, providing repetitive 
coverage of global weather patterns. In 1966, NASA (the 
U.S. National Aeronautics and Space Administration) 
launched the geostationary Applications Technology 
Satellite (ATS-1) which provided 
hemispheric images
 
of the Earth's surface and cloud cover every half hour. 
For the first time, the development and movement of 
weather systems could be routinely monitored. Today, several countries operate weather, or 
meteorological satellites to monitor weather conditions around the globe. Generally speaking, 
these satellites use sensors which have fairly coarse spatial resolution (when compared to 
systems for observing land) and provide large areal coverage.  
Their temporal resolutions are generally quite high, providing frequent observations of the 
Earth's surface, atmospheric moisture, and cloud cover, which allows for near-continuous 
monitoring of global weather conditions, and hence - forecasting. Here we review a few of the 
representative satellites/sensors used for meteorological applications. 
GOES 
The GOES (Geostationary Operational 
Environmental Satellite) System is the follow-up 
to the ATS series. They were designed by 
NASA for the National Oceanic and 
Atmospheric Administration (NOAA) to provide 
the United States National Weather Service 
with frequent, small-scale imaging of the 
Earth's surface and cloud cover. The GOES 
series of satellites have been used extensively 
by meteorologists for weather monitoring and 
forecasting for over 20 years. These satellites 
are part of a global network of meteorological 
satellites spaced at approximately 70° longitude intervals around the Earth in order to provide 
near-global coverage. Two GOES satellites, placed in 
geostationary orbits
 36000 km above 
the equator, each view approximately one-third of the Earth. One is situated at 75°W longitude 
and monitors North and South America and most of the Atlantic Ocean. The other is situated 
at 135°W longitude and monitors North America and the Pacific Ocean basin. Together they 
Page 54Section 2.11 Weather Satellites/Sensors
Canada Centre for Remote Sensing

cover from 20°W to 165°E longitude. This GOES image covers a portion of the southeastern 
United States, and the adjacent ocean areas where many severe storms originate and 
develop. This image shows Hurricane Fran approaching the southeastern United States and 
the Bahamas in September of 1996. 
  
Two generations of GOES satellites have been launched, each measuring emitted and 
reflected radiation from which atmospheric temperature, winds, moisture, and cloud cover can 
be derived. The first generation of satellites consisted of GOES-1 (launched 1975) through 
GOES-7 (launched 1992). Due to their design, these satellites were capable of viewing the 
Earth only a small percentage of the time (approximately five per cent). The second 
generation of satellites began with GOES-8 (launched 1994) and has numerous technological 
improvements over the first series. They provide near-continuous observation of the Earth 
allowing more frequent imaging (as often as every 15 minutes). This increase in temporal 
resolution coupled with improvements in the spatial and radiometric resolution of the sensors 
provides timelier information and improved data quality for forecasting meteorological 
conditions. 
GOES-8 and the other second generation GOES satellites have separate 
imaging
 and 
sounding
 instruments. The 
imager
 has five channels sensing visible and infrared reflected 
and emitted solar radiation. The infrared capability allows for day and night imaging. Sensor 
pointing and scan selection capability enable imaging of an entire hemisphere, or small-scale 
imaging of selected areas. The latter allows meteorologists to monitor specific weather trouble 
spots to assist in improved short-term forecasting. The imager data are 10-bit radiometric 
resolution, and can be transmitted directly to local user terminals on the Earth's surface. The 
accompanying table describes the individual bands, their spatial resolution, and their 
meteorological applications. 
  
  
  
  
  
  
  
  
Page 55Section 2.11 Weather Satellites/Sensors
Canada Centre for Remote Sensing

GOES Bands
 
The 19 channel 
sounder
 measures emitted radiation in 18 thermal infrared bands and 
reflected radiation in one visible band. These data have a spatial resolution of 8 km and 13-bit 
radiometric resolution. Sounder data are used for surface and cloud-top temperatures, multi-
level moisture profiling in the atmosphere, and ozone distribution analysis. 
NOAA AVHRR 
NOAA is also responsible for another series of satellites which are useful for meteorological, 
as well as other, applications. These satellites, in 
sun-synchronous, near-polar orbits
 (830-
870 km above the Earth), are part of the Advanced TIROS series (originally dating back to 
1960) and provide complementary information to the geostationary meteorological satellites 
(such as GOES). Two satellites, each providing global coverage, work together to ensure that 
data for any region of the Earth is no more than six hours old. One satellite crosses the 
equator in the early morning from north-to-south while the other crosses in the afternoon. 
The primary sensor on board the NOAA satellites, used for both meteorology and small-scale 
Earth observation and reconnaissance, is the 
Advanced Very High Resolution Radiometer 
(AVHRR)
. The AVHRR sensor detects radiation in the visible, near and mid infrared, and 
thermal infrared portions of the electromagnetic spectrum, over a swath width of 3000 km. 
The accompanying table, outlines the AVHRR bands, their wavelengths and spatial resolution 
(at swath nadir), and general applications of each. 
Band
Wavelength 
Range (
>μ
m)
Spatial 
Resolution
Application
1
0.52 - 0.72 
(visible)
1 km
cloud, pollution, and haze detection; severe 
storm identification
2
3.78 - 4.03 
(shortwave IR)
4 km
identification of fog at night; discriminating 
water clouds and snow or ice clouds during 
daytime; detecting fires and volcanoes; night 
time determination of sea surface 
temperatures
3
6.47 - 7.02 
(upper level 
water vapour)
4 km
estimating regions of mid-level moisture 
content and advection; tracking mid-level 
atmospheric motion
4
10.2 - 11.2 
(longwave IR)
4 km
identifying cloud-drift winds, severe storms, 
and heavy rainfall
5
11.5 - 12.5 
(IR window 
sensitive to 
water vapour)
4 km
identification of low-level moisture; 
determination of sea surface temperature; 
detection of airborne dust and volcanic ash 
Page 56Section 2.11 Weather Satellites/Sensors
Canada Centre for Remote Sensing

NOAA AVHRR Bands
 
AVHRR data can be acquired and formatted in four operational modes, differing in resolution 
and method of transmission. Data can be transmitted directly to the ground and viewed as 
data are collected, or recorded on board the satellite for later transmission and processing. 
The accompanying table describes the various data formats and their characteristics. 
AVHRR Data Formats
 
  
  
  
  
  
Band
Wavelength 
Range (
μ
m)
Spatial 
Resolution
Application
10.58 - 0.68 (red)1.1 kmcloud, snow, and ice monitoring
2
0.725 - 1.1 (near 
IR)
1.1 km
water, vegetation, and agriculture 
surveys
33.55 -3.93 (mid IR)1.1 km
sea surface temperature, volcanoes, 
and forest fire activity
4
10.3 - 11.3 (thermal 
IR)
1.1 kmsea surface temperature, soil moisture
5
11.5 - 12.5 (thermal 
IR)
1.1 kmsea surface temperature, soil moisture
Format
Spatial 
Resolution
Transmission and Processing
APT (Automatic Picture 
Transmission)
4 km
low-resolution direct transmission 
and display
HRPT (High Resolution 
Picture Transmission)
1.1 km
full-resolution direct transmission 
and display
GAC (Global Area Coverage)4 km
low-resolution coverage from 
recorded data
LAC (Local Area Coverage)1.1 km
selected full-resolution local area 
data from recorded data
Page 57Section 2.11 Weather Satellites/Sensors
Canada Centre for Remote Sensing

  
 
Although AVHRR data are widely used for 
weather system
 forecasting and analysis, 
the sensor is also well-suited to observation 
and monitoring of land features. AVHRR has 
much coarser spatial resolution than other 
typical land observations sensors (discussed 
in the next section), but is used extensively 
for monitoring regional, small-scale 
phenomena, including mapping of 
sea 
surface temperature
, and natural vegetation 
and crop conditions. 
Mosaics
 covering large 
areas can be created from several AVHRR 
data sets allowing small scale analysis and 
mapping of broad vegetation cover.  In 
Canada, AVHRR data received at the Prince 
Albert Receiving Station Saskatchewan, are used as part of a crop information system, 
monitoring the health of grain crops in the Prairies throughout the growing season. 
 
  
Other Weather Satellites 
The United States operates the 
DMSP
 (Defense Meteorological Satellite Program) series of 
satellites which are also used for weather monitoring. These are near-polar orbiting satellites 
whose Operational Linescan System (OLS) sensor provides twice daily coverage with a swath 
width of 3000 km at a spatial resolution of 2.7 km. It has two fairly broad wavelength bands: a 
visible and near infrared band (0.4 to 1.1 
μ
m) and a thermal infrared band (10.0 to 13.4 
μ
m). 
An interesting feature of the sensor is its ability to acquire visible band night time imagery 
under very low illumination conditions. With this sensor, it is possible to collect striking images 
of the Earth showing (typically) the night time lights of large urban centres. 
Page 58Section 2.11 Weather Satellites/Sensors
Canada Centre for Remote Sensing

There are several other meteorological satellites in orbit, launched and operated by other 
countries, or groups of countries. These include Japan, with the 
GMS
 satellite series, and the 
consortium of European communities, with the 
Meteosat
 satellites. Both are geostationary 
satellites situated above the equator over Japan and Europe, respectively. Both provide half-
hourly imaging of the Earth similar to GOES. GMS has two bands: 0.5 to 0.75 
μ
m (1.25 km 
resolution), and 10.5 to 12.5 
μ 
m (5 km resolution). Meteosat has three bands: visible band 
(0.4 to 1.1 
μ
m; 2.5 km resolution), mid-IR (5.7 to 7.1 
μ
m; 5 km resolution), and thermal IR 
(10.5 to 12.5 
μ
m; 5 km resolution). 
Page 59Section 2.11 Weather Satellites/Sensors
Canada Centre for Remote Sensing

2.12 Land Observation Satellites/Sensors 
Landsat 
 
Although many of the weather satellite systems 
(such as those described in the previous section) 
are also used for monitoring the Earth's surface, 
they are not optimized for detailed mapping of the 
land surface. Driven by the exciting views from, and 
great success of the early meteorological satellites 
in the 1960's, as well as from images taken during 
manned spacecraft missions, the first satellite 
designed specifically to monitor the Earth's surface, 
Landsat-1, was launched by NASA in 1972. Initially 
referred to as ERTS-1, (Earth Resources 
Technology Satellite), 
Landsat
 was designed as an 
experiment to test the feasibility of collecting multi-spectral Earth observation data 
from an unmanned satellite platform. Since that time, this highly successful program 
has collected an abundance of data from around the world from several Landsat 
satellites. Originally managed by NASA, responsibility for the Landsat program was 
transferred to NOAA in 1983. In 1985, the program became commercialized, 
providing data to civilian and applications users. 
 
Landsat's success is due to several factors, including: a combination of sensors with spectral 
bands tailored to Earth observation; functional spatial resolution; and good areal coverage 
(swath width and revisit period). The long lifespan of the program has provided a voluminous 
archive of Earth resource data facilitating long term monitoring and historical records and 
research. All Landsat satellites are placed in near-polar, sun-synchronous orbits. The first 
three satellites (Landsats 1-3) are at altitudes around 900 km and have revisit periods of 18 
days while the later satellites are at around 700 km and have revisit periods of 16 days. All 
Landsat satellites have equator crossing times in the morning to optimize illumination 
conditions. 
A number of sensors have been on board the Landsat series of satellites, including the 
Return Beam Vidicon (RBV) 
camera systems, the 
MultiSpectral Scanner (MSS)
 systems, 
and the 
Thematic Mapper (TM)
. The most popular instrument in the early days of Landsat 
was the MultiSpectral Scanner (MSS) and later the Thematic Mapper (TM). Each of these 
sensors collected data over a swath width of 185 km, with a full scene being defined as 185 
km x 185 km. 
The MSS senses the electromagnetic radiation from the Earth's surface in four spectral 
bands. Each band has a spatial resolution of approximately 60 x 80 metres and a radiometric 
resolution of 6 bits, or 64 digital numbers. Sensing is accomplished with a line scanning 
device using an oscillating mirror. Six scan lines are collected simultaneously with each west-
to-east sweep of the scanning mirror. The accompanying table outlines the spectral 
wavelength ranges for the MSS. 
Page 60Section 2.12 Land Observation Satellites/Sensors
Canada Centre for Remote Sensing

MSS Bands
 
Routine collection of MSS data ceased in 1992, as the use of TM data, starting on Landsat 4, 
superseded the MSS. The 
TM
 sensor provides several improvements over the MSS sensor 
including: higher spatial and radiometric resolution; finer spectral bands; seven as opposed to 
four spectral bands; and an increase in the number of detectors per band (16 for the non-
thermal channels versus six for MSS). Sixteen scan lines are captured simultaneously for 
each non-thermal spectral band (four for thermal band), using an oscillating mirror which 
scans during both the forward (west-to-east) and reverse (east-to-west) sweeps of the 
scanning mirror. This difference from the MSS increases the 
dwell time
 (see section 2.8) and 
improves the geometric and radiometric integrity of the data. Spatial resolution of TM is 30 m 
for all but the thermal infrared band which is 120 m. All channels are recorded over a range of 
256 digital numbers (8 bits). The accompanying table outlines the spectral resolution of the 
individual TM bands and some useful applications of each. 
TM Bands
 
Channel
Wavelength Range (
μ
m)
Landsat 1,2,3Landsat 4,5
MSS 4MSS 10.5 - 0.6 (green) 
MSS 5MSS 20.6 - 0.7 (red)
MSS 6MSS 30.7 - 0.8 (near infrared)
MSS 7MSS 40.8 - 1.1 (near infrared)
Channel
Wavelength 
Range (
μ
m)
Application
TM 10.45 - 0.52 (blue)
soil/vegetation discrimination; bathymetry/coastal 
mapping; cultural/urban feature identification
TM 2
0.52 - 0.60 
(green)
green vegetation mapping (measures reflectance 
peak); cultural/urban feature identification
TM 30.63 - 0.69 (red)
vegetated vs. non-vegetated and plant species 
discrimination (plant chlorophyll absorption); 
cultural/urban feature identification
TM 4
0.76 - 0.90 (near 
IR)
identification of plant/vegetation types, health, and 
biomass content; water body delineation; soil moisture
TM 5
1.55 - 1.75 (short 
wave IR)
sensitive to moisture in soil and vegetation; 
discriminating snow and cloud-covered areas
TM 6
10.4 - 12.5 
(thermal IR)
vegetation stress and soil moisture discrimination 
related to thermal radiation; thermal mapping (urban, 
water)
TM 7
2.08 - 2.35 (short 
wave IR)
discrimination of mineral and rock types; sensitive to 
vegetation moisture content
Page 61Section 2.12 Land Observation Satellites/Sensors
Canada Centre for Remote Sensing

SPOT 
SPOT 
(Système Pour l'Observation de la Terre) is a 
series of Earth observation imaging satellites designed 
and launched by CNES (Centre National d'Études 
Spatiales) of France, with support from Sweden and 
Belgium. SPOT-1 was launched in 1986, with 
successors following every three or four years. All 
satellites are in sun-synchronous, near-polar orbits at 
altitudes around 830 km above the Earth, which results 
in orbit repetition every 26 days. They have equator crossing times around 10:30 AM local 
solar time. SPOT was designed to be a commercial provider of Earth observation data, and 
was the first satellite to use along-track, or pushbroom scanning technology. 
The SPOT satellites each have twin 
high resolution visible (HRV)
 imaging systems, which 
can be operated independently and simultaneously. Each HRV is capable of sensing either in 
a high spatial resolution single-channel 
panchromatic (PLA)
 mode, or a coarser spatial 
resolution three-channel 
multispectral (MLA)
 mode. Each along-track scanning HRV sensor 
consists of four linear arrays of detectors: one 6000 element array for the panchromatic mode 
recording at a spatial resolution of 10 m, and one 3000 element array for each of the three 
multispectral bands, recording at 20 m spatial resolution. The swath width for both modes is 
60 km at nadir. The accompanying table illustrates the spectral characteristics of the two 
different modes. 
  
  
  
Data from both the TM and MSS sensors are used 
for a wide variety of applications, including resource 
management, mapping, environmental monitoring, 
and change detection (e.g. 
monitoring forest 
clearcutting
). The archives of Canadian imagery 
include over 350,000 scenes of MSS and over 
200,000 scenes of TM, managed by the licensed 
distributor in Canada: RSI Inc. Many more scenes 
are held by foreign facilities around the world. 
Page 62Section 2.12 Land Observation Satellites/Sensors
Canada Centre for Remote Sensing

HRV Mode Spectral Ranges
 
The viewing angle of the sensors can be 
adjusted to look to either side of the 
satellite's vertical (nadir) track, allowing 
off-
nadir viewing
 which increases the 
satellite's revisit capability. This ability to 
point the sensors up to 27° from nadir, 
allows SPOT to view within a 950 km swath 
and to revisit any location several times per 
week. As the sensors point away from nadir, 
the swath varies from 60 to 80 km in width. 
This not only improves the ability to monitor 
specific locations and increases the 
chances of obtaining cloud free scenes, but 
the off-nadir viewing also provides the 
capability of acquiring imagery for stereoscopic coverage. By recording the same area from 
two different angles, the imagery can be viewed and analyzed as a three dimensional model, 
a technique of tremendous value for terrain interpretation, mapping, and visual terrain 
simulations. 
This oblique viewing capability increases the revisit 
frequency of equatorial regions to three days (seven 
times during the 26 day orbital cycle). Areas at a latitude 
of 45º can be imaged more frequently (11 times in 26 
days) due to the convergence or orbit paths towards the 
poles. By pointing both HRV sensors to cover 
adjacent 
ground swaths
 at nadir, a swath of 117 km (3 km 
overlap between the two swaths) can be imaged. In this 
mode of operation, either panchromatic or multispectral 
data can be collected, but not both simultaneously. 
  
  
Mode/Band
Wavelength Range (
μ
m)
Panchromatic (PLA)0.51 - 0.73 (blue-green-red)
Multispectral (MLA)
Band 10.50 - 0.59 (green)
Band 20.61 - 0.68 (red)
Band 30.79 - 0.89 (near infrared)
Page 63Section 2.12 Land Observation Satellites/Sensors
Canada Centre for Remote Sensing

IRS 
The Indian Remote Sensing (IRS) satellite series, combines features from both the Landsat 
MSS/TM sensors and the SPOT HRV sensor. The third satellite in the series, IRS-1C, 
launched in December, 1995 has three sensors: a single-channel panchromatic (PAN) high 
resolution camera, a medium resolution four-channel Linear Imaging Self-scanning Sensor 
(LISS-III), and a coarse resolution two-channel Wide Field Sensor (WiFS). The accompanying 
table outlines the specific characteristics of each sensor. 
  
  
  
  
  
  
  
SPOT has a number of benefits over other 
spaceborne optical sensors. Its fine spatial 
resolution and pointable sensors are the 
primary reasons for its popularity. The three-
band multispectral data are well suited to 
displaying as false-colour images and the 
panchromatic band can also be used to 
"sharpen" the spatial detail in the 
multispectral data. SPOT allows applications 
requiring fine spatial detail (such as 
urban 
mapping
) to be addressed while retaining the 
cost and timeliness advantage of satellite 
data. The potential applications of SPOT data 
are numerous. Applications requiring frequent 
monitoring (agriculture, forestry) are well 
served by the SPOT sensors. The acquisition 
of stereoscopic imagery from SPOT has 
played an important role in mapping 
applications and in the derivation of 
topographic information (Digital Elevation 
Models - DEMs) from satellite data. 
Page 64Section 2.12 Land Observation Satellites/Sensors
Canada Centre for Remote Sensing

IRS Sensors
 
In addition to its high spatial resolution, the panchromatic sensor can be steered up to 26° 
across-track, enabling stereoscopic imaging and increased revisit capablilities (as few as five 
days), similar to SPOT. This high resolution data is useful for urban planning and mapping 
applications. The four LISS-III multispectral bands are similar to Landsat's TM bands 1 to 4 
and are excellent for vegetation discrimination, land-cover mapping, and natural resource 
planning. The WiFS sensor is similar to NOAA AVHRR bands and the spatial resolution and 
coverage is useful for regional scale vegetation monitoring. 
Sensor
Wavelength Range 
(
μ
m)
Spatial 
Resolution
Swath 
Width
Revisit Period (at 
equator)
PAN
0.5 - 0.755.8 m70 km24 days
LISS-II
Green0.52 - 0.5923 m142 km24 days
Red0.62 - 0.6823 m142 km24 days
Near IR0.77 - 0.8623 m142 km24 days
Shortwave 
IR
1.55 - 1.7070 m148 km24 days
WiFS
Red0.62 - 0.68188 m774 km5 days
Near IR0.77 - 0.86188 m774 km5 days
  
MEIS-II and CASI 
Although this tutorial concentrates on satellite-borne sensors, it is worth mentioning a couple 
of Canadian airborne sensors which have been used for various remote sensing applications, 
as these systems (and others like them) have influenced the design and development of 
satellite systems. The first is the MEIS-II (
Multispectral Electro-optical Imaging Scanner)
 
sensor developed for the Canada Centre for Remote Sensing. Although no longer active, 
MEIS was the first operational use of pushbroom, or along-track scanning technology in an 
airborne platform. The sensor collected 8-bit data (256 digital numbers) in eight spectral 
bands ranging from 0.39 to 1.1 
μ
m, using linear arrays of 1728 detectors per band. The 
specific wavelength ranges were selectable, allowing different band combinations to be used 
for different applications. Stereo imaging from a single flight line was also possible, with 
channels aimed ahead of and behind nadir, supplementing the other nadir facing sensors. 
Both the stereo mapping and the selectable band capabilities were useful in research and 
development which was applied to development of other satellite (and airborne) sensor 
systems. 
Page 65Section 2.12 Land Observation Satellites/Sensors
Canada Centre for Remote Sensing

CASI, the 
Compact Airborne Spectrographic Imager
, is a leader in airborne imaging, being 
the first commercial imaging spectrometer. This hyperspectral sensor detects a vast array of 
narrow spectral bands in the visible and infrared wavelengths, using along-track scanning. 
The spectral range covered by the 288 channels is between 0.4 and 0.9 
μ
m. Each band 
covers a wavelength range of 0.018 
μ
m. While spatial resolution depends on the altitude of 
the aircraft, the spectral bands measured and the bandwidths used are all programmable to 
meet the user's specifications and requirements. Hyperspectral sensors such as this can be 
important sources of diagnostic information about specific targets' absorption and reflection 
characteristics, in effect providing a spectral 'fingerprint'. Experimentation with CASI and other 
airborne imaging spectrometers has helped guide the development of hyperspectral sensor 
systems for advanced satellite systems. 
Page 66Section 2.12 Land Observation Satellites/Sensors
Canada Centre for Remote Sensing

2.13 Marine Observation Satellites/Sensors 
The Earth's oceans cover more than two-thirds of the Earth's surface and play an important 
role in the global climate system. They also contain an abundance of living organisms and 
natural resources which are susceptible to pollution and other man-induced hazards. The 
meteorological and land observations satellites/sensors we discussed in the previous two 
sections can be used for monitoring the oceans of the planet, but there are other 
satellite/sensor systems which have been designed specifically for this purpose.  
The Nimbus-7 satellite, launched in 1978, carried the first sensor, the 
Coastal Zone Colour 
Scanner (CZCS)
, specifically intended for monitoring the Earth's oceans and water bodies. 
The primary objective of this sensor was to observe ocean colour and temperature, 
particularly in coastal zones, with sufficient spatial and spectral resolution to detect pollutants 
in the upper levels of the ocean and to determine the nature of materials suspended in the 
water column. The Nimbus satellite was placed in a sun-synchronous, near-polar orbit at an 
altitude of 955 km. Equator crossing times were local noon for ascending passes and local 
midnight for descending passes. The repeat cycle of the satellite allowed for global coverage 
every six days, or every 83 orbits. The CZCS sensor consisted of six spectral bands in the 
visible, near-IR, and thermal portions of the spectrum each collecting data at a spatial 
resolution of 825 m at nadir over a 1566 km swath width. The accompanying table outlines the 
spectral ranges of each band and the primary parameter measured by each.  
CZCS Spectral Bands
 
Channel
Wavelength Range (
μ
m)
Primary Measured Parameter
10.43 - 0.45Chlorophyll absorption
20.51 - 0.53Chlorophyll absorption
30.54 - 0.56Gelbstoffe (yellow substance)
40.66 - 0.68Chlorophyll concentration
50.70 - 0.80Surface vegetation
610.5 - 12.50Surface temperature
  
As can be seen from the table, the first four bands of the 
CZCS sensor are very narrow. They were optimized to 
allow detailed discrimination of differences in water 
reflectance due to 
phytoplankton concentrations
 and 
other suspended particulates in the water. In addition to 
detecting surface vegetation on the water, band 5 was 
used to discriminate water from land prior to processing 
the other bands of information. The CZCS sensor ceased 
operation in 1986. 
Page 67Section 2.13 Marine Observation Satellites/Sensors
Canada Centre for Remote Sensing

  
MOS 
The first Marine Observation Satellite (MOS-1) was launched by Japan in February, 1987 and 
was followed by its successor, MOS-1b, in February of 1990. These satellites carry three 
different sensors: a four-channel Multispectral Electronic Self-Scanning Radiometer (MESSR), 
a four-channel Visible and Thermal Infrared Radiometer (VTIR), and a two-channel 
Microwave Scanning Radiometer (MSR), in the microwave portion of the spectrum. The 
characteristics of the two sensors in the visible/infrared are described in the accompanying 
table. 
MOS Visible/Infrared Instruments
 
The MESSR bands are quite similar in spectral range to the Landsat MSS sensor and are 
thus useful for land applications in addition to observations of marine environments. The MOS 
systems orbit at altitudes around 900 km and have revisit periods of 17 days. 
SeaWiFS 
The SeaWiFS (Sea-viewing Wide-Field-of View Sensor) on board the SeaStar spacecraft is 
an advanced sensor designed for ocean monitoring. It consists of eight spectral bands of very 
narrow wavelength ranges (see accompanying table) tailored for very specific detection and 
monitoring of various ocean phenomena including: ocean primary production and 
phytoplankton processes, ocean influences on climate processes (heat storage and aerosol 
formation), and monitoring of the cycles of carbon, sulfur, and nitrogen. The orbit altitude is 
705 km with a local equatorial crossing time of 12 PM. Two combinations of spatial resolution 
and swath width are available for each band: a higher resolution mode of 1.1 km (at nadir) 
over a swath of 2800 km, and a lower resolution mode of 4.5 km (at nadir) over a swath of 
1500 km. 
  
Sensor
Wavelength Ranges (
μ
m)
Spatial ResolutionSwath Width
MESSR0.51 - 0.5950 m100 km
0.61 - 0.6950 m100 km
0.72 - 0.8050 m100 km
0.80 - 1.1050 m100 km
VTIR0.50 - 0.70900 m1500 km
6.0 - 7.02700 m1500 km
10.5 - 11.52700 m1500 km
11.5 - 12.52700 m1500 km
Page 68Section 2.13 Marine Observation Satellites/Sensors
Canada Centre for Remote Sensing

SeaWiFS Spectral Bands
 
  
These ocean-observing satellite systems are important for global and regional scale 
monitoring of ocean pollution and health, and assist scientists in understanding the influence 
and impact of the oceans on the global climate system. 
Channel
Wavelength Ranges (
μ
m)
10.402 - 0.422
20.433 - 0.453
30.480 - 0.500
40.500 - 0.520
50.545 - 0.565
60.660 - 0.680
70.745 - 0.785
80.845 - 0.885
Page 69Section 2.13 Marine Observation Satellites/Sensors
Canada Centre for Remote Sensing

2.14 Other Sensors 
The three previous sections provide a representative 
overview of specific systems available for remote sensing 
in the (predominantly) optical portions of the 
electromagnetic spectrum. However, there are many 
other 
types of less common sensors
 which are used for 
remote sensing purposes. We briefly touch on a few of 
these other types of sensors. The information is not 
considered comprehensive but serves as an introduction 
to alternative imagery sources and imaging concepts. 
Video 
 
Although coarser in spatial resolution than traditional photography or digital imaging, video 
cameras provide a useful means of acquiring timely and inexpensive data and vocally 
annotated imagery. Applications with these requirements include natural disaster 
management, (fires, flooding), crop and disease assessment, environmental hazard control, 
and police surveillance. Cameras used for video recording measure radiation in the visible, 
near infrared, and sometimes mid-infrared portions of the EM spectrum. The image data are 
recorded onto cassette, and can be viewed immediately. 
FLIR 
Forward Looking InfraRed (FLIR) systems operate in a similar manner to across-track thermal 
imaging sensors, but provide an oblique rather than nadir perspective of the Earth ́s surface. 
Typically positioned on aircraft or helicopters, and imaging the area ahead of the platform, 
FLIR systems provide relatively high spatial resolution imaging that can be used for military 
applications, search and rescue operations, law enforcement, and forest fire monitoring. 
Laser fluorosensor 
Some targets fluoresce, or emit energy, upon receiving incident energy. This is not a simple 
reflection of the incident radiation, but rather an absorption of the initial energy, excitation of 
the molecular components of the target materials, and emission of longer wavelength 
radiation which is then measured by the sensor. Laser fluorosensors illuminate the target with 
a specific wavelength of radiation and are capable of detecting multiple wavelengths of 
fluoresced radiation. This technology has been proven for ocean applications, such as 
chlorophyll mapping, and pollutant detection, particularly for naturally occurring and accidental 
oil slicks. 
Lidar 
Lidar is an acronym for LIght Detection And Ranging, an active imaging technology very 
similar to RADAR (see next paragraph). Pulses of laser light are emitted from the sensor and 
Page 70Section 2.14 Other Sensors
Canada Centre for Remote Sensing

energy reflected from a target is detected. The time required for the energy to reach the target 
and return to the sensor determines the distance between the two. Lidar is used effectively for 
measuring heights of features, such as forest canopy height relative to the ground surface, 
and water depth relative to the water surface (laser profilometer). Lidar is also used in 
atmospheric studies to examine the particle content of various layers of the Earth ́s 
atmosphere and acquire air density readings and monitor air currents. 
RADAR 
RADAR stands for RAdio Detection And Ranging. RADAR systems are active sensors which 
provide their own source of electromagnetic energy. Active radar sensors, whether airborne or 
spaceborne, emit microwave radiation in a series of pulses from an antenna, looking obliquely 
at the surface perpendicular to the direction of motion. When the energy reaches the target, 
some of the energy is reflected back towards the sensor. This backscattered microwave 
radiation is detected, measured, and timed. The time required for the energy to travel to the 
target and return back to the sensor determines the distance or range to the target. By 
recording the range and magnitude of the energy reflected from all targets as the system 
passes by, a two-dimensional image of the surface can be produced. Because RADAR 
provides its own energy source, images can be acquired day or night. Also, microwave energy 
is able to penetrate through clouds and most rain, making it an all-weather sensor. Because o
f 
the unique characteristics and applications of microwave remote sensing, Chapter 3 covers 
this topic in detail, concentrating on RADAR remote sensing. 
Page 71Section 2.14 Other Sensors
Canada Centre for Remote Sensing

2.15 Data Reception, Transmission, and Processing 
Data obtained during airborne remote sensing missions can be retrieved once the aircraft 
lands. It can then be processed and delivered to the end user. However, data acquired from 
satellite platforms need to be electronically transmitted to Earth, since the satellite continues 
to stay in orbit during its operational lifetime. The technologies designed to accomplish this 
can also be used by an aerial platform if the data are urgently needed on the surface.  
 
There are three main options for 
transmitting data
 acquired by satellites to the surface. The 
data can be directly transmitted to Earth if a Ground Receiving Station (GRS) is in the line of 
sight of the satellite (A). If this is not the case, the data can be recorded on board the satellite 
(B) for transmission to a GRS at a later time. Data can also be relayed to the GRS through the 
Tracking and Data Relay Satellite System (TDRSS) (C), which consists of a series of 
communications satellites in geosynchronous orbit. The data are transmitted from one satellite 
to another until they reach the appropriate GRS. 
In Canada, CCRS operates two 
ground receiving stations
 - one at Cantley, Québec (GSS), 
just outside of Ottawa, and another one at Prince Albert, Saskatchewan (PASS). The 
combined coverage circles for these Canadian ground stations enable the potential for 
reception of real-time or recorded data from satellites passing over almost any part of 
Canada's land mass, and much of the continental United States as well. Other ground stations
have been set up around the world to capture data from a variety of satellites. 
Page 72Section 2.15 Data Reception, Transmission, and Processing
Canada Centre for Remote Sensing

 
  
The data are received at the GRS in a raw digital format. They may then, if required, be 
processed to correct systematic, geometric and atmospheric distortions to the imagery, and 
be translated into a standardized format. The data are written to some form of storage 
medium such as tape, disk or CD. The data are typically archived at most receiving and 
processing stations, and full libraries of data are managed by government agencies as well as 
commercial companies responsible for each sensor's archives. 
For many sensors it is possible to provide customers with 
quick-turnaround
 imagery when 
they need data as quickly as possible after it is collected. Near real-time processing systems 
are used to produce low resolution imagery in hard copy or soft copy (digital) format within 
hours of data acquisition. Such imagery can then be faxed or transmitted digitally to end 
users. One application of this type of fast data processing is to provide imagery to ships 
sailing in the Arctic, as it allows them to assess current ice conditions quickly in order to make 
navigation decisions about the easiest/safest routes through the ice. Real-time processing of 
imagery in airborne systems has been used, for example, to pass thermal infrared imagery to 
forest fire fighters right at the scene. 
Low resolution quick-look imagery is used to preview archived imagery prior to purchase. The 
spatial and radiometric quality of these types of data products is degraded, but they are useful 
for ensuring that the overall quality, coverage and cloud cover of the data is appropriate.  
Page 73Section 2.15 Data Reception, Transmission, and Processing
Canada Centre for Remote Sensing

2.16 Endnotes 
You have just completed 
Chapter 2 - Satellites and Sensors.
 You can continue to Chapter 
3 - Microwave Sensing or first browse the CCRS Web site for other articles related to 
platforms and sensors. 
For instance, the Remote Sensing Glossary
1
 has platform and sensor categories that contain 
more information about various platforms and sensors and their use around the world. The 
glossary also has optical and radar categories of terms, to allow you to focus on these 
aspects of remote sensing technology. 
Our receiving stations at Prince Albert
2
, Saskatchewan and Gatineau
3
, Quebec receive data 
from a number of satellites. See which satellites are received and what data reception 
coverage
4
 and services
5
 they provide.
 
If you are curious about detecting targets which are smaller than a pixel, see a detailed 
discussion
6
 in one of our "Images of Canada".
 
Until 1997, CCRS owned and operated a Convair 580
7
 aircraft which carried a number of 
research instruments including a Synthetic Aperture Radar
8
 (SAR) sensor. There are a 
number of images from this instrument on our Web site, one of which is of the Confederation 
Bridge
9
 between PEI and New Brunswick taken while it was under construction.
 
 
 
1
http://www.ccrs.nrcan.gc.ca/ccrs/learn/terms/glossary/glossary_e.html
 
2
http://www.ccrs.nrcan.gc.ca/ccrs/data/stations/pass_e.html
 
3
http://www.ccrs.nrcan.gc.ca/ccrs/data/stations/gss_e.html
 
4
http://www.ccrs.nrcan.gc.ca/ccrs/data/stations/cc_e.html
 
5
http://www.ccrs.nrcan.gc.ca/ccrs/data/stations/grss_e.html
 
6
http://www.ccrs.nrcan.gc.ca/ccrs/learn/tour/16/16ns_e.html
 
7
http://www.ccrs.nrcan.gc.ca/ccrs/data/satsens/airborne/sarbro/sbc580_e.html
 
8
http://www.ccrs.nrcan.gc.ca/ccrs/data/satsens/airborne/sarbro/sbmain_e.html
 
9
http://www.ccrs.nrcan.gc.ca/ccrs/rd/apps/marine/pei_link/bridge_e.html
 
 
Page 74Section 2.16 Endnotes
Canada Centre for Remote Sensing

2. Did You Know?
 
 
2.1 Did You Know? 
 

High wing aircraft are preferable to low wing aircraft for hand-held aerial photography.  

The 'drop hatch' in aircraft such as the DeHavilland "Beaver" and "Otter" are convenient 
to use for vertical aerial photography without performing aircraft structural modifications. 

Oblique aerial photography can preferably be done through an open window rather than 
through window glass/plastic.  

Photography through the aircraft door opening (having removed the door prior to flight) 
is also frequently done.  

Tethered balloons provide an inexpensive photography platform for long-term 
monitoring of a specific site.  
Page 75Section 2 Did you know?
Canada Centre for Remote Sensing

2.2 Did You Know? 
"...the forecast calls for scattered clouds with the possibility of rain..."
  
...most of the images you see on television weather forecasts are from geostationary 
satellites. This is because they provide broad coverage of the weather and cloud patterns on 
continental scales. Meteorologists (weather forecasters) use these images to help them 
determine in which direction the weather patterns are likely to go. The high repeat coverage 
capability of satellites with geostationary orbits allows them to collect several images daily to 
allow these patterns to be closely monitored.  
 
...satellites occasionally require their orbits to be corrected. Because of atmospheric drag and 
other forces that occur when a satellite is in orbit, they may deviate from their initial orbital 
path. In order to maintain the planned orbit, a control center on the ground will issue 
commands to the satellite to place it back in the proper orbit. Most satellites and their sensors 
have a finite life-span ranging from a few to several years. Either the sensor will cease to 
function adequately or the satellite will suffer severe orbit decay such that the system is no 
longer useable.  
Page 76Section 2 Did you know?
Canada Centre for Remote Sensing
2.3 Did You Know? 
If the IFOV for all pixels of a scanner stays constant (which is often the case), then the ground 
area represented by pixels at the nadir will have a larger scale then those pixels which are off-
nadir. This means that spatial resolution will vary from the image centre to the swath edge. 

2.5 Did You Know? 
"...you just can't have it all!..." 
 
 
...that there are trade-offs between spatial, spectral, and radiometric resolution which must be 
taken into consideration when engineers design a sensor. For high spatial resolution, the 
sensor has to have a small IFOV (Instantaneous Field of View). However, this reduces the 
amount of energy that can be detected as the area of the ground resolution cell within the 
IFOV becomes smaller. This leads to reduced radiometric resolution - the ability to detect fine 
energy differences. To increase the amount of energy detected (and thus, the radiometric 
resolution) without reducing spatial resolution, we would have to broaden the wavelength 
range detected for a particular channel or band. Unfortunately, this would reduce the spectral 
resolution of the sensor. Conversely, coarser spatial resolution would allow improved 
radiometric and/or spectral resolution. Thus, these three types of resolution must be balanced 
against the desired capabilities and objectives of the sensor. 
Page 77Section 2 Did You Know?
Canada Centre for Remote Sensing

2.7 Did You Know? 
"...let's take a look at the BIG PICTURE..."
 
 
...that the U.S. Space Shuttles have been used to take photographs from space. The 
astronauts onboard the shuttle have taken many photographs using hand-held cameras, 
similar to the type you would use for taking family photos. They have also used much larger 
and more sophisticated cameras mounted in the shuttle's cargo bay, called Large Format 
Cameras (LFCs). LFCs have long focal lengths (305 mm) and take high quality photographs 
covering several hundreds of kilometres in both dimensions. The exact dimensions depend (o
f 
course) on the height of the shuttle above the Earth. Photos from these passive sensors need 
to be taken when the Earth's surface is being illuminated by the sun and are subject to cloud 
cover and other attenuation from the atmosphere. The shuttle has also been used several 
times to image many regions of the Earth using a special active microwave sensor called a 
RADAR. The RADAR sensor can collect detailed imagery during the night or day, as it 
provides its own energy source, and is able to penetrate and "see" through cloud cover due to 
the long wavelength of the electromagnetic radiation. We will learn more about RADAR in 
Chapter 3. 
... although taking photographs in the UV portion of the spectrum is problematic due to 
atmospheric scattering and absorption, it can be very useful where other types of photography 
are not. An interesting example in wildlife research and management has used UV 
photography for detecting and counting harp seals on snow and ice. Adult harp seals have 
dark coats while their young have white coats. In normal panchromatic imagery, the dark 
coats of the adult seals are readily visible against the snow and ice background but the white 
coats of the young seals are not. However, the coats of both the adult and infant seals are 
strong absorbers of UV energy. Thus, both adult and young appear very dark in a UV image 
and can be easily detected. This allows simple and reliable monitoring of seal population 
changes over very large areas. 
Page 78Section 2 Did You Know?
Canada Centre for Remote Sensing

2.8 Did You Know? 
"...backfield in motion..." 
 
 
There is a photographic parallel to the push-broom scanner. It is based on the "slit camera". 
This camera does not have a shutter per se, but a slit (A) running in the across-track direction, 
which exposes film (B) which is being moved continuously (C) past the slit. The speed of 
motion of the film has to be proportional to the ground speed (D) of the aircraft. Thus the film 
speed has to be adjusted for the flying circumstances of the moment. The slit width (E) in the 
along-track direction is also adjustable so as to control exposure time. There are no individual 
photo 'frames' produced, but a continuous strip of imagery. Stereo slit photography is also 
possible, using a twin-lens system aimed slightly apart from parallel and each exposing one 
half of the film width. 
Page 79Section 2 Did You Know?
Canada Centre for Remote Sensing

2.10 Did You Know? 
"...scanning for warm-bodied life forms, captain... " 
 
...that, just as in aerial photography, some thermal scanner systems view the surface 
obliquely
. Forward-Looking Infrared (
FLIR
) systems point ahead of the aircraft and scan 
across the scene. FLIR systems produce images very similar in appearance to oblique aerial 
photographs and are used for applications ranging from forest fire detection to law 
enforcement.  
 
...many 
systematic
, or predictable, geometric distortions can be accounted for in real-time 
(i.e. during image acquisition). As an example, skew distortion in across-track scanner 
imagery due to the Earth's rotation can be accurately modeled and easily corrected. Other 
random variations causing distortion cannot be as easily modeled and require 
geometric 
correction
 in a digital environment after the data have been collected. We will discuss this 
topic in more detail in Chapter 4.  
Page 80Section 2 Did you know...?
Canada Centre for Remote Sensing

2.12 Did You Know? 
"...Land, Ho, matey!..."
 
...the ERTS (Earth Resources Technology Satellite) program was renamed to Landsat just 
prior to the launch of the second satellite in the series. The Landsat title was used to 
distinguish the program from another satellite program in the planning stages, called Seasat, 
intended primarily for oceanographic applications. The first (and only) Seasat satellite was 
successfully launched in 1978, but unfortunately was only operational for 99 days. Even 
though the satellite was short-lived and the Seasat program was discontinued, it collected 
some of the first RADAR images from space which helped heighten the interest in satellite 
RADAR remote sensing. Today, several RADAR satellites are operational or planned. We will 
learn more about RADAR and these satellites in the next chapter.  
 
...originally the MSS sensor numbering scheme (bands 4, 5, 6, and 7) came from their 
numerical sequence after the three bands of the RBV (Return Beam Vidicon) sensors. 
However, due to technical malfunctions with the RBV sensor and the fact that it was dropped 
from the satellite sensor payload with the launch of Landsat-4, the MSS bands were 
renumbered from 1 to 4. For the TM sensor, if we look at the wavelength ranges for each of 
the bands, we see that TM6 and TM7 are out of order in terms of increasing wavelength. This 
was because the TM7 channel was added as an afterthought late in the original system 
design process. 
Page 81Section 2.Did You Know?
Canada Centre for Remote Sensing

2.15 Did You Know? 
"...I'm receiving you loud and clear..." 
 
 
... Canada's ground receiving stations have been in operation since 1972 in Prince Albert, 
Saskatchewan and 1985 in Gatineau, Quebec. These two stations receive and process image 
data from several different satellites (NOAA, Landsat, RADARSAT, J-ERS, MOS, SPOT, and 
ERS) from five different countries or group of countries (USA, Canada, Japan, France, and 
Europe).  
Page 82Section 2.Did You Know?
Canada Centre for Remote Sensing

2. Whiz Quiz and Answers
 
 
2.2 Whiz Quiz 
What advantages do sensors carried on board satellites have over those carried on aircraft? 
Are there any disadvantages that you can think of?  
 
 
As a satellite in a near-polar sun-synchronous orbit revolves around the Earth, the satellite 
crosses the equator at approximately the same local sun time every day. Because of the 
orbital velocity, all other points on the globe are passed either slightly before or after this time. 
For a sensor in the visible portion of the spectrum, what would be the advantages and 
disadvantages of crossing times (local sun time) a) in the early morning, b) around noon, and 
c) in the mid afternoon?  
  
Page 83Section 2 Whiz Quiz and Answers
Canada Centre for Remote Sensing

2.2 Whiz Quiz - Answers 
Answer 1:
 Sensors on board satellites generally can "see" a much larger area of the Earth's 
surface than would be possible from a sensor onboard an aircraft. Also, because they are 
continually orbiting the Earth, it is relatively easy to collect imagery on a systematic and 
repetitive basis in order to monitor changes over time. The geometry of orbiting satellites with 
respect to the Earth can be calculated quite accurately and facilitates correction of remote 
sensing images to their proper geographic orientation and position. However, aircraft sensors 
can collect data at any time and over any portion of the Earth's surface (as long as conditions 
allow it) while satellite sensors are restricted to collecting data over only those areas and 
during specific times dictated by their particular orbits. It is also much more difficult to fix a 
sensor in space if a problem or malfunction develops! 
 
Answer 2:
 An early morning crossing time would have the sun at a very low angle in the sky 
and would be good for emphasizing topographic effects but would result in a lot of shadow in 
areas of high relief. A crossing time around noon would have the sun at its highest point in the 
sky and would provide the maximum and most uniform illumination conditions. This would be 
useful for surfaces of low reflectance but might cause saturation of the sensor over high 
reflectance surfaces, such as ice. Also, under such illumination,'specular reflection' from 
smooth surfaces may be a problem for interpreters. Inthe mid afternoon, the illumination 
conditions would be more moderate. However, a phenomenon called solar heating (due to the 
Page 84Section 2 Whiz Quiz and Answers
Canada Centre for Remote Sensing
sun heating the surface), which causes difficulties for recording reflected energy, will be near 
maximum at this time of day. In order to minimize between these effects, most satellites which 
image in the visible, reflected, and emitted infrared regions use crossing times around mid-
morning as a compromise. 

2.3 Whiz Quiz 
1. Look at the detail apparent in each of these two images. Which of the two images is of a 
smaller scale? What clues did you use to determine this? Would the imaging platform for the 
smaller scale image most likely have been a satellite or an aircraft?  
 
 
2. If you wanted to monitor the general health of all vegetation cover over the Canadian 
Prairie provinces for several months, what type of platform and sensor characteristics (spatial, 
spectral, and temporal resolution) would be best for this and why? 
 
Page 85Section 2 Whiz Quiz and Answers
Canada Centre for Remote Sensing

2.3 Whiz Quiz - Answers 
Answer 1:
 The image on the left is from a satellite while the image on the right is a 
photograph taken from an aircraft. The area covered in the image on the right is also covered 
in the image on the left, but this may be difficult to determine because the scales of the two 
images are much different. We are able to identify relatively small features (i.e. individual 
buildings) in the image on the right that are not discernible in the image on the left. Only 
general features such as street patterns, waterways, and bridges can be identified in the left-
hand image. Because features appear larger in the image on the right and a particular 
measurement (eg. 1 cm) on the image represents a smaller true distance on the ground, this 
image is at a larger scale. It is an aerial photograph of the Parliament Buildings in Ottawa, 
Canada. The left-hand image is a satellite image of the city of Ottawa. 
 
Answer 2:
 A satellite sensor with large area coverage and fairly coarse spatial resolution 
would be excellent for monitoring the general state of vegetation health over Alberta, 
Saskatchewan, and Manitoba. The large east-to-west expanse would be best covered by a 
sensor with a wide swath and broad coverage. This would also imply that the spatial 
resolution of the sensor would be fairly coarse. However, fine detail would not really be 
necessary for monitoring a broad class including all vegetation cover. With broad areal 
coverage the revisit period would be shorter, increasing the opportunity for repeat coverage 
necessary for monitoring change. The frequent coverage would also allow for areas covered 
by clouds on one date, to be filled in by data collected from another date, reasonably close in 
time. The sensor would not necessarily require high spectral resolution, but would at a 
minimum, require channels in the visible and near-infrared regions of the spectrum. 
Vegetation generally has a low reflectance in the visible and a high reflectance in the near-
infrared. The contrast in reflectance between these two regions assists in identifying 
vegetation cover.The magnitude of the reflected infrared energy is also an indication of 
vegetation health. A sensor on board the U.S. NOAA (National Oceanographic and 
Atmospheric Administration) series of satellites with exactly these types of characteristics is 
actually used for this type of monitoring over the entire surface of the Earth! 
 
Page 86Section 2 Whiz Quiz and Answers

2.4 Whiz Quiz 
1. Hyperspectral scanners (mentioned in Chapter 2.4) are special multispectral sensors which 
detect and record radiation in several (perhaps hundreds) of very narrow spectral bands. 
What would be some of the advantages of these types of sensors? What would be some of 
the disadvantages? 
 
2. If the spectral range of the 288 channels of the CASI (Compact Airborne Spectrographic 
Imager) is exactly 0.40 
μ
m to 0.90 
μ
m and each band covers a wavelength of 1.8 nm 
(nanometres, 10
-9
 m), will there be any overlap between the bands?
 
Page 87Section 2 Whiz Quiz and Answers
Canada Centre for Remote Sensing
2.4 Whiz Quiz - Answers 
Answer 1:
 Hyperspectral scanners have very high spectral resolution because of their narrow 
bandwidths. By measuring radiation over several small wavelength ranges, we are able to 
effectively build up a continuous spectrum of the radiation detected for each pixel in an image. 
This allows for fine differentiation between targets based on detailed reflectance and 
absorption responses which are not detectable using the broad wavelength ranges of 
conventional multispectral scanners. However, with this increased sensitivity comes 
significant increases in the volume of data collected. This makes both storage and 
manipulation of the data, even in a computer environment, much more difficult. Analyzing 
multiple images at one time or combining them, becomes cumbersome, and trying to identify 
and explain what each unique response represents in the "real world" is often difficult.  
Answer 2:
 The total wavelength range available will be 0.90-0.40 
μ
m = 0.50 mm. If there are 
288 channels of 1.8 nm each, let's calculate the total wavelength range they would span if 
they did not overlap. 
1.8 nm = 1.8 x 10
-9
 m
 
 
1.8 x10
-9
 m X 288 = 0.0000005184 m
 
 
0.0000005184 m = 0.5184 
μ
m 
Since 0.5184 is greater than 0.50, the answer is YES, there will be have to be some overlap 
between some or all of the 288 bands to fit into this 0.50 
μ
m range.  

2.5 Whiz Quiz 
 
Suppose you have a digital image which has a radiometric resolution of 6 bits. What is the 
maximum value of the digital number which could be represented in that image?  
 
Page 88Section 2 Whiz Quiz and Answers
 
2.5 Whiz Quiz - Answers 
 
The number of digital values possible in an image is equal to the  number two (2 - for binary
codings in a computer) raised to the exponent of the number of bits in the image  
(i.e. 2
# of bits
). The number of values in a 6-bit image would be equal to 
2
6
= 2 x 2 x 2 x 2 x 2 x 2 = 64. Since the range of values displayed in a digital image normally
starts at zero (0), in order to have 64 values, the maximum value possible would be 63.
Canada Centre for Remote Sensing

2.9 Whiz Quiz 
 
How would thermal imagery be useful in an urban environment?  
 
Page 89Section 2 Whiz Quiz and Answers
Canada Centre for Remote Sensing
2.9 Whiz Quiz - Answers 
 
Detecting and monitoring heat loss from buildings in urban areas is an excellent application of 
thermal remote sensing. Heating costs, particularly in northern countries such as Canada, can 
be very expensive. Thermal imaging in both residential and commercial areas allows us to 
identify specific buildings, or parts of buildings, where heat is escaping. If the amount of heat 
is significant, these areas can be targeted for repair and re-insulation to reduce costs and 
conserve energy. 

2.10 Whiz Quiz 
 
If you wanted to map a mountainous region, limiting geometric distortions as much as 
possible, would you choose a satellite-based or aircraft-based scanning system? Explain why 
in terms of imaging geometry. 
 
Page 90Section 2 Whiz Quiz and Answers
Canada Centre for Remote Sensing
2.10 Whiz Quiz Answers 
Although an aircraft scanning system may provide adequate geometric accuracy in most 
instances, a satellite scanner would probably be preferable in a mountainous region. Because 
of the large variations in relief, geometric distortions as a result of relief displacement would 
be amplified at aircraft altitudes much more than from satellite altitudes. Also, given the same 
lighting conditions, shadowing would be a greater problem using aircraft imagery because of 
the shallower viewing angles and would eliminate the possibility for practical mapping in these 
areas. 
 

2.12 Whiz Quiz 
 
Explain why data from the Landsat TM sensor might be considered more useful than data 
from the original MSS sensor. Hint: Think about their spatial, spectral, and radiometric 
resolutions. 
 
Page 91Section 2 Whiz Quiz and Answers
Canada Centre for Remote Sensing
2.12 Whiz Quiz - Answers 
There are several reasons why TM data may be 
considered more useful than MSS data. Although the 
areal coverage of a TM scene is virtually the same as a 
MSS scene, TM offers higher spatial, spectral, and 
radiometric resolution. The spatial resolution is 30 m 
compared to 80 m (except for the TM thermal channels, 
which are 120 m to 240 m). Thus, the level of spatial 
detail detectable in TM data is better. TM has more 
spectral channels which are narrower and better placed 
in the spectrum for certain applications, particularly 
vegetation discrimination. In addition, the increase from 
6 bits to 8 bits for data recording represents a four-fold 
increase in the radiometric resolution of the data.  
(Remember, 6 bits = 2
6
 = 64, and 8 bits = 2
8
 = 256 - 
therefore, 256/64 = 4). However, this does not mean that TM data are "better" than MSS data. 
Indeed, MSS data are still used to this day and provide an excellent data source for many 
applications. If the desired information cannot be extracted from MSS data, then perhaps the 
higher spatial, spectral, and radiometric resolution of TM data may be more useful. 

3. Microwave Remote Sensing
 
 
3.1 Introduction 
Microwave sensing encompasses both active and passive 
forms of remote sensing. As described in Chapter 2, the 
microwave portion of the spectrum covers the range from 
approximately 1cm to 1m in wavelength. Because of their long 
wavelengths, compared to the visible and infrared, 
microwaves have special properties that are important for 
remote sensing. 
Longer wavelength microwave radiation 
can penetrate through cloud cover, haze, dust, and all but 
the heaviest rainfall
 as the longer wavelengths are not 
susceptible to atmospheric scattering which affects shorter 
optical wavelengths. This property allows detection of 
microwave energy under almost all weather and 
environmental conditions so that data can be collected at any time. 
Passive microwave sensing is similar in concept to thermal remote sensing. All objects emit 
microwave energy of some magnitude, but the amounts are generally very small. A passive 
microwave sensor detects the naturally emitted microwave energy within its field of view. This 
emitted energy is related to the temperature and moisture properties of the emitting object or 
surface. Passive microwave sensors are typically radiometers or scanners and operate in 
much the same manner as systems discussed previously except that an antenna is used to 
detect and record the microwave energy. 
Page 92Section 3.1 Microvaves Introduction
Canada Centre for Remote Sensing

The microwave energy recorded by a passive sensor can be emitted by the atmosphere (1), 
reflected from the surface (2), emitted from the surface (3), or transmitted from the subsurface 
(4). Because the wavelengths are so long, the energy available is quite small compared to 
optical wavelengths. Thus, the fields of view must be large to detect enough energy to record 
a signal. Most passive microwave sensors are therefore characterized by low spatial 
resolution. 
Applications of passive microwave remote sensing include meteorology, hydrology, and 
oceanography. By looking "at", or "through" the atmosphere, depending on the wavelength, 
meteorologists can use passive microwaves to measure atmospheric profiles and to 
determine water and ozone content in the atmosphere. Hydrologists use passive microwaves 
to measure soil moisture since microwave emission is influenced by moisture content. 
Oceanographic applications include mapping sea ice, currents, and surface winds as well as 
detection of pollutants, such as oil slicks. 
Active microwave sensors provide their own 
source of microwave radiation to illuminate the 
target. Active microwave sensors are generally 
divided into two distinct categories: 
imaging and 
non-imaging
. The most common form of imaging 
active microwave sensors is RADAR. 
RADAR
 is 
an acronym for 
RA
dio 
D
etection 
A
nd 
R
anging, 
which essentially characterizes the function and 
operation of a radar sensor. The sensor transmits 
a microwave (radio) signal towards the target and 
detects the backscattered portion of the signal. 
The strength of the backscattered signal is measured to discriminate between different targets 
and the time delay between the transmitted and reflected signals determines the distance (or 
range
) to the target. 
Non-imaging microwave sensors include 
altimeters
 and 
scatterometers
. In most cases 
these are profiling devices which take measurements in one linear dimension, as opposed to 
the two-dimensional representation of imaging sensors. Radar altimeters transmit short 
microwave pulses and measure the round trip time delay to targets to determine their distance 
from the sensor. Generally altimeters look straight down at nadir below the platform and thus 
measure height or elevation (if the altitude of the platform is accurately known). Radar 
altimetry is used on aircraft for altitude determination and on aircraft and satellites for 
topographic mapping and sea surface height estimation. Scatterometers are also generally 
non-imaging sensors and are used to make precise quantitative measurements of the amount 
of energy backscattered from targets. The amount of energy backscattered is dependent on 
the surface properties (roughness) and the angle at which the microwave energy strikes the 
target. Scatterometry measurements over ocean surfaces can be used to estimate wind 
speeds based on the sea surface roughness. Ground-based scatterometers are used 
extensively to accurately measure the backscatter from various targets in order to 
Page 93Section 3.1 Microvaves Introduction
Canada Centre for Remote Sensing

characterize different materials and surface types. This is analogous to the concept of spectral 
reflectance curves in the optical spectrum. 
For the remainder of this chapter we focus solely on 
imaging radars
. As with passive 
microwave sensing, a major advantage of radar is the capability of the radiation to penetrate 
through cloud cover and most weather conditions. Because radar is an active sensor, it can 
also be used to image the surface at any time, day or night. These are the two primary 
advantages of radar: 
all-weather and day or night
imaging. It is also important to understand 
that, because of the fundamentally different way in which an active radar operates compared 
to the passive sensors we described in Chapter 2, a radar image is quite different from and 
has special properties unlike images acquired in the visible and infrared portions of the 
spectrum. Because of these differences, radar and optical data can be complementary to one 
another as they offer different perspectives of the Earth's surface providing different 
information content. We will examine some of these fundamental properties and differences in 
more detail in the following sections. 
Before we delve into the peculiarities of radar, let's first look briefly at the origins and history of 
imaging radar, with particular emphasis on the Canadian experience in radar remote sensing. 
The first demonstration of the transmission of radio microwaves and reflection from various 
objects was achieved by Hertz in 1886. Shortly after the turn of the century, the first 
rudimentary radar was developed for ship detection. In the 1920s and 1930s, experimental 
ground-based pulsed radars were developed for detecting objects at a distance. The first 
imaging radars used during World War II had rotating sweep displays which were used for 
detection and positioning of aircrafts and ships. After World War II, side-looking airborne radar 
(SLAR) was developed for military terrain reconnaissance and surveillance where a strip of 
the ground parallel to and offset to the side of the aircraft was imaged during flight. In the 
1950s, advances in SLAR and the development of higher resolution synthetic aperture radar 
(SAR) were developed for military purposes. In the 1960s these radars were declassified and 
began to be used for civilian mapping applications. Since this time the development of several 
airborne and spaceborne radar systems for mapping and monitoring applications use has 
flourished. 
Canada initially became involved in radar remote sensing in the mid-1970s. It was recognized 
that radar may be particularly well-suited for surveillance of our vast northern expanse, which 
is often cloud-covered and shrouded in darkness during the Arctic winter, as well as for 
monitoring and mapping our natural resources. Canada's SURSAT (Surveillance Satellite) 
project from 1977 to 1979 led to our participation in the (U.S.) SEASAT radar satellite, the first 
operational civilian radar satellite. The Convair-580 airborne radar program, carried out by the 
Canada Centre for Remote Sensing following the SURSAT program, in conjunction with radar 
research programs of other agencies such as NASA and the European Space Agency (ESA), 
led to the conclusion that spaceborne remote sensing was feasible. In 1987, the Radar Data 
Development Program (RDDP), was initiated by the Canadian government with the objective 
of "operationalizing the use of radar data by Canadians". Over the 1980s and early 1990s, 
several research and commercial airborne radar systems have collected vast amounts of 
Page 94Section 3.1 Microvaves Introduction
Canada Centre for Remote Sensing

imagery throughout the world demonstrating the utility of radar data for a variety of 
applications. With the launch of ESA's ERS-1 in 1991, spaceborne radar research intensified, 
and was followed by the major launches of Japan's J-ERS satellite in 1992, ERS-2 in 1995, 
and Canada's advanced RADARSAT satellite, also in 1995. 
Page 95Section 3.1 Microvaves Introduction
Canada Centre for Remote Sensing

3.2 Radar Basics 
As noted in the previous section, a 
radar
 is essentially a 
ranging or distance measuring device. It consists 
fundamentally of a transmitter, a receiver, an antenna, and an 
electronics system to process and record the data. The 
transmitter generates successive short bursts (or 
pulses
 of 
microwave (A) at regular intervals which are focused by the 
antenna into a beam (B). The radar beam illuminates the 
surface obliquely at a right angle to the motion of the platform. 
The antenna receives a portion of the transmitted energy 
reflected (or 
backscattered
) from various objects within the 
illuminated beam (C). By measuring the time delay between 
the transmission of a pulse and the reception of the 
backscattered "echo" from different targets, their distance 
from the radar and thus their location can be determined. As the sensor platform moves forward, recording and 
processing of the backscattered signals builds up a two-dimensional image of the surface. 
 
While we have characterized electromagnetic radiation in the visible and infrared portions of the spectrum primarily 
by wavelength, microwave portions of the spectrum are often referenced according to both wavelength and 
frequency. The 
microwave region of the spectrum
 is quite large, relative to the visible and infrared, and there are 
several wavelength ranges or bands commonly used which given code letters during World War II, and remain to this 
day. 
Ka, K, and Ku bands: very short wavelengths used in early airborne radar systems but uncommon today.  

X-band: used extensively on airborne systems for military reconnaissance and terrain mapping.  
C-band: common on many airborne research systems (CCRS Convair-580 and NASA AirSAR) and 
spaceborne systems (including  
ERS-1 and 2 and RADARSAT).  
Page 96Section 3.2 Radar Basics
Canada Centre for Remote Sensing

S-band: used on board the Russian ALMAZ satellite.  

L-band: used onboard American SEASAT and Japanese JERS-1 satellites and NASA airborne system.  
P-band: longest radar wavelengths, used on NASA experimental airborne research system.  
 
 
Two radar images of the same agricultural fields 
Here are two radar images
 of the same agricultural fields, each image having been collected using a different radar 
band. The one on the top was acquired by a C-band radar and the one below was acquired by an L-band radar. You 
can clearly see that there are significant differences between the way the various fields and crops appear in each of 
the two images. This is due to the different ways in which the radar energy interacts with the fields and crops 
depending on the radar wavelength. We will learn more about this in later sections. 
When discussing microwave energy, the 
polarization
 
of the radiation is also important. Polarization refers to 
the orientation of the electric field (recall the definition 
of electromagnetic radiation from Chapter 1). Most 
radars are designed to transmit microwave radiation 
either horizontally polarized (H) or vertically polarized 
(V). Similarly, the antenna receives either the 
horizontally or vertically polarized backscattered 
energy, and some radars can receive both. These two 
polarization states are designated by the letters H for 
horizontal, and V, for vertical. Thus, there can be four 
combinations of both transmit and receive polarizations 
as follows: 
HH - for horizontal transmit and horizontal receive,  
VV - for vertical transmit and vertical receive,  
HV - for horizontal transmit and vertical receive, and  
VH - for vertical transmit and horizontal receive.  
The first two polarization combinations are referred to as like-polarized because the transmit and receive 
polarizations are the same. The last two combinations are referred to as cross-polarized because the transmit and 
receive polarizations are opposite of one another. These 
C-band images
 of agricultural fields demonstrate the 
variations in radar response due to changes in polarization. The bottom two images are like-polarized (HH and VV, 
respectively), and the upper right image is cross-polarized (HV). The upper left image is the result of displaying each 
of the three different polarizations together, one through each of the primary colours (red, green, and blue). Similar to 
variations in wavelength, depending on the transmit and receive polarizations, the radiation will interact with and be 
Page 97Section 3.2 Radar Basics
Canada Centre for Remote Sensing

backscattered differently from the surface. Both wavelength and polarization affect how a radar "sees" the surface. 
Therefore, radar imagery collected using different polarization and wavelength combinations may provide different 
and complementary information about the targets on the surface.  
 
 
C-band images 
Page 98Section 3.2 Radar Basics
Canada Centre for Remote Sensing

3.3 Viewing Geometry and Spatial Resolution 
The imaging geometry of a radar system is 
different from the framing and scanning 
systems commonly employed for optical 
remote sensing described in Chapter 2. Similar 
to optical systems, the platform travels forward 
in the 
flight direction (A)
 with the 
nadir (B)
 
directly beneath the platform. The microwave 
beam is transmitted obliquely at right angles to 
the direction of flight illuminating a 
swath (C)
 
which is offset from nadir. 
Range (D)
 refers to 
the across-track dimension perpendicular to the 
flight direction, while 
azimuth (E)
 refers to the 
along-track dimension parallel to the flight 
direction. This side-looking viewing geometry is 
typical of imaging radar systems (airborne or spaceborne). 
 
Near range 
The portion of the image swath closest to the nadir track of the radar platform is called the 
near range (A)
 while the portion of the swath farthest from the nadir is called the 
far range 
(B)
. 
Page 99Section 3.3 Viewing Geometry and Spatial Resolution
Canada Centre for Remote Sensing

 
Incidence angle 
The incidence angle is the angle between the 
radar beam and ground surface (A)
 which 
increases, moving across the swath from near to far range. The 
look angle (B)
 is the angle at 
which the radar "looks" at the surface. In the near range, the viewing geometry may be 
referred to as being steep, relative to the far range, where the viewing geometry is shallow. At 
all ranges the radar antenna measures the radial line of sight distance between the radar and 
each target on the surface. This is the 
slant range distance (C)
. The 
ground range 
distance (D)
 is the true horizontal distance along the ground corresponding to each point 
measured in slant range. 
Unlike optical systems, a radar's spatial resolution 
is a function of the specific properties of the 
microwave radiation and geometrical effects. If a 
Real Aperture Radar (RAR) is used for image 
formation (as in Side-Looking Airborne Radar) a 
single transmit pulse and the backscattered signal 
are used to form the image. In this case, the 
resolution is dependent on the effective length of 
the pulse in the slant range direction and on the 
width of the illumination in the azimuth direction. 
The 
range or across-track resolution
 is 
dependent on the length of the pulse (P). Two 
distinct targets on the surface will be resolved in the range dimension if their separation is 
greater than half the pulse length. For example, targets 1 and 2 will not be separable while 
targets 3 and 4 will. Slant range resolution remains constant, independent of range. However, 
when projected into ground range coordinates, the resolution in ground range will be 
dependent of the incidence angle. Thus, for fixed slant range resolution, the ground range 
resolution will decrease with increasing range. 
Page 100Section 3.3 Viewing Geometry and Spatial Resolution
Canada Centre for Remote Sensing

 
The 
azimuth or along-track resolution
 is determined by the angular width of the radiated 
microwave beam and the slant range distance. This 
beamwidth (A)
is a measure of the width 
of the illumination pattern. As the radar illumination propagates to increasing distance from the 
sensor, the azimuth resolution increases (becomes coarser). In this illustration, targets 1 and 
2 in the near range would be separable, but targets 3 and 4 at further range would not. The 
radar beamwidth is inversely proportional to the antenna length (also referred to as the 
aperture) which means that a longer antenna (or aperture) will produce a narrower beam and 
finer resolution. 
Finer range resolution can be achieved by using a shorter pulse length, which can be done 
within certain engineering design restrictions. Finer azimuth resolution can be achieved by 
increasing the antenna length. However, the actual length of the antenna is limited by what 
can be carried on an airborne or spaceborne platform. For airborne radars, antennas are 
usually limited to one to two metres; for satellites they can be 10 to 15 metres in length. To 
overcome this size limitation, the forward motion of the platform and special recording and 
processing of the backscattered echoes are used to simulate a very long antenna and thus 
increase azimuth resolution
. 
 
This figure illustrates how this is achieved. As a 
target (A)
 first enters the radar beam (1), the 
backscattered echoes from each transmitted pulse begin to be recorded. As the platform 
continues to move forward, all echoes from the target for each pulse are recorded during the 
entire time that the target is within the beam. The point at which the target leaves the view of 
the radar beam (2) some time later, determines the length of the simulated or 
synthesized 
antenna (B)
. Targets at far range, where the beam is widest will be illuminated for a longer 
period of time than objects at near range. The expanding beamwidth, combined with the 
increased time a target is within the beam as ground range increases, balance each other, 
such that the resolution remains constant across the entire swath. This method of achieving 
uniform, fine azimuth resolution across the entire imaging swath is called 
synthetic aperture 
Page 101Section 3.3 Viewing Geometry and Spatial Resolution
Canada Centre for Remote Sensing
radar
, or 
SAR
. Most airborne and spaceborne radars employ this type of radar.  

3.4 Radar Image Distortions 
As with all remote sensing systems, the viewing 
geometry of a radar results in certain geometric 
distortions on the resultant imagery. However, there 
are key differences for radar imagery which are due 
to the side-looking viewing geometry, and the fact 
that the radar is fundamentally a distance 
measuring device (i.e. measuring range). 
Slant-
range scale distortion
 occurs because the radar is 
measuring the distance to features in slant-range 
rather than the true horizontal distance along the 
ground. This results in a varying image scale, 
moving from near to far range. Although targets A1 
and B1 are the same size on the ground, their apparent dimensions in slant range (A2 and 
B2) are different. This causes targets in the near range to appear compressed relative to the 
far range. Using trigonometry, ground-range distance can be calculated from the slant-range 
distance and platform altitude to convert to the proper ground-range format. 
 
 
This conversion comparison
 shows a radar image in slant-range display (top) where the 
fields and the road in the near range on the left side of the image are compressed, and the 
same image converted to ground-range display (bottom) with the features in their proper 
geometric shape. 
Similar to the distortions encountered when using cameras and scanners, radar images are 
also subject to geometric distortions due to 
relief displacement
. As with scanner imagery, 
this displacement is one-dimensional and occurs perpendicular to the flight path. However, 
the displacement is reversed with targets being displaced towards, instead of away from the 
sensor. Radar 
foreshortening
 and 
layover
 are two consequences which result from relief 
displacement. 
Page 102Section 3.4 Radar Image Distortions
Canada Centre for Remote Sensing

 
When the radar beam reaches the base of a tall feature tilted towards the radar (e.g. a 
mountain) before it reaches the top 
foreshortening
 will occur. Again, because the radar 
measures distance in slant-range, the slope (A to B) will appear compressed and the length of 
the slope will be represented incorrectly (A' to B'). Depending on the angle of the hillside or 
mountain slope in relation to the incidence angle of the radar beam, the severity of 
foreshortening will vary. Maximum foreshortening occurs when the radar beam is 
perpendicular to the slope such that the slope, the base, and the top are imaged 
simultaneously (C to D). The length of the slope will be reduced to an effective length of zero 
in slant range (C'D'). The figure below shows a radar image of 
steep mountainous terrain
 
with severe foreshortening effects. The foreshortened slopes appear as bright features on the 
image. 
 
  
  
  
  
  
Page 103Section 3.4 Radar Image Distortions
Canada Centre for Remote Sensing

  
  
  
Layover
 occurs when the radar beam reaches the 
top of a tall feature (B) before it reaches the base 
(A). The return signal from the top of the feature 
will be received before the signal from the bottom. 
As a result, the top of the feature is displaced 
towards the radar from its true position on the 
ground, and "lays over" the base of the feature (B' 
to A'). 
Layover effects
 on a radar image look very 
similar to effects due to foreshortening. As with 
foreshortening, layover is most severe for small 
incidence angles, at the near range of a swath, and 
in mountainous terrain. 
 
Both foreshortening and layover result in 
radar shadow
. Radar shadow occurs when the 
radar beam is not able to illuminate the ground surface. Shadows occur in the down range 
dimension (i.e. towards the far range), behind vertical features or slopes with steep sides. 
Since the radar beam does not illuminate the surface, shadowed regions will appear dark on 
an image as no energy is available to be backscattered. As incidence angle increases from 
near to far range, so will shadow effects as the radar beam looks more and more obliquely at 
the surface. This image illustrates 
radar shadow effects
 on the right side of the hillsides 
which are being illuminated from the left. 
Page 104Section 3.4 Radar Image Distortions
Canada Centre for Remote Sensing

 
Red surfaces are completely in shadow. Black areas in image are shadowed and contain no 
information. 
 
Radar shadow effects 
  
Page 105Section 3.4 Radar Image Distortions
Canada Centre for Remote Sensing

3.5 Target Interaction and Image Appearance 
The brightness of features in a radar image is dependent on the portion of the transmitted 
energy that is returned back to the radar from targets on the surface. The magnitude or 
intensity of this backscattered energy is dependent on how the radar energy interacts with the 
surface, which is a function of several variables or parameters. These parameters include the 
particular characteristics of the radar system (frequency, polarization, viewing geometry, etc.) 
as well as the characteristics of the surface (landcover type, topography, relief, etc.). Because 
many of these characteristics are interrelated, it is impossible to separate out each of their 
individual contributions to the appearance of features in a radar image. Changes in the 
various parameters may have an impact on and affect the response of other parameters, 
which together will affect the amount of backscatter. Thus, the brightness of features in an 
image is usually a combination of several of these variables. However, for the purposes of our 
discussion, we can group these characteristics into three areas which fundamentally control 
radar energy/target interactions. They are: 

Surface roughness of the target  

Radar viewing and surface geometry relationship  

Moisture content and electrical properties of the target  
 
The surface roughness of a feature controls how the microwave energy interacts with that 
surface or target and is generally the dominant factor in determining the tones seen on a radar 
image. 
Surface roughness
 refers to the average height variations in the surface cover from a 
plane surface, and is measured on the order of centimetres. Whether a surface appears rough 
or smooth to a radar depends on the wavelength and incidence angle. 
Simply put, a surface is considered "smooth" if the 
height variations are much smaller than the radar 
wavelength. When the surface height variations begin 
to approach the size of the wavelength, then the 
surface will appear "rough". Thus, a given surface will 
appear rougher as the wavelength becomes shorter 
and smoother as the wavelength becomes longer. A 
smooth surface (A)
 causes 
specular
 reflection of the 
incident energy (generally away from the sensor) and 
thus only a small amount of energy is returned to the 
radar. This results in smooth surfaces appearing as 
Page 106Section 3.5 Target Interaction and Image Appearance
Canada Centre for Remote Sensing

darker toned areas on an image. A 
rough surface (B)
 will scatter the energy approximately 
equally in all directions (i.e. 
diffusely
) and a significant portion of the energy will be 
backscattered to the radar. Thus, rough surfaces will appear lighter in tone on an image. 
Incidence angle, in combination with wavelength, also plays a role in the apparent roughness 
of a surface. For a given surface and wavelength, the surface will appear smoother as the 
incidence angle increases. Thus, as we move farther across the swath, from near to far range, 
less energy would be returned to the sensor and the image would become increasingly darker 
in tone. 
We have already discussed incidence or look angle in relation 
to viewing geometry and how changes in this angle affect the 
signal returned to the radar. However, in relation to surface 
geometry, and its effect on target interaction and image 
appearance, the local incidence angle is a more appropriate 
and relevant concept. The local incidence angle is the angle 
between the radar beam and a line perpendicular to the slope 
at the point of incidence (A). Thus, local incidence angle takes 
into account the local slope of the terrain in relation to the radar beam. With flat terrain, the 
local incidence angle is the same as the look angle (B) of the radar. For terrain with any type 
of relief, this is not the case. Generally, slopes facing towards the radar will have small local 
incidence angles, causing relatively strong backscattering to the sensor, which results in a 
bright-toned appearance in an image. 
As the concept of 
local incidence angle
 demonstrates, the relationship between viewing 
geometry and the geometry of the surface features plays an important role in how the radar 
energy interacts with targets and their corresponding brightness on an image. Variations in 
viewing geometry will accentuate and enhance topography and relief in different ways, such 
that varying degrees of foreshortening, layover, and shadow (section 3.4) may occur 
depending on surface slope, orientation, and shape. 
 
The 
look direction or aspect angle
 of the radar describes the orientation of the transmitted 
radar beam relative to the direction or alignment of linear features on the surface. The look 
direction can significantly influence the appearance of features on a radar image, particularly 
when ground features are organized in a linear structure (such as agricultural crops or 
Page 107Section 3.5 Target Interaction and Image Appearance
Canada Centre for Remote Sensing

mountain ranges). If the look direction is close to perpendicular to the orientation of the 
feature (A), then a large portion of the incident energy will be reflected back to the sensor and 
the feature will appear as a brighter tone. If the look direction is more oblique in relation to the 
feature orientation (B), then less energy will be returned to the radar and the feature will 
appear darker in tone. Look direction is important for enhancing the contrast between features 
in an image. It is particularly important to have the proper look direction in mountainous 
regions in order to minimize effects such as layover and shadowing. By acquiring imagery 
from different look directions, it may be possible to enhance identification of features with 
different orientations relative to the radar. 
Features which have two (or more) surfaces (usually 
smooth) at right angles to one another, may cause 
corner reflection
 to occur if the 'corner' faces the 
general direction of the radar antenna. The orientation of 
the surfaces at right angles causes most of the radar 
energy to be reflected directly back to the antenna due 
to the double bounce (or more) reflection. Corner 
reflectors with complex angular shapes are common in 
urban environments (e.g. buildings and streets, bridges, 
other man-made structures). Naturally occurring corner 
reflectors may include severely folded rock and cliff 
faces or upright vegetation standing in water. In all cases, corner reflectors show up as very 
bright targets in an image, such as the buildings and other man-made structures in this 
radar 
image of a city
. 
 
The presence (or absence) of moisture affects the electrical properties of an object or 
medium. Changes in the electrical properties influence the absorption, transmission, and 
reflection of microwave energy. Thus, the moisture content will influence how targets and 
surfaces reflect energy from a radar and how they will appear on an image. Generally, 
reflectivity (and image brightness) increases with increased moisture content. For example, 
surfaces such as soil and vegetation cover will appear brighter when they are wet than when 
they are dry. 
Page 108Section 3.5 Target Interaction and Image Appearance
Canada Centre for Remote Sensing

When a target is moist or wet, scattering from the topmost portion (surface scattering) is the 
dominant process taking place. The type of reflection (ranging from specular to diffuse) and 
the magnitude will depend on how rough the material appears to the radar. If the target is very 
dry and the surface appears smooth to the radar, the radar energy may be able to penetrate 
below the surface, whether that surface is discontinuous (e.g. forest canopy with leaves and 
branches), or a homogeneous surface (e.g. soil, sand, or ice). For a given surface, longer 
wavelengths are able to penetrate further than shorter wavelengths. 
 
If the radar energy does manage to penetrate through the topmost surface, then volume 
scattering may occur. 
Volume scattering
 is the scattering of radar energy within a volume or 
medium, and usually consists of multiple bounces and reflections from different components 
within the volume. For example, in a forest, scattering may come from the leaf canopy at the 
tops of the trees, the leaves and branches further below, and the tree trunks and soil at the 
ground level. Volume scattering may serve to decrease or increase image brightness, 
depending on how much of the energy is scattered out of the volume and back to the radar. 
Page 109Section 3.5 Target Interaction and Image Appearance
Canada Centre for Remote Sensing

3.6 Radar Image Properties 
 
All radar images appear with some degree of what we call radar speckle. 
Speckle
 appears as 
a grainy "salt and pepper" texture in an image. This is caused by random constructive and 
destructive interference from the multiple scattering returns that will occur within each 
resolution cell. As an example, an homogeneous target, such as a large grass-covered field, 
without the effects of speckle would generally result in light-toned pixel values on an image 
(A). However, reflections from the individual blades of grass within each resolution cell results 
in some image pixels being brighter and some being darker than the average tone (B), such 
that the field appears speckled. 
 
Speckle is essentially a form of noise which degrades the quality of an image and may make 
interpretation (visual or digital) more difficult. Thus, it is generally desirable to reduce speckle 
prior to interpretation and analysis. 
Speckle reduction
 can be achieved in two ways: 

multi-look processing, or  

spatial filtering.  
  
Page 110Section 3.6 Radar Image Properties
Canada Centre for Remote Sensing

  
Multi-look processing refers to the division of the radar beam (A) 
into several (in this example, five) narrower sub-beams (1 to 5). 
Each sub-beam provides an independent "look" at the 
illuminated scene, as the name suggests. Each of these "looks" 
will also be subject to speckle, but by summing and averaging 
them together to form the final output image, the amount of 
speckle will be reduced. 
While multi-looking is 
usually done during data 
acquisition, speckle reduction by spatial filtering is 
performed on the output image in a digital (i.e. computer) 
image analysis environment. Speckle reduction filtering 
consists of moving a small window of a few pixels in 
dimension (e.g. 3x3 or 5x5) over each pixel in the image, 
applying a mathematical calculation using the pixel 
values under that window (e.g. calculating the average), and replacing the central pixel with 
the new value. The window is moved along in both the row and column dimensions one pixel 
at a time, until the entire image has been covered. By calculating the average of a small 
window around each pixel, a smoothing effect is achieved and the visual appearance of the 
speckle is reduced. 
 
 
Speckle reduction using an averaging filter 
This graphic shows a radar image before (top) and after (bottom) speckle reduction using an 
averaging filter. The median (or middle) value of all the pixels underneath the moving window 
is also often used to reduce speckle. Other more complex filtering calculations can be 
performed to reduce speckle while minimizing the amount of smoothing taking place. 
Page 111Section 3.6 Radar Image Properties
Canada Centre for Remote Sensing

Both multi-look processing and spatial filtering reduce speckle at the expense of resolution, 
since they both essentially smooth the image. Therefore, the amount of speckle reduction 
desired must be balanced with the particular application the image is being used for, and the 
amount of detail required. If fine detail and high resolution is required then little or no multi-
looking/spatial filtering should be done. If broad-scale interpretation and mapping is the 
application, then speckle reduction techniques may be more appropriate and acceptable. 
Another property peculiar to radar images is slant-range distortion, which was discussed in 
some detail in section 3.4. Features in the near-range are compressed relative to features in 
the far range due to the slant-range scale variability. For most applications, it is desirable to 
have the radar image presented in a format which corrects for this distortion, to enable true 
distance measurements between features. This requires the slant-range image to be 
converted to 'ground range' display. This can be done by the radar processor prior to creating 
an image or after data acquisition by applying a transformation to the slant range image. In 
most cases, this conversion will only be an estimate of the geometry of the ground features 
due to the complications introduced by variations in terrain relief and topography. 
A radar antenna transmits more power in the mid-range portion of the illuminated swath than 
at the near and far ranges. This effect is known as 
antenna pattern
 and results in stronger 
returns from the center portion of the swath than at the edges. Combined with this antenna 
pattern effect is the fact that the energy returned to the radar decreases dramatically as the 
range distance increases. Thus, for a given surface, the strength of the returned signal 
becomes smaller and smaller moving farther across the swath. These effects combine to 
produce an image which varies in intensity (tone) in the range direction across the image. A 
process known as 
antenna pattern correction
 may be applied to produce a uniform average 
brightness across the imaged swath, to better facilitate visual interpretation. 
 
The range of brightness levels a remote sensing system can differentiate is related to 
radiometric resolution (section 2.5) and is referred to as the 
dynamic range
. While optical 
sensors, such as those carried by satellites such as Landsat and SPOT, typically produce 256 
intensity levels, radar systems can differentiate intensity levels up to around 100,000 levels! 
Since the human eye can only discriminate about 40 intensity levels at one time, this is too 
much information for visual interpretation. Even a typical computer would have difficulty 
dealing with this range of information. Therefore, most radars record and process the original 
Page 112Section 3.6 Radar Image Properties
Canada Centre for Remote Sensing

data as 16 bits (65,536 levels of intensity), which are then further scaled down to 8 bits (256 
levels) for visual interpretation and/or digital computer analysis. 
Calibration
 is a process which ensures that the radar system and the signals that it measures 
are as consistent and as accurate as possible. Prior to analysis, most radar images will 
require 
relative calibration
. Relative calibration corrects for known variations in radar 
antenna and systems response and ensures that uniform, repeatable measurements can be 
made over time. This allows relative comparisons between the response of features within a 
single image, and between separate images to be made with confidence. However, if we wish 
to make accurate 
quantitative
 measurements representing the actual energy or power 
returned from various features or targets for comparative purposes, then 
absolute 
calibration
 is necessary. 
Absolute calibration, a much more involved process than relative calibration, attempts to 
relate the magnitude of the recorded signal strength to the actual amount of energy 
backscattered from each resolution cell. To achieve this, detailed measurements of the radar 
system properties are required as well as quantitative measurements of the scattering 
properties of specific targets. The latter are often obtained using ground-based 
scatterometers, as described in section 3.1. Also, devices called 
transponders
 may be 
placed on the ground prior to data acquisition to calibrate an image. These devices receive 
the incoming radar signal, amplify it, and transmit a return signal of known strength back to 
the radar. By knowing the actual strength of this return signal in the image, the responses 
from other features can be referenced to it. 
Page 113Section 3.6 Radar Image Properties
Canada Centre for Remote Sensing

3.7 Advanced Radar Applications 
In addition to standard acquisition and use of radar data, there are three specific applications 
worth mentioning. 
 
The first is 
stereo radar
 which is similar in concept to stereo mapping using aerial 
photography (described in section 2.7). Stereo radar image pairs are acquired covering the 
same area, but with different look/incidence angles (A), or opposite look directions (B). Unlike 
aerial photos where the displacement is radially outward from the nadir point directly below 
the camera, radar images show displacement only in the range direction. Stereo pairs taken 
from opposite look directions (i.e. one looking north and the other south) may show significant 
contrast and may be difficult to interpret visually or digitally. In mountainous terrain, this will be 
even more pronounced as shadowing on opposite sides of features will eliminate the stereo 
effect. Same side stereo imaging (A) has been used operationally for years to assist in 
interpretation for forestry and geology and also to generate topographic maps. The estimation 
of distance measurements and terrain height for topographic mapping from stereo radar data 
is called 
radargrammetry
, and is analogous to photogrammetry carried out for similar 
purposes with aerial photographs. 
 
  
Radargrammetry is one method of estimating terrain height using radar. Another, more 
advanced method is called 
interferometry
. Interferometry relies on being able to measure a 
property of electromagnetic waves called 
phase
. Suppose we have 
two waves
 with the exact 
Page 114Section 3.7 Advanced Radar Applications
Canada Centre for Remote Sensing

same wavelength and frequency traveling along in space, but the starting point of one is offset 
slightly from the other. The offset between matching points on these two waves (A) is called 
the 
phase difference
. 
Interferometric systems
 use two 
antennas, separated in the range dimension by a small 
distance, both recording the returns from each resolution 
cell. The two antennas can be on the same platform (as 
with some airborne SARs), or the data can be acquired from 
two different passes with the same sensor, such has been 
done with both airborne and satellite radars. By measuring 
the exact phase 
difference between the 
two returns (A), the 
path length difference can be calculated to an accuracy 
that is on the order of the wavelength (i.e centimetres). 
Knowing the position of the antennas with respect to the 
Earth's surface, the position of the resolution cell, 
including its elevation, can be determined. The phase 
difference between adjacent resolution cells, is 
illustrated in this 
interferogram
, where colours 
represents the variations in height. The information contained in an interferogram can be used 
to derive topographic information and produce 
three-dimensional imagery
 of terrain height. 
 
The concept of radar 
polarimetry
 was already alluded to in our discussion of radar 
fundamentals in section 3.2. As its name implies, polarimetry involves discriminating between 
the 
polarizations
 that a radar system is able to transmit and receive. Most radars transmit 
microwave radiation in either horizontal (H) or vertical (V) polarization, and similarly, receive 
the backscattered signal at only one of these polarizations. 
Multi-polarization
 radars are able 
to transmit either H or V polarization and receive both the like- and cross-polarized returns 
(e.g. HH and HV or VV and VH, where the first letter stands for the polarization transmitted 
and the second letter the polarization received). 
Polarimetric radars
 are able to transmit and 
receive both horizontal and vertical polarizations. Thus, they are able to receive and process 
all four combinations of these polarizations: HH, HV, VH, and VV. Each of these "polarization 
channels" have varying sensitivities to different surface characteristics and properties. Thus, 
Page 115Section 3.7 Advanced Radar Applications
Canada Centre for Remote Sensing

the availability of multi-polarization data helps to improve the identification of, and the 
discrimination between features. In addition to recording the magnitude (i.e. the strength) of 
the returned signal for each polarization, most polarimetric radars are also able to record the 
phase
 information of the returned signals. This can be used to further characterize the 
polarimetric "signature" of different surface features. 
Page 116Section 3.7 Advanced Radar Applications
Canada Centre for Remote Sensing

3.8 Radar Polarimetry 
Introduction to Polarization 
When discussing microwave energy propagation and scattering, the polarization of the 
radiation is an important property. For a plane electromagnetic (EM) wave, polarization refers 
to the locus of the electric field vector in the plane perpendicular to the direction of propagation. 
While the length of the vector represents the 
amplitude
 of the wave, and the rotation rate of 
the vector represents the 
frequency
 of the wave, polarization refers to the 
orientation
 and 
shape
 of the pattern traced by the tip of the vector.  
The waveform of the electric field strength (voltage) of an EM wave can be predictable (the 
wave is polarized) or random (the wave is unpolarized), or a combination of both. In the latter 
case, the degree of polarization describes the ratio of polarized power to total power of the 
wave. An example of a fully polarized wave would be a 
monochromatic
 sine wave, with a 
single, constant frequency and stable amplitude.  
 
 
Examples of horizontal (black) and vertical (red) polarizations of a plane electromagnetic wave 
  
Many radars are designed to transmit microwave radiation that is either horizontally polarized 
(H) or vertically polarized (V). A transmitted wave of either polarization can generate a 
backscattered wave with a variety of polarizations. It is the analysis of these transmit and 
receive polarization combinations that constitutes the science of radar polarimetry. 
Any polarization on either transmission or reception can be synthesized by using H and V 
components with a well-defined relationship between them. For this reason, systems that 
transmit and receive both of these linear polarizations are commonly used. With these radars, 
there can be four combinations of transmit and receive polarizations: 

HH - for horizontal transmit and horizontal receive  

VV - for vertical transmit and vertical receive  
Page 117Section 3.8 Radar Polarimetry
Canada Centre for Remote Sensing


HV - for horizontal transmit and vertical receive, and  

VH - for vertical transmit and horizontal receive.  
  
The first two polarization combinations are referred to as "like-polarized" because the transmit 
and receive polarizations 
are the same
. The last two combinations are referred to as "cross-
polarized" because the transmit and receive polarizations 
are orthogonal
 to one another. 
Radar systems can have one, two or all four of these transmit/receive polarization 
combinations. Examples include the following types of radar systems: 
 
 
 
Note that "quadrature polarization" and "fully polarimetric" can be used as synonyms for 
"polarimetric". The 
relative phase
 between channels is measured in a polarimetric radar, and 
is a very important component of the measurement. In the other radar types, relative phase 
may or may not be measured. The alternating polarization mode has been introduced on 
ENVISAT - relative phase is measured but the important HH-VV phase is not meaningful 
because of the time lapse between the measurements.  
These C-band images of agricultural fields demonstrate the dependence of the radar response 
on polarization. The top two images are like-polarized (HH on left, VV on right), and the lower 
left image is cross-polarized (HV). The lower right image is the result of displaying these three 
images as a colour composite (in this case, HH - red, VV - green, and HV - blue). 
Both wavelength and polarization affect how a radar system "sees" the elements in the scene. 
Therefore, radar imagery collected using different polarization and wavelength combinations 
may provide different and complementary information. Furthermore, when three polarizations 
are combined in a colour composite, the information is presented in a way that an image 
interpreter can infer more information of the surface characteristics. 
  
single polarized
- HH or VV (or possibly HV or VH)
dual polarized
- HH and HV, VV and VH, or HH and VV
alternating polarization
- HH and HV, alternating with VV and VH
polarimetric
- HH, VV, HV, and VH
Page 118Section 3.8 Radar Polarimetry
Canada Centre for Remote Sensing

    
 
    
 
Illustration of how different polarizations (HH, VV, HV & colour composite) bring out different 
features in an agricultural scene  
  
Polarimetric Information 
The primary description of how a radar target or surface feature scatters EM energy is given by 
the scattering matrix. From the scattering matrix, other forms of polarimetric information can be 
derived, such as synthesized images and polarization signatures. 
Polarization Synthesis 
A polarimetric radar can be used to determine the target response or scattering matrix using 
two orthogonal polarizations, typically linear H and linear V on each of transmit and receive. If a 
scattering matrix is known, the response of the target to 
any combination
 of incident and 
received polarizations can be computed. This is referred to as 
polarization synthesis
, and 
illustrates the power and flexibility of a fully polarimetric radar. 
Through polarization synthesis, an image can be created to improve the detectability of 
Page 119Section 3.8 Radar Polarimetry
Canada Centre for Remote Sensing

selected features. An example is the detection of ships in ocean images. To find the best 
transmit-receive polarization combination to use, the polarization signature of a typical ship and 
that of the ocean is calculated for a number of polarizations. Then the ratio of the ship to ocean 
backscatter is computed for each polarization. The transmit-receive polarization combination 
that maximises the ratio of backscatter strength is then used to improve the detectability of 
ships. This procedure is called "polarimetric contrast enhancement" or the use of a 
"polarimetric matched filter".  
Polarization Signatures 
Because the incident and scattered waves can take on so many different polarizations, and the 
scattering matrix consists of four complex numbers, it is helpful to simplify the interpretation of 
the scattering behaviour using three-dimensional plots. The "polarization signature" of the 
target provides a convenient way of visualising a target's scattering properties. The signatures 
are also called "polarization response plots". 
An incident electromagnetic wave can be selected to have an electric field with ellipticity 
between -45º and +45º, and an orientation between 0 and 180º. These variables are used as 
the x- and y-axes of a 3-D plot portraying the polarization signature. For each of these possible 
incident polarizations, the strength of the backscatter can be computed for the 
same
 
polarization on transmit and receive (the co-polarized signature) and for 
orthogonal
 
polarizations on transmit and receive (the cross-polarized signature). The strength is displayed 
on the z-axis of the signatures. 
  
Polarization signatures of a large conducting sphere. 
P = Power, O = Orientation (degrees), E = Ellipticity (degrees) 
This figure shows the polarization signatures of the most simple of all targets - a large 
conducting sphere or a trihedral corner reflector. The wave is backscattered with the same 
polarization, except for a change of sign of the ellipticity (or in the case of linear polarization, a 
Co-polarized signatureCross-polarized signature
 
 
Page 120Section 3.8 Radar Polarimetry
Canada Centre for Remote Sensing

change of the phase angle between Eh and Ev of 180o). The sign changes once for every 
reflection - the sphere represents a single reflection, and the trihedral gives three reflections, so 
each behaves as an "odd-bounce" reflector. 
For more complicated targets, the polarization signature takes on different shapes. Two 
interesting signatures come from a dihedral corner reflector and Bragg scattering from the sea 
surface. In the case of the dihedral reflector, the co-pol signature has a double peak, 
characteristic of "even-bounce" reflectors. In the case of Bragg scattering, the response is 
similar to the single-bounce sphere, except that the backscatter of the vertical polarization is 
higher than that of the horizontal polarization. 
Data Calibration 
One critical requirement of polarimetric radar systems is the need for calibration. This is 
because much of the information lies in the ratios of amplitudes and the differences in phase 
angle between the four transmit-receive polarization combinations. If the calibration is not 
sufficiently accurate, the scattering mechanisms will be misinterpreted and the advantages of 
using polarization will not be realised. 
Calibration is achieved by a combination of radar system design and data analysis. Imagine the 
response to a trihedral corner reflector. Its ideal response is only obtained if the four channels 
of the radar system all have the same gain, system-dependent phase differences between 
channels are absent, and there is no energy leakage from one channel to another. 
In terms of the radar system design, the channel gains and phases should be as carefully 
matched as possible. In the case of the phase balance, this means that the signal path lengths 
should be effectively the same in all channels. Calibration signals are often built into the design 
to help verify these channel balances. 
In terms of data analysis, channel balances, cross-talk and noise effects can be measured and 
corrected by analysing the received data. In addition to analysing the response of internal 
calibration signals, the signals from known targets such as corner reflectors, active 
transponders, and uniform clutter can be used to calibrate some of the parameters. 
  
Polarimetric Applications 
Synthetic Aperture Radar polarimetry has been limited to a number of experimental airborne 
SAR systems and the SIR-C (shuttle) mission. With these data, researchers have studied a 
number of applications, and have shown that the interpretation of a number of features in a 
scene is facilitated when the radar is operated in polarimetric mode. The launch of 
RADARSAT-2 will make polarimetric data available on an operational basis, and uses of such 
data will become more routine and more sophisticated. 
Some applications in which polarimetric SAR has already proved useful include: 
Page 121Section 3.8 Radar Polarimetry
Canada Centre for Remote Sensing


Agriculture: for crop type identification, crop condition monitoring, soil moisture 
measurement, and soil tillage and crop residue identification;  

Forestry: for clearcuts and linear features mapping, biomass estimation, species 
identification and fire scar mapping;  

Geology: for geological mapping;  

Hydrology: for monitoring wetlands and snow cover;  

Oceanography: for sea ice identification, coastal windfield measurement, and wave slope 
measurement;  
Shipping: for ship detection and classification;  

Coastal Zone: for shoreline detection, substrate mapping, slick detection and general 
vegetation mapping.  
  
Page 122Section 3.8 Radar Polarimetry
Canada Centre for Remote Sensing

3.9 Airborne versus Spaceborne Radars 
Like other remote sensing systems, an imaging radar sensor may be carried on either an 
airborne or spaceborne platform. Depending on the use of the prospective imagery, there are 
trade-offs between the two types of platforms. Regardless of the platform used, a significant 
advantage of using a Synthetic Aperture Radar (SAR) is that the spatial resolution is 
independent of platform altitude. Thus, fine resolution can be achieved from both airborne and 
spaceborne platforms. 
 
Although spatial resolution is independent of altitude, viewing geometry and swath coverage 
can be greatly affected by altitude variations. At aircraft operating altitudes, an airborne radar 
must image over a wide range of incidence angles, perhaps as much as 60 or 70 degrees, in 
order to achieve relatively wide swaths (let's say 50 to 70 km). As we have learned in the 
preceding sections, incidence angle (or look angle) has a significant effect on the backscatter 
from surface features and on their appearance on an image. Image characteristics such as 
foreshortening, layover, and shadowing will be subject to wide variations, across a large 
incidence angle range. Spaceborne radars are able to avoid some of these imaging geometry 
problems since they operate at altitudes up to one hundred times higher than airborne radars. 
At altitudes of several hundred kilometres, spaceborne radars can image comparable swath 
widths, but over a much narrower range of incidence angles, typically ranging from five to 15 
degrees. This provides for more uniform illumination and reduces undesirable imaging 
variations across the swath due to viewing geometry. 
Page 123Section 3.9 Airborne versus Spaceborne Radars
Canada Centre for Remote Sensing

 
Although airborne radar systems may be more susceptible to imaging geometry problems, 
they are flexible in their capability to collect data from different look angles and look directions. 
By optimizing the geometry for the particular terrain being imaged, or by acquiring imagery 
from more than one look direction, some of these effects may be reduced. Additionally, an 
airborne radar is able to collect data anywhere and at any time (as long as weather and flying 
conditions are acceptable!). A spaceborne radar does not have this degree of flexibility, as its 
viewing geometry and data acquisition schedule is controlled by the pattern of its orbit. 
However, satellite radars do have the advantage of being able to collect imagery more quickly 
over a larger area than an airborne radar, and provide consistent viewing geometry. The 
frequency of coverage may not be as often as that possible with an airborne platform, but 
depending on the orbit parameters, the viewing geometry flexibility, and the geographic area 
of interest, a spaceborne radar may have a revisit period as short as one day. 
As with any aircraft, an airborne radar will be susceptible to variations in velocity and other 
motions of the aircraft as well as to environmental (weather) conditions. In order to avoid 
image artifacts or geometric positioning errors due to random variations in the motion of the 
aircraft, the radar system must use sophisticated navigation/positioning equipment and 
advanced image processing to compensate for these variations. Generally, this will be able to 
correct for all but the most severe variations in motion, such as significant air turbulence. 
Spaceborne radars are not affected by motion of this type. Indeed, the geometry of their orbits 
is usually very stable and their positions can be accurately calculated. However, geometric 
correction of imagery from spaceborne platforms must take into account other factors, such as 
the rotation and curvature of the Earth, to achieve proper geometric positioning of features on 
the surface. 
Page 124Section 3.9 Airborne versus Spaceborne Radars
Canada Centre for Remote Sensing

3.10 Airborne and Spaceborne Radar Systems 
In order to more clearly illustrate the differences between airborne and spaceborne radars, we 
will briefly outline a few of the representative systems of each type, starting with airborne 
systems. 
 
The 
Convair-580 C/X SAR
 system developed and operated by the Canada Centre for 
Remote Sensing was a workhorse for experimental research into advanced SAR applications 
in Canada and around the world, particularly in preparation for satellite-borne SARs. The 
system was transferred to Environment Canada in 1996 for use in oil spill research and other 
environmental applications. This system operates at two radar bands, C- (5.66 cm) and X- 
(3.24 cm). Cross-polarization data can be recorded simultaneously for both the C- and X-band 
channels, and the C-band system can be operated as a fully polarimetric radar. Imagery can 
be acquired at three different imaging geometries (nadir, narrow and wide swath modes) over 
a wide range of incidence angles (five degrees to almost 90 degrees). In addition to being a 
fully calibratable system for quantitative measurements, the system has a second antenna 
mounted on the aircraft fuselage to allow the C-band system to be operated as an 
interferometric radar. 
The 
Sea Ice and Terrain Assessment (STAR)
 
systems operated by Intera Technologies Limited of 
Calgary, Alberta, Canada, (later Intermap 
Technologies ) were among the first SAR systems 
used commercially around the world. Both STAR-1 
and STAR-2 operate at X-band (3.2 cm) with HH 
polarization in two different resolution modes. The 
swath coverage varies from 19 to 50 km, and the 
resolution from 5 to 18 m. They were primarily 
designed for monitoring sea ice (one of the key 
applications for radar, in Canada) and for terrain 
analysis. Radar's all-weather, day or night imaging capabilities are well-suited to monitoring 
ice in Canada's northern and coastal waters. STAR-1 was also the first SAR system to use 
on-board data processing and to offer real-time downlinking of data to surface stations. 
  
  
Page 125Section 3.10 Airborne and Spaceborne Radar Systems
Canada Centre for Remote Sensing

  
The United States National Aeronautics 
and Space Administration (NASA) has 
been at the forefront of multi-frequency, 
multi-polarization synthetic aperture radar 
research for many years. The Jet 
Propulsion Laboratory (JPL) in California 
has operated various advanced systems 
on contract for NASA. The 
AirSAR
 
system is a C-, L-, and P-band advanced polarimetric SAR which can collect data for each of 
these bands at all possible combinations of horizontal and vertical transmit and receive 
polarizations (i.e. HH, HV, VH, and VV). Data from the AirSAR system can be fully calibrated 
to allow extraction of quantitative measurements of radar backscatter. Spatial resolution of the 
AirSAR system is on the order of 12 metres in both range and azimuth. Incidence angle 
ranges from zero degrees at nadir to about 70 degrees at the far range. This capability to 
collect multi-frequency, multi-polarization data over such a diverse range of incidence angles 
allows a wide variety of specialized research experiments to be carried out. 
With the advances and success of airborne imaging radar, satellite radars 
were the next logical step to complement the optical satellite sensors in 
operation. 
SEASAT
, launched in 1978, was the first civilian remote sensing 
satellite to carry a spaceborne SAR sensor. The SAR operated at L-band 
(23.5 cm) with HH polarization. The viewing geometry was fixed between 
nine and 15 degrees with a swath width of 100 km and a spatial resolution of 
25 metres. This steep viewing geometry was designed primarily for 
observations of ocean and sea ice, but a great deal of imagery was also collected over land 
areas. However, the small incidence angles amplified foreshortening and layover effects over 
terrain with high relief, limiting its utility in these areas. Although the satellite was only 
operational for three months, it demonstrated the wealth of information (and the large volumes 
of data!) possible from a spaceborne radar. 
With the success of the short-lived SEASAT mission, and 
impetus provided from positive results with several airborne 
SARs, the European Space Agency (ESA) launched ERS-1 
in July of 1991. 
ERS-1
 carried on-board a radar altimeter, an 
infrared radiometer and microwave sounder, and a C-band 
(5.66 cm), active microwave instrument. This is a flexible 
instrument which can be operated as a scatterometer to 
measure reflectivity of the ocean surface, as well as ocean 
surface wind speed and direction. It can also operate as a 
synthetic aperture radar, collecting imagery over a 100 km 
swath over an incidence angle range of 20 to 26 degrees, at 
a resolution of approximately 30 metres. Polarization is 
Page 126Section 3.10 Airborne and Spaceborne Radar Systems
Canada Centre for Remote Sensing

vertical transmit and vertical receive (VV) which, combined 
with the fairly steep viewing angles, make ERS-1 particularly sensitive to surface roughness. 
The revisit period (or repeat cycle) of ERS-1 can be varied by adjusting the orbit, and has 
ranged from three to 168 days, depending on the mode of operation. Generally, the repeat 
cycle is about 35 days. A second satellite, ERS-2, was launched in April of 1995 and carries 
the same active microwave sensor as ERS-1. Designed primarily for ocean monitoring 
applications and research, ERS-1 provided the worldwide remote sensing community with the 
first wide-spread access to spaceborne SAR data. Imagery from both satellites has been used 
in a wide range of applications, over both ocean and land environments. Like SEASAT, the 
steep viewing angles limit their utility for some land applications due to geometry effects. 
The National Space Development Agency of Japan 
(NASDA), launched the 
JERS-1
 satellite in February of 
1992. In addition to carrying two optical sensors, JERS-
1 has an L-band (23.5 cm) SAR operating at HH 
polarization. The swath width is approximately 75 km 
and spatial resolution is approximately 18 metres in 
both range and azimuth. The imaging geometry of 
JERS-1 is slightly shallower than either SEASAT or the 
ERS satellites, with the incidence angle at the middle of 
the swath being 35 degrees. Thus, JERS-1 images are 
slightly less susceptible to geometry and terrain effects. 
The longer L-band wavelength of JERS-1 allows some penetration of the radar energy 
through vegetation and other surface types. 
Spaceborne SAR remote sensing took a giant leap forward 
with the launch of Canada's 
RADARSAT
 satellite on Nov. 
4, 1995. The RADARSAT project, led by the Canadian 
Space Agency (CSA), was built on the development of 
remote sensing technologies and applications work carried 
out by the Canada Centre for Remote Sensing (CCRS) 
since the 1970s. RADARSAT carries an advanced C-band (5.6 cm), HH-polarized SAR with a 
steerable radar beam allowing 
various imaging options
 over a 500 km range. Imaging 
swaths can be varied from 35 to 500 km in width, with resolutions from 10 to 100 metres. 
Viewing geometry is also flexible, with incidence angles ranging from less than 20 degrees to 
more than 50 degrees. Although the satellite's orbit repeat cycle is 24 days, the flexibility of 
the steerable radar beam gives RADARSAT the ability to image regions much more frequently 
and to address specific geographic requests for data acquisition. RADARSAT's orbit is 
optimized for frequent coverage of mid-latitude to polar regions, and is able to provide daily 
images of the entire Arctic region as well as view any part of Canada within three days. Even 
at equatorial latitudes, complete coverage can be obtained within six days using the widest 
swath of 500 km. 
Page 127Section 3.10 Airborne and Spaceborne Radar Systems
Canada Centre for Remote Sensing

 
Imaging options over a 500 km range 
Page 128Section 3.10 Airborne and Spaceborne Radar Systems
Canada Centre for Remote Sensing

3. Endnotes
 
 
3.11 Endnotes 
You have just completed Chapter 3 - Microwave Sensing. You can continue to Chapter 4 - 
Image Interpretation and Analysis or first browse the CCRS Web site for other articles related 
to microwave remote sensing. 
You can get more information about remote sensing radars by checking out an the overview
1
 
or the more detailed technical specifications
2
 of Canada's own microwave satellite: 
RADARSAT. You can even see photos
3
 of the satellite being built, watch a video of the 
launch and see the very first image!
4
As well, learn how microwave remote sensing is used for 
various applications such as agriculture
5
, forestry
6
, and geology
7
, and see international 
applications
8
 of RADARSAT imagery.
 
Learn about a new way of reducing speckle
9
 in a radar image that was developed by 
scientists at CCRS in co-operation with scientists in France. As well, learn how a digital 
elevation model can be used to correct topographic distortions
10
 in radar images or how a 
radar image is calibrated using precision transponders
11
and see the mysterious movement of 
the transponder
12
 when shown in an image!
 
A training manual
13
 has been prepared on how radar data can be used to obtain stereo 
images. Interferometry
14
 is another fascinating technique studied extensively at CCRS. It has 
been tried with both airborne and satellite data and applied to detecting changes in the land
15
, 
glacier movement
16
 and ocean studies
17
.
 
Our Remote Sensing Glossary has extensive terminology and explanations of microwave-
related concepts which can be accessed through individual term searches
18
 or by selecting 
the radar" category.  
1
http://www.ccrs.nrcan.gc.ca/ccrs/data/satsens/radarsat/specs/rsatoview_e.html
 
2
http://www.ccrs.nrcan.gc.ca/ccrs/data/satsens/radarsat/specs/radspec_e.html
 
3
http://www.ccrs.nrcan.gc.ca/ccrs/data/satsens/radarsat/photos/radpix_e.html
 
4
http://www.ccrs.nrcan.gc.ca/ccrs/data/satsens/radarsat/photos/radpix_e.html
 
5
http://www.ccrs.nrcan.gc.ca/ccrs/data/satsens/airborne/sarbro/sbagri_e.html
 
6
http://www.ccrs.nrcan.gc.ca/ccrs/data/satsens/airborne/sarbro/sbfort_e.html
 
Page 129Section 3.11 Endnotes
Canada Centre for Remote Sensing

7
http://www.ccrs.nrcan.gc.ca/ccrs/data/satsens/airborne/sarbro/sbgeol_e.html
 
8
http://www.ccrs.nrcan.gc.ca/ccrs/data/satsens/airborne/sarbro/sbgbsar_e.html
 
9
http://www.ccrs.nrcan.gc.ca/ccrs/com/rsnewsltr/2303/2303ap1_e.html
 
10
http://www.ccrs.nrcan.gc.ca/ccrs/com/rsnewsltr/2401/2401ap3_e.html
 
11
http://www.ccrs.nrcan.gc.ca/ccrs/data/satsens/radarsat/trans/transpo_e.html
 
12
http://www.ccrs.nrcan.gc.ca/ccrs/rd/ana/transpond/rpt_e.html
 
13
http://www.ccrs.nrcan.gc.ca/ccrs/learn/tutorials/stereosc/chap1/chapter1_1_e.html
 
14
http://www.ccrs.nrcan.gc.ca/ccrs/data/satsens/airborne/sarbro/sbinter_e.html
 
15
http://www.ccrs.nrcan.gc.ca/ccrs/com/rsnewsltr/2301/2301rn2_e.html
 
16
http://www.ccrs.nrcan.gc.ca/ccrs/data/satsens/radarsat/images/ant/rant01_e.html
 
17
http://www.ccrs.nrcan.gc.ca/ccrs/rd/ana/split/insar_e.html
 
18
http://www.ccrs.nrcan.gc.ca/ccrs/learn/terms/glossary/glossary_e.html
 
Page 130Section 3.11 Endnotes
Canada Centre for Remote Sensing

3. Did You Know?
 
 
3.1 Did You Know? 
 
'S' band magnetrons are typically used for microwave oven power sources. They operate in 
the range of 2-4 GHz. The corresponding wavelengths are 15 cm to 7.5 cm. The screening 
mesh used on microwave oven doors is sufficiently fine (much smaller than 7.5 cm) that it 
behaves as a continuous, thin, metal sheet, preventing the escape of the radar energy, yet 
allowing good visibility of the interior (using visible wavelengths, which are much shorter yet). 
Page 131Section 3 Did you know?
Canada Centre for Remote Sensing

3.2 Did You Know? 
"....Just what do those numbers mean?!"  
 
Typical output products (e.g. RADARSAT imagery) have used 8-bit or 16-bit data formats 
(digital numbers) for data storage. In order to obtain the original physically meaningful 
backscatter values ( sigma nought, beta nought) of calibrated radar products, it is 
necessary to reverse the final steps in the SAR processing chain. For RADARSAT imagery, 
this must include the squaring of the digital values and the application of a lookup table (which 
can have range dependent values). Thus, as you can see, the relationships among the digital 
numbers in the imagery are not that simple! 
Page 132Section 3 Did you know?
Canada Centre for Remote Sensing
3.4 Did You Know? 
"...look to the left, look to the right, stand up, sit down..."  
...although a radar's side-looking geometry can 
result in several image effects such as 
foreshortening, layover, and shadow, this geometry 
is exactly what makes radar so useful for terrain 
analysis. These effects, if not too severe, actually 
enhance the visual appearance of relief and terrain 
structure, making radar imagery excellent for 
applications such as topographic mapping and 
identifying geologic structure.  

3.5 Did You Know? 
"...rivers in the Sahara desert?...you're crazy!..." 
 
... that an L-band radar (23.5 cm wavelength) imaging from the orbiting space shuttle was 
able to discover ancient river channels beneath the Sahara Desert in Northern Africa. 
Because of the long wavelength and the extreme dryness of the sand, the radar was able to 
penetrate several metres below the desert surface to reveal the old river beds during ancient 
times when this area was not so dry. 
Page 133Section 3.Did you know?
Canada Centre for Remote Sensing
3.7 Did You Know? 
"...we've picked up an unidentified moving object on the radar, sir..." 
 
... besides being able to determine terrain height using interferometry, it is also possible to 
measure the velocity of targets moving towards or away from the radar sensor, using only one 
pass over the target. This is done by recording the returns from two antennas mounted on the 
platform, separated by a short distance in the along-track or flight direction. The phase 
differences between the returns at each antenna are used to derive the speed of motion of 
targets in the illuminated scene. Potential applications include determination of sea-ice drift, 
ocean currents, and ocean wave parameters. 

3.8 Did You Know? 
That many other polarizations can be transmitted (or received) if a radar system can transmit 
or receive the H and V channels simultaneously. For example, if a radar system transmits an 
H and a V signal simultaneously, and the V signal is 90o out of phase with respect to the H 
signal, the resulting transmitted wave will have circular polarization. 
Page 134Section 3 Did you know?
Canada Centre for Remote Sensing

3. Whiz Quiz and Answers
 
 
Page 135Section 3 Whiz Quiz and Answers
Canada Centre for Remote Sensing
3.2 Answers 
1. Much the same as with optical sensors that have different bands or channels of data, multi-
wavelength and multi-frequency radar images can provide complementary information. Radar 
data collected at different wavelengths is analogous to the different bands of data in optical 
remote sensing. Similarly, the various polarizations may also be considered as different bands 
of information. Depending on the wavelength and polarization of the radar energy, it will 
interact differently with features on the surface. As with multi-band optical data, we can 
combine these different "channels" of data together to produce colour images which may 
highlight subtle variations in features as a function of wavelength or polarization. 
2. A scatterometer is used to precisely measure the intensity of backscatter reflected from an 
object or surface. By accurately characterizing (i.e. measuring) the intensity of energy 
reflected from a variety of objects or surface types, these measurements can be used to 
generate typical 
backscatter signatures
, similar to the concept of spectral signatures with 
optical data. These measurements can be used as references for calibrating imagery from an 
imaging radar sensor so that more accurate comparisons can be made of the response 
between different features. 
3.2 Whiz Quiz 
How could we use radar images of different 
wavelengths and/or polarizations to extract 
more information about a particular scene? 
Think back to Chapter 1, the general 
characteristics of remote sensing images, 
and Chapter 2, interpretation of data from 
optical sensors. 
Explain how data from a non-imaging 
scatterometer could be used to extract more 
accurate information from an imaging radar. 

3.3 Whiz Quiz 
 
Explain why the use of a synthetic aperture radar (SAR) is the only practical option for radar 
remote sensing from space.  
Page 136Section 3 Whiz Quiz and Answers
Canada Centre for Remote Sensing
3.3 Answer 
The high altitudes of spaceborne platforms (i.e. hundreds of kilometres) preclude the use of 
real aperture radar (RAR) because the azimuth resolution, which is a function of the range 
distance, would be too coarse to be useful. In a spaceborne RAR, the only way to achieve fine 
resolution would be to have a very, very narrow beam which would require an extremely long 
physical antenna. However, an antenna of several kilometres in length is physically 
impossible to build, let alone fly on a spacecraft. Therefore, we need to use synthetic aperture 
radar to synthesize a long antenna to achieve fine azimuth resolution.  

3.5 Whiz Quiz 
 
If an agricultural area, with crops such as wheat and corn, became flooded, what do you think 
these areas might look like on a radar image? Explain the reasons for your answers based on 
your knowledge of how radar energy interacts with a target.  
Page 137Section 3 Whiz Quiz and Answers
3.5 Answer 
Generally, image brightness increases with increased moisture content. However, in the case 
of flooding, the surface is completely saturated and results in standing water. Areas where the 
water has risen above the height of the crops will likely appear dark in tone, as the water acts 
as a specular reflector bouncing the energy away from the radar sensor. Flooded areas would 
generally be distinguishable by a darker tone from the surrounding agricultural crops which 
are not flooded and would scatter more diffusely. However, if the wheat and corn stalks are 
not completely submersed, then these areas may actually appear brighter on the image. In 
this situation, specular reflections off the water which then bounce and hit the wheat and corn 
stalks may act like corner reflectors and return most of the incoming energy back to the radar. 
This would result in these areas appearing quite bright on the image. Thus, the degree of 
flooding and how much the crops are submersed will impact the appearance of the image. 

3.6 Whiz Quiz 
 
Outline the basic steps you might want to perform on a radar image before carrying out any 
visual interpretation. 
Page 138Section 3 Whiz Quiz and Answers
Canada Centre for Remote Sensing
3.6 Answer 
Before visually interpreting and analyzing a radar image, there are several procedures which 
would be useful to perform, including: 

Converting the slant-range image to the ground-range plane display. This will remove 
the effects of slant-range scale distortion so that features appear in their proper relative 
size across the entire swath and distances on the ground are represented correctly.  

Correcting for antenna pattern. This will provide a uniform average brightness of image 
tone making visual interpretation and comparison of feature responses at different 
ranges easier.  

Reducing the effects of speckle to some degree. Unless there is a need for detailed 
analysis of very small features (i.e. less than a few pixels in size), speckle reduction will 
reduce the "grainy" appearance of the image and make general image interpretation 
simpler.  

Scaling of the dynamic range in the image to a maximum of 8-bits (256 grey levels). 
Because of the limitations of most desktop computer systems, as well as of the human 
eye in discriminating brightness levels, any more grey levels would not be useful.  

3.8 Whiz Quiz 
 
Can sound waves be polarized? 
Page 139Section 3 Whiz Quiz and Answers
Canada Centre for Remote Sensing
3.8 Answer 
Polarization is a phenomenon which is characteristic 
of those waves that vibrate in a direction 
perpendicular to their direction of propagation. While 
electromagnetic waves vibrate up/down, side to side 
and in intermediate directions, sound waves vibrate in 
the same direction as their direction of travel, so 
cannot be polarized. 
 

3.10 Whiz Quiz 
 
A particular object or feature may not have the same appearance (i.e. backscatter response) 
on all radar images, particularly airborne versus spaceborne radars. List some of the factors 
which might account for this.  
Page 140Section 3 Whiz Quiz and Answers
Canada Centre for Remote Sensing
3.10 Answer 
The backscatter response, and thus the appearance of an object or feature on a radar image, 
is dependent on several things. 

Different radar wavelengths or frequencies will result in variations due to their differing 
sensitivities to surface roughness, which controls the amount of energy backscattered.  

Using different polarizations will also affect how the energy interacts with a target and 
the subsequent energy that is reflected back to the radar.  

Variations in viewing geometry, including look/incidence angle, the look direction and 
orientation of features to the radar, and the local incidence angle at which the radar 
energy strikes the surface, play a major role in the amount of energy reflected. 
Generally, these differences can be quite significant between airborne and spaceborne 
platforms.  

Changes in the moisture content of an object or feature will also change the amount of 
backscatter.  

4. Image Analysis
 
 
4.1 Introduction 
 
In order to take advantage of and make good use of remote sensing data, we must be able to 
extract meaningful information from the imagery. This brings us to the topic of discussion in 
this chapter - 
interpretation and analysis
 - the sixth element of the remote sensing process 
which we defined in Chapter 1. Interpretation and analysis of remote sensing imagery involves 
the identification and/or measurement of various targets in an image in order to extract useful 
information about them. Targets in remote sensing images may be any feature or object which 
can be observed in an image, and have the following characteristics: 

Targets may be a point, line, or area feature. This means that they can have any form, 
from a bus in a parking lot or plane on a runway, to a bridge or roadway, to a large 
expanse of water or a field.  
The target must be distinguishable; it must contrast with other features around it in the 
image.  
  
Page 141Section 4.1 Introduction
Canada Centre for Remote Sensing

 
Much interpretation and identification of targets in remote sensing imagery is performed 
manually or visually, i.e. by a human interpreter. In many cases this is done using imagery 
displayed in a pictorial or photograph-type format, independent of what type of sensor was 
used to collect the data and how the data were collected. In this case we refer to the data as 
being in 
analog
 format. As we discussed in Chapter 1, remote sensing images can also be 
represented in a computer as arrays of pixels, with 
each pixel corresponding to a digital number, 
representing the brightness level of that pixel in the 
image. In this case, the data are in a 
digital
 format. 
Visual interpretation may also be performed by 
examining digital imagery displayed on a computer 
screen. Both analogue and digital imagery can be 
displayed as black and white (also called 
monochrome) images, or as colour images (refer 
back to Chapter 1, Section 1.7) by combining different 
channels or bands representing different 
wavelengths. 
When remote sensing data are available in digital format, 
digital processing and analysis
 
may be performed using a computer. Digital processing may be used to enhance data as a 
prelude to visual interpretation. Digital processing and analysis may also be carried out to 
automatically identify targets and extract information completely without manual intervention 
by a human interpreter. However, rarely is digital processing and analysis carried out as a 
complete replacement for manual interpretation. Often, it is done to supplement and assist the 
human analyst. 
  
Manual interpretation and analysis dates back to the early beginnings of remote sensing for 
Page 142Section 4.1 Introduction
Canada Centre for Remote Sensing

air photo interpretation. Digital processing and analysis is more recent with the advent of 
digital recording of remote sensing data and the development of computers. Both manual and 
digital techniques for interpretation of remote sensing data have their respective advantages 
and disadvantages. Generally, manual interpretation requires little, if any, specialized 
equipment, while digital analysis requires specialized, and often expensive, equipment. 
Manual interpretation is often limited to analyzing only a single channel of data or a single 
image at a time due to the difficulty in performing visual interpretation with multiple images. 
The computer environment is more amenable to handling complex images of several or many 
channels or from several dates. In this sense, digital analysis is useful for simultaneous 
analysis of many spectral bands and can process large data sets much faster than a human 
interpreter. Manual interpretation is a subjective process, meaning that the results will vary 
with different interpreters. Digital analysis is based on the manipulation of digital numbers in a 
computer and is thus more objective, generally resulting in more consistent results. However, 
determining the validity and accuracy of the results from digital processing can be difficult. 
It is important to reiterate that visual and digital analyses of remote sensing imagery are not 
mutually exclusive. Both methods have their merits. In most cases, a mix of both methods is 
usually employed when analyzing imagery. In fact, the ultimate decision of the utility and 
relevance of the information extracted at the end of the analysis process, still must be made 
by humans. 
Page 143Section 4.1 Introduction
Canada Centre for Remote Sensing

4.2 Elements of Visual Interpretation 
As we noted in the previous section, analysis of remote sensing imagery involves the 
identification of various targets in an image, and those targets may be environmental or 
artificial features which consist of points, lines, or areas. Targets may be defined in terms of 
the way they reflect or emit radiation. This radiation is measured and recorded by a sensor, 
and ultimately is depicted as an image product such as an air photo or a satellite image. 
What makes interpretation of imagery more difficult than the everyday visual interpretation of 
our surroundings? For one, we lose our sense of depth when viewing a two-dimensional 
image, unless we can view it 
stereoscopically
 so as to simulate the third dimension of 
height. Indeed, interpretation benefits greatly in many applications when images are viewed in 
stereo, as visualization (and therefore, recognition) of targets is enhanced dramatically. 
Viewing objects from directly above also provides a very different perspective than what we 
are familiar with. Combining an unfamiliar perspective with a very different scale and lack of 
recognizable detail can make even the most familiar object unrecognizable in an image. 
Finally, we are used to seeing only the visible wavelengths, and the imaging of wavelengths 
outside of this window is more difficult for us to comprehend. 
Recognizing targets is the key to interpretation and information extraction. Observing the 
differences between targets and their backgrounds involves comparing different targets based 
on any, or all, of the visual elements of 
tone, shape, size, pattern, texture, shadow, and 
association
. Visual interpretation using these elements is often a part of our daily lives, 
whether we are conscious of it or not. Examining satellite images on the weather report, or 
following high speed chases by views from a helicopter are all familiar examples of visual 
image interpretation. Identifying targets in remotely sensed images based on these visual 
elements allows us to further interpret and analyze. The nature of each of these interpretation 
elements is described below, along with an image example of each. 
 
Tone
 refers to the relative brightness or colour of objects in an image. Generally, tone is the 
fundamental element for distinguishing between different targets or features. Variations in 
Page 144Section 4.2 Elements of Visual Interpretation
Canada Centre for Remote Sensing

tone also allows the elements of shape, texture, and pattern of objects to be distinguished. 
 
Shape
 refers to the general form, structure, or outline of individual objects. Shape can be a 
very distinctive clue for interpretation. Straight edge shapes typically represent urban or 
agricultural (field) targets, while natural features, such as forest edges, are generally more 
irregular in shape, except where man has created a road or clear cuts. Farm or crop land 
irrigated by rotating sprinkler systems would appear as circular shapes. 
 
Size
 of objects in an image is a function of scale. It is important to assess the size of a target 
relative to other objects in a scene, as well as the absolute size, to aid in the interpretation of 
that target. A quick approximation of target size can direct interpretation to an appropriate 
result more quickly. For example, if an interpreter had to distinguish zones of land use, and 
had identified an area with a number of buildings in it, large buildings such as factories or 
warehouses would suggest commercial property, whereas small buildings would indicate 
residential use. 
  
Page 145Section 4.2 Elements of Visual Interpretation
Canada Centre for Remote Sensing

  
  
Pattern
 refers to the spatial arrangement of visibly discernible objects. 
Typically an orderly repetition of similar tones and textures will produce a 
distinctive and ultimately recognizable pattern. Orchards with evenly 
spaced trees, and urban streets with regularly spaced houses are good 
examples of pattern. 
Texture
 refers to the arrangement and frequency of 
tonal variation in particular areas of an image. Rough textures would 
consist of a mottled tone where the grey levels change abruptly in a small 
area, whereas smooth textures would have very little tonal variation. 
Smooth textures are most often the result of uniform, even surfaces, such 
as fields, asphalt, or grasslands. A target with a rough surface and 
irregular structure, such as a forest canopy, results in a rough textured 
appearance. Texture is one of the most important elements for distinguishing features in radar 
imagery. 
Shadow
 is also helpful in interpretation as it may provide an idea of the 
profile and relative height of a target or targets which may make 
identification easier. However, shadows can also reduce or eliminate 
interpretation in their area of influence, since targets within shadows are 
much less (or not at all) discernible from their surroundings. Shadow is 
also useful for enhancing or identifying topography and landforms, 
particularly in radar imagery. 
Association
 takes into account the relationship between other 
recognizable objects or features in proximity to the target of interest. The 
identification of features that one would expect to associate with other 
features may provide information to facilitate identification. In the 
example given above, commercial properties may be associated with 
proximity to major transportation routes, whereas residential areas would 
be associated with schools, playgrounds, and sports fields. In our 
example, a lake is associated with boats, a marina, and adjacent recreational land. 
Page 146Section 4.2 Elements of Visual Interpretation
Canada Centre for Remote Sensing

4.3 Digital Image Processing  
 
In today's world of advanced technology where most remote sensing data are recorded in 
digital format, virtually all image interpretation and analysis involves some element of digital 
processing. Digital image processing may involve numerous procedures including formatting 
and correcting of the data, digital enhancement to facilitate better visual interpretation, or even 
automated classification of targets and features entirely by computer. In order to process 
remote sensing imagery digitally, the data must be recorded and available in a digital form 
suitable for storage on a computer tape or disk. Obviously, the other requirement for digital 
image processing is a computer system, sometimes referred to as an 
image analysis 
system
, with the appropriate hardware and software to process the data. Several 
commercially available software systems have been developed specifically for remote sensing 
image processing and analysis. 
For discussion purposes, most of the common image processing functions available in image 
analysis systems can be categorized into the following four categories:  
Preprocessing  

Image Enhancement  
Image Transformation  

Image Classification and Analysis  
Preprocessing
 functions involve those operations that are normally required prior to the main 
data analysis and extraction of information, and are generally grouped 
as radiometric or 
geometric corrections
. Radiometric corrections include correcting the data for sensor 
irregularities and unwanted sensor or atmospheric noise, and converting the data so they 
accurately represent the reflected or emitted radiation measured by the sensor. Geometric 
corrections include correcting for geometric distortions due to sensor-Earth geometry 
variations, and conversion of the data to real world coordinates (e.g. latitude and longitude) on 
the Earth's surface. 
Page 147Section 4.3 Digital Image Processing
Canada Centre for Remote Sensing

  
The objective of the second group of image processing functions grouped under the term of 
image enhancement
, is solely to 
improve the appearance of the imagery
 to assist in visual 
interpretation and analysis. Examples of enhancement functions include contrast stretching to 
increase the tonal distinction between various features in a scene, and 
spatial filtering
 to 
enhance (or suppress) specific spatial patterns in an image. 
Image transformations
 are operations similar in concept to those for image enhancement. 
However, unlike image enhancement operations which are normally applied only to a single 
channel of data at a time, image transformations usually involve combined processing of data 
from multiple spectral bands. Arithmetic operations (i.e. subtraction, addition, multiplication, 
division) are performed to combine and transform the original bands into "new" images which 
better display or highlight certain features in the scene. We will look at some of these 
operations including various methods of 
spectral or band
 ratioing, and a procedure called 
principal components analysis
 which is used to more efficiently represent the information in 
multichannel imagery. 
 
Image classification and analysis
operations are used to digitally identify and classify pixels 
in the data. 
Classification
 is usually performed on multi-channel data sets (A) and this 
process assigns each pixel in an image to a particular class or theme (B) based on statistical 
characteristics of the pixel brightness values. There are a variety of approaches taken to 
perform digital classification. We will briefly describe the two generic approaches which are 
used most often, namely 
supervised
 and 
unsupervised
 classification. 
In the following sections we will describe each of these four categories of digital image 
processing functions in more detail. 
Page 148Section 4.3 Digital Image Processing
Canada Centre for Remote Sensing

4.4 Pre-processing 
Pre-processing operations, sometimes referred to as image restoration and rectification, are 
intended to correct for sensor- and platform-specific radiometric and geometric distortions of 
data. Radiometric corrections may be necessary due to variations in scene illumination and 
viewing geometry, atmospheric conditions, and sensor noise and response. Each of these will 
vary depending on the specific sensor and platform used to acquire the data and the 
conditions during data acquisition. Also, it may be desirable to convert and/or calibrate the 
data to known (absolute) radiation or reflectance units to facilitate comparison between data. 
 
Variations in illumination and viewing geometry between images (for optical sensors) can be 
corrected by modeling the geometric relationship and distance between the area of the 
Earth's surface imaged, the sun, and the sensor. This is often required so as to be able to 
more readily compare images collected by different sensors at different dates or times, or to 
mosaic multiple images from a single sensor
 while maintaining uniform illumination 
conditions from scene to scene. 
 
  
As we learned in Chapter 1, scattering of radiation occurs as it passes through and interacts 
with the atmosphere. This scattering may reduce, or attenuate, some of the energy 
illuminating the surface. In addition, the atmosphere will further attenuate the signal 
propagating from the target to the sensor. Various methods of atmospheric correction can be 
Page 149Section 4.4 Pre-processing
Canada Centre for Remote Sensing

applied ranging from detailed modeling of the atmospheric conditions during data acquisition, 
to simple calculations based solely on the image data. An example of the latter method is to 
examine the observed brightness values
 (digital numbers), in an area of shadow or for a 
very dark object (such as a large clear lake - A) and determine the minimum value (B). The 
correction is applied by subtracting the minimum observed value, determined for each specific 
band, from all pixel values in each respective band. Since scattering is wavelength dependent 
(Chapter 1), the minimum values will vary from band to band. This method is based on the 
assumption that the reflectance from these features, if the atmosphere is clear, should be very 
small, if not zero. If we observe values much greater than zero, then they are considered to 
have resulted from atmospheric scattering. 
Noise in an image may be due to irregularities or 
errors that occur in the sensor response and/or 
data recording and transmission. Common forms 
of noise include systematic 
striping
 or banding 
and 
dropped lines
. Both of these effects should 
be corrected before further enhancement or 
classification is performed. Striping was common 
in early Landsat MSS data due to variations and 
drift in the response over time of the six MSS 
detectors. The "drift" was different for each of the 
six 
detectors, 
causing the 
same 
brightness to be represented differently by each 
detector. The overall appearance was thus a 'striped' 
effect. The corrective process made a relative correction 
among the six sensors to bring their apparent values in 
line with each other. Dropped lines occur when there are 
systems errors which result in missing or defective data 
along a scan line. Dropped lines are normally 'corrected' 
by replacing the line with the pixel values in the line 
above or below, or with the average of the two. 
For many quantitative applications of remote sensing data, it is necessary to convert the 
digital numbers to measurements in units which represent the actual reflectance or emittance 
from the surface. This is done based on detailed knowledge of the sensor response and the 
way in which the analog signal (i.e. the reflected or emitted radiation) is converted to a digital 
number, called 
analog-to-digital
 (A-to-D) conversion. By solving this relationship in the 
reverse direction, the absolute radiance can be calculated for each pixel, so that comparisons 
can be accurately made over time and between different sensors. 
In section 2.10 in Chapter 2, we learned that all remote sensing imagery are inherently subject 
Page 150Section 4.4 Pre-processing
Canada Centre for Remote Sensing

to geometric distortions. These distortions may be due to several factors, including: the 
perspective of the sensor optics; the motion of the scanning system; the motion of the 
platform; the platform altitude, attitude, and velocity; the terrain relief; and, the curvature and 
rotation of the Earth. Geometric corrections are intended to compensate for these distortions 
so that the geometric representation of the imagery will be as close as possible to the real 
world. Many of these variations are 
systematic
, or 
predictable
 in nature and can be 
accounted for by accurate modeling of the sensor and platform motion and the geometric 
relationship of the platform with the Earth. Other 
unsystematic
, or 
random
, errors cannot be 
modeled and corrected in this way. Therefore, 
geometric registration
 of the imagery to a 
known ground coordinate system must be performed. 
  
 
The 
geometric registration process
 involves identifying the image coordinates (i.e. row, 
column) of several clearly discernible points, called 
ground control points
 (or 
GCPs
), in the 
distorted image (A - A1 to A4), and matching them to their true positions in ground 
coordinates (e.g. latitude, longitude). The true ground coordinates are typically measured from 
a map (B - B1 to B4), either in paper or digital format. This is 
image-to-map registration
. 
Once several well-distributed GCP pairs have been identified, the coordinate information is 
processed by the computer to determine the proper transformation equations to apply to the 
original (row and column) image coordinates to map them into their new ground coordinates. 
Geometric registration may also be performed by registering one (or more) images to another 
image, instead of to geographic coordinates. This is called image-to-image registration and is 
often done prior to performing various image transformation procedures, which will be 
discussed in section 4.6, or for multitemporal image comparison. 
Page 151Section 4.4 Pre-processing
Canada Centre for Remote Sensing

 
In order to actually geometrically correct the original distorted image, a procedure called 
resampling
 is used to determine the digital values to place in the new pixel locations of the 
corrected output image. The resampling process calculates the new pixel values from the 
original digital pixel values in the uncorrected image. There are three common methods for 
resampling: 
nearest neighbour, bilinear interpolation
, and 
cubic convolution
. 
Nearest 
neighbour
 resampling uses the digital value from the pixel in the original image which is 
nearest to the new pixel location in the corrected image. This is the simplest method and does 
not alter the original values, but may result in some pixel values being duplicated while others 
are lost. This method also tends to result in a disjointed or blocky image appearance. 
Bilinear interpolation
 resampling takes a 
weighted average of four pixels in the original 
image nearest to the new pixel location. The 
averaging process alters the original pixel values 
and creates entirely new digital values in the 
output image. This may be undesirable if further 
processing and analysis, such as classification 
based on spectral response, is to be done. If this 
is the case, resampling may best be done after 
the classification process. 
Cubic convolution
 
resampling goes even further to calculate a 
distance weighted average of a block of sixteen 
pixels from the original image which surround the 
new output pixel location. As with bilinear interpolation, this method results in completely new 
pixel values. However, these two methods both produce images which have a much sharper 
appearance and avoid the blocky appearance of the nearest neighbour method. 
Page 152Section 4.4 Pre-processing
Canada Centre for Remote Sensing

 
Page 153Section 4.4 Pre-processing
Canada Centre for Remote Sensing

4.5 Image Enhancement 
Enhancements are used to make it easier for visual interpretation and understanding of 
imagery. The advantage of digital imagery is that it allows us to manipulate the digital pixel 
values in an image. Although radiometric corrections for illumination, atmospheric influences, 
and sensor characteristics may be done prior to distribution of data to the user, the image may 
still not be optimized for visual interpretation. Remote sensing devices, particularly those 
operated from satellite platforms, must be designed to cope with levels of target/background 
energy which are typical of all conditions likely to be encountered in routine use. With large 
variations in spectral response from a diverse range of targets (e.g. forest, deserts, 
snowfields, water, etc.) no generic radiometric correction could optimally account for and 
display the optimum brightness range and contrast for all targets. Thus, for each application 
and each image, a custom adjustment of the range and distribution of brightness values is 
usually necessary. 
In raw imagery, the useful data often populates only a small portion 
of the available range of digital values (commonly 8 bits or 256 
levels). Contrast enhancement involves changing the original values 
so that more of the available range is used, thereby increasing the 
contrast between targets and their backgrounds. The key to 
understanding contrast enhancements is to understand the concept 
of an 
image histogram
. A histogram is a graphical representation of 
the brightness values that comprise an image. The brightness values 
(i.e. 0-255) are displayed along the x-axis of the graph. The 
frequency of occurrence of each of these values in the image is 
shown on the y-axis. 
 
By manipulating the range of digital values in an image, graphically represented by its 
histogram, we can apply various enhancements to the data. There are many different 
techniques and methods of enhancing contrast and detail in an image; we will cover only a 
Page 154Section 4.5 Image Enhancement
Canada Centre for Remote Sensing

few common ones here. The simplest type of enhancement is a 
linear contrast stretch
. This 
involves identifying lower and upper bounds from the histogram (usually the minimum and 
maximum brightness values in the image) and applying a transformation to stretch this range 
to fill the full range. In our example, the minimum value (occupied by actual data) in the 
histogram is 84 and the maximum value is 153. These 70 levels occupy less than one-third of 
the full 256 levels available. A linear stretch uniformly expands this small range to cover the 
full range of values from 0 to 255. This enhances the contrast in the image with light toned 
areas appearing lighter and dark areas appearing darker, making visual interpretation much 
easier. This graphic illustrates the increase in contrast in an image before (left) and after 
(right) a linear contrast stretch. 
  
  
A uniform distribution of the input range of 
values across the full range may not always 
be an appropriate enhancement, particularly 
if the input range is not uniformly distributed. 
In this case, a 
histogram-equalized 
stretch
 may be better. This stretch assigns 
more display values (range) to the 
frequently occurring portions of the 
histogram. In this way, the detail in these 
areas will be better enhanced relative to 
those areas of the original histogram where 
values occur less frequently. In other cases, 
it may be desirable to enhance the contrast 
in only a specific portion of the histogram. 
For example, suppose we have an image of the mouth of a river, and the water portions of the 
image occupy the digital values from 40 to 76 out of the entire image histogram. If we wished 
to enhance the detail in the water, perhaps to see variations in sediment load, we could 
stretch only that small portion of the histogram represented by the water (40 to 76) to the full 
grey level range (0 to 255). All pixels below or above these values would be assigned to 0 and 
255, respectively, and the detail in these areas would be lost. However, the detail in the water 
would be greatly enhanced. 
  
  
Page 155Section 4.5 Image Enhancement
Canada Centre for Remote Sensing

Spatial filtering
 
encompasses 
another set of 
digital processing 
functions which 
are used to 
enhance the 
appearance of an 
image. Spatial filters are designed to highlight or suppress specific features in an image based 
on their 
spatial frequency
. Spatial frequency is related to the concept of image texture, which 
we discussed in section 4.2. It refers to the frequency of the variations in tone that appear in 
an image. "Rough" textured areas of an image, where the changes in tone are abrupt over a 
small area, have high spatial frequencies, while "smooth" areas with little variation in tone 
over several pixels, have low spatial frequencies. A common 
filtering procedure
 involves 
moving a 'window' of a few pixels in dimension (e.g. 3x3, 5x5, etc.) over each pixel in the 
image, applying a mathematical calculation using the pixel values under that window, and 
replacing the central pixel with the new value. The window is moved along in both the row and 
column dimensions one pixel at a time and the calculation is repeated until the entire image 
has been filtered and a "new" image has been generated. By varying the calculation 
performed and the weightings of the individual pixels in the filter window, filters can be 
designed to enhance or suppress different types of features. 
  
  
A 
low-pass filter
 is designed to emphasize larger, homogeneous areas of similar tone and 
reduce the smaller detail in an image. Thus, low-pass filters generally serve to smooth the 
appearance of an image. Average and median filters, often used for radar imagery (and 
described in Chapter 3), are examples of low-pass filters. 
High-pass filters
 do the opposite 
and serve to sharpen the appearance of fine detail in an image. One implementation of a 
high-pass filter first applies a low-pass filter to an image and then subtracts the result from the 
original, leaving behind only the high spatial frequency information. 
Directional, or edge 
detection filters
 are designed to highlight linear features, such as roads or field boundaries. 
These filters can also be designed to enhance features which are oriented in specific 
directions. These filters are useful in applications such as geology, for the detection of linear 
geologic structures. 
Page 156Section 4.5 Image Enhancement
Canada Centre for Remote Sensing

  
Page 157Section 4.5 Image Enhancement
Canada Centre for Remote Sensing

4.6 Image Transformations 
Image transformations typically involve the manipulation of multiple bands of data, whether 
from a single multispectral image or from two or more images of the same area acquired at 
different times (i.e. multitemporal image data). Either way, image transformations generate 
"new" images from two or more sources which highlight particular features or properties of 
interest, better than the original input images. 
Basic image transformations apply simple arithmetic 
operations to the image data. 
Image subtraction
 is often 
used to identify changes that have occurred between 
images collected on different dates. Typically, two images 
which have been geometrically registered (see section 4.4), 
are used with the pixel (brightness) values in one image (1) 
being subtracted from the pixel values in the other (2). 
Scaling the resultant image (3) by adding a constant (127 in 
this case) to the output values will result in a suitable 
'difference' image. In such an image, areas where there has 
been little or no change (A) between the original images, will 
have resultant brightness values around 127 (mid-grey tones), while those areas where 
significant change has occurred (B) will have values higher or lower than 127 - brighter or 
darker depending on the 'direction' of change in reflectance between the two images . This 
type of image transform can be useful for mapping changes in urban development around 
cities and for identifying areas where deforestation is occurring, as in this example. 
Image division or 
spectral ratioing
 is one of the most common transforms applied to image 
data. Image ratioing serves to highlight subtle variations in the spectral responses of various 
surface covers. By ratioing the data from two different spectral bands, the resultant image 
enhances variations in the slopes of the spectral reflectance curves between the two different 
spectral ranges that may otherwise be masked by the pixel brightness variations in each of 
the bands. The following example illustrates the concept of spectral ratioing. Healthy 
vegetation reflects strongly in the near-infrared portion of the spectrum while absorbing 
strongly in the visible red. Other surface types, such as soil and water, show near equal 
reflectances in both the near-infrared and red portions. Thus, a ratio image of Landsat MSS 
Band 7 (Near-Infrared - 0.8 to 1.1 mm) divided by Band 5 (Red - 0.6 to 0.7 mm) would result 
in ratios much greater than 1.0 for vegetation, and ratios around 1.0 for soil and water. Thus 
the discrimination of vegetation from other surface cover types is significantly enhanced. Also, 
we may be better able to identify areas of unhealthy or stressed vegetation, which show low 
near-infrared reflectance, as the ratios would be lower than for healthy green vegetation. 
Page 158Section 4.6 Image Transformations
Canada Centre for Remote Sensing

 
Another benefit of spectral ratioing is that, because we are looking at relative values (i.e. 
ratios) instead of absolute brightness values, variations in scene illumination as a result of 
topographic effects are reduced. Thus, although the absolute reflectances for forest covered 
slopes may vary depending on their orientation relative to the sun's illumination, the ratio of 
their reflectances between the two bands should always be very similar. More complex ratios 
involving the sums of and differences between spectral bands for various sensors, have been 
developed for monitoring vegetation conditions. One widely used image transform is the 
Normalized Difference Vegetation Index (NDVI)
which has been used to monitor vegetation 
conditions on continental and global scales using the Advanced Very High Resolution 
Radiometer (AVHRR) sensor onboard the NOAA series of satellites (see Chapter 2, section 
2.11). 
Different bands of multispectral data are often 
highly correlated and thus contain similar 
information. For example, Landsat MSS 
Bands 4 and 5 (green and red, respectively) 
typically have similar visual appearances since 
reflectances for the same surface cover types 
are almost equal. Image transformation 
techniques based on complex processing of 
the statistical characteristics of multi-band 
data sets can be used to reduce this data 
redundancy and correlation between bands. 
One such transform is called 
principal components analysis
. The objective of this 
transformation is to reduce the dimensionality (i.e. the number of bands) in the data, and 
compress as much of the information in the original bands into fewer bands. The "new" bands 
that result from this statistical procedure are called components. This process attempts to 
maximize (statistically) the amount of information (or variance) from the original data into the 
least number of new components. As an example of the use of principal components analysis, 
a seven band Thematic Mapper (TM) data set may be transformed such that the first three 
principal components contain over 90 percent of the information in the original seven bands. 
Interpretation and analysis of these three bands of data, combining them either visually or 
Page 159Section 4.6 Image Transformations
Canada Centre for Remote Sensing

digitally, is simpler and more efficient than trying to use all of the original seven bands. 
Principal components analysis, and other complex transforms, can be used either as an 
enhancement technique to improve visual interpretation or to reduce the number of bands to 
be used as input to digital classification procedures, discussed in the next section.  
Page 160Section 4.6 Image Transformations
Canada Centre for Remote Sensing

4.7 Image Classification and Analysis 
 
A human analyst attempting to classify features in an image uses the elements of visual 
interpretation (discussed in section 4.2) to identify homogeneous groups of pixels which 
represent various features or land cover classes of interest. 
Digital image classification
 
uses the spectral information represented by the digital numbers in one or more spectral 
bands, and attempts to classify each individual pixel based on this spectral information. This 
type of classification is termed 
spectral pattern recognition
. In either case, the objective is 
to assign all pixels in the image to particular classes or themes (e.g. water, coniferous forest, 
deciduous forest, corn, wheat, etc.). The resulting classified image is comprised of a mosaic 
of pixels, each of which belong to a particular theme, and is essentially a thematic "map" of 
the original image. 
When talking about classes, we need to distinguish between 
information classes and 
spectral classes
. Information classes are those categories of interest that the analyst is 
actually trying to identify in the imagery, such as different kinds of crops, different forest types 
or tree species, different geologic units or rock types, etc. Spectral classes are groups of 
pixels that are uniform (or near-similar) with respect to their brightness values in the different 
spectral channels of the data. The objective is to match the spectral classes in the data to the 
information classes of interest. Rarely is there a simple one-to-one match between these two 
types of classes. Rather, unique spectral classes may appear which do not necessarily 
correspond to any information class of particular use or interest to the analyst. Alternatively, a 
broad information class (e.g. forest) may contain a number of spectral 
sub-classes
 with 
unique spectral variations. Using the forest example, spectral sub-classes may be due to 
variations in age, species, and density, or perhaps as a result of shadowing or variations in 
scene illumination. It is the analyst's job to decide on the utility of the different spectral classes 
and their correspondence to useful information classes. 
  
  
  
  
Page 161Section 4.7 Image Classification and Analysis
Canada Centre for Remote Sensing

  
Common classification procedures can be broken down 
into two broad subdivisions based on the method used: 
supervised classification and unsupervised 
classification
. In a 
supervised classification
, the analyst 
identifies in the imagery homogeneous representative 
samples of the different surface cover types (information 
classes) of interest. These samples are referred to as 
training areas
. The selection of appropriate training areas 
is based on the analyst's familiarity with the geographical 
area and their knowledge of the actual surface cover types 
present in the image. Thus, the analyst is "supervising" the 
categorization of a set of specific classes. The numerical information in all spectral bands for 
the pixels comprising these areas are used to "train" the computer to recognize spectrally 
similar areas for each class. The computer uses a special program or algorithm (of which 
there are several variations), to determine the numerical "signatures" for each training class. 
Once the computer has determined the signatures for each class, each pixel in the image is 
compared to these signatures and labeled as the class it most closely "resembles" digitally. 
Thus, in a supervised classification we are first identifying the information classes which are 
then used to determine the spectral classes which represent them. 
 
Unsupervised classification
 in essence reverses the supervised classification process. 
Spectral classes are grouped first, based solely on the numerical information in the data, and 
are then matched by the analyst to information classes (if possible). Programs, called 
clustering algorithms
, are used to determine the natural (statistical) groupings or structures 
in the data. Usually, the analyst specifies how many groups or clusters are to be looked for in 
the data. In addition to specifying the desired number of classes, the analyst may also specify 
parameters related to the separation distance among the clusters and the variation within 
each cluster. The final result of this iterative clustering process may result in some clusters 
Page 162Section 4.7 Image Classification and Analysis
Canada Centre for Remote Sensing

that the analyst will want to subsequently combine, or clusters that should be broken down 
further - each of these requiring a further application of the clustering algorithm. Thus, 
unsupervised classification is not completely without human intervention. However, it does not 
start with a pre-determined set of classes as in a supervised classification. 
Page 163Section 4.7 Image Classification and Analysis
Canada Centre for Remote Sensing

4.8 Data Integration and Analysis 
 
In the early days of analog remote sensing when the only remote sensing data source was 
aerial photography, the capability for integration of data from different sources was limited. 
Today, with most data available in digital format from a wide array of sensors, data integration 
is a common method used for interpretation and analysis. 
Data integration
 fundamentally 
involves the combining or merging of data from multiple sources in an effort to extract better 
and/or more information. This may include data that are multitemporal, multiresolution, 
multisensor, or multi-data type in nature. 
  
Multitemporal data integration has already been 
alluded to in section 4.6 when we discussed image 
subtraction. Imagery collected at different times is 
integrated to identify areas of change. Multitemporal 
change detection can be achieved through simple 
methods such as these, or by other more complex 
approaches such as multiple classification 
comparisons or classifications using integrated 
multitemporal data sets. Multiresolution data merging 
is useful for a variety of applications. The merging of 
data of a higher spatial resolution with data of lower 
resolution can significantly sharpen the spatial detail 
in an image and enhance the discrimination of features. 
SPOT data
 are well suited to this 
approach as the 10 metre panchromatic data can be easily merged with the 20 metre 
multispectral data. Additionally, the multispectral data serve to retain good spectral resolution 
while the panchromatic data provide the improved spatial resolution.  
  
  
  
Page 164Section 4.8 Data Integration and Analysis
Canada Centre for Remote Sensing

  
Data from different sensors may also be merged, 
bringing in the concept of multisensor data fusion. An 
excellent example of this technique is the combination 
of 
multispectral optical data with radar imagery
. 
These two diverse spectral representations of the 
surface can provide complementary information. The 
optical data provide detailed spectral information useful 
for discriminating between surface cover types, while 
the radar imagery highlights the structural detail in the 
image. 
Applications of multisensor data integration 
generally require that the data be geometrically 
registered, either to each other or to a common 
geographic coordinate system or map base. This 
also allows other 
ancillary
 (supplementary) data 
sources to be integrated with the remote sensing 
data. For example, elevation data in digital form, 
called 
Digital Elevation or Digital Terrain Models 
(DEMs/DTMs)
, may be combined with remote 
sensing data for a variety of purposes. DEMs/DTMs 
may be useful in image classification, as effects due to terrain and slope variability can be 
corrected, potentially increasing the accuracy of the resultant classification. DEMs/DTMs are 
also useful for generating 
three-dimensional perspective views
 by draping remote sensing 
imagery over the elevation data, enhancing visualization of the area imaged. 
  
Combining data of different types and from different sources, 
such as we have described above, is the pinnacle of data 
integration and analysis. In a digital environment where all the 
data sources are geometrically registered to a common 
geographic base, the potential for information extraction is 
extremely wide. This is the concept for analysis within a digital 
Geographical Information System (GIS)
 database. Any data 
source which can be referenced spatially can be used in this 
type of environment. A DEM/DTM is just one example of this 
kind of data. Other examples could include digital maps of soil 
type, land cover classes, forest species, road networks, and 
many others, depending on the application. The results from a classification of a remote 
sensing data set in map format, could also be used in a GIS as another data source to update 
existing map data. In essence, by analyzing diverse data sets together, it is possible to extract 
better and more accurate information in a synergistic manner than by using a single data 
Page 165Section 4.8 Data Integration and Analysis
Canada Centre for Remote Sensing
source alone. There are a myriad of potential applications and analyses possible for many 
applications. In the next and final chapter, we will look at examples of various applications of 
remote sensing data, many involving the integration of data from different sources. 

4. Endnotes
 
 
4.9 Endnotes 
You have just completed 
Chapter 4 - Image Interpretation and Analysis
. You can continue 
to Chapter 5 - Applications or first browse the CCRS Web site for other articles related to 
Image Interpretation and Analysis. 
By browsing the "Images of Canada"
1
, you can learn in detail about the visual elements of 
interpretation and test yourself with a variety of remote sensing questions and answers.  
We have a downloadable tutorial
2
 and exercise on the topic of digital images and digital 
analysis techniques that makes a good start into this field. 
See how the Intensity, Hue and Saturation (IHS) transformation, as applied to 3-D images are 
used to help visualize terrain relief
3
. As well, an IHS transformation can also be used to 
exploit the synergy of two different image data sets; in the case shown here, to study the 
hydrogeology
4
 of an area. Image fusion
5
 of data from different sensors is well demonstrated 
in an image of Canada's Capital - Ottawa. 
Image compression is important for storage and transmission of large images. One 
compression technique developed at CCRS uses multiscale methods
6
 to compress images 
and reduce file size. 
There are many other image manipulation / interpretation techniques demonstrated on the 
CCRS Web site. You may also want to check our Remote Sensing Glossary for terms in the 
"techniques"
7
 category.
 
1
http://www.ccrs.nrcan.gc.ca/ccrs/learn/tour/tour_e.html
 
2
http://www.ccrs.nrcan.gc.ca/ccrs/learn/tutorials/digitech/digitech_e.html
 
3
http://www.ccrs.nrcan.gc.ca/ccrs/rd/ana/chromo/chromo_e.html
 
4
http://www.ccrs.nrcan.gc.ca/ccrs/data/satsens/radarsat/images/jor/rjor04_e.html
 
5
http://www.ccrs.nrcan.gc.ca/ccrs/learn/tour/06/06ont_e.html
 
6
http://www.ccrs.nrcan.gc.ca/ccrs/com/rsnewsltr/2302/2302ap1_e.html
 
7
http://dweb.ccrs.nrcan.gc.ca/ccrs/db/glossary/glossary_e.cfm
 
Page 166Section 4.9 Endnotes
Canada Centre for Remote Sensing

4. Did You Know?
 
 
4.2 Did You Know? 
 
"...What will they think of next ?!..."
 
Remote sensing (image interpretation) has been used for archeological investigations. 
Sometimes the 'impression' that a buried artifact, such as an ancient fort foundation, leaves 
on the surface, can be detected and identified. That surface impression is typically very 
subtle, so it helps to know the general area to be searched and the nature of the feature being 
sought. It is also useful if the surface has not been disturbed much by human activities. 
Page 167Section 4 Did you Know
Canada Centre for Remote Sensing

4.3 Did You Know? 
"...our standard operating procedure is..."
 
 
... the remote sensing industry and those associated with it have attempted to standardize the 
way digital remote sensing data are formatted in order to make the exchange of data easier 
and to standardize the way data can be read into different image analysis systems. The 
Committee on Earth Observing Satellites (CEOS) have specified this format which is widely 
used around the world for recording and exchanging data. 
Page 168Section 4 Did you Know?
Canada Centre for Remote Sensing
4.5 Did You Know? 
An image 'enhancement' is basically anything that makes it easier or better to visually 
interpret an image. In some cases, like 'low-pass filtering', the enhanced image can actually 
look worse than the original, but such an enhancement was likely performed to help the 
interpreter see low spatial frequency features among the usual high frequency clutter found in 
an image. Also, an enhancement is performed for a specific application. This enhancement 
may be inappropriate for another purpose, which would demand a different type of 
enhancement.  

4.7 Did You Know? 
"...this image has such lovely texture, don't you think?..."
 
 
...texture was identified as one of the key elements of visual interpretation (section 4.2), 
particularly for radar image interpretation. Digital texture classifiers are also available and can 
be an alternative (or assistance) to spectral classifiers. They typically perform a "moving 
window" type of calculation, similar to those for spatial filtering, to estimate the "texture" based 
on the variability of the pixel values under the window. Various textural measures can be 
calculated to attempt to discriminate between and characterize the textural properties of 
different features. 
Page 169Section 4 Did you Know?
Canada Centre for Remote Sensing

4. Whiz Quiz and Answers
 
 
4.2 Whiz Quiz 
 
Take a look at the aerial photograph above. Identify the following features in the image and 
explain how you were able to do so based on the elements of visual interpretation described 
in this section. 

race track  

river  

roads  

bridges  

residential area  

dam  
 
Page 170Section 4.Whiz Quiz and Answers
4.2 Answers 

The race track in the lower left of the image is quite easy to identify because of its 
characteristic shape.  

The river is also easy to identify due to its contrasting tone with the surrounding land 
and also due to its shape.  

The roads in the image are visible due to their shape (straight in many cases) and their 
generally bright tone contrasting against the other darker features.  

Bridges are identifiable based on their shape, tone, and association with the river - they 
cross it!  

Residential areas on the left hand side of the image and the upper right can be 
identified by the pattern that they make in conjunction with the roads. Individual houses 
and other buildings can also be identified as dark and light tones.  

The dam in the river at the top center of the image can be identified based on its 
contrasting tone with the dark river, its shape, and its association with the river - where 
else would a dam be!  
Canada Centre for Remote Sensing

4.3 Whiz Quiz 
One 8-bit pixel takes up one single byte of computer disk space. One 
kilobyte (Kb) is 1024 bytes. One megabyte (Mb) is 1024 kilobytes. How 
many megabytes of computer disk space would be required to store an 8-bit 
Landsat Thematic Mapper (TM) image (7 bands), which is 6000 pixels by 
6000 lines in dimension?  
The answer is ...  
  
  
Page 171Section 4 Whiz Quiz
Canada Centre for Remote Sensing
4.3 Answers 
 
If we have seven bands of TM data, each 6000 pixels by 6000 lines, and each pixel takes up 
one byte of disk space, we have: 
7 x 6000 x 6000 = 252,000,000 bytes of data  
To convert this to kilobytes we need to divide by 1024, and to convert that answer to 
megabytes we need to divide by 1024 again! 
252,000,000 (1024 x 1024) = 240.33 megabytes  
So, we would need over 240 megabytes of disk space just to hold one full TM image, let alone 
analyze the imagery and create any new image variations! Needless to say, it takes a lot of 
storage space and powerful computers to analyze the data from today's remote sensing 
systems.  
 

4.4 Whiz Quiz 
 
What would be the advantage of geometrically correcting an image to geographic coordinates 
prior to further analysis and interpretation? 
Page 172Section 4 Whiz Quiz
Canada Centre for Remote Sensing
4.4 Answers 
 
The advantage of geometrically correcting an image prior to further analysis and interpretation 
is that it would then allow proper measurements of distances and areas to be made from 
features in the image. This may be particularly useful in different applications where true 
measurements are necessary, such as in urban mapping applications. Also, the geographic 
locations of features could be determined. Once an image is geometrically registered to a 
known geographic base, it can be combined with other mapped data in a digital environment 
for further analysis. This is the concept of data integration which is discussed in section 4.8. 

4.7 Whiz Quiz 
 
You want to perform a classification on a satellite image, but when examining its histogram, 
you notice that the range of useful data is very narrow. Prior to attempting classification, would 
you enhance the image with a linear contrast stretch? 
 
Page 173Section 4 Whiz Quiz
Canada Centre for Remote Sensing
4.7 Answer
An 'enhancement' of an image is done exclusively for visually appreciating and analyzing its 
contents. An enhancement would not add anything useful, as far as the classification 
algorithm is concerned. Another way of looking at this is: if two pixels have brightness values 
ust one digital unit different, then it would be very difficult to notice this subtle difference by 
eye. But for the computer, the difference is just as 'obvious' as if it was 100 times greater. 
 
An enhanced version of the image may help in selecting 'training' sites (by eye), but you 
would still perform the classification on the unenhanced version. 

5. Applications
 
 
5.1 Introduction 
As we learned in the section on sensors, each one was designed with a specific purpose. 
With optical sensors, the design focuses on the spectral bands to be collected. With radar 
imaging, the incidence angle and microwave band used plays an important role in defining 
which applications the sensor is best suited for. 
Each application itself has specific demands, for spectral resolution, spatial resolution, and 
temporal resolution. 
 
To review, spectral resolution refers to the width or range of each spectral band being 
recorded. As an example, panchromatic imagery (sensing a broad range of all visible 
wavelengths) will not be as sensitive to vegetation stress as a narrow band in the red 
wavelengths, where chlorophyll strongly absorbs electromagnetic energy. 
Spatial resolution refers to the discernible detail in the image. Detailed mapping of wetlands 
requires far finer spatial resolution than does the regional mapping of physiographic areas. 
Temporal resolution refers to the time interval between images. There are applications 
requiring data repeatedly and often, such as oil spill, forest fire, and sea ice motion 
monitoring. Some applications only require seasonal imaging (crop identification, forest insect 
infestation, and wetland monitoring), and some need imaging only once (geology structural 
mapping). Obviously, the most time-critical applications also demand fast turnaround for 
image processing and delivery - getting useful imagery quickly into the user's hands. 
Page 174Section 5.1 Introduction
Canada Centre for Remote Sensing

In a case where repeated imaging is required, the revisit frequency of a sensor is important 
(how long before it can image the same spot on the Earth again) and the reliability of 
successful data acquisition. Optical sensors have limitations in cloudy environments, where 
the targets may be obscured from view. In some areas of the world, particularly the tropics, 
this is virtually a permanent condition. Polar areas also suffer from inadequate solar 
illumination, for months at a time. Radar provides reliable data, because the sensor provides 
its own illumination, and has long wavelengths to penetrate cloud, smoke, and fog, ensuring 
that the target won't be obscured by weather conditions, or poorly illuminated. 
Often it takes more than a single sensor to adequately address all of the requirements for a 
given application. The combined use of multiple sources of information is called integration. 
Additional data that can aid in the analysis or interpretation of the data is termed "ancillary" 
data. 
The applications of remote sensing described in this chapter are representative, but not 
exhaustive. We do not touch, for instance, on the wide area of research and practical 
application in weather and climate analysis, but focus on applications tied to the surface of the 
Earth. The reader should also note that there are a number of other applications that are 
practiced but are very specialized in nature, and not covered here (e.g. terrain trafficability 
analysis, archeological investigations, route and utility corridor planning, etc.). 
Multiple sources of information
 
Each band of information collected from a sensor contains important and unique data. We 
know that different wavelengths of incident energy are affected differently by each target - 
they are absorbed, reflected or transmitted in different proportions. The appearance of targets 
can easily change over time, sometimes within seconds. In many applications, using 
information from several different sources ensures that target identification or information 
extraction is as accurate as possible. The following describe ways of obtaining far more 
information about a target or area, than with one band from a sensor. 
Multispectral
 
The use of multiple bands of spectral information attempts to exploit different and independent 
"views" of the targets so as to make their identification as confident as possible. Studies have 
been conducted to determine the optimum spectral bands for analyzing specific targets, such 
as insect damaged trees. 
Multisensor
 
Different sensors often provide complementary information, and when integrated together, 
can facilitate interpretation and classification of imagery. Examples include combining high 
resolution panchromatic imagery with coarse resolution multispectral imagery, or merging 
actively and passively sensed data. A specific example is the integration of SAR imagery with 
multispectral imagery. SAR data adds the expression of surficial topography and relief to an 
otherwise flat image. The multispectral image contributes meaningful colour information about 
the composition or cover of the land surface. This type of image is often used in geology, 
Page 175Section 5.1 Introduction
Canada Centre for Remote Sensing

where lithology or mineral composition is represented by the spectral component, and the 
structure is represented by the radar component. 
Multitemporal
 
Information from multiple images taken over a period of time is referred to as multitemporal 
information. Multitemporal may refer to images taken days, weeks, or even years apart. 
Monitoring land cover change or growth in urban areas requires images from different time 
periods. Calibrated data, with careful controls on the quantitative aspect of the spectral or 
backscatter response, is required for proper monitoring activities. With uncalibrated data, a 
classification of the older image is compared to a classification from the recent image, and 
changes in the class boundaries are delineated. Another valuable multitemporal tool is the 
observation of vegetation phenology (how the vegetation changes throughout the growing 
season), which requires data at frequent intervals throughout the growing season. 
"Multitemporal information" is acquired from the interpretation of images taken over the same 
area, but at different times. The time difference between the images is chosen so as to be 
able to monitor some dynamic event. Some catastrophic events (landslides, floods, fires, etc.) 
would need a time difference counted in days, while much slower-paced events (glacier melt, 
forest regrowth, etc.) would require years. This type of application also requires consistency in 
illumination conditions (solar angle or radar imaging geometry) to provide consistent and 
comparable classification results. 
The ultimate in critical (and quantitative) multitemporal analysis depends on calibrated data. 
Only by relating the brightnesses seen in the image to physical units, can the images be 
precisely compared, and thus the nature and magnitude of the observed changes be 
determined. 
Page 176Section 5.1 Introduction
Canada Centre for Remote Sensing

5.2 Agriculture 
 
Agriculture plays a dominant role in economies of both developed and undeveloped countries. 
Whether agriculture represents a substantial trading industry for an economically strong 
country or simply sustenance for a hungry, overpopulated one, it plays a significant role in 
almost every nation. The production of food is important to everyone and producing food in a 
cost-effective manner is the goal of every farmer, large-scale farm manager and regional 
agricultural agency. A farmer needs to be informed to be efficient, and that includes having 
the knowledge and information products to forge a viable strategy for farming operations. 
These tools will help him understand the health of his crop, extent of infestation or stress 
damage, or potential yield and soil conditions. Commodity brokers are also very interested in 
how well farms are producing, as yield (both quantity and quality) estimates for all products 
control price and worldwide trading. 
Satellite and airborne images
 are used as mapping tools to 
classify crops, examine their health and viability, and monitor 
farming practices. Agricultural applications of remote sensing 
include the following: 
  
  
  
  

crop type classification  

crop condition assessment  

crop yield estimation  
mapping of soil characteristics  

mapping of soil management practices  
compliance monitoring (farming practices)  
Page 177Section 5.2 Agriculture
Canada Centre for Remote Sensing

5.2.1 Crop Type Mapping 
 
Background
 
Identifying and mapping crops is important for a number of reasons. Maps of crop type are 
created by national and multinational agricultural agencies, insurance agencies, and regional 
agricultural boards to prepare an inventory of what was grown in certain areas and when. This 
serves the purpose of forecasting grain supplies (yield prediction), collecting crop production 
statistics, facilitating crop rotation records, mapping soil productivity, identification of factors 
influencing crop stress, assessment of crop damage due to storms and drought, and 
monitoring farming activity. 
Key activities include identifying the crop types and delineating their extent (often measured in 
acres). Traditional methods of obtaining this information are census and ground surveying. In 
order to standardize measurements however, particularly for multinational agencies and 
consortiums, remote sensing can provide common data collection and information extraction 
strategies.  
Why remote sensing?
 
Remote sensing offers an efficient and reliable means of collecting the information required, in 
order to map crop type and acreage. Besides providing a synoptic view, remote sensing can 
provide structure information about the health of the vegetation. The spectral reflection of a 
field will vary with respect to changes in the phenology (growth), stage type, and crop health, 
and thus can be measured and monitored by multispectral sensors. Radar is sensitive to the 
structure, alignment, and moisture content of the crop, and thus can provide complementary 
information to the optical data. Combining the information from these two types of sensors 
increases the information available for distinguishing each target class and its respective 
signature, and thus there is a better chance of performing a more accurate classification.  
Interpretations from remotely sensed data can be input to a geographic information system 
(GIS) and crop rotation systems, and combined with ancillary data, to provide information of 
ownership, management practices etc. 
Data requirements
 
Crop identification and mapping benefit from the use of multitemporal imagery to facilitate 
classification by taking into account changes in reflectance as a function of plant phenology 
(stage of growth). This in turn requires calibrated sensors, and frequent repeat imaging 
throughout the growing season. For example, crops like canola may be easier to identify when 
they are flowering, because of both the spectral reflectance change, and the timing of the 
Page 178Section 5.2.1 Crop Type Mapping
Canada Centre for Remote Sensing

flowering. 
Multisensor data are also valuable for increasing classification accuracies by contributing 
more information than a sole sensor could provide. VIR sensing contributes information 
relating to the chlorophyll content of the plants and the canopy structure, while radar provides 
information relating to plant structure and moisture. In areas of persistent cloud cover or haze, 
radar is an excellent tool for observing and distinguishing crop type due to its active sensing 
capabilities and long wavelengths, capable of penetrating through atmospheric water vapour. 
Canada vs. International
 
Although the principles of identifying crop type are the same, the scale of observation in 
Europe and Southeast Asia is considerably smaller than in North America, primarily due to 
smaller field parcel sizes. Cloud cover in Europe and tropical countries also usually limits the 
feasibility of using high-resolution optical sensors. In these cases high-resolution radar would 
have a strong contribution. 
 
The sizable leaves of tropical agricultural crops (cocoa, banana, and oil palm) have distinct 
radar signatures. Banana leaves in particular are characterized by bright backscatter 
(represented by "B" in image). Monitoring stages of rice growth is a key application in tropical 
areas, particularly Asian countries. Radar is very sensitive to surface roughness, and the 
development of rice paddies provides a dramatic change in brightness from the low returns 
from smooth water surfaces in flooded paddies , to the high return of the emergent rice crop. 
 
Case study (example)
 
The countries involved in the European Communities (EC) are using remote sensing to help 
fulfil the requirements and mandate of the EC Agricultural Policy, which is common to all 
Page 179Section 5.2.1 Crop Type Mapping
Canada Centre for Remote Sensing

members. The requirements are to delineate, identify, and measure the extent of important 
crops throughout Europe, and to provide an early forecast of production early in the season. 
Standardized procedures for collecting this data are based on remote sensing technology, 
developed and defined through the MARS project (Monitoring Agriculture by Remote 
Sensing). 
The project uses many types of remotely sensed data, from low resolution NOAA-AVHRR, to 
high-resolution radar, and numerous sources of ancillary data. These data are used to classify 
crop type over a regional scale to conduct regional inventories, assess vegetation condition, 
estimate potential yield, and finally to predict similar statistics for other areas and compare 
results. Multisource data such as VIR and radar were introduced into the project for increasing 
classification accuracies. Radar provides very different information than the VIR sensors, 
particularly vegetation structure, which proves valuable when attempting to differentiate 
between crop type. 
One the key applications within this project is the operational use of high resolution optical 
and radar data to confirm conditions claimed by a farmer when he requests aid or 
compensation. The use of remote sensing identifies potential areas of non-compliance or 
suspicious circumstances, which can then be investigated by other, more direct methods. 
As part of the Integrated Administration and Control System (IACS), remote sensing data 
supports the development and management of databases, which include cadastral 
information, declared land use, and parcel measurement. This information is considered when 
applications are received for area subsidies. 
This is an example of a truly successfully operational crop identification and monitoring 
application of remote sensing. 
Page 180Section 5.2.1 Crop Type Mapping
Canada Centre for Remote Sensing

5.2.2 Crop Monitoring & Damage Assessment 
Background
 
Assessment of the health of a crop, as well as early detection of crop infestations, is critical in 
ensuring good agricultural productivity. Stress associated with, for example, moisture 
deficiencies, insects, fungal and weed infestations, must be detected early enough to provide 
an opportunity for the farmer to mitigate. This process requires that remote sensing imagery 
be provided on a frequent basis (at a minimum, weekly) and be delivered to the farmer 
quickly, usually within 2 days. 
Also, crops do not generally grow evenly across the field and consequently crop yield can 
vary greatly from one spot in the field to another. These growth differences may be a result of 
soil nutrient deficiencies or other forms of stress. Remote sensing allows the farmer to identify 
areas within a field which are experiencing difficulties, so that he can apply, for instance, the 
correct type and amount of fertilizer, pesticide or herbicide. Using this approach, the farmer 
not only improves the productivity from his land, but also reduces his farm input costs and 
minimizes environmental impacts. 
There are many people involved in the trading, pricing, and selling of crops that never actually 
set foot in a field. They need information regarding crop health worldwide to set prices and to 
negotiate trade agreements. Many of these people rely on products such as a crop 
assessment index to compare growth rates and productivity between years and to see how 
well each country's agricultural industry is producing. This type of information can also help 
target locations of future problems, for instance the famine in Ethiopia in the late 1980's, 
caused by a significant drought which destroyed many crops. Identifying such areas facilitates 
in planning and directing humanitarian aid and relief efforts. 
  
Why remote sensing?
 
Remote sensing has a number of attributes that lend 
themselves to monitoring the health of crops. One 
advantage of optical (VIR) sensing is that it can see 
beyond the visible wavelengths into the infrared, where 
wavelengths are highly sensitive to crop vigour as well 
as crop stress and crop damage. Remote sensing 
imagery also gives the required spatial overview of the 
land. Recent advances in communication and 
technology allow a farmer to observe images of his 
fields and make timely decisions about managing the 
crops. Remote sensing can aid in identifying crops 
affected by conditions that are too dry or wet, affected 
by insect, weed or fungal infestations or 
weather 
related damage
. Images can be obtained throughout 
the growing season to not only detect problems, but also to monitor the success of the 
treatment. In the example image given here, a tornado has destroyed/damaged crops 
southwest of Winnipeg, Manitoba. 
  
  
  
Page 181Section 5.2.2 Crop Monitoring & Damage Assessment
Canada Centre for Remote Sensing

Healthy vegetation contains large quantities of 
chlorophyll, the substance that gives most 
vegetation its distinctive green colour. In referring to 
healthy crops, reflectance in the blue and red parts 
of the spectrum is low since chlorophyll absorbs this 
energy. In contrast, reflectance in the green and 
near-infrared spectral regions is high. Stressed or 
damaged crops experience a decrease in 
chlorophyll content and changes to the internal leaf 
structure. The reduction in chlorophyll content 
results in a decrease in reflectance in the green 
region and internal leaf damage results in a 
decrease in near-infrared reflectance. These 
reductions in green and infrared reflectance provide 
early detection of crop stress. Examining the ratio of reflected infrared to red wavelengths is 
an excellent measure of vegetation health. This is the premise behind some vegetation 
indices, such as the normalized differential vegetation 
index (NDVI) (Chapter 4). Healthy plants have a high NDVI 
value because of their high reflectance of infrared light, and 
relatively low reflectance of red light. Phenology and vigour 
are the main factors in affecting NDVI. An excellent 
example is the difference between irrigated crops and non-
irrigated land. The irrigated crops appear bright green in a 
real-colour simulated image
. The darker areas are dry 
rangeland with minimal vegetation. In a CIR (
colour 
infrared simulated
) image, where infrared reflectance is 
displayed in red, the healthy vegetation appears bright red, 
while the rangeland remains quite low in reflectance. 
Examining variations in crop growth within one field is possible. Areas of consistently healthy 
and vigorous crop would appear uniformly bright. Stressed vegetation would appear dark 
amongst the brighter, healthier crop areas. If the data is georeferenced, and if the farmer has 
a GPS (global position satellite) unit, he can find the exact area of the problem very quickly, 
by matching the coordinates of his location to that on the image. 
  
Data requirements
 
Detecting damage and monitoring crop health requires high-resolution imagery and 
multispectral imaging capabilities. One of the most critical factors in making imagery useful to 
farmers is a quick turnaround time from data acquisition to distribution of crop information. 
Receiving an image that reflects crop conditions of two weeks earlier does not help real time 
management nor damage mitigation. Images are also required at specific times during the 
growing season, and on a frequent basis. 
Remote sensing doesn't replace the field work performed by farmers to monitor their fields, 
but it does direct them to the areas in need of immediate attention. 
Canada vs. International
 
Efficient agricultural practices are a global concern, and other countries share many of the 
same requirements as Canada in terms of monitoring crop health by means of remote 
sensing. In many cases however, the scale of interest is smaller - smaller fields in Europe and 
Asia dictate higher resolution systems and smaller areal coverage. Canada, the USA, and 
Page 182Section 5.2.2 Crop Monitoring & Damage Assessment
Canada Centre for Remote Sensing

Russia, amongst others, have more expansive areas devoted to agriculture, and have 
developed, or are in the process of developing crop information systems (see below). In this 
situation, regional coverage and lower resolution data (say: 1km) can be used. The lower 
resolution facilitates computer efficiency by minimizing storage space, processing efforts and 
memory requirements. 
As an example of an international crop monitoring application, date palms are the prospective 
subject of an investigation to determine if remote sensing methods can detect damage from 
the red palm weevil in the Middle East. In the Arabian Peninsula, dates are extremely popular 
and date crops are one of the region's most important agricultural products. Infestation by the 
weevil could quickly devastate the palm crops and swallow a commodity worth hundreds of 
millions of dollars. Remote sensing techniques will be used to examine the health of the date 
crops through spectral analysis of the vegetation. Infested areas appear yellow to the naked 
eye, and will show a smaller near infrared reflectance and a higher red reflectance on the 
remotely sensed image data than the healthy crop areas. Authorities are hoping to identify 
areas of infestation and provide measures to eradicate the weevil and save the remaining 
healthy crops. 
Case study (example)
 
Canadian Crop Information System: A composite crop index map is created each week, 
derived from composited NOAA-
AVHRR data. Based on the NDVI, the index shows the health 
of crops in the prairie regions of Manitoba through to Alberta. These indices are produced 
weekly, and can be compared with indices of past years to compare crop growth and health. 
 
In 1988, severe drought conditions were prevalent across the prairies. Using NDVI values 
from NOAA AVHRR data, a 
drought area analysis
 determined the status of drought effects 
on crops across the affected area. Red and yellow areas indicate those crops in a weakened 
and stressed state, while green indicates healthy crop conditions. Note that most of the 
healthy crops are those in the cooler locations, such as in the northern Alberta (Peace River) 
and the higher elevations (western Alberta). Non-cropland areas (dry rangeland and forested 
land) are indicated in black, within the analysis region. 
Page 183Section 5.2.2 Crop Monitoring & Damage Assessment
Canada Centre for Remote Sensing

5.3 Forestry 
Forests are a valuable resource providing food, shelter, 
wildlife habitat, fuel, and daily supplies such as medicinal 
ingredients and paper. Forests play an important role in 
balancing the Earth's CO
2
 supply and exchange, acting as a 
key link between the atmosphere, geosphere, and 
hydrosphere. Tropical rainforests, in particular, house an 
immense 
diversity of species
, more capable of adapting to, 
and therefore surviving, changing environmental conditions 
than monoculture forests. This diversity also provides habitat 
for numerous animal species and is an important source of 
medicinal ingredients. The main issues concerning forest management are depletion due to 
natural causes (fires and infestations) or human activity (clear-cutting, burning, land 
conversion), and monitoring of health and growth for effective commercial exploitation and 
conservation.  
Humans generally consider the products of 
forests useful, rather than the forests 
themselves, and so extracting 
wood
 is a wide-
spread and historical practice, virtually global in 
scale. Depletion of forest resources has long 
term effects on climate, soil conservation, 
biodiversity, and hydrological regimes, and thus 
is a vital concern of environmental monitoring 
activities. Commercial forestry is an important 
industry throughout the world. Forests are 
cropped and re-harvested, and the new areas 
continually sought for providing a new source of 
lumber. With increasing pressure to conserve 
native and virgin forest areas, and unsustainable forestry practices limiting the remaining 
areas of potential cutting, the companies involved in extracting wood supplies need to be 
more efficient, economical, and aware of sustainable forestry practices. Ensuring that there is 
a healthy regeneration of trees where forests are extracted will ensure a future for the 
commercial forestry firms, as well as adequate wood supplies to meet the demands of a 
growing population. 
Non-commercial sources of forest depletion 
include removal for agriculture (pasture and 
crops), urban development, droughts, desert 
encroachment, loss of ground water, insect 
damage, fire and other natural phenomena 
(disease, typhoons). In some areas of the world, 
particularly in the tropics, (rain) forests, are 
covering what might be considered the most 
valuable commodity - viable agricultural land. 
Forests are burned or 
clear-cut
 to facilitate 
access to, and use of, the land. This practice 
often occurs when the perceived need for long 
term sustainability is overwhelmed by short-term 
sustenance goals. Not only are the depletion of species-rich forests a problem, affecting the 
local and regional hydrological regime, the smoke caused by the burning trees pollutes the 
Page 184Section 5.3 Forestry
Canada Centre for Remote Sensing

atmosphere, adding more CO
2
, and furthering the greenhouse effect.  
Of course, monitoring the health of forests is crucial for sustainability and conservation issues. 
Depletion of key species such as mangrove in environmentally sensitive coastline areas, 
removal of key support or shade trees from a potential crop tree, or disappearance of a large 
biota acting as a CO
2
 reservoir all affect humans and society in a negative way, and more 
effort is being made to monitor and enforce regulations and plans to protect these areas. 
International and domestic forestry applications where remote sensing can be utilized include 
sustainable development, biodiversity, land title and tenure (cadastre), monitoring 
deforestation, reforestation monitoring and managing, commercial logging operations, 
shoreline and watershed protection, biophysical monitoring (wildlife habitat assessment), and 
other environmental concerns. 
General forest cover information is valuable to developing countries with limited previous 
knowledge of their forestry resources. General cover type mapping, shoreline and watershed 
mapping and monitoring for protection, monitoring of cutting practices and regeneration, and 
forest fire/burn mapping are global needs which are currently being addressed by Canadian 
and foreign agencies and companies employing remote sensing technology as part of their 
information solutions in foreign markets. 
Forestry applications of remote sensing include the following: 
1) reconnaissance mapping:
  
Objectives to be met by national forest/environment agencies include forest 
cover updating, depletion monitoring, and measuring biophysical properties of 
forest stands. 
z
forest cover type discrimination  
z
agroforestry mapping  
2) Commercial forestry:
  
Of importance to commercial forestry companies and to resource management 
agencies are inventory and mapping applications: collecting harvest 
information, updating of inventory information for timber supply, broad forest 
type, vegetation density, and biomass measurements. 
zclear cut mapping / regeneration assessment  
z
burn delineation  
z
infrastructure mapping / operations support  
z
forest inventory  
z
biomass estimation  
z
species inventory  
3) Environmental monitoring
  
Conservation authorities are concerned with monitoring the quantity, health, 
and diversity of the Earth's forests. 
z
deforestation (rainforest, mangrove colonies)  
z
species inventory  
z
watershed protection (riparian strips)  
z
coastal protection (mangrove forests)  
Page 185Section 5.3 Forestry
Canada Centre for Remote Sensing

z
forest health and vigour  
Canadian requirements for forestry application information differ considerably from 
international needs, due in part to contrasts in tree size, species diversity (monoculture vs. 
species rich forest), and agroforestry practices. The level of accuracy and resolution of data 
required to address respective forestry issues differs accordingly. Canadian agencies have 
extensive a priori knowledge of their forestry resources and present inventory and mapping 
needs are often capably addressed by available data sources. 
For Canadian applications requirements, high accuracy (for accurate information content), 
multispectral information, fine resolution, and data continuity are the most important. There 
are requirements for large volumes of data, and reliable observations for seasonal coverage. 
There is a need to balance spatial resolution with the required accuracy and costs of the data. 
Resolution capabilities of 10 m to 30 m are deemed adequate for forest cover mapping, 
identifying and monitoring clearcuts, burn and fire mapping, collecting forest harvest 
information, and identifying general forest damage. Spatial coverage of 100 - 10000 km2 is 
appropriate for district to provincial scale forest cover and clear cut mapping, whereas 1-100 
km2 coverage is the most appropriate for site specific vegetation density and volume studies. 
Tropical forest managers will be most concerned with having a reliable data source, capable 
of imaging during critical time periods, and therefore unhindered by atmospheric conditions. 
Page 186Section 5.3 Forestry
Canada Centre for Remote Sensing

5.3.1 Clear Cut Mapping & Deforestation 
  
Background
 
Deforestation is a global problem, with many implications. In industrialized Europe, pollution 
(acid rain, soot and chemicals from factory smoke plumes) has damaged a large percentage 
of forested land. In the former Czechoslovakia, one half of the forests are destroyed or 
damaged from pollutants. Similar effects are felt in Germany, Poland, and even the 
Scandinavian countries. In tropical countries, valuable rainforest is being destroyed in an 
effort to clear potentially valuable agricultural and pasture land. This has resulted in huge 
losses of tropical rainforest throughout Latin America (Central America, southern Mexico, 
Haiti), South America (Brazil), Africa and Asia. In both Haiti and Madagascar in particular, the 
results have been devastating. The loss of forests increases soil erosion, river siltation, and 
deposition, affecting navigation, fisheries, wildlife habitat, and drinking water supplies, as well 
as farming productivity and self-sufficiency. 
Sensitive estuarine environments are protected by mangrove forest, which is cut or lost to 
urban growth, aquaculture, or damaged by pollutants or siltation. Monitoring the health of this 
forest is a step towards protecting the coastlines from erosion and degradation, and nearby 
inland areas from flooding. 
The loss of forests also affects the genetic diversity of species on Earth, which controls our 
intrinsic ability to adapt to changing conditions and environment. Rainforests account for 
approximately one half of the plant and animal species on Earth, and destroying large 
sections will only serve to reduce the gene and species pool. 
The rate and extent of deforestation, as well as monitoring regeneration, are the key 
parameters measured by remote sensing methods. 
Why remote sensing?
 
Remote sensing brings together a multitude of tools to better analyze the scope and scale of 
the deforestation problem. Multitemporal data provides for change detection analyses. Images 
of earlier years are compared to recent scenes, to tangibly measure the differences in the 
sizes and extents of the clearcuts or loss of forest. Data from a variety of sources are used to 
provide complementary information. Radar, merged with optical data, can be used to 
efficiently monitor the status of existing clearcuts or emergence of new ones, and even assess 
regeneration condition. In countries where cutting is controlled and regulated, remote sensing 
serves as a monitoring tool to ensure companies are following cut guidelines and 
specifications. 
Page 187Section 5.3.1 Clear Cut Mapping & Deforestation
Canada Centre for Remote Sensing

High resolution data provide a detailed view of forest depletion, while radar can provide a view 
that may otherwise be obscured by clouds. All remote sensing devices, however, provide a 
view of often remote and inaccessible areas, where illegal cutting or damage could continue 
unnoticed for long periods of time if aerial surveillance wasn't possible. 
Data requirements
 
Global monitoring initiatives, such as rain forest depletion studies, depend on large area 
coverage and data continuity, so it is important to use a sensor that will have successive 
generations launched and operational. Clear cut mapping and monitoring also require regional 
scale images and moderate or high resolution data depending on whether cuts are to be 
simply detected or delineated. As for many multi-temporal applications, a higher resolution 
image can be used to define the baseline, and coarser resolution images can be used to 
monitor changes to that baseline. 
Canada vs. International
 
Optical sensors are still preferred for clear cut mapping and monitoring in Canada because 
forest vegetation, cuts, and regenerating vegetation have distinguishable spectral signatures, 
and optical sensors can collect sufficient cloud-free data. 
 
 
 
Comparison of photo (bottom)andSAR image (top) 
of forest cuts along road. 
Radar is more useful for applications in the humid tropics because its all weather imaging 
capability is valuable for monitoring all types of depletion, including clear cuts, in areas prone 
to cloudy conditions. Cuts can be defined on 
radar images
 because clear cuts produce less 
backscatter than the forest canopy, and forest edges are enhanced by shadow and bright 
backscatter. However, regenerating cuts are typically difficult to detect, as advanced 
regeneration and mature forest canopy are not separable. Mangrove forests generally occur 
in tropical coastal areas, which are prone to cloudy conditions, therefore a reliable monitoring 
tool is required to successively measure the rate of forest depletion. Radar has been proven 
to differentiate mangrove from other land covers, and some bands have long wavelengths 
capable of penetrating cloud and rain. The only limitation is in differentiating different 
mangrove species. 
  
Page 188Section 5.3.1 Clear Cut Mapping & Deforestation
Canada Centre for Remote Sensing

  
Case study (example)
 
 
In Alberta, much of the province's forestland has been sold 
to offshore investors who are interested in selling pulp and 
paper products. Around the area of Whitecourt, clear cutting 
of conifer forest has been occurring for decades. In recent 
years however, the increasing demand for wood products 
has accelerated the cutting of the forests, resulting in a 
dissected and checkered landscape. Besides cutting for 
wood supply, forest depletion is also occurring due to cuts 
for seismic lines for oil and gas exploration and extraction. 
Both 
optical
 and 
radar
 sensors have been used to monitor 
the clear cuts and regeneration. 
  
   
 
Optical and Radar scenes of forest clear cutting. 
Page 189Section 5.3.1 Clear Cut Mapping & Deforestation
Canada Centre for Remote Sensing

5.3.2 Species Identification & Typing 
Background
 
Forest cover typing and species identification are critical to both forest conservation managers and 
forestry companies interested in their supply inventory. Forest cover typing can consist of 
reconnaissance mapping over a large area, while species inventories are highly detailed measurements 
of stand contents and characteristics (tree type, height, density). 
Why remote sensing?
 
Remote sensing provides a means of quickly identifying and delineating various forest types, a task that 
would be difficult and time consuming using traditional ground surveys. Data is available at various 
scales and resolutions to satisfy local or regional demands Large scale species identification can be 
performed with multispectral, hyperspectral, or airphoto data, while small scale cover type delineation 
can be performed by radar or multispectral data interpretation. Both imagery and the extracted 
information can be incorporated into a GIS to further analyze or present with ancillary data, such as 
slopes, ownership boundaries, or roads. 
Hyperspectral imagery can provide a very high spatial resolution while capturing extremely fine 
radiometric resolution data. This type of detailed spectral information can be used to generate signatures 
of vegetation species and certain stresses (e.g. infestations) on trees. Hyperspectral data offers a unique 
view of the forest cover, available only through remote sensing technology. 
Data requirements
 
Requirements depend on the scale of study to be conducted. For regional reconnaissance mapping, 
moderate area coverage, with a sensor sensitive to differences in forest cover (canopy texture, leaf 
density, spectral reflection) is needed. Multitemporal datasets also contribute phenology information that 
may aid in interpretation by incorporating the seasonal changes of different species. 
For detailed species identification associated with forest stand analysis, very high resolution, 
multispectral data is required. Being able to view the images in stereo helps in the delineation and 
assessment of density, tree height, and species. In general, monitoring biophysical properties of forests 
requires multispectral information and finely calibrated data.  
Canada vs. International
 
Current sources of data used operationally for forest cover typing and species identification applications 
within Canada are aerial photography, orthophotography, Landsat TM, and SPOT data. Landsat data are 
the most appropriate for executing reconnaissance level forest surveys, while aerial photography and 
digital orthophoto are the preferred data source for extracting stand and local inventory information. 
Airphotos are the most appropriate operational data source for stand level measurements including 
species typing. SAR sensors such as RADARSAT are useful where persistent cloud cover limits the 
usefulness of optical sensors. 
Page 190Section 5.3.2 Species Identification & Typing
Canada Centre for Remote Sensing

In humid tropical areas, forest resource assessments and measurements are difficult to obtain because 
of cloudy conditions hindering conventional remote sensing efforts, and difficult terrain impeding ground 
surveys. In this situation, reliability of data acquisition is more crucial than resolution or frequency of 
imaging. An active sensor may be the only feasible source of data, and its reliability will facilitate regular 
monitoring. Radar will serve this purpose, and an airborne sensor is sufficient for high resolution 
requirements such as cover typing. This type of data can be used for a baseline map , while coarser 
resolution data can provide updates to any changes in the baseline. 
 
Case study (example)
 
Inventory Branch, Ministry of Forests, Province of British Columbia, Canada  
This is an example of the operational requirements and procedure for a provincial department involved in 
a number of forestry applications using remote sensing technology. 
The Inventory Branch is responsible for maintaining a database of Crown Land information concerning 
historical, stand, and sustainable forest management information which is used for determining timber 
volumes and annual allowable cuts. The inventory itself is performed every ten years with 1:15,000 scale 
aerial photography, and updated with satellite imagery every two years. 
The Inventory branch requires geocoded, terrain corrected data. For most studies, the branch currently 
buys precision geocoded data, and for large scale mapping projects, they will cut costs by obtaining 
systematic versus precision geocoded data. Further processing is done in-house on workstations. Some 
location data are now being provided by the private sector, conducting field traverses with GPS (global 
positioning system) data. 
Present planimetric accuracy requirements are 20 m, but will be more demanding in the near future. 
Airphotos and orthophotos meet requirements and are good for interpretation but are limited by expense. 
Data continuity is important, as monitoring will be an ongoing operation. TM data for updating maps is 
reasonable in cost and information content for interim monitoring. 
Much of the updating in the Ministry of Forests is done with TM data, either brought digitally into a 
MicroStation workstation to perform heads-up digitizing, or in transparency form with the image overlain 
onto existing maps using a projection device. The Ministry of Forests is presently investigating the 
potential of a number of data sources with various levels of processing applied, and integration 
possibilities to assess accuracy versus cost relationships. 
The Ministry of Forests in B.C. employs an expert system SHERI (System of Hierarchical Expert 
Systems for Resource Inventories) to provide a link between remotely sensed data, GIS and growth and 
yield modelling. The end to end information flow is complete with the generation of final products 
including forest cover maps incorporating planimetric and administrative boundary information. 
Page 191Section 5.3.2 Species Identification & Typing
Canada Centre for Remote Sensing

Case study (example)
 
 
 
Hyperspectral image and recent stem count from hyperspectral imagery 
Forest companies use hyperspectral imagery to obtain stem counts , stand attributes, and for mapping of 
land cover in the forest region of interest. These images depict a false colour hyperspectral image of a 
Douglas fir forest on Vancouver Island at a resolution of 60 cm. The imagery was acquired in the fall of 
1995 by the CASI (Compact Airborne Imaging Spectrometer). Attributes obtained from the imagery (a 
subset is shown) include: 
  
  
  
Page 192Section 5.3.2 Species Identification & Typing
Canada Centre for Remote Sensing

 

Stand Area (hectares) 9.0  
Total number of trees 520  

Tree density (stems/ha) 58  
Crown closure (%) 12.46  

Average tree crown area (sq m) 21.47 
The corresponding land cover map contains the following classes: 

Dark green:
 conifers  

Green:
 lower branches  

Light purple:
 gravel  

Yellow:
 deciduous  

Orange:
 dry ground cover  

Red:
 wet ground cover  

Blue (light):
 water  

Blue (dark):
 deep or clear water  
All imagery courtesy of MacMillan Bloedel and ITRES Research Limited. 
  
Page 193Section 5.3.2 Species Identification & Typing
Canada Centre for Remote Sensing

5.3.3 Burn Mapping 
Background
 
Fire is part of the natural reproductive cycle of many forests revitalizing growth by opening 
seeds and releasing nutrients from the soil. However, fires can also spread quickly and 
threaten settlements and wildlife, eliminate timber supplies, and temporarily damage 
conservation areas. Information is needed to help control the extent of fire, and to assess how 
well the forest is recovering following a burn.  
Why remote sensing?
 
Remote sensing can be used to detect and monitor forest fires and the regrowth following a 
fire. As a surveillance tool, routine sensing facilitates observing remote and inaccessible 
areas, alerting monitoring agencies to the presence and extent of a fire. NOAA AVHRR 
thermal data and GOES meteorological data can be used to delineate active fires and 
remaining "hot-spots" when optical sensors are hindered by smoke, haze, and /or darkness. 
Comparing burned areas to active fire areas provides information as to the rate and direction 
of movement of the fire. Remote sensing data can also facilitate route planning for both 
access to, and escape from, a fire, and supports logistics planning for fire fighting and 
identifying areas not successfully recovering following a burn. 
Years following a fire, updates on the health and regenerative status of an area can be 
obtained by a single image, and multitemporal scenes can illustrate the progression of 
vegetation from pioneer species back to a full forest cover. 
Data requirements
 
While thermal data is best for detecting and mapping ongoing fires, multispectral (optical and 
near-infrared) data are preferred for observing stages of growth and phenology in a previous 
burn area. The relative ages and area extent of burned areas can be defined and delineated, 
and health of the successive vegetation assessed and monitored. Moderate spatial coverage, 
high to moderate resolution, and a low turnaround time are required for burn mapping. On the 
other hand, fire detection and monitoring requires a large spatial coverage, moderate 
resolution and a very quick turnaround to facilitate response. 
Canadian vs. International
 
Requirements for burn mapping are the same, except where cloud cover precludes the used 
of optical images. In this case, radar can be used to monitor previous burn areas, and is 
effective from the second year following a burn, onwards. 
  
  
  
  
  
  
  
Page 194Section 5.3.3 Burn Mapping 
Canada Centre for Remote Sensing

  
  
  
Case study (example) Northwest Territory Burn 
 
Burned and burning forest near Norman Wells, NWT  
In the western Northwest Territories along the Mackenzie River, boreal forest covers much of 
the landscape. Natives rely on the forests for hunting and trapping grounds, and the sensitive 
northern soil and permafrost are protected from erosion by the forest cover. In the early 
1990's a huge fire devastated the region immediately east of the Mackenzie and threatened 
the town of Fort Norman, a native town south of Norman Wells. 
The extent of the burned area, and the areas still burning, can be identified on this NOAA 
scene, as dark regions (A). The lake in the upper right is Great Bear Lake, and the lake to the 
lower right is Great Slave Lake. The distance represented by the yellow line is approximately 
580 km. The course of the Mackenzie River can be seen to the left of these lakes. Fort 
Norman (B) is located at the junction of the Mackenzie River and Great Bear River, leading 
out of Great Bear Lake. At that location, the fire is on both sides of the river. Norman Wells (C) 
is known as an oil producing area, and storage silos, oil rigs, homes, and the only commercial 
airport in that part of the country were threatened. Fires in this region are difficult to access 
because of the lack of roads into the region. Winter roads provide only seasonal access to 
vehicles in this part of Canada. The small population base also makes it difficult to control, let 
alone fight, a fire of this magnitude. 
Haze and smoke reflect a large amount of energy at shorter wavelengths and appear as blue 
on this image. 
Page 195Section 5.3.3 Burn Mapping 
Canada Centre for Remote Sensing

5.4 Geology 
 
Geology involves the study of landforms, structures, and the subsurface, to understand 
physical processes creating and modifying the earth's crust. It is most commonly understood 
as the exploration and exploitation of mineral and hydrocarbon resources, generally to 
improve the conditions and standard of living in society. Petroleum provides gas and oil for 
vehicle transportation, aggregate and limestone quarrying (sand and gravel) provides 
ingredients for concrete for paving and construction, potash mines contribute to fertilizer, coal 
to energy production, precious metals and gems for jewelry, diamonds for drill bits, and 
copper, zinc and assorted minerals for a variety of uses. Geology also includes the study of 
potential hazards such as volcanoes, landslides, and earth quakes, and is thus a critical factor 
for geotechnical studies relating to construction and engineering. Geological studies are not 
limited to Earth - remote sensing has been used to examine the composition and structure of 
other planets and moons. 
Remote sensing is used as a tool to extract information about the land surface structure, 
composition or subsurface, but is often combined with other data sources providing 
complementary measurements. Multispectral data can provide information on lithology or rock 
composition based on spectral reflectance. Radar provides an expression of surface 
topography and roughness, and thus is extremely valuable, especially when integrated with 
another data source to provide detailed relief. 
Remote sensing is not limited to direct geology applications - it is also used to support 
logistics, such as route planning for access into a mining area, reclamation monitoring, and 
generating basemaps upon which geological data can be referenced or superimposed. 
Geological applications of remote sensing include the following: 

surficial deposit / bedrock mapping  

lithological mapping  

structural mapping  

sand and gravel (aggregate) exploration/ exploitation  

mineral exploration  

hydrocarbon exploration  

environmental geology  

geobotany  

baseline infrastructure  
Page 196Section 5.4 Geology
Canada Centre for Remote Sensing


sedimentation mapping and monitoring  

event mapping and monitoring  

geo-hazard mapping  
planetary mapping  
Page 197Section 5.4 Geology
Canada Centre for Remote Sensing

5.4.1 Structural Mapping & Terrain Analysis 
 
Syncline structures (in Pennsylvania) on SAR imagery 
Background
 
Structural geology plays an important role in mineral and hydrocarbon exploration, and 
potential hazard identification and monitoring. 
Structural mapping is the identification and characterization of structural expression. Structures 
include faults, folds, synclines and anticlines and lineaments. Understanding structures is the 
key to interpreting crustal movements that have shaped the present terrain. Structures can 
indicate potential locations of oil and gas reserves by characterizing both the underlying 
subsurface geometry of rock units and the amount of crustal deformation and stress 
experienced in a certain locale. Detailed examination of structure can be obtained by 
geophysical techniques such as seismic surveying. 
Structures are also examined for clues to crustal movement and potential hazards, such as 
earthquakes, landslides, and volcanic activity. Identification of fault lines can facilitate land use 
planning by limiting construction over potentially dangerous zones of seismic activity. 
Why remote sensing?
 
A synoptic view of regional scale is a much 
different perspective than point ground 
observations when trying to 
map structural 
elements
. Remote sensing offers this perspective 
and allows a geologist to examine other reference 
ancillary data simultaneously and synergistically, 
such as geo-magnetic information. 
Certain remote sensing devices offer unique 
information regarding structures, such as in the 
relief expression offered by radar sensors. 
Comparing surface expression to other geological 
information may also allow patterns of association to be recognized. For instance, a rock unit 
may be characterized by a particular radar texture which may also correlate with a high 
magnetic intensity or geochemical anomaly. Remote sensing is most useful in combination, or 
in synergy, with complementary datasets. 
A benefit of side looking radar is that the illumination conditions can be controlled, and the most 
Page 198Section 5.4.1 Structural Mapping & Terrain Analysis
Canada Centre for Remote Sensing

appropriate geometry used for type of terrain being examined. Uniform illumination conditions 
provided by the sun, especially at equatorial latitudes, are usually not conducive to highlighting 
relief features. An extra benefit of airborne SAR sensors is that acquisition missions can be 
customized to orient the flightline parallel to the target orientation, to maximize the illumination 
and shadow effect. 
Data requirements
 
In areas where vegetation cover is dense, it is very difficult to detect structural features. A 
heavy canopy will visually blanket the underlying formation, limiting the use of optical sensors 
for this application. Radar however, is sensitive enough to topographic variation that it is able to 
discern the structural expression reflected or mirrored in the tree top canopy, and therefore the 
structure may be clearly defined on the radar imagery. 
Structural analyses are conducted on regional scales, to provide a comprehensive look at the 
extent of faults, lineaments and other structural features. Geologic features are typically large 
(kilometre scale) and applications therefore require small-scale imagery to cover the extent of 
the element of interest. Aerial photos can be used in temperate areas where large-scale 
imagery is required, particularly to map potential geohazards (e.g. landslides). 
Structural mapping applications generally are 
not time sensitive (other than for project 
deadlines!) and so a fast turnaround is not 
required. Unless a time series analysis of 
crustal deformation is being conducted, 
frequency of imaging is not a critical issue 
either. The key factor for remotely sensed 
data are that they provide some information 
on the spatial distribution and surficial relief of 
the structural elements. Radar is well suited to 
these requirements with its side-looking 
configuration. Imaging with shallow incidence angles enhances surficial relief and structure. 
Shadows
 can be used to help define the structure height and shape, and thus increasing the 
shadow effect, while shallow incidence angles may benefit structural analysis. 
Canadian vs. International requirements
 
Requirements for remote sensing parameters of structural features are fairly constant 
throughout the world. Those areas of persistent cloud cover will benefit from radar imaging, 
while areas at very high or low latitudes can benefit from low sun angles to highlight subtle 
relief for optical imaging. 
  
  
  
  
  
  
Page 199Section 5.4.1 Structural Mapping & Terrain Analysis
Canada Centre for Remote Sensing

  
  
Case study (example): Port Coldwell, Ontario: A case for SAR integration
 
  
The structural information provided by radar complements other spatial datasets. When 
integrated together, SAR and spatial geological datasets provide a valuable source of 
geological information. In this example, radioactivity information of the area of Port Coldwell, 
Ontario, was provided by an 
airborne gamma-ray spectrometry survey
, which collected 
potassium, thorium, and uranium readings. This data is informative, but it is difficult to put the 
information into perspective without the layout and recognizable characteristics of the 
landscape. 
Airborne SAR image data
 was also acquired of the same region. The SAR image 
is quite interesting in terms of micro-topography and structure, but does not provide any other 
geo-technical information about the terrain. These two datasets were integrated, using an IHS 
approach (intensity-hue- saturation to replace the conventional red-green-blue colour display). 
The airborne gamma-ray spectrometry data are coded as the hue and saturation information, 
while the SAR terrain information is coded as the intensity information. The resulting 
integrated image
 is an excellent display of structural, relief, and natural radioactivity 
information, allowing a geologist to have a comprehensive view of the data with only one 
image. 
 
Integrated image (natural radioactivity and SAR) of Port Coldwell 
Page 200Section 5.4.1 Structural Mapping & Terrain Analysis
Canada Centre for Remote Sensing

5.4.2 Geologic Unit Mapping 
Background
 
Mapping geologic units consists primarily of identifying physiographic units and determining 
the rock lithology or coarse stratigraphy of exposed units. These units or formations are 
generally described by their age, lithology and thickness. Remote sensing can be used to 
describe lithology by the colour, weathering and erosion characteristics (whether the rock is 
resistant or recessive), drainage patterns, and thickness of bedding. 
Unit mapping is useful in oil and mineral exploration, since these resources are often 
associated with specific lithologies. Structures below the ground, which may be conducive to 
trapping oil or hosting specific minerals, often manifest themselves on the Earth's surface. By 
delineating the structures and identifying the associated lithologies, geologists can identify 
locations that would most feasibly contain these resources, and target them for exploration. 
Bedrock mapping is critical to engineering, construction, and mining operations, and can play 
a role in land use and urban planning. Understanding the distribution and spatial relationships 
of the units also facilitates interpretation of the geologic history of the Earth's surface. 
In terms of remote sensing, these "lithostratigraphic" units can be delineated by their spectral 
reflectance signatures, by the structure of the bedding planes, and by surface morphology. 
Why remote sensing?
 
Remote sensing gives the overview required to 1) construct regional unit maps, useful for 
small scale analyses, and planning field traverses to sample and verify various units for 
detailed mapping; and 2) understand the spatial distribution and surface relationships 
between the units. VIR remote sensing provides the multispectral information relating to the 
composition of the unit, while radar can contribute textural information. Multiple data sources 
can also be integrated to provide a comprehensive view of the lithostratigraphy. 
Stereo imagery can also facilitate delineation and identification of units by providing a three 
dimensional view of the local relief. Some rocks are resistant to erosion, whereas others 
erode easily. Identification elements such as weathering manifestations may be apparent on 
high or medium resolution imagery and airphotos. 
Images or airphotos can be taken into the field and used as basemaps for field analysis. 
Data requirements
 
Two different scales of mapping require slightly different imaging sources and parameters. 
1.   For site specific analysis, airphotos provide a high resolution product that can provide 
information on differential weathering, tone, and microdrainage. Photos may be easily 
viewed in stereo to assess relief characteristics.  
2.   Regional overviews require large coverage area and moderate resolution. An excellent 
data source for regional applications is a synergistic combination of radar and optical 
images to highlight terrain and textural information.  
In either case, frequency of imaging is not an issue since in many cases the geological 
features of interest remain relatively static. Immediate turnaround is also not critical. 
Canada vs. International
 
Requirements for this application do not differ significantly around the world. One of the 
Page 201Section 5.4.2 Geologic Unit Mapping
Canada Centre for Remote Sensing

biggest problems faced by both temperate and tropical countries is that dense forest covers 
much of the landscape. In these areas, geologists can use remote sensing to infer underlying 
lithology by the condition of vegetation growing above it. This concept is called "geobotany". 
The underlying principle is that the mineral and sedimentary constituents of the bedrock may 
control or influence the condition of vegetation growing above. 
In reality, the topography, structure, surficial 
materials, and vegetation combine to facilitate 
geologic unit interpretation and mapping. Optimal 
use of 
remote sensing data
 therefore, is one that 
integrates different sources of image data, such as 
optical and radar, at a scale appropriate to the 
study. 
  
Image example
 
Even once 
geological unit maps
 are created, they 
can still be presented more informatively by 
encompassing the textural information provided by 
SAR data. A basic geological unit map can be made 
more informative by adding textural and structural 
information. In this example of the Sudbury, Ontario 
region, an integration transform was used to merge 
the map data (bedrock and structural geology 
information, 1992) with the SAR image data. The 
resulting image
 can be used on a local or regional 
scale to detect structural trends within and between 
units. The areas common to each image are outlined 
in black. 
  
Geological map and SAR data integrated 
Page 202Section 5.4.2 Geologic Unit Mapping
Canada Centre for Remote Sensing

5.5 Hydrology 
 
Hydrology is the study of water on the Earth's surface, whether flowing above ground, frozen 
in ice or snow, or retained by soil. Hydrology is inherently related to many other applications o
f 
remote sensing, particularly forestry, agriculture and land cover, since water is a vital 
component in each of these disciplines. Most hydrological processes are dynamic, not only 
between years, but also within and between seasons, and therefore require frequent 
observations. Remote sensing offers a synoptic view of the spatial distribution and dynamics 
of hydrological phenomena, often unattainable by traditional ground surveys. Radar has 
brought a new dimension to hydrological studies with its active sensing capabilities, allowing 
the time window of image acquisition to include inclement weather conditions or seasonal or 
diurnal darkness. 
 
Examples of hydrological applications include: 

wetlands mapping and monitoring,  

soil moisture estimation,  

snow pack monitoring / delineation of extent,  

measuring snow thickness,  

determining snow-water equivalent,  

river and lake ice monitoring,  

flood mapping and monitoring,  

glacier dynamics monitoring (surges, ablation)  

river /delta change detection  

drainage basin mapping and watershed modelling  
irrigation canal leakage detection  

irrigation scheduling  
Page 203Section 5.5 Hydrology
Canada Centre for Remote Sensing

5.5.1 Flood Delineation & Mapping 
 
Background
 
A natural phenomenon in the hydrological cycle is flooding. Flooding is necessary to replenish 
soil fertility by periodically adding nutrients and fine grained sediment; however, it can also 
cause loss of life, temporary destruction of animal habitat and permanent damage to urban 
and rural infrastructure. Inland floods can result from disruption to natural or man-made dams, 
catastrophic melting of ice and snow (jökulhlaups in Iceland), rain, river ice jams and / or 
excessive runoff in the spring.  
Why remote sensing?
 
Remote sensing techniques are used to measure and monitor the areal extent of the flooded 
areas , to efficiently target rescue efforts and to provide quantifiable estimates of the amount 
of land and infrastructure affected. Incorporating remotely sensed data into a GIS allows for 
quick calculations and assessments of water levels, damage, and areas facing potential flood 
danger. Users of this type of data include flood forecast agencies, hydropower companies, 
conservation authorities, city planning and emergency response departments, and insurance 
companies (for flood compensation). The identification and mapping of floodplains, 
abandoned river channels, and meanders are important for planning and transportation 
routing. 
Data requirements
 
Many of these users of remotely sensed data need the information during a crisis and 
therefore require "near-real time turnaround". Turnaround time is less demanding for those 
involved in hydrologic modelling, calibration/validation studies, damage assessment and the 
planning of flood mitigation. Flooding conditions are relatively short term and generally occur 
during inclement weather, so optical sensors, although typically having high information 
content for this purpose, can not penetrate through the cloud cover to view the flooded region 
below. For these reasons, active SAR sensors are particularly valuable for flood monitoring. 
RADARSAT in particular offers a high turnaround interval, from when the data is acquired by 
the sensor, to when the image is delivered to the user on the ground. The land / water 
Page 204Section 5.5.1 Flood Delineation & Mapping
Canada Centre for Remote Sensing

interface is quite easily discriminated with SAR data, allowing the flood extent to be delineated 
and mapped. The SAR data is most useful when integrated with a pre-flood image, to 
highlight the flood-affected areas, and then presented in a GIS with cadastral and road 
network information. 
Canada vs. International
 
Requirements for this application are similar the world over. Flooding can affect many areas o
f 
the world, whether coastal or inland, and many of the conditions for imaging are the same. 
Radar provides excellent water/land discrimination and is reliable for imaging despite most 
atmospheric limitations. 
Case study (example)
: 
RADARSAT MAPS THE MANITOBA SEA: 
THE FLOODS OF 1997 
In 1997, the worst Canadian flood of the 20th century inundated prairie fields and towns in the 
states of Minnesota, North Dakota, and the Canadian province of Manitoba. By May 5th, 
25,000 residents of Manitoba had been evacuated from their homes, with 10,000 more on 
alert. The watershed of the Red River, flowing north from the United States into Canada, 
received unusually high winter snowfalls and heavy precipitation in April. These factors, 
combined with the northward flow into colder ground areas and very flat terrain beyond the 
immediate floodplain, caused record flooding conditions, with tremendous damage to homes 
and property, in addition to wildlife and livestock casualties. For weeks emergency response 
teams, area residents, and the media monitored the extent of the flood, with some input from 
remote sensing techniques. It is impossible to imagine the scale of flooding from a ground 
perspective, and even video and photographs from aircraft are unable to show the full extent. 
Spectacular satellite images however, have shown the river expand from a 200 m wide 
ribbon, to a body of water measuring more than 40 km across. Towns protected by sand-bag 
dikes, were dry islands in the midst of what was described as the "Red Sea". Many other 
towns weren't as fortunate, and home and business owners were financially devastated by 
their losses. 
Insurance agents faced their own flood of claims for property, businesses, and crops ruined or 
damaged by the Red River flood. To quickly assess who is eligible for compensation, the 
insurance companies can rely on remotely sensed data to delineate the flood extent, and GIS 
databases to immediately identify whose land was directly affected. City and town planners 
could also use the images to study potential locations for future dike reinforcement and 
construction, as well as residential planning. 
  
  
  
  
Page 205Section 5.5.1 Flood Delineation & Mapping
Canada Centre for Remote Sensing

  
Both NOAA-AVHRR and RADARSAT images 
captured the scale and extent of the flood. The 
AVHRR sensors onboard the NOAA satellites 
provided 
small-scale views
 of the entire flood area 
from Lakes Manitoba and Winnipeg south to the 
North Dakota - South Dakota border. Some of the 
best images are those taken at night in the thermal 
infrared wavelengths, where the cooler land appears 
dark and the warmer water (A) appears white. 
Manmade dikes, such as the Brunkild Dike (B), were 
quickly built to prevent the flow of water into southern 
Winnipeg. Dikes are apparent on the image as very regular straight boundaries between the 
land and floodwater. Although the city of Winnipeg (C) is not clearly defined, the Winnipeg 
floodway (D) immediately to the east, paralleling the Red River at the northeast end of the 
flood waters, is visible since it is full of water. The floodway was designed to divert excess 
water flow from the Red River outside of the city limits. In this case, the volume of water was 
simply too great for the floodway to carry it all, and much of the flow backed up and spread 
across the prairie. 
RADARSAT
 provided some excellent views of the 
flood, because of its ability to image in darkness or 
cloudy weather conditions, and its sensitivity to the 
land/water differences. In this image, the flood water 
(A) completely surrounds the town of Morris (B), 
visible as a bright patch within the dark flood water. 
The flooded areas appear dark on radar imagery 
because very little of the incident microwave energy 
directed toward the smooth water surface returns 
back to the sensor. The town however, has many 
angular (corner) reflectors primarily in the form of 
buildings, which cause the incident energy to 
"bounce" back to the sensor. 
Transportation routes can still be observed. A railroad, on its raised bed, can be seen amidst 
the water just above (C), trending southwest - northeast. Farmland relatively unaffected by the 
flood (D) is quite variable in its backscatter response. This is due to differences in each field's 
soil moisture and surface roughness. 
Page 206Section 5.5.1 Flood Delineation & Mapping
Canada Centre for Remote Sensing

5.5.2 Soil Moisture 
Background
 
Soil moisture is an important measure in determining crop yield potential in Canada and in 
drought-affected parts of the world (Africa) and for watershed modelling. The moisture content 
generally refers to the water contained in the upper 1-2m of soil, which can potentially 
evaporate into the atmosphere. Early detection of dry conditions which could lead to crop 
damage, or are indicative of potential drought, is important for amelioration efforts and 
forecasting potential crop yields, which in turn can serve to warn farmers, prepare 
humanitarian aid to affected areas, or give international commodities traders a competitive 
advantage. Soil moisture conditions may also serve as a warning for subsequent flooding if 
the soil has become too saturated to hold any further runoff or precipitation. Soil moisture 
content is an important parameter in watershed modelling that ultimately provides information 
on hydroelectric and irrigation capacity. In areas of active deforestation, soil moisture 
estimates help predict amounts of run-off, evaporation rates, and soil erosion. 
Why remote sensing? Remote sensing offers a means of measuring soil moisture across a 
wide area instead of at discrete point locations that are inherent with ground measurements. 
RADAR is effective for obtaining qualitative imagery and quantitative measurements, because 
radar backscatter response is affected by soil moisture, in addition to topography, surface 
roughness and amount and type of vegetative cover. Keeping the latter elements static, 
multitemporal radar images can show the change in soil moisture over time. The radar is 
actually sensitive to the soil's dielectric constant, a property that changes in response to the 
amount of water in the soil. 
Users of soil moisture information from remotely sensed data include agricultural marketing 
and administrative boards, commodity brokers, large scale farming managers, conservation 
authorities, and hydroelectric power producers. 
Data requirements
 
Obviously, a sensor must be sensitive to moisture conditions, and radar satisfies this 
requirement better than optical sensors. Frequent and regular (repeated) imaging is required 
during the growing season to follow the change in moisture conditions, and a quick turnaround 
is required for a farmer to respond to unsuitable conditions (excessive moisture or dryness) in 
a timely manner. Using high resolution images, a farmer can target irrigation efforts more 
accurately. Regional coverage allows an overview of soil and growing conditions of interest to 
agricultural agencies and authorities. 
Canada vs. International
 
Data requirements to address this application are similar around the world, except that higher 
resolution data may be necessary in areas such as Europe and Southeast Asia, where field 
and land parcel sizes are substantially smaller than in North America. 
Case Study (example)
 
Rainfall distribution , Melfort, Saskatchewan, Canada
  
As with most Canadian prairie provinces, the topography of Saskatchewan is quite flat. The 
region is dominated by black and brown chernozemic soil characterized by a thick dark 
organic horizon, ideal for growing cereal crops such as wheat. More recently, canola has been 
introduced as an alternative to cereal crops. 
Page 207Section 5.5.2 Soil Moisture
Canada Centre for Remote Sensing

 
Shown here is a radar image acquired July 7, 1992 by the European Space Agency (ESA) 
ERS-1 satellite. This synoptic image of an area near Melfort, Saskatchewan details the effects 
of a localized precipitation event on the microwave backscatter recorded by the sensor. Areas 
where precipitation has recently occurred can be seen as a bright tone (bottom half) and 
those areas unaffected by the event generally appear darker (upper half). This is a result of 
the complex dielectric constant which is a measure of the electrical properties of surface 
materials. The dielectric property of a material influences its ability to absorb microwave 
energy, and therefore critically affects the scattering of microwave energy. 
The magnitude of the radar backscatter is proportional to the dielectric constant of the 
surface. For dry, naturally occurring materials, this is in the range of 3 - 8 , and may reach 
values as high as 80 for wet surfaces. Therefore the amount of moisture in the surface 
material directly affects the amount of backscattering. For example, the lower the dielectric 
constant, the more incident energy is absorbed, the darker the object will be on the image. 
Page 208Section 5.5.2 Soil Moisture
Canada Centre for Remote Sensing

5.6 Sea Ice 
 
For people living in northern environments, ice is a common phenomenon that affects our 
local activities. Most of us however, don't consider its larger regional or global implications. Ice 
covers a substantial part of the Earth's surface and is a major factor in commercial shipping 
and fishing industries, Coast Guard and construction operations, and global climate change 
studies. Polar sea ice seasonally covers an even larger area, roughly equal in size to the 
North American continent, 25 million km². 
Its extensive distribution means that sea ice plays a large role in the albedo of the earth. 
Albedo is a term referring to the measure of reflectivity of the Earth's surface. Ice and snow 
are highly reflective and changes in their distribution would affect how much solar energy is 
absorbed by the earth. Under warming conditions, the ice would melt, and less incoming 
energy would be reflected, thereby potentially increasing the warming trend. The opposite 
may also be true - an increase of ice due to cooler conditions would reflect even more of the 
incoming solar energy, potentially propagating even colder conditions. Of course these 
potential changes in sea ice distribution are of concern to scientists studying global climate 
change, as are sea ice interactions with the ocean and atmosphere. 
During winter in the northern hemisphere, ice creates a substantial barrier to both lake and 
ocean going vessels trying to reach ports or navigating along coastlines. Ice floes, pack ice 
and icebergs create potential hazards to navigation, while landfast ice hinders access to the 
shore. Ice breakers are often used to create routes for ships to follow from the open water to 
their ports. In Canada, two important locations for this type of operation are the Gulf of St. 
Lawrence /Great Lakes and the Canadian Arctic. The Gulf is the main route for international 
cargo vessels headed for Montreal and Québec, and is affected by ice through the winter and 
spring. Canada's Arctic is home to mineral and hydrocarbon reserves that require shipping for 
construction equipment, supplies, and transport of resources to refineries and populated 
markets. In addition, the main method of re-supply for northern communities is by sea. In both 
areas, information regarding ice conditions, type, concentration and movement are required. 
To address these demands, ice analysis charts, daily ice hazard bulletins, seasonal forecasts, 
and tactical support for observation are provided. In Canada, the Canadian Ice Service is 
responsible for acquiring and distributing this information and appropriate products. They also 
maintain an ice information archive which contains useful data for environmental impact 
assessments, risk assessment, short-term and seasonal route planning for ships, efficient 
resource transportation and infrastructure development. 
Page 209Section 5.6 Sea Ice
Canada Centre for Remote Sensing

Remote sensing data can be used to identify and map different ice types, locate leads (large 
navigable cracks in the ice), and monitor ice movement. With current technology, this 
information can be passed to the client in a very short timeframe from acquisition. Users of 
this type of information include the Coast Guard, port authorities, commercial shipping and 
fishing industries, ship builders, resource managers (oil and gas / mining), infrastructure 
construction companies and environmental consultants, marine insurance agents, scientists, 
and commercial tour operators. 
Examples of sea ice information and applications include: 

ice concentration  

ice type / age /motion  

iceberg detection and tracking  

surface topography  

tactical identification of leads: navigation: safe shipping routes/rescue  
ice condition (state of decay)  

historical ice and iceberg conditions and dynamics for planning purposes  

wildlife habitat  

pollution monitoring  
     
meteorological / global change research  
Page 210Section 5.6 Sea Ice
Canada Centre for Remote Sensing

5.6.1 Ice type and concentration 
 
Background
 
Ships navigating through high latitude seas (both northern and southern) are often faced with 
obstacles of pack ice and moving ice floes. Ice breakers are designed to facilitate travel in 
these areas, but they require knowledge about the most efficient and effective route through 
the ice. It is important to know the extent of the ice, what type of ice it is, and the 
concentration and distribution of each type. This information is also valuable for offshore 
exploration and construction activities, as well as coastal development planning. 
Ice isn't simply ice!
 
Sea ice isn't a uniform, homogeneous unit. What appears to be a single cover of ice can vary 
in roughness, strength, salinity, and thickness. Pack ice and ice floes consist of assemblages 
of different ice types patchworked together, intersected by dynamic leads or cracks. Ice is 
usually defined by its age - either as new, first-year or multi-year ice. New ice is smooth and 
relatively thin (5-30 cm)and provides the least resistance to ice breakers . First year ice is 
older and thicker than new ice (30-200cm) and can pose a significant hazard to all vessels, 
including icebreakers. When deformed into rubble fields and ridges, first year ice types can 
become impassable. Ice that survives into a second and later years, generally becomes 
thicker (>2m) and declines in salinity, increasing the internal strength. This ice is a dangerous 
hazard to ships and off-shore structures. Ice charts are maps of different ice types and 
concentration of ice, which are distributed to those working in marine environments where ice 
affects their operations. 
Why remote sensing?
 
Observing ice conditions is best from a ground perspective, but this doesn't allow for 
determining the extent or distribution of the ice. Remote sensing from airborne or spaceborne 
sensors provides this very valuable view. The areas of ice can be easily mapped from an 
image, and when georeferenced, provide a useful information source. Remote sensing 
technology is capable of providing enough information for an analyst to identify ice type (and 
thus infer ice thickness), and from this data, ice charts can be created and distributed to those 
who require the information. 
Active radar is an excellent sensor to observe ice conditions because the microwave energy 
and imaging geometry combines to provide measures of both surface and internal 
characteristics. Backscatter is influenced by dielectric properties of the ice (in turn dependent 
Page 211Section 5.6.1 Ice type and concentration
Canada Centre for Remote Sensing

on salinity and temperature), surface factors (roughness, snow cover) and internal geometry / 
microstructure. Surface texture is the main contributor to the radar backscatter and it is this 
characteristic which is used to infer ice age and thickness. New ice tends to have a low return 
and therefore dark appearance on the imagery due to the specular reflection of incident 
energy off the smooth surface. First year ice can have a wide variety of brightness depending 
on the degree of roughness caused by ridging and rubbing. Multi-year ice has a bright return 
due to diffuse scattering from its low salinity, and porous structure. 
Coarse resolution optical sensors such as NOAA's AVHRR provide an excellent overview of 
pack ice extent if atmospheric conditions are optimal (resolution = 1km). 
Passive microwave sensing also has a role in sea ice applications. Objects (including people!) 
emit small amounts of microwave radiation, which can be detected by sensors. Sea ice and 
water emit substantially different amounts of radiation, so it is relatively easy to delineate the 
interface between the two. The SSM/I onboard the shuttle collected data in this manner. The 
main drawback of passive microwave sensors is their poor spatial resolution (approx. 25km) 
which is too coarse for tactical ice navigation.  
Data requirements
 
Ocean ice occurs in extreme latitudes - the high Arctic and Antarctica. But ice also covers 
prime sea and lake shipping routes in northern countries, particularly Canada, Russia, Japan 
and northern European and Scandinavian countries. High latitude areas experience low solar 
illumination conditions in the winter when the ice is at a maximum. This has traditionally 
hindered remote sensing effectiveness, until the operationalization of radar sensors. The all 
weather / day - night, capabilities of SAR systems, makes radar remote sensing the most 
useful for ice type and concentration mapping. 
To provide sufficient information for navigation purposes, the data must be captured 
frequently and must be processed and ready for use within a very short time frame. High 
resolution data covering 1-50 km is useful for immediate ship navigation, whereas coarse 
resolution (1-50km), large area coverage (100 - 2000km²) images are more useful for regional 
strategic route planning. For navigation purposes, the value of this information has a limited 
time window. However, for playing a role in increasing our knowledge about climate dynamics 
and ice as an indicator of global climate change, the data has long term value. 
RADARSAT has orbital parameters and a radar sensor designed to address the demands of 
the ice applications community. The Arctic area is covered once a day by RADARSAT and 
systems are in place to efficiently download the data direct from the ground processing station 
right to the vessel requiring the information, in a time frame of four hours. Airborne radar 
sensors are also useful for targeting specific areas and providing high resolution imagery 
unavailable from commercial spaceborne systems. Airborne radar is more expensive but has 
the benefit of directly targetting the area of interest, which may be important for time critical 
information, such as tactical navigation in dynamic ice. Winter is the preferred season for 
acquiring radar scenes for ice typing. Melting and wet conditions reduce the contrast between 
ice types which makes information extraction more difficult. 
Future remote sensing devices are planned to provide comprehensive measurements of sea 
ice extent.  
Page 212Section 5.6.1 Ice type and concentration
Canada Centre for Remote Sensing

5.6.2 Ice motion 
Background
 
Ice moves quickly and sometimes unpredictably in response to ocean currents and wind. Ice 
floes can move like tectonic plates, sometimes breaking apart like a rift valley or colliding in a 
style similar to the Indian and Asian plates, creating a smaller version of the Himalayan 
Mountains - a series of ridges and blocky ice rubble. Vessels can be trapped or damaged by 
the pressure resulting from these moving ice floes. Even offshore structures can be damaged 
by the strength and momentum of moving ice. For these reasons it is important to understand 
the ice dynamics in areas of construction or in the vicinity of a shipping/fishing route.  
Why remote sensing?
 
Remote sensing gives a tangible measure of direction and rate of ice movement through 
mapping and change detection techniques. Ice floes actually have individual morphological 
characteristics (shape, structures) that allow them to be distinguished from one another. The 
floes can be mapped and their movement monitored to facilitate in planning optimum shipping 
routes, to predict the effect of ice movement on standing structures (bridges, platforms).Users 
of this type of information include the shipping, fishing, and tourism industries, as well as 
engineers involved in offshore platform and bridge design and maintenance. 
Data requirements
 
Monitoring of ice movement requires frequent and reliable imaging. The revisit interval must 
be frequent enough to follow identifiable features before tracking becomes difficult due to 
excessive movement or change in appearance. Active microwave sensing (radar) provides a 
reliable source of imaging under all weather and illumination conditions. RADARSAT provides 
this type of sensor and is a spaceborne platform, which is advantageous for routine imaging 
operations. The orbital path ensures that Arctic areas are covered daily which meets the 
requirement for frequent imaging. 
The resolution and imaging frequency requirements for ice motion tracking vary with the size 
of floes and the ice dynamics in a region. In areas of large slow moving floes (e.g. Beaufort 
Sea), 1km resolution data over 10 day intervals is adequate. In dynamic marginal ice zones 
(e.g. Gulf of St. Lawrence), 100m resolution data over 12-24 hr intervals is required. 
Case study (example)
 
The significance of the force and potential effect of ice movement was brought to light recently 
with the design and construction of the Confederation Bridge, a 13km link from Prince Edward 
Island, in Canada's Maritimes, across Northumberland Strait to New Brunswick on Canada's 
mainland. Crossing a strait that endures ice floes moving in response to winds, currents and 
tides through a narrow arm of the Gulf of St. Lawrence, the bridge will have to withstand 
tremendous forces from moving ice impacting its supports. 
"More effort was spent related to the ice engineering aspect of this bridge 
than probably on any other [similar] structure that has ever been built" Dr. 
Gus Cammaert 
Ice floes in Northumberland Strait are dynamic due to oceanic and atmospheric forces, yet 
constricted in their movement. The result is compression collisions creating large rubbly ice 
masses that extend vertically above and below the water level up to 20 m1 (each direction). 
These ice masses have the potential of critically damaging any structure impeding its 
movement back and forth in the strait. The design and engineering of the bridge had to take 
Page 213Section 5.6.2 Ice motion
Canada Centre for Remote Sensing

into account both the thickness and actual constant movement of the ice. Ice information 
archived at the Canadian Ice Service contributed to the understanding of the ice dynamics in 
the strait, and its tensile properties, critical for setting engineering parameters.  
 
During construction, a radar image of the bridge site was obtained to observe the impact of 
the bridge supports on the flow of ice around the site. Due to the design of the supports, which 
are cone-shaped at the waterline to help bend and break the ice, the ice cracked and flowed 
around the supports. This is one image where ice movement can be inferred from a single 
image and does not require multi-temporal scenes. In the image, the ice can be seen flowing 
from bottom to the top
 with the wakes of rubble created by the bridge supports clearly 
visible. 
Remote sensing will be used to monitor the effect of the bridge on the ice movement and 
ensure that ice build up isn't occurring beyond expectations. As exemplified in the image, the 
bridge will have an impact on the ice dynamics, by breaking up large floes into smaller pieces 
which may accumulate on the shore in piles. This effect will be monitored, as will any 
subsequent effects on microclimate, which might affect the agriculture or fishing industries of 
PEI1. 
Bridge web site:
 
Reference: Thurston, H., 1997. Strait Across, Canadian Geographic, Vol. 117, No.2, March-
April 1997. 
For more information on ice applications: 
Canadian Ice Service, Environment Canada: 
http://ice-glaces.ec.gc.ca/App/WsvPageDsp.cfm?ID=1&Lang=eng  
Page 214Section 5.6.2 Ice motion
Canada Centre for Remote Sensing

5.7 Land Cover & Land Use 
 
Although the terms land cover and land use are often used interchangeably, their actual 
meanings are quite distinct. Land cover refers to the surface cover on the ground, whether 
vegetation, urban infrastructure, water, bare soil or other. Identifying, delineating and mapping 
land cover is important for global monitoring studies, resource management, and planning 
activities. Identification of land cover establishes the baseline from which monitoring activities 
(change detection) can be performed, and provides the ground cover information for baseline 
thematic maps. 
Land use refers to the purpose the land serves, for example, recreation, wildlife habitat, or 
agriculture. Land use applications involve both baseline mapping and subsequent monitoring, 
since timely information is required to know what current quantity of land is in what type of use 
and to identify the land use changes from year to year. This knowledge will help develop 
strategies to balance conservation, conflicting uses, and developmental pressures. Issues 
driving land use studies include the removal or disturbance of productive land, urban 
encroachment, and depletion of forests. 
It is important to distinguish this difference between land cover and land use, and the 
information that can be ascertained from each. The properties measured with remote sensing 
techniques relate to land cover, from which land use can be inferred, particularly with ancillary 
data or a priori knowledge. 
Land cover / use studies are multidisciplinary in nature, and thus the participants involved in 
such work are numerous and varied, ranging from international wildlife and conservation 
foundations, to government researchers, and forestry companies. Regional (in Canada, 
provincial) government agencies have an operational need for land cover inventory and land 
use monitoring, as it is within their mandate to manage the natural resources of their 
respective regions. In addition to facilitating sustainable management of the land, land cover 
and use information may be used for planning, monitoring, and evaluation of development, 
industrial activity, or reclamation. Detection of long term changes in land cover may reveal a 
response to a shift in local or regional climatic conditions, the basis of terrestrial global 
monitoring. 
Ongoing negotiations of aboriginal land claims have generated a need for more stringent 
Page 215Section 5.7 Land Cover & Land Use
Canada Centre for Remote Sensing

knowledge of land information in those areas, ranging from cartographic to thematic 
information. 
Resource managers involved in parks, oil, timber, and mining companies, are concerned with 
both land use and land cover, as are local resource inventory or natural resource agencies. 
Changes in land cover will be examined by environmental monitoring researchers, 
conservation authorities, and departments of municipal affairs, with interests varying from tax 
assessment to reconnaissance vegetation mapping. Governments are also concerned with 
the general protection of national resources, and become involved in publicly sensitive 
activities involving land use conflicts. 
Land use applications of remote sensing include the following:  

natural resource management  

wildlife habitat protection  

baseline mapping for GIS input  

urban expansion / encroachment  

routing and logistics planning for seismic / exploration / resource extraction activities  

damage delineation (tornadoes, flooding, volcanic, seismic, fire)  

legal boundaries for tax and property evaluation  

target detection - identification of landing strips, roads, clearings, bridges, land/water 
interface  
Page 216Section 5.7 Land Cover & Land Use
Canada Centre for Remote Sensing

5.7.1 Land Use Change (Rural / Urban) 
Background
 
As the Earth's population increases and national economies continue to move away from 
agriculture based systems, cities will grow and spread. The urban sprawl often infringes upon 
viable agricultural or productive forest land, neither of which can resist or deflect the 
overwhelming momentum of urbanization. City growth is an indicator of industrialization 
(development) and generally has a negative impact on the environmental health of a region. 
The change in land use from rural to urban is monitored to estimate populations, predict and 
plan direction of urban sprawl for developers, and monitor adjacent environmentally sensitive 
areas or hazards. Temporary refugee settlements and tent cities can be monitored and 
population amounts and densities estimated. 
Analyzing agricultural vs. urban land use is important for ensuring that development does not 
encroach on valuable agricultural land, and to likewise ensure that agriculture is occurring on 
the most appropriate land and will not degrade due to improper adjacent development or 
infrastructure. 
Why remote sensing?
 
With multi-temporal analyses, remote sensing gives a unique perspective of how cities evolve. 
The key element for mapping rural to urban landuse change is the ability to discriminate 
between rural uses (farming, pasture forests) and urban use (residential, commercial, 
recreational). Remote sensing methods can be employed to classify types of land use in a 
practical, economical and repetitive fashion, over large areas. 
Data requirements
 
Requirements for rural / urban change detection and mapping applications are 1) high 
resolution to obtain detailed information, and 2) multispectral optical data to make fine 
distinction among various land use classes. 
Sensors operating in the visible and infrared portion of the spectrum are the most useful data 
sources for land use analysis. While many urban features can be detected on radar and other 
imagery (usually because of high reflectivity), VIR data at high resolution permits fine 
distinction among more subtle land cover/use classes. This would permit a confident 
identification of the urban fringe and the transition to rural land usage. Optical imagery 
acquired during winter months is also useful for roughly delineating urban areas vs. non-
urban. Cities appear in dramatic contrast to smooth textured snow covered fields. 
Page 217Section 5.7.1 Land Use Change (Rural / Urban)
Canada Centre for Remote Sensing

Radar sensors also have some use for all urban/rural delineation applications, due to the 
ability of the imaging geometry to enhance anthropogenic features, such as buildings, in the 
manner of corner reflectors. The optimum geometric arrangement between the sensor and 
urban area is an orientation of linear features parallel to the sensor movement, perpendicular 
to the incoming incident EM energy. 
Generally, this type of application does not require a high turnaround rate, or a frequent 
acquisition schedule. 
Canada vs. International
 
 
Throughout the world, requirements for rural/urban delineation will differ according to the 
prevalent atmospheric conditions. Areas with frequently cloudy skies may require the 
penetrating ability of radar, while areas with clear conditions can use airphoto, optical satellite 
or radar data. While the land use practices for both rural and urban areas will be significantly 
different in various parts of the world, the requirement for remote sensing techniques to be 
applied (other than the cloud-cover issue) will be primarily the need for fine spatial detail. 
Case study (example)
 
This image of land cover change provides 
multitemporal information in the form of urban growth 
mapping. The colours represent urban land cover for 
two different years. The green delineates those 
areas of urban cover in 1973, and the pink, urban 
areas for 1985. This image dramatically shows the 
change in expansion of existing urban areas, and the 
clearing of new land for settlements over a 12 year 
period. This type of information would be used for 
upgrading government services, planning for 
increased transportation routes, etc. 
Page 218Section 5.7.1 Land Use Change (Rural / Urban)
Canada Centre for Remote Sensing

5.7.2 Land Cover / Biomass Mapping 
Background
 
Land cover mapping serves as a basic inventory of land resources for all levels of 
government, environmental agencies, and private industry throughout the world. Whether 
regional or local in scope, remote sensing offers a means of acquiring and presenting land 
cover data in a timely manner. Land cover includes everything from crop type, ice and snow, 
to major biomes including tundra, boreal or rainforest, and barren land. 
Regional land cover mapping is performed by almost anyone who is interested in obtaining an 
inventory of land resources, to be used as a baseline map for future monitoring and land 
management. Programs are conducted around the world to observe regional crop conditions 
as well as investigating climatic change on a regional level through biome monitoring. 
Biomass mapping provides quantifiable estimates of vegetation cover, and biophysical 
information such as leaf area index (LAI), net primary productivity (NPP) and total biomass 
accumulations (TBA) measurements - important parameters for measuring the health of our 
forests, for example. 
Why remote sensing?
 
There is nothing as practical and cost efficient for 
obtaining a timely regional overview of land cover 
than remote sensing techniques. Remote sensing 
data are capable of capturing changes in plant 
phenology (growth) throughout the growing season, 
whether relating to changes in chlorophyll content 
(detectable with VIR) or structural changes (via 
radar). For regional mapping, continuous spatial 
coverage over large areas is required. It would be 
difficult to detect regional trends with point source 
data. Remote sensing fulfills this requirement, as 
well as providing 
multispectral
, 
multisource
, and 
multitemporal information for an accurate 
classification of land cover. The multisource example image shows the benefit of increased 
information content when two data sources are integrated. On the left is TM data, and on the 
right it has been merged with airborne SAR. 
 
  
Page 219Section 5.7.2 Land Cover / Biomass Mapping
Canada Centre for Remote Sensing

Data requirements
 
For continental and global scale vegetation studies, moderate resolution data (1km) is 
appropriate, since it requires less storage space and processing effort, a significant 
consideration when dealing with very large area projects. Of course the requirements depend 
entirely on the scope of the application. Wetland mapping for instance, demands a critical 
acquisition period and a high resolution requirement. 
Coverage demand will be very large for regional types of surveying. One way to adequately 
cover a large area and retain high resolution, is to create mosaics of the area from a number 
of scenes. 
Land cover information may be time sensitive. The identification of crops, for instance canola, 
may require imaging on specific days of flowering, and therefore, reliable imaging is 
appropriate. Multi-temporal data are preferred for capturing changes in phenology throughout 
the growing season. This information may be used in the classification process to more 
accurately discriminate vegetation types based on their growing characteristics. 
 
While optical data are best for land cover mapping, radar imagery is a good replacement in 
very cloudy areas.  
Case study (example)
  
NBIOME: Classification of Canada's Land Cover  
A major initiative of the Canada Centre for Remote 
Sensing is the development of an objective, 
reproducible classification of Canada's landcover. 
This classification methodology is used to produce 
a baseline map of the major biomes and land cover 
in Canada, which can then be compared against 
subsequent classifications to observe changes in 
cover. These changes may relate to regional 
climatic or anthropogenic changes affecting the 
landscape. 
The classification is based on NOAA-AVHRR LAC 
(Local Area Coverage) (1km) data. The coarse 
resolution is required to ensure efficient processing 
and storage of the data, when dealing with such a large coverage area. Before the 
classification procedure, cloud -cover reduced composites of the Canadian landmass, each 
spanning 10 day periods are created. In the composite, the value for each pixel used is the 
Page 220Section 5.7.2 Land Cover / Biomass Mapping
Canada Centre for Remote Sensing

one most cloud free of the ten days. This is determined by the highest normalized difference 
vegetation index (NDVI) value, since low NDVI is indicative of cloud cover (low infrared 
reflectance, high visible reflectance). The data also underwent a procedure to minimize 
atmospheric, bidirectional, and contamination effects. 
The composites consist of four channels, mean reflectance of AVHRR channels 1 and 2, 
NDVI and area under the (temporal NDVI) curve. 16 composites (in 1993) were included in a 
customized land cover classification procedure (named: classification by progressive 
generalization), which is neither a supervised nor unsupervised methodology, but incorporates 
aspects of both. The classification approach is based on finding dominant spectral clusters 
and conducting progressive merging methodology. Eventually the clusters are labelled with 
the appropriate land cover classes. The benefit is that the classification is more objective than 
a supervised approach, while not controlling the parameters of clustering, which could alter 
the results. 
The result of this work is an objective, reproducible classification of Canada's land cover. 
Page 221Section 5.7.2 Land Cover / Biomass Mapping
Canada Centre for Remote Sensing

5.8 Mapping 
 
Mapping constitutes an integral component of the process of managing land resources, and 
mapped information is the common product of analysis of remotely sensed data. Natural 
features and manufactured infrastructures, such as transportation networks, urban areas, and 
administrative boundaries can be presented spatially with respect to referenced co-ordinate 
systems, which may then be combined with thematic information. Baseline, thematic, and 
topographic maps are essential for planning, evaluating, and monitoring, for military or civilian 
reconnaissance, or land use management, particularly if digitally integrated into a geographic 
information system as an information base. Integrating elevation information is crucial to many 
applications and is often the key to the potential success of present day mapping programs. 
Canada has been, and continues to be a world leader in mapping technology. Canada's 
immense land area with a rich resource potential, coupled with a small population base has 
necessitated the development of thorough and efficient mechanisms of investigating and 
recording land information. Traditionally, this information was obtained through surveying and 
photogrammetric techniques, which have been costly and time consuming, particularly for 
periodic revision of outdated information. Recent advances in computer technology (speed, 
data handling and storage capability) and a growing demand for digital databases and 
computer based mapping production capabilities have encouraged the use of remotely 
sensed information as a data source for cartographic applications. 
There is a growing demand for the utilization of remote sensing data in map production, since 
the following benefits may be provided: stereo coverage, frequent revisits, timely delivery, 
wide area coverage, low labour intensity, virtually global coverage, and storage in digital 
format to facilitate subsequent updating and compatibility with current GIS technology. 
End users of base maps and mapping products include resource companies (forestry, mining, 
oil), support and service industries (engineering), utility and infrastructure development 
agencies (pipelines, telecommunications, transportation, power), government mapping 
agencies, and the military. This diversification from traditionally military users to commercial 
applications has resulted in a greater demand for a wider range of mapping products, with 
emphasis placed upon the benefits of improved information content and scale, and accuracy 
versus data costs. 
Canadian companies offering mapping services are likely to be looking abroad, as the 
greatest commercial potential exists within the international community. Developing countries 
Page 222Section 5.8 Mapping
Canada Centre for Remote Sensing

are currently initiating mapping programs to cover large unsurveyed areas to increase their 
topographic and planimetric knowledge base. The derived information will be used to support 
territorial sovereignty issues, assess and monitor resource potential and exploitation, and 
encourage economic opportunity. Radar data will be relied on in tropical areas for remote 
sensing mapping solutions. 
Mapping applications of remote sensing include the following: 
1.   planimetry  
2.   digital elevation models (DEM's)  
3.   baseline thematic mapping / topographic mapping  
Page 223Section 5.8 Mapping
Canada Centre for Remote Sensing

5.8.1 Planimetry 
Background
 
Planimetry consists of the identification and geolocation of basic land cover (e.g. forest, 
marsh), drainage, and anthropogenic features (e.g. urban infrastructure, transportation 
networks) in the x, y plane. Planimetric information is generally required for large-scale 
applications - urban mapping, facilities management, military reconnaissance, and general 
landscape information. 
Why remote sensing?
 
Land surveying techniques accompanied by the use of a GPS can be used to meet high 
accuracy requirements, but limitations include cost effectiveness, and difficulties in attempting 
to map large, or remote areas. Remote sensing provides a means of identifying and 
presenting planimetric data in convenient media and efficient manner. Imagery is available in 
varying scales to meet the requirements of many different users. Defence applications typify 
the scope of planimetry applications - extracting transportation route information, building and 
facilities locations, urban infrastructure, and general land cover. 
Data requirements
 
Very high resolution is usually a requirement for accurate planimetric mapping. Concerns of 
the mapping community with regard to use of satellite data are spatial accuracy and the level 
of detail of extractable information content. The concern for information content focusses not 
only on interpretability of features, but on the ability to determine the correct spatial location of 
a feature. An example of the latter would be the difficulty associated with defining the centre o
f 
a river or precise location of a powerline or pipeline right-of-way in vector format, when 
interpreting from a relatively coarse raster base. Spatial resolution is a critical element in this 
case. 
The turnaround time of one or two weeks will generally meet the requirements for this type of 
mapping, although defence requirements may be more stringent. 
Canada vs. International
 
For general Canadian applications, the ability to provide planimetric information is best 
addressed by current VIR sensors, and for large scale mapping- aerial photography. The 
importance of adequate resolution and information content outweigh the need for near real 
time products. Presently, TM and SPOT data provide optimal information for extracting 
planimetric information for regional applications. Air photos, and particularly orthophotos when 
available, are preferred for smaller, well defined areas. 
 
Tawausar radar image 
Page 224Section 5.8.1 Planimetry
Canada Centre for Remote Sensing

  
For cloud covered areas, 
radar
 is the obvious 
choice for providing 
planimetric data
. The 
detectability of linear features improves when they 
are oriented perpendicular to the radar look 
direction. This can be controlled with airborne 
sensors, by planning the flightlines appropriately. 
Another issue is that a balance between resolution 
and speckle has to be reached. Although single 
look data provides the finest resolution, speckle 
can be a hindrance to interpretation, and invites 
multilook processing. 
Page 225Section 5.8.1 Planimetry
Canada Centre for Remote Sensing

5.8.2 Digital Elevation Models 
Background
 
The availability of digital elevation models (DEMs) is 
critical for performing geometric and radiometric 
corrections for terrain on remotely sensed imagery, and 
allows the generation of contour lines and terrain models, 
thus providing another source of information for analysis. 
Present mapping programs are rarely implemented with 
only planimetric considerations. The demand for digital 
elevation models is growing with increasing use of GIS and with increasing evidence of 
improvement in information extracted using elevation data (for example, in discriminating 
wetlands, flood mapping, and forest management). The incorporation of elevation and terrain 
data is crucial to many applications, particularly if radar data is being used, to compensate for 
foreshortening and layover effects, and slope induced radiometric effects. Elevation data is 
used in the production of popular topographic maps. 
Elevation data, integrated with imagery is also used for generating perspective views, useful 
for tourism, route planning, to optimize views for developments, to lessen visibility of forest 
clearcuts from major transportation routes, and even golf course planning and development. 
Elevation models are integrated into the programming of cruise missiles, to guide them over 
the terrain. 
Resource management, telecommunications planning, and military mapping are some of the 
applications associated with DEMs. 
  
Why remote sensing?
 
There are a number of ways to generate elevation models. One is to create point data sets by 
collecting elevation data from altimeter or Global Positioning System (GPS) data, and then 
interpolating between the points. This is extremely time and effort consuming. Traditional 
surveying is also very time consuming and limits the timeliness of regional scale mapping. 
Generating DEMs from remotely sensed data can be cost effective and efficient. A variety of 
sensors and methodologies to generate such models are available and proven for mapping 
applications. Two primary methods if generating elevation data are 1. Stereogrammetry 
techniques using airphotos (photogrammetry), VIR imagery, or radar data (radargrammetry), 
and 2. Radar interferometry. 
Page 226Section 5.8.2 Digital Elevation Models
Canada Centre for Remote Sensing

 
Stereogrammetry involves the extraction of elevation information from stereo overlapping 
images, typically airphotos, SPOT imagery, or radar. To give an example, stereo pairs of 
airborne SAR data are used to find point elevations, using the concept of parallax. Contours 
(lines of equal elevation) can be traced along the images by operators constantly viewing the 
images in stereo. 
 
The potential of radar interferometric techniques to measure terrain height, and to detect and 
measure minute changes in elevation and horizontal base, is becoming quickly recognized. 
Interferometry involves the gathering of precise elevation data using successive passes (or 
dual antenna reception) of spaceborne or airborne SAR. Subsequent images from nearly the 
same track are acquired and instead of examining the amplitude images, the phase 
information of the returned signals is compared. The phase images are coregistered, and the 
differences in phase value for each pixel is measured, and displayed as an interferogram. A 
computation of phase "unwrapping" or phase integration, and geometric rectification are 
performed to determine altitude values. High accuracies have been achieved in 
demonstrations using both airborne (in the order of a few centimetres) and spaceborne data 
(in the order of 10m). 
Primary applications of interferometry include high quality DEM generation, monitoring of 
surface deformations (measurement of land subsidence due to natural processes, gas 
removal, or groundwater extraction; volcanic inflation prior to eruption; relative earth 
movements caused by earthquakes), and hazard assessment and monitoring of natural 
landscape features and fabricated structures, such as dams. This type of data would be useful 
for insurance companies who could better measure damage due to natural disasters, and for 
hydrology-specialty companies and researchers interested in routine monitoring of ice jams 
Page 227Section 5.8.2 Digital Elevation Models
Canada Centre for Remote Sensing

for bridge safety, and changes in mass balance of glaciers or volcano growth prior to an 
eruption. 
 
From elevation models, contour lines can be generated for topographic maps, slope and 
aspect models can be created for integration into (land cover) thematic classification datasets 
or used as a sole data source, or the model itself can be used to orthorectify remote sensing 
imagery and generate perspective views. 
 
Data requirements
 
The basic data requirement for both stereogrammetric and interferometric techniques is that 
the target site has been imaged two times, with the sensor imaging positions separated to 
give two different viewing angles. 
In virtually all DEM and topographic map generation applications, cartographic accuracy is the 
important limiting factor. Turnaround time is not critical and repeat frequency is dependent on 
whether the application involves change detection, and what the temporal scope of the study 
is. 
  
  
  
  
Page 228Section 5.8.2 Digital Elevation Models
Canada Centre for Remote Sensing

Canada vs. International
 
Aerial photography is the primary data source for 
DEM generation in Canada for national topographic 
mapping. For other applications of DEMs, there are 
additional satellite sources such as SPOT, with its 
pointable sensors and 10m panchromatic spatial 
resolution, producing adequate height information at 
scales smaller than 1:50,000. 
The height accuracy requirement for 1:50,000 mapping in Canada is between 5 and 20 m. In 
developing countries it is typically 20 m. The original elevation information used in the 
Canadian National Topographic Series Maps was provided from photogrammetric techniques.
In foreign markets, airborne radar mapping is most suited for approximately 1:50,000 scale 
topographic mapping. Spaceborne radar systems will be able to provide data for the 
generation of coarser DEMs through radargrammetry, in areas of cloud cover and with less 
stringent accuracy requirements. Stereo data in most modes of operation will be available 
because of the flexible incidence angles, allowing most areas to be captured during 
subsequent passes. Interferometry from airborne and spaceborne systems should meet many 
mapping requirements. 
Page 229Section 5.8.2 Digital Elevation Models
Canada Centre for Remote Sensing

5.8.3 Topographic & Baseline Thematic Mapping 
Background
 
There is a growing demand for digital databases of topographic and thematic information to 
facilitate data integration and efficient updating of other spatially oriented data. Topographic 
maps consist of elevation contours and planimetric detail of varied scale, and serve as 
general base information for civilian and military use. 
Baseline thematic mapping (BTM) is a digital 
integration of satellite imagery, land use, land 
cover, and topographic data to produce an "image 
map" with contour lines and vector planimetry 
information. This new concept of thematic 
mapping was developed to take advantage of 
improvements in digital processing and integration 
of spatial information, increased compatibility of 
multisource data sets, the wide use of geographic 
information systems to synthesize information and 
execute analyses customized for the user, and 
increased ability to present the data in 
cartographic form. 
The data for baseline thematic maps are compiled from topographic, land cover, and 
infrastructure databases. Appropriate thematic information is superimposed on a base map, 
providing specific information for specific end users, such as resource managers. Various 
combinations of thematic information may be displayed to optimize the map information for 
application specific purposes, whether for land use allocation, utility site selection and route 
planning, watershed management, or natural resource management and operations. 
Why remote sensing?
 
As a base map, imagery provides ancillary information to the extracted planimetric or thematic 
detail. Sensitivity to surface expression makes radar a useful tool for creating base maps and 
providing reconnaissance abilities for hydrocarbon and mineralogical companies involved in 
exploration activities. This is particularly true in remote northern regions, where vegetation 
cover does not mask the microtopography and generally, information may be sparse. 
Multispectral imagery is excellent for providing ancillary land cover information, such as forest 
cover. Supplementing the optical data with the topographic relief and textural nuance inherent 
in radar imagery can create an extremely useful image composite product for interpretation.  
Data requirements
 
The prime data requirement is for high information content and a balance between resolution 
and data handling ability. There is a moderate turnaround requirement for this application; 
processed data should be available less than a year after imagery acquisition. 
Page 230Section 5.8.3 Topographic & Baseline Thematic Mapping
Canada Centre for Remote Sensing

Canada vs. International
 
VIR imagery is excellent as a base map for planimetry detail on a varied landscape, providing 
information on forest, agriculture cover and gross geomorphology of the land. SAR is also 
good for providing surficial topographic expression.  
Case study (example) BTM's in BC
 
(Baseline Thematic Mapping in British Columbia)
 
Baseline thematic mapping involves the compilation of varied data sources, ranging from 
satellite imagery to detailed forest stand information to planimetric data from the 1:250,000 
National Topographic database. Base map sheets overlain by various combinations of 
thematic data are produced with an aim toward resource management applications. British 
Columbia's Ministry of Environment, Lands, and Parks routinely produces BTMs. The most 
recent Landsat TM data available is used as a source for classifications of ground cover and 
interpretation of land use. DEMs are also integrated into the satellite data to provide 3 
dimensional perspective views. Although B.C. is quite advanced in this application, other 
Canadian provinces have contemplated or are doing similar work, as are private consultants 
in conjunction with forestry companies. 
Baseline thematic mapping incorporates not only interpretations of ground cover data and 
land use, but topographic information such as elevation contours and planimetry to provide an 
optimal tool for resource management. This information may be portrayed in traditional map 
format, or as an image-map, which is an excellent means of presenting spatial data to 
resource managers and many other users. 
Page 231Section 5.8.3 Topographic & Baseline Thematic Mapping
Canada Centre for Remote Sensing

5.9 Oceans & Coastal Monitoring 
 
The oceans not only provide valuable food and biophysical resources, they also serve as 
transportation routes, are crucially important in weather system formation and CO² storage, 
and are an important link in the earth's hydrological balance. Understanding ocean dynamics 
is important for fish stock assessment, ship routing, predicting global circulation 
consequences of phenomena such as El Nino, forecasting and monitoring storms so as to 
reduce the impact of disaster on marine navigation, off-shore exploration, and coastal 
settlements. Studies of ocean dynamics include wind and wave retrieval (direction, speed, 
height) , mesoscale feature identification, bathymetry, water temperature, and ocean 
productivity.  
Coastlines are environmentally sensitive interfaces between the ocean and land and respond 
to changes brought about by economic development and changing land-use patterns. Often 
coastlines are also biologically diverse inter-tidal zones, and can also be highly urbanized . 
With over 60% of the world's population living close to the ocean, the coastal zone is a region 
subject to increasing stress from human activity. Government agencies concerned with the 
impact of human activities in this region need new data sources with which to monitor such 
diverse changes as coastal erosion, loss of natural habitat, urbanization, effluents and 
offshore pollution. Many of the dynamics of the open ocean and changes in the coastal region 
can be mapped and monitored using remote sensing techniques. 
Ocean applications of remote sensing include the following: 

Ocean pattern identification: 
currents, regional circulation patterns, shears  

frontal zones, internal waves, gravity waves, eddies, upwelling zones, shallow water 
bathymetry ,  

Storm forecasting 
wind and wave retrieval  

Fish stock and marine mammal assessment 
water temperature monitoring  
water quality  

ocean productivity, phytoplankton concentration and drift  
Page 232Section 5.9 Oceans & Coastal Monitoring
Canada Centre for Remote Sensing

aquaculture inventory and monitoring  

Oil spill 
mapping and predicting oilspill extent and drift  

strategic support for oil spill emergency response decisions  
identification of natural oil seepage areas for exploration  

Shipping 
navigation routing  

traffic density studies  
operational fisheries surveillance  

near-shore bathymetry mapping  

Intertidal zone 

tidal and storm effects  
delineation of the land /water interface  

mapping shoreline features / beach dynamics  
coastal vegetation mapping  

human activity / impact  
Page 233Section 5.9 Oceans & Coastal Monitoring
Canada Centre for Remote Sensing

5.9.1 Ocean Features 
Background
 
Ocean feature analysis includes determining current strength and direction, amplitude and 
direction of surface winds, measuring sea surface temperatures, and exploring the dynamic 
relationship and influences between ocean and atmosphere. Knowledge of currents, wind 
speed, tides, storm surges and surface wave height can facilitate ship routing. Sea floor 
modelling supports waste disposal and resource extraction planning activities. 
Ocean circulation patterns can be determined by the examination of mesoscale features such 
as eddies, and surface gravity waves. This knowledge is used in global climate modelling, 
pollution monitoring, navigation and forecasting for offshore operations. 
Why remote sensing?
 
Remote sensing offers a number of different methods for acquiring information on the open 
ocean and coastal region. Scatterometers collect wind speed and direction information, 
altimeters measure wave height, and identify wind speed. Synthetic aperture radar (SAR) is 
sensitive to spatially varying surface roughness patterns caused by the interaction of the 
upper ocean with the atmosphere at the marine boundary layer, and scanning radiometers 
and microwave sounders collect sea surface temperature data. Buoy-collected information 
can be combined with remote sensing data to produce image maps displaying such things as 
hurricane structure with annotated wind direction and strength, and wave height. This 
information can be useful for offshore engineering activities, operational fisheries surveillance 
and storm forecast operations. 
Data requirements
 
For general sea-state information (waves, currents, winds), the data are usually time 
sensitive, meaning that the information is only valuable if it is received while the conditions 
exist. For forecasting and ship routing, real time data handling / turnaround facilities are 
necessary, requiring two way data links for efficient dissemination between the forecast centre 
and data user. 
Certain wind speed conditions are necessary in order for the SAR to receive signal 
information from the ocean surface. At very low wind speeds (2-3m/s) the SAR is not sensitive 
enough to detect the ocean 'clutter' and at very high winds speeds (greater than 14 m/s) the 
ocean clutter masks whatever surface features may be present. The principal scattering 
mechanism for ocean surface imaging is Bragg scattering, whereby the short waves on the 
ocean surface create spatially varying surface patterns. The backscatter intensity is a function 
of the incidence angle and radar wavelength, as well as the sea state conditions at the time of 
imaging. The surface waves that lead to Bragg scattering are roughly equivalent to the 
wavelength used by RADARSAT. (5.3 cm) These short waves are generally formed in 
response to the wind stress at the upper ocean layer. Modulation in the short (surface) waves 
may be caused by long gravity waves, variable wind speed, and surface currents associated 
with upper ocean processes such as eddies, fronts and internal waves. These variations 
Page 234Section 5.9.1 Ocean Features
Canada Centre for Remote Sensing

result in spatially variable surface roughness patterns which are detectable on SAR imagery. 
Case study (example)
 
Internal waves form at the interfaces between 
layers of different water density, which are 
associated with velocity shears (i.e., where the 
water above and below the interface is either 
moving in opposite directions or in the same 
direction at different speeds). Oscillations can 
occur if the water is displaced vertically resulting 
in internal waves. Internal waves in general occur 
on a variety of scales and are widespread 
phenomena in the oceans. The most important 
are those associated with tidal oscillations along 
continental margins. The internal waves are large 
enough to be detected by satellite imagery. In this image, the internal waves, are manifested 
on the ocean surface as a repeating curvilinear patterns of dark and light banding, a few 
kilometres east of the Strait of Gibraltar, where the Atlantic Ocean and Mediterranean Sea 
meet. Significant amounts of water move into the Mediterranean from the Atlantic during high 
tide and/or storm surges. 
Page 235Section 5.9.1 Ocean Features
Canada Centre for Remote Sensing

5.9.2 Ocean Colour & Phytoplankton Concentration 
Background
 
Ocean colour analysis refers to a method of 
indicating the "health" of the ocean, by measuring 
oceanic biological activity by optical means . 
Phytoplankton, are significant building blocks in the 
world's food chain and grow with the assistance of 
sunlight and the pigment chlorophyll. Chlorophyll, 
which absorbs red light (resulting in the ocean's 
blue-green colour) is considered a good indicator of 
the health of the ocean and its level of productivity. 
The ability to map the spatial and temporal patterns 
of ocean colour over regional and global scales has provided important insights into the 
fundamental properties and processes in the marine biosphere. 
Mapping and understanding changes in ocean colour can assist in the management of fish 
stocks and other aquatic life, help define harvest quotas, monitor the water quality and allow 
for the identification of human and natural water pollution such as oil or algal blooms, which 
are dangerous to fish farms and other shell fish industries. 
In general, ocean productivity appears highest in coastal areas due to their proximity to 
nutrient upwelling and circulation conditions that favour nutrient accummulation. 
Why remote sensing?
 
Remotely sensed data can provide the necessary spatial perspective to collect information 
about the ocean surface on a regional scale. Optical data can detect such targets as 
suspended sediments, dissolved organic matter, and discern between algal blooms and 
oilslicks. SAR data can provide additional information on current, wave and mesoscale 
features so as to observe trends over time when optical data are not available due to periods 
of cloud cover. Many commercial fishing and aquaculture operators use this information to 
predict catch sizes and locate potential feeding areas. 
Remote sensing provides a near-surface view of the ocean, but is limited in the amount of 
information it can derive from the water column. However, many applications of ocean colour 
are in their infancy and with the recent and upcoming missions of advanced sensors, the 
development and scope of applications will improve substantially. 
Data requirements
 
Multispectral data are required for ocean colour measurements, and wide spatial coverage 
provides the best synoptic view of distribution and spatial variability of phytoplankton, water 
temperature and suspended matter concentration. Hyperspectral data, (collected in many and 
narrow ranges of the visible and infrared wavelengths), allows for greater precision in 
characterizing target spectral signatures. Monthly and seasonal imaging provides necessary 
Page 236Section 5.9.2 Ocean Colour & Phytoplankton Concentration
Canada Centre for Remote Sensing

data for modelling. For fish harvesting activities and for fish farm operators, information is 
required on a daily or weekly basis. 
We are entering a new era of ocean colour data. The Coastal Zone Colour Scanner (CZCS) 
on-board the US Nimbus 7 satellite collected colour data from 1978 until 1986. In 1996 after a 
decade of limited data availability, the Germans launched the Modular Opto-electronic Sensor 
(MOS) and the Japanese followed with the Ocean Colour Thermal Sensor (OCTS). New 
sensors include SeaWiFs, launched in 1997 (NASA), MERIS (ESA) scheduled for launch in 
1999, MODIS (NASA) in 2000 , GLI (Japan) in 1999, and OCI (Taiwan) in 1998. These 
advanced sensors will collect data on primary productivity, chlorophyll variablity and sea 
surface temperature using advanced algorithms. Their spectral channels are designed to 
optimize target reflectance and support quantitative measurements of specific biophysical 
properties. Most offer regional perspectives with relatively coarse (500-1200m) resolution and 
wide fields of view. 
Case study (example)
 
El Nino and the Plankton Disappearance
 
Understanding the dynamics of ocean circulation can play a key role in predicting global 
weather patterns, which can directly impact agriculture and fishing industries around the 
world. Detecting the arrival of the El Nino Current off the coast of Peru is an example of how 
remote sensing can be used to improve our understanding of, and build prediction models for 
global climate patterns. 
El Nino is a warm water current that appears off the coast of South America approximately 
every seven years. Nutrients in the ocean are associated with cold water upwelling, so the 
arrival of a warm water current such as El Nino, which displaces the cold current further 
offshore, causes changes in the migration of the fish population. In 1988, El Nino caused a 
loss in anchovy stocks near Peru, then moved north, altering the regional climatic patterns 
and creating an unstable weather system. The resulting storms forced the jet stream further 
north, which in turn blocked the southward flow of continental precipitation fromCanada over 
the central United States. Central and eastern American States suffered drought, reducing 
crop production, increasing crop prices, and raising commodity prices on the international 
markets. 
Page 237Section 5.9.2 Ocean Colour & Phytoplankton Concentration
Canada Centre for Remote Sensing

5.9.3 Oil Spill Detection 
Background
 
Oil spills can destroy marine life as well as damage habitat for land animals and humans. The 
majority of marine oilspills result from ships emptying their billage tanks before or after 
entering port. Large area oilspills result from tanker ruptures or collisions with reefs, rocky 
shoals, or other ships. These spills are usually spectacular in the extent of their environmental 
damage and generate wide spread media coverage. Routine surveillance of shipping routes 
and coastal areas is necessary to enforce maritime pollution laws and identify offenders. 
Following a spill, the shipping operator or oil company involved is responsible for setting up 
emergency evaluation and response teams, and employing remediating measures to 
minimize the extent of a spill. If they do not have the resources, the government regulatory 
agencies responsible for disaster mitigation become involved and oversee the activity. In all 
spills, the government agencies play a key role in ensuring the environmental protection laws 
are being met. To limit the areas affected by the spill and facilitate containment and cleanup 
efforts, a number of factors have to be identified. 
1.   Spill location  
2.   Size and extent of the spill  
3.   Direction and magnitude of oil movement  
4.   Wind, current and wave information for predicting future oil movement  
Why remote sensing?
 
Remote sensing offers the advantage of being able to observe events in remote and often 
inaccessible areas. For example, oil spills from ruptured pipelines, may go unchecked for a 
period of time because of uncertainty of the exact location of the spill, and limited knowledge 
of the extent of the spill. Remote sensing can be used to both detect and monitor spills. 
For ocean spills, remote sensing data can provide information on the rate and direction of oil 
movement through multi-temporal imaging, and input to drift prediction modelling and may 
facilitate in targeting clean-up and control efforts. Remote sensing devices used include the 
use of infrared video and photography from airborne platforms, thermal infrared imaging, 
airborne laser fluourosensors, airborne and space-borne optical sensors, as well as airborne 
and spaceborne SAR. SAR sensors have an advantage over optical sensors in that they can 
provide data under poor weather conditions and during darkness. Users of remotely sensed 
data for oil spill applications include the Coast Guard, national environmental protection 
agencies and departments, oil companies, shipping industry, insurance industry, fishing 
industry, national departments of fisheries and oceans, and departments of defence. 
Data requirements
 
The key operational data requirements are fast turnaround time and frequent imaging of the 
site to monitor the dynamics of the spill. For spill identification, high resolution sensors are 
generally required, although wide area coverage is very important for initial monitoring and 
detection. Airborne sensors have the advantage of frequent site specific coverage on 
Page 238Section 5.9.3 Oil Spill Detection
Canada Centre for Remote Sensing

demand, however, they can be costly. Spills often occur in inclement weather, which can 
hinder airborne surveillance. 
Laser fluorosensors are the best sensors for oil spill detection, and have the capability of 
identifying oil on shores, ice and snow, and determining what type of oil has been spilled. 
However, they require relatively cloud free conditions to detect the oilspill. SAR sensors can 
image oilspills through the localized suppression of Bragg scale waves. Oilspills are visible on 
a radar image as circular or curvilinear features with a darker tone than the surrounding 
ocean. The detection of an oilspill is strongly dependent upon the wind speed. At wind speeds 
greater than 10 m/s, the slick will be broken up and dispersed, making it difficult to detect. 
Another factor that can play a role in the successful detection of an oilspill is the difficulty in 
distinguishing between a natural surfactant and an oilspill. Multi-temporal data and ancillary 
information can help to discriminate between these two phenomena. 
Case study (example)
 
A supertanker, the Sea Empress, was grounded near the town of Milford Haven, Wales on 
February 15, 1996. After hitting rocks, the outer hull was breached and approximately 70,000 
tonnes of light grade crude oil was dispersed southward under storm conditions. 
In this RADARSAT image taken a week after 
the spill, the extent of the oil is visible. The 
dark areas off the coast represent the areas 
where oil is present and areas of lighter tone 
directly south are areas where dispersant 
was sprayed on the oil to encourage 
emulsification. Oil, which floats on the top of 
water, suppresses the ocean's capillary 
waves, creating a surface smoother than the 
surrounding water. This smoother surface appears dark in the radar image. As the oil starts to 
emulsify and clean-up efforts begin to take effect, the capillary waves are not as effectively 
damped and the oil appears lighter. Size, location and dispersal of the oil spill can be 
determined using this type of imagery. 
Page 239Section 5.9.3 Oil Spill Detection
Canada Centre for Remote Sensing

5. Endnotes
 
 
5.10 Endnotes 
 
You have just completed 
Chapter 5 - Applications
. As a follow-on, you may want to browse 
the 
CCRS Web site
 where you will find articles dealing with applications of remote sensing in 
the fields of agriculture, geology, environmental monitoring, hydrology, ice, oceans, forestry. 
As a starting point, try our 'Images of Canada'
1
, the RADARSAT 'Applications In Action'
2
, and 
the articles in our Technology and R&D Section
3
.
 
Additionally, you may want to browse the terminology in our glossary
4
, or review some of the 
technical papers
5
 written by CCRS staff.
 
1
http://www.ccrs.nrcan.gc.ca/ccrs/learn/tour/tour_e.html
 
2
http://www.ccrs.nrcan.gc.ca/ccrs/data/satsens/radarsat/images/imgact_e.html
 
3
http://www.ccrs.nrcan.gc.ca/ccrs/rd/rd_e.html
 
4
http://www.ccrs.nrcan.gc.ca/ccrs/learn/terms/glossary/glossary_e.html
 
5
http://www.ccrs.nrcan.gc.ca/ccrs/rd/sci_pub/biblio_e.html
 
 
Page 240Section 5.10 Endnotes
Canada Centre for Remote Sensing

5. Did You Know?
 
 
5.2 Did You Know? 
 
Fields in Quebec 
Did you know that remote sensing of agricultural areas could give us clues about our 
heritage? In Québec, farmer's field shapes are very different than in Saskatchewan. In 
Québec, long thin strips of land extend from riverbanks, following French settlers' tradition. 
These types of fields are also visible in Nova Scotia, where the Acadians farmed, in New 
Brunswick, and in parts of Ontario. In the prairies, the fields are square and strictly follow the 
township and range plan.  
 
Fields in Saskatchewan 
Page 241Section 5 Did You Know?
Canada Centre for Remote Sensing

5.3 Did You Know? 
 
The forest around Mt. St. Helens after the eruption 
Natural disasters can also wipe out huge areas of forest. Burns can destroy several thousand 
of hectares, landslides can displace trees down a slope, and excessive flooding can damage 
trees. Volcanoes however, have the greatest potential for destroying forests in the shortest 
amount of time. In 1980, Mt. St. Helens in northwestern United States violently erupted. The 
volcanic blast, reachin
g 320 km/hour, levelled over 600km
2
of forest.
 
Page 242Section 5 Did You Know?
5.3.2 Did You Know? 
 
Forest interpretation from SAR data 
Interpreting forest cover type with radar data is very similar to interpreting multispectral 
images. The same interpretation elements are used (tone, texture, shape, pattern, size, 
association), but texture plays a dominant role in the discrimination of different forest types. 
Viewing the images in stereo helps to differentiate relative tree heights, as well as define 
rivers that have specific vegetation along their banks. 
Canada Centre for Remote Sensing

5.5 Did You Know? 
 
Catastrophic flooding can happen almost anywhere. In Iceland, huge floods that carry 
boulders the size of houses occur relatively frequently. These floods are called jökulhlaups, 
roughly meaning "glacial flood". Iceland is situated upon the mid-Atlantic rift, an area of 
frequent volcanic activity. The island itself is a product of this activity, and continues to grow in 
size with each volcanic event. Covering much of the island, and some of the volcanic craters, 
is an 8300 km
2
 ice cap. During sub-glacial eruptions, glacial ice is melted, and temporarily 
dammed by either the crater or the ice itself. Eventually the pressure of the water is released 
in a catastrophic flood. A flood in 1996 discharged a 3km3 volume of water, lasting 2 ½ days. 
The glaciers and landscape are abruptly and extensively modified by this strong force, which 
erodes channels, moves and deposits huge blocks of ice and rock, and deposits kilometre 
scale alluvial fans. 
Scientists can use radar imagery to create topographic models of the glaciers and extensive 
outwash plains to use as baseline maps for multitemporal change detection and mapping 
studies. Radar is preferred because persistently cloudy conditions limit the use of optical data. 
With new monitoring methods, including the analysis of glacial dynamics related to volcanic 
activity, scientists are better able to predict the timing of these extreme jökulhlaups.  
Page 243Section 5 Did You Know?
Canada Centre for Remote Sensing

5.5.1 Did You Know? 
 
It is worth your while to pay attention to the polarization characteristics of the radar imagery 
that you are collecting. If your target is to map flooded versus dry land, then HH (horizontal 
transmit, horizontal receive) is a much better choice than (say) VV (vertical transmit, vertical 
receive) polarization. The HH imagery will produce a noticeably stronger contrast between 
these two types of surfaces, allowing greater accuracy in the mapped result. 
Page 244Section 5 Did You Know?
Canada Centre for Remote Sensing
5.5.2 Did You Know? 
 
Another part of the electromagnetic spectrum that has been used for soil moisture 
measurement is the gamma ray wavelength range. Recording the natural emission of gamma 
rays from the earth, aircraft carrying gamma ray spectrometers are used to detect the 
attenuation or alteration by soil moisture, of the intensity of the emanation. The gamma ray 
wavelength is extremely short - about 10-12 metres in length (!) and the intensity of this 
natural radiation at the earth's surface is very weak. As a result satellite altitudes are not 
practical for this form of remote sensing. Even the aircraft used for this purpose must fly as 
close to the ground as possible. 

5.6 Did You Know? 
 
"...GPS = Good Protection Sidekick..."
 
Accidents like the sinking of the Titanic are virtually eliminated now, with iceberg 
reconnaissance (provided by the International Ice Patrol) and GPS navigation onboard ships. 
And even if a ship did collide with an iceberg, search and rescue operations using remote 
sensing and GPS navigation could save many lives in such an incident. 
Page 245Section 5 Did You Know?
Canada Centre for Remote Sensing

5.6.1 Did You Know? 
 
"...I like my eggs on ice..."
 
Creating an Ice Chart
 
The Canadian Ice Service of Environment Canada 
(CISEC) creates charts for ice type that are 
distributed to their clients on a near-real time basis. 
These charts are essentially ice maps with Egg 
Codes superimposed, which explain the 
development stage (thickness), size, and 
concentration of ice at both regional and site specific 
scales. The codes used to represent the ice 
information are displayed in an oval symbol, 
resembling an egg, hence the term Egg Code . Egg 
codes are used not only for sea ice, but also lake 
ice. Also they conform to the WMO (World 
Meteorological Organization) standards. 
Once you understand the meaning of the various 
codes, the interpretation of the ice charts is relatively 
easy. 
For more detailed information about the coding procedure and terminology, go to the 
 Canadian Ice Service homepage.
1
 
  
  
Page 246Section 5 Did You Know?
Canada Centre for Remote Sensing

  
Case study (example)
 
RADARSAT Expedites Expedition to the Magnetic North Pole! 
 
In March of 1996, teams of Arctic adventurers set 
out on an expedition to reach the magnetic North 
Pole, located on the west coast of Ellef Ringnes 
Island, in Canada's high Arctic. Travelling across sea 
ice by ski, the teams required a route on smooth first 
year ice in order to haul their gear and conserve 
energy. Ice blocks, rubble and irregular relief made 
deformed and multi-year ice virtually impassable. 
One team relied on remote sensing - image maps 
created from RADARSAT data - to plan their route.  
The ScanSAR image covered the entire extent of the 
route, from Resolute Bay on Cornwallis Island to the pole (78°6'N, 104°3'W). The resolution of 
100m provided information about the ice cover and type, and mapped coastlines were added 
following geometric processing, to provide a geographic reference. The team was also 
equipped with GPS and communication technologies.  
On the image map, passable ice appears uniformly dark, due to the specular reflection of 
incident radiation from the radar on the smooth surface. Rubbly, rough ice that often 
contained enough relief to make skiing impossible appears bright, due to the reflection of the 
radar energy back to the sensor.  
The team using RADARSAT image maps was the only one to complete their journey to the 
magnetic North Pole. The other teams were hindered by rough ice and could not efficiently 
plan their route without the synoptic view provided by remote sensing. RADARSAT, with its 
sensitivity to ice type, far northern coverage, and reliable imaging was the most suitable 
sensor for this type of application. Its success bodes well for future exploration endeavors!  
Reference: Lasserre, M., 1996. RADARSAT Image Maps Make Arctic Expedition a Success, 
Remote Sensing in Canada, Vol. 24, No. 1, June, 1996. Natural Resources Canada.  
Expedition Web Site: http://www.jeaneudes.qc.ca/
2
 
1
http://www.msc-smc.ec.gc.ca
 
2
http://www.jeaneudes.qc.ca/
 
Page 247Section 5.Did You Know?
Canada Centre for Remote Sensing

5.7 Did You Know? 
"...let me make this perfectly clear..." 
  
Calgary (Landsat-TM) 
This is a TM scene of Calgary, Canada, where the 1988 Winter Olympics were held. Calgary 
appears quite blue; the agricultural fields to the east are red, while grazing land to the west is 
green. Abutting the southwest corner of the city, is a long rectangular section of land 
stretching towards the west that is darker and more monotone than the other areas around it. 
This is the area of the Sarcee Reserve (T'suu T'ina) which has been held by native people, 
and protected from urbanization and residential construction. Of all the land on the image, this 
land is the closest to the original state of the Calgary region before agriculture and settlements 
reworked the landscape. It looks like an oasis amidst suburbia and farmland. 
Page 248Section 5 Did You Know?
Canada Centre for Remote Sensing
5.8.2 Did You Know? 
 
When you look at a stereo pair of images you perceive a virtual 3D model of the terrain or 
object that was imaged. Through this 3D virtual terrain model (VTM?), it is possible to extract 
cartographic information without using a DEM!  

5.8.3 Did You Know? 
 
A 'close' relative of 3D terrain mapping is 'close range photogrammetry'. Using very similar 
techniques but at very close range, this method is used for 'mapping' an object like a building, 
sculpture or a human face in three dimensions in order to have a precise record of its shape.  
Page 249Section 5 Did You Know?
Canada Centre for Remote Sensing
5.9.3 Did You Know? 
A typical laser fluorosensor operates by emitting 
radiation at a particular wavelength that will be 
easily absorbed by the intended target, for 
instance: oil. The energy thus absorbed by the 
target is given off by emitting another wavelength 
of radiation, which is then detected by a sensor 
(spectrometer) linked to the laser. With aromatic 
hydrocarbons, this form of fluorescence allows a 
'fingerprinting' of the oil, measuring both the 
spectra of the radiation given off, as well as the 
decay rate of the fluorescence. Thus oils can be 
differentiated from other fluorescing targets and 
even identified into basic oil types (light, heavy, 
etc.).  

5. Whiz Quiz and Answers
 
 
5.2 Whiz Quiz 
Crop Circles Seen from Space!
 
 
Every spring seems to bring a resurgence of the mysterious crop circles seen in farmers' 
fields around the world, often attributed to the work of aliens. Finally, these crop circles have 
been observed by a remote sensing device! Landsat TM captured this view while over 
southern Alberta. Look at the green circles on the image - how could they have been caused, 
other than by alien activity? 
 
Page 250Section 5 Whiz Quiz and Answers
Canada Centre for Remote Sensing
5.2 Whiz Quiz Answer 
The "crop circles" are in fact, healthy crops irrigated using a pivot irrigation system - not the 
result of alien tricks. In the dry southern prairies, farmers rely on pivot irrigation systems to 
keep the crops watered and healthy. You can see that in the corners of the fields where the 
water fails to reach, the vegetation is missing or has suffered. The brownish grey areas in this 
image are primarily rangeland, while the crops appear green. Crops can be successfully 
grown if a regular irrigation routine is followed, but this puts a heavy demand on water 
resources in a typically dry area. 

5.3 Whiz Quiz 
 
Why are lines being cut out of this forested area in northern Alberta? 
Page 251Section 5 Whiz Quiz and Answers
Canada Centre for Remote Sensing
5.3 Whiz Quiz Answer 
In northern Alberta, forests are being cut for pulp and paper mills, but they are also being cut 
for another reason. Exploration and infrastructure for gas wells requires that forests be cut for 
seismic lines, pipeline routing, access to sites, and pumping stations. 

5.7 Whiz Quiz 
 
More alien circles?
 
These are even stranger circles than the ones we first encountered. The outer circles are tens 
of kilometers across. What could have created this shape, and other than being a landing 
target for UFOs, what possible land use could it serve?  
Page 252Section 5 Whiz Quiz and Answers
Canada Centre for Remote Sensing
5.7 Answer 
You had a good guess if you thought these circles were created by an ancient civilization, like 
the Aztecs, or it represents a giant teepee ring. But it's not correct. Try again. 
The circles are part of a military base in southern Alberta. The land is used for practice 
maneuvers and is "protected" from the ranging and farming on nearby dry grassland. The 
circles identify radial distances from 'ground zero', where various real and simulated 
explosions were conducted by the military.  

5.9.1 Whiz Quiz 
What on earth is this 'feature' and how is it that RADARSAT can 'see' it? 
 
 
Page 253Section 5 Whiz Quiz amd Answers
Canada Centre for Remote Sensing
5.9.1 Answer 
Imaged over the Labrador Sea, this RADARSAT image shows a number of 'imprints' made on 
the ocean surface by unusual atmospheric conditions. Though the radar beams themselves 
are not affected by the atmosphere, they have recorded the ocean topographic effects from 
atmospheric phenomena such as a large low pressure cell 
(A)
, atmospheric gravity waves 
(B)
and a region of multiple rising/falling air currents 
(C)
. In each case, where the falling air mass 
dampens ocean waves, the radar backscatter is lessened, while the rising air mass induces 
surface wind, which in turn increases ocean waves and therefore, radar backscatter. Higher 
backscatter is shown in the imagery as brighter areas. 

 
Credits
 
 
Acknowledgements 
We would like to recognize the contributions made by several organizations and 
individuals to this tutorial:  
The bulk of the tutorial was prepared by Intermap Technologies Ltd. of Calgary and Ottawa, 
under contract to CCRS and funded through the User Education and Training Initiative (UETI). 
RADARSAT International Inc. and the Canadian Space Agency provided permission to use 
much of the satellite imagery herein.  
Several CCRS scientists assisted in reviewing the contents of the tutorial.  
The CCRS Multimedia Applications Team produced the various versions, contributing the 
coding, design, editing, graphics and quality control of the tutorial.  
  
References 
The following publications were used in the preparation of this tutorial:  

Campbell, J.B. (1987) 
Introduction to Remote Sensing.
 The Guilford Press, New 
York.  

Lillesand, T.M. and Kiefer, R.W. (1994) 
Remote Sensing and Image Interpretation
. 
John Wiley and Sons Inc., New York.  

Jensen, John R. (1986) 
Introductory Digital Image Processing.
 Prentice-Hall, New 
Jersey.  

Russ, John C. (1995) 
The Image Processing Handbook.
 2nd edition. CRC Press, 
Baca Raton.  

Dougherty, Edward R. and Charles R. Giardina (1987) 
Matrix Structured Image 
Page 254Fundamentals of Remote Sensing - Credits
Canada Centre for Remote Sensing

Processing
. Prentice-Hall, New Jersey.  

Computer Eye: Handbook of Image Processing.
 Spatial Data Systems Inc., 
California.  

Jain, Anil K. (1989) 
Fundamentals of Digital Image Processing.
 Prentice-Hall, New 
Jersey.  

Wahl, Freidrich M. (1987) 
Digital Image Signal Processing.
 Artech House, Boston.  

Yu, Francis T.S. and Suganda Jutamulia (1992) 
Optical Signal Processing, 
Computing, and Neural Networks.
 John Wiley & Sons, New York.  
Canada Centre for Remote Sensing/Natural Resources Canada (1997). 
GlobeSAR2 
Radar Image Processing and Information Extraction Workbook Version 1.2.
 
Ottawa, Ontario, Canada.  

Barton, D. & S. Leonov (eds.) (1997) 
Radar technology encyclopedia
, 511 p., Artec 
House, Norwood, MA, USA, ISBN 0-89006-893-3  

Oliver, C. & S. Quegan (1998)
 Understanding synthetic aperture radar images
, 479 
p., Artech House, Norwood, MA, USA, ISBN 089006850X.  

Werle D. (1988 and 1992) 
Radar Remote Sensing - A Training Manual
, 193p, 75 
35mm slides, Dendron Resource Surveys Ltd, Ottawa, Ontario, Canada, ISBN 0-
9693733-0-9  
Page 255Fundamentals of Remote Sensing - Credits
Canada Centre for Remote Sensing

 
Permission for Use
 
 
This tutorial may be copied in any form and used for 
non-commercial purposes
 provided 
that: the content of any copy is 
not altered
 and, it is clearly indicated that the Canada Centre 
for Remote Sensing is the originator of this material.  
Page 256Fundamentals of Remote Sensing - Permission for Use
Canada Centre for Remote Sensing

 
Download Formats
 
 
Page 257Fundamentals of Remote Sensing - Download
Canada Centre for Remote Sensing
Is this tutorial available in other formats? Can I use multiple copies off-
line? 
If you want to use a hard copy version of this tutorial, then download the PDF version and 
print it in colour. It can be printed on either 8½" x 11" or A4 paper 

 
Notes for Teachers and Students
 
 
Page 258Fundamentals of Remote Sensing - Teachers notes
Canada Centre for Remote Sensing
What is the target audience for this tutorial? 
This tutorial on remote sensing technology and applications is designed primarily for 
late high school or early university students
. Some previous exposure to 
science, mathematics and environmental studies is a definite advantage. 
What are the features of the tutorial? How does it relate to the rest of 
the CCRS Web site? 
The tutorial is structured as a course, with each section building on the concepts introduced in 
the previous sections and chapters. The numerous images and graphics, as well as 
interesting facts, help explain and illustrate difficult concepts. Each chapter also includes 
several questions and quizzes to test the reader's understanding of the subject matter. These 
quizzes may serve as excellent reviews of each chapter. Informative and sometimes 
humorous facts in the "Did You Know?" pages are designed to complement the associated 
section with anecdotes and examples of how remote sensing is used throughout the world.  
Covering the material in the tutorial prepares the reader for visiting and appreciating the rest 
of the CCRS Web site, wherein technical and research articles on most remote sensing topics 
can be found. An extensive glossary of remote sensing terminology and other educational 
modules are also available and may be of interest to the student or teacher.  
Is this tutorial available in other formats? Can I use multiple copies off-
line? 
We now have a copy of the "Fundamentals of Remote Sensing Tutorial" in HTML format that 
may be downloaded via FTP. It has been compressed and formatted into a zip version and is 
about 5.2MB in size. It can be downloaded and then copied onto several machines for 
classroom (non-commercial) usage without an Internet connection. Please read the included 
"readme.txt" file to learn about the constraints and limitations of using such a copy. 
If you want to use a hard copy version of this tutorial, then download the PDF version and 
print it in colour. It can be printed on either 8½" x 11" or A4 paper 

## Document Information
- **Source**: PDF Document (258 pages)
- **Category**: lab-material
- **Difficulty**: advanced
- **Relevant Labs**: general
- **Topics**: classification, clustering, coordinate system, crs, gee, gis, mapping, projection, raster, remote sensing, satellite, vector

## AI Assistant Usage
Ask the chatbot:
- "Explain http://pcmas1.ccrs.nrcan.gc.ca/fundam/chapter1/chapter1_1_e.htm"
- "How does this relate to [specific topic]?"
- "Give me examples from this document"
- "What are the key points about [topic] in this document?"

## Quick References
- classification
- clustering
- coordinate system
- crs
- gee
- gis
- mapping
- projection
- raster
- remote sensing
