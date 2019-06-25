import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

export default function App() {

  renderScene = (route, navigator) => {
    switch(route.name) {
      case 'login':
        return <Login navigate={navigator}/>
        break;
      case 'dashboard':
        return <Dashboard navigate={navigator} />
        break;
    }
  }

  navigate = (route) => {
    this.Navigator.push({
      route
    })
  }


  //How to finish?
  //https://www.youtube.com/watch?v=Z7u5wBQB-vg

  return (
    <Navigator
      initialRoute={{name: 'login'}}
      renderScene={this.renderScene}
    />
  );
}
