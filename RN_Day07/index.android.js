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
  View,
  DrawerLayoutAndroid,
  ActivityIndicator,
  Modal
} from 'react-native';

class RN_Day07 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animating: true,
    };

    this.openDrawer = this.openDrawer.bind(this);
  }



  openDrawer() {
    this.drawer.openDrawer();
  }

  render() {
    const navigationView = (
      <View style={{flex: 1, backgroundColor:'#FAFAFA'}}>
        <Text style={{marginTop: 10,marginLeft:20,fontSize: 15, textAlign:'left'}}>消息</Text>
        <Text style={{marginTop: 10,marginLeft:20,fontSize: 15, textAlign:'left'}}>设置</Text>
      </View>
    );

    return (
      <View style={styles.container}>
        <DrawerLayoutAndroid
          ref={component => this.drawer = component}
          drawerWidth = {300}
          renderNavigationView ={()=>navigationView}
          drawerPostion = {DrawerLayoutAndroid.positions.Left} >
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
            <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
          </View>
        </DrawerLayoutAndroid>
        {/**position enum('absolute', 'relative')*/}
        <ActivityIndicator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centering: {
    justifyContent: 'center',
    padding: 8,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    // alignItems: 'center',android中当使用DrawerLayoutAndroid 组件时添加了alignItems : 'center' 样式后会出现一个异常
    //folly::toJson: JSON object value was a Nan or INF 详情见https://github.com/skv-headless/react-native-scrollable-tab-view/issues/115
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

AppRegistry.registerComponent('RN_Day07', () => RN_Day07);