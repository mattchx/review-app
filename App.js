import React, { useState } from 'react'
// import { StyleSheet, Text, View, Alert, Button, TextInput } from 'react-native';
import { useFonts } from 'expo-font'
// import { AppLoading } from 'expo'
import Home from './screens/home'

export default function App() {
  const [loaded] = useFonts({
    nunitoRegular: require('./assets/fonts/Nunito-Regular.ttf'),
    nunitoBold: require('./assets/fonts/Nunito-Bold.ttf'),
  })

  if (!loaded) {
    return null
  }
  return <Home />
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
