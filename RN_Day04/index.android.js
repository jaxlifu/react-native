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
  TextInput,
  View,
  PixelRatio,
  ListView
} from 'react-native';
//react-native 中最小的单位
var onePt = 1 / PixelRatio.get();

class RN_Day04 extends Component {
  render() {
    return (
      <View style={[styles.flex,styles.topStatus]}>
        <Search/>
      </View>
    );
  }
}
var WithLabel = React.createClass({
  render: function() {
    return (
      <View style={styles.labelContainer}>
        <View style={styles.label}>
          <Text>{this.props.label}</Text>
        </View>
        {this.props.children}
      </View>
    );
  },
});



/*
 <TextInput 
                      returnKeyType="search" 
                      ref='textInput'
                      placeholder = "请输入手机号或邮箱"
                      placeholderTextColor = "#999"
                      onFocus={() => {this.refs.textInput.focus()}}
            />
<WithLabel label="true">
             <TextInput secureTextEntry={true} style={styles.default} defaultValue="abc" />
       </WithLabel>
       <ListView
         style={styles.flex}
         dataSource={this.state.dataSource}
         renderRow={(rowData) => <Text>{rowData}</Text>}
       />
            */
class Search extends Component {

  //用一个变量标志是否显示提示文字
  //boolean show  this.state
  //初始化数据
  constructor(props) {
    super(props);
    var data = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: data.cloneWithRows([
        'Jax', 'Jasen', 'garden', 'darren', '~\(≧▽≦)/~啦啦啦',
        'Jax', 'Jasen', 'garden', 'darren', '~\(≧▽≦)/~啦啦啦',
        'Jax', 'Jasen', 'garden', 'darren', '~\(≧▽≦)/~啦啦啦',
        'Jax', 'Jasen', 'garden', 'darren', '~\(≧▽≦)/~啦啦啦',
        'Jax', 'Jasen', 'garden', 'darren', '~\(≧▽≦)/~啦啦啦',
      ]),
      show: false,
      value: null,

    };
  }

  hide(value) {
    this.setState({
      show: false,
      value: value,
    });
  }

  getValue(text) {
    this.setState({
      show: true,
      value: text,
    });
  }

  render() {
    return (
      <View style = {styles.flex}>
      <View style={[styles.flexDicrection]}>
        <View style={[styles.flex,styles.input]}>
          <TextInput style= {styles.edit_text}
            returnKeyType="search" 
            placeholder = "请输入关键字"
            value={this.state.value}
            placeholderTextColor = "#999"
            clearButtonMode={'always'}
            onChangeText={this.getValue.bind(this)}/>
          </View>
          <View style={[styles.btn]}>
            <Text style={styles.search} onPress={this.hide.bind(this,this.state.value)}>搜索</Text>
          </View>
        </View>

     {this.state.show ?
         <View style={[styles.result]}>
          <Text onPress={this.hide.bind(this,this.state.value+'今天是个好日子')}
                style={[styles.item]}
                numberOfLines={1}>
                {this.state.value}今天是个好日子
          </Text>
          <Text onPress={this.hide.bind(this,'高傲的'+this.state.value+'的android')}
                style={[styles.item]}
                numberOfLines={1}>
                高傲的{this.state.value}的android开发
          </Text>
          <Text onPress={this.hide.bind(this,'孤单的'+this.state.value+'铲平狗')}
                style={[styles.item]}
                numberOfLines={1}>
                孤单的{this.state.value}铲平狗
          </Text>
          <Text onPress={this.hide.bind(this,'自以为是'+this.state.value+'的设计师')}
                style={[styles.item]}
                numberOfLines={1}>
                自以为是{this.state.value}的设计师
          </Text>
          <Text onPress={this.hide.bind(this,'唧唧歪歪'+this.state.value+'的运营')}
                style={[styles.item]}
                numberOfLines={1}>
                唧唧歪歪{this.state.value}的运营
          </Text>
         </View> 
         :null
      } 
    </View>

    );
  }

}


const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  flexDicrection: {
    flexDirection: 'row',
    height: 100
  },

  topStatus: {
    marginTop: 25
  },
  input: {
    height: 45,
    borderColor: '#FF0000',
    borderWidth: 1,
    marginLeft: 10,
    paddingLeft: 10,
    borderRadius: 5
  },
  btn: {
    width: 45,
    height: 45,
    marginLeft: -5,
    marginRight: 5,
    backgroundColor: '#23BEFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  search: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold'
  },
  labelContainer: {
    flexDirection: 'row',
    marginVertical: 2,
  },
  label: {
    alignItems: 'flex-end',
    marginRight: 10,
    paddingTop: 2,
  },
  default: {
    height: 26,
    borderWidth: 0.5,
    borderColor: '#0f0f0f',
    flex: 1,
    fontSize: 13,
    padding: 4,
  },
  edit_text: {
    height: 40,
  },
  item: {
    fontSize: 16,
    paddingTop: 5,
    height: 40,
    paddingBottom: 10,
  },
  result: {
    marginTop: onePt,
    marginLeft: 18,
    marginRight: 5,
    height: 200
  }
});

AppRegistry.registerComponent('RN_Day04', () => RN_Day04);