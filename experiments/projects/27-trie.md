# Trie (Prefix Tree)

## Overview
Interactive visualization of tries—tree structures for storing strings where shared prefixes share paths. Essential for autocomplete, spell checking, and IP routing. Each edge represents a character, and paths from root to nodes spell out stored strings.

## Algorithm

**Structure**:
- Root represents empty string
- Each edge labeled with a character
- Path from root spells a prefix
- Nodes marked as "end of word" for complete strings
- Children typically stored in array (for alphabet) or hash map

**Operations**:
- **Insert**: O(m) - add string of length m
- **Search**: O(m) - check if string exists
- **Prefix search**: O(m + k) - find all strings with prefix (k = results)
- **Delete**: O(m) - remove string, clean up unused nodes

**Space**: O(total characters across all strings)

## Variants
- **Compressed Trie (Radix Tree)**: Merge single-child chains
- **Ternary Search Trie**: Three children per node (less, equal, greater)
- **PATRICIA Trie**: Optimized for sparse alphabets

## Use Cases
- **Autocomplete**: Type-ahead suggestions
- **Spell checkers**: Word existence verification
- **IP routing**: Longest prefix matching
- **T9 predictive text**: Phone keyboard input
- **DNA sequence matching**: Genomic databases
- **Search engines**: Query suggestions

## Interactive Features
- **Type to insert**: Add words character by character
- **Autocomplete demo**: Type prefix, see suggestions
- **Search animation**: Highlight path traversal
- **Delete words**: Remove and show cleanup
- **Word list presets**: Common word sets
- **Prefix highlighting**: Show all words with prefix

## Visual Elements
- **Nodes**: Circles at branch points
- **Edges**: Lines labeled with characters
- **End markers**: Filled nodes for complete words
- **Current path**: Highlighted during operations
- **Prefix matches**: All matching words highlighted
- **Character labels**: On edges or inside nodes
- **Word count**: Per node subtree count

## Insert Visualization
- Start at root
- Follow existing edges where possible
- Create new edges for new characters
- Mark final node as word end
- Animate character by character

## Search Visualization
- Follow path character by character
- Green highlight for matches
- Red highlight for mismatches
- Show "found" or "not found" result
- Display word count for prefixes

## Autocomplete Demo
- Text input field
- Trie visualization alongside
- Type to see prefix path highlighted
- Show all completions branching from prefix
- Rank by frequency (optional)

## Performance Stats
- Total words
- Total nodes
- Average word length
- Nodes visited per search
- Memory usage estimate
- Compression ratio (vs storing all strings)

## Controls
- Word input field
- Insert/search/delete buttons
- Load word list preset
- Clear trie
- Animation speed
- Show/hide word counts
- Compressed view toggle
- Case sensitivity toggle

## Word List Presets
- Common English words
- Programming keywords
- Names
- Custom list input

## Visual Theme
**Terminal/Matrix Aesthetic**
- Green nodes and edges on black
- Glowing path during traversal
- Terminal-style text input
- Autocomplete dropdown
