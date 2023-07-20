import React from "react";
import { Text, View } from "react-native";
// import styles from "../style/styles.js";
import global_style from "../style/global.js";

export default function Paragraph({ children }) {
  return (
    <View
    style={{
      ...global_style.centerAlign,
      whiteSpace: "pre-wrap",
      overflowWrap: "break-word",
      paddingHorizontal: 40,
      paddingVertical: 5,
      height: 55,
    }}
  >
    <Text
      style={{
        ...global_style.font_generic,
        ...global_style.fc_basic,
        textAlign: "center",
      }}
    >
        {children}
    </Text>
  </View>
  );
}
