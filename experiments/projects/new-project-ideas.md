# 20 New Project Ideas

Based on the existing experiments (boids, quadtree, kd-tree, Delaunay, Voronoi, Barnes-Hut, etc.), here are 20 new project ideas focusing on computational geometry and classic data structures/algorithms.

---

## Computational Geometry

### 1. Convex Hull Algorithms
**Compare Graham Scan, Jarvis March, and Quickhull**
- Interactive point placement on canvas
- Step-through visualization showing each algorithm's approach
- Performance comparison with varying point counts
- Highlight the "gift wrapping" motion of Jarvis march vs. the sorting approach of Graham scan
- Color-code hull vertices and show intermediate states

### 2. Line Segment Intersection (Bentley-Ottmann)
**Sweep line algorithm for finding all intersections**
- Drag to create line segments on canvas
- Animated sweep line moving across the plane
- Event queue visualization (endpoints and intersection points)
- Status structure (active segments) displayed alongside
- Highlight intersection points as they're discovered
- Compare naive O(n²) vs. sweep line O((n+k) log n)

### 3. Polygon Triangulation (Ear Clipping)
**Decompose simple polygons into triangles**
- Click to create polygon vertices
- Visualize "ear" detection (convex vertices with no internal points)
- Animate the ear removal process step-by-step
- Show the diagonal being added for each ear
- Support for polygons with holes (bonus challenge)
- Use case: preparing geometry for rendering

### 4. Rotating Calipers
**Optimal algorithms for polygon properties**
- Find diameter (farthest pair of points)
- Find minimum bounding box
- Animate the "rotating" parallel lines around convex hull
- Show antipodal pairs being considered
- Compare to brute force approach
- Prerequisite: compute convex hull first

### 5. Alpha Shapes
**Generalized convex hull with tunable parameter**
- Alpha = 0: all points are boundary
- Alpha = ∞: convex hull
- Slider to control alpha parameter
- Visualize the "rolling ball" intuition
- Shows concave regions that convex hull misses
- Applications: point cloud boundary detection

### 6. Minkowski Sum
**Sum of two convex polygons**
- Create two polygons via click/drag
- Animate the construction by traversing both boundaries
- Show how collision detection uses Minkowski difference
- Visualize "swept" shape for motion planning
- Interactive: drag one shape and show resulting sum

### 7. Point Location (Trapezoidal Map)
**Preprocessing for fast point-in-region queries**
- Build trapezoidal decomposition of line segments
- Visualize the vertical extensions creating trapezoids
- Show the search structure (DAG)
- Click to query: which region contains this point?
- O(log n) query time after O(n log n) preprocessing

---

## Classic Data Structures

### 8. Red-Black Tree
**Self-balancing BST with color constraints**
- Insert/delete operations with full animation
- Show rotations (left-rotate, right-rotate) step-by-step
- Color flips visualized
- Display tree height and balance properties
- Compare to unbalanced BST degradation
- Show the 5 red-black properties being maintained

### 9. B-Tree / B+ Tree
**Database index structure visualization**
- Configurable branching factor (order)
- Insert keys and watch node splits
- Delete keys and watch merging/redistribution
- Highlight disk block access patterns
- B+ Tree variant: all data in leaves, leaves linked
- Show why B-trees minimize disk I/O

### 10. Skip List
**Probabilistic alternative to balanced trees**
- Animated insertion with random level generation
- Show the "express lane" concept at multiple levels
- Search visualization: drop down when overshooting
- Compare to linked list traversal
- Show expected O(log n) behavior emerges from randomness

### 11. Segment Tree / Range Tree
**Efficient range queries**
- Build tree from array of values
- Range sum queries with highlighted node contributions
- Point updates propagating up the tree
- Lazy propagation variant (bonus)
- 2D range tree for geometric queries
- Applications: competitive programming, databases

### 12. Trie (Prefix Tree)
**String/prefix operations**
- Insert words character by character
- Autocomplete: show all words with given prefix
- Highlight shared prefixes between words
- Word count at each node
- Applications: spell checkers, IP routing
- Compact trie / radix tree variant

