import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import DashboardClient from '../pages/DashboardClient';
import ProfileClient from '../pages/ProfileClient';
import MarkerDetail from '../pages/MarkerDetail';
import ScanCode from '../pages/ScanCode';

const App = createStackNavigator();


const AppRoutes = () => {
  return(
    <NavigationContainer>
      <App.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <App.Screen name="DashboardClient" component={DashboardClient} />
        <App.Screen name="ProfileClient" component={ProfileClient} />
        <App.Screen name="MarkerDetail" component={MarkerDetail} />
        <App.Screen name="ScanCode" component={ScanCode} />
      </App.Navigator>
    </NavigationContainer>
  )
  };

export default AppRoutes;
