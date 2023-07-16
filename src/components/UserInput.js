import React from "react";
import {
    Text,
    View,
  } from "react-native";

// import CSS
import styles from "../style/styles.js";

/**
 * UserInput
 * @param {string} title - what message will be displayed on top.
 * @param {React.JSX.Element} children - component to be displayed under title.
 * @returns UserInput component
 */
const UserInput = ({ title, children }) => {
  return (
    <View style={styles.inputHolder}>
      <Text style={styles.baseFont}>{title}</Text>
      {children}
    </View>
  );
};

export default UserInput;