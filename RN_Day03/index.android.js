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
  Navigator,
  ScrollView
} from 'react-native';

import Custom from './js/custom'


//这个是页面之间跳转时候的动画，具体有哪些？可以看这个目录下，有源代码的: node_modules/react-native/Libraries/CustomComponents/Navigator/NavigatorSceneConfigs.js

class RN_Day03 extends Component {
  render() {

    let defaultName = 'List';
    let defaultComponent = List;

    return (
      <Navigator
          style= {[styles.top]}
          initialRoute = {{ name:defaultName, component:defaultComponent }}
          configureScene = {(route)=>{return Navigator.SceneConfigs.VerticalDownSwipeJump;}}
          renderScene={(route,navigator)=>{let Component = route.component; return <Component {...route.params} navigator={navigator}/>
    }
  }
  />
);
}
}


const UserBean = {
  1: {
    name: 'Jax',
    age: 22
  },
  2: {
    name: '大头死变态',
    age: 24
  },
  3: {
    name: '虫虫狮',
    age: 18
  }
};


class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 1,
      user: null,
    };
  }

  onItemClick() {
    const {
      navigator
    } = this.props;
    const self = this;
    var rand = 1 + Math.floor((Math.random() * 3));
    //为什么这个地方可以取得 props.navigator 
    if (navigator) {
      navigator.push({
        name: 'Detail',
        component: Detail,
        params: {
          id: rand,
          getUser: function(user) {
            self.setState({
              user: user
            })
          }
        }
      });
    }
  }

  render() {
    if (this.state.user) {
      return (
        <View>
          <Text style={styles.list_item} onPress={this.onItemClick.bind(this)}>用户信息:{JSON.stringify(this.state.user)}</Text>
        </View>
      );
    } else {
      return (
        <ScrollView>
        <Text style={[styles.list_item]} onPress={this.onItemClick.bind(this)}>安倍晋三是傻狗</Text>
        <Text style={[styles.list_item]} onPress={this.onItemClick.bind(this)}>安倍晋三是蠢狗</Text>
        <Text style={[styles.list_item]} onPress={this.onItemClick.bind(this)}>安倍晋三是死狗</Text>
      </ScrollView>
      );
    }
  }
}

class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null
    };
  }

  componentDidMount() {
    this.setState({
      id: this.props.id
    })
  }

  onBackClick() {
    const {
      navigator
    } = this.props;

    if (this.props.getUser) {
      let user = UserBean[this.props.id];
      this.props.getUser(user);
    }

    if (navigator) {
      //入栈出栈,将当前的页面pop 相当于android 中finish 
      navigator.pop();
    }
  }

  render() {
    return (
      <ScrollView>
          <Text style={styles.list_item}>传递过来的用户Id是:{this.props.id}</Text>
          <Text style={[styles.list_item]} onPress={this.onBackClick.bind(this)}>点击返回</Text>
      </ScrollView>
    );
  }
}

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (<Navigator 
      style = {styles.container}
      initialRoute= {{component:Custom}}
      renderScene ={(route,navigator)=>{return <route.component navigator={navigator}{...route}{...route.passProps}/>
    }
  }
  />);
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list_item: {
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    justifyContent: 'center',
  },
  top: {
    marginTop: 40,
  }

});

AppRegistry.registerComponent('RN_Day03', () => RN_Day03);