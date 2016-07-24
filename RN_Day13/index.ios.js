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
  ActionSheetIOS,
  TouchableOpacity
} from 'react-native';

var BUTTONS = ['苹果', '桃子', '菠萝', '西瓜', '删除', '取消'];
var DESTRUCTIVE_INDEX = 4;
var CANNEL_INDEX = 5;

class RN_Day13 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: 'none'
    };
  }

  showActionSheet() {
    ActionSheetIOS.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: CANNEL_INDEX,
      destructiveButtonIndex: DESTRUCTIVE_INDEX,
      tintColor: 'green'
    }, (buttonIndex) => {
      this.setState({
        clicked: BUTTONS[buttonIndex]
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>this.showActionSheet()}>
        <Text>点击选择水果</Text>
        </TouchableOpacity>
        <Text>你喜欢的水果是{this.state.clicked}</Text>
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

AppRegistry.registerComponent('RN_Day13', () => RN_Day13);