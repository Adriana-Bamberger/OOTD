import { View } from 'react-native'
import EditProfile from '@/components/Profile/StyleProfile'

type Props = {
  userId: string
}

export default function UpdateProfile({ userId }: Props) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <EditProfile userId={userId} />
    </View>
  )
}
