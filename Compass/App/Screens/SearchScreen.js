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

import { SearchBar } from 'react-native-elements'

import { Ionicons, Feather, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { bold } from 'ansi-colors';

export default class SearchScreen extends React.Component {

	state = {
		loading: false,
	}

	static navigationOptions = {
		title: 'Search',
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
					name='ios-settings'
					size={42}
					color={Colors.white}
				/>
			</SafeAreaView>
		),
	};	

	updateSearch = search => {
		this.setState({ search });
	};

	render() {
		const { search } = this.state;
		return (
			<SafeAreaView style={styles.container}>
				<SearchBar
					placeholder='Type here...'
					onChangeText={this.updateSearch}
					value={search}
					lightTheme
				/>

				<View style={styles.buttonRowContainer}>
					<View style={styles.iconButton}>
						<AntDesign
							name='staro'
							size={50}
							color={Colors.blue}
						/>
						<Text style={{color: Colors.blue}}>Search by Skill</Text>
					</View>
					<View style={styles.iconButton}>
						<MaterialIcons
							name='person-outline'
							size={50}
							color={Colors.blue}
						/>
						<Text style={{color: Colors.blue}}>Search by Name</Text>
					</View>
					<View style={styles.iconButton}>
						<Feather
							name='briefcase'
							size={50}
							color={Colors.blue}
						/>
						<Text style={{color: Colors.blue}}>Search by Job</Text>
					</View>
				</View>

				<Text style={styles.featuredTimelinesText}>Featured Timelines</Text>

				<FlatList style={{horizontal: true}}>

				</FlatList>

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
	iconButton: {
		padding: 10,
		borderWidth: 2,
		borderColor: Colors.gray,
		borderRadius: 20,
		alignItems: 'center',
	},
	buttonRowContainer: {
		padding: 16,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	featuredTimelinesText: {
		color: Colors.blue,
		fontSize: 18,
		fontWeight: 'bold',
	}
})