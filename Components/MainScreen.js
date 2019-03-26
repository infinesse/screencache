import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Icon } from 'native-base';
import { createTabNavigator } from 'react-navigation';
class MainScreen extends Component {
  static navigationOptions = {
    headerLeft: <Icon name="ios-add-circle" style={{ paddingLeft: 10 }} />,
    title: 'screencache',
    headerRight: <Icon name="ios-settings" style={{ paddingRight: 10 }} />
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>MainScreen</Text>
      </View>
    );
  }
}
export default MainScreen;

// const AppTabNavigator = createTabNavigator({
//     HomeTab:{
//         screen: HomeTab
//     },
//     SearchTab:{
//         screen: SearchTab
//     },
//     UploadTab:{
//         screen: UploadTab
//     }
// })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
