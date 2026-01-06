# Rotating Calipers

## Overview
Interactive visualization of the rotating calipers technique for computing optimal properties of convex polygons in linear time. Like holding a polygon between two parallel rulers and rotating them around it.

## Algorithm

**Rotating Calipers** - O(n):
- Requires convex hull as input
- Two parallel lines rotate around the hull
- Lines always touch the hull at "antipodal" points
- Complete rotation visits all antipodal pairs

**Key Properties Computed**:
- **Diameter**: Maximum distance between any two points
- **Width**: Minimum distance between parallel supporting lines
- **Minimum bounding box**: Smallest enclosing rectangle
- **Maximum inscribed rectangle**: Largest rectangle inside

## Applications

**Diameter (Farthest Pair)**:
- Find the two points farthest apart
- Useful for shape analysis, bounding spheres

**Minimum Bounding Box**:
- Smallest area rectangle containing all points
- One edge always flush with hull edge
- Applications: packing, collision detection

**Width**:
- Minimum "thickness" of point set
- Perpendicular to diameter direction

## Use Cases
- **Computer vision**: Object recognition, shape matching
- **Robotics**: Grasp planning, manipulation
- **Packing problems**: Container optimization
- **GIS**: Building footprint analysis
- **Manufacturing**: Material optimization

## Interactive Features
- **Create points**: Click to add points
- **Convex hull display**: Auto-computed hull
- **Animated rotation**: Watch calipers spin
- **Property selector**: Choose what to compute
- **Antipodal highlighting**: Show current pair
- **Result overlay**: Display computed shape

## Visual Elements
- **Convex hull**: Polygon outline
- **Caliper lines**: Two parallel lines rotating
- **Antipodal points**: Highlighted vertices
- **Diameter line**: Connects farthest pair
- **Bounding box**: Rectangle overlay
- **Width indicators**: Perpendicular distance
- **Rotation angle**: Current angle display

## Step-by-Step Mode
- Show each antipodal pair considered
- Highlight when optimal is found
- Display measurements at each step
- Compare to brute force approach

## Performance Stats
- Hull vertices
- Antipodal pairs examined
- Rotation steps
- Optimal value found
- Brute force comparison

## Controls
- Property selector (diameter/width/bbox)
- Point count slider
- Animation speed
- Step-through mode
- Show/hide measurements
- Clear points
- Generate random points

## Visual Theme
**Terminal/Matrix Aesthetic**
- Green hull on black
- Bright caliper lines
- Glowing antipodal points
- Measurement readouts in terminal font
