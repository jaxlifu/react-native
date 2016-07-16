import React, {
	Component
} from 'react';

import {
	PixelRatio,
	StyleSheet,
	Text,
	View
} from 'react-native';

class Header extends Component {
	render() {
		return (
			<View style = {styles.flex}>
				<Text style= {styles.font}>
					<Text style={styles.font_1}>网易</Text>
					<Text style={styles.font_2}>新闻</Text>
					<Text>有态度</Text>
				</Text>
			</View>

		);
	}
}

const styles = StyleSheet.create({
	flex: {
		marginTop: 25,
		height: 50,
		borderBottomWidth: 3 / PixelRatio.get(),
		borderColor: '#EF2D36',
		alignItems: 'center',
	},
	font: {
		fontSize: 25,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	font_1: {
		color: "#cd1d1c"
	},
	font_2: {
		color: "#FFFFFF",
		backgroundColor: '#cd1d1c'
	}
});

module.exports = Header;