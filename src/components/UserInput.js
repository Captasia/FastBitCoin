import React from "react";
import {
    Text,
    View,
  } from "react-native";

// import CSS
import global from "../style/global.js";

/**
 * UserInput
 * @param {string} title - what message will be displayed on top.
 * @param {React.JSX.Element} children - component to be displayed under title.
 * @returns UserInput component
 */
const UserInput = ({ title, children }) => {
  return (
    <View style={{...global.inputHolder}}>
      <Text style={{...global.font_generic, marginBottom: 5}}>{title}</Text>
      {children}
    </View>
  );
};

export default UserInput;