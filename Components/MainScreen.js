import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Icon } from 'native-base';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import UploadTab from './AppTabNavigator/UploadTab';
import SettingsTab from './AppTabNavigator/SettingsTab';

export default class MainScreen extends Component {
  static navigationOptions = {
    headerLeft: <Icon name="ios-add-circle" style={{ paddingLeft: 10 }} />,
    title: 'screencache',
    headerRight: <Icon name="ios-settings" style={{ paddingRight: 10 }} />
  };

  render() {
    return <AppTabContainer />;
  }
}
const AppTabNavigator = createBottomTabNavigator({
  UploadTab: {
    screen: UploadTab
  },
  SettingsTab: {
    screen: SettingsTab
  }
});
const AppTabContainer = createAppContainer(AppTabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
