import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { MainBottomNavigation } from './MainBottomNavigation'

const ApplicationNavigator = () => {
  return (
    <NavigationContainer>
      <MainBottomNavigation />
    </NavigationContainer>
  )
}

export default ApplicationNavigator
