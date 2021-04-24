import React, {Component } from 'react';
import {  
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
  Alert
} from 'react-native';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";


// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import LoginPage from './LoginPage';
const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

const HomePage  = ({navigation}) => {
    
  return (
        <View style={styles.body}>
            <ImageBackground source={require("../assets/SuGar.png")} style={styles.image}/>
            <ImageBackground style={styles.menuicon} source={require("../assets/menu-icon.png")}/>

            {/* <View> 
              <Text>Bezier Line Chart</Text>
              <LineChart
                data={{
                  labels: ["12AM", "2AM", "4AM", "6AM","8AM", "10AM", 
                          "12PM", "2PM","4PM", "6PM","8PM", "10PM"],
                  datasets: [
                    {
                      data: [
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100
                      ]
                    }
                  ]
                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                  backgroundColor: "#e26a00",
                  backgroundGradientFrom: "#fb8c00",
                  backgroundGradientTo: "#ffa726",
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16
                  },
                  propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726"
                  }
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16
                }}
              />
            </View> */}
        </View>
        
  ); 
}

export default HomePage;
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