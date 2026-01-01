let wasm;

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return decodeText(ptr, len);
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

const ParticleFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_particle_free(ptr >>> 0, 1));

const SimulationFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_simulation_free(ptr >>> 0, 1));

export class Particle {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ParticleFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_particle_free(ptr, 0);
    }
    /**
     * @returns {number}
     */
    get x() {
        const ret = wasm.__wbg_get_particle_x(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set x(arg0) {
        wasm.__wbg_set_particle_x(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {number}
     */
    get y() {
        const ret = wasm.__wbg_get_particle_y(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set y(arg0) {
        wasm.__wbg_set_particle_y(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {number}
     */
    get radius() {
        const ret = wasm.__wbg_get_particle_radius(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set radius(arg0) {
        wasm.__wbg_set_particle_radius(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {number}
     */
    get mass() {
        const ret = wasm.__wbg_get_particle_mass(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set mass(arg0) {
        wasm.__wbg_set_particle_mass(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {number}
     */
    get vx() {
        const ret = wasm.__wbg_get_particle_vx(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set vx(arg0) {
        wasm.__wbg_set_particle_vx(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {number}
     */
    get vy() {
        const ret = wasm.__wbg_get_particle_vy(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set vy(arg0) {
        wasm.__wbg_set_particle_vy(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {boolean}
     */
    get colliding() {
        const ret = wasm.__wbg_get_particle_colliding(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * @param {boolean} arg0
     */
    set colliding(arg0) {
        wasm.__wbg_set_particle_colliding(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {number}
     */
    get impulse_x() {
        const ret = wasm.__wbg_get_particle_impulse_x(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set impulse_x(arg0) {
        wasm.__wbg_set_particle_impulse_x(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {number}
     */
    get impulse_y() {
        const ret = wasm.__wbg_get_particle_impulse_y(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set impulse_y(arg0) {
        wasm.__wbg_set_particle_impulse_y(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {number}
     */
    get color_temp() {
        const ret = wasm.__wbg_get_particle_color_temp(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set color_temp(arg0) {
        wasm.__wbg_set_particle_color_temp(this.__wbg_ptr, arg0);
    }
}
if (Symbol.dispose) Particle.prototype[Symbol.dispose] = Particle.prototype.free;

export class Simulation {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        SimulationFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_simulation_free(ptr, 0);
    }
    /**
     * @param {number} gravity
     */
    set_gravity(gravity) {
        wasm.simulation_set_gravity(this.__wbg_ptr, gravity);
    }
    /**
     * @param {number} x
     * @param {number} y
     */
    add_particle(x, y) {
        wasm.simulation_add_particle(this.__wbg_ptr, x, y);
    }
    /**
     * @param {number} size
     */
    set_max_size(size) {
        wasm.simulation_set_max_size(this.__wbg_ptr, size);
    }
    /**
     * @param {number} size
     */
    set_min_size(size) {
        wasm.simulation_set_min_size(this.__wbg_ptr, size);
    }
    /**
     * @param {number} speed
     */
    set_fan_speed(speed) {
        wasm.simulation_set_fan_speed(this.__wbg_ptr, speed);
    }
    /**
     * @param {number} speed
     */
    set_max_speed(speed) {
        wasm.simulation_set_max_speed(this.__wbg_ptr, speed);
    }
    /**
     * @param {number} elasticity
     */
    set_elasticity(elasticity) {
        wasm.simulation_set_elasticity(this.__wbg_ptr, elasticity);
    }
    /**
     * @param {number} range
     */
    set_search_range(range) {
        wasm.simulation_set_search_range(this.__wbg_ptr, range);
    }
    /**
     * @returns {number}
     */
    get_particles_ptr() {
        const ret = wasm.simulation_get_particles_ptr(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    get_particle_count() {
        const ret = wasm.simulation_get_particle_count(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @param {number} count
     */
    set_particle_count(count) {
        wasm.simulation_set_particle_count(this.__wbg_ptr, count);
    }
    /**
     * @param {number} width
     * @param {number} height
     * @param {number} particle_count
     * @param {number} min_size
     * @param {number} max_size
     * @param {number} max_speed
     * @param {number} gravity
     * @param {number} elasticity
     * @param {number} fan_speed
     * @param {number} search_range
     */
    constructor(width, height, particle_count, min_size, max_size, max_speed, gravity, elasticity, fan_speed, search_range) {
        const ret = wasm.simulation_new(width, height, particle_count, min_size, max_size, max_speed, gravity, elasticity, fan_speed, search_range);
        this.__wbg_ptr = ret >>> 0;
        SimulationFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    reset() {
        wasm.simulation_reset(this.__wbg_ptr);
    }
    update() {
        wasm.simulation_update(this.__wbg_ptr);
    }
}
if (Symbol.dispose) Simulation.prototype[Symbol.dispose] = Simulation.prototype.free;

const EXPECTED_RESPONSE_TYPES = new Set(['basic', 'cors', 'default']);

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);
            } catch (e) {
                const validResponse = module.ok && EXPECTED_RESPONSE_TYPES.has(module.type);

                if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);
    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };
        } else {
            return instance;
        }
    }
}

function __wbg_get_imports() {
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbg___wbindgen_throw_dd24417ed36fc46e = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };
    imports.wbg.__wbg_random_cc1f9237d866d212 = function() {
        const ret = Math.random();
        return ret;
    };
    imports.wbg.__wbindgen_init_externref_table = function() {
        const table = wasm.__wbindgen_externrefs;
        const offset = table.grow(4);
        table.set(0, undefined);
        table.set(offset + 0, undefined);
        table.set(offset + 1, null);
        table.set(offset + 2, true);
        table.set(offset + 3, false);
    };

    return imports;
}

function __wbg_finalize_init(instance, module) {
    wasm = instance.exports;
    __wbg_init.__wbindgen_wasm_module = module;
    cachedUint8ArrayMemory0 = null;


    wasm.__wbindgen_start();
    return wasm;
}

function initSync(module) {
    if (wasm !== undefined) return wasm;


    if (typeof module !== 'undefined') {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();
    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }
    const instance = new WebAssembly.Instance(module, imports);
    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;


    if (typeof module_or_path !== 'undefined') {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path} = module_or_path)
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead')
        }
    }

    if (typeof module_or_path === 'undefined') {
        module_or_path = new URL('particles_wasm_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync };
export default __wbg_init;
