# A* Pathfinding Visualization

## Overview
Interactive visualization of A* pathfinding algorithm with multiple heuristics and terrain types. A* is the gold standard for game AI pathfinding, combining Dijkstra's guaranteed shortest path with greedy best-first search speed.

## Algorithm Details

**A* Search**:
- f(n) = g(n) + h(n)
- g(n) = actual cost from start to node n
- h(n) = heuristic estimate from n to goal
- Uses priority queue ordered by f(n)
- Explores most promising paths first
- Guaranteed optimal if heuristic is admissible (never overestimates)

**Heuristics**:
- **Manhattan distance**: |x1-x2| + |y1-y2| (4-directional grids)
- **Euclidean distance**: √((x1-x2)² + (y1-y2)²) (any-angle)
- **Chebyshev distance**: max(|x1-x2|, |y1-y2|) (8-directional)
- **Diagonal distance**: Combination for diagonal movement with cost
- **Octile distance**: Optimized diagonal heuristic

**Movement Types**:
- 4-directional (cardinal only)
- 8-directional (includes diagonals)
- Any-angle (theta*, allowing line-of-sight shortcuts)

## Use Cases
- **Game AI**: RTS unit movement, tower defense, RPG pathfinding
- **Robotics**: Mobile robot navigation
- **Route Planning**: GPS navigation with traffic/terrain costs
- **Puzzle Solving**: Sliding puzzles, Rubik's cube solvers

## Interactive Features
- **Click to set start/goal**: Drag to reposition
- **Draw walls**: Paint obstacles with mouse
- **Draw terrain**: Different costs (grass, water, mud, road)
- **Preset maps**: Maze, rooms, open field, fortress
- **Map editor**: Save/load custom maps
- **Algorithm comparison**: A* vs Dijkstra vs Greedy
- **Step-through mode**: See algorithm progress node by node

## Visual Elements
- **Open set**: Nodes being considered (light green)
- **Closed set**: Already evaluated (dark green)
- **Current node**: Being evaluated (yellow)
- **Path**: Final route (bright cyan)
- **Walls**: Solid black
- **Terrain**: Color-coded by movement cost
- **Arrows**: Show parent pointers
- **Cost numbers**: Display g, h, and f values

## Performance Stats
- Nodes explored
- Path length
- Total cost
- Time to solution
- Nodes in open/closed sets
- Algorithm efficiency vs Dijkstra

## Controls
- Algorithm selector: A*, Dijkstra, Greedy Best-First, BFS
- Heuristic selector: Manhattan, Euclidean, Chebyshev, etc.
- Movement type: 4-dir, 8-dir, any-angle
- Diagonal cost multiplier (√2 for accurate)
- Animation speed slider
- Step forward/backward buttons
- Terrain type brush selector
- Clear walls/terrain/path buttons
- Grid size slider

## Visual Theme
Clean modern gradient style with color-coded terrain and clear path highlighting.
