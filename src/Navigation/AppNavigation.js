import React from 'react';
import {NavigationContainer , createSwitchNavigator} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack ';
import {createDrawerNavigator} from '@react-navigation/drawer';


import MainPage from '../screens/MainPage'
import RestaurantMenu from '../screens/RestaurantMenu'
import Login from '../screens/Login'
import Checkout from '../screens/Checkout'
import CartSummary from '../screens/CartSummary'
import SplashScreen from '../screens/SplashScreen'
import AutoDetect from '../screens/AutoDetect'




const Stack = createStackNavigator();


const AppNavigation = createStackNavigator(
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ 
            headerTintColor: 'black',
            headerTitleStyle: {fontWeight: 'bold',color: 'black'},}}
        >
          <Stack.Screen
            name="Home"
            component={Login}
            options={{ title: 'Login' }}
          />
        </Stack.Navigator>
      
);


const AuthAppStack = createStackNavigator(
    <Stack.Navigator
        initialRouteName="Dashboard"
        screenOptions={{ 
            headerStyle: {
                height:70,
                backgroundColor: color.primary,
                elevation:0,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
        }}
    >
         <Stack.Screen
            name="MainPage"
            component={MainPage}
            options={{ title: 'Main Page', }}
            screenOptions={{ header:null }}
          />
          <Stack.Screen
            name="RestaurantMenu"
            component={RestaurantMenu}
            options={{ title: 'RestaurantMenu', }}
          />
          <Stack.Screen
            name="Checkout"
            component={Checkout}
            options={{ title: 'Checkout', }}
          />
          <Stack.Screen
            name="CartSummary"
            component={CartSummary}
            options={{ title: 'CartSummary', }}
          />
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ title: 'SplashScreen', }}
          />
          <Stack.Screen
            name="AutoDetect"
            component={AutoDetect}
            options={{ title: 'AutoDetect', }}
          />
    </Stack.Navigator>

);

const AuthDrawerNavigation = createDrawerNavigator(
    <Drawer.Navigator
        drawerType={{
            hideStatusBar: false,
            // contentComponent: SideMenu,
            drawerWidth: 300,
            drawerBackgroundColor: 'rgba(255,255,255,.9)',
            overlayColor: '#6b52ae',
            contentOptions: {
            activeTintColor: '#fff',
            activeBackgroundColor: '#6b52ae',
            },
        }}
    >
        <Drawer.Screen name="Home" component={AuthAppStack} />
    </Drawer.Navigator>

  
);

export default NavigationContainer (
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
