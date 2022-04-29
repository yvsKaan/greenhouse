import React, {useState, useEffect} from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import {db} from '../firebase-config/firebase'
import {Icon} from 'react-native-elements';
import Header from '../components/Header';

export default function SettingScreen() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    const fetchPost = async () => {
      db.ref("/Ayarlar").once('value', snapshot => {
        const veri = snapshot.val();
        setData(veri);
      })
     }
     fetchPost();
  }, [])
  const handleInputChange = (inputName, value) => {
    setData({
      [inputName]: value
    });
  }
  return (
    <View>
      {/* form with details */}
      <Header isHome= {false} title="Settıngs" />
      <View style={styles.settingBlock}>
        <View style={styles.settingBlockTitle}>
          <Icon style={{marginRight: 10}} name="temperature-high" type="font-awesome-5" size={24}/>
          <Text style={styles.settingTitle}>Tempeture</Text>
        </View>
        <View style={styles.settingInfo}>
          <Text style={styles.settingInfoTitle}>Max:</Text>
          <TextInput
            style={styles.input}
            onChangeText={value => handleInputChange('maxSicaklik', value)}
            value={data.maxSicaklik.toString()}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.settingInfo}>
          <Text style={styles.settingInfoTitle}>Min:</Text>
          <TextInput
            style={styles.input}
            onChangeText={value => handleInputChange('minSicaklik', value)}
            value={data.minSicaklik.toString()}
            keyboardType="numeric"
          />
        </View>
      </View>


      <TouchableOpacity style={styles.settingBtn}
        onPress={ e => db.ref('/Ayarlar/maxSicaklik').set(35)}>
          <Text style={{color:'black', fontSize: 18, fontWeight: '300'}}>Ok</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  settingBlock: {
    flexDirection: 'column',
    width: '100%',
    padding: 20,
    borderRadius: 10,
  },
  settingBlockTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 18,
    paddingBottom: 5,
    marginBottom: 10,
    borderBottomWidth: 2,
    borderColor: '#25C050',
  }, 
  settingTitle: {
    fontSize: 18,
  }, 
  settingInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },
  settingInfoTitle: {
    fontSize: 16,
  }
});