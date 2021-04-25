import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

const Role_data_SignUp = ({ navigation, route }) => {
  const { email, pass, id, firstname, lastname } = route.params;
  const [ID, setID] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  return (
    <View style={styles.body}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/SuGar.png")}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            style={styles.backicon}
            source={require("../../assets/back-icon.png")}
          />
        </TouchableOpacity>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.Title}>Sing Up</Text>
        {/* <Text>
          {email} {pass} {id} {firstname} {lastname}
        </Text> */}

        <View style={styles.button}>
          <TouchableOpacity
            style={[
              styles.signIn,
              {
                borderColor: "#40E0D0",
                borderWidth: 1,
                backgroundColor: "#009387",
              },
            ]}
          >
            <Text style={[styles.textSignIn, { color: "#009387" }]}>Next</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default Role_data_SignUp;
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#E0FFFF",
  },
  container: {
    backgroundColor: "#E0FFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: "#fff",
    borderTopRightRadius: 80,
    borderTopLeftRadius: 80,
  },
  Title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  meta_Title: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  image: {
    marginTop: 50,
    marginBottom: 5,
    backgroundColor: "#E0FFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  backicon: {
    width: 40,
    height: 40,
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
    //   marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSignIn: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
