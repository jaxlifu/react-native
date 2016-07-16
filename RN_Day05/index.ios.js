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
  Image,
  View,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

//由于直接跳过了前面的react.js部分的内容,直接从View部分开始学习,所以很多地方都没有深入了解过
//这边回去看了下react.js 的相关内容  http://www.runoob.com/react/react-tutorial.html
//这种方式应该是全局变量
var imageUrl1 = 'https://aecpm.alicdn.com/simba/img/TB1N1lsJFXXXXaLXFXXSutbFXXX.jpg';
var imageUrl2 = 'https://aecpm.alicdn.com/simba/img/TB1JD4.MFXXXXcgXXXXSutbFXXX.jpg';
var imageUrl3 = 'https://img.alicdn.com/tps/TB1JMuYKVXXXXaMXpXXXXXXXXXX-520-280.jpg';
var imageList = [imageUrl1, imageUrl2, imageUrl3];
var MAX_LENGTH = imageList.length;
var MIN_LENGTH = 0;

class RN_Day05 extends Component {
  /**
    React 组件 API。主要包括以下7个方法:
    设置状态：setState
    替换状态：replaceState
    设置属性setProps
    替换属性replaceProps
    强制更新：forceUpdate
    获取DOM节点：findDOMNode
    判断组件挂载状态：isMounted
  */

  /**
    React 生命周期
    Mounting：已插入真实 DOM
    Updating：正在被重新渲染
    Unmounting：已移出真实 DOM

    生命周期的方法有：
    componentWillMount 在渲染前调用,在客户端也在服务端。
    componentDidMount : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异部操作阻塞UI)。
    componentWillReceiveProps 在组件接收到一个新的prop时被调用。这个方法在初始化render时不会被调用。
    shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。 
    可以在你确认不需要更新组件时使用。
    componentWillUpdate在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
    componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。
    componentWillUnmount在组件从 DOM 中移除的时候立刻被调用。
  */
  //构造函数
  /**
   *state 和 props 主要的区别在于 props 是不可变的，而 state 可以根据与用户交互来改变。这就是为什么有些容器组件需要定义 state 来更新和修改数据。 而子组件只能通过 state 来传递数据。
   */
  constructor(props) {
    super(props);
    /**
     *React 把组件看成是一个状态机（State Machines）。通过与用户的交互，实现不同状态，然后渲染 UI，让用户界面和数据保持一致。
     *React 里，只需更新组件的 state，然后根据新的 state 重新渲染用户界面（不要操作 DOM）。
     */
    this.state = {
      position: 0,
    };
  }

  //显示下一张图片
  showNext(position) {
    position++;
    console.log(position);
    if (position < MAX_LENGTH) {
      this.setState({
        position: position,
      });
      console.log(position);
    } else {
      alert('没有下一张了!');
    }

  }

  //显示上一张图片
  showPrevious(position) {
    position--;
    console.log(position);
    if (position >= MIN_LENGTH) {
      this.setState({
        position: position,
      });
      console.log(position);
    } else {
      alert('没有上一张了!');
    }

  }

  //这边更据position去imageList中获取内容
  render() {
    return (
      <View style={styles.container}>
       <Image 
         style={[styles.image]}
         resizeMode={'contain'}
         defaultSource={require('./images/ic_loading.jpg')}
         source={{uri:imageList[this.state.position]}}
       />
        <View style={[styles.row]}>
          <TouchableOpacity style={[styles.button]} onPress={this.showPrevious.bind(this,this.state.position)}> 
            <Text>上一张</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button]} onPress={this.showNext.bind(this,this.state.position)}>
            <Text>下一张</Text>
          </TouchableOpacity>
        </View> 
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
  flex: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  image: {
    width: 400,
    height: 400,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    width: 80,
    height: 40,
    borderWidth: 1,
    borderColor: '#0100FD'
  }
});

AppRegistry.registerComponent('RN_Day05', () => RN_Day05);