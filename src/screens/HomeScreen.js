import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Mainlayout from '../components/Mainlayout'
import Button from '../components/Button'
import Icons from '../theme/Icons'
import css from '../theme/css'
import color from '../theme/color'

const HomeScreen = (props) => {
  return (
    <Mainlayout>
      <View style={styles.container} >

        <View style={[css.mt7]}>
          <Image
            source={Icons.transparentLogo}
            style={{ width: '60%', height: 200, alignSelf: 'center' }}
            resizeMode="contain"
          />
        </View>

        <View style={[css.aic]}>
          <Text style={styles.title}>
            Can you guess the hidden number?
          </Text>
        </View>


        <View style={styles.ScroreCard}>

          {/* Trophy Icon */}
          <Image
            source={Icons.Trophy}
            style={styles.trophy}
            resizeMode="contain"
          />

          {/* Score Details */}
          <View style={styles.scoreContainer}>
            <Text style={styles.title}>
              Best Score
            </Text>

            <Text style={styles.score}>
              120
            </Text>
          </View>

        </View>

        {/* // With icon: */}
        <Button
          title="Play Game"
          icon={Icons.Play}
          onPress={() => props.navigation.navigate('SelectDifficulty')}
        />




        {/* Outline button: */}
        <Button
          title="Leaderboard"
          variant="outline"
          icon={Icons.chart}
          onPress={() => console.log('Leaderboard')}
        />
        <Button
          title="How to Play"
          variant="outline"
          icon={Icons.info}
          onPress={() => console.log('How to Play')}
        />

      </View>
    </Mainlayout>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ScroreCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.cardBackground,
    borderWidth: 1.5,
    borderColor: color.cardBorder,
    borderRadius: 22,
    paddingVertical: 16,
    paddingHorizontal: 25,
    marginHorizontal: 20,
    marginVertical: 25,
    minHeight: 110,
  },
  trophy: {
    width: 75,
    height: 75,
    marginRight: 22,
  },

  scoreContainer: {
    alignItems: 'flex-start',
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    color: color.white,
  },

  score: {
    fontSize: 38,
    fontWeight: 'bold',
    color: color.white,
  },
})