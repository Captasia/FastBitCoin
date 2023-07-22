import React, { useState, useLayoutEffect } from "react";
import global from "../style/global.js";
import {
  View,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  StatusBar,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";

import Button from "../components/Button.js";

// Import redux / redux actions
import { useDispatch } from "react-redux";
import { updateEmail } from "../redux/reducers.js";
import UserInput from "../components/UserInput.js";

export default function Email({ navigation }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState({ email: "", isValid: false });

  function isValidEmail(email) {
    const regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  }

  const validateEmail = (text) => {
    setEmail({ isValid: isValidEmail(text), email: text });
  };

  console.log("Email Returning...");
  return (
    <KeyboardAvoidingView
      style={{
        ...global.container,
        ...global.bg_light,
      }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={70}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ ...global.body, justifyContent: "space-between", paddingBottom: 50 }}>
          <UserInput title={"Email"}>
            <TextInput
              style={{ ...global.input, ...global.font_input }}
              placeholder="Your email address"
              placeholderTextColor={"#707070"}
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={validateEmail}
            />
          </UserInput>
          <Button
            style={{ ...global.button }}
            isActive={email.isValid}
            onPress={() => {
              dispatch(updateEmail(email.email));
              navigation.navigate("Your new account");
            }}
            text={"Continue"}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
