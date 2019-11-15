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

import { Ionicons } from '@expo/vector-icons';

export default class SearchScreen extends React.Component {

	state = {
		loading: false,
	}

	static navigationOptions = {
		title: 'Search',
		headerStyle: {
			backgroundColor: Colors.salmon,
		  },
		  headerTintColor: Colors.white,
		headerRight: (
			<SafeAreaView style = {{padding: 16}}>
				<Ionicons
					name="md-settings"
					size={42}
					color={Colors.white}
				/>
			</SafeAreaView>
			),
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