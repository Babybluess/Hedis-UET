import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen';
import LogInScreen from '../screens/logInScreen';
import SignUpScreen from '../screens/signUpScreen';
import WelcomeScreen from '../screens/welcomeScreen';
import DetailScreen from '../screens/detailScreen';
import { Provider } from 'react-redux'
import { Store } from '../redux/store';
import NameScreen from '../screens/nameScreen';
import AccountScreen from '../screens/accountScreen';

const Stack = createNativeStackNavigator()


export default function AppNavigation() {
  return (
  <Provider store={Store}>  
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Log In" component={LogInScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen name="Set Name" component={NameScreen} />
        <Stack.Screen name="Set Account" component={AccountScreen} />
        <Stack.Screen name="DetailItem" store options={{presentation: 'fullScreenModal'}} component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>  
  )
}

const styles = StyleSheet.create({})