# Skip List

## Overview
Interactive visualization of skip lists—a probabilistic data structure that provides O(log n) search, insert, and delete operations using randomization instead of strict balancing. Invented by William Pugh in 1989 as a simpler alternative to balanced trees.

## Algorithm

**Structure**:
- Multiple levels of linked lists
- Bottom level contains all elements in sorted order
- Higher levels are "express lanes" skipping elements
- Each element appears at level i with probability p (typically 1/2)

**Search** - O(log n) expected:
1. Start at top-left (highest level, head)
2. Move right while next key < target
3. Drop down one level
4. Repeat until found or at bottom level

**Insert**:
1. Search to find position at each level
2. Flip coins to determine new node's height
3. Insert node and update pointers at each level

**Delete**:
1. Search to find node at each level
2. Update pointers to skip deleted node
3. Remove empty levels if needed

## Why It Works
- Expected number of levels: O(log n)
- Expected nodes per level: halved each level up
- Search examines O(log n) nodes expected
- Randomization provides balance "on average"

## Use Cases
- **Redis**: Sorted sets implementation
- **LevelDB/RocksDB**: MemTable structure
- **Concurrent data structures**: Lock-free implementations
- **Priority queues**: Alternative to heaps
- **Range queries**: Efficient ordered traversal

## Interactive Features
- **Insert values**: Add elements with random levels
- **Delete values**: Remove and update pointers
- **Search animation**: Watch traversal path
- **Manual level control**: Override random level
- **Coin flip visualization**: Show level determination
- **Probability slider**: Adjust p value

## Visual Elements
- **Nodes**: Vertical stacks showing all levels
- **Forward pointers**: Horizontal arrows at each level
- **Head/tail sentinels**: Special boundary nodes
- **Search path**: Highlighted traversal route
- **Current position**: Animated marker
- **Level labels**: Height indicators
- **Coin flips**: Animated randomization

## Search Visualization
- Start at top-left
- Show "look ahead" checks
- Animate right movement
- Animate level drops
- Highlight final position

## Level Distribution
- Bar chart of node heights
- Expected vs actual distribution
- Show convergence to geometric

## Performance Stats
- Element count
- Maximum level
- Average level
- Search comparisons
- Expected vs actual performance
- Comparison to balanced BST

## Controls
- Value input field
- Insert/delete/search buttons
- Random insertions button
- Clear list
- Probability p slider (0.25, 0.5, 0.75)
- Animation speed
- Manual level mode toggle
- Show/hide level distribution

## Comparison Mode
- Side-by-side with linked list
- Show search path length difference
- Demonstrate O(log n) vs O(n)

## Visual Theme
**Terminal/Matrix Aesthetic**
- Green nodes and pointers on black
- Glowing search path
- Level labels in terminal font
- Animated coin flips
