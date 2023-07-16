import React, { useCallback, useEffect, useState } from "react";
import styles from "../style/styles.js";
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import Button from "../components/Button.js";

// Import redux / redux actions
import { useDispatch } from "react-redux";
import { updateEmail } from "../redux/reducers.js";
import UserInput from "../components/UserInput.js";

export default function Email({ navigation }) {
  // TODO: set isValid back to false
  // const state = useSelector((state) => {
  //   console.log("fetching state: ", state);
  //   return state.object;
  // });
  const dispatch = useDispatch();
  const [email, setEmail] = useState({ email: "", isValid: false });

  // TODO: remove return true
  function isValidEmail(email) {
    const regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  }

  const validateEmail = (text) => {
    setEmail({ isValid: isValidEmail(text), email: text });
  };

  return (
    <KeyboardAvoidingView
      style={{ ...styles.container, ...styles.split}}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={70}
    >
      <UserInput title={"Email"}>
        <TextInput
          style={styles.input}
          placeholder="Your email address"
          placeholderTextColor={"#707070"}
          onChangeText={validateEmail}
        />
      </UserInput>
      <View style={{ ...styles.componentHolder, ...styles.bottomAlign }}>
        <Button
          style={styles.button}
          isActive={email.isValid}
          onPress={() => {
            dispatch(updateEmail(email.email));
            navigation.navigate("Your new account");
          }}
          text={"Continue"}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
