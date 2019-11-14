import React from 'react';
import {
	StyleSheet,
	SafeAreaView,
	View,
	Text,
	Image,
	FlatList,
	TouchableOpacity
} from 'react-native';

import { Metrics, Colors, Images } from '../Themes';

export default class HomeScreen extends React.Component {

	state = {
		loading: false,
	}

	static navigationOptions = {
		title: 'Home',
		headerStyle: {
			backgroundColor: Colors.salmon,
		  },
		  headerTintColor: Colors.white,	  
	  };	


	render() {

		return (
			<SafeAreaView style={styles.container}>
			</SafeAreaView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 10,
	},
	homeHeader: {
		width: Metrics.maxComponentWidth,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: Colors.salmon,
		marginBottom: Metrics.marginBottom
	},
	CompassLogo: {
		width: 122,
		height: 66,
		marginRight: Metrics.marginHorizontal
	},
	title: {
		height: 66,
		textTransform: 'uppercase',
		fontWeight: 'bold',
		fontStyle: 'italic',
		fontFamily: Metrics.defaultFont,
		fontSize: 30,
		lineHeight: 32,
		color: Colors.white
	},
	loadingText: {
		fontSize: 40,
		color: '#fff'
	},
	h1: {
		fontWeight: 'bold',
		color: '#fff',
	}
})