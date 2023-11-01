 import { StyleSheet, Text, View } from 'react-native'
 import React, { useEffect } from 'react'
 
import AppNavigation from './src/appNavigation'
import { store } from './src/Redux/Store'
import { Provider } from 'react-redux'
import SplashScreen from 'react-native-splash-screen'
 const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [ ])
  
   return (
    <Provider store={store} >
      <AppNavigation/>
    </Provider>
   )
 }
 
 export default App
 
 const styles = StyleSheet.create({})