// SearchBar.js
import React, { useState } from "react";
import { StyleSheet, TextInput, View, Keyboard, Text } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

import global from "../style/global";

const SearchBar = ({ searchPhrase, onSearchPhraseChange }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <View style={styles.search_bar_container}>
      <View
        style={
          styles.search_bar
        }
      >
        {/* search Icon */}
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={{...styles.search_bar_input, ...global.font_generic }}
          placeholder="Search"
          placeholderTextColor={"#707070"}
          value={searchPhrase}
          onChangeText={onSearchPhraseChange}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        <View style={styles.cancel_holder}>
          {clicked && (
            <Entypo
              name="cross"
              size={20}
              color="black"
              // style={{ padding: 1 }}
              onPress={() => {
                onSearchPhraseChange("");
                Keyboard.dismiss();
                setClicked(false);
              }}
            />
          )}
        </View>
      </View>
    </View>
  );
};
export default SearchBar;

// specific to 
const styles = StyleSheet.create({
  search_bar: {
    height: 50,
    padding: 10,
    flexDirection: "row",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },
  search_bar_container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
    marginHorizontal: 20,
    borderWidth: 1,
    borderRadius: 5,
  },
  search_bar_input: {
    marginLeft: 10,
    width: "80%",
  },
  cancel_holder:{
    width: 20
  }
})
