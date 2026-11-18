import { StyleSheet, View } from 'react-native'
import React from 'react'
import Mainlayout from '../components/Mainlayout'
import Button from '../components/Button'

const HomeScreen = () => {
  return (
    <Mainlayout>
      <View style={styles.container} >


      <Button/>
      </View>
    </Mainlayout>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})