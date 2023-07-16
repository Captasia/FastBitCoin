import React, { useCallback, useEffect, useState }  from "react";
import { Text, View, Image } from "react-native";

import styles from "../style/styles.js";

export default function Redirect({navigation}) {
  // Linger here for a bit; if there's something to load, we can take advantage of it
  const LOAD_DELAY = 3000;
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    console.log("running useEffect -> prepareApp()");
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

  if (isReady){
    // Alls good to go, move to Finale.
    navigation.navigate("Finale");
  }

  return (
      <View style={{...styles.componentHolder, ...styles.centerAlign}}>
          <Image
            style={styles.roundImg}
            source={{
              uri: "https://static.vecteezy.com/system/resources/previews/006/900/704/original/green-tick-checkbox-illustration-isolated-on-white-background-free-vector.jpg",
            }}
              resizeMode={"stretch"}
            height={80}
            width={80}
          />
        <Text> Email created! </Text>
        <Text> Please wait while we redirect you... </Text>
      </View>
  );
}
