import React from "react";
import { Text, View } from "react-native";

// import AsyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";
// import redux
import { useDispatch } from "react-redux";
import { clearObject } from "../redux/reducers.js";
// import CSS
import styles from "../style/styles.js";
// import Components
import Button from "../components/Button.js";

export default function Finale({ navigation }) {
  const dispatch = useDispatch();

  const reset = async () => {
    // TODO: reset token + language
    try {
      await AsyncStorage.clear();
      dispatch(clearObject);
    } catch (err) {
      console.log("Error resetting:", err);
    } finally {
      navigation.navigate("Home");
    }
  };

  return (
    <View style={{ ...styles.container, ...styles.centerAlign }}>
      <Text style={styles.baseFont}> All good! </Text>
      <Button text={"Reset"} onPress={() => reset()} />
    </View>
  );
}
