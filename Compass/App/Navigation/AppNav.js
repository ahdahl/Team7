import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Metrics, Colors, Images } from '../Themes';

// import { Entypo } from '@expo/vector-icons';

import * as screens from '../Screens';

const HomeStack = createStackNavigator({
  Home: { screen: screens.HomeScreen },
  Mail: { screen: screens.MailScreen },
}, {
  initialRouteName: 'Home',
  headerMode: 'float',
  cardStyle: { backgroundColor: Colors.white },
});

const MailStack = createStackNavigator({
  Mail: { screen: screens.MailScreen },
  Home: { screen: screens.HomeScreen },
}, {
  initialRouteName: 'Mail',
  headerMode: 'float',
  // cardStyle: { backgroundColor: Colors.white },
});


HomeStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarLabel: 'Home',
    // tabBarIcon: ({ tintColor }) => (
    //   <Entypo name="Home"
    //     size={Metrics.icons.medium}
    //     color={tintColor} />
    // ),
  };
};

MailStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarLabel: 'Mail',
    // tabBarIcon: ({ tintColor }) => (
    //   <Entypo name="mail"
    //     size={Metrics.icons.medium}
    //     color={tintColor} />
    // ),
  };
};



// Manifest of possible screens
const TabNav = createBottomTabNavigator({
  HomeScreen: { screen: HomeStack },
  MailScreen: { screen: MailStack },
},
{
  initialRouteName: 'HomeScreen',
  tabBarOptions: {
    activeTintColor: Colors.white,
    inactiveTintColor: Colors.gray,
    showLabel: true,
    style: {
      backgroundColor: Colors.salmon,
    }
  },
});


const AppContainer = createAppContainer(TabNav);

export default AppContainer