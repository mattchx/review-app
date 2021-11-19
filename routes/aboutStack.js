import * as React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import About from '../screens/about'

const Stack = createStackNavigator()

function AboutStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='About Us' component={About} />
    </Stack.Navigator>
  )
}

export default AboutStack
