import React, {useState, useEffect} from 'react'
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import {db} from '../firebase-config/firebase'
import {Icon, ListItem, Slider} from 'react-native-elements';
import Header from '../components/Header';

export default function SettingScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalSetting, setModalSetting] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [data, setData] = useState([]);
  
  useEffect(()=>{
    db.ref("/Ayarlar").once('value', snapshot => {
      const veri = snapshot.val();
      setData(veri);
    })
  },[modalVisible]);

  const handleSettingChange = (modalSettingName, modalVisibleSetting) => {
    setModalVisible(modalVisibleSetting);
    setModalSetting(modalSettingName);
  }

  const handleInputChange = (inputName, value) => {
    db.ref('/Ayarlar/' + inputName).set(value);
  }
  
  return (
    <View>
      {/* form with details */}
      <Header isHome= {false} title="Settıngs" />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Text>{modalSetting === "maxSicaklik" ? data.maxSicaklik : 0}</Text>
          <Slider
            value={modalSetting === "maxSicaklik" ? data.maxSicaklik : modalSetting === "minSicaklik" ? data.minSicaklik : 0}
            onValueChange={value => handleInputChange(modalSetting, value)}
            step={1}
            maximumValue={50}
            minimumValue={0}
          />
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


      <ListItem.Accordion
        content={
          <>
            <ListItem.Content>
              <ListItem.Title>Tempeture</ListItem.Title>
            </ListItem.Content>
          </>
        }
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}
      >
        <ListItem onPress={() => handleSettingChange("maxSicaklik", !modalVisible)} bottomDivider>
          <ListItem.Content>
            <ListItem.Title>Maximum Tempeture</ListItem.Title>
            <ListItem.Subtitle>{data.maxSicaklik}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem onPress={() => handleSettingChange("minSicaklik", !modalVisible)} bottomDivider>
          <ListItem.Content>
            <ListItem.Title>Minimum Tempeture</ListItem.Title>
            <ListItem.Subtitle>{data.minSicaklik}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </ListItem.Accordion>


      
      <View style={styles.settingBlock}>
       <Text>{data.maxSicaklik} + {data.minSicaklik}</Text>
      </View>
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