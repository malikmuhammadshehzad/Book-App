import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, SingleBook} from '../Screen';
const AppNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
       
      <Stack.Navigator  initialRouteName='home' screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="singleBook" component={SingleBook} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
