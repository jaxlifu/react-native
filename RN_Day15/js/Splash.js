/**
 *Create by Jax on 2016/7/26.
 */

'use strict';

//noinspection JSUnresolvedVariable
import React, {Component} from 'react';

//noinspection JSUnresolvedVariable
import {
    StyleSheet,
    View,
    Image,
    Dimensions,
    Navigator,
    InteractionManager,
    TouchableOpacity
} from 'react-native';

//通过输出发现这个宽高是360*640 实际是720 *1280 所以这个单位应该是Android中dp类似
var {height, width} = Dimensions.get('window');
import Main from './Main';

class Splash extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
    }

    componentDidMount() {
        //1.9s后自动跳转
        this.timer = setTimeout(()=> {
            // alert('是时候跳转了!');
            // console.log('是时候跳转了');
            InteractionManager.runAfterInteractions(()=> this.jump2Main());
        }, 1900);
    }

    componentWillUnmount() {
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }


    jump2Main() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                component: Main,
            });
        }
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={()=>this.jump2Main()}>
                    <Image
                        resizeMode={'cover'}
                        source={require('../images/splash@3x.png')}
                        style={styles.image}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    image: {
        width: width,
        height: height - 30,//减去状态栏的高度
    }
});


export default Splash;
