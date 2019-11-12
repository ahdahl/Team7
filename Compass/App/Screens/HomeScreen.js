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

import { SpaceshipListItem } from '../Components';
import { Metrics, Colors, Images } from '../Themes';

export default class HomeScreen extends React.Component {

	state = {
		loading: false,
	}


	//_keyExtractor = (index) => JSON.stringify(index);


	renderListEmptyComponent = () => {
		return (
			<View style={{ flex: 1, }}>
				<Text style={{ textAlign: 'center', color: 'blue' }}>
					Nothing loaded! :(
				</Text>
			</View>
		)
	}

	render() {

		return (
			<SafeAreaView style={styles.container}>

				<View style={styles.homeHeader}>
					<Image source={Images.CompassLogo} style={styles.CompassLogo} />
					<Text style={styles.title}>Home</Text>
				</View>

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