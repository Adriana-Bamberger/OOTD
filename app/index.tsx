import React, { useEffect, useRef, useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Animated,
  useColorScheme,
  Switch,
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import CustomButton from '@/components/CustomButton'
import { useFonts } from 'expo-font' // Importing expo-font for custom fonts
import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
  useTheme,
} from '@react-navigation/native'

const logo = require('../assets/images/ootd2.png')

export default function App() {
  let [fontsLoaded] = useFonts({
    'TYPOGRAPH-PRO-Semi-Bold': require('../assets/fonts/TYPOGRAPH-PRO-Semi-Bold.ttf'),
  })

  // Using useRef to create an Animated.Value
  const fadeAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    // Animation to increase opacity over 1000ms
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3500,
      useNativeDriver: true,
    }).start()
  }, [])

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={[styles.container]}>
      <View style={[styles.imageContainer]}>
        {/* Use Animated.Text for the text that will be animated */}
        <Animated.Text style={[styles.text, { opacity: fadeAnim }]}>
          OOTD.
        </Animated.Text>
      </View>
      <View style={styles.footerContainer}>
        <CustomButton label="LOGIN" theme="login" />
        <CustomButton label="SIGNUP " theme="temp" />
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'TYPOGRAPH-PRO-Semi-Bold',
    fontSize: 80,
    marginTop: 250,
    paddingTop: 20,
  },
  lightContainer: {
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#242c40',
  },
  lightThemeText: {
    color: '#000',
  },
  darkThemeText: {
    color: '#d0d0c0',
  },
  imageContainer: {
    flex: 1,
    marginTop: 20,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
    marginTop: -350,
  },
})
