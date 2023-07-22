import React, { useState, useCallback } from "react";
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Button from "../components/Button";
import { useMutation, gql } from "@apollo/client";
import { useSelector, useDispatch } from "react-redux";
import UserInput from "../components/UserInput";
import { updatePassword, updatePasswordConfirm } from "../redux/reducers";

// import AsyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";
import global from "../style/global.js";
import Paragraph from "../components/Paragraph";

const LOGIN_USER = gql`
  mutation LoginUser(
    $country: String!
    $email: String!
    $password: String!
    $passwordConfirm: String!
    $state: String!
  ) {
    login(
      country: $country
      email: $email
      password: $password
      passwordConfirm: $passwordConfirm
      state: $state
    ) {
      actionSuccessful
      message
      userToken
    }
  }
`;

export default function Password({ navigation }) {
  // We should have all the information at this point, press a button to call urql Request
  const [loginMutation, _] = useMutation(LOGIN_USER);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const variables = useSelector((state) => {
    return state.object;
  });
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const { data } = await loginMutation({ variables });
      if (data && data.login && data.login.actionSuccessful) {
        await AsyncStorage.setItem("userToken", data.login.userToken);
      } else {
        throw Error("There was a problem with login.");
      }
    } catch (err) {
      console.log("HandleLogin ERROR - ", err);
    }
    navigation.navigate("Redirect");
  };

  const handlePassword = useCallback(
    (value) => {
      dispatch(updatePassword(value));
      setPassword(value);
    },
    [password]
  );

  const handlePasswordConfirm = useCallback(
    (value) => {
      dispatch(updatePasswordConfirm(value));
      setPasswordConfirm(value);
    },
    [passwordConfirm]
  );

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
        <View
          style={{
            ...global.body,
            justifyContent: "space-between",
            paddingBottom: 50,
          }}
        >
          <View
            style={{
              justifyContent: "flex-start",
              height: 250,
            }}
          >
            <UserInput title={"Password"}>
              <TextInput
                secureTextEntry={true}
                style={{ ...global.input, ...global.font_input }}
                placeholder="Password"
                placeholderTextColor={"#707070"}
                onChangeText={handlePassword}
              />
            </UserInput>
            <UserInput title={"Confirm Password"}>
              <TextInput
                secureTextEntry={true}
                style={{ ...global.input, ...global.font_input }}
                placeholder="Confirm Password"
                placeholderTextColor={"#707070"}
                onChangeText={handlePasswordConfirm}
              />
            </UserInput>
          </View>
          <Button
            isActive={password !== "" && passwordConfirm !== ""}
            onPress={handleLogin}
            text={"Continue"}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
