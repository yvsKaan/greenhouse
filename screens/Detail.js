import React from 'react'
import { View, Text } from 'react-native'
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

export default function Detail({ route }) {
  const navigation = useNavigation();
  const { detail } = route.params;
  return (
    <View>
      <Header isHome= {false} title= {detail.name}/>
      
      {/* Content */}
      <Text>{detail.name}</Text>
      <Text>tempeture: {detail.tempeture}</Text>
      <Text>humidity: {detail.humidity}</Text>
      <Text>water: {detail.water}</Text>
    </View>
  )
}