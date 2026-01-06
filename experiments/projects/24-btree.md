# B-Tree / B+ Tree

## Overview
Interactive visualization of B-trees and B+ trees—self-balancing tree structures optimized for disk-based storage. Unlike binary trees, B-trees have multiple keys per node, minimizing disk I/O by maximizing data per block read.

## Algorithm

**B-Tree Properties**:
- Order m: each node has at most m children
- Non-root nodes have at least ⌈m/2⌉ children
- All leaves at same depth (perfectly balanced)
- Node with k children has k-1 keys

**B+ Tree Variant**:
- All data stored in leaves only
- Internal nodes only store keys for navigation
- Leaves linked for range queries
- More keys fit in internal nodes

**Operations**:
- **Search**: Top-down traversal, O(log n)
- **Insert**: Find leaf, insert, split if overflow
- **Delete**: Find key, remove, merge/redistribute if underflow

**Node Split**:
1. Node has m keys (overflow)
2. Split into two nodes with ⌈m/2⌉ keys each
3. Middle key promoted to parent
4. Parent may also split (propagates up)

## Use Cases
- **Databases**: Primary indexing structure (MySQL, PostgreSQL)
- **File systems**: Directory structures (NTFS, ext4, HFS+)
- **Key-value stores**: Storage engines
- **Search engines**: Inverted index storage

## Interactive Features
- **Insert keys**: Add values and watch splits
- **Delete keys**: Remove values and watch merges
- **Search animation**: Highlight path to key
- **Range query**: Select range in B+ tree leaves
- **Order selector**: Change branching factor
- **Disk block visualization**: Show I/O operations

## Visual Elements
- **Nodes**: Rectangles with multiple key slots
- **Keys**: Values displayed in sorted order
- **Child pointers**: Lines to child nodes
- **Current node**: Highlighted during operations
- **Split animation**: Node dividing, key rising
- **Leaf links**: Horizontal connections (B+ tree)
- **Disk blocks**: Represent storage pages

## Node Details
- Show all keys in node
- Highlight key being searched
- Display child pointer destinations
- Show node utilization (keys/capacity)

## Split Visualization
- Highlight overflowing node
- Show key selection for promotion
- Animate split into two nodes
- Show parent receiving new key

## Performance Stats
- Total keys
- Tree height
- Node count
- Average node utilization
- Disk reads per operation
- Comparison to binary tree height

## Controls
- Order (m) slider: 3 to 10
- Key input field
- Insert/delete buttons
- Search button
- Range query input
- B-tree / B+ tree toggle
- Animation speed
- Show disk I/O simulation

## Educational Features
- Compare orders (m=3 vs m=5)
- Show why B-trees minimize disk I/O
- Demonstrate range query efficiency
- Worst-case insertion sequences

## Visual Theme
**Modern Database Style**
- Clean rectangles for nodes
- Color-coded keys
- Smooth split animations
- Disk block metaphor visualization
