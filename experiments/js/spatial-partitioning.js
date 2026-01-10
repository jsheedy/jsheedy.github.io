/**
 * Spatial Partitioning Utilities
 *
 * Provides efficient spatial data structures for collision detection
 * and nearest neighbor queries in 2D space.
 */

/**
 * Z-Order (Morton) Space-Filling Curve
 *
 * Converts 2D coordinates into a 1D code that preserves spatial locality.
 * Useful for sorting particles to improve cache coherency and spatial queries.
 */
export class ZOrder {
    /**
     * Encode 2D coordinates into a Z-order code
     * @param {number} x - X coordinate
     * @param {number} y - Y coordinate
     * @returns {number} Z-order code
     */
    static encode(x, y) {
        return ZOrder.interleave(x) | (ZOrder.interleave(y) << 1);
    }

    /**
     * Interleave bits of a number for Z-order encoding
     * @param {number} n - Number to interleave
     * @returns {number} Interleaved bits
     */
    static interleave(n) {
        n = (n | (n << 8)) & 0x00FF00FF;
        n = (n | (n << 4)) & 0x0F0F0F0F;
        n = (n | (n << 2)) & 0x33333333;
        n = (n | (n << 1)) & 0x55555555;
        return n;
    }

    /**
     * Decode Z-order code back to 2D coordinates
     * @param {number} code - Z-order code
     * @returns {{x: number, y: number}} Decoded coordinates
     */
    static decode(code) {
        return {
            x: ZOrder.deinterleave(code),
            y: ZOrder.deinterleave(code >> 1)
        };
    }

    /**
     * Deinterleave bits to extract original coordinate
     * @param {number} n - Interleaved number
     * @returns {number} Original coordinate
     */
    static deinterleave(n) {
        n = n & 0x55555555;
        n = (n | (n >> 1)) & 0x33333333;
        n = (n | (n >> 2)) & 0x0F0F0F0F;
        n = (n | (n >> 4)) & 0x00FF00FF;
        n = (n | (n >> 8)) & 0x0000FFFF;
        return n;
    }
}

/**
 * Uniform Grid Spatial Partitioning
 *
 * Divides 2D space into a regular grid of cells.
 * Efficient for collision detection with uniform distribution of objects.
 */
export class UniformGrid {
    /**
     * Create a uniform grid
     * @param {number} width - Total width of the space
     * @param {number} height - Total height of the space
     * @param {number} cellSize - Size of each grid cell
     */
    constructor(width, height, cellSize) {
        this.width = width;
        this.height = height;
        this.cellSize = cellSize;
        this.cols = Math.ceil(width / cellSize);
        this.rows = Math.ceil(height / cellSize);
        this.cells = new Map();
        this.searchedCells = new Set();
    }

    /**
     * Clear all cells in the grid
     */
    clear() {
        this.cells.clear();
        this.searchedCells.clear();
    }

    /**
     * Hash coordinates to a cell key
     * @param {number} x - X coordinate
     * @param {number} y - Y coordinate
     * @returns {string} Cell key
     */
    hash(x, y) {
        const col = Math.floor(x / this.cellSize);
        const row = Math.floor(y / this.cellSize);
        return `${col},${row}`;
    }

    /**
     * Insert a particle into the grid
     * @param {Object} particle - Particle with x, y properties
     */
    insert(particle) {
        const key = this.hash(particle.x, particle.y);
        if (!this.cells.has(key)) {
            this.cells.set(key, []);
        }
        this.cells.get(key).push(particle);
    }

    /**
     * Iterate over nearby particles within cellCount cells
     * @param {Object} particle - Center particle with x, y properties
     * @param {number} cellCount - Number of cells to search in each direction
     * @param {Function} callback - Function to call for each nearby particle
     */
    forEachNearby(particle, cellCount, callback) {
        const col = Math.floor(particle.x / this.cellSize);
        const row = Math.floor(particle.y / this.cellSize);

        // Search cellCount cells in each direction
        for (let dy = -cellCount; dy <= cellCount; dy++) {
            for (let dx = -cellCount; dx <= cellCount; dx++) {
                const key = `${col + dx},${row + dy}`;
                this.searchedCells.add(key);

                if (this.cells.has(key)) {
                    const cellParticles = this.cells.get(key);
                    for (let i = 0; i < cellParticles.length; i++) {
                        callback(cellParticles[i]);
                    }
                }
            }
        }
    }

    /**
     * Get all cells that were searched (for visualization)
     * @returns {Set<string>} Set of searched cell keys
     */
    getSearchedCells() {
        return this.searchedCells;
    }
}
