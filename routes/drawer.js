import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import HomeStack from './homeStack'
import AboutStack from './aboutStack'

const Drawer = createDrawerNavigator()

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

export default function DrawerContainer() {
  return (
    <Drawer.Navigator initialRouteName='Home' screenOptions={options.all}>
      <Drawer.Screen
        name='Reviews R US'
        component={HomeStack}
        options={options.home}
      />
      <Drawer.Screen name='About' component={AboutStack} />
    </Drawer.Navigator>
  )
}
