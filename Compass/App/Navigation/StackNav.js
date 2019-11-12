import { createStackNavigator } from 'react-navigation-stack';

import * as screens from '../Screens';

const StackNav = createStackNavigator({
    HomeScreen: { screen: screens.HomeScreen },
    ProfileScreen: { screen: screens.ProfileScreen },
  }, {
    initialRouteName: 'HomeScreen',
    // Created custom header in each screen instead
    headerMode: 'none',
    // Set background color
    cardStyle: { backgroundColor: 'white' },
});

export default StackNav;
