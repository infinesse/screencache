import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class UploadTab extends Component {
  render() {
    return (
      <View style={StyleSheet.container}>
        <Text>Upload Tab</Text>
      </View>
    );
  }
}
export default UploadTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
