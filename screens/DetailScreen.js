import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import Header from '../components/Header';
import DetailBox from '../components/DetailBox';

import Water from '../assets/icons/icon-water.png';
import Light from '../assets/icons/icon-light.png';
import Fan from '../assets/icons/icon-fan.png';

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
        <View style={{height:'50%', width: '90%', marginLeft: '5%'}}>
          <DetailBox title="Tempeture" value={detail.tempeture} />
          <DetailBox title="Humidity" value={detail.humidity}/>
          {/* water, fan, light */}
          <View style={styles.detailBox}>
            <DetailBox icon={Water} title="Water" value={detail.water}/>
            <DetailBox icon={Light} title="Light" value={detail.light}/>
            <DetailBox icon={Fan} title="Fan" value={detail.fan}/>
          </View>
        </View>

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
    height: '20%',
    marginLeft: '10%'
  },
  detailBox:{
    flex: 1,
    flexDirection: 'row',
    width: '30%',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  settingBtn: {
    width: '80%',
    height: '5%',
    marginLeft: '10%',
    backgroundColor: '#25C050',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
});