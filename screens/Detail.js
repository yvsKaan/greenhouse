import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
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
        {/* ImageContainer */}


        {/* DetailBox */}
      <Text>tempeture: {detail.tempeture}</Text>
      <Text>humidity: {detail.humidity}</Text>
      <Text>water: {detail.water}</Text>
        {/* Setting button */}
      
      <Button 
      title="Setting" 
      onPress={()=> navigation.navigate('Setting')}/>
    </View>
  )
}