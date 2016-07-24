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
  AsyncStorage,
  TextInput,
  TouchableOpacity,
} from 'react-native';

class RN_Day12 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Jax',
      value: '',
    };
  }

  saveData(name) {
    AsyncStorage.setItem('NAME', name).then(() => {
      this.setState({
        name: '保存成功',
      });
    }).done();
  }

  loadData() {
    AsyncStorage.getItem('NAME').then((value) => {
      this.setState({
        name: value
      });
    }).done();
  }

  getValue(text) {
    this.setState({
      value: text,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          style={styles.edit_text}
          value={this.state.value}
          onChangeText={this.getValue.bind(this)}
          />
        <TouchableOpacity onPress={()=>this.saveData(this.state.value)}>
          <Text>保存姓名</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.loadData()}>
          <Text>获取姓名</Text>
        </TouchableOpacity>
        <Text style={styles.welcome}>
         {this.state.name}
        </Text>
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
  edit_text: {
    height: 40,
    borderWidth: 1,
    borderColor: '#0000F5',
    margin: 10,
  }
});

AppRegistry.registerComponent('RN_Day12', () => RN_Day12);