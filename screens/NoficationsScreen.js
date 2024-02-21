import {
  StyleSheet,
  Text,
  View,
  Alert,
  Modal,
  Pressable,
  TextInput,
} from "react-native";
import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";

const NotificationsScreen = (props) => {
  const { navigation } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const DeleteNotification = () => {
    alert("Are you sure you want to delete?");
  };

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
            Notifications
          </Text>
          <Pressable
            style={styles.userBtn}
            onPress={() => setModalVisible(true)}
          >
            <Ionicons name="ios-settings" size={32} color="#041123" />
          </Pressable>
          {/* <Image style={styles.image} source={require("../image/blacklogo.png")} />  */}
        </View>

        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View style={styles.searchBar}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search here..."
            />
          </View>
        </View>

        <View>
          <View style={[styles.boxes, styles.shadowProp]}>
            <View
              style={{
                width: "25%",
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons name="person-circle" size={70} color="grey" />
            </View>
            <View style={{ width: "60%" }}>
              <Text style={styles.titleText}>Admin Notification</Text>
              <Text> </Text>
              <Text style={styles.messageText}>New Message</Text>
              <Text> </Text>
              <Text style={styles.timeText}>30 seconds ago</Text>
            </View>
            <View
              style={{
                width: "15%",
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity onPress={DeleteNotification}>
                <Ionicons name="trash" size={25} color="red" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.boxes, styles.shadowProp]}>
            <View
              style={{
                width: "25%",
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons name="person-circle" size={70} color="grey" />
            </View>
            <View style={{ width: "60%" }}>
              <Text style={styles.titleText}>Admin Notification</Text>
              <Text> </Text>
              <Text style={styles.messageText}>New Message</Text>
              <Text> </Text>
              <Text style={styles.timeText}>30 seconds ago</Text>
            </View>
            <View
              style={{
                width: "15%",
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity onPress={DeleteNotification}>
                <Ionicons name="trash" size={25} color="red" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.boxes, styles.shadowProp]}>
            <View
              style={{
                width: "25%",
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons name="person-circle" size={70} color="grey" />
            </View>
            <View style={{ width: "60%" }}>
              <Text style={styles.titleText}>Admin Notification</Text>
              <Text> </Text>
              <Text style={styles.messageText}>New Message</Text>
              <Text> </Text>
              <Text style={styles.timeText}>30 seconds ago</Text>
            </View>
            <View
              style={{
                width: "15%",
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity onPress={DeleteNotification}>
                <Ionicons name="trash" size={25} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationsScreen;

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
  boxes: {
    backgroundColor: "#B0F5ED",
    width: "90%",
    minHeight: 100,
    alignSelf: "center",
    flexDirection: "row",
    marginTop: 20,
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
  titleText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 5,
  },
  messageText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 14,
  },
  timeText: {
    color: "black",
    fontSize: 12,
    marginBottom: 5,
  },
  searchBar: {
    marginTop: 10,
    backgroundColor: "#D9D9D9",
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  searchText: {
    color: "black",
    marginLeft: 10,
    fontSize: 17,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 17,
  },
});
