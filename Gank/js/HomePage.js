/**
 首页信息
 */

'use strict';
//noinspection JSUnresolvedVariable
import React, {
    Component
} from 'react';

//noinspection JSUnresolvedVariable
import {
    StyleSheet,
    View,
    Image,
    Animated,
    TouchableHiglight,
    Text,
    DrawerLayoutAndroid
} from 'react-native';


import Menu from './Menu';

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {

        var navigationView = (<Menu />);
        return (
            <DrawerLayoutAndroid
                drawerWidth={250}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}>
                <View style={[styles.flex, styles.center]}>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
                </View>
            </DrawerLayoutAndroid>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    text: {
        fontSize: 15,
        color: '#090606'
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default HomePage;