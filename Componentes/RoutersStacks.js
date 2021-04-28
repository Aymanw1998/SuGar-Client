import React from "react";
import { View, Image, TouchableOpacity, Platform } from "react-native";
//import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons";

import Signin from "./SignIn";
import Idntification_data_SignUp from "./SignUp/Idntification_data";
import Private_data_SignUp from "./SignUp/Private_data";
import Role_data_SignUp from "./SignUp/Role_data";
import Menu from "./Menu";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// const NavigationDrawerStructure = (props) => {
//   //Structure for the navigatin Drawer
//   const toggleDrawer = () => {
//     //Props to open/close the drawer
//     props.navigationProps.toggleDrawer();
//   };

//   return (
//     <View style={{ flexDirection: "row" }}>
//       <TouchableOpacity onPress={() => toggleDrawer()}>
//         {/*Donute Button Image */}
//         <Image
//           source={{
//             uri:
//               "https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png",
//           }}
//           style={{ width: 25, height: 25, marginLeft: 5 }}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// };

// function firstScreenStack({ navigation }) {
//   return (
//     <Stack.Navigator initialRouteName="Home">
//       <Stack.Screen
//         name="Home"
//         component={Home}
//         options={{
//           headerLeft: () => (
//             <NavigationDrawerStructure navigationProps={navigation} />
//           ),
//           headerStyle: {
//             backgroundColor: "#1bdff5", //Set Header color
//           },
//           headerTintColor: "#fff", //Set Header text color
//           headerTitleStyle: {
//             fontWeight: "bold", //Set Header text style
//           },
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// export const Menu = ({ navigation }) => {
//   return (
//     <>
//       {/* <NavigationContainer> */}
//       <Drawer.Navigator
//         drawerContentOptions={{
//           activeTintColor: "#1bdff5",
//           itemStyle: { marginVertical: 5 },
//         }}
//       >
//         <Drawer.Screen
//           name="user"
//           options={{
//             drawerLabel: "user",
//             drawerIcon: (config) => (
//               <Icon
//                 size={23}
//                 name={Platform.OS === "android" ? "md-profile" : "ios-profile"}
//               ></Icon>
//             ),
//           }}
//           component={firstScreenStack}
//         />
//         <Drawer.Screen
//           name="Home"
//           options={{
//             drawerLabel: "Home",
//             drawerIcon: (config) => (
//               <Icon
//                 size={23}
//                 name={Platform.OS === "android" ? "md-home" : "ios-home"}
//               ></Icon>
//             ),
//           }}
//           component={firstScreenStack}
//         />
//         <Drawer.Screen
//           name="Settings"
//           options={{
//             drawerLabel: "Settings",
//             drawerIcon: (config) => (
//               <Icon
//                 size={23}
//                 name={
//                   Platform.OS === "android" ? "md-settings" : "ios-Settings"
//                 }
//               ></Icon>
//             ),
//           }}
//           component={firstScreenStack}
//         />
//       </Drawer.Navigator>
//       {/* </NavigationContainer> */}
//     </>
//   );
// };

const RootStackPage = () => {
  const RootStack = createStackNavigator();
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="SignIn" component={Signin} />
      <RootStack.Screen
        name="Idntification_data_SignUp"
        component={Idntification_data_SignUp}
      />
      <RootStack.Screen
        name="Private_data_SignUp"
        component={Private_data_SignUp}
      />
      <RootStack.Screen name="Role_data_SignUp" component={Role_data_SignUp} />
      <RootStack.Screen name="Menu" component={Menu} />
    </RootStack.Navigator>
  );
};

export default RootStackPage;
