import React from 'react';
import {
	StyleSheet,
	View,
	SafeAreaView,
	Text,
	TouchableOpacity,
	FlatList
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Metrics, Colors } from '../Themes';

export default class MailScreen extends React.Component {
	

	renderInfo() {
		const { info } = this.props.navigation.state.params;

	}


	render() {
		const { info } = this.props.navigation.state.params;

		return (
			<SafeAreaView style={styles.container}>

				{/* Back Navigation */}
				<TouchableOpacity
					style={styles.header}
					onPress={() => this.props.navigation.goBack()}>
						<Ionicons
							name='ios-arrow-back'
							color='#fff'
							size={30}
						/>
				</TouchableOpacity>

				<Text style={styles.title}>{info.name}</Text>

				{this.renderInfo()}
			</SafeAreaView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: Metrics.padding,
	},
	title: {
		textTransform: 'uppercase',
		fontWeight: 'bold',
		fontStyle: 'italic',
		fontSize: 35,
		fontFamily: Metrics.defaultFont,
		color: Colors.yellow,
	},
})