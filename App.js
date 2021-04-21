import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import {  
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  Menu
} from 'react-native';

// import {LoginPage, MainPage} from './pages';
import { NavigationContainer } from '@react-navigation/native';
import SideMenu from 'react-native-side-menu-updated'

export const LoginPage = ({navigation}) =>{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Image  style={styles.image} source = {require("./assets/SuGar.png")}/>
    
      <StatusBar style="auto"/>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username: 209138155"
          placeholderTextColor="##0000FF"
          onChangeText={(username) => setUsername(username)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password: 1234"
          placeholderTextColor="#0000FF"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Button
          onPress = {()=>{
            if(username === "209138155" && password === "1998"){
              console.log("Hi");
              Alert.alert("Hi");
              //navigation.navigate('Main');
            }
            else{
              console.log("Error");
              Alert.alert("Error");
            }
          }} 
          title="Login"
        />
      </TouchableOpacity>
    </View>
  ); 
}

// export const MainPage = ({navigation}) =>{

//   const menu = <Menu navigator = {navigator}/>;
//   return (
//     <View style={styles.container}>
//       <SideMenu menu={menu}>
//         <ContentView/>
//       </SideMenu>
 
//       <Image  style={styles.image} source = {require("./assets/SuGar.png")}/>
//     </View>
//   ); 
// }

// class ContentView extends Component{
//   render(){
//     return(
//       <p>Hi</p>
//     );
//   }
// }

export default class App extends Component {
  render(){
    return(
      <>
      <LoginPage/>  
      </>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:35,
    fontWeight:"bold",
  },
  image:{
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#87CEFA",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn:
 {
   width:"80%",
   borderRadius:25,
   height:50,
   alignItems:"center",
   justifyContent:"center",
   marginTop:40,
   backgroundColor:"#87CEEB",
 }
});
