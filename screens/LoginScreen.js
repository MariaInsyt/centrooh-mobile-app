import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";

export default class LoginScreen extends Component {
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
        <StatusBar
          animated={true}
          backgroundColor="#041123"
          barStyle="light-content"
        />
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
          <Text style={styles.loginText}> LOG IN </Text>
          <View style={styles.container}>
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Your Username"
                placeholderTextColor="#D9D9D9"
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Your Password"
                placeholderTextColor="#D9D9D9"
                secureTextEntry={true}
              />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={styles.loginBtn}
            >
              <Text style={{ fontWeight: "bold" }}>LOGIN</Text>
            </TouchableOpacity>
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
    justifyContent: "center",
    marginTop: 180,
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
  },
  loginBtn: {
    width: "80%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#B0F5ED",
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
  loginText: {
    marginTop: 40,
    color: "white",
    fontSize: 30,
    alignSelf: "center",
    fontWeight: "bold",
  },
});
