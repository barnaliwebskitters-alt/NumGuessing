import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Pictures from '../theme/Pictures';


const Mainlayout = () => {
  return (
    <View style={styles.container}>
      <Image source={Pictures.background} />
    </View>
  )
}

export default Mainlayout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050404',
  }
})