import * as React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import About from '../screens/about'

const Stack = createStackNavigator()

const options = {
  all: {
    headerTintColor: 'black',
    headerStyle: { backgroundColor: 'ivory', height: 80 },
  },
  about: {
    title: 'Game Zone',
    headerTintColor: 'ivory',
    headerStyle: { backgroundColor: 'cornflowerblue', height: 60 },
  },
}

function AboutStack() {
  return (
    <Stack.Navigator screenOptions={options.all}>
      <Stack.Screen name='About Us' component={About} />
    </Stack.Navigator>
  )
}

export default AboutStack
