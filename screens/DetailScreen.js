import React from 'react'
import { View, ScrollView, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import Header from '../components/Header';
import DetailBox from '../components/DetailBox';

export default function DetailScreen({route}) {
  const navigation = useNavigation();
  const { detail } = route.params;
  const { fanState } = route.params;
  return (
    <View>
      <Header isHome= {false} title="Greenhouse"/>
      <Image 
      style={styles.imageContainer}
      source={{
        uri: 'https://media.istockphoto.com/photos/symmetrical-overview-of-lots-of-small-chrysanthemum-cuttings-in-long-picture-id670157616?k=20&m=670157616&s=612x612&w=0&h=R-M03gUQcrqaJYgTlZlw9fzNxt0jCWBKpV59BCXpfw8=',
      }}/> 

      <View style={{marginHorizontal: 20, height: '60%', justifyContent: 'space-between'}}>
          <DetailBox title="Tempeture" value={detail[1]}/>
          <DetailBox title="Humidity" value={detail[0]}/>
          <DetailBox title="Moisture" value={detail[2]}/>
        <View style={styles.detailBox}>
            <DetailBox title="Water Level" value={detail[3]}/>
            <DetailBox title="Fan" value={fanState ? "On" : "Off"}/>
        </View>

        <TouchableOpacity style={styles.settingBtn}
        onPress={()=> navigation.navigate('Setting')}>
          <Text style={{color:'white', fontSize: 18, fontWeight: '300'}}>Setting</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    width: '80%',
    height: '20%',
    marginLeft: '10%',
    borderRadius: 5
  },
  detailBox:{
    flex: 1,
    flexDirection: 'row',
    width: '45%',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    marginBottom: 20,
  },
  settingBtn: {
    width: '80%',
    height: '10%',
    marginHorizontal: '10%',
    backgroundColor: '#25C050',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
});