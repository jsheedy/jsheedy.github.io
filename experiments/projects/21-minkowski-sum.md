# Minkowski Sum

## Overview
Interactive visualization of Minkowski sums—the geometric operation of "adding" two shapes together. The Minkowski sum of shapes A and B contains all points that can be reached by adding any point in A to any point in B. Fundamental to collision detection and motion planning.

## Algorithm

**Definition**:
A ⊕ B = { a + b : a ∈ A, b ∈ B }

**Convex Polygon Sum** - O(n + m):
- Traverse both polygon boundaries simultaneously
- Merge edge directions in sorted angular order
- Result is also convex with at most n + m vertices

**Process**:
1. Find bottom-most vertex of each polygon
2. Walk around both polygons counter-clockwise
3. At each step, choose edge with smaller angle
4. Add that edge to the result
5. Continue until back at start

**Minkowski Difference**:
A ⊖ B = A ⊕ (-B)
- Reflect B through origin, then sum
- Used for collision detection: A and B collide iff origin ∈ (A ⊖ B)

## Use Cases
- **Collision detection**: Do two shapes overlap?
- **Motion planning**: Configuration space obstacles
- **Robot navigation**: Inflate obstacles by robot radius
- **Path planning**: Buffer zones around obstacles
- **Morphological operations**: Dilation/erosion

## Interactive Features
- **Create two polygons**: Click to define vertices
- **Drag shapes**: Move polygons around
- **Animated construction**: Watch sum being built
- **Edge merging visualization**: Show sorted edge traversal
- **Collision indicator**: Highlight when shapes overlap
- **Mirror mode**: Show Minkowski difference

## Visual Elements
- **Polygon A**: First shape (blue)
- **Polygon B**: Second shape (green)
- **Minkowski sum**: Result shape (cyan)
- **Edge directions**: Arrows showing angles
- **Current edges**: Highlighted during construction
- **Origin marker**: For collision detection
- **Configuration space**: Sum centered on A

## Collision Detection Demo
- Drag polygon B around
- Sum updates in real-time
- When origin inside sum → collision!
- Highlight collision state
- Show penetration depth

## Motion Planning Demo
- Define path for polygon B
- Show configuration space (A ⊕ (-B))
- Path valid if it avoids sum
- Visualize swept volume

## Performance Stats
- Vertices in A
- Vertices in B
- Vertices in sum
- Edge merge steps
- Collision status

## Controls
- Shape presets (triangle, square, pentagon)
- Drag to move shapes
- Animation speed slider
- Show/hide edge directions
- Show/hide construction steps
- Toggle sum/difference
- Collision detection mode

## Visual Theme
**Modern Gradient Style**
- Distinct colors for each shape
- Translucent overlays
- Smooth animations
- Clean geometry display
