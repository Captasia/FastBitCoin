// import basic functions related to react / react-native.
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native";

// import splash screen from expo
import * as SplashScreen from "expo-splash-screen";

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

// setting urql client
const API_URL =
  "https://bjsxxuwozdyhofdcguhi.hasura.eu-west-2.nhost.run/v1/graphql";
const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

// stop SplashScreen from hiding
SplashScreen.preventAutoHideAsync();

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
  const LOAD_DELAY = 0;

  // run any preparation required for launching app
  useEffect(() => {
    console.log("running useEffect -> prepareApp()");
    async function prepareApp() {
      try {
        // Any API calls, or loading for initiation should be done here.
        await new Promise((resolve) => setTimeout(resolve, LOAD_DELAY));
      } catch (e) {
        console.log("There has been an error:");
        console.log(e);
      } finally {
        // app is ready to go
        setAppReady(true);
      }
    }
    prepareApp();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    console.log("running onLayoutRootView...", appReady);
    if (appReady) {
      await SplashScreen.hideAsync();
    }
  }, [appReady]);

  if (!appReady) {
    return null;
  }

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <I18nextProvider i18n={i18next}>
          <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
            <Navigation />
          </SafeAreaView>
        </I18nextProvider>
      </Provider>
    </ApolloProvider>
  );
}
