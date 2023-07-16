import React, { useCallback, useEffect, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "../style/styles.js";

export default function Button({ onPress, text, isActive = true }) {
  return (
    <TouchableOpacity
      style={
        isActive
          ? styles.button
          : { ...styles.button, ...styles.button_inactive }
      }
      onPress={onPress}
      disabled={!isActive}
    >
      <Text style={isActive ? styles.buttonText : styles.buttonText_inactive}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
