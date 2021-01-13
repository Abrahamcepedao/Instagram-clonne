import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBuPyfClts_PTeQ3qBFvMaTP-DYMUoajz0",
  authDomain: "instagram-app-c588a.firebaseapp.com",
  projectId: "instagram-app-c588a",
  storageBucket: "instagram-app-c588a.appspot.com",
  messagingSenderId: "112620215617",
  appId: "1:112620215617:web:b0573b94b9efda1027d5c0"
};

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import LandingScreen from './components/auth/Landing'
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
