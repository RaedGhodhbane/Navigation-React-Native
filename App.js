import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import Navigation from './Navigation/Navigation';

const fetchFont = () => {
  return Font.loadAsync({
    "bold" : require('./assets/fonts/Roboto-Bold.ttf'),
    "regular" : require('./assets/fonts/Roboto-Regular.ttf')
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
      <Navigation/>
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
