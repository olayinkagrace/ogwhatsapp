import React from 'react'
import { Text, View, Button } from 'react-native'

const HomeScreen = ({navigation}) => {
  return (
   <View>
    <Text>HomeScreen</Text>
    <Button title={'ChatScreen'} onPress={() => navigation.navigate('Chat')} />
   </View>
  )
}

export default HomeScreen
