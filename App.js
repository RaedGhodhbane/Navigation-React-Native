import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import Apploading from 'expo-app-loading'

const fetchFont = () => {
  return Font.loadAsync({
    "regular" : require('./assets/fonts/Roboto-Bold.ttf'),
    "bold" : require('./assets/fonts/Roboto-Regular.ttf')
  })
}

export default function App() {
  const [isLoaded, setisLoaded] = useState(false)

  if (!isLoaded) {
    return (
      <AppLoading
      startAsync={fetchFont}
      onFinish={() => setisLoaded(true)}
      onError={console.warn}
    />
  ); 

  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
