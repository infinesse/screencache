import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class SettingsTab extends Component {
  render() {
    return (
      <View style={StyleSheet.container}>
        <Text>Settings Tab</Text>
      </View>
    );
  }
}
export default SettingsTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
