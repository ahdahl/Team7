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
			<SafeAreaView style = {{padding: 16}}>
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

				<View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
					<View style={{flex: 1}}>
						<Image
							source={Images.TyProfilePic}
							style = {styles.profilePicStyle}
						/>
					</View>
					<View style={{flex: 1}}>
						<Image
						source={Images.DonovanProfilePic}
						style = {styles.profilePicStyle}
						/>
					</View>
					<View style={{flex: 1}}>
						<Image
						source={Images.AndreaProfilePic}
						style = {styles.profilePicStyle}
						/>
					</View>
					<View style={{flex: 1}}>
						<Image
							source={Images.KimProfilePic}
							style = {styles.profilePicStyle}
						/>
					</View>

				</View>

				<Text style={styles.notificationsHeaderText}>Notifications</Text>

				{/* <FlatList>
					data = {this.state.data}
					keyExtractor={this._keyExtractor}
					renderItem={this.renderItem}
				</FlatList> */}

				<View style={{flex: 1, flexDirection: 'row'}}>
					<View style={{flex: 1}}>
						<Image
							source={Images.TyProfilePic}
							style = {styles.profilePicStyle}
						/>
					</View>

					<View style={{flex: 1}}>
						<View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
							<Text style={{fontWeight: 'bold'}}>Ty Hunter</Text>
							<Text style={{fontColor: Colors.gray}}>09:24 PM</Text>
						</View>
						<Text style={{fontColor: Colors.gray}}>Updated his timeline</Text>
						<Text>"I juts bought my first property after looking for a place for months with my girlfriend!"</Text>
					</View>
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
	notificationsHeaderText: {
		flex: 1,
		fontSize: 28,
		fontFamily: 'lato-medium',
		color: Colors.blue,
		alignSelf: 'center',
	},
	profilePicStyle: {
		resizeMode: 'contain',
		width: '100%',
		height: '100%',
		borderColor: Colors.gray,
	}
})