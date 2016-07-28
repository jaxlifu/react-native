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
    Text,
    Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
/**
 static propTypes = {
    renderIcon: PropTypes.func,
    renderSelectedIcon: PropTypes.func,
    badgeText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    renderBadge: PropTypes.func,
    title: PropTypes.string,
    titleStyle: Text.propTypes.style,
    selectedTitleStyle: Text.propTypes.style,
    tabStyle: View.propTypes.style,
    selected: PropTypes.bool,
    onPress: PropTypes.func,
    allowFontScaling: PropTypes.bool,
  };
 * */
class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedTab: 'home', //默认选中home页面
        };
    }


    render() {

        var homeView = (
            <View style={styles.container}>
                <Text style={styles.welcome}>这个是首页内容</Text>
            </View>
        );

        var mineView = (
            <View style={styles.container}>
                <Text style={styles.welcome}>这个是我的页面</Text>
            </View>
        );
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}// === 判断值和类型
                    title={'home'}
                    renderIcon={()=><Image resizeMode={'contain'} style={styles.img}
                                           source={require('../images/ic_tab_home_normal.png')}/>}
                    renderSelectedIcon={()=><Image resizeMode={'contain'} style={styles.img}
                                                   source={require('../images/ic_tab_home_selected.png')}/>}
                    onPress={()=> this.setState({selectedTab: 'home'})}>
                    {homeView}
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'mine'}// === 判断值和类型
                    title={'mine'}
                    renderIcon={()=><Image resizeMode={'contain'} style={styles.img}
                                           source={require('../images/ic_tab_mine_normal.png')}/>}
                    renderSelectedIcon={()=><Image resizeMode={'contain'} style={styles.img}
                                                   source={require('../images/ic_tab_mine_selected.png')}/>}
                    onPress={()=> this.setState({selectedTab: 'mine'})}>
                    {mineView}
                </TabNavigator.Item>
            </TabNavigator>
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
    img: {
        width: 26,
        height: 26
    },
});


export default Main;