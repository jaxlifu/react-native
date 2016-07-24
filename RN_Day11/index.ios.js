/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SideMenu from 'react-native-side-menu';

class RN_Day11 extends Component {
  render() {
    const menu = <Menu/>;
    return (
      <SideMenu menu={menu}>
        <View style={styles.container}>
          <Text>这个是详情内容</Text>
        </View>
      </SideMenu>

    );
  }
}

class Menu extends Component {
  render() {
    return (
      <View style={styles.menu}>
          <Text>这个是菜单内容</Text>
      </View>
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
  menu: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FCFD0B',
    alignItems: 'center',
  }
});

AppRegistry.registerComponent('RN_Day11', () => RN_Day11);