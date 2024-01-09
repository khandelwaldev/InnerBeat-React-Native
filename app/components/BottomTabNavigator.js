// BottomTabNavigator.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import HomeTabs from "./AppNavigator";
import SearchScreen from "../screens/SearchScreen";
import SongsScreen from "../screens/SongsScreen";
import AlbumsScreen from "../screens/AlbumsScreen";
import PlaylistsScreen from "../screens/PlaylistsScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "HomeTabs") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search";
          } else if (route.name === "Songs") {
            iconName = focused ? "musical-notes" : "musical-notes";
          } else if (route.name === "Albums") {
            iconName = focused ? "albums" : "albums";
          } else if (route.name === "Playlists") {
            iconName = focused ? "list" : "list";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarLabel: route.name === "HomeTabs" ? "Home" : route.name, // Show the name as label
      })}
    >
      <Tab.Screen name="HomeTabs" component={HomeTabs} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Songs" component={SongsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
      <Tab.Screen name="Playlists" component={PlaylistsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
