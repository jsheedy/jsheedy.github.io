# Line Segment Intersection (Bentley-Ottmann)

## Overview
Interactive visualization of the Bentley-Ottmann sweep line algorithm for finding all intersections among a set of line segments. This elegant algorithm reduces the naive O(n²) approach to O((n+k) log n) where k is the number of intersections.

## Algorithm

**Bentley-Ottmann Sweep Line**:
- Vertical sweep line moves left to right
- Event queue: segment endpoints and intersections
- Status structure: segments currently crossing sweep line
- Only adjacent segments in status can intersect

**Events**:
1. **Left endpoint**: Insert segment into status, check neighbors
2. **Right endpoint**: Remove segment, check if neighbors now adjacent
3. **Intersection**: Swap segment order, check new neighbors

**Key Insight**: Segments must become adjacent in the status structure before they can intersect. This limits comparisons dramatically.

## Use Cases
- **Computer graphics**: Hidden surface removal, clipping
- **GIS**: Map overlay, polygon operations
- **CAD**: Design rule checking, collision detection
- **VLSI**: Wire intersection detection
- **Computational geometry**: Foundation for many algorithms

## Interactive Features
- **Draw segments**: Click-drag to create line segments
- **Random generation**: Create n random segments
- **Sweep animation**: Watch the sweep line progress
- **Event queue display**: Show upcoming events
- **Status structure**: Show active segments ordered by y
- **Intersection highlighting**: Mark found intersections

## Visual Elements
- **Sweep line**: Vertical line moving across canvas
- **Active segments**: Highlighted where crossing sweep line
- **Event points**: Circles at endpoints and intersections
- **Status order**: Segments labeled by their order
- **Intersection markers**: Bright dots at found intersections
- **Segment colors**: Different color per segment

## Data Structure Visualization
- **Event queue**: Priority queue shown as sorted list
- **Status tree**: Balanced BST of active segments
- **Neighbor pairs**: Lines connecting adjacent segments

## Performance Stats
- Segments count
- Intersections found
- Events processed
- Comparisons made
- Naive vs. sweep line comparison

## Controls
- Segment count slider
- Animation speed slider
- Step-through mode
- Show/hide event queue
- Show/hide status structure
- Clear all segments
- Random segment generation

## Visual Theme
**Terminal/Matrix Aesthetic**
- Green segments on black background
- Bright sweep line
- Glowing intersection points
- Event queue as terminal output
