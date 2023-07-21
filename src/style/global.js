import { StyleSheet, Platform } from "react-native";
import {Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;

// Figma expectation
const baseWidth = 414;

// We set offset multiplier for resizing font size.
// We can also set offset multiplier for height if needed.
const widthOffset = screenWidth / baseWidth;


// Color constants
const DARK = "#101820";
const LIGHT = "#F7F8F7";
const ORANGE = "#FFB81C";
const BUTTON_INACTIVE = "#E7E8E9";
const FONT_INACTIVE = "#CFD1D2";
// less generic Color constants
const DRAWER_BG = "white";
const DRAWER_GRIP = "#E7E8E9";
// very specifc constants
const LOGO_PLACEHOLDER = "#C4C4C4";
const DROPDOWN_ARROW = "#999999";


// Custom font "Poppins"
const poppins = Platform.OS === "ios" ? {
    400: "Poppins",
    500: "Poppins-Medium",
    600: "Poppins-SemiBold",
    700: "Poppins-Bold"
}: {
    400: "Poppins",
    500: "Poppins",
    600: "Poppins",
    700: "Poppins",
}

export default StyleSheet.create({
  // CSS to be used globally.
  // This choice was made to reduce time taken to write redundant CSS.
  // Could use scss for better handling, but I believe that is out of scope.
  //#region LAYOUT RELATED:
  container: {
    flex: 1,
  },
  body: {
    padding: 10,
    flex: 1,
  },
  inputHolder: {
    padding: 10,
  },
  bottomAlign: {
    justifyContent: "flex-end",
    paddingBottom: Platform.OS === "ios" ? 30 : 10,
  },
  centerAlign: {
    justifyContent: "center",
    alignItems: "center",
  },
  fillWidth: {
    width: "100%",
  },
  split: {
    justifyContent: "space-between",
  },
  flexRow: {
    flexDirection: "row",
  },
  //#endregion
  //#region COLOR RELATED:
  bg_dark: {
    backgroundColor: DARK,
  },
  bg_light: {
    backgroundColor: LIGHT,
  },
  ////////////////////////
  bg_button: {
    backgroundColor: ORANGE,
  },
  bg_button_inactive: {
    backgroundColor: BUTTON_INACTIVE,
  },
  bg_drawer: {
    backgroundColor: DRAWER_BG,
  },
  bg_placeholder: {
    backgroundColor: LOGO_PLACEHOLDER,
  },
  bg_dropdown: {
    backgroundColor: DROPDOWN_ARROW,
  },
  bg_input_grip: {
    backgroundColor: DRAWER_GRIP,
  },
  //#endregion
  //#region FONT RELATED
  //////////////// Font Colors
  fc_black: {
    color: "#000000",
  },
  fc_button: {
    color: "#101820",
  },
  fc_button_inactive: {
    color: FONT_INACTIVE
  },
  fc_basic: {
    color: "#707070",
  },
  fc_orange: {
    color: "#FFB81C",
  },
  //////////////// Font Styles
  font_header: {
    fontFamily: poppins[700],
    fontWeight:700,
    fontSize: 32 * widthOffset,
  },
  font_generic: {
    fontFamily: poppins[400],
    fontWeight:400,
    fontSize: 14 * widthOffset,
  },
  font_stack_nav: {
    fontFamily: poppins[600],
    fontWeight:600,
    fontSize: 18 * widthOffset,
  },
  font_button: {
    fontFamily: poppins[600],
    fontWeight:600,
    fontSize: 21 * widthOffset,
  },
  font_drawer_header: {
    fontFamily: poppins[600],
    fontWeight:600,
    fontSize: 18 * widthOffset,
  },
  font_drawer_generic: {
    fontFamily: poppins[700],
    fontWeight:700,
    fontSize: 18 * widthOffset,
  },
  font_input: {
    fontFamily: poppins[500],
    fontWeight:500,
    fontSize: 16 * widthOffset,
  },
  font_input: {
    fontFamily: poppins[400],
    fontWeight:400,
    fontSize: 18 * widthOffset,
  },
  //#endregion
  //#region IMAGE RELATED
  logo_holder: {
    width: 232,
    height: 232,
    borderRadius: 232/2,
  },
  logo_stack_right: {
    width: 20,
    height: 26,
    paddingVertical:3,
    paddingHorizontal:6,
  },
  logo_stack_left: {
    width: 24,
    height: 24,
  },
  input_dropdown_arrow: {
    width: 10,
    height: 16,
  },
  //#endregion
  //#region BUTTON RELATED
  button: {
    height: 64,
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: ORANGE,
  },
  button_inactive: {
    backgroundColor: BUTTON_INACTIVE,
  },
  //#endregion
  round_image: {
    width: 24,
    height: 24,
    borderRadius: 24/2,
    backgroundColor: "white",
    marginRight: 10,
  },
  input: {
    height: 62,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    backgroundColor: "white",
  },
  drawer_body: {
    position: "absolute",
    backgroundColor: "white",
    left: 0,
    right: 0,
    justifyContent: "flex-start",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    bottom: 0,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 3,
    shadowRadius: 5,
  },
  grip: {
    backgroundColor: "#E7E8E9",
    borderRadius: 5,
    width: 82,
    height: 6,
    marginTop: 15,
  },
  swipe_area: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 80,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  keyboard_dismisser:{
    height: 270,
  }
});
