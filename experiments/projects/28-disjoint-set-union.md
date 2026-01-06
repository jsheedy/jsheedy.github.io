# Disjoint Set Union (Union-Find)

## Overview
Interactive visualization of the disjoint set union data structure—used for tracking elements partitioned into non-overlapping sets. Supports near-constant time union and find operations. Essential for Kruskal's MST algorithm and detecting cycles in graphs.

## Algorithm

**Operations**:
- **MakeSet(x)**: Create singleton set containing x
- **Find(x)**: Return representative (root) of x's set
- **Union(x, y)**: Merge sets containing x and y

**Optimizations**:

**Path Compression** (in Find):
- Make every node on path point directly to root
- Flattens tree structure
- Amortized nearly O(1)

**Union by Rank/Size**:
- Attach smaller tree under larger tree
- Keeps trees shallow
- Rank = upper bound on height

**Combined Complexity**: O(α(n)) per operation
- α = inverse Ackermann function
- Effectively constant for all practical n

## Use Cases
- **Kruskal's MST**: Cycle detection during edge addition
- **Network connectivity**: Are two nodes connected?
- **Image processing**: Connected component labeling
- **Percolation**: Does system percolate?
- **Social networks**: Friend group detection
- **Equivalence classes**: Grouping equivalent items

## Interactive Features
- **Create elements**: Add new singleton sets
- **Union operation**: Click two elements to merge
- **Find operation**: Click element to highlight its set
- **Path compression toggle**: See before/after compression
- **Tree visualization**: Show parent pointers
- **Graph mode**: Visualize as connected components

## Visual Elements
- **Elements**: Circles with labels
- **Parent pointers**: Arrows to parent nodes
- **Roots**: Larger circles, highlighted
- **Sets**: Color-coded groups
- **Path compression**: Animate pointer updates
- **Rank/size labels**: On root nodes
- **Union animation**: Trees merging

## Tree View
- Show each set as a tree
- Root at top
- Children below
- Path compression flattens structure
- Before/after comparison

## Graph View
- Elements as nodes in space
- Connected elements in same set
- Edges appear on union
- Components cluster together

## Path Compression Demo
- Find on deep element
- Show original path to root
- Animate compression
- Show flattened result
- Count pointer updates saved

## Union by Rank Demo
- Show two trees with different ranks
- Smaller attaches under larger
- Rank updates if needed
- Compare to naive union

## Performance Stats
- Total elements
- Number of sets
- Maximum tree height
- Find operations count
- Union operations count
- Path compressions performed

## Controls
- Add element button
- Union mode: click two elements
- Find mode: click to highlight set
- Path compression toggle
- Union by rank toggle
- Clear all
- Animation speed
- View mode: tree/graph

## Preset Scenarios
- Building MST step by step
- Percolation simulation
- Random unions
- Worst case without optimizations

## Visual Theme
**Modern Gradient Style**
- Color-coded sets
- Smooth animations
- Clean tree layout
- Graph force-directed layout
