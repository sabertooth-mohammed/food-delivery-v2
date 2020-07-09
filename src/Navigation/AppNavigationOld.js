import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';


import { color } from 'src/config/color';
import Login from 'src/screens/login/login';
import Dashboard from 'src/screens/dashboard/dashboard';
import SelectStudent from "src/screens/selectstudent/selectstudent";
import Homework from 'src/screens/homework/homework';
import Circular from 'src/screens/circular/circular';
import Notification from 'src/screens/notification/notification';
import Payment from 'src/screens/payment/payment';
import Holiday from 'src/screens/holiday/holiday';
import Marks from 'src/screens/marks/marks';

import Monday from 'src/screens/timetable/Monday';
import Gallery from 'src/screens/gallery/gallery';

import {HeaderRight} from 'src/components/Header'
import Leaves from 'src/screens/leaves/leaves';
import Attendance from 'src/screens/attendance/attendance';
import ApplyLeaves from 'src/screens/leaves/applyleaves';

const TimetableTabScreen = createMaterialTopTabNavigator(
  {
    Monday: { screen: Monday },
    Tuesday: { screen: Monday },
    Wednesday: { screen: Monday },
    Thursday: { screen: Monday },
    Friday: { screen: Monday },
    Saturday: { screen: Monday },
  },
  {
    lazy:true,
    swipeEnabled: true,
    animationEnabled: true,
    navigationOptions:{
      title:'TIMETABLE',
      headerRight: <HeaderRight onPress={() => alert('Left ')} />,
    },
    tabBarOptions: {
      scrollEnabled:true,
      style: {
        backgroundColor: color.primary,
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: 'white',
        borderBottomWidth: 2,
      },
    },
  }
);

const LeavesTabScreen = createMaterialTopTabNavigator(
  {
    Leaves: { screen: Leaves },
    Apply:{screen:ApplyLeaves,navigationOptions:{
      title:'Apply Leaves'
    }}
  },
  {
    lazy:true,
    swipeEnabled: true,
    animationEnabled: true,
    navigationOptions:{
      title:'LEAVES',
      headerRight: <HeaderRight onPress={() => alert('Left ')} />,
    },
    tabBarOptions: {
      scrollEnabled:true,
      style: {
        borderColor: 'transparent',
        backgroundColor: color.primary,
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: 'white',
        borderBottomWidth: 2,
      },
    },
  }
);

const AppNavigation = createStackNavigator(
  {
    Home: {screen: Login},
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    defaultNavigationOptions: {
      headerTintColor: 'black',
      headerTitleStyle: {fontWeight: 'bold',color: 'black'},
    },
  },
);


const AuthAppStack = createStackNavigator(
  {
    SelectStudent:{screen:SelectStudent,navigationOptions:{
      header:null
    }},
    Dashboard: {screen: Dashboard},
    Homework:{screen: Homework},
    Circular:{screen:Circular},
    Notification:{screen:Notification},
    Payment:{screen:Payment},
    Holiday:{screen:Holiday},
    Marks:{screen:Marks},
    Timetable:{screen:TimetableTabScreen},
    Gallery:{screen:Gallery},
    Leaves:{screen:LeavesTabScreen},
    Attendance:{screen:Attendance}
  },
  {
    initialRouteName: 'Dashboard',
    defaultNavigationOptions: {
      headerStyle: {
        height:70,
        backgroundColor: color.primary,
        elevation:0,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const AuthDrawerNavigation = createDrawerNavigator(
  {
    Home: {screen: AuthAppStack},
    // Settings: SendSms,
  },
  {
    hideStatusBar: false,
    // contentComponent: SideMenu,
    drawerWidth: 300,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: '#6b52ae',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },
  },
);

// const AuthNavigation = createStackNavigator(
//   {
//     Home: { screen: AuthAppStack },
//     Drawer:{screen:DrawerNavigator},
//   },
//   {
//     headerMode:'none',
//   }
// );
// export default createAppContainer(AppNavigation);

export default createAppContainer(
  createSwitchNavigator(
    {
      App: AppNavigation,
      Auth: AuthDrawerNavigation,
    },
    {
      initialRouteName: 'App',
    },
  ),
);
