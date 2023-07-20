import React from "react";
import { Text, TouchableOpacity } from "react-native";
// import styles from "../style/styles.js";
import global from "../style/global.js";

export default function Button({ onPress, text, isActive = true }) {
  return (
    <TouchableOpacity
      style={
        isActive
          ? { ...global.button }
          : { ...global.button, ...global.button_inactive }
      }
      onPress={onPress}
      disabled={!isActive}
    >
      <Text
        style={
          isActive
            ? { ...global.font_button, ...global.fc_button }
            : { ...global.font_button, ...global.fc_button_inactive }
        }
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
