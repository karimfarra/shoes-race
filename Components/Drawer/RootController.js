import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import {Dimensions} from 'react-native';
import LoginScreen from '../login';
import MainScreen from '../mainpage';

import DrawerMenu from './Drawer';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const LoginNavigator = createStackNavigator(
  {
    LoginScreen,
  },
  {
    initialRouteName: 'LoginScreen',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f7f7f7',
      },
      headerTintColor: 'gray',
      gestureEnabled: false,
      drawerLockMode: 'locked-closed',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      layout: {
        orientation: ['portrait'],
      },
    },
  },
);

const MainNavigator = createStackNavigator(
  {
    MainScreen,
  },
  {
    initialRouteName: 'MainScreen',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f7f7f7',
      },
      headerTintColor: 'gray',
      gestureEnabled: false,
      drawerLockMode: 'locked-closed',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      layout: {
        orientation: ['portrait'],
      },
    },
  },
);

const DrawerNavigator = createDrawerNavigator(
  {
    LoginScreen: LoginNavigator,
    MainScreen: MainNavigator,
  },
  {
    initialRouteName: 'LoginScreen',
    drawerBackgroundColor: 'red',
    contentComponent: DrawerMenu,
    drawerLockMode: 'locked-closed',
    disableGestures: true,
    drawerWidth: screenWidth - 60,
    edgeWidth: 0,
    contentOptions: {
      activeTintColor: 'yellow',
    },
    layout: {
      orientation: ['portrait'],
    },
  },
);

export default (RootController = createAppContainer(DrawerNavigator));
