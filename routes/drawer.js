import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import HomeStack from './homeStack'
import AboutStack from './aboutStack'

const Drawer = createDrawerNavigator()

export default function DrawerContainer() {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name='Reviews R US' component={HomeStack} />
      <Drawer.Screen name='About' component={AboutStack} />
    </Drawer.Navigator>
  )
}
