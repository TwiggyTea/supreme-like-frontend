import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AnimalBracket from './components/AnimailBracket';
import ArtBracket from './components/ArtBracket'

export default function App() {
  return (
    <View style={styles.container}>
      <AnimalBracket/>
      <ArtBracket/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
