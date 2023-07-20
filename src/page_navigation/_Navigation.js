import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity } from "react-native";

// import related to react-navigation.
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import local storage.
import AsyncStorage from "@react-native-async-storage/async-storage";

// import Pages
import Main from "../pages/0_Main";
import Email from "../pages/1_Email";
import Account from "../pages/2_Account";
import Password from "../pages/3_Password";
import Redirect from "../pages/4_Redirect";
import Finale from "../pages/5_Finale";

import global_style from "../style/global";

export default function Navigation() {
  const Stack = createNativeStackNavigator();
  const [initialRoute, setInitialRoute] = useState("Home");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function getLocalAppState() {
      try {
        const userToken = await AsyncStorage.getItem("userToken");
        if (userToken !== null) {
          setInitialRoute("Finale");
        }
      } catch (err) {
        console.log("Error fetching AsyncStorage value:", err);
      } finally {
        setLoading(false);
      }
    }
    getLocalAppState();
  }, []);

  if (isLoading) {
    // TODO: alternatively we can have a loading screen if the AsyncStorage load is slow.
    return;
  }

  const screenOptions = ({ navigation }) => ({
    headerBackTitleVisible: false,
    headerStyle: {
      ...global_style.font_stack_nav,
    },
    headerRight: () => (
      <Image
        source={require("../../assets/splashIcon.png")}
        style={{ ...global_style.logo_stack_right }}
        resizeMode="contain"
      />
    ),
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image source={require("../../assets/backArrow.png")} />
      </TouchableOpacity>
    ),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Main}
        />
        <Stack.Screen
          options={screenOptions}
          name="Enter your email address"
          component={Email}
        />
        <Stack.Screen name="Your new account" component={Account} />
        <Stack.Screen name="Password" component={Password} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Redirect"
          component={Redirect}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Finale"
          component={Finale}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
