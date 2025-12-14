import type {
  HybridView,
  HybridViewProps,
  HybridViewMethods,
} from 'react-native-nitro-modules'

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

export interface NitroOrbProps extends HybridViewProps {
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

export interface NitroOrbMethods extends HybridViewMethods {}

export type NitroOrb = HybridView<
  NitroOrbProps,
  NitroOrbMethods,
  { ios: 'swift' }
>
