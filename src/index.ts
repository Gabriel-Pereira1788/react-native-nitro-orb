import { getHostComponent, type HybridRef } from 'react-native-nitro-modules'
import NitroOrbConfig from '../nitrogen/generated/shared/json/NitroOrbConfig.json'
import type {
  NitroOrbProps,
  NitroOrbMethods,
} from './views/nitro-orb.nitro'


export const NitroOrb = getHostComponent<NitroOrbProps, NitroOrbMethods>(
  'NitroOrb',
  () => NitroOrbConfig
)

export type NitroOrbRef = HybridRef<NitroOrbProps, NitroOrbMethods>
