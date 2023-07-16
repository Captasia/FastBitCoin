import React from "react";
import { Modal, View, Dimensions, Text } from "react-native";
import {
  GestureDetector,
  Gesture,
  Directions,
} from "react-native-gesture-handler";
import styles from "../style/styles.js";

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
