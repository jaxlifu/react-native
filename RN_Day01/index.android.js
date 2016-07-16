/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
//http://bizhi.sogou.com/detail/info/949282
import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  PixelRatio,
  Text,
  Image,
  View
} from 'react-native';


class RN_Day01 extends Component {
  render() {
    return (
      //最外层容器

      <View style= {styles.container}>

         <View style={[styles.item,styles.center]}>
            <Text style={[styles.font]}>左边的布局</Text>
          </View>

          <View style={[styles.item,styles.lineLeftRight]}>
            <View style={[styles.lineCenter,styles.flex,styles.center]}>
              <Text style={[styles.font]}>中间居上</Text>
            </View>
            <View style= {[styles.flex,styles.center]}>
              <Text style={[styles.font]}>中间居下</Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={[styles.lineCenter,styles.flex,styles.center]}>
              <Text style={[styles.font]}>右边居上</Text>
            </View>
            <View style={[styles.flex,styles.center]}>
             <Text style={[styles.font]}>右边居下</Text>
            </View>
          </View>
        {
          /*  <View style= {[styles.item,styles.center]}>
             <Text style={styles.font}>酒店</Text>
           </View>

           <View style= {[styles.item,styles.lineLeftRight]}>
             <View style= {[styles.flex,styles.center,styles.lineCenter]}>
               <Text style={styles.font}>海外酒店</Text>
             </View>
             <View style= {[styles.flex,styles.center]}>
               <Text style={styles.font}>特惠酒店</Text>
             </View>
           </View>

           <View style= {styles.item}>
             <View style= {[styles.flex,styles.center,styles.lineCenter]}>
               <Text style={styles.font}>团购</Text>
             </View>
             <View style={[styles.flex,styles.center]}>
               <Text style={styles.font}>客栈</Text>
             </View>
           </View>*/
        }
         
      </View>
    );
  }
}
//justifyContent enum('flex-start', 'flex-end', 'center', 'space-between', 'space-around') #
//布局方向: flexDirection enum('row', 'column') #
//alignSelf enum('auto', 'flex-start', 'flex-end', 'center', 'stretch') #
//alignItems enum('flex-start', 'flex-end', 'center', 'stretch') #

//alignItems: 'center', //可用于水平居中；
// justifyContent: 'center', //垂直居中

//样式对照
/*const styles = StyleSheet.create({
  container: {
    height: 80,
    borderRadius: 3,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '#FF0000',
    flexDirection: 'row' //水平布局row  垂直布局column
  },
  item: { //设置边框的时候要设置宽度,不然显示不出来
    flex: 1,
    height: 80
  },
  lineLeftRight: { //左右边线
    borderColor: '#FFFFFF',
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  lineCenter: {
    borderBottomWidth: 1,
    borderColor: '#FFFFFF'
  },
  font: {
    fontSize: 16,
    color: '#FFFFFF'
  },
  flex: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});*/

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    marginLeft: 5,
    marginRight: 5,
    height: 84,
    flexDirection: 'row',
    borderRadius: 5,
    padding: 2,
    backgroundColor: '#FF0067',
  },
  item: {
    flex: 1,
    height: 80,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  flex: {
    flex: 1
  },
  font: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  lineLeftRight: {
    borderLeftWidth: 1 / PixelRatio.get(),
    borderRightWidth: 1 / PixelRatio.get(),
    borderColor: '#fff'
  },
  lineCenter: {
    borderBottomWidth: 1 / PixelRatio.get(),
    borderColor: '#fff'
  },
});
//注意应用(registerComponent)后才能正确渲染
//注意: 只把应用作为一个整体注册一次,而不是每个组件/模块都注册
AppRegistry.registerComponent('RN_Day01', () => RN_Day01);