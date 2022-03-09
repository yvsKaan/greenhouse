import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

export default function Detail() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Header />
      <Text onPress={()=> navigation.goBack()}>Detail</Text>
    </SafeAreaView>
  )
}