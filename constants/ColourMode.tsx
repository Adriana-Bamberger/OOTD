import {
  Text,
  StyleSheet,
  View,
  useColorScheme,
  Switch,
  Button,
} from 'react-native'
import { StatusBar } from 'expo-status-bar' // Automatically switches bar style based on theme.

export default function SetTheme() {
  const colorScheme = useColorScheme()

  const themeTextStyle =
    colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText
  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer

  return (
    <View style={[styles.container, themeContainerStyle]}>
      {/* <Button title="Change theme" onPress={() => setColourScheme}>Change theme</Button> */}
      <Text style={[styles.text, themeTextStyle]}>
        Color scheme: {colorScheme}
      </Text>
      <StatusBar />
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
    fontSize: 20,
  },
  lightContainer: {
    backgroundColor: '#d0d0c0',
  },
  darkContainer: {
    backgroundColor: '#242c40',
  },
  lightThemeText: {
    color: '#242c40',
  },
  darkThemeText: {
    color: '#d0d0c0',
  },
})
