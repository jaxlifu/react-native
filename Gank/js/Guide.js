/**
 *Create by Jax on 2016/8/1.
 */

'use strict';

//noinspection JSUnresolvedVariable
import React, {Component} from 'react';

//noinspection JSUnresolvedVariable
import {
    StyleSheet,
    View,
    ViewPagerAndroid,
    Text
} from 'react-native';

class Guide extends Component {


    render() {
        return (
            <ViewPagerAndroid
                style={styles.flex}
                initialPage={0}>
                <View style={[styles.flex, styles.center]}>
                    <Text>this is page 01 </Text>
                </View>
                <View style={[styles.flex, styles.center]}>
                    <Text>this is page 02 </Text>
                </View>
                <View style={[styles.flex, styles.center]}>
                    <Text>this is page 03 </Text>
                </View>
                <View style={[styles.flex, styles.center]}>
                    <Text>this is page 04 </Text>
                </View>
            </ViewPagerAndroid>
        );
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});


export default Guide;