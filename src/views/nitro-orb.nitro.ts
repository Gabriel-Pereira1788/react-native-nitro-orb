import type {
  HybridView,
  HybridViewProps,
  HybridViewMethods,
} from 'react-native-nitro-modules'

export interface NitroOrbProps extends HybridViewProps {
   isRed: boolean
}

export interface NitroOrbMethods extends HybridViewMethods {}

export type NitroOrb = HybridView<NitroOrbProps, NitroOrbMethods, { ios: 'swift' }>