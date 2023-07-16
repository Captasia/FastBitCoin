import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

import styles from "../style/styles.js";
import Button from "../components/Button.js";
import Drawer from "../components/Drawer.js";
import UserInput from "../components/UserInput.js";
import SelectionButton from "../components/SelectionButton.js";

import { useSelector, useDispatch } from "react-redux";
import { updateCountry, updateState } from "../redux/reducers.js";
import SearchableList from "../components/SearchableList.js";

const generateImageLink = (countryCode) => {
  return `https://flagsapi.com/${countryCode}/shiny/64.png`;
};

// TODO: consider using https://restcountries.com/v3.1/all?fields=name,flags for countries
// check flags.json for tip.
const COUNTRY_LIST = [
  {
    id: "country-1",
    title: "US",
    name: "United States",
    imageLink: generateImageLink("US"),
  },
  {
    id: "country-2",
    title: "IM",
    name: "Isle of Man",
    imageLink: generateImageLink("IM"),
  },
  {
    id: "country-3",
    title: "KR",
    name: "South Korea",
    imageLink: generateImageLink("KR"),
  },
];

// NOTE: couldn't find decent API for this
const STATE_LIST = [
  {
    id: "state-1",
    title: "PA",
    name: "Pittsburgh",
  },
  {
    id: "state-2",
    title: "NY",
    name: "New York",
  },
  {
    id: "state-3",
    title: "CA",
    name: "California",
  },
];

export default function Account({ navigation }) {
  // ------- TODO: look at which hook I should use to record state
  // 1. state to keep if modal is open or not.
  // 2. state to check if country is selected.
  // 3. state to check if "STATE" should be selected.
  // 4. state to check if (3) and state is selected.
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState("");
  const [shouldShowStates, setShouldShowStates] = useState(false);
  const [countryItem, setCountryItem] = useState({ id: "country-0", name: "Select Country" });
  const [stateItem, setStateItem] = useState({ id: "state-0", name: "Select State" });
  const dispatch = useDispatch();

  // Render Object
  return (
    <View style={{ ...styles.container, ...styles.split }}>
      <View style={styles.componentHolder}>
        {/* TODO: create button */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            paddingHorizontal: 40,
            paddingVertical: 10,
          }}
        >
          <Text
            style={{
              fontSize: 10,
              textAlign: "center",
            }}
          >
            You need to select your country for something etc etc hello world
            banana toupe
          </Text>
        </View>
        <UserInput title={"What country do you live in?"}>
          <SelectionButton
            selectedItem={countryItem}
            onPress={() => {
              setIsDrawerOpen(true);
              setDrawerContent("Country");
            }}
          />
        </UserInput>
        {shouldShowStates && (
          <UserInput title={"What state do you live in?"}>
            <SelectionButton
              selectedItem={stateItem}
              onPress={() => {
                setIsDrawerOpen(true);
                setDrawerContent("State");
              }}
            />
          </UserInput>
        )}
      </View>
      <View style={{ ...styles.componentHolder, ...styles.bottomAlign }}>
        <Button
          style={styles.button}
          isActive={true}
          onPress={() => {
            console.log("Moving to next page");
            dispatch(updateCountry(countryItem.title));
            dispatch(updateState(stateItem.title));
            navigation.navigate("Password");
          }}
          text={"Continue"}
        />
      </View>
      <Drawer
        shouldClose={() => setIsDrawerOpen(false)}
        shouldShow={isDrawerOpen}
        title={drawerContent}
      >
        <SearchableList
          data={drawerContent === "Country" ? COUNTRY_LIST : STATE_LIST}
          onSelect={(item) => {
            if (drawerContent === "Country") {
              console.log("country item selected:");
              console.log(item);
              setCountryItem(item);
              if (item.title === "US") {
                setShouldShowStates(true);
              }
            } else {
              setStateItem(item);
              console.log("state item selected");
              console.log(item);
            }
            setIsDrawerOpen(false);
          }}
        />
      </Drawer>
    </View>
  );
}
