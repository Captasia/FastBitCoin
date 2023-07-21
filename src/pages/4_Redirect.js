import React, { useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import global from "../style/global.js";

export default function Redirect({ navigation }) {
  // Linger here for a bit; if there's something to load, we can take advantage of it
  const LOAD_DELAY = 3000;
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    async function prepareMain() {
      try {
        await new Promise((resolve) => setTimeout(resolve, LOAD_DELAY));
      } catch (err) {
        console.log("There has been an error:", err);
      } finally {
        setReady(true);
      }
    }
    prepareMain();
  }, [isReady]);

  if (isReady) {
    // Alls good to go, move to Finale.
    navigation.navigate("Finale");
  }

  return (
    <View
      style={{ ...global.container, ...global.centerAlign, ...global.bg_light }}
    >
      <Image
        style={global.logo_holder}
        source={{
          uri: "https://static.vecteezy.com/system/resources/previews/006/900/704/original/green-tick-checkbox-illustration-isolated-on-white-background-free-vector.jpg",
        }}
        resizeMode={"stretch"}
        height={80}
        width={80}
      />
      <Text style={{ ...global.font_header, ...global.fc_basic }}>
        Email created!
      </Text>
      <Text style={{ ...global.font_generic, ...global.fc_basic }}>
        Please wait while we redirect you...
      </Text>
    </View>
  );
}
