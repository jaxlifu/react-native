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
  View
} from 'react-native';


import Swiper from 'react-native-swiper';

class RN_Day10 extends Component {


  render() {
    var homeView = (
      <View style={styles.container}>
        <Text style={styles.welcome}>这个是首页内容</Text>
    </View>
    );

    var mineView = (
      <View style={styles.container}>
        <Text style={styles.welcome}>这个是我的页面</Text>
      </View>
    );
    return (
      <Swiper 
        index={0}
        autoplay={true}
        style={styles.swiper}
        loop = {true}>
        {homeView}
        {mineView}
        <Image style={[styles.img,styles.container]} resizeMode={'contain'} source={{uri:'https://img.alicdn.com/tps/TB16FcnKVXXXXaTXpXXXXXXXXXX-520-280.png'}}/>
        <Image style={[styles.img,styles.container]} resizeMode={'contain'} source={{uri:'https://img.alicdn.com/tps/TB1iFEbKVXXXXbLXVXXXXXXXXXX-520-280.jpg'}}/>
        <Image style={[styles.img,styles.container]} resizeMode={'contain'} source={{uri:'https://aecpm.alicdn.com/simba/img/TB1Yl.AKVXXXXbaXFXXSutbFXXX.jpg'}}/>
        <Image style={[styles.img,styles.container]} resizeMode={'contain'} source={{uri:'https://aecpm.alicdn.com/simba/img/TB1jIrUKVXXXXXEXVXXSutbFXXX.jpg'}}/>
      </Swiper>
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
  swiper: {
    height: 200,
  },
  img: {
    height: 200,
  }
});

AppRegistry.registerComponent('RN_Day10', () => RN_Day10);