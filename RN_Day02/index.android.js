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

//引用头部组件
const Header = require('./js/custom');

class RN_Day02 extends Component {
  render() {
    return (
      <View>
       <Header></Header>
        <List title='welcome'></List>
        <List title='to'></List>
        <List title='jiangxi'></List>
        <List title='jiujiang'></List>
        <ImportNews news={['这个是自定义组件的','四大四大','哈哈哈哈哈哈','菲律宾的一群傻子']}></ImportNews>
      </View>
    );
  }
}

//列表样式
class List extends Component {
  render() {
    return (
      <View style={styles.list_item}>
        <Text style={styles.list_item_font}>{this.props.title}</Text>
      </View>
    );
  }
}
//ImportNews
class ImportNews extends Component {

  show(title) {
    alert(title);
  }

  render() {
    var news = [];
    //警告的处理: 数组里面需要key属性
    for (var i in this.props.news) {
      var text = (
        <Text key={i} numberOfLines = {2} style = {styles.new_item} onPress = {this.show.bind(this,this.props.news[i])}>
          {this.props.news[i]} 
        </Text>
      );
      news.push(text);
    }


    return (
      <View style={styles.flex}>
        <Text style={styles.news_title}>今日要闻</Text>
        {news}
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
  list_item: {
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center'
  },
  list_item_font: {
    fontSize: 16,
  },
  news_title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#cd1d1c',
    marginLeft: 10,
    marginTop: 10
  },
  new_item: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 15,
    lineHeight: 40
  }
});

AppRegistry.registerComponent('RN_Day02', () => RN_Day02);