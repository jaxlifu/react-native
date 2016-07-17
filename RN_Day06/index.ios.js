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
  PickerIOS,
  ProgressViewIOS,
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
        loaded: this.state.loaded + 10,
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

        <PickerIOS
          node={'dialog'}
          prompt={'请选择语言'}
          selectedValue={this.state.language}
          onValueChange ={(lang)=>this.setState({language:lang})}>
          <PickerIOS.Item label='java' value='java' />
          <PickerIOS.Item label='oc' value='oc' />
          <PickerIOS.Item label='python' value='python' />
          <PickerIOS.Item label='react' value='react' />
          <PickerIOS.Item label='js' value='js' />
          <PickerIOS.Item label='Android' value='Android' />
          <PickerIOS.Item label='IOS' value='IOS' />
        </PickerIOS>

        <Text>{this.state.language}</Text>
        <ProgressViewIOS
          progressTintColor={'#CF000F'}
          progressViewStyle={'default'}
          trackTintColor={'#FCFD0B'}
          progress={0.5}
        />

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25
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
  },

});

AppRegistry.registerComponent('RN_Day06', () => RN_Day06);