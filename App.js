import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './HomePage';
import TenantPage from './TenantPage';
import LandPage from './LandPage';
import AddHousePage from './AddHousePage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Tenant" component={TenantPage} />
        <Stack.Screen name="Land" component={LandPage} />
        <Stack.Screen name="AddHouse" component={AddHousePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
