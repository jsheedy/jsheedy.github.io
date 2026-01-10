/**
 * Canvas Utilities
 *
 * Common canvas setup and management functions.
 * Handles responsive canvas sizing and rendering helpers.
 */

const CanvasUtils = {
    /**
     * Setup responsive canvas that fills space between title bar and control panel
     * @param {string|HTMLCanvasElement} canvasIdOrElement - Canvas ID or element
     * @param {string} titleBarSelector - CSS selector for title bar
     * @param {string} controlPanelSelector - CSS selector for control panel
     * @returns {{canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, resize: Function}}
     */
    setupResponsiveCanvas(canvasIdOrElement, titleBarSelector, controlPanelSelector) {
        const canvas = typeof canvasIdOrElement === 'string'
            ? document.getElementById(canvasIdOrElement)
            : canvasIdOrElement;
        const ctx = canvas.getContext('2d');

        // Create resize handler
        const resize = () => {
            const titleBar = document.querySelector(titleBarSelector);
            const controlPanel = document.querySelector(controlPanelSelector);
            const titleHeight = titleBar ? titleBar.offsetHeight : 0;
            const controlHeight = controlPanel ? controlPanel.offsetHeight : 0;

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight - titleHeight - controlHeight;
        };

        // Initial resize
        resize();

        // Add resize listener
        window.addEventListener('resize', resize);

        return { canvas, ctx, resize };
    },

    /**
     * Clear canvas with trail effect (motion blur)
     * @param {CanvasRenderingContext2D} ctx - Canvas context
     * @param {HTMLCanvasElement} canvas - Canvas element
     * @param {number} fadeAmount - Fade amount (0 = full trail, 1 = no trail)
     */
    clearWithTrail(ctx, canvas, fadeAmount) {
        ctx.fillStyle = `rgba(0, 0, 0, ${fadeAmount})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    },

    /**
     * Clear canvas completely (no trail)
     * @param {CanvasRenderingContext2D} ctx - Canvas context
     * @param {HTMLCanvasElement} canvas - Canvas element
     */
    clear(ctx, canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    },

    /**
     * Fill canvas with solid color
     * @param {CanvasRenderingContext2D} ctx - Canvas context
     * @param {HTMLCanvasElement} canvas - Canvas element
     * @param {string} color - Fill color
     */
    fill(ctx, canvas, color) {
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
};
