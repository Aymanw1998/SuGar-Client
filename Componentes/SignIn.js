import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import axios from "axios";
import Joi from "joi-browser";

import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

const Signin = ({ navigation }) => {
  const [email, setEmail] = useState("shanilevi01011@gmail.com");
  const [password, setPassword] = useState("123");
  const [showPass, SetShowPass] = useState(true);
  const [errors, setError] = React.useState({});

  const joiSchema = {
    email: Joi.string().email().required(),
    pass: Joi.string().required(),
  };

  const loginClick = async (event) => {
    event.preventDefault();

    const our_data = {
      email: email,
      pass: password,
    };
    let errors = {};

    //check valid form inputs
    const valid = Joi.validate(our_data, joiSchema, {
      abortEarly: false,
    });
    if (valid.error) {
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
      return;
    }
    //ok:
    else {
      axios({
        method: "POST",
        url: "https://glucosesugar.herokuapp.com/users/login",
        data: {
          email: email,
          pass: password,
        },
      })
        .then((data) => {
          alert("ok");
          //re-dyrect
          // localStorage.setItem("token", data.data.token);
          console.log(data.data.token); ///wired!!!!
          navigation.navigate("Menu", { token: data.data.token });
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
          return;
        });
    }
  };

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/SuGar.png")} />
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.Title}>Sign In</Text>
        {/* ID Numer: */}
        <Text style={styles.meta_Title}>Email</Text>
        <View style={styles.meta_Title}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Email"
            style={styles.TextInput}
            autoCapitalize="none"
            value="shanilevi01011@gmail.com"
            onChangeText={(val) => setEmail(val)}
          />
        </View>
        <Text style={styles.error}>{errors.email}</Text>

        {/* Password: */}
        <Text style={[styles.meta_Title, { marginTop: 10 }]}>Password</Text>
        <View style={styles.meta_Title}>
          <FontAwesome name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Password"
            style={styles.TextInput}
            autoCapitalize="none"
            value="123"
            secureTextEntry={showPass ? true : false}
            onChangeText={(val) => setPassword(val)}
          />
          <TouchableOpacity
            onPress={() => {
              SetShowPass(!showPass);
            }}
          >
            {showPass ? (
              <Feather name="eye-off" color="gray" size={20} />
            ) : (
              <Feather name="eye" color="gray" size={20} />
            )}
          </TouchableOpacity>
        </View>
        <Text style={styles.error}>{errors.pass}</Text>

        <View style={styles.button}>
          <TouchableOpacity
            onPress={loginClick}
            style={[
              styles.signIn,
              {
                borderColor: "#40E0D0",
                borderWidth: 1,
                backgroundColor: "#009387",
              },
            ]}
          >
            <Text style={[styles.textSignIn, { color: "#009387" }]}>
              SignIn
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Idntification_data_SignUp");
            }}
            style={[
              styles.signIn,
              {
                borderColor: "#009387",
                borderWidth: 1,
                marginTop: 15,
              },
            ]}
          >
            <Text style={[styles.textSignIn, { color: "#009387" }]}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default Signin;

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
    marginBottom: 50,
  },
  usericon: {
    width: 40,
    height: 40,
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
    marginTop: Platform.OS === "ios" ? 0 : -12,
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
  error: {
    color: "#8B0000",
  },
});
