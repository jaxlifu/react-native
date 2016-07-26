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
    Text
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

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {selectedItem: 'home'};
    }

    onTabClick = (tabName)=> {
        this.setState({selectedItem: tabName});
    };

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    onPress={this.onTabClick('home')}
                    selected={this.state.selectedItem === 'home'}
                    title={'首页'}>
                    <Text>这个是首页信息</Text>
                </TabNavigator.Item>
                <TabNavigator.Item
                    onPress={this.onTabClick('list')}
                    selected={this.state.selectedItem === 'list'}
                    title={'列表'}>
                    <Text>这个是列表页面</Text>
                </TabNavigator.Item>
                <TabNavigator.Item
                    onPress={this.onTabClick('chat')}
                    selected={this.state.selectedItem === 'chat'}
                    title={'聊天'}>
                    <Text>这个是聊天页面</Text>
                </TabNavigator.Item>
                <TabNavigator.Item
                    onPress={this.onTabClick('mine')}
                    selected={this.state.selectedItem === 'mine'}
                    title={'我的'}>
                    <Text>这个是我的页面</Text>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({});


export default Main;