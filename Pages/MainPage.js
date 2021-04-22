import React, {Component } from 'react';
import {  
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
  Alert
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from './LoginPage';
import HomePage from './HomePage';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
// const data = {
//     labels: ["January", "February", "March", "April", "May", "June"],
//     datasets: [
//       {
//         data: [20, 45, 28, 80, 99, 43],
//         color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
//         strokeWidth: 2 // optional
//       }
//     ],
//     legend: ["Rainy Days"] // optional
//   };
const Menu = ({navigation}) =>{
    return(
    <Stack.Navigator
        screenOptions={{
            headerTransparent: true,
            headerTitle: null,
            headerLeft:()=>{
                <TouchableOpacity onPress={()=>{navigation.openDrawer()}}
                >
                    <ImageBackground style={styles.menuicon} source={require("../assets/menu-icon.png")}/>
                </TouchableOpacity>
            }
        }}
    >
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="gg" component={ LoginPage } />
    </Stack.Navigator>
);}
const MainPage  = ({navigation}) => {
    return (
        <View style={styles.body}>
                <Drawer.Navigator>
                    <Drawer.Screen name="screen" component={Menu} />
                </Drawer.Navigator>
        </View>
  ); 
}

export default MainPage;
const styles = StyleSheet.create({
    body:{
        flex: 1,
        backgroundColor: '#E0FFFF',
    },
    menuicon: {
      marginTop: "-10%",  
      marginLeft:"10%",
      width: 40,
      height: 40
    },
    footer:{
        flex:1,
        paddingVertical:20,
        paddingHorizontal:30,
        backgroundColor:'#fff',
        borderTopRightRadius:80,
        borderTopLeftRadius: 80
    },
    Title:{
        color:'#fff',
        fontSize: 30,
        fontWeight:'bold'
    },
    meta_Title:{
        flexDirection:'row',
        marginTop:10,
        borderBottomWidth: 1,
        borderBottomColor:'#f2f2f2',
        paddingBottom: 5
    },
    image:{
      marginTop: "10%",
      marginLeft:"60%",
      width: 100,
      height: 45
      
    },
    usericon:{
        width:40,
        height:40,
        marginBottom: 10,
    },
    inputView: {
      backgroundColor: "#87CEFA",
      borderRadius: 20,
      width: "70%",
      height: 40,
      marginBottom: 5,
    },
    
    TextInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a'
    },
  button:{
      alignItems:'center',
      marginTop: 50
  },
    signIn:{
        width: "100%",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSignIn:{
        fontSize: 18,
        fontWeight: 'bold'
    }
  });