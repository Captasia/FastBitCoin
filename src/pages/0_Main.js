import React, { useState } from "react";
import { Text, View } from "react-native";

// TODO: Look into expo constants to get OS specific changes
// import Constants from 'expo-constants';

// Import styling + custom components
import global from "../style/global.js";
import Button from "../components/Button.js";
// import for DropDownPicker
import DropDownPicker from "react-native-dropdown-picker";

// import AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

// import i18n
import 'intl-pluralrules';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { useSelector } from "react-redux";

export default function Main({ navigation }) {
  console.log("rendering Main");
  const variables = useSelector((state) => {
    console.log(state.object);
    return state.object});
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  // TODO: think about loading pre-saved language.
  const [language, setLanguage] = useState('');


  const handleLanguageChange = (language) => {
    i18next.changeLanguage(language).then(() => storeLanguage(language));
  }
  const storeLanguage = async (language) => {
    try {
      await AsyncStorage.setItem('language', language);
      console.log("language stored!");
    } catch (error) {
      console.log("there was a problem setting the language:", error);
    }
  }

  return (
    <View style={{ ...global.container, ...global.bg_dark }}>
      <View style={{...global.container, ...global.centerAlign}}>
        <View style={{...global.logo_holder, ...global.bg_placeholder}} />
      </View>
      <View style={{...global.body}}>
        <View style={{...global.body, ...global.centerAlign}}>
          <Text style={{...global.font_header, ...global.fc_orange}}>{t('selectYourLanguage')}</Text>
        </View>
        <View style={{...global.body}}>
          <DropDownPicker
            open={open}
            value={language}
            items={[
              { label: "English", value: "en" },
              { label: "Korean", value: "kr" },
            ]}
            setOpen={setOpen}
            onSelectItem={(item) => {
              setLanguage(item.value);
              handleLanguageChange(item.value);
            }}
            defaultIndex={0}
            theme="DARK"
          />
        </View>
        <View style={{...global.body}}>
          <Button
            text={t("continue")}
            onPress={() => navigation.navigate("Enter your email address")}
          />
        </View>
      </View>
    </View>
  );
}
