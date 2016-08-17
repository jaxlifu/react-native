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
    Navigator, //导航
    StatusBar, //状态栏
    AsyncStorage,

} from 'react-native';

import HomePage from './js/HomePage'; //首页
import Guide from  './js/Guide';

class Gank extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {isNeedGuide: 'true'};
    }


    setHasGuide() {
        console.log('setHasGuide');
        AsyncStorage.setItem('IS_NEED_GUIDE', 'false').then(()=> {

        }).done();
    }

    getIsNeedGuide() {
        var result = '';
        AsyncStorage.getItem('IS_NEED_GUIDE').then((value) => {
            console.log(value);
            result = value;
        }).done();
        return result;
    }

    /**
     componentWillMount 在渲染前调用,在客户端也在服务端。
     componentDidMount : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异部操作阻塞UI)。
     componentWillReceiveProps 在组件接收到一个新的prop时被调用。这个方法在初始化render时不会被调用。
     shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。可以在你确认不需要更新组件时使用。
     componentWillUpdate在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
     componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。
     componentWillUnmount在组件从 DOM 中移除的时候立刻被调用。
     */
    componentWillMount() {
    }

    componentDidMount() {

    }

    componentWillReceiveProps() {

    }

    componentWillUpdate() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <View style={styles.container}>
                {console.log(this.getIsNeedGuide())}
                <Text>{this.getIsNeedGuide()}</Text>
                {this.setHasGuide()}
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

AppRegistry.registerComponent('Gank', () => HomePage);