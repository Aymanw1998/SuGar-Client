import { StatusBar } from 'expo-status-bar';
import React, {useState } from 'react';
import {  
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Dimensions,
  Alert,
  Platform,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import Users from '../example/users';


const LoginPage = ({navigation}) =>{
    const [username, setUsername] = useState('');
    const [errorUser, setErrorUser] = useState(true);
    const [password, setPassword] = useState('');
    const [errorPass, setErrorPass] = useState(true);
    const [showPass, SetShowPass] = useState(true);

    return (
    <View style={styles.body}>
        <View style={styles.container}>

            <Image style={styles.image} source = {require("../assets/SuGar.png")}/>
        </View>
        <Animatable.View 
            style={styles.footer}
            animation="fadeInUpBig"
        >
            <Text style={styles.Title}>Sign In</Text>
            {/* ID Numer: */}
            <Text style={styles.meta_Title}>ID Number</Text>
            <View style={styles.meta_Title}>
                <FontAwesome
                    name = "user-o"
                    color = "#05375a"
                    size={20}
                />
                <TextInput
                    placeholder = "Your ID"
                    style={styles.TextInput}
                    autoCapitalize="none"
                    onChangeText={(username)=>setUsername(username)}
                />
                {username.Text? 
                <Animatable.View animation="bounceIn">
                <Feather
                    name="check-circle"
                    color="green"
                    size={2}
                />
                </Animatable.View>
                    : null}
            </View>
                {
                errorUser? null :
                    <Animatable.View animation="fadeInLeft" duration = {500}>
                    <Text style={{color:'#F44336'}}>Username must be 9 number</Text>
                    </Animatable.View>
                }
            

            {/* Password: */}
            <Text style={[styles.meta_Title, {marginTop: 30}]}>Password</Text>
            <View style={styles.meta_Title}>
                <FontAwesome
                    name = "lock"
                    color = "#05375a"
                    size={20}
                />
                <TextInput
                    placeholder = "Your Password"
                    style={styles.TextInput}
                     autoCapitalize="none"
                     secureTextEntry ={showPass ? true: false}
                     onChangeText={(password)=>setPassword(password)}
                />
                <TouchableOpacity onPress = {()=>{SetShowPass(!showPass)}}>
                {showPass?   
                    <Feather
                        name="eye-off"
                        color="gray"
                        size={20}
                    />:
                    <Feather
                        name="eye"
                        color="gray"
                        size={20}
                    />
                    }
                </TouchableOpacity>
                </View>
                {errorPass? null :
                <Animatable.View animation="fadeInLeft" duration = {500}>
                    <Text style={{color:"#F44336"}}>Password must be 4 number</Text>
                </Animatable.View>
                }
            
             <View style={styles.button}>
                <TouchableOpacity
                    onPress={()=>{
                        
                        const foundUser = Users.filter(item=>{
                            return username == item.id && password == item.password; 
                        });
                        console.log(foundUser.length);
                        if(foundUser.length == 0){
                            Alert.alert('Invalid User!');
                        }
                        else
                        {
                            let userToken;
                            userToken = String(foundUser[0].userToken);
                            navigation.navigate('Menu');
                        }}}
                    style={[styles.signIn,
                        {
                            borderColor: '#40E0D0',
                            borderWidth: 1,
                            backgroundColor:'#009387'
                        }]}
                >
                    <Text style={[styles.textSignIn,{color:"#009387"}]}>SignIn</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{
                            navigation.navigate('NewAccount')
                    }}
                    style={[styles.signIn,
                        {
                            borderColor: '#009387',
                            borderWidth: 1,
                            marginTop: 15,
                        }]}
                >
                    <Text style={[styles.textSignIn,{color:"#009387"}]}>Sign Up</Text>
                </TouchableOpacity>
            </View> 
      </Animatable.View>
    </View>
    ); 
}

export default LoginPage;
const styles = StyleSheet.create({
    body:{
        flex: 1,
        backgroundColor: '#E0FFFF',
    },
    container: {
      backgroundColor: '#E0FFFF',
      alignItems: 'center',
      justifyContent: 'center',
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
      marginTop: 50,  
      marginBottom: 50,
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