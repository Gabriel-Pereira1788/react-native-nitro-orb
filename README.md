# react-native-nitro-orb 🔮


https://github.com/user-attachments/assets/5bb6bb3a-9338-4304-a410-be4e5414d513



A high-performance, animated orb component for React Native built with Nitro Modules and SwiftUI. This library renders a beautiful, customizable animated orb with various visual effects including glowing, particles, wavy blobs, and dynamic shadows.

[![Version](https://img.shields.io/npm/v/react-native-nitro-orb.svg)](https://www.npmjs.com/package/react-native-nitro-orb)
[![Downloads](https://img.shields.io/npm/dm/react-native-nitro-orb.svg)](https://www.npmjs.com/package/react-native-nitro-orb)
[![License](https://img.shields.io/npm/l/react-native-nitro-orb.svg)](https://github.com/Gabriel-Pereira1788/react-native-nitro-orb/LICENSE)

## Features

- 🎨 **9 Pre-designed Presets** - Choose from mystic, nature, sunset, ocean, minimal, cosmic, fire, arctic, or shadow themes
- ⚡ **High Performance** - Built with Nitro Modules for optimal performance
- 🌊 **Animated Effects** - Includes wavy blobs, particles, glow effects, and realistic shadows
- 🎯 **Fully Customizable** - Control colors, speed, size, and toggle individual effects
- 📱 **iOS Native** - Leverages SwiftUI for smooth, native animations
- 🔧 **TypeScript Support** - Full TypeScript definitions included

## Requirements

- React Native v0.76.0 or higher
- Node 18.0.0 or higher
- iOS 13.0 or higher

> [!IMPORTANT]  
> To support `Nitro Views` you need to install React Native version v0.78.0 or higher.

## Installation

```bash
npm install react-native-nitro-orb react-native-nitro-modules
# or
yarn add react-native-nitro-orb react-native-nitro-modules
# or
bun add react-native-nitro-orb react-native-nitro-modules
```

### iOS Setup

```bash
cd ios && pod install
```

## Basic Usage

```tsx
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { NitroOrb } from 'react-native-nitro-orb'

function App() {
  return (
    <View style={styles.container}>
      <NitroOrb
        preset="mystic"
        size={150}
        speed={20}
        style={styles.orb}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orb: {
    width: 200,
    height: 200,
  },
})
```

## Props

### NitroOrbProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `preset` | `PresetType` | `'mystic'` | Pre-configured theme for the orb. See [Presets](#presets) section |
| `speed` | `number` | `20` | Animation speed (higher = faster) |
| `glowColor` | `string` | - | Hex color for the glow effect |
| `size` | `number` | - | Maximum size constraint for the orb |
| `backgroundColors` | `string[]` | - | Array of hex colors for the gradient background |
| `particleColor` | `string` | - | Hex color for floating particles |
| `showWavyBlobs` | `boolean` | `false` | Show organic wavy blob animations |
| `showParticles` | `boolean` | `false` | Show floating particle effects |
| `showGlowEffects` | `boolean` | `false` | Show core glow animations |
| `showShadow` | `boolean` | `false` | Show realistic layered shadows |
| `coreGlowItensity` | `number` | `0.0` | Intensity of the core glow (0.0 - 2.0) |
| `style` | `ViewStyle` | - | Standard React Native view styles |
| `testID` | `string` | - | Test identifier for testing |

## Presets
<img width="420" height="900" alt="Simulator Screenshot - iPhone 16 - 2025-12-16 at 12 19 16" src="https://github.com/user-attachments/assets/40c507f9-1f60-449e-85d7-5f3b84c07f3e" />

The component includes 9 beautiful pre-configured themes:

### `mystic`
- **Colors**: Purple, Blue, Indigo gradient
- **Glow**: Purple
- **Core Intensity**: 1.2
- **Best for**: Magical, mysterious themes

### `nature`
- **Colors**: Green, Mint, Teal gradient
- **Glow**: Green
- **Core Intensity**: 1.0
- **Best for**: Natural, organic designs

### `sunset`
- **Colors**: Orange, Red, Pink gradient
- **Glow**: Orange
- **Core Intensity**: 0.8
- **Best for**: Warm, inviting interfaces

### `ocean`
- **Colors**: Blue, Cyan, Teal gradient
- **Glow**: Cyan
- **Best for**: Calm, aquatic themes

### `minimal`
- **Colors**: Gray, White gradient
- **Glow**: White
- **Effects**: No wavy blobs or particles
- **Best for**: Clean, minimalist designs

### `cosmic`
- **Colors**: Purple, Pink, Blue gradient
- **Glow**: White
- **Core Intensity**: 1.5
- **Best for**: Space, futuristic themes

### `fire`
- **Colors**: Red, Orange, Yellow gradient
- **Glow**: Orange
- **Core Intensity**: 1.3
- **Best for**: Energetic, intense designs

### `arctic`
- **Colors**: Cyan, White, Blue gradient
- **Glow**: White
- **Core Intensity**: 0.75
- **Effects**: Particles enabled
- **Best for**: Cold, winter themes

### `shadow`
- **Colors**: Black, Gray gradient
- **Glow**: Gray
- **Core Intensity**: 0.7
- **Effects**: No particles
- **Best for**: Dark mode, mysterious interfaces

## Advanced Usage

### Custom Configuration

```tsx
<NitroOrb
  backgroundColors={['#FF0080', '#7928CA', '#4055D8']}
  glowColor="#FF0080"
  particleColor="#FFFFFF"
  speed={30}
  size={200}
  showWavyBlobs={true}
  showParticles={true}
  showGlowEffects={true}
  showShadow={true}
  coreGlowItensity={1.5}
  style={styles.customOrb}
/>
```

### Using with Refs

```tsx
import React, { useRef } from 'react'
import { NitroOrb, type NitroOrbRef } from 'react-native-nitro-orb'

function App() {
  const orbRef = useRef<NitroOrbRef>(null)

  return (
    <NitroOrb
      ref={orbRef}
      preset="cosmic"
      size={180}
    />
  )
}
```

### Animated Example

```tsx
import React, { useState, useEffect } from 'react'
import { NitroOrb } from 'react-native-nitro-orb'

function AnimatedOrb() {
  const [speed, setSpeed] = useState(20)

  useEffect(() => {
    const interval = setInterval(() => {
      setSpeed(s => s === 60 ? 20 : s + 10)
    }, 2000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <NitroOrb
      preset="cosmic"
      speed={speed}
      size={200}
      showWavyBlobs={true}
      showParticles={true}
      showGlowEffects={true}
      showShadow={true}
    />
  )
}
```

## TypeScript

The component is fully typed. Here are the main type definitions:

```typescript
type PresetType =
  | 'mystic'
  | 'nature'
  | 'sunset'
  | 'ocean'
  | 'minimal'
  | 'cosmic'
  | 'fire'
  | 'arctic'
  | 'shadow'

interface NitroOrbProps extends HybridViewProps {
  preset?: PresetType
  speed?: number
  glowColor?: string
  size?: number
  backgroundColors?: string[]
  particleColor?: string
  showWavyBlobs?: boolean
  showParticles?: boolean
  showGlowEffects?: boolean
  showShadow?: boolean
  coreGlowItensity?: number
}

type NitroOrbRef = HybridRef<NitroOrbProps, NitroOrbMethods>
```

## Visual Effects Breakdown

The NitroOrb component consists of multiple layered visual effects:

1. **Background Gradient**: Multi-color gradient that forms the base layer
2. **Base Depth Glows**: Rotating glow effects that create depth
3. **Wavy Blobs**: Organic, flowing shapes that add movement
4. **Core Glow Effects**: Bright, energetic animations at the center
5. **Particles**: Floating elements that add dynamism
6. **Inner Glows**: Realistic rim lighting for depth
7. **Shadows**: Multi-layered shadows for realism

Each effect can be individually controlled for maximum customization.

## Performance Considerations

- The component uses native SwiftUI rendering for optimal performance
- Effects are GPU-accelerated on iOS
- Consider reducing effects (`showParticles`, `showWavyBlobs`) on lower-end devices
- The `minimal` preset is optimized for performance-critical scenarios

## Platform Support

Currently, this component only supports **iOS** (13.0+). Android support is planned for future releases.

## Credits

- Built with [Nitro Modules](https://github.com/mrousavy/nitro)
- Bootstrapped with [create-nitro-module](https://github.com/patrickkabwe/create-nitro-module)
- SwiftUI orb animations inspired by iOS design patterns

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT © [Gabriel-Pereira1788](https://github.com/Gabriel-Pereira1788)
