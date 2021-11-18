import * as React from 'react'
import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native'

import Drawer from './routes/drawer'

export default function App() {
  const [loaded] = useFonts({
    nunitoRegular: require('./assets/fonts/Nunito-Regular.ttf'),
    nunitoBold: require('./assets/fonts/Nunito-Bold.ttf'),
  })

  if (!loaded) {
    return null
  }
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  )
}
