# Barnes-Hut Galaxy Simulation

## Overview
N-body gravitational simulation using the Barnes-Hut algorithm for efficient force calculation. Simulate galaxies, star clusters, and orbital mechanics with O(n log n) performance instead of O(n²) brute force.

## Algorithm Details

**Quadtree Construction**:
- Recursively subdivide space into quadrants
- Each node stores center of mass and total mass
- Leaf nodes contain individual bodies
- Rebuilt every frame as bodies move

**Force Calculation**:
- For each body, traverse quadtree
- If node is far enough away (distance/size > θ), treat as single mass
- Otherwise, recurse into children
- θ (theta) parameter balances accuracy vs speed
- Typical θ = 0.5 gives good results

**Physics**:
- Gravitational force: F = G * m1 * m2 / r²
- Velocity Verlet integration for stable orbits
- Optional collision detection/merging
- Softening parameter prevents singularities

## Use Cases
- **Astrophysics**: Galaxy formation and evolution
- **Education**: Teaching orbital mechanics, n-body problems
- **Game Development**: Space simulations, orbital mechanics
- **Scientific Computing**: Molecular dynamics (modified forces)

## Interactive Features
- **Preset scenarios**: Solar system, binary stars, galaxy collision, globular cluster
- **Click to add bodies**: Place stars with custom mass/velocity
- **Paint mode**: Draw spiral galaxies by dragging
- **Camera controls**: Pan, zoom, follow body
- **Time controls**: Pause, speed up, slow motion
- **Trail rendering**: Show orbital paths

## Visual Elements
- Bodies colored by mass or velocity
- Glow effects for larger masses
- Particle trails fade over time
- Quadtree visualization (toggle)
- Center of mass markers
- Velocity vectors (optional)

## Performance Stats
- Number of bodies
- Force calculations per frame
- Quadtree depth
- Frames per second
- Brute force comparisons saved

## Controls
- θ (theta) accuracy slider: 0.1 (accurate) to 1.0 (fast)
- Gravitational constant slider
- Time step slider
- Softening radius slider
- Trail length slider
- Toggle quadtree visualization
- Preset scenario dropdown

## Visual Theme
Dark space background with glowing particles, terminal green or cosmic purple/blue gradient styling.
