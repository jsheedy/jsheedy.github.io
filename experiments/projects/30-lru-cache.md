# LRU Cache

## Overview
Interactive visualization of LRU (Least Recently Used) cache—a data structure that evicts the least recently accessed item when full. Combines a hash map for O(1) lookup with a doubly-linked list for O(1) recency tracking. Fundamental to caching systems everywhere.

## Algorithm

**Structure**:
- Hash map: key → node pointer (O(1) lookup)
- Doubly-linked list: ordered by recency (O(1) move/remove)
- Head = most recent, Tail = least recent

**Operations**:
- **Get(key)**: O(1) - lookup and move to head
- **Put(key, value)**: O(1) - insert/update at head, evict tail if full

**Get Algorithm**:
1. Look up key in hash map
2. If found: move node to head, return value
3. If not found: return null (cache miss)

**Put Algorithm**:
1. If key exists: update value, move to head
2. If key doesn't exist:
   - Create new node at head
   - Add to hash map
   - If over capacity: remove tail, delete from hash map

## Use Cases
- **CPU caches**: L1, L2, L3 cache eviction
- **Database buffer pools**: Page caching
- **Web browsers**: Page/image caching
- **CDNs**: Content caching
- **Operating systems**: Page replacement
- **Memoization**: Function result caching

## Interactive Features
- **Get/Put operations**: Enter key-value pairs
- **Access sequence**: Run predefined sequences
- **Capacity control**: Adjust cache size
- **Hit/miss tracking**: Visual feedback
- **Eviction animation**: Watch LRU item removed
- **Access history**: Timeline of operations

## Visual Elements
- **Hash map**: Key-pointer pairs (table view)
- **Doubly-linked list**: Horizontal chain of nodes
- **Pointers**: Arrows showing prev/next links
- **Head/tail markers**: Labeled endpoints
- **Current operation**: Highlighted node
- **Eviction**: Red highlight before removal
- **New insertion**: Green highlight at head

## Operation Animations

**Get (Hit)**:
- Highlight node in hash map
- Animate node moving to head
- Update prev/next pointers
- Flash green for hit

**Get (Miss)**:
- Search hash map
- Flash red for miss
- Increment miss counter

**Put (New Key)**:
- Create node at head
- Add hash map entry
- If full: animate tail eviction

**Put (Update)**:
- Find existing node
- Update value
- Move to head

## Access Patterns
- **Sequential**: 1, 2, 3, 4, 5, ...
- **Repeated**: 1, 1, 1, 2, 2, 2, ...
- **Working set**: Cycle through subset
- **Zipf distribution**: Realistic access pattern
- **Worst case**: Capacity + 1 cycle

## Performance Stats
- Cache capacity
- Current size
- Hit count / rate
- Miss count / rate
- Evictions
- Operations total

## Controls
- Key input field
- Value input field
- Get/Put buttons
- Capacity slider
- Clear cache
- Run access pattern
- Animation speed
- Show/hide hash map
- Show/hide pointers

## Comparison Mode
- LRU vs FIFO vs LFU
- Same access sequence
- Compare hit rates
- See different eviction choices

## Visual Theme
**Modern Gradient Style**
- Clean node boxes
- Smooth animations
- Color-coded operations
- Hit rate gauge
