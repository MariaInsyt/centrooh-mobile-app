import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigation } = this.props;

    return (
      <SafeAreaView
        style={{
          backgroundColor: "#041123",
        }}
      >
        <StatusBar style="auto" />
        <ScrollView style={[styles.wholePage]}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => navigation.navigate("Welcome")}
            >
              <Ionicons name="md-arrow-back" size={32} color="#041123" />
            </TouchableOpacity>
            <Image
              style={styles.image}
              source={require("../assets/image/logo.png")}
            />
          </View>

          <Text style={styles.registerText}> Register </Text>
          <View style={styles.container}>
            <Text style={styles.formLabel}> First Name:</Text>
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Your First Name"
                placeholderTextColor="#D9D9D9"
              />
            </View>
            <Text style={styles.formLabel}> Last Name:</Text>
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Your Last Name"
                placeholderTextColor="#D9D9D9"
              />
            </View>
            <Text style={styles.formLabel}> Username:</Text>
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Your Username"
                placeholderTextColor="#D9D9D9"
              />
            </View>
            <Text style={styles.formLabel}> Password:</Text>
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Your Password"
                placeholderTextColor="#D9D9D9"
                secureTextEntry={true}
              />
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={styles.loginBtn}
            >
              <Text style={{ fontWeight: "bold" }}>SIGN UP</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: "row" }}>
              <Text style={styles.account_button}>
                Already have an account?{" "}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.forgot_button}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  wholePage: {
    height: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  image: {
    width: 90,
    height: 90,
    marginLeft: 220,
  },
  inputView: {
    backgroundColor: "#97AACE",
    borderRadius: 5,
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
    color: "white",
    textDecorationLine: "underline",
    textDecorationColor: "red",
  },
  account_button: {
    height: 30,
    color: "white",
  },
  formLabel: {
    color: "white",
    justifyContent: "flex-start",
  },
  loginBtn: {
    width: "80%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#B0F5ED",
    marginBottom: 20,
  },
  LabelView: {
    alignItems: "flex-start",
  },
  backBtn: {
    backgroundColor: "#B0F5ED",
    height: 45,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
  },
  registerText: {
    marginTop: 20,
    color: "white",
    fontSize: 25,
    alignSelf: "center",
    fontWeight: "bold",
  },
});
