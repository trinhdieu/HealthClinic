import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {
  View,
  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './src/component/signin';
import SignUp from './src/component/signup';
import ClientTabNavigator from './src/component/client/tabnavigator';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen 
          name="SignIn" component={SignIn}
          options = {{title: "Đăng nhập"}}
        />
        <Stack.Screen 
          name="SignUp" component={SignUp}
          options = {{title: "Đăng ký"}}
        />
        <Stack.Screen 
          name="ClientTabNavigator" component={ClientTabNavigator}
          options = {{title: "Trang chủ"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}