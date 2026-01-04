# Diffusion Limited Aggregation (DLA) / Brownian Tree

## Overview
Mesmerizing fractal growth simulation where random-walking particles stick to a growing structure, creating dendritic, tree-like, or coral-like patterns found in nature: lightning, snowflakes, crystal growth, and bacterial colonies.

## Algorithm Details

**Basic DLA Process**:
1. Seed structure at center (single particle or circle)
2. Spawn walker at random position on spawn circle
3. Walker performs random walk (Brownian motion)
4. If walker touches structure, it sticks permanently
5. If walker gets too far, remove and spawn new one
6. Repeat thousands/millions of times

**Random Walk**:
- Move to random adjacent cell (4 or 8 directions)
- Optional bias toward/away from center
- Step size affects growth density
- Angular bias creates asymmetric growth

**Optimization Strategies**:
- **Spawn radius**: Start walkers near growth frontier
- **Kill radius**: Remove walkers that escape too far
- **Spatial grid**: Fast lookup for collision detection
- **Batch walkers**: Simulate multiple particles simultaneously
- **Circular buffer**: Reuse walker objects

**Variants**:
- **Internal DLA**: Walkers start inside, stick to boundary
- **Channel DLA**: Growth constrained to space between walls
- **Dielectric Breakdown**: Probabilistic sticking based on field
- **Eden Growth**: Immediate neighbor growth (non-diffusive)

## Use Cases
- **Science Education**: Visualizing diffusion, crystal growth
- **Physics**: Understanding fractal dimension, percolation
- **Procedural Generation**: Trees, lightning, roots, veins
- **Art**: Generative artwork, natural form visualization
- **Materials Science**: Modeling aggregation processes

## Interactive Features
- **Real-time growth**: Watch structure evolve particle by particle
- **Speed control**: Particles per frame slider
- **Click to seed**: Add seed points during growth
- **Attraction zones**: Click to place attracting regions
- **Repulsion zones**: Create holes and channels
- **Color modes**: Rainbow, gradient by distance, by time
- **Growth statistics graph**: Track growth over time
- **Export image**: Save final structure as PNG/SVG

## Visual Elements
- **Particle coloring**: By distance from center, age, branch depth
- **Size variation**: Thicker particles at older/core regions
- **Glow effects**: Luminescent particles
- **Background**: Black void or gradient radial
- **Walker visualization**: Show active random walkers (optional)
- **Growth frontier**: Highlight boundary where sticking occurs
- **Fractal dimension indicator**: Estimate from structure

## Growth Patterns
- **Radial**: Classic circular dendritic growth
- **Directional**: Bias creates "wind blown" effect
- **Multi-seed**: Multiple competing centers
- **Linear**: Growth along a line (electrodeposition)
- **Channel**: Growth between parallel walls
- **Eden**: Dense, circular growth (no diffusion)

## Performance Stats
- Total particles stuck
- Active walkers
- Current spawn radius
- Particles added per second
- Structure bounding box
- Estimated fractal dimension
- Frames per second

## Controls
- Particles per frame: 1-1000
- Stick probability: 0.1-1.0 (some variants)
- Walker step size: 1-10 pixels
- Number of simultaneous walkers: 1-100
- Angular bias: -1 to 1 (directional growth)
- Inward/outward bias: -1 to 1
- Spawn radius multiplier: 1.0-2.0
- Kill radius multiplier: 1.5-5.0
- Seed pattern selector
- Color scheme selector
- Show walkers toggle
- Clear and restart
- Pause/resume growth

## Seed Patterns
- Single center point (classic)
- Horizontal/vertical line
- Circle outline
- Multiple random points
- Custom drawn shape
- Text outline

## Color Schemes
- **Distance from center**: Rainbow or gradient
- **Time-based**: Color by when particle stuck
- **Branch depth**: Estimate hierarchical level
- **Density**: Local particle concentration
- **Monochrome**: Classic black on white

## Visual Theme
Dark background with luminous colored particles (aurora/galaxy feel), or terminal aesthetic with green particles on black for matrix-style growth visualization.

## Implementation Notes
Use spatial grid (2D array or hash map) for O(1) collision detection. Store only occupied cells to save memory. Consider WebGL for >100k particles with point sprites. Implement adaptive spawn radius: grows with structure. Optional multi-threading with Web Workers for walker simulation.
