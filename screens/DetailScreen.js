import React, {useState, useEffect} from 'react'
import { View, ScrollView, Text, TouchableOpacity, Image, StyleSheet, Settings } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {db} from '../firebase-config/firebase';
import Header from '../components/Header';
import DetailBox from '../components/DetailBox';
import MiniDetailBox from '../components/MiniDetailBox';

export default function DetailScreen() {
  const navigation = useNavigation();
  
  const [data, setData] = useState([]);
  const [setting, setSetting] = useState([]);
  
  const [fan, setFan] = useState(false);
  const [light, setLight] = useState(false);
  const [water, setWater] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      db.ref("/Sera").once('value').then(snapshot => {
        const SeraData = snapshot.val();
        const lastItem = Object.values(Object.values(SeraData)[Object.keys(SeraData).length - 1]);
        setData(lastItem);
      });
      db.ref("/Ayarlar").once('value').then(snapshot => {
        const settingData = snapshot.val();
        setSetting(settingData);
      })
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View>
      <Header isHome= {false} title="Greenhouse"/>
      <Image 
          style={{width: '80%', height: '15%', marginHorizontal: '10%', borderRadius: 10}}
          source={{
            uri: 'https://media.istockphoto.com/photos/symmetrical-overview-of-lots-of-small-chrysanthemum-cuttings-in-long-picture-id670157616?k=20&m=670157616&s=612x612&w=0&h=R-M03gUQcrqaJYgTlZlw9fzNxt0jCWBKpV59BCXpfw8=',
          }}/>

      <DetailBox 
        title="Tempeture" 
        value={data[1]} 
        minValue={setting.minTempeture} 
        maxValue={setting.maxTempeture}/>
      <DetailBox 
        title="Humidity" 
        value={data[0]} 
        minValue={setting.minHumidity} 
        maxValue={setting.maxHumidity}/>
      <DetailBox 
        title="Moisture" 
        value={data[2]} 
        minValue={setting.minMoisture} 
        maxValue={setting.maxMoisture}/>
      <MiniDetailBox 
        waterLevel={setting.minWaterLevel} 
        fanState={setting.fanState} 
        lightState={setting.lightState} 
        waterState={setting.waterState}
      />

      <TouchableOpacity style={styles.settingBtn}
        onPress={() => navigation.navigate('Setting')}>
          <Text style={styles.settingBtnText}>Setting</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  settingBtn: {
    width: '60%',
    height: '5%',
    marginTop: 20,
    marginHorizontal: '20%',
    backgroundColor: '#25C050',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  }, 
  settingBtnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '300',
  }
});