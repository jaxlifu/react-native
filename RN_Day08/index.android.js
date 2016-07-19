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
  Modal,
  StatusBar,
  ViewPagerAndroid,
  WebView
} from 'react-native';

class RN_Day08 extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  _onPageSelected() {
    alert('page selected');
  }

  static get(url, callback, error) {
    fetch(url)
      .then((response) => response.text())
      .then((responseText) => {
        callback(JSON.parse(responseText));
      })
      .then((error) => {
        error(JSON.parse(error));
      })
      .done();
  }

  getHttpData() {
    console.log('运行到了获取数据的部分');
    fetch('http://gank.io/api/search/query/listview/category/Android/count/10/page/1')
      .then((response) => response.text())
      .then((responseText) => {
        console.log(responseText);
      })
      .then((error) => {
        console.log(error);
      })
      .done();
  }

  // async getUsersFromApi() {
  //   try {
  //     let response = await fetch('http://gank.io/api/search/query/listview/category/Android/count/10/page/1');
  //     return response;
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  render() {

    this.getHttpData();
    return (
      <View style={styles.container}>
        {/**貌似除了hidden方法其他的都没有在4.4的手机上出现效果*/}
         <StatusBar
           translucent = {true}
           hidden = {false}
           animated = {true}
           backgroundColor = {'#8013C6B6'}
         />

         {/*<ViewPagerAndroid 
          style= {[styles.view_page]}
          initialPage= {0}
          keyboardDismissMode={'on-drag'}
          onPageSelected = {(event) => alert('page changed'+event.nativeEvent.position)}
          // onPageSelected = {this._onPageSelected}
         >
          <View style={styles.button}><Text style={styles.buttonText}>第一个页面</Text></View>
          <View style={styles.button}><Text style={styles.buttonText}>第二个页面</Text></View>
          <View style={styles.button}><Text style={styles.buttonText}>第三个页面</Text></View>
          <View style={styles.button}><Text style={styles.buttonText}>第四个页面</Text></View>
         </ViewPagerAndroid>*/}

         <WebView
          javaScriptEnabled = {true}
          source = {{uri:'https://www.baidu.com'}}

         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view_page: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  innerContainer: {
    borderRadius: 10,
    alignItems: 'center',
  },
  row: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
  },
  rowTitle: {
    flex: 1,
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 5,
    flex: 1,
    height: 44,
    alignSelf: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  buttonText: {
    fontSize: 18,
    margin: 5,
    textAlign: 'center',
  },
  modalButton: {
    marginTop: 10,
  },
});

AppRegistry.registerComponent('RN_Day08', () => RN_Day08);