import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";

// import CSS
import styles from "../style/styles.js";

/**
 * SelectionButton
 * @param {string} selected - text to display selection.
 * @param {string | null} imageLink - if image should be displayed, send link.
 * @param {React.JSX.Element} children - component to be displayed under title.
 * @returns UserInput component
 */
const SelectionButton = ({ onPress, selectedItem, children }) => {
  console.log("Selection Button item:");
  console.log(selectedItem);
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
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {selectedItem.imageLink && (
          <Image
            style={styles.roundImg}
            source={{
              uri: selectedItem.imageLink,
            }}
            resizeMode={"stretch"}
            height={30}
            width={30}
          />
        )}
        <Text style={{ ...styles.baseFont, color: "#AAA" }}>
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
