/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import MainTabScreen from './screens/MainTabScreen';


import Icon  from 'react-native-vector-icons/Ionicons';


const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" >
        <Drawer.Screen name="Home" component={MainTabScreen} />
        {/* <Drawer.Screen name="Profile" component={ProfileStackScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

