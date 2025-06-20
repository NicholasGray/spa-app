import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './src/screens/HomeScreen';
import ChatScreen from './src/screens/ChatScreen';
import BroadcastsScreen from './src/screens/BroadcastsScreen';
import PaymentsScreen from './src/screens/PaymentsScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Student Chat" component={ChatScreen} />
        <Drawer.Screen name="Broadcasts" component={BroadcastsScreen} />
        <Drawer.Screen name="Payments" component={PaymentsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
