# Maze Generation Algorithms

## Overview
Interactive comparison of maze generation algorithms: Recursive Backtracker, Prim's, Kruskal's, and Eller's. Each produces mazes with distinct characteristics—from long winding passages to uniform branching. Perfect for understanding graph algorithms through visual generation.

## Algorithms

**Recursive Backtracker** (DFS):
- Start from random cell
- Randomly walk to unvisited neighbors
- Backtrack when stuck
- Creates long, winding passages
- Biased toward long corridors

**Randomized Prim's**:
- Start with single cell
- Maintain frontier of walls
- Randomly remove wall connecting to maze
- Creates more uniform branching
- Tends toward radial growth

**Randomized Kruskal's**:
- All cells start as separate sets
- Randomly select walls
- Remove if connects different sets (union-find)
- Creates uniform, unbiased mazes
- No directional bias

**Eller's Algorithm**:
- Row-by-row generation
- Uses disjoint sets per row
- Can generate infinite mazes
- Memory efficient: O(width)
- Suitable for streaming

## Use Cases
- **Games**: Procedural level generation
- **Puzzles**: Maze puzzle creation
- **Algorithm education**: Graph traversal visualization
- **Art**: Generative patterns
- **Testing**: Pathfinding algorithm benchmarks

## Interactive Features
- **Algorithm selector**: Switch between algorithms
- **Animated generation**: Watch maze being carved
- **Speed control**: Slow motion to instant
- **Solve maze**: Find path from start to end
- **Regenerate**: New maze with same settings
- **Grid size**: Adjustable dimensions

## Visual Elements
- **Cells**: Maze passages (white/light)
- **Walls**: Barriers (black/dark)
- **Current cell**: Highlighted during generation
- **Stack/frontier**: Show algorithm state
- **Start/end points**: Colored markers
- **Solution path**: Highlighted route
- **Dead ends**: Optional highlighting

## Algorithm Comparison
- **Passage length**: Distribution histogram
- **Dead end count**: Per algorithm
- **Solution length**: Shortest path
- **Branch factor**: Average choices per junction
- **Generation time**: Performance comparison

## Generation Visualization

**Recursive Backtracker**:
- Show stack depth
- Highlight backtracking
- Color by visit order

**Prim's**:
- Show frontier cells
- Highlight wall selection
- Grow from center

**Kruskal's**:
- Show disjoint sets (colors)
- Highlight wall being tested
- Watch sets merge

**Eller's**:
- Row-by-row generation
- Show set assignments
- Visualize vertical connections

## Solving Mode
- BFS shortest path
- DFS exploration
- A* with manhattan heuristic
- Show explored cells
- Animate solution finding

## Performance Stats
- Cells count
- Walls removed
- Generation time
- Dead ends
- Longest passage
- Solution length
- Branching factor

## Controls
- Algorithm dropdown
- Grid width/height sliders
- Generate button
- Animation speed slider
- Step-through mode
- Show/hide solution
- Solve algorithm selector
- Export maze (image/data)

## Presets
- Small (10x10)
- Medium (25x25)
- Large (50x50)
- Long corridor bias
- Many branches

## Visual Theme
**Terminal/Matrix Aesthetic**
- Green passages on black walls
- Glowing current position
- Scanline effect over maze
- Solution path in bright cyan
