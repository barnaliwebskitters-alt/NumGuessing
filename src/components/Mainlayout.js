import { ImageBackground, StyleSheet } from 'react-native'
import React from 'react';
import Pictures from '../theme/Pictures';


const Mainlayout = ({ children, style }) => {
  return (
    <ImageBackground
      source={Pictures.background}
      style={[styles.container, style]}
      resizeMode="cover">
      {children}
    </ImageBackground>
  )
}

export default Mainlayout

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})