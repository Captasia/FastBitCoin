import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import Button from "../components/Button";
import styles from "../style/styles.js";
import { useMutation, gql } from "@apollo/client";
import { useSelector, useDispatch } from "react-redux";
import UserInput from "../components/UserInput";
import { updatePassword, updatePasswordConfirm } from "../redux/reducers";

// import AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';


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
  const [loginMutation, _ ] = useMutation(LOGIN_USER);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  
  const variables = useSelector((state) => state.object);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    console.log("handleLogin called");
    try {
      const {data} = await loginMutation({ variables });
        console.log("HandleLogin request passed");
        console.log(Object.keys(data.login));
        if (data && data.login && data.login.actionSuccessful){
          await AsyncStorage.setItem('userToken', data.login.userToken);
          navigation.navigate("Redirect");
        }else{
          throw Error("There was a problem with login.")
        }
    } catch (err) {
      console.log("HandleLogin ERROR - ", err);
    }
  };

  return (
    <View style={{ ...styles.container, ...styles.split }}>
      <View style={{ ...styles.container, justifyContent: "space-around" }}>
        <UserInput title={"Password"}>
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="Password"
            onChangeText={(value) => {
              dispatch(updatePassword(value));
              setPassword(value);
            }}
          />
        </UserInput>

        <UserInput title={"Confirm Password"}>
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="Confirm Password"
            onChangeText={(value) => {
              dispatch(updatePasswordConfirm(value));
              setPasswordConfirm(value);
            }}
          />
        </UserInput>
      </View>
      <View style={{ ...styles.componentHolder, ...styles.bottomAlign }}>
        {/* Password must be filled */}
        <Button
          isActive={password !== "" && passwordConfirm !== ""}
          onPress={handleLogin}
          text={"Continue"}
        />
      </View>
    </View>
  );
}
