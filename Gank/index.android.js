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
  Navigator, //导航
  StatusBar, //状态栏

} from 'react-native';

import HomePage from './js/HomePage';

class Gank extends Component {
  constructor(props) {
      super(props);
    }
    /*
 <Navigator
          style= {[styles.top]}
          initialRoute = {{ name:defaultName, component:defaultComponent }}
          configureScene = {(route)=>{return Navigator.SceneConfigs.VerticalDownSwipeJump;}}
          renderScene={(route,navigator)=>{let Component = route.component; return <Component {...route.params} navigator={navigator}/>
  */
  //不知道为什么在这边直接用View包裹效果会有问题
  render() {
    return (
      <View>
        <StatusBar 
        backgroundColor = {'transparent'}
        translucent = {true}/>
        <Navigator
          ref = {component=> this.navigator = component}
          initialRoute = {{
            component: HomePage
          }}
          configureScene = {(route)=>{return Navigator.SceneConfigs.VerticalDownSwipeJump;}}
          // 用来渲染navigator栈顶的route里的component页面
          renderScene = {(route,navigator)=>{
            let Component = route.component;
             // route={component: xxx, name: xxx, ...}， navigator.......route 用来在对应界面获取其他键值
            return <route.component navigator={navigator} {...route} {...route.passProps}/>
            // {...route.passProps}即就是把passProps里的键值对全部以给属性赋值的方式展开 如：test={10}
          }}
        />
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
});

AppRegistry.registerComponent('Gank', () => Gank);