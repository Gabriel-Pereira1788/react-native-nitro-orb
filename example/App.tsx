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
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>NitroOrb Presets</Text>

        <View style={styles.grid}>
          {presets.slice(0,1).map((preset) => (
            <View key={preset} style={styles.orbContainer}>
              <View style={styles.orbWrapper}>
                <NitroOrb
                  preset={preset}
                  size={orbSize}
                  speed={90}
                  style={[styles.orb, { width: orbSize, height: orbSize }]}
                  showWavyBlobs={true}
                  showParticles={true}
                  showGlowEffects={true}
                  showShadow={true}
                  coreGlowItensity={1.0}
                />
              </View>
              <Text style={styles.presetLabel}>{preset}</Text>
            </View>
          ))}
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Each orb showcases a unique preset theme
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0a0a0a',
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
    justifyContent: 'space-between',
  },
  orbContainer: {
    width: '31%',
    alignItems: 'center',
    marginBottom: 30,
  },
  orbWrapper: {
    backgroundColor: '#1a1a1a',
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
    color: '#ffffff',
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
