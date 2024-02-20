import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const ViewBillboardScreen = (props) => {
  const { navigation } = props;
  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
      }}
    >
      <StatusBar></StatusBar>
      <ScrollView style={[styles.wholePage]}>
        <View style={{ flexDirection: "row", justifyContent: 'space-between',}}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.navigate("Home")}
          >
            <Ionicons name="md-arrow-back" size={32} color="#041123" />
          </TouchableOpacity>
          <Text style={{ marginTop: 30, fontWeight: "bold", fontSize: 15 }}>
            {" "}
            Kampala00460{" "}
          </Text>
          <TouchableOpacity
            style={styles.userBtn}
            onPress={() => navigation.navigate("Profile")}
          >
            <Ionicons name="person-circle" size={32} color="black" />
          </TouchableOpacity>
          {/* <Image style={styles.image} source={require("../image/blacklogo.png")} />  */}
        </View>
        <View
          style={{
            paddingTop: 10,
          }}
        >
          <Image
            source={require("../assets/image/Kampala00460.png")}
            style={{
              width: 350,
              height: 450,
              marginTop: 5,
              alignSelf: "center",
            }}
          />
          <View
            style={{
              width: 350,
              backgroundColor: "#E2F0EF",
              alignSelf: "center",
              marginTop: 5,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: 180,
                marginLeft: 30,
                marginTop: 5,
                marginBottom: 5,
              }}
            >
              <Text>Location: Najjanakumbi</Text>
              <Text> </Text>
              <Text>Address: Entebbe road</Text>
              <Text> </Text>
              <Text>Last Update: 2 days ago</Text>
            </View>
            <View>
              <View style={styles.UpdateButton}>
                <Text style={styles.ButtonText}>Not Updated</Text>
              </View>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={styles.UpdatingButton}
              onPress={() => navigation.navigate("Camera")}
            >
              <Text style={styles.UpdatingButtonText}>Update Image</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ViewBillboardScreen;

const styles = StyleSheet.create({
  ButtonText: {
    color: "black",
  },
  UpdateButton: {
    backgroundColor: "#FC5757",
    marginTop: 7,
    alignSelf: "center",
    alignItems: "center",
    width: 100,
    height: 25,
    borderRadius: 10,
    marginLeft: 30,
  },
  UpdatingButton: {
    backgroundColor: "#47FA2A",
    marginTop: 7,
    alignSelf: "center",
    alignItems: "center",
    width: 260,
    height: 35,
    borderRadius: 10,
    marginLeft: 30,
  },
  wholePage: {
    height: "100%",
  },
  UpdatingButtonText: {
    alignSelf: "center",
    marginTop: 7,
  },
  backBtn: {
    backgroundColor: "#B0F5ED",
    height: 45,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 20,
    marginLeft: 20,
  },
  image: {
    width: 90,
    height: 90,
    marginLeft: 220,
  },
  userBtn: {
    backgroundColor: "#B0F5ED",
    height: 45,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 20,
    marginRight: 20,
  },
});
