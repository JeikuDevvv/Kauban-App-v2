import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import HomeScreen from '../screens/main/HomeScreen';

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home Screen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
