import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavHandler from "./src/navigation/NavHandler";

function App() {
  return (
    <NavigationContainer>
      <NavHandler />
    </NavigationContainer>
  );
}

export default App;
