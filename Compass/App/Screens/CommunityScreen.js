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

export default class CommunityScreen extends React.Component {

	state = {
		loading: false,
	}

	DATA = [
		{
		  id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
		  title: 'First Item',
		},
		{
		  id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
		  title: 'Second Item',
		},
		{
		  id: '58694a0f-3da1-471f-bd96-145571e29d72',
		  title: 'Third Item',
		},
	];

	static navigationOptions = {
		title: 'Community',
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
					name="ios-settings"
					size={42}
					color={Colors.white}
				/>
			</SafeAreaView>
		),
	};



	_keyExtractor = (item) => item.id;


	renderItem = ({item}) => {
	  return (
		<View>
			<Text>Testing testing</Text>
		</View>
	  );
	}


	render() {

		return (
			<SafeAreaView style={styles.container}>

				<View style = {styles.topHalfContainer}>
					<View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
						<View style={{flex: 1, padding: 5}}>
							<Image
								source={Images.TyProfilePic}
								style = {styles.profilePicStyle}
							/>
						</View>
						<View style={{flex: 1, padding: 5}}>
							<Image
							source={Images.DonovanProfilePic}
							style = {styles.profilePicStyle}
							/>
						</View>
						<View style={{flex: 1, padding: 5}}>
							<Image
							source={Images.AndreaProfilePic}
							style = {styles.profilePicStyle}
							/>
						</View>
						<View style={{flex: 1, padding: 5}}>
							<Image
								source={Images.KimProfilePic}
								style = {styles.profilePicStyle}
							/>
						</View>

					</View>

					<View style = {{flex: 1}}>
						<Text style={styles.notificationsHeaderText}>Notifications</Text>
					</View>
				</View>


				{/* <FlatList>
					data = {this.state.data}
					keyExtractor={this._keyExtractor}
					renderItem={this.renderItem}
				</FlatList> */}

				<View style={styles.notificationsContainer}>
					<View style={{flex: .2, paddingRight: 12}}>
						<View style={{flex: .4}}>

							<Image
								source={Images.TyProfilePic}
								style = {styles.profilePicStyle}
							/>
						</View>
					</View>

					<View style={{flex: 1, justifyContent: 'flex-start'}}>
						<View style={{flex: 0.3, flexDirection: 'row', justifyContent: 'space-between', marginTop: 4}}>
							<Text style={{fontWeight: 'bold'}}>Ty Hunter</Text>
							<Text style={{color: Colors.blue}}>09:24 PM</Text>
						</View>
						<Text style={{color: 'gray', fontFamily: Metrics.defaultFont}}>Updated his timeline</Text>
						<Text style={{color: Colors.blue, fontFamily: Metrics.defaultFont, marginTop: 24, marginRight: 36}}>"I just bought my first property after looking for a place for months with my girlfriend!"</Text>
					</View>
				</View>


				<View style={styles.notificationsContainer}>
					<View style={{flex: 0.2, paddingRight: 12}}>
						<View style={{flex: 1, alignSelf: 'center'}}>
							<Ionicons
								name="md-heart"
								size={46}
								color={'red'}
							/>
						</View>
					</View>


					<View style={{flex: 1, justifyContent: 'flex-start'}}>
						<View style={{flex: 0.3, flexDirection: 'row'}}>
							<Text style={{color: Colors.blue, fontFamily: Metrics.defaultFont, paddingRight: 64}}>
								<Text style={{fontWeight: 'bold'}}>Amber Byrd </Text>
								and
								<Text style={{fontWeight: 'bold'}}> 14 others </Text>
								liked your timeline
							</Text>
							<Text style={{color: Colors.blue, paddingLeft:255, position: 'absolute'}}>03:22 PM</Text> # hard coded fix for position of time
						</View>
					</View>
				</View>


				<View style={styles.notificationsContainer}>
					<View style={{flex: .2, paddingRight: 12}}>
						<View style={{flex: .4}}>

							<Image
								source={Images.TyProfilePic}
								style = {styles.profilePicStyle}
							/>
						</View>
					</View>

					<View style={{flex: 1, justifyContent: 'flex-start'}}>
						<View style={{flex: 0.3, flexDirection: 'row', justifyContent: 'space-between', marginTop: 4}}>
							<Text style={{fontWeight: 'bold'}}>Ty Hunter</Text>
							<Text style={{color: Colors.blue}}>09:24 PM</Text>
						</View>
						<Text style={{color: 'gray', fontFamily: Metrics.defaultFont}}>Updated his timeline</Text>
						<Text style={{color: Colors.blue, fontFamily: Metrics.defaultFont, marginTop: 24, marginRight: 36}}>"I just bought my first property after looking for a place for months with my girlfriend!"</Text>
					</View>
				</View>

			</SafeAreaView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	title: {
		height: 66,
		textTransform: 'uppercase',
		fontWeight: 'bold',
		fontFamily: 'italic',
		fontFamily: Metrics.defaultFont,
		fontSize: 30,
		lineHeight: 32,
		color: Colors.white
	},
	topHalfContainer: {
		flex: 1,
		padding: 10,
		elevation: 15,
		shadowOffset: { width: 5, height: 5 },
		shadowColor: Colors.black,
		shadowOpacity: 0.1,
		shadowRadius: 16,
		backgroundColor: Colors.white
	},
	notificationsHeaderText: {
		flex: 1,
		fontSize: 28,
		fontFamily: Metrics.defaultFont,
		color: Colors.blue,
		alignSelf: 'center',
		paddingTop: 36,
	},
	notificationsContainer: {
		flex: 1,
		margin: 10,
		flexDirection: 'row',
		borderBottomColor: Colors.gray,
		borderBottomWidth: 1,
	},
	profilePicStyle: {
		resizeMode: 'contain',
		width: '100%',
		height: '100%',
		borderColor: Colors.gray,
	}
})
