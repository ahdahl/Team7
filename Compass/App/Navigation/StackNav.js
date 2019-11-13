import { createStackNavigator } from 'react-navigation-stack';
import { Metrics, Colors, Images } from '../Themes';

import * as screens from '../Screens';

const StackNav = createStackNavigator({
    HomeScreen: { screen: screens.HomeScreen },
    ProfileScreen: { screen: screens.ProfileScreen },
  }, {
    initialRouteName: 'HomeScreen',
    // Created custom header in each screen instead
    headerMode: 'float',
    // Set background color
    cardStyle: { backgroundColor: 'white' },
});

export default StackNav;
