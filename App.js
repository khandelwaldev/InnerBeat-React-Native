// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./app/components/BottomTabNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default App;
