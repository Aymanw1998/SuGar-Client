import React from "react";
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
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons";

import Signin from "./SignIn";
import Home from "./Home";

import axios from "axios";
import Joi from "joi-browser";
import { useState } from "react/cjs/react.development";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              "https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png",
          }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

function firstScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#1bdff5", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

const Menu = ({ navigation, route }) => {
  const token = route.params;
  const joiSchema = {
    token: Joi.string().required(),
  };
  const [user, setUser] = useState([]);

  React.useEffect(() => {
    getUser();
  }, []);
  const getUser = () => {
    console.log("getUser");
    const our_data = {
      token: token.token,
    };
    let errors = {};

    //check valid form inputs
    const valid = Joi.validate(our_data, joiSchema, {
      abortEarly: false,
    });
    console.log(valid);
    if (valid.error) {
      console.log("error");
      valid.error.details.forEach((err) => {
        console.log(err.message);
        if (err.message === '"email" is not allowed to be empty') {
          errors["email"] = "* Email is required.";
        } else if (err.message === '"email" must be a valid email') {
          errors["email"] = "* Invalid Email";
        }
        if (err.message === '"pass" is not allowed to be empty') {
          errors["pass"] = "* Password is required.";
        }
      });
      setError(errors);
      return null;
    }
    //ok:
    else {
      console.log("ok");
      // const d = axios.get("https://glucosesugar.herokuapp.com/users/user", {
      //   headers: {
      //     "x-auth-token": token.token,
      //   },
      // });
      // console.log(d.data);
      axios({
        method: "GET",
        url: "https://glucosesugar.herokuapp.com/users/user",
        headers: {
          "x-auth-token": token.token,
        },
      })
        .then((data) => {
          console.log("then data");
          console.log(data.data);
          setUser(data.data);
        })
        .catch((error) => {
          console.log(error.response);
          let errors = {};
          if (error.response.data.message === "user not found") {
            errors["email"] = "* Email not found";
          }
          if (error.response.data.message === "Password does not match") {
            errors["pass"] = "* Password incorrect";
          }
          if (error.response.status === 500) {
            alert("Server Error , Try later");
          }
          setError(errors);
          return null;
        });
    }
  };
  console.log("151 line");
  console.log("OUT");
  console.log(user);
  return (
    <>
      {/* <NavigationContainer> */}
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: "#1bdff5",
          itemStyle: { marginVertical: 5 },
        }}
      >
        <Drawer.Screen
          name="user"
          options={{
            drawerLabel: `${user.user}`,
            drawerIcon: (config) => (
              <Image
                source={{
                  uri: `${user.avatar}`,
                }}
                style={{ width: 30, height: 30 }}
              />
            ),
          }}
          component={firstScreenStack}
        />
        <Drawer.Screen
          name="Home"
          options={{
            drawerLabel: "Home",
            drawerIcon: (config) => (
              <Icon
                size={23}
                name={Platform.OS === "android" ? "md-home" : "ios-home"}
              ></Icon>
            ),
          }}
          component={firstScreenStack}
        />
        <Drawer.Screen
          name="Settings"
          options={{
            drawerLabel: "Settings",
            drawerIcon: (config) => (
              <Icon
                size={23}
                name={
                  Platform.OS === "android" ? "md-settings" : "ios-Settings"
                }
              ></Icon>
            ),
          }}
          component={firstScreenStack}
        />
        <Drawer.Screen
          name="Sign out"
          options={{
            drawerLabel: "Sign out",
            drawerIcon: (config) => (
              <Icon
                size={23}
                name={
                  Platform.OS === "android" ? "md-settings" : "ios-Settings"
                }
              ></Icon>
            ),
          }}
          component={firstScreenStack}
        />
      </Drawer.Navigator>

      {/* </NavigationContainer> */}
    </>
  );
};

export default Menu;
