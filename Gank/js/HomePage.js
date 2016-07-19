/**
首页信息
*/

'use strict';
import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Image,
	Animated,
	TouchableHiglight,
	Text,
} from 'react-native';

import RequestUtils from './utils/RequestUtils';

class HomePage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isError: false,
			isLoading: true,
			isPlaying: true,
			fadeAnimLogo: new Animated.Value(0), //设置动画初始值,生成value对象
			fadeAnimText0: new Animated.Value(0),
			fadeAnimText1: new Animated.Value(0),
			fadeAnimLayout: new Animated.Value(1),
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style = {styles.text}>这个是首页信息</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({

	container: {
		flex: 1,
		backgroundColor: '#FF0000'
	},
	text: {
		fontSize: 15,
		color: '#090606'
	}
});

module.exports = HomePage;