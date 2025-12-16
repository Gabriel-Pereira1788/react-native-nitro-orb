import React from 'react'
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native'
import { NitroOrb } from 'react-native-nitro-orb'

const { width } = Dimensions.get('window')
const orbSize = (width - 60) / 3 // 3 columns with padding

const presets = [
  'mystic',
  'nature',
  'sunset',
  'ocean',
  'minimal',
  'cosmic',
  'fire',
  'arctic',
  'shadow',
] as const

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.orbWrapper}>
        <NitroOrb
          size={150}
          speed={90}
          style={[styles.orb, { width: 150, height: 200 }]}
          showWavyBlobs={true}
          showParticles={true}
          showGlowEffects={true}
          showShadow={true}
          coreGlowItensity={1.0}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#0a0a0a',
  },
  scrollContent: {
    paddingVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 10,
    letterSpacing: 1,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  orbContainer: {
    width: '31%',
    alignItems: 'center',
    marginBottom: 30,
  },
  orbWrapper: {
    // backgroundColor: '#1a1a1a',
    borderRadius: 20,
    padding: 10,

    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  orb: {
    alignSelf: 'center',
  },
  presetLabel: {
    color: '#1a1a1a',
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'capitalize',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  footer: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  footerText: {
    color: '#888',
    fontSize: 12,
    textAlign: 'center',
    fontStyle: 'italic',
  },
})

export default App
