import * as React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'

const Stack = createStackNavigator()

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen
        name='ReviewDetails'
        component={ReviewDetails}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  )
}

export default HomeStack
