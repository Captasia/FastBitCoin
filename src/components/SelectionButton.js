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
        <Text style={{ ...styles.baseFont, color: "#AAA" }}>{selectedItem.name}</Text>
        {children}
      </View>
      <Image
        style={{ backgroundColor: "orange" }}
        source={{
          // TODO: need an image
          uri: null,
        }}
        width={30}
      />
    </TouchableOpacity>
  );
};

export default SelectionButton;
