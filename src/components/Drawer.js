import React, { useState } from "react";
import { Modal, View, Dimensions, Text } from "react-native";
import {
  GestureDetector,
  Gesture,
  Directions,
} from "react-native-gesture-handler";
import styles from "../style/styles.js";
import SearchBar from "./SearchBar.js";
import List from "./List.js";
import SearchableList from "./SearchableList.js";

// Temporary built data
// TODO: refine + MAYBE fetch this from external API
const COUNTRY_DATA = [
  {
    id: "ct-1",
    title: "US",
  },
  {
    id: "ct-2",
    title: "Isle of Man",
  },
  {
    id: "ct-3",
    title: "South Korea",
  },
];
const STATE_DATA = [
  {
    id: "st-1",
    title: "State 1",
  },
  {
    id: "st-2",
    title: "State 2",
  },
  {
    id: "st-3",
    title: "State3",
  },
];

/**
 * Drawer() handles size of Drawer and Gesture (flick down).
 **/
export default function Drawer({ shouldClose, shouldShow, title, children }) {
  const windowHeight = Dimensions.get("window").height;
  const flingGesture = Gesture.Fling()
    .direction(Directions.DOWN)
    .onStart((e) => {
      shouldClose();
    });
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={shouldShow} // check if this should be open
      onRequestClose={shouldClose} // request to close
    >
      <View style={[styles.drawerBody, { height: windowHeight * 0.9 }]}>
        <View style={{ ...styles.fillWidth, ...styles.flexRow }}>
          {/* Support swipe down gesture from this list*/}
          <GestureDetector gesture={flingGesture}>
            <View style={styles.swipeDetect}>
              <View style={styles.grip} />
              <Text style={styles.h1}>{title}</Text>
            </View>
          </GestureDetector>
        </View>
        {children}
      </View>
    </Modal>
  );
}
