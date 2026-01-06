# Alpha Shapes

## Overview
Interactive visualization of alpha shapes—a generalization of convex hulls that can capture concave boundaries. By varying the alpha parameter, you can transition smoothly from individual points to the convex hull.

## Algorithm

**Alpha Shape Concept**:
- Imagine a circle of radius 1/α rolling around the points
- The alpha shape is the boundary the circle cannot penetrate
- α = 0: All points are boundary (discrete set)
- α = ∞: Convex hull
- Intermediate α: Concave boundaries revealed

**Construction via Delaunay**:
1. Compute Delaunay triangulation
2. For each edge, compute its "alpha value" (circumradius)
3. Keep edges with alpha value ≤ 1/α
4. Keep triangles where all edges survive
5. Extract boundary of remaining triangles

**Alpha Value of Edge**:
- Radius of smallest empty circle through edge endpoints
- Empty = no other points inside

## Use Cases
- **Shape reconstruction**: Point cloud boundaries
- **GIS**: Coastline detection, territory boundaries
- **Molecular biology**: Protein surface reconstruction
- **Computer vision**: Object boundary detection
- **Terrain analysis**: Feature extraction

## Interactive Features
- **Click to add points**: Build point cloud
- **Alpha slider**: Adjust α parameter in real-time
- **Delaunay overlay**: Show underlying triangulation
- **Circumcircle display**: Show circles for edges
- **Boundary extraction**: Highlight alpha shape boundary
- **Animation**: Sweep through alpha values

## Visual Elements
- **Points**: Input point set
- **Delaunay edges**: Full triangulation (dim)
- **Alpha edges**: Edges in alpha complex (bright)
- **Alpha triangles**: Interior triangles
- **Boundary**: Alpha shape outline (brightest)
- **Rolling circle**: Visualization of α-ball concept
- **Circumcircles**: For edge alpha values

## Alpha Value Visualization
- Color edges by their alpha value
- Show threshold line on gradient
- Edges fade in/out as α changes
- Histogram of alpha values

## Presets
- **Scattered points**: Random distribution
- **Crescent moon**: Concave shape
- **Ring/annulus**: Hole in middle
- **Coastline**: Irregular boundary
- **Clusters**: Multiple groups

## Performance Stats
- Point count
- Delaunay edges
- Alpha complex edges
- Boundary vertices
- Current alpha value

## Controls
- Alpha slider (log scale for range)
- Point count slider
- Generate points button
- Preset selector
- Show/hide Delaunay
- Show/hide circumcircles
- Animate alpha sweep

## Visual Theme
**Terminal/Matrix Aesthetic**
- Green boundary on black
- Edges fade based on alpha value
- Glowing boundary points
- Alpha value displayed prominently
