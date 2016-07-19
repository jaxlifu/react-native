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

//实现了Android 的DrawerLayout效果,

class RN_Day07 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animating: true,
    };

    this.openDrawer = this.openDrawer.bind(this);
  }

  setToggleTimeOut() {
    // var laoding = !this.state.animating;
    // var self = this;
    // setTimeout(function() {
    //   self.setState({
    //     animating: laoding,
    //   });
    //   self.setToggleTimeOut();
    // }, 1900);

    /**上面是之前的写法,下面是ES6最新写法,我感觉这个是retrolambda语法*/
    setTimeout(() => {
      // prepend 10 items
      //此处还不会更新
      this.setState({
        animating: !this.state.animating,
      });
      //this.setToggleTimeOut();
    }, 2000);
  }

  /**在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异部操作阻塞UI)。*/
  componentDidMount() {
    this.setToggleTimeOut();
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

    const indicator = (
      <ActivityIndicator 
          animating = {this.state.animating}
          style = {[styles.centering]}
          size = {'large'}
      />
    );

    const drawerLayout = (
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
    );

    return (
      <View style={styles.container}>

       {
        /**初始化的时候用来做加载的View*/
        this.state.animating?indicator:null
       }
      {this.state.animating?null:drawerLayout}
       
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centering: {
    justifyContent: 'center',
    padding: 8,

    alignItems: 'center',
    height: 80,
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