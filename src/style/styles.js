import { StyleSheet } from "react-native";

export default StyleSheet.create({
  // CSS to be used globally.
  // This choice was made to reduce time taken to write redundant CSS.
  // Could use scss for better handling, but I believe that is out of scope.
  container: {
    flex: 1,
  },
  componentHolder: {
    padding: 10,
    flex: 1,
  },
  bottomAlign: {
    justifyContent: "flex-end",
  },
  centerAlign: {
    justifyContent: "center",
    alignItems: "center",
  },
  fillWidth: {
    width: "100%",
  },
  flexRow: {
    flexDirection: "row",
  },
  body: {
    flex: 1,
    padding: 10,
  },
  split: {
    justifyContent: "space-between",
  },
  input: {
    height: 40,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    backgroundColor: "white",
  },
  // 0_Main.js
  main_darkbg: {
    backgroundColor: "#000",
  },
  main_header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  main_logo: {
    width: 200,
    height: 200,
    backgroundColor: "#AAA",
    borderRadius: 100,
  },
  dropdownHeader: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  // Button related CSS
  button: {
    height: 55,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "orange",
  },
  button_inactive: {
    backgroundColor: "#DDD",
  },
  // Drawer.js specific css
  drawerBody: {
    position: "absolute",
    backgroundColor: "white",
    left: 0,
    right: 0,
    justifyContent: "flex-start",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    bottom: 0,
    borderWidth: 1,
  },
  grip:{
    backgroundColor: "gray",
    borderRadius: 5,
    width: 100,
    height: 10,
  },
  swipeDetect: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 80,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center"
  },
  // Image related CSS
  roundImg: {
    borderRadius: 20,
  },
  // Font related CSS
  baseFont: {
    fontWeight: 500,
    fontSize: 14,
    padding: 5,
  },
  dropdownHeaderFont: {
    color: "orange",
    fontWeight: 800,
    fontSize: 30,
  },
  buttonText: {
    fontWeight: 700,
    fontSize: 18,
    color: "#111"
  },
  buttonText_inactive: {
    color: "#999"
  },
  h1: {
    fontWeight: 800,
    fontSize: 18
  },
});
// Notable colors:
// 