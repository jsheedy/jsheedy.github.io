# Segment Tree

## Overview
Interactive visualization of segment trees—a data structure for efficient range queries and point updates on arrays. Answers queries like "sum of elements from index 3 to 7" in O(log n) time while supporting updates.

## Algorithm

**Structure**:
- Binary tree where leaves are array elements
- Internal nodes store aggregate of their subtree
- Node i covers range [l, r], children cover [l, mid] and [mid+1, r]
- Height is ⌈log n⌉, total nodes is 2n-1

**Operations**:
- **Build**: O(n) - construct tree from array
- **Query**: O(log n) - answer range query [l, r]
- **Update**: O(log n) - modify single element

**Query Algorithm**:
1. Start at root
2. If node range fully inside query range: return value
3. If node range fully outside query range: return identity
4. Otherwise: recurse on both children, combine results

**Supported Aggregates**:
- Sum, product
- Minimum, maximum
- GCD, LCM
- Count, any associative operation

## Use Cases
- **Competitive programming**: Range query problems
- **Databases**: Aggregation queries
- **Graphics**: Interval scheduling, visibility
- **Statistics**: Running aggregates
- **Gaming**: Damage over area, effect ranges

## Interactive Features
- **Build from array**: Enter values or generate random
- **Point update**: Click element to modify
- **Range query**: Select range to compute aggregate
- **Query type selector**: Sum, min, max, etc.
- **Tree visualization**: See structure and values
- **Query decomposition**: Show which nodes contribute

## Visual Elements
- **Array elements**: Bottom row of values
- **Tree nodes**: Show aggregate values
- **Node ranges**: Labels showing [l, r]
- **Query range**: Highlighted in array
- **Contributing nodes**: Highlighted in tree
- **Update path**: Show propagation to root
- **Query path**: Show decomposition into nodes

## Query Visualization
- Highlight query range in array
- Animate recursive descent
- Color nodes by: fully inside (green), fully outside (gray), partial (yellow)
- Show values being combined
- Display final result

## Update Visualization
- Highlight updated element
- Show path from leaf to root
- Animate value propagation
- Update all ancestor nodes

## Advanced Features

**Lazy Propagation**:
- Range updates in O(log n)
- Defer updates until needed
- Show pending updates on nodes
- Propagate on query/further update

**2D Segment Tree**:
- Tree of trees for 2D queries
- Visualize as nested structure

## Performance Stats
- Array size
- Tree height
- Nodes visited per query
- Updates performed
- Query comparisons

## Controls
- Array size slider
- Generate random array
- Manual array input
- Query type selector
- Query range inputs
- Update index/value inputs
- Animation speed
- Show/hide node ranges
- Lazy propagation toggle

## Visual Theme
**Terminal/Matrix Aesthetic**
- Green values on black
- Tree structure with glowing edges
- Query highlights in bright cyan
- Update path in yellow
