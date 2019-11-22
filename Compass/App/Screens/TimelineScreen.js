import React from 'react';
import {
	StyleSheet,
	SafeAreaView,
	View,
	Text,
	Image,
	FlatList,
	TouchableOpacity,
	ScrollView
} from 'react-native';

import { Metrics, Colors, Images } from '../Themes';

import { Ionicons, MaterialCommunityIcons, AntDesign, Foundation, MaterialIcons } from '@expo/vector-icons'



export default class HomeScreen extends React.Component {

	state = {
		loading: false,
	}

	static navigationOptions = {
		title: 'Kim Ngo', // hard-coded to Kim 
		headerStyle: {
			backgroundColor: Colors.salmon,
		},
		headerTitleStyle: {
			fontFamily: 'lato-regular',
			fontWeight: '300'	//loads default font without this
        },
		headerTintColor: Colors.white,
		headerRight: (
			<SafeAreaView style = {{padding: 16}}>
				<Ionicons
					name="ios-settings"
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

			<ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
                    	<ProfileHeader />
			<ProfileDetailsHeader />
			<MajorEventsContainer />
			<ShortcutsContainer />
			<TimelineContainer />
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 10,
	}
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
	appendEventButton: { // absolute position above the footer navigation bar
                padding: 10,
                borderWidth: 2,
                borderColor: Colors.gray,
                borderRadius: 20,
                alignItems: 'right',
		position: 'absolute'
        },

	h1: {
		fontWeight: 'bold',
		color: '#fff',
	}
})

