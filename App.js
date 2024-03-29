import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./screens/SplashScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ViewBillboardScreen from "./screens/ViewBillboardScreen";
import NoficationsScreen from "./screens/NoficationsScreen";
import TermsScreen from "./screens/TermsScreen";
import FaqsScreen from "./screens/FaqsScreen";
import MapScreen from "./screens/MapScreen";
import CameraScreen from "./screens/CameraScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Splash"
          component={SplashScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Welcome"
          component={WelcomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SignUp"
          component={SignUpScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Profile"
          component={ProfileScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ViewBillboard"
          component={ViewBillboardScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Notifications"
          component={NoficationsScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Terms"
          component={TermsScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Faqs"
          component={FaqsScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Map"
          component={MapScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Camera"
          component={CameraScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
