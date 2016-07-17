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
  Picker,
  ProgressBarAndroid,
  ListView,
  RefreshControl
} from 'react-native';

class RN_Day06 extends Component {
  constructor(props) {
    super(props);
    var data = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      language: '',
      isRefreshing: false,
      dataSource: data.cloneWithRows([
        'Jax', 'Jasen', 'garden', 'darren', '~\(≧▽≦)/~啦啦啦',
        'Jax', 'Jasen', 'garden', 'darren', '~\(≧▽≦)/~啦啦啦',
        'Jax', 'Jasen', 'garden', 'darren', '~\(≧▽≦)/~啦啦啦',
        'Jax', 'Jasen', 'garden', 'darren', '~\(≧▽≦)/~啦啦啦',
        'Jax', 'Jasen', 'garden', 'darren', '~\(≧▽≦)/~啦啦啦',
      ]),
    };
  }

  onRefresh() {
    this.setState({
      isRefreshing: true,
    });
    setTimeout(() => {
      // prepend 10 items
      var data = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });
      //此处还不会更新
      this.setState({
        isRefreshing: false,
        dataSource: data.cloneWithRows([
          '彩色的路标', '禁止通行的警告', '天空之下', '我们轻的像羽毛', '~\(≧▽≦)/~啦啦啦',
        ]),
      });
    }, 2000);

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Picker组件</Text>

        <Picker
          style={styles.picker}
          node={'dialog'}
          prompt={'请选择语言'}
          selectedValue={this.state.language}
          onValueChange ={(lang)=>this.setState({language:lang})}>
          <Picker.Item label='java' value='java' />
          <Picker.Item label='oc' value='oc' />
          <Picker.Item label='python' value='python' />
          <Picker.Item label='react' value='react' />
          <Picker.Item label='js' value='js' />
          <Picker.Item label='Android' value='Android' />
          <Picker.Item label='IOS' value='IOS' />
        </Picker>

        <Text>{this.state.language}</Text>
        <ProgressBarAndroid styleAttr={'Horizontal'}/>
        <ProgressBarAndroid styleAttr={'Small'}/>
        <ProgressBarAndroid styleAttr={'Large'}/>
        <ProgressBarAndroid styleAttr={'Inverse'}/>
        <ProgressBarAndroid styleAttr={'SmallInverse'}/>
        <ProgressBarAndroid styleAttr={'LargeInverse'}/>

        <ListView
          dataSource = {this.state.dataSource}
          renderRow = {(rowData)=><Text>{rowData}</Text>} 
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this.onRefresh.bind(this)}
              tintColor="#ff0000"
              title="Loading..."
              titleColor="#00ff00"
              colors={['#ff0000', '#00ff00', '#0000ff']}
              progressBackgroundColor="#ffff00"
            />
        }
        />
      </View>
    );
  }
}
/**
Horizontal
Small
Large
Inverse
SmallInverse
LargeInverse
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  picker: {
    height: 40,
    color: '#f00'
  }
});

AppRegistry.registerComponent('RN_Day06', () => RN_Day06);