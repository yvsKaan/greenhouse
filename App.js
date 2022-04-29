import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import "react-native-gesture-handler";

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import SettingScreen from './screens/SettingScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{
              headerShown: false,
            }}
        />
        <Stack.Screen 
            name="Home"
            component={HomeScreen} 
            options={{
              headerShown: false,
            }}
        />
        <Stack.Screen 
            name="Detail" 
            component={DetailScreen} 
            options={{
              headerShown: false,
            }}
        />
        <Stack.Screen 
            name="Setting" 
            component={SettingScreen} 
            options={{
              headerShown: false,
            }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
