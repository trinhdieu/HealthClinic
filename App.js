import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {
  View,
  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogIn from './src/component/login';
import SignUp from './src/component/signup';
import Home from './src/component/home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="LogIn" component={LogIn}
          options = {{title: "Đăng nhập"}}
        />
        <Stack.Screen 
          name="SignUp" component={SignUp}
          options = {{title: "Đăng ký"}}
        />
        <Stack.Screen 
          name="Home" component={Home}
          options = {{title: "Trang chủ"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}