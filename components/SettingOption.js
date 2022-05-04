import React, {useState, useEffect} from 'react'
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import {db} from '../firebase-config/firebase'
import {Icon, ListItem, Slider} from 'react-native-elements';

export default function SettingOption() {
    const [modalVisible, setModalVisible] = useState(false);
    const [currentSetting, setCurrentSetting] = useState(0);
    const [modalSetting, setModalSetting] = useState("");
    const [maxSliderValue, setMaxSliderValue] = useState(500);
    const [minSliderValue, setMinSliderValue] = useState(0);
    const [data, setData] = useState([]);
  
    useEffect(() => {
        db.ref("/Ayarlar").once('value', snapshot => {
        const veri = snapshot.val();
        setData(veri);
        })
    }, [currentSetting]);

    const handleSettingChange = (modalSettingName, modalVisibleSetting) => {
        setModalVisible(modalVisibleSetting);
        setModalSetting(modalSettingName);
        setCurrentSetting(data[modalSettingName]);

        if(modalSettingName === "maxTempeture"){
          setMaxSliderValue(60);
          setMinSliderValue(data.minTempeture + 1);
        }else if(modalSettingName === "minTempeture"){
          setMaxSliderValue(data.maxTempeture - 1 );
          setMinSliderValue(0);
        }else if(modalSettingName === "maxHumidity"){
          setMaxSliderValue(100);
          setMinSliderValue(data.minHumidity + 1);
        }else if(modalSettingName === "minHumidity"){
          setMaxSliderValue(data.maxHumidity - 1 );
          setMinSliderValue(0);
        }
    }

    const handleInputChange = (inputName, value) => {
        db.ref('/Ayarlar/' + inputName).set(value);
        setCurrentSetting(value);
    }
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.modalContainer}>
            <Text style={styles.sliderText}>
              {currentSetting}
            </Text>
            <Slider
              value={data[modalSetting]}
              onValueChange={value => handleInputChange(modalSetting, value)}
              step={1}
              maximumValue={maxSliderValue}
              minimumValue={minSliderValue}
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

      <ListItem onPress={() => handleSettingChange("maxTempeture", !modalVisible)} bottomDivider>
        <ListItem.Content>
          <ListItem.Title>Maximum Tempeture</ListItem.Title>
          <ListItem.Subtitle>{data.maxTempeture}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <ListItem onPress={() => handleSettingChange("minTempeture", !modalVisible)} bottomDivider>
        <ListItem.Content>
          <ListItem.Title>Minimum Tempeture</ListItem.Title>
          <ListItem.Subtitle>{data.minTempeture}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <ListItem onPress={() => handleSettingChange("maxHumidity", !modalVisible)} bottomDivider>
        <ListItem.Content>
          <ListItem.Title>Maximum Humidity</ListItem.Title>
          <ListItem.Subtitle>{data.maxHumidity}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </View>
  )
}

const styles = StyleSheet.create({
    modalView: {
      width: '90%', 
      height: '100%',
      marginLeft: '5%',
      justifyContent: 'center',
    },
    modalContainer: {
      width: '100%',
      height: 300,
      padding: 20,
      backgroundColor: '#eaeaea',
      borderRadius: 20,
      justifyContent: 'center',
    },
    sliderText: {
      textAlign: 'center',
      fontSize: 24,
      margin: 20,
    },
    buttonClose: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    textStyle: {
      paddingHorizontal: 50,
      paddingVertical: 10,
      borderRadius: 5,
      backgroundColor: '#25C050',
      color: '#fff',
    },
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