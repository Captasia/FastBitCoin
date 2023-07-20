import React from "react";
import { Modal, View, Dimensions, Text } from "react-native";
import {
  GestureDetector,
  Gesture,
  Directions,
} from "react-native-gesture-handler";
import global from "../style/global.js";

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
      <View style={{...global.drawer_body, height: windowHeight * 0.9 }}>
        <View style={{ ...global.fillWidth, ...global.flexRow }}>
          {/* Support swipe down gesture from this list*/}
          <GestureDetector gesture={flingGesture}>
            <View style={global.swipe_area}>
              <View style={global.grip} />
              <Text style={global.font_drawer_header}>{title}</Text>
            </View>
          </GestureDetector>
        </View>
        {children}
      </View>
    </Modal>
  );
}