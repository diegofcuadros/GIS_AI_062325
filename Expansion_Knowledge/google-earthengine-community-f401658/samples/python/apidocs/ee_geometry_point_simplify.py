# Copyright 2023 The Google Earth Engine Community Authors
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# [START earthengine__apidocs__ee_geometry_point_simplify]
# Define a Point object.
point = ee.Geometry.Point(-122.082, 37.42)

# Apply the simplify method to the Point object.
point_simplify = point.simplify(maxError=1)

# Print the result.
display('point.simplify(...) =', point_simplify)

# Display relevant geometries on the map.
m = geemap.Map()
m.set_center(-122.085, 37.422, 15)
m.add_layer(point, {'color': 'black'}, 'Geometry [black]: point')
m.add_layer(point_simplify, {'color': 'red'}, 'Result [red]: point.simplify')
m
# [END earthengine__apidocs__ee_geometry_point_simplify]
