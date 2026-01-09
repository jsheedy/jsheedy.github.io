/**
 * Vector Math Utilities
 *
 * Common 2D vector operations used across experiments.
 * Provides functions for distance, magnitude, normalization, and other vector math.
 */

const VectorMath = {
    /**
     * Calculate Euclidean distance between two points
     * @param {number} x1 - First point X coordinate
     * @param {number} y1 - First point Y coordinate
     * @param {number} x2 - Second point X coordinate
     * @param {number} y2 - Second point Y coordinate
     * @returns {number} Distance between points
     */
    distance(x1, y1, x2, y2) {
        const dx = x2 - x1;
        const dy = y2 - y1;
        return Math.sqrt(dx * dx + dy * dy);
    },

    /**
     * Calculate squared distance (faster, avoids sqrt)
     * Useful for distance comparisons where actual distance isn't needed
     * @param {number} x1 - First point X coordinate
     * @param {number} y1 - First point Y coordinate
     * @param {number} x2 - Second point X coordinate
     * @param {number} y2 - Second point Y coordinate
     * @returns {number} Squared distance between points
     */
    distanceSq(x1, y1, x2, y2) {
        const dx = x2 - x1;
        const dy = y2 - y1;
        return dx * dx + dy * dy;
    },

    /**
     * Calculate magnitude (length) of a vector
     * @param {number} vx - Vector X component
     * @param {number} vy - Vector Y component
     * @returns {number} Vector magnitude
     */
    magnitude(vx, vy) {
        return Math.sqrt(vx * vx + vy * vy);
    },

    /**
     * Normalize a vector to unit length
     * @param {number} vx - Vector X component
     * @param {number} vy - Vector Y component
     * @returns {{x: number, y: number}} Normalized vector (or zero vector if magnitude is 0)
     */
    normalize(vx, vy) {
        const mag = Math.sqrt(vx * vx + vy * vy);
        if (mag === 0) {
            return { x: 0, y: 0 };
        }
        return { x: vx / mag, y: vy / mag };
    },

    /**
     * Calculate dot product of two vectors
     * @param {number} v1x - First vector X component
     * @param {number} v1y - First vector Y component
     * @param {number} v2x - Second vector X component
     * @param {number} v2y - Second vector Y component
     * @returns {number} Dot product
     */
    dot(v1x, v1y, v2x, v2y) {
        return v1x * v2x + v1y * v2y;
    },

    /**
     * Calculate angle of a vector in radians
     * @param {number} vx - Vector X component
     * @param {number} vy - Vector Y component
     * @returns {number} Angle in radians
     */
    angle(vx, vy) {
        return Math.atan2(vy, vx);
    },

    /**
     * Clamp a value between min and max
     * @param {number} value - Value to clamp
     * @param {number} min - Minimum value
     * @param {number} max - Maximum value
     * @returns {number} Clamped value
     */
    clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    },

    /**
     * Linear interpolation between two values
     * @param {number} a - Start value
     * @param {number} b - End value
     * @param {number} t - Interpolation factor (0-1)
     * @returns {number} Interpolated value
     */
    lerp(a, b, t) {
        return a + (b - a) * t;
    },

    /**
     * Rotate a vector by an angle
     * @param {number} vx - Vector X component
     * @param {number} vy - Vector Y component
     * @param {number} angle - Rotation angle in radians
     * @returns {{x: number, y: number}} Rotated vector
     */
    rotate(vx, vy, angle) {
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        return {
            x: vx * cos - vy * sin,
            y: vx * sin + vy * cos
        };
    }
};
