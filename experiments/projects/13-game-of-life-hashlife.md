# Conway's Game of Life with HashLife

## Overview
Conway's Game of Life cellular automaton with optional HashLife optimization for exponentially faster computation. Simulate billions of generations instantly using memoization and quadtree spatial partitioning.

## Algorithm Details

**Game of Life Rules**:
- Cell with 2-3 neighbors survives
- Dead cell with exactly 3 neighbors becomes alive
- All other cells die or stay dead
- Simple rules create complex emergent behavior

**Naive Implementation**:
- 2D grid stored as array
- Count neighbors for each cell (8 directions)
- Apply rules simultaneously to all cells
- O(n) per generation for n cells

**HashLife Optimization**:
- Recursive quadtree spatial partitioning
- Each node represents a square region (power of 2 size)
- Hash table memoizes: "this pattern -> future pattern"
- Can jump forward 2^(k-2) generations for depth k node
- Exponential speedup for patterns with regularity

**Pattern Types**:
- **Still lifes**: Block, beehive, loaf, boat
- **Oscillators**: Blinker, toad, pulsar, pentadecathlon
- **Spaceships**: Glider, LWSS, MWSS, HWSS
- **Methuselahs**: R-pentomino, acorn, diehard
- **Guns**: Gosper glider gun, Simkin glider gun

## Use Cases
- **Mathematics**: Cellular automata, emergence, computational theory
- **Computer Science**: Demonstrates Turing completeness
- **Education**: Teaching algorithms, complexity, optimization
- **Art**: Generative patterns, live coding performances
- **Game Development**: Procedural generation techniques

## Interactive Features
- **Click to toggle cells**: Draw patterns directly
- **Drag to paint**: Fill regions quickly
- **Pattern library**: Load famous configurations
- **RLE import/export**: Standard pattern format
- **Speed controls**: Steps per second, generation skip
- **Pan and zoom**: Explore infinite grid
- **Time travel**: Rewind/fast-forward through history
- **Population graph**: Track alive cells over time

## Visual Elements
- **Grid view**: Classic black/white or color by age
- **Cell age coloring**: Gradient from birth to death
- **Population density heatmap**: Show busy regions
- **Trail mode**: Fade recently dead cells
- **Infinite canvas**: Pan beyond initial boundaries
- **Quadtree visualization**: Show HashLife spatial structure
- **Statistics overlay**: Generation, population, births/deaths

## Pattern Categories
- **Gliders & Spaceships**: Moving patterns
- **Guns**: Periodic glider generators
- **Puffers**: Leave debris trails
- **Rakes**: Emit spaceships
- **Breeders**: Quadratic growth
- **Methuselahs**: Small start, long stabilization
- **Infinite growth**: Linear growth patterns

## Performance Stats
- Current generation number
- Living cells
- Births/deaths this generation
- Grid bounding box
- HashLife cache size (if enabled)
- Generations per second
- Memory usage

## Controls
- Play/pause button
- Step forward/backward buttons
- Speed slider: 1-60 generations/sec
- Generation skip: 2^n generations (HashLife)
- Toggle HashLife optimization
- Grid size (if not infinite)
- Pattern selector dropdown
- Random fill percentage
- Clear grid button
- Color scheme selector
- Rule variant (B3/S23 standard, others)
- Wrap edges toggle (torus topology)

## Rule Variants
- **B3/S23**: Standard Conway's Life
- **HighLife**: B36/S23 (has replicator)
- **Day & Night**: B3678/S34678 (symmetric)
- **Seeds**: B2/S (explosive growth)
- **Coral**: B3/S45678 (crystalline growth)

## Visual Theme
Either clean modern grid with smooth zoom/pan, or terminal aesthetic with green cells on black matrix-style background.

## Implementation Notes
Start with naive implementation for clarity. Add HashLife as optional optimization, accessible via toggle. Use TypedArrays or bitsets for memory efficiency. Canvas or WebGL rendering depending on grid size. Support infinite canvas with virtual scrolling.
