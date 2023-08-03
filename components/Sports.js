import { View, Text } from 'react-native'
import React from 'react'
import Screen1 from './Screen1'



const Sports = ({navigation}) => {
    let business="sports"
  return (
    <View>
   
    <Screen1 navigation={navigation} source={business} />
    
  </View>
  )
}

export default Sports