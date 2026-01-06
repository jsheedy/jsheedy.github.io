# Polygon Triangulation (Ear Clipping)

## Overview
Interactive visualization of the ear clipping algorithm for decomposing simple polygons into triangles. Triangulation is fundamental to computer graphics—GPUs render triangles, so all polygons must be triangulated before rendering.

## Algorithm

**Ear Clipping** - O(n²):
- An "ear" is a triangle formed by three consecutive vertices where:
  - The middle vertex is convex (interior angle < 180°)
  - No other polygon vertices lie inside the triangle
- Remove ears one at a time until only a triangle remains
- Each removal reduces polygon by one vertex
- n-2 triangles for n vertices

**Two Ears Theorem**: Every simple polygon with more than 3 vertices has at least two ears.

**Process**:
1. Find all convex vertices
2. For each convex vertex, check if it forms an ear
3. Remove one ear, add triangle to output
4. Update convex/reflex status of neighbors
5. Repeat until done

## Use Cases
- **3D Graphics**: Mesh generation for rendering
- **Game development**: Collision mesh creation
- **CAD/CAM**: Surface tessellation
- **Finite element analysis**: Mesh generation
- **GIS**: Terrain triangulation

## Interactive Features
- **Click to create polygon**: Add vertices in order
- **Close polygon**: Double-click or connect to start
- **Drag vertices**: Modify polygon shape
- **Step-through triangulation**: Watch ears being clipped
- **Highlight ears**: Show all current valid ears
- **Convex/reflex markers**: Label vertex types

## Visual Elements
- **Polygon outline**: Main polygon boundary
- **Convex vertices**: Green markers
- **Reflex vertices**: Red markers
- **Current ear**: Highlighted triangle being considered
- **Ear diagonal**: Line connecting ear endpoints
- **Triangles**: Filled with alternating colors
- **Point-in-triangle test**: Show test points

## Polygon Options
- **Preset shapes**: Star, arrow, L-shape, random
- **Concave examples**: Shapes with reflex vertices
- **Complex polygons**: Many vertices for stress testing
- **Self-intersecting warning**: Detect invalid input

## Performance Stats
- Vertex count
- Triangles created
- Ears found per iteration
- Point-in-triangle tests
- Time elapsed

## Controls
- Clear polygon button
- Generate random polygon
- Preset shape selector
- Animation speed slider
- Step forward/back
- Show/hide ear candidates
- Show/hide vertex classification

## Visual Theme
**Terminal/Matrix Aesthetic**
- Green polygon outline on black
- Triangles filled with translucent green shades
- Glowing current ear
- Animated diagonal drawing
