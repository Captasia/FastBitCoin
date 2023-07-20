import React, { useCallback, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import Button from "../components/Button";
import styles from "../style/styles.js";
import { useMutation, gql } from "@apollo/client";
import { useSelector, useDispatch } from "react-redux";
import UserInput from "../components/UserInput";
import { updatePassword, updatePasswordConfirm } from "../redux/reducers";

// import AsyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";
import global from "../style/global";
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
    console.log(state.object);
    return state.object});
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const { data } = await loginMutation({ variables });
      if (data && data.login && data.login.actionSuccessful) {
        await AsyncStorage.setItem("userToken", data.login.userToken);
        navigation.navigate("Redirect");
      } else {
        throw Error("There was a problem with login.");
      }
    } catch (err) {
      console.log("HandleLogin ERROR - ", err);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ ...global.container, ...global.split }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={70}
    >
      <Paragraph>
        Bacon ipsum dolor amet kielbasa filet mignon biltong hamburger tri-tip sirloin.
      </Paragraph>
      <View
        style={{
          ...styles.body,
          flex: 0.5,
          justifyContent: "flex-start",
        }}
      >
        <UserInput title={"Password"}>
          <TextInput
            secureTextEntry={true}
            style={{ ...global.input, ...global.font_input }}
            placeholder="Password"
            placeholderTextColor={"#707070"}
            onChangeText={(value) => {
              dispatch(updatePassword(value));
              setPassword(value);
            }}
          />
        </UserInput>
        <UserInput title={"Confirm Password"}>
          <TextInput
            secureTextEntry={true}
            style={{ ...global.input, ...global.font_input }}
            placeholder="Confirm Password"
            placeholderTextColor={"#707070"}
            onChangeText={(value) => {
              dispatch(updatePasswordConfirm(value));
              setPasswordConfirm(value);
            }}
          />
        </UserInput>
      </View>
      <View style={{ ...global.body, ...global.bottomAlign }}>
        {/* Password must be filled */}
        <Button
          isActive={password !== "" && passwordConfirm !== ""}
          onPress={handleLogin}
          text={"Continue"}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
