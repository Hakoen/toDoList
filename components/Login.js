import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Login extends Component {
  render() {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button title="Ga naar dashboard" onPress={() => this.props.navigate.push({name: 'dashboard'})} />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
