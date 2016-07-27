/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//noinspection JSUnresolvedVariable
import React, {Component} from 'react';
//noinspection JSUnresolvedVariable
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';

import Splash from './js/Splash';
/* let Component = route.component;
 * return <Component {...route.params} navigator={navigator}
 */
class RN_Day15 extends Component {
  render() {
    return (
        <Navigator
            initialRoute={{component: Splash}}
            configureScene={() => Navigator.SceneConfigs.PushFromRight}
            renderScene={
              (route, navigator) => {
                let Component = route.component;
                return <Component title={route.title} navigator={navigator}/>
              }
            }
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RN_Day15', () => RN_Day15);