### 13. Disjoint Set Union (Union-Find)
**Dynamic connectivity**
- Visual graph with nodes in different sets
- Click two nodes to union their sets
- Show path compression in action
- Show union by rank optimization
- Query: are these two nodes connected?
- Applications: Kruskal's MST, percolation

### 14. Bloom Filter
**Probabilistic set membership**
- Add elements and watch multiple hash bits set
- Query elements: definite no vs. probable yes
- Visualize false positive probability
- Show how it changes with elements added
- Tunable parameters: filter size, hash count
- Applications: caches, spell checkers, databases

### 15. LRU Cache
**Least Recently Used eviction policy**
- Fixed capacity cache visualization
- Get/put operations animate element movement
- Show doubly-linked list + hash map structure
- Eviction animation when capacity exceeded
- Hit/miss rate statistics
- Compare to other policies (LFU, FIFO)

---

## Classic Algorithms

### 16. A* Pathfinding
**Optimal heuristic search (extends existing Dijkstra)**
- Grid-based with obstacles (click to toggle)
- Compare A* to Dijkstra: show nodes explored
- Multiple heuristics: Manhattan, Euclidean, Chebyshev
- Weighted A* for faster but suboptimal paths
- Show f = g + h calculation
- Allow diagonal movement toggle

### 17. Maze Generation Algorithms
**Compare recursive backtracker, Prim's, Kruskal's, Eller's**
- Animated generation showing algorithm behavior
- Recursive backtracker: long winding passages
- Prim's: more uniform branching
- Kruskal's: using disjoint sets
- Solve generated maze with A*/BFS
- Configurable grid size

### 18. Minimum Spanning Tree
**Prim's and Kruskal's comparison**
- Random point graph generation
- Side-by-side visualization of both algorithms
- Prim's: grow from single vertex
- Kruskal's: sort edges, use union-find
- Show total weight accumulating
- Borůvka's algorithm (bonus)

### 19. Sorting Algorithm Visualizer
**Side-by-side comparison of sorting methods**
- Merge sort, quick sort, heap sort, radix sort
- Array bars with swap/compare highlighting
- Comparison and swap counters
- Audio feedback (optional)
- Show recursion tree for divide-and-conquer
- Best/worst case input generation

### 20. Topological Sort
**DAG ordering visualization**
- Create directed acyclic graph via click/drag
- Kahn's algorithm: remove zero-indegree nodes
- DFS-based: finish-time ordering
- Detect cycles (topological sort impossible)
- Applications: build systems, course prerequisites
- Show multiple valid orderings

---

## Bonus Ideas (if any above feel less compelling)

- **Lloyd's Relaxation**: Iterative Voronoi centroid smoothing
- **Hilbert Curve**: Space-filling curve (relates to existing Z-order work)
- **Circle Packing**: Apollonian gasket or general packing algorithms
- **Poisson Disk Sampling**: Blue noise distribution (better than random)
- **SAT Collision**: Separating Axis Theorem for convex polygon collision
- **GJK Algorithm**: Convex shape collision detection
- **L-Systems**: Fractal plant/tree generation
- **Quadtree Compression**: Image compression using quadtrees
- **R-Tree**: Spatial indexing for rectangles (database GIS)
- **Sweep Line Voronoi**: Fortune's algorithm step-by-step

---

## Recommended Implementation Order

**Quick Wins** (simpler, high visual impact):
1. Sorting Algorithm Visualizer
2. Convex Hull Algorithms
3. Maze Generation
4. Trie Visualization
5. LRU Cache

**Medium Complexity** (build on existing work):
6. A* Pathfinding (extends Dijkstra)
7. Minimum Spanning Tree
8. Red-Black Tree
9. Disjoint Set Union
10. Polygon Triangulation

**Advanced** (more complex implementation):
11. Line Segment Intersection
12. B-Tree
13. Skip List
14. Segment Tree
15. Alpha Shapes

**Deep Dives** (significant complexity):
16. Rotating Calipers
17. Point Location
18. Minkowski Sum
19. Bloom Filter
20. Topological Sort
