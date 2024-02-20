import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  Image,
  Button,
  Alert,
  Modal,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";

const Profile = (props) => {
  const { navigation } = props;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
      }}
    >
      <StatusBar
        animated={true}
        backgroundColor="#041123"
        barStyle="light-content"
      />
      <ScrollView style={[styles.wholePage]}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Settings</Text>
              <Pressable
                onPress={() => navigation.navigate("Notifications")}
                style={styles.bar}
              >
                <Text>Notifications</Text>
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate("Faqs")}
                style={styles.bar}
              >
                <Text>FAQs</Text>
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate("Terms")}
                style={styles.bar}
              >
                <Text>Terms and Conditions</Text>
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate("Welcome")}
                style={styles.logOutBar}
              >
                <Text>Log Out</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Ionicons name="close" size={28} color="#A9A3A3" />
              </Pressable>
            </View>
          </View>
        </Modal>
        <View style={{ flexDirection: "row", backgroundColor: "#041123" }}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.navigate("Home")}
          >
            <Ionicons name="ios-home" size={32} color="#041123" />
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 30,
              fontWeight: "bold",
              fontSize: 20,
              marginLeft: 20,
              color: "white",
            }}
          >
            {" "}
            Tony Stark{" "}
          </Text>
          <Pressable
            style={styles.userBtn}
            onPress={() => setModalVisible(true)}
          >
            <Ionicons name="ios-settings" size={32} color="#041123" />
          </Pressable>
          {/* <Image style={styles.image} source={require("../image/blacklogo.png")} />  */}
        </View>
        <View style={[styles.userIcon]}>
          <Ionicons name="person-circle" size={180} color="#D9D9D9" />
        </View>
        <View style={[styles.boxes, styles.shadowProp]}>
          <View style={{ width: 250, marginLeft: 30 }}>
            <Text>Phone Number: 077839489</Text>
            <Text> </Text>
            <Text>District : Jinja</Text>
            <Text> </Text>
            <Text>Number of Petrol Stations : 8</Text>
            <Text> </Text>
            <Text>Number of Weekly Billboards : 5</Text>
            <Text> </Text>
            <Text>Number of Total Billboards : 26</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  wholePage: {
    height: "100%",
  },
  backBtn: {
    height: 45,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 10,
    marginRight: 63,
    marginLeft: 20,
    marginBottom: 10,
    backgroundColor: "white",
  },
  userBtn: {
    height: 45,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 10,
    marginLeft: 75,
    backgroundColor: "white",
  },
  userIcon: {
    borderRadius: 125,
    marginTop: 30,
    height: 200,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  boxes: {
    backgroundColor: "#B0F5ED",
    width: "80%",
    height: 190,
    alignSelf: "center",
    flexDirection: "row",
    marginTop: 30,
    flexDirection: "row",
  },
  shadowProp: {
    shadowColor: "#52006A",
    elevation: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 35,
    paddingBottom: 35,
    width: 350,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 5,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "white",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  bar: {
    backgroundColor: "#B0F5ED",
    width: 320,
    marginBottom: 5,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  logOutBar: {
    backgroundColor: "#FC5757",
    width: 320,
    marginBottom: 5,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },
});
