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
  ActivityIndicator
} from 'react-native';
//Android那边写了个DrawerLayout效果 IOS就只有ActivityIndicator 
class RN_Day07 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animating: true,
    };
  }

  //显示的效果是每隔2秒刷新下界面
  setToggleTimeOut() {
    //开Demo中的是节制在setTimeOut中写的this.setState但是编译不通过 
    //更据自己理解是内部类使用情况要做调整
    var loading = !this.state.animating;
    var self = this;

    setTimeout(function() {

      self.setState({
        animating: loading,
      });
      self.setToggleTimeOut();
    }, 1900);
  }

  /**在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异部操作阻塞UI)。*/
  componentDidMount() {
    this.setToggleTimeOut();
  }

  render() {
    return (
      <View style={styles.container}>
      <ActivityIndicator 
          animating = {this.state.animating}
          style = {[styles.centering]}
          size = {'large'}
        />

        {this.state.animating?null:
          <Text style= {[styles.welcome]}>加载完成后显示的界面</Text>

        }
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
  centering: {
    justifyContent: 'center',
    padding: 8,
    alignItems: 'center',
    height: 80,
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