# Bloom Filter

## Overview
Interactive visualization of Bloom filters—space-efficient probabilistic data structures for set membership testing. A Bloom filter can tell you "definitely not in set" or "probably in set" but never gives false negatives. Used extensively in databases, caches, and network systems.

## Algorithm

**Structure**:
- Bit array of m bits, initially all 0
- k independent hash functions

**Insert(x)**:
- Compute k hash values: h₁(x), h₂(x), ..., hₖ(x)
- Set bits at positions h₁(x) mod m, h₂(x) mod m, etc.

**Query(x)**:
- Compute same k hash values
- If ALL k bits are set: "probably in set"
- If ANY bit is 0: "definitely not in set"

**False Positive Probability**:
- p ≈ (1 - e^(-kn/m))^k
- n = inserted elements, m = bits, k = hash functions
- Optimal k = (m/n) ln(2)

## Use Cases
- **Databases**: Avoid disk reads for non-existent keys
- **Web browsers**: Safe browsing (malicious URL check)
- **CDNs**: Cache existence checking
- **Spell checkers**: Dictionary membership
- **Network routers**: Packet classification
- **Cryptocurrency**: SPV wallet filtering

## Interactive Features
- **Add elements**: Insert strings/values
- **Query elements**: Check membership
- **Hash visualization**: Show which bits each element sets
- **False positive demo**: Query non-inserted elements
- **Parameter tuning**: Adjust m, k in real-time
- **Collision highlighting**: Show bit conflicts

## Visual Elements
- **Bit array**: Row of boxes (0/1, or colored)
- **Hash arrows**: Lines from element to bit positions
- **Set bits**: Highlighted/colored boxes
- **Query result**: Green (probably yes) / Red (definitely no)
- **Collision markers**: Multiple elements setting same bit
- **Fill ratio**: Visual indicator of saturation
- **False positive probability**: Dynamic calculation

## Hash Visualization
- Enter element
- Animate hash computation
- Show k bit positions
- Set bits simultaneously
- Different colors per element

## False Positive Demo
- Insert n elements
- Query elements NOT inserted
- Count false positives
- Compare to theoretical probability
- Show which bits caused false positive

## Parameter Effects
- **More bits (m)**: Lower false positive rate
- **More hashes (k)**: Trade-off, optimal point exists
- **More elements (n)**: Higher false positive rate
- Interactive sliders to see effects

## Performance Stats
- Elements inserted
- Bits set / total bits
- Fill ratio
- Theoretical FP probability
- Actual FP rate (from queries)
- Optimal k for current m, n

## Controls
- Element input field
- Add/query buttons
- Bit array size (m) slider
- Hash count (k) slider
- Show/hide hash arrows
- Clear filter
- Random insertions
- Run FP experiment

## Advanced Features
- **Counting Bloom filter**: Allow deletions
- **Scalable Bloom filter**: Grow as needed
- **Cuckoo filter**: Alternative with deletion support

## Visual Theme
**Terminal/Matrix Aesthetic**
- Green bits on black
- Glowing set bits
- Hash arrows as dotted lines
- Probability readout in terminal font
