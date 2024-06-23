import {
  StyleSheet,
  Text,
  View,
  Animated,
  useColorScheme,
  Switch,
} from 'react-native'
import { useFonts } from 'expo-font' // Importing expo-font for custom fonts
import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
  useTheme,
} from '@react-navigation/native'

export function DarkMode() {
  const [isDark, setIsDark] = useState(false)

  const themeTextStyle = !isDark ? styles.lightThemeText : styles.darkThemeText
  const themeContainerStyle = !isDark
    ? styles.lightContainer
    : styles.darkContainer
  return (
    <Switch value={isDark} onValueChange={(value) => setIsDark(value)}></Switch>
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

import React, { useEffect, useRef, useState } from 'react'
