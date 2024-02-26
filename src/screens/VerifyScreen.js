import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Alert
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";

const ResendOTP = () => {
    alert("OTP has been resent to your phone number.");
  };

export default class VerifyScreen extends Component {
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
            <Image style={styles.image} source={require("../image/logo.png")} />
          </View>
          <Text style={styles.loginText}> VERIFY </Text>

          <View style={styles.container}>
            <View style={{ justifyContent: "flex-end", marginBottom: "10%" }}>
              <Text style={{ color: "white" }}>
                Enter 4-digit OTP sent to your phone number
              </Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: 'space-around',}}>
              <TextInput
                style={styles.TextInput}
                placeholderTextColor="#D9D9D9"
                maxLength={1}
                keyboardType="numeric"
                textAlign="center"
                textAlignVertical="center"
              />
              <TextInput
                style={styles.TextInput}
                placeholderTextColor="#D9D9D9"
                maxLength={1}
                keyboardType="numeric"
                textAlign="center"
                textAlignVertical="center"
              />
              <TextInput
                style={styles.TextInput}
                placeholderTextColor="#D9D9D9"
                maxLength={1}
                keyboardType="numeric"
                textAlign="center"
                textAlignVertical="center"
              />
              <TextInput
                style={styles.TextInput}
                placeholderTextColor="#D9D9D9"
                maxLength={1}
                keyboardType="numeric"
                textAlign="center"
                textAlignVertical="center"
              />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={styles.loginBtn}
            >
              <Text style={{ fontWeight: "bold" }}>VERIFY</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: "row", marginTop: "3%" }}>
              <TouchableOpacity onPress={ResendOTP}>
              <Text style={styles.account_button}>Resend OTP</Text>
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
    justifyContent: "center",
    marginTop: "25%",
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
    width: 50,
    padding: 10,
    marginLeft: 20,
    backgroundColor: "#97AACE",
    borderRadius: 5,
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
    marginTop: "25%",
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
});
