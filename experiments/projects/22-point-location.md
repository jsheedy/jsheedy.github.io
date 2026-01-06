# Point Location (Trapezoidal Map)

## Overview
Interactive visualization of point location using trapezoidal decomposition. Given a planar subdivision (line segments), preprocess it to answer "which region contains this query point?" in O(log n) time. Essential for map applications and geometric queries.

## Algorithm

**Trapezoidal Decomposition**:
- Extend vertical lines from each segment endpoint
- Creates trapezoids (or triangles at boundaries)
- Each trapezoid has at most 4 sides
- Randomized incremental construction: O(n log n) expected

**Search Structure (DAG)**:
- Directed acyclic graph for queries
- X-nodes: "Is point left or right of this x-coordinate?"
- Y-nodes: "Is point above or below this segment?"
- Leaf nodes: Trapezoid identifiers

**Query Process** - O(log n):
1. Start at DAG root
2. At X-node: go left or right based on x-coordinate
3. At Y-node: test point against segment
4. Reach leaf: found containing trapezoid

## Use Cases
- **GIS**: "Which country/region is this coordinate in?"
- **Computer graphics**: Ray tracing acceleration
- **CAD**: Design rule checking
- **Map applications**: Location services
- **Game development**: Spatial queries

## Interactive Features
- **Draw segments**: Click-drag to create segments
- **Query mode**: Click to find containing trapezoid
- **Incremental construction**: Watch map build segment by segment
- **DAG visualization**: Show search structure alongside
- **Query path highlight**: Show nodes visited during search
- **Vertical extensions**: Toggle visibility

## Visual Elements
- **Line segments**: Input geometry
- **Trapezoids**: Shaded regions with distinct colors
- **Vertical extensions**: Dashed lines from endpoints
- **Query point**: Highlighted marker
- **Containing trapezoid**: Bright highlight on result
- **DAG tree**: Search structure visualization
- **Query path**: Highlighted nodes in DAG

## Step-by-Step Construction
- Add one segment at a time
- Show new trapezoids created
- Update DAG structure
- Animate vertical extensions

## Query Visualization
- Show point moving through DAG
- Highlight each decision
- Display comparison being made
- Final trapezoid highlighted

## Performance Stats
- Segment count
- Trapezoid count
- DAG depth
- Query nodes visited
- Average query time

## Controls
- Draw/query mode toggle
- Clear segments
- Generate random segments
- Animation speed
- Show/hide DAG
- Show/hide vertical lines
- Step-through construction

## Visual Theme
**Terminal/Matrix Aesthetic**
- Green segments on black
- Trapezoids with translucent fills
- Glowing query point
- DAG as terminal tree structure
