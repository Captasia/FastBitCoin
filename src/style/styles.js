import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  // CSS to be used globally.
  // This choice was made to reduce time taken to write redundant CSS.
  // Could use scss for better handling, but I believe that is out of scope.
  container: {
    flex: 1,
    backgroundColor: "#F7F8F7",
  },
  componentHolder: {
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
    height: 60,
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
    height: 70,
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
  swipeDetect: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 90,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
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
    color: "#111",
  },
  buttonText_inactive: {
    color: "#999",
  },
  h1: {
    fontWeight: 800,
    fontSize: 18,
  },
  // OTHERS
  searchBar: {
    height: 60,
    padding: 10,
    flexDirection: "row",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchBar__container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
    marginHorizontal: 20,
    borderWidth: 1,
    borderRadius: 5,
  },
  searchBar__input: {
    fontSize: 20,
    marginLeft: 10,
    width: "80%",
    color: "orange",
  },
});
// Notable colors:
//
