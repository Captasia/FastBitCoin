import React from "react";
import { Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";

import Button from "../components/Button.js";
import global from "../style/global.js";


export default function Finale({ navigation }) {
  console.log("Render Finale ----------------------");
  const dispatch = useDispatch();

  const reset = async (navigation, dispatch) => {
    try {
      await AsyncStorage.multiRemove(["userToken", "language"]);
      dispatch(clearObject());
    } catch (err) {
      console.log("Error resetting:", err);
    } finally {
      navigation.navigate("Home");
    }
  };


  return (
    <View style={{ ...global.container, ...global.centerAlign }}>
      <Text style={global.font_generic}> All good! </Text>
      <Button text="Reset" onPress={() => reset(navigation, dispatch)} />
    </View>
  );
}
