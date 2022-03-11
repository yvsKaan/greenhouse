import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import "react-native-gesture-handler";

import HomeScreen from './screens/HomeScreen';
import Detail from './screens/Detail';
import Setting from './screens/Setting';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
              headerShown: false,
            }}
        />
        <Stack.Screen 
            name="Detail" 
            component={Detail} 
            options={{
              headerShown: false,
            }}
        />
        <Stack.Screen 
            name="Setting" 
            component={Setting} 
            options={{
              headerShown: false,
            }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
