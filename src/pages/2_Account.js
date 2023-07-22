import React, { useState, useCallback } from "react";
import { View } from "react-native";

import global from "../style/global.js";

import { GestureHandlerRootView } from "react-native-gesture-handler";

import Button from "../components/Button.js";
import Drawer from "../components/Drawer.js";
import UserInput from "../components/UserInput.js";
import SelectionButton from "../components/SelectionButton.js";

import { useDispatch } from "react-redux";
import { updateCountry, updateState } from "../redux/reducers.js";
import SearchableList from "../components/SearchableList.js";
import Paragraph from "../components/Paragraph.js";

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
  console.log("rendering account...");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState("");
  const [shouldShowStates, setShouldShowStates] = useState(false);
  const [countryItem, setCountryItem] = useState({
    id: "country-0",
    name: "Select Country",
  });
  const [stateItem, setStateItem] = useState({
    id: "state-0",
    name: "Select State",
  });
  const dispatch = useDispatch();

  const handleCountryPress = useCallback(() => {
    setIsDrawerOpen(true);
    setDrawerContent("Country");
  }, []);

  const handleStatePress = useCallback(() => {
    setIsDrawerOpen(true);
    setDrawerContent("State");
  }, []);

  const handleSelectItem = useCallback(
    (item) => {
      if (drawerContent === "Country") {
        setCountryItem(item);
        if (item.title === "US") {
          setStateItem({
            id: "state-0",
            name: "Select State",
          });
          setShouldShowStates(true);
        } else {
          // SET same code for STATE with COUNTRY code.
          setStateItem(item);
          setShouldShowStates(false);
        }
      } else {
        setStateItem(item);
      }
      setIsDrawerOpen(false);
    },
    [drawerContent]
  );

  // Render Object
  return (
    <GestureHandlerRootView style={{ ...global.container }}>
      <View
        style={{ ...global.container, ...global.split, ...global.bg_light }}
      >
        <Paragraph>
          Bacon ipsum dolor amet kielbasa filet mignon biltong hamburger tri-tip
          sirloin.
        </Paragraph>
        <View style={global.body}>
          <UserInput title={"What country do you live in?"}>
            <SelectionButton
              selectedItem={countryItem}
              onPress={handleCountryPress}
            />
          </UserInput>
          {shouldShowStates && (
            <UserInput title={"What state do you live in?"}>
              <SelectionButton
                selectedItem={stateItem}
                onPress={handleStatePress}
              />
            </UserInput>
          )}
        </View>
        <View style={{ ...global.body, ...global.bottomAlign }}>
          <Button
            style={global.button}
            isActive={true}
            onPress={() => {
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
            dataType={drawerContent}
            onSelect={handleSelectItem}
          />
        </Drawer>
      </View>
    </GestureHandlerRootView>
  );
}
