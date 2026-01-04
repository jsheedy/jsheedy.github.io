# Differential Growth / Nervous System

## Overview
Organic growth simulation creating intricate, brain-like patterns through simple local rules. Nodes connected in a path grow apart while avoiding overlaps, producing beautiful coral-like or neuronal structures.

## Algorithm Details

**Growth Process**:
1. Start with simple closed path (circle of connected nodes)
2. Apply forces to each node:
   - **Separation**: Push away from nearby non-neighbor nodes
   - **Attraction**: Pull toward connected neighbors (maintain spacing)
   - **Alignment**: Smooth path curvature
3. Split edges when they exceed max length (growth)
4. Prevent splitting when too close to others (collision)
5. Iterate until stable or max nodes reached

**Spatial Optimization**:
- Spatial hashing or quadtree for neighbor queries
- Only check nearby nodes for collision
- Critical for performance with 10k+ nodes
- Similar to boids but with path connectivity constraint

**Force Balance**:
- **Max edge length**: Triggers node insertion (growth rate)
- **Min separation**: Prevents overlapping (collision radius)
- **Attraction strength**: Keeps path connected
- **Smoothing**: Prevents jagged growth

## Use Cases
- **Generative Art**: Create unique organic forms
- **Procedural Generation**: Terrain features, cave systems, veins
- **Data Visualization**: Network growth, urban sprawl
- **Biology Education**: Visualize growth processes, morphogenesis
- **Creative Coding**: Interactive installations, live performances

## Interactive Features
- **Seed shapes**: Start from circle, line, multiple circles
- **Growth speed**: Control iterations per frame
- **Obstacles**: Click to place repelling/attracting regions
- **Asymmetric growth**: Different rates on path segments
- **Color evolution**: Gradient based on node age or density
- **Prune branches**: Remove slow-growing regions
- **Export SVG**: Save final form for plotting/printing
- **Time-lapse**: Record growth process

## Visual Elements
- **Path rendering**: Smooth curves connecting nodes
- **Node coloring**: By age, speed, curvature, density
- **Thickness variation**: Thicker at older/denser regions
- **Glow effects**: Inner glow for organic appearance
- **Background texture**: Aged paper or dark void
- **Growth animation**: Watch structure evolve in real-time
- **Trail overlay**: Fade previous states for depth

## Growth Patterns
- **Brain/Coral**: Dense, wrinkled, brain-like forms
- **Nervous System**: Branching, tree-like structures
- **Maze**: Tight, labyrinthine patterns
- **Lichen**: Sparse, expansive growth
- **Hybrid**: Multiple seeds with competition

## Performance Stats
- Total nodes
- Edges split this frame
- Collisions detected
- Frames per second
- Growth rate (nodes/sec)
- Spatial hash cells used

## Controls
- Play/pause/reset
- Iterations per frame: 1-100
- Max edge length (growth trigger): 5-50px
- Min separation distance: 3-20px
- Attraction strength: 0-1
- Repulsion strength: 0-1
- Smoothing strength: 0-1
- Max nodes limit: 1k-50k
- Path thickness: 1-10px
- Seed shape selector
- Color palette selector
- Add obstacle tool
- Export SVG button

## Seed Patterns
- Single circle (classic)
- Multiple circles (competing colonies)
- Line segment (directional growth)
- Random points (distributed start)
- Custom drawing (user-defined path)

## Visual Theme
Clean artistic look with smooth curves and organic colors (earth tones, pastels), or terminal aesthetic with green growth on black for bio-computer feel.

## Implementation Notes
Spatial hashing essential for >5k nodes. Use TypedArrays for node positions. Render with canvas quadratic curves or WebGL lines. Consider adaptive subdivision: split into multiple paths when they grow too complex to maintain as single structure.
