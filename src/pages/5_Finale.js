import React from "react";
import { Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useDispatch } from "react-redux";
import { clearObject } from "../redux/reducers.js";

import Button from "../components/Button.js";
import global from "../style/global.js";

export default function Finale({ navigation }) {
  const dispatch = useDispatch();

  const reset = async (navigation, dispatch) => {
    try {
      dispatch(clearObject());
      await AsyncStorage.multiRemove(["userToken", "language"]);
    } catch (err) {
      console.log("Error resetting:", err);
    } finally {
      navigation.navigate("Home");
    }
  };

  return (
    <View style={{ ...global.container }}>
      <View style={{ ...global.body, ...global.bottomAlign }}>
        <Text style={{ ...global.font_header, ...global.fc_basic }}>
          All good!
        </Text>
      </View>
      <View style={{ ...global.body }}>
        <Button text="Reset" onPress={() => reset(navigation, dispatch)} />
      </View>
    </View>
  );
}
