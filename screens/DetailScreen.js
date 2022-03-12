import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

export default function DetailScreen({ route }) {
  const navigation = useNavigation();
  const { detail } = route.params;
  return (
    <View>
      <Header isHome= {false} title= {detail.name}/>
      
      {/* Content */}
      <Text style={styles.name}>{detail.name}</Text>
        {/* ImageContainer */}
        <Image 
        style={styles.imageContainer}
        source={{
          uri: 'https://media.istockphoto.com/photos/symmetrical-overview-of-lots-of-small-chrysanthemum-cuttings-in-long-picture-id670157616?k=20&m=670157616&s=612x612&w=0&h=R-M03gUQcrqaJYgTlZlw9fzNxt0jCWBKpV59BCXpfw8=',
        }} /> 

        {/* DetailBox */}
      <Text>tempeture: {detail.tempeture}</Text>
      <Text>humidity: {detail.humidity}</Text>
      <Text>water: {detail.water}</Text>
        {/* Setting button */}
      
      <TouchableOpacity style={styles.settingBtn}
      onPress={()=> navigation.navigate('Setting', {
        settingDetail: detail, 
      })}>
        <Text style={{color:'white', fontSize: 18, fontWeight: '300'}}>Setting</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  name: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '500',
    color: '#25C050',
    textTransform: 'uppercase',
    marginBottom: 10
  },
  imageContainer: {
    width: '80%',
    height: 150,
    marginLeft: '10%'
  },
  settingBtn: {
    width: '60%',
    height: 50,
    marginLeft: '20%',
    backgroundColor: '#25C050',
    alignItems: 'center',
    justifyContent: 'center'
  }
});