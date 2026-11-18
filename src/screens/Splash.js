
import React, { useEffect } from 'react';
import {
  Image,
  ImageBackground,
} from 'react-native';

import Icons from '../theme/Icons';
import Pictures from '../theme/Pictures';
import css from '../theme/css';

const Splash = ({ navigation }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation?.replace('HomeScreen');
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground
      source={Pictures.background}
      style={[css.aic, css.jcc, { flex: 1 }]}
      resizeMode="cover">

      <Image
        source={Icons.logo}
        style={{ width: '60%', height: 200 }}
        resizeMode="contain"
      />

    </ImageBackground>
  );
};

export default Splash;
