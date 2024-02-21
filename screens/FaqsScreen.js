import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  Alert,
  Modal,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import Collapsible from "react-native-collapsible";

const Accordion = ({ title, content }) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <View style={{ marginVertical: 10, marginLeft: 20 }}>
      <TouchableOpacity
        onPress={() => setCollapsed(!collapsed)}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
          backgroundColor: "#eee",
          width: "80%",
          marginLeft: 35,
        }}
      >
        <Text style={{ fontWeight: "bold", color: "black" }}>{title}</Text>
        <Ionicons
          name={collapsed ? "chevron-down" : "chevron-up"}
          size={24}
          color="black"
        />
      </TouchableOpacity>
      <Collapsible collapsed={collapsed}>
        <View
          style={{
            padding: 10,
            backgroundColor: "#f9f9f9",
            width: "80%",
            marginLeft: 35,
          }}
        >
          <Text style={{ color: "green" }}>{content}</Text>
        </View>
      </Collapsible>
    </View>
  );
};

const FaqsScreen = (props) => {
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
                onPress={() => navigation.navigate("Profile")}
                style={styles.bar}
              >
                <Text>Profile</Text>
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate("Notifications")}
                style={styles.bar}
              >
                <Text>Notifications</Text>
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

        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#041123",
            justifyContent: "space-between",
          }}
        >
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
              color: "white",
            }}
          >
            FAQs
          </Text>
          <Pressable
            style={styles.userBtn}
            onPress={() => setModalVisible(true)}
          >
            <Ionicons name="ios-settings" size={32} color="#041123" />
          </Pressable>
          {/* <Image style={styles.image} source={require("../image/blacklogo.png")} />  */}
        </View>

        <View style={styles.container}>
          {/* Example of using Collapsible for FAQ sections */}
          <Accordion
            title="What do you do?"
            content="Media Monitoring and Measurment"
          />
          <Accordion
            title="Where are you Located?"
            content="Plot 4, Kanjokya Street."
          />
          <Accordion title="Does this really work?" content="Yes, it does. You can check out our testimonials from previous clients who have worked with us." />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FaqsScreen;

const styles = StyleSheet.create({
  wholePage: {
    height: "100%",
    paddingBottom: 10,
  },
  backBtn: {
    height: 45,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 10,
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
    backgroundColor: "white",
    marginRight: 20,
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
  container: {
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 6,
    paddingTop: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
