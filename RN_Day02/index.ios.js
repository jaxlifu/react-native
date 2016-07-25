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
  ScrollView
} from 'react-native';

//引用头部组件
const Header = require('./js/header');

const Custom = require('./js/custom');

// const Index = require('./js/index');

class RN_Day02 extends Component {
  render() {
    return (

      <ScrollView>
        <Custom/>
        <Header/>
        <List list={['安倍晋三','你个大sb','你家养了一家的泰迪','每天欢乐多']}/>
        <ImportNews news={['这个是自定义组件的','四大四大','哈哈哈哈哈哈','菲律宾的一群傻子']}/>
      </ScrollView>


    );
  }
}


//列表样式
class List extends Component {

  render() {
    var list = [];
    for (var i in this.props.list) {
      var item = (
        <View  key={i}  style={styles.list_item}>
          <Text style={styles.list_item_font}>{this.props.list[i]}</Text>
        </View>
      );
      list.push(item);
    }
    return (
      <View>
        {list}
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