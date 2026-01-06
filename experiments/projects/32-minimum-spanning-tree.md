# Minimum Spanning Tree

## Overview
Interactive visualization comparing Prim's and Kruskal's algorithms for finding minimum spanning trees. An MST connects all vertices with minimum total edge weight—fundamental to network design, clustering, and approximation algorithms.

## Algorithms

**Prim's Algorithm** - O(E log V):
- Start from arbitrary vertex
- Greedily add cheapest edge connecting tree to non-tree vertex
- Use priority queue for efficiency
- Grows single tree from seed

**Kruskal's Algorithm** - O(E log E):
- Sort all edges by weight
- Greedily add cheapest edge that doesn't create cycle
- Use union-find for cycle detection
- Grows forest that eventually connects

**Both produce optimal MST** (same total weight), but build differently.

**Key Property**: Cut property—lightest edge crossing any cut belongs to some MST.

## Use Cases
- **Network design**: Minimum cost to connect all nodes
- **Clustering**: Single-linkage hierarchical clustering
- **Approximation algorithms**: TSP 2-approximation
- **Image segmentation**: Felzenszwalb's algorithm
- **Circuit design**: PCB routing
- **Taxonomy**: Phylogenetic trees

## Interactive Features
- **Create graph**: Click to add vertices, drag to add edges
- **Random graph**: Generate connected graph
- **Algorithm selector**: Prim's or Kruskal's
- **Side-by-side comparison**: Watch both simultaneously
- **Step-through**: See each edge decision
- **Weight editing**: Click edges to modify weights

## Visual Elements
- **Vertices**: Circles at positions
- **Edges**: Lines with weight labels
- **MST edges**: Highlighted (thick, colored)
- **Current edge**: Being considered (yellow)
- **Rejected edges**: Create cycle (red flash)
- **Priority queue/sorted edges**: Algorithm state display
- **Tree growth**: Animate from Prim's seed
- **Forest merging**: Animate Kruskal's unions

## Prim's Visualization
- Highlight starting vertex
- Show priority queue of frontier edges
- Animate edge selection
- Grow tree outward
- Update frontier after each addition

## Kruskal's Visualization
- Show sorted edge list
- Highlight current edge
- Check for cycle (union-find)
- Accept (add) or reject (skip)
- Show disjoint sets merging
- Color components differently

## Comparison Mode
- Two canvases side by side
- Same graph, both algorithms
- Synchronized stepping
- Compare edge selection order
- Both reach same total weight

## Performance Stats
- Vertices count
- Edges count
- MST total weight
- Edges in MST (V-1)
- Edges examined
- Algorithm steps
- Time elapsed

## Controls
- Algorithm selector
- Comparison mode toggle
- Add vertex mode
- Add edge mode
- Generate random graph
- Vertex count slider
- Edge density slider
- Animation speed
- Step forward/back
- Clear graph

## Graph Presets
- Complete graph
- Grid graph
- Random geometric graph
- Sparse random graph
- Weighted clusters

## Visual Theme
**Modern Gradient Style**
- Gradient background
- Clean vertex circles
- Weight labels on edges
- Smooth animations
- MST highlighted distinctly
