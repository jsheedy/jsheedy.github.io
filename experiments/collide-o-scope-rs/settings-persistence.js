/**
 * Settings Persistence Library
 *
 * Provides localStorage-based persistence for experiment settings.
 * Usage:
 *   const persist = new SettingsPersistence('myExperimentKey');
 *   persist.save({ setting1: value1, setting2: value2 });
 *   const loaded = persist.load();
 */

class SettingsPersistence {
    constructor(storageKey) {
        this.storageKey = storageKey;
    }

    /**
     * Save settings to localStorage
     * @param {Object} settings - Object containing all settings to save
     */
    save(settings) {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(settings));
        } catch (e) {
            console.warn('Failed to save settings:', e);
        }
    }

    /**
     * Load settings from localStorage
     * @returns {Object|null} - Saved settings object, or null if none exists
     */
    load() {
        try {
            const saved = localStorage.getItem(this.storageKey);
            return saved ? JSON.parse(saved) : null;
        } catch (e) {
            console.warn('Failed to load settings:', e);
            return null;
        }
    }

    /**
     * Apply loaded settings to variables and UI elements
     * @param {Object} settings - Settings object from load()
     * @param {Object} config - Configuration object mapping setting names to handlers
     *
     * Config format:
     * {
     *   settingName: {
     *     variable: () => globalVar,           // Getter for current value
     *     update: (value) => { globalVar = value; },  // Setter for value
     *     element: 'elementId',                // Optional: input element ID
     *     display: 'displayId',                // Optional: display element ID
     *     format: (value) => value.toFixed(2)  // Optional: formatting function
     *   }
     * }
     */
    apply(settings, config) {
        if (!settings) return;

        for (const [key, handler] of Object.entries(config)) {
            if (key in settings) {
                const value = settings[key];

                // Update the variable
                if (handler.update) {
                    handler.update(value);
                }

                // Update input element if specified
                if (handler.element) {
                    const element = document.getElementById(handler.element);
                    if (element) {
                        if (element.type === 'checkbox') {
                            element.checked = value;
                        } else {
                            element.value = value;
                        }
                    }
                }

                // Update display element if specified
                if (handler.display) {
                    const display = document.getElementById(handler.display);
                    if (display) {
                        const formatted = handler.format ? handler.format(value) : value;
                        display.textContent = formatted;
                    }
                }
            }
        }
    }

    /**
     * Convenience method: load and apply in one step
     * @param {Object} config - Configuration object for apply()
     * @returns {Object|null} - The loaded settings object
     */
    loadAndApply(config) {
        const settings = this.load();
        if (settings) {
            this.apply(settings, config);
        }
        return settings;
    }
}
