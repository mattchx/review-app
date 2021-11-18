import * as React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'

const Stack = createStackNavigator()

const options = {
  all: {
    headerTintColor: 'black',
    headerStyle: { backgroundColor: 'ivory', height: 80 },
  },
  home: {
    title: 'Game Zone',
    headerTintColor: 'ivory',
    headerStyle: { backgroundColor: 'cornflowerblue', height: 60 },
  },
}

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={options.all}>
      <Stack.Screen name='Home' component={Home} options={options.home} />
      <Stack.Screen
        name='ReviewDetails'
        component={ReviewDetails}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  )
}

export default HomeStack
