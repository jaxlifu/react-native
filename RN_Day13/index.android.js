/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//noinspection JSUnresolvedVariable
import React, {Component} from 'react';
//noinspection JSUnresolvedVariable
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Alert,
    TouchableOpacity,
    Animated,
    BackAndroid,
    Platform,
    ToastAndroid,
    Image,
    ScrollView
} from 'react-native';

class RN_Day13 extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            lastBackPressed: 0.0,
            tab: 'message'
        };
    }

    // select:
    //
    // function (tabName) {
    //     this.setState({
    //         tab: tabName
    //     });
    // }

    select(tabName) {
        this.setState({tab: tabName});
    }

    showAlert() {
        Alert.alert('', '确认退出当前界面?',
            [
                {
                    text: 'OK',
                    onPress: ()=> {
                        console.log('确定');
                        BackAndroid.exitApp();
                    }
                },
                {
                    text: 'Cancel',
                    onPress: ()=> {
                        console.log('取消');
                    }
                }
            ]);
    }

    onBackAndroid = () => {
        if (this.state.lastBackPressed && this.state.lastBackPressed + 2000 >= Date.now()) {
            //最近2秒内按过back键，可以退出应用。
            return false;
        }
        this.state.lastBackPressed = Date.now();
        ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
        return true;
    };

    componentWillMount() {
        if (Platform.OS == 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    componentWillUnmount() {
        if (Platform.OS == 'android') {
            BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    render() {
        return (
            <View style={styles.container} refreshing="view">
                <TouchableOpacity onPress={()=>this.showAlert()}>
                    <Text>点击弹出窗口</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

class FadeInView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0), // init opacity 0
        };
    }

    componentDidMount() {
        Animated.timing(          // Uses easing functions
            this.state.fadeAnim,    // The value to drive
            {toValue: 1},           // Configuration
        ).start();                // Don't forget start!
    }

    // Binds
    render() {
        return (
            <Animated.View          // Special animatable View
                style={{opacity: this.state.fadeAnim}}>
                {this.props.children}
            </Animated.View>
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
    }, flex: {
        flex: 1,
    },
    message: {
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 5,
    },
    message_title: {
        fontSize: 18,
        color: '#18B5FF',
        marginBottom: 5,
    },
    list: {
        height: 30,
        fontSize: 15,
        marginLeft: 10,
        marginTop: 10,
    },
    img: {
        width: 26,
        height: 26
    },
});

AppRegistry.registerComponent('RN_Day13', () => RN_Day13);
