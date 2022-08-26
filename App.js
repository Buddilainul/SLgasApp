import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//react navigation stack
import RoostStack from './navigators/RootStack';



export default function App() {
  return <RoostStack />;
  

}