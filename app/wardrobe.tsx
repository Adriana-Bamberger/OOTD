import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import AddClothingItem from '@/components/Wardrobe/AddItems'

export default function Wardrobe() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Text> WARDROBE </Text>
        <AddClothingItem userId={'vin'} />
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
    marginTop: 10,
  },
  image: {
    width: 320,
    height: 200,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
})
