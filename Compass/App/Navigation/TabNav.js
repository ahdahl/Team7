import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Metrics, Colors, Images } from '../Themes';

import * as screens from '../Screens';

const TabNav = createBottomTabNavigator({
  HomeScreen: { screen: screens.HomeScreen },
  ProfileScreen: { screen: screens.ProfileScreen },
}, {
  // Default config for all screens
  initialRouteName: 'HomeScreen',
  tabBarOptions: {
    activeTintColor: Colors.salmon,
    showLabel: true,
  },
});

export default TabNav;