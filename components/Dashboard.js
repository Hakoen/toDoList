import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Dashboard extends Component {
  render() {
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
      <Button title="Ga naar login" onPress={() => {
        this.props.navigate.pop()
      }}>To Login</Button>

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
