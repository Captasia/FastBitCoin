// import basic functions related to react / react-native.
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView, StatusBar } from "react-native";

// import redux
import { Provider } from "react-redux";
import store from "./src/redux/store.js";

// All GraphQL imports
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Navigation from "./src/page_navigation/_Navigation.js";

// i18n imports
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { I18nextProvider } from "react-i18next";

// i18n imports for translation
import enTranslations from "./src/locales/en.json"; // English translations
import krTranslations from "./src/locales/kr.json"; // Korean translations

// asset imports
import CustomSplashScreen from "./src/components/CustomSplashScreen.js";
import * as Font from 'expo-font'

// setting urql client
const API_URL =
  "https://bjsxxuwozdyhofdcguhi.hasura.eu-west-2.nhost.run/v1/graphql";
const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

// Initialize i18next with translations and configuration
i18next.use(initReactI18next).init({
  lng: "en", // Set the default language
  fallbackLng: "en", // Fallback language if the user's preferred language is not available
  resources: {
    en: {
      translation: enTranslations,
    },
    kr: {
      translation: krTranslations,
    },
    // Add more languages and translations as needed
  },
});

/**
 * App() handles pre-launch requirements, such as:
 * 1. SplashScreen animation
 * 2. pre-launch loads
 **/
export default function App() {
  const [appReady, setAppReady] = useState(false);
  // TODO: change LOAD_DELAY if we want to animate loading screen.
  const LOAD_DELAY = 2000;
  const fetchFonts = async () => {
    await Font.loadAsync({
      'Poppins': require('./assets/Fonts/Poppins-Regular.ttf'),
      'Poppins-Medium': require('./assets/Fonts/Poppins-Medium.ttf'),
      'Poppins-SemiBold': require('./assets/Fonts/Poppins-SemiBold.ttf'),
      'Poppins-Bold': require('./assets/Fonts/Poppins-Bold.ttf'),
    })
  }

  // run any preparation required for launching app
  useEffect(() => {
    async function prepareApp() {
      try {
        // Any API calls, or loading for initiation should be done here.
        await fetchFonts();
        await new Promise((resolve) => setTimeout(resolve, LOAD_DELAY));
      } catch (err) {
        console.log("There has been an error:", err);
      } finally {
        // app is ready to go
        setAppReady(true);
      }
    }
    prepareApp();
  }, []);

  if (!appReady) {
    return <CustomSplashScreen />
  }

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <I18nextProvider i18n={i18next}>
          {/* <StatusBar backgroundColor="blue" barStyle="light-content"/> */}
          {/* <SafeAreaView style={{ flex: 1 }}> */}
            <Navigation /> 
          {/* </SafeAreaView> */}
        </I18nextProvider>
      </Provider>
    </ApolloProvider>
  );
}
