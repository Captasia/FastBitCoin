// SearchBar.js
import React, { useState } from "react";
import { StyleSheet, TextInput, View, Keyboard, Text } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

import styles from "../style/styles";

const SearchBar = ({ searchPhrase, onSearchPhraseChange }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <View style={styles.searchBar__container}>
      <View
        style={
          styles.searchBar
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
          style={styles.searchBar__input}
          placeholder="Search"
          placeholderTextColor={"#707070"}
          value={searchPhrase}
          onChangeText={onSearchPhraseChange}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        <View style={{ width: 20 }}>
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