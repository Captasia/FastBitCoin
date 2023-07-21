import React from "react";
import { Text, View } from "react-native";
// import styles from "../style/styles.js";
import global from "../style/global.js";

export default function Paragraph({ children }) {
  return (
    <View
    style={{
      ...global.centerAlign,
      whiteSpace: "pre-wrap",
      overflowWrap: "break-word",
      paddingHorizontal: 40,
      paddingVertical: 5,
      height: 55,
    }}
  >
    <Text
      style={{
        ...global.font_generic,
        ...global.fc_basic,
        textAlign: "center",
      }}
    >
        {children}
    </Text>
  </View>
  );
}
