# Sorting Algorithm Visualizer

## Overview
Interactive side-by-side comparison of sorting algorithms: Quicksort, Merge Sort, Heap Sort, and Radix Sort. Watch how different strategies organize data, compare their performance characteristics, and understand when each excels.

## Algorithms

**Quicksort** - O(n log n) average, O(n²) worst:
- Divide and conquer with pivot
- Partition elements around pivot
- Recursively sort partitions
- In-place but not stable
- Fastest in practice for random data

**Merge Sort** - O(n log n) guaranteed:
- Divide array in half
- Recursively sort halves
- Merge sorted halves
- Stable but requires O(n) extra space
- Consistent performance

**Heap Sort** - O(n log n) guaranteed:
- Build max heap from array
- Repeatedly extract maximum
- In-place and not stable
- Good worst-case guarantee

**Radix Sort** - O(nk) where k = digit count:
- Non-comparison sort
- Sort by each digit (LSD or MSD)
- Stable, requires extra space
- Excellent for integers/strings

## Use Cases
- **Education**: Understanding algorithm design
- **Performance analysis**: When to use which algorithm
- **Real applications**: Language standard libraries
- **Competitive programming**: Choosing optimal sort

## Interactive Features
- **Multiple algorithms**: Run 2-4 side by side
- **Array visualization**: Bars representing values
- **Animated sorting**: Watch comparisons and swaps
- **Speed control**: From slow-motion to instant
- **Input generation**: Random, sorted, reversed, nearly sorted
- **Custom input**: Enter your own array

## Visual Elements
- **Array bars**: Height represents value
- **Comparisons**: Highlight bars being compared
- **Swaps**: Animate bar movement
- **Sorted section**: Color change when finalized
- **Pivot**: Highlighted for quicksort
- **Recursion depth**: Color gradient by level
- **Heap structure**: Tree overlay for heap sort

## Algorithm-Specific Visualization

**Quicksort**:
- Show pivot selection
- Partition animation
- Left/right pointer movement
- Recursive call tree

**Merge Sort**:
- Split animation
- Merge process
- Auxiliary array
- Recursion tree

**Heap Sort**:
- Heap building phase
- Tree structure overlay
- Heapify (sift down)
- Extract max animation

**Radix Sort**:
- Current digit highlight
- Bucket distribution
- Digit-by-digit sorting
- Count sort subroutine

## Performance Stats
- Array size
- Comparisons count
- Swaps/moves count
- Time elapsed
- Current phase
- Recursion depth

## Input Patterns
- **Random**: Uniform distribution
- **Nearly sorted**: Few elements out of place
- **Reversed**: Worst case for some algorithms
- **Few unique**: Many duplicates
- **Already sorted**: Best case for some

## Controls
- Algorithm checkboxes (select multiple)
- Array size slider
- Animation speed slider
- Input pattern selector
- Generate new array
- Start/pause/reset
- Step forward
- Enable/disable sound
- Custom array input

## Sound Mode
- Different tones for comparisons
- Pitch based on value
- Swap sound effects
- Sorted confirmation tone

## Comparison Dashboard
- Side-by-side running
- Live comparison counters
- Race mode: first to finish
- Performance chart

## Visual Theme
**Modern Gradient Style**
- Colorful gradient bars
- Smooth animations
- Clean layout
- Performance gauges
