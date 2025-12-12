import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NitroOrb } from 'react-native-nitro-orb';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
        <NitroOrb isRed={true} style={styles.view} testID="nitro-orb" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    width: 200,
    height: 200
  }});

export default App;