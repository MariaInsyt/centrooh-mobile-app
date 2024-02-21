import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TextInput,
  Modal,
  Pressable,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import MapView, { Marker } from "react-native-maps";
import Constants from "expo-constants";

const MapScreen = (props) => {
  const { navigation } = props;
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <StatusBar
        animated={true}
        backgroundColor="white"
        barStyle="dark-content"
      />
      <View
        style={{
          backgroundColor: "white",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={styles.userBtn}
          onPress={() => navigation.navigate("Profile")}
        >
          <Ionicons name="person-circle" size={32} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.settingsBtn}
          onPress={() => setModalVisible(true)}
        >
          <Ionicons name="ios-settings" size={32} color="black" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: "white",
          height: 50,
          borderWidth: 1,
          borderBottomColor: "#B0F5ED",
          borderLeftColor: "white",
          borderRightColor: "white",
          borderTopColor: "white",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={styles.button1Style}>
            <TouchableOpacity style={styles.ListBtn} disabled={true}>
              <Text>List</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button2Style}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Map")}
              style={styles.loginBtn}
            >
              <Text>Map</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View style={styles.searchBar}>
          <TextInput style={styles.searchInput} placeholder="Search here..." />
        </View>
      </View>
      <ScrollView
        nestedScrollEnabled
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
      >
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
                <Text>LOG OUT</Text>
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

        <View style={{ flex: 1 }}>
          {/* Google Maps */}
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: 0.34025604342941695,
              longitude: 32.588991836490706,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{ latitude: 0.34025604342941695, longitude: 32.588991836490706 }}
              title="Marker"
              description="This is a marker"
            />
          </MapView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  wholePage: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  button1Style: {
    color: "#B0F5ED",
    paddingLeft: 10,
    paddingTop: 12,
    width: 120,
  },
  button2Style: {
    paddingTop: 12,
    width: 120,
    marginLeft: 140,
  },
  loginBtn: {
    borderRadius: 5,
    height: 37,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D9D9D9",
  },
  ListBtn: {
    borderRadius: 5,
    height: 37,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B0F5ED",
  },
  backBtn: {
    marginTop: 15,
    marginLeft: 20,
  },
  userBtn: {
    backgroundColor: "#B0F5ED",
    height: 45,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 10,
    marginLeft: 20,
  },
  settingsBtn: {
    backgroundColor: "#B0F5ED",
    height: 45,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 10,
    marginRight: 20,
    marginLeft: 260,
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
    paddingTop: 20,
    paddingBottom: 20,
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
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 25,
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
