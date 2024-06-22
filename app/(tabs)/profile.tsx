import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import ProfileName from '@/components/Profile/Username'
import ProfileBio from '@/components/Profile/Bio'
import ProfilePicture from '@/components/Profile/ProfilePicture'
import ProfileWardrobe from '@/components/Profile/Wardrobe'
import React from 'react'
import ShowUserProfile from '@/components/Profile/UserProfile'
import EditProfile from '../editProfile'

export default function ProfilePage() {
  function handlepres() {
    return <EditProfile />
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {/* <ProfilePicture />
          <ProfileName />
          <ProfileBio /> */}
          <ShowUserProfile />
          <View style={styles.separator} />
          <View></View>

          <Button title="edit profile" onPress={handlepress} />
        </View>
        <ProfileWardrobe />

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  imageContainer: {
    flex: 1,

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
  profile: {
    textAlign: 'center',
  },
  bio: {
    textAlign: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator2: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
})
