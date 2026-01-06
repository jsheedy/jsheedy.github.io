# Red-Black Tree

## Overview
Interactive visualization of red-black trees—self-balancing binary search trees that guarantee O(log n) operations. Used extensively in standard library implementations (C++ std::map, Java TreeMap). Named for the node coloring that maintains balance.

## Algorithm

**Red-Black Properties** (invariants):
1. Every node is red or black
2. Root is black
3. All leaves (NIL) are black
4. Red nodes have only black children (no red-red)
5. All paths from node to descendant leaves have same black count

**Why It Works**:
- Properties ensure longest path ≤ 2× shortest path
- Guarantees height ≤ 2 log(n+1)
- Recoloring and rotations restore properties after modification

**Operations**:
- **Insert**: Add red node, fix violations upward
- **Delete**: Complex cases, may need multiple fixes
- **Rotations**: Left-rotate, right-rotate preserve BST property
- **Recoloring**: Change node colors to fix violations

## Use Cases
- **Standard libraries**: Map/set implementations
- **Databases**: Index structures
- **Memory allocators**: Free block tracking
- **Schedulers**: Process management
- **File systems**: Directory structures

## Interactive Features
- **Insert values**: Type or click to add nodes
- **Delete values**: Remove nodes and watch rebalancing
- **Step-through**: See each rotation and recolor
- **Property checker**: Verify all 5 properties hold
- **Random insertions**: Build tree with random values
- **Preset sequences**: Worst-case scenarios

## Visual Elements
- **Nodes**: Circles colored red or black
- **Edges**: Lines connecting parent to children
- **NIL leaves**: Small black squares (optional)
- **Current operation**: Highlighted node/edge
- **Rotation animation**: Smooth subtree movement
- **Color change**: Animated color transitions
- **Path highlighting**: Show black-depth paths

## Rotation Visualization
- Show before/after states
- Animate subtree movement
- Label rotation type (left/right)
- Highlight pivot node
- Show preserved BST property

## Insert Fix Cases
- Case 1: Uncle is red → recolor
- Case 2: Uncle black, node is inner child → rotate to case 3
- Case 3: Uncle black, node is outer child → rotate and recolor

## Performance Stats
- Node count
- Tree height
- Black height
- Rotations performed
- Recolorings performed
- Property violations (should be 0)

## Controls
- Value input field
- Insert/delete buttons
- Random insert button
- Clear tree
- Animation speed slider
- Step-through mode
- Show/hide NIL leaves
- Property verification toggle

## Comparison Mode
- Side-by-side with unbalanced BST
- Show height difference
- Same insertion sequence
- Demonstrate worst-case prevention

## Visual Theme
**Custom Color Scheme**
- Red nodes: Bright red (#ff4444)
- Black nodes: Dark gray (#333333)
- Background: Dark (#1a1a1a)
- Edges: White/gray
- Animations: Smooth easing
