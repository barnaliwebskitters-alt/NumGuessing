import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Pictures from '../theme/Pictures'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
     <Image source={Pictures.background}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#050404',
    }
})