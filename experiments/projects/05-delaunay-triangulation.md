# Delaunay Triangulation

## Overview
Interactive visualization of Delaunay triangulation, a geometric structure that connects points with triangles such that no point lies inside the circumcircle of any triangle. The dual structure of Voronoi diagrams, Delaunay triangulations are fundamental in computational geometry with applications in terrain modeling, mesh generation, and interpolation.

## Algorithm

### Bowyer-Watson Algorithm (Incremental)
- O(n²) average case, O(n log n) with proper data structures
- Add points one at a time
- Find triangles whose circumcircles contain new point
- Remove those triangles
- Re-triangulate the resulting hole

### Lawson's Algorithm (Edge Flipping)
- Start with any triangulation
- Iteratively flip edges that violate Delaunay condition
- Terminates when all edges are locally Delaunay
- O(n²) worst case

### Divide and Conquer
- O(n log n) guaranteed
- Recursively split point set
- Merge triangulations
- More complex implementation

## Use Cases
- **Terrain Mesh Generation**: Height field triangulation for 3D terrain
- **Natural Neighbor Interpolation**: Smooth data interpolation
- **Game Navigation Meshes**: Pathfinding on polygon meshes
- **Finite Element Analysis**: Mesh generation for simulations
- **Image Processing**: Triangulation-based image warping
- **Computational Geometry**: Foundation for many algorithms
- **Dual of Voronoi**: Geometric relationship visualization

## Interactive Features

### Point Management
- **Click to add points**: Build triangulation interactively
- **Drag points**: Move points and watch triangulation update
- **Delete points**: Right-click to remove
- **Random generation**: Generate N random points
- **Grid pattern**: Structured point placement
- **Poisson disk**: Evenly-spaced random points
- **Import coordinates**: Paste CSV data

### Visualization Options
- **Show triangles**: Fill or outline
- **Show edges**: Highlight Delaunay edges
- **Show circumcircles**: Display circle through each triangle's vertices
- **Show Voronoi dual**: Toggle Voronoi diagram overlay
- **Highlight circumcenter**: Show triangle centers
- **Color by**:
  - Triangle area
  - Minimum angle (quality metric)
  - Aspect ratio
  - Distance from center

### Animation
- **Incremental construction**: Watch algorithm build triangulation step-by-step
- **Edge flip animation**: Show Lawson's algorithm improving triangulation
- **Point insertion**: Slow-motion new point addition
- **Highlight affected triangles**: Show which triangles are modified

### Quality Metrics
- **Minimum angle**: Display smallest angle in triangulation
- **Aspect ratio**: Show triangle quality (1.0 = equilateral)
- **Angle histogram**: Distribution of all angles
- **Triangle count**: Total number of triangles
- **Edge count**: Total number of edges

### Advanced Controls
- **Constrained edges**: Force certain edges to remain
- **Holes**: Define regions without triangulation
- **Boundary polygon**: Limit triangulation to region
- **Refinement**: Add Steiner points to improve quality
- **Smoothing**: Lloyd's relaxation for better distribution

## Visual Style
**Flexible** - Either aesthetic works well:

### Option A: Modern Gradient
- Colorful gradient-filled triangles
- Smooth color interpolation
- Circumcircles with subtle transparency
- Clean, mathematical aesthetic
- Rainbow color mapping by angle quality

### Option B: Terminal/Matrix
- Green (#00ff41) wireframe on black (#0a0e0a)
- Glowing edges
- Pulsing circumcircles
- Scanline effects
- Retro vector graphics look

**Recommendation**: Modern Gradient for contrast with Voronoi (which should be Terminal)

## Technical Implementation

### Data Structures
```javascript
// Half-edge data structure (efficient for mesh operations)
class HalfEdge {
  vertex;      // Start vertex
  twin;        // Opposite half-edge
  next;        // Next edge in triangle
  face;        // Adjacent triangle
}

// Or simpler triangle list
class Triangle {
  vertices;    // [v0, v1, v2]
  neighbors;   // [t0, t1, t2] (adjacent triangles)
  circumcenter;
  circumradius;
}
```

### Key Operations
```javascript
// Test if point is inside circumcircle
function inCircle(a, b, c, p) {
  const ax = a.x - p.x, ay = a.y - p.y;
  const bx = b.x - p.x, by = b.y - p.y;
  const cx = c.x - p.x, cy = c.y - p.y;

  return (
    (ax*ax + ay*ay) * (bx*cy - cx*by) -
    (bx*bx + by*by) * (ax*cy - cx*ay) +
    (cx*cx + cy*cy) * (ax*by - bx*ay)
  ) > 0;
}

// Calculate circumcircle
function circumcircle(a, b, c) {
  const D = 2 * (a.x * (b.y - c.y) + b.x * (c.y - a.y) + c.x * (a.y - b.y));
  const ux = ((a.x*a.x + a.y*a.y) * (b.y - c.y) +
              (b.x*b.x + b.y*b.y) * (c.y - a.y) +
              (c.x*c.x + c.y*c.y) * (a.y - b.y)) / D;
  const uy = ((a.x*a.x + a.y*a.y) * (c.x - b.x) +
              (b.x*b.x + b.y*b.y) * (a.x - c.x) +
              (c.x*c.x + c.y*c.y) * (b.x - a.x)) / D;
  const radius = Math.sqrt((a.x - ux)**2 + (a.y - uy)**2);
  return { center: {x: ux, y: uy}, radius };
}

// Edge flip test
function shouldFlip(edge) {
  const [a, b] = edge.vertices;
  const [c] = edge.face.opposite(edge);
  const [d] = edge.twin.face.opposite(edge.twin);
  return inCircle(a, b, c, d);
}
```

### Bowyer-Watson Implementation
```javascript
function addPoint(triangulation, point) {
  // 1. Find all triangles whose circumcircles contain point
  const badTriangles = findBadTriangles(point);

  // 2. Find boundary of polygonal hole
  const polygon = findPolygonBoundary(badTriangles);

  // 3. Remove bad triangles
  removeBadTriangles(badTriangles);

  // 4. Re-triangulate hole from new point
  for (const edge of polygon) {
    createTriangle(point, edge.start, edge.end);
  }
}
```

### Performance Optimizations
- **Spatial indexing**: Use grid or quadtree to find nearby triangles
- **Incremental construction**: Faster than divide-and-conquer for interactive use
- **Triangle walking**: Locate triangle containing point efficiently
- **Edge flip queue**: Prioritize flips for faster convergence
- **Point sorting**: Pre-sort points for better locality

## Mathematical Properties

### Delaunay Condition
A triangulation is Delaunay if and only if the circumcircle of every triangle contains no other points.

### Max-Min Angle Theorem
Delaunay triangulation maximizes the minimum angle of all triangles, avoiding "sliver" triangles.

### Empty Circle Property
No point lies inside the circumcircle of any triangle.

## Quality Metrics
```javascript
// Minimum angle in triangle (quality measure)
function minAngle(a, b, c) {
  const angles = [
    Math.acos(dot(ab, ac) / (length(ab) * length(ac))),
    Math.acos(dot(ba, bc) / (length(ba) * length(bc))),
    Math.acos(dot(ca, cb) / (length(ca) * length(cb)))
  ];
  return Math.min(...angles) * 180 / Math.PI;
}

// Aspect ratio (1.0 = equilateral, >1 = elongated)
function aspectRatio(a, b, c) {
  const area = triangleArea(a, b, c);
  const perimeter = length(ab) + length(bc) + length(ca);
  return perimeter / (4 * Math.sqrt(3) * area);
}
```

## Advanced Features
- **Constrained Delaunay**: Force certain edges to appear
- **Conforming Delaunay**: Add Steiner points to enforce constraints
- **Mesh refinement**: Ruppert's algorithm for quality improvement
- **3D Delaunay**: Extend to tetrahedralization
- **Weighted Delaunay**: Power diagrams (weighted Voronoi dual)
- **Export**: SVG, OBJ (for 3D), JSON

## Relationship to Voronoi
```
Delaunay triangulation ←→ Voronoi diagram (dual)
Triangle edge ←→ Shared Voronoi edge
Triangle vertex ←→ Voronoi cell
Circumcenter ←→ Voronoi vertex
```

## Educational Value
- Fundamental computational geometry structure
- Demonstrates duality concept
- Shows iterative refinement algorithms
- Quality metrics and optimization
- Practical applications across many fields

## Use Case Examples

### Terrain Mesh
1. Sample terrain heights at points
2. Compute Delaunay triangulation in (x,y)
3. Assign height z-coordinate to each vertex
4. Render 3D mesh with lighting

### Natural Neighbor Interpolation
1. Triangulate known data points
2. Insert query point temporarily
3. Measure how much each original cell shrinks
4. Interpolate based on stolen area ratios

### Navigation Mesh
1. Place nodes at walkable locations
2. Triangulate nodes
3. Remove triangles in obstacles
4. Pathfind using A* on triangle adjacency

## Implementation Priority
**Medium priority** - Complements Voronoi diagram perfectly (can show both simultaneously as duals), strong educational value, practical applications.

## Suggested Implementation Order
1. Start with simple point insertion (Bowyer-Watson)
2. Add circumcircle visualization
3. Implement Voronoi dual overlay
4. Add animation and quality metrics
5. Constrained edges and refinement (advanced)

## References
- Delaunay, B. (1934). "Sur la sphère vide"
- Bowyer, A. (1981). "Computing Dirichlet tessellations"
- Watson, D. (1981). "Computing the n-dimensional Delaunay tessellation"
- Shewchuk, J.R. (1996). "Triangle: Engineering a 2D Quality Mesh Generator"
- de Berg et al. (2008). "Computational Geometry: Algorithms and Applications"
