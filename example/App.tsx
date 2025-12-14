import React, { useState } from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { NitroOrb } from 'react-native-nitro-orb'

function App(): React.JSX.Element {
  const [isGenerating, setIsGenerating] = useState(false)
  return (
    <View style={styles.container}>
      <NitroOrb preset='minimal' size={100} speed={20} style={styles.view} testID="nitro-orb" />

      <Button title="Generate" onPress={() => setIsGenerating(prev => !prev)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    width: 200,
    height: 200,
  },
})

export default App
