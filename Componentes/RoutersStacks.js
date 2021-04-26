import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, Dimensions, Alert, Platform, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import Login from './Login';
import NewAccountPage from './NewAccountPage';
import HomePage from './HomePage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

function firstScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="HomePage">
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#1bdff5', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

export const Menu = ({ navigation }) => {
  return (
    <>
      {/* <NavigationContainer> */}
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#1bdff5',
          itemStyle: { marginVertical: 5 },
        }}>
        <Drawer.Screen
          name="user"
          options={{
            drawerLabel: 'user',
            drawerIcon: config => <Icon
              size={23}
              name={Platform.OS === 'android' ? 'md-profile' : 'ios-profile'}></Icon>
          }}
          component={firstScreenStack}
        />
        <Drawer.Screen
          name="Home"
          options={{
            drawerLabel: 'Home',
            drawerIcon: config => <Icon
              size={23}
              name={Platform.OS === 'android' ? 'md-home' : 'ios-home'}></Icon>
          }}
          component={firstScreenStack}
        />
        <Drawer.Screen
          name="Settings"
          options={{
            drawerLabel: 'Settings',
            drawerIcon: config => <Icon
              size={23}
              name={Platform.OS === 'android' ? 'md-settings' : 'ios-Settings'}></Icon>
          }}
          component={firstScreenStack}
        />
      </Drawer.Navigator>
      {/* </NavigationContainer> */}
    </>);
};

const RootStackPage = () => {
  const RootStack = createStackNavigator();
  return (
    <RootStack.Navigator headerMode='none'>
      <RootStack.Screen name="Login" component={Login} />
      <RootStack.Screen name="NewAccount" component={NewAccountPage} />
      <RootStack.Screen name="Menu" component={Menu} />
      <RootStack.Screen name="HomePage" component={HomePage} />

    </RootStack.Navigator>
  );
}

export default RootStackPage;