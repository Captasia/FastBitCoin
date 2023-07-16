import React from 'react';
import { View, Image } from 'react-native';

const CustomSplashScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#101820" }}>
      <Image source={require('../../assets/splashIcon.png')} style={{ width: 101, height: 128 }} />
    </View>
  );
};

export default CustomSplashScreen;