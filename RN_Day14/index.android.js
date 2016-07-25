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
    Navigator,
    TouchableOpacity,
    ListView,
    BackAndroid,
    ToastAndroid,
    Platform
} from 'react-native';

class RN_Day14 extends Component {
    render() {
        return (
            <Navigator
                renderScene={
                    (route, navigator)=> {
                        let Component = route.component;
                        return <Component {...route.params} navigator={navigator}/>
                    }
                }
                configureScene={()=>Navigator.SceneConfigs.FadeAndroid}
                initialRoute={{component: List}}/>
        );
    }
}
//列表信息
class List extends Component {

    // 构造
    constructor(props) {
        super(props);

        var array = [];

        for (var i = 0; i < 20; i++) {
            array.push('this is a item for number' + i);
        }

        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2)=>r1 !== r2
        });
        // 初始状态
        this.state = {
            dataSource: ds.cloneWithRows(array),
        };
    }

    itemView = (rowData)=>
        <TouchableOpacity onPress={()=>this.onItemClick(rowData)}>
            <Text>{rowData}</Text>
        </TouchableOpacity>;

    onItemClick(data) {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                component: Detail,
                params: {data: data}
            });
        }
    }


    render() {


        return (
            <ListView dataSource={this.state.dataSource}
                      renderRow={(rowData)=>this.itemView(rowData)}
                      style={styles.flex}/>
        );
    }

}

class Detail extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {data: 'none'};
    }

    componentDidMount() {
        this.setState({data: this.props.data});
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.data}</Text>
            </View>
        );
    }

    onBackAndroid = () => {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
            return true;
        }
        return false;
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
    flex: {
        flex: 1,
    }
});

AppRegistry.registerComponent('RN_Day14', () => RN_Day14);
