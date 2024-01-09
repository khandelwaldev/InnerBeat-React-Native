import React from "react";
import { View, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

const SearchScreen = () => {
  const navigation = useNavigation();

  const goToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 16,
          width: "100%",
          height: 100,
          backgroundColor: "#ddd",
          paddingTop: 30,
        }}
      >
        <Icon name="arrow-back" size={25} onPress={goToHome} />

        <TextInput
          placeholder="Search"
          placeholderTextColor="#000"
          style={{
            color: "#000",
            flex: 1,
            width: "100%",
            fontSize: 18,
            marginHorizontal: 15,
          }}
        />

        <Icon name="search" size={25} />
      </View>
    </View>
  );
};

export default SearchScreen;
