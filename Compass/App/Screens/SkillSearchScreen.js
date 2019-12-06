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

import { Ionicons } from '@expo/vector-icons';
import { bold, underline } from 'ansi-colors';


const DATA = [
	{
	  id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
	  name: 'First Item',
	},
	{
	  id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
	  name: 'Second Item',
	},
	{
	  id: '58694a0f-3da1-471f-bd96-145571e29d72',
	  name: 'Third Item',
	},
  ];

  function Item({ name }) {
	return (
	  <View style={styles.item}>
		<Text style={styles.name}>{name}</Text>
	  </View>
	);
  }


export default class SkillSearchScreen extends React.Component {

	state = {
		loading: false,
	}

	static navigationOptions = {
		title: 'Skill Search',
		headerStyle: {
			backgroundColor: Colors.salmon,
		},
		headerTitleStyle: {
			fontFamily: 'lato-regular',
			fontWeight: '300'	//loads default font without this
        },
		headerTintColor: Colors.white,
		headerRight: (
			<SafeAreaView style={{ padding: 16, marginRight: 16 }}>
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
					placeholder='Search skills...'
					onChangeText={this.updateSearch}
					value={search}
					containerStyle={{backgroundColor: Colors.white, borderWidth: 1, borderRadius: 16, borderColor: Colors.gray}}				
					inputContainerStyle={{backgroundColor: Colors.white}}
				/>

<View style={styles.buttonRowContainer}>
					<TouchableOpacity style={styles.iconButton}>

						<Text style={{color: Colors.blue}}>Juggling</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.iconButton}>

						<Text style={{color: Colors.blue}}>Programming</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.iconButton}>

						<Text style={{color: Colors.blue}}>Acting</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.buttonRowContainer}>
					<TouchableOpacity style={styles.iconButton}>

						<Text style={{color: Colors.blue}}>Sports</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.iconButton}>

						<Text style={{color: Colors.blue}}>Manual Labor</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.iconButton}>

						<Text style={{color: Colors.blue}}>Writing</Text>
					</TouchableOpacity>
				</View>

				<Text style={styles.featuredTimelinesText}>Featured Timeline</Text>

				{/* Uncomment the 2 TouchablOpacity lines once you add Andrea's timeline screen */}
				{/* <TouchableOpacity onPress={() => navigation.navigate("AndreaScreen")}> */}
					<Image
						source={Images.FeaturedAndrea}
						style = {{width: '60%', height: '60%', alignSelf: 'center'}}
					/>
                {/* </TouchableOpacity> */}



				{/* <View style={styles.item}>
					<View style={{flexDirection:'row'}}>
						<Image
							source={Images.Donovan}
							style = {{width: '30%', height: '30%'}}
						/>
						<View style={{alignItems: 'center'}}>
							<Text style={styles.name}>Donovan Tokuyama</Text>
							<View style={styles.connectButton}>
								<Text style={{color: Colors.white}}>Connect</Text>
							</View>
						</View>
					</View>
					<Text
						style={{color: Colors.white, fontSize: 24, textDecorationLine: 'underline'}}>
						Compass cofounder
					</Text>
					<Text
						style={{color: Colors.white, fontSize: 10}}>
						Dropped out of college to perfect a social media plaform with the goal of helping highschool students pursuing non-traditional paths, allowing...
					</Text>
	  			</View>


				<FlatList>
					data={DATA}
					renderItem={({ item }) => <Item name={item.name} />}
					keyExtractor={item => item.id}
				</FlatList> */}

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
	},
	item: {
		backgroundColor: Colors.gray,
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
	  },
	name: {
		color: Colors.white,
		fontSize: 28,
		fontWeight: 'bold',
	},
	connectButton: {
		backgroundColor: Colors.salmon,
		borderRadius: 8,
		paddingHorizontal: 36,
	}
})