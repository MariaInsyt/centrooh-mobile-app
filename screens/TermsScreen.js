import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  Alert,
  Modal,
  Pressable,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";

const TermsScreen = (props) => {
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
                onPress={() => navigation.navigate("Faqs")}
                style={styles.bar}
              >
                <Text>FAQs</Text>
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
            Terms
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
          <Text style={styles.header}>Terms and Conditions</Text>
          <Text style={styles.headerText}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC.
          </Text>
          <Text style={styles.headerText}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC.
          </Text>
          <TouchableOpacity
            onPress={() => openWebPage('https://www.insytmedia.com')}>
            <Text style={styles.Link}>View More Details</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TermsScreen;

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
  Link: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  container: {
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 6,
    paddingTop: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#E2F0EF',
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
    fontSize: 25,
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 17,
    lineHeight: 20,
    marginTop: 20,
    textAlign: 'justify',
    marginHorizontal: 10,
  },
  content: {
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  contentText: {
    fontSize: 16,
  },
});
