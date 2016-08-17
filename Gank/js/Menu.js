/**
 *Create by Jax on 2016/8/3.
 */

'use strict';

//noinspection JSUnresolvedVariable
import React, {Component, PropTypes} from 'react';

//noinspection JSUnresolvedVariable
import {StyleSheet, View, ListView, Text} from 'react-native';
//all | Android | iOS | 休息视频 | 福利 | 拓展资源 | 前端 | 瞎推荐 | App
var arr = ['全部', '福利', 'Android', 'IOS', '休息视频', '前端', '瞎推荐', 'APP', '拓展资源'];
class Menu extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态

        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(arr),
        };
    }

    render() {
        return (
            <ListView
                renderHeader={()=> <Text>这个是头部信息</Text>}
                renderFooter={()=> <Text>这个是尾部信息</Text>}
                style={styles.flex}
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <ListItem item={rowData}/>}/>
        );
    }
}


class ListItem extends Component {
    static propTypes = {
        item: PropTypes.string,
    };

    render() {
        return (
            <View style={styles.item}>
                <Text>{this.props.item}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    flex: {
        flex: 1
    }

});


export default Menu;