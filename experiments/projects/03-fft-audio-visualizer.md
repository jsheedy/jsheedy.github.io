# FFT Audio Visualizer

## Overview
Real-time audio frequency spectrum visualization using the Fast Fourier Transform (FFT). Converts time-domain audio signals into frequency-domain representation, revealing the harmonic content and spectral characteristics of music and sound.

## Algorithm
**Fast Fourier Transform (Cooley-Tukey)**
- O(n log n) time complexity (vs. O(n²) for DFT)
- Divide-and-conquer approach
- Decomposes DFT into smaller DFTs
- Typically uses radix-2 (power-of-2 sample sizes: 512, 1024, 2048, 4096)

**Signal Processing Steps**:
1. Sample audio at regular intervals (e.g., 44.1kHz)
2. Apply windowing function (Hann, Hamming) to reduce spectral leakage
3. Perform FFT to convert time → frequency domain
4. Compute magnitude spectrum: sqrt(real² + imag²)
5. Convert to decibels: 20*log10(magnitude)
6. Smooth values over time to reduce jitter

## Use Cases
- **Music Visualization**: Live audio-reactive graphics
- **Audio Analysis**: Identify dominant frequencies, harmonics
- **Beat Detection**: Detect kicks, snares, tempo
- **Spectrum Analysis**: Study instrument frequency characteristics
- **Voice Analysis**: Formant tracking, pitch detection
- **Audio Effects**: Equalizers, compressors, filters

## Interactive Features

### Input Sources
- **Microphone input**: Real-time capture via Web Audio API
- **File upload**: Analyze MP3, WAV, OGG files
- **Generated tones**: Sine wave, square wave, sawtooth for testing
- **Input source selector**: Switch between sources

### Visualization Modes
1. **Frequency Bars**: Classic vertical bar spectrum (0-20kHz)
2. **Circular/Radial**: Bars arranged in circle (like Winamp AVS)
3. **Waveform**: Time-domain oscilloscope view
4. **Spectrogram**: 2D scrolling frequency vs. time heatmap
5. **3D Spectrum**: Perspective bar graph with depth
6. **Particles**: Audio-reactive particle system (amplitude drives behavior)

### Frequency Band Controls
- **Bass** (20-250 Hz): Low frequencies, kick drums
- **Mid** (250-4000 Hz): Vocals, instruments
- **Treble** (4000-20000 Hz): Cymbals, high hats
- **Individual band sliders**: Filter or emphasize ranges
- **Logarithmic/Linear scale toggle**: Better for music vs. analysis

### Visual Effects
- **Peak detection**: Highlight dominant frequencies
- **Beat flash**: Pulse on bass hits
- **Color mapping**: Frequency→color (bass=red, mid=green, treble=blue)
- **Glow intensity**: Tied to amplitude
- **Motion blur/trails**: Smoothed animation
- **Reactivity sensitivity**: Control how much audio drives visuals

### Analysis Features
- **Frequency display**: Show Hz value on hover
- **Note detection**: Display musical note (A, C#, etc.)
- **Harmonic analysis**: Show fundamental and overtones
- **Peak hold**: Remember max amplitude per band
- **RMS/Peak meters**: Volume indicators

## Visual Style
**Terminal/Matrix with Reactive Glow**
- Base: Dark green (#00ff41) on black (#0a0e0a)
- Audio-reactive elements:
  - Bar heights driven by frequency magnitude
  - Glow intensity increases with amplitude
  - Color shifts based on frequency (optional: rainbow mode)
  - Scanlines pulse with beat
- Monospace font for frequency labels
- Retro oscilloscope aesthetic

## Technical Implementation

### Web Audio API Components
```javascript
// Audio context and nodes
const audioContext = new AudioContext();
const analyser = audioContext.createAnalyser();
analyser.fftSize = 2048; // Power of 2 (512-32768)
const bufferLength = analyser.frequencyBinCount; // fftSize/2
const dataArray = new Uint8Array(bufferLength);

// Connect audio source → analyser → destination
source.connect(analyser);
analyser.connect(audioContext.destination);

// Get frequency data
analyser.getByteFrequencyData(dataArray); // 0-255 magnitude
```

### Key Parameters
- **FFT Size**: 512, 1024, 2048, 4096, 8192
  - Larger = better frequency resolution, worse time resolution
  - Smaller = better time resolution, worse frequency resolution
- **Smoothing**: 0.0-1.0 (time constant for averaging)
- **Min/Max dB**: Dynamic range for amplitude mapping

### Performance Optimizations
- Use `getByteFrequencyData()` instead of `getFloatFrequencyData()` for speed
- Bin grouping: Combine adjacent bins to reduce render count
- Logarithmic binning: More bins for low frequencies (matches human hearing)
- Canvas vs. WebGL: Use WebGL for particle effects
- RequestAnimationFrame: Sync with display refresh

### Data Processing
```javascript
// Map frequency bins to bars (logarithmic spacing)
function getBinForFrequency(freq, sampleRate, fftSize) {
  return Math.floor(freq / (sampleRate / fftSize));
}

// Smooth values over time
smoothedValue = smoothedValue * smoothing + newValue * (1 - smoothing);

// Beat detection
if (bassEnergy > threshold && bassEnergy > previousEnergy * 1.5) {
  triggerBeatEvent();
}
```

## Advanced Features
- **Mel-scale binning**: Perceptually uniform frequency distribution
- **Onset detection**: Identify note starts, drum hits
- **Tempo estimation**: BPM detection via autocorrelation
- **Chord recognition**: Identify musical chords
- **Spectral centroid**: Brightness of sound
- **MFCC** (Mel-Frequency Cepstral Coefficients): For genre classification
- **Audio recording**: Save visualization as video
- **MIDI output**: Trigger MIDI notes from detected frequencies

## Integration with Existing Work
- Could combine with:
  - Particle systems (boids react to audio)
  - Perlin noise (frequency controls octaves)
  - Spatial queries (audio-reactive spatial effects)

## Educational Value
- Foundational signal processing algorithm
- Real-world application of complex numbers
- Demonstrates time-frequency duality
- Interactive learning: see effect of different sounds

## Browser Compatibility
- Web Audio API: Chrome, Firefox, Safari, Edge (all modern)
- `getUserMedia()` requires HTTPS (for microphone)
- File API for upload support

## References
- Cooley & Tukey (1965). "An algorithm for the machine calculation of complex Fourier series"
- W3C Web Audio API specification
- Smith, J.O. (2011). "Spectral Audio Signal Processing"
- Lyon's "Understanding Digital Signal Processing"

## Preset Configurations
- **Music mode**: Medium FFT (2048), logarithmic scale, smoothing 0.8
- **Voice mode**: Large FFT (4096), linear scale, emphasize 80-4000Hz
- **Bass mode**: Focus on 20-250Hz, heavy smoothing
- **Analysis mode**: Large FFT, linear scale, no smoothing

## Implementation Priority
**Medium-high priority** - Unique among existing experiments (only one with audio input), high visual appeal, demonstrates DSP concepts.
