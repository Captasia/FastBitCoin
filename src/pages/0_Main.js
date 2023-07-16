import React, { useState } from "react";
import { Text, View } from "react-native";

// TODO: Look into expo constants to get OS specific changes
// import Constants from 'expo-constants';

// Import styling + custom components
import styles from "../style/styles.js";
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
  console.log("rendering Main");
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
    <View style={{ ...styles.container, ...styles.main_darkbg }}>
      <View style={styles.main_header}>
        <View style={styles.main_logo} />
      </View>
      <View style={styles.body}>
        <View style={{...styles.componentHolder, ...styles.centerAlign}}>
          <Text style={styles.dropdownHeaderFont}>{t('selectYourLanguage')}</Text>
        </View>
        <View style={styles.componentHolder}>
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
        <View style={styles.componentHolder}>
          <Button
            text={t("continue")}
            onPress={() => navigation.navigate("Enter your email address")}
          />
        </View>
      </View>
    </View>
  );
}
