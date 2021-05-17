import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ScanScreen from './screens/ScanScreen';

export default class App extends React.Component {
  render() {
    return(
      <AppContainer/>
    );
  }
}

var switchTab = createBottomTabNavigator({
  ScanScreen : {screen : ScanScreen}, 
})
const AppContainer = createAppContainer(switchTab)