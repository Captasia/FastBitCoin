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

export default function Main({ navigation }) {
  
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState('');

  const handleLanguageChange = (language) => {
    i18next.changeLanguage(language).then(() => storeLanguage(language));
  }

  const storeLanguage = async (language) => {
    try {
      await AsyncStorage.setItem('language', language);
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
            defaultIndex={0}
            placeholder="Select a language"
            textStyle={{...global.font_generic}}
            containerStyle={{ borderWidth: 1, borderColor: "white", borderRadius: 3}}
            dropDownContainerStyle={{...global.bg_dark, borderWidth: 1, borderColor: "white", borderRadius: 3}}
            style={{...global.bg_dark }}
            items={[
              { label: "English", value: "en" },
              { label: "Korean", value: "kr" },
            ]}
            setOpen={setOpen}
            onSelectItem={(item) => {
              setLanguage(item.value);
              handleLanguageChange(item.value);
            }}
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
