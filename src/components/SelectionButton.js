import React from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";

// import CSS
import styles from "../style/styles.js";
import global from "../style/global.js";

/**
 * SelectionButton
 * @param {string} selected - text to display selection.
 * @param {string | null} imageLink - if image should be displayed, send link.
 * @param {React.JSX.Element} children - component to be displayed under title.
 * @returns UserInput component
 */
const SelectionButton = ({ onPress, selectedItem, children }) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.input,
        borderColor: "#DDD",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center"
      }}
      onPress={onPress}
    >
      <View style={{...global.centerAlign, ...global.flexRow}}>
        {selectedItem.imageLink && (
          <Image
            style={global.round_image}
            source={{
              uri: selectedItem.imageLink,
            }}
            resizeMode={"stretch"}
            height={30}
            width={30}
          />
        )}
        <Text style={{ ...global.font_generic, color: "#B7BABC" }}>
          {selectedItem.name}
        </Text>
        {children}
      </View>
      <View
        style={{
          ...styles.centerAlign,
          width: 30,
          height: 30,
        }}
      >
        <Image source={require("../../assets/rightArrow.png")} width={30} />
      </View>
    </TouchableOpacity>
  );
};

export default SelectionButton;