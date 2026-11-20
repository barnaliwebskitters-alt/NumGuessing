
import React from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  Image,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import color from '../theme/color';
import Fonts from '../theme/Fonts';



const Button = ({
  title,
  onPress,
  icon,
  variant = 'primary',
  disabled = false,
  loading = false,
  style,
  textStyle,
}) => {
  const isPrimary = variant === 'primary';

  const content = loading ? (
    <ActivityIndicator color={color.white} />
  ) : (
    <>
      {icon && <Image style={styles.icon} source={icon} />}

      <Text style={[styles.buttonText, textStyle]}>
        {title}
      </Text>
    </>
  );

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={({ pressed }) => [
        styles.buttonWrapper,
        !isPrimary && styles.outlineButton,
        pressed && styles.pressed,
        disabled && styles.disabled,
        style,
      ]}
    >
      {isPrimary ? (
        <LinearGradient
          colors={[color.lightPurple, color.darkPurple]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.buttonContent}
        >
          {content}
        </LinearGradient>
      ) : (
        <View style={styles.buttonContent}>
          {content}
        </View>
      )}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonWrapper: {
    width: '80%',
    minHeight: 55,
    borderRadius: 30,
    overflow: 'hidden',
    alignSelf: 'center',
    marginVertical: 10,
  },

  buttonContent: {
    flex: 1,
    minHeight: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    gap: 8,
  },

  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: color.buttonBorder,
  },

  buttonText: {
    color: color.white,
    fontSize: 16,
    fontFamily: Fonts.bold,
    textAlign: 'center',
  },

  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 20,
    tintColor: color.white,
  },

  pressed: {
    opacity: 0.8,
  },

  disabled: {
    opacity: 0.5,
  },
});
