import { View, Text } from 'react-native'
import React from 'react'
import Screen1 from './Screen1'



const Science = ({navigation}) => {
    let business="science"
  return (
    <View>
   
    <Screen1 navigation={navigation} source={business} />
    
  </View>
  )
}

export default Science