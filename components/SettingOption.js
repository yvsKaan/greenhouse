import React, {useState, useEffect} from 'react'
import { View, Text, ScrollView, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import {db} from '../firebase-config/firebase'
import {Icon, ListItem, Slider, Switch } from 'react-native-elements';

export default function SettingOption() {
    const [modalVisible, setModalVisible] = useState(false);
    
    const [currentSetting, setCurrentSetting] = useState(0);
    const [modalSetting, setModalSetting] = useState("");
    
    const [maxSliderValue, setMaxSliderValue] = useState(500);
    const [minSliderValue, setMinSliderValue] = useState(0);
    
    const [data, setData] = useState([]);
    const [dataRefresh, setDataRefresh] = useState();
  
    useEffect(() => {
        db.ref("/Settings").once('value', snapshot => {
        const veri = snapshot.val();
        setData(veri);
        setDataRefresh(false);
      })
    }, [dataRefresh]);

    const handleSettingChange = (modalSettingName, modalVisibleSetting) => {
        setModalVisible(modalVisibleSetting);
        setModalSetting(modalSettingName);
        setCurrentSetting(data[modalSettingName] || 0);

        if(modalSettingName === "maxTempeture"){
          setMaxSliderValue(60);
          setMinSliderValue(data.minTempeture + 1 || 0);
        }else if(modalSettingName === "minTempeture"){
          setMaxSliderValue(data.maxTempeture - 1 || 60);
          setMinSliderValue(0);
        }else if(modalSettingName === "maxHumidity"){
          setMaxSliderValue(100);
          setMinSliderValue(data.minHumidity + 1 || 0);
        }else if(modalSettingName === "minHumidity"){
          setMaxSliderValue(data.maxHumidity - 1 || 100);
          setMinSliderValue(0);
        }else if(modalSettingName === "maxMoisture"){
          setMaxSliderValue(100);
          setMinSliderValue(data.minMoisture + 1 || 0);
        }else if(modalSettingName === "minMoisture"){
          setMaxSliderValue(data.maxMoisture - 1 || 100);
          setMinSliderValue(0);
        }else if(modalSettingName === "minWaterLevel"){
          setMaxSliderValue(100);
          setMinSliderValue(0);
        }else if(modalSettingName === "dailyRecord"){
          setMaxSliderValue(24);
          setMinSliderValue(0);
        }
    }

    const handleInputChange = (inputName, value) => {
        db.ref('/Settings/' + inputName).set(value);
        if(inputName === "userPermission" && value === "Off"){
          db.ref('/Settings/fanState').set("Off");
          db.ref('/Settings/lightState').set("Off");
          db.ref('/Settings/waterState').set("Off");
        }
        if (typeof value === "number"){
          setModalVisible(!modalVisible);
        }
        setDataRefresh(true);
    }
    
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, height: '110%'}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.modalContainer}>
            <Text style={styles.sliderText}>
              {currentSetting}
              <Text style={styles.sliderText}>
              {
                modalSetting === "maxTempeture" ? "C" :
                modalSetting === "minTempeture" ? "C" :  
                modalSetting === "dailyRecord" ? " Times" : "%"
              }
            </Text>
            </Text>
            <Slider
              value={data[modalSetting] || 0}
              onValueChange={value => setCurrentSetting(value)}
              step={1}
              maximumValue={maxSliderValue}
              minimumValue={minSliderValue}
            />
              <TouchableOpacity
                style={styles.buttonClose}
                onPress={() => handleInputChange(modalSetting, currentSetting)}
              >
                <Text style={styles.textStyle}>Confirm</Text>
              </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <ListItem onPress={() => { data.userPermission === "Off" ? 
        handleSettingChange("maxTempeture", !modalVisible) : 
        alert("Automation isn't active.")}
      } bottomDivider>
        <ListItem.Content style={styles.listItemContent}>
          <View style={styles.listItem}>
            <Icon name="temperature-high" color="red" type="font-awesome-5" size={24}/>
            <Text style={styles.listItemText}>Maximum Tempeture</Text>     
          </View>
          <View>
            <Text style={styles.listItemSubtitle}>
              {data.maxTempeture || 0}
            </Text>
          </View>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>

      <ListItem onPress={() => { data.userPermission === "Off" ? 
        handleSettingChange("minTempeture", !modalVisible) : 
        alert("Automation isn't active.")}
      } bottomDivider>
        <ListItem.Content style={styles.listItemContent}>
          <View style={styles.listItem}>
            <Icon name="temperature-low" color="blue" type="font-awesome-5" size={24}/>
            <Text style={styles.listItemText}>Minimum Tempeture</Text>           
          </View>
          <View>
            <Text style={styles.listItemSubtitle}>
              {data.minTempeture || 0}
            </Text>
          </View>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>

      <ListItem onPress={() => { data.userPermission === "Off" ? 
        handleSettingChange("maxHumidity", !modalVisible) : 
        alert("Automation isn't active.")}
      } bottomDivider>
        <ListItem.Content style={styles.listItemContent}>
          <View style={styles.listItem}>
            <Icon name="cloud-rain" color="red" type="font-awesome-5" size={24}/>
            <Text style={styles.listItemText}>Maximum Humidity</Text>     
          </View>
          <View>
            <Text style={styles.listItemSubtitle}>
              {data.maxHumidity || 0}
            </Text>
          </View>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>

      <ListItem onPress={() => { data.userPermission === "Off" ? 
        handleSettingChange("minHumidity", !modalVisible) : 
        alert("Automation isn't active.")}
      } bottomDivider>
        <ListItem.Content style={styles.listItemContent}>
          <View style={styles.listItem}>
            <Icon name="cloud-rain" color="blue" type="font-awesome-5" size={24}/>
            <Text style={styles.listItemText}>Minimum Humidity</Text>     
          </View>
          <View>
            <Text style={styles.listItemSubtitle}>
              {data.minHumidity || 0}
            </Text>
          </View>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>

      <ListItem onPress={() => { data.userPermission === "Off" ? 
        handleSettingChange("maxMoisture", !modalVisible) : 
        alert("Automation isn't active.")}
      } bottomDivider>
        <ListItem.Content style={styles.listItemContent}>
          <View style={styles.listItem}>
            <Icon name="water-percent" color="red" type="material-community" size={24}/>
            <Text style={styles.listItemText}>Maximum Moisture</Text>     
          </View>
          <View>
            <Text style={styles.listItemSubtitle}>
              {data.maxMoisture || 0}
            </Text>
          </View>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>

      <ListItem onPress={() => { data.userPermission === "Off" ? 
        handleSettingChange("minMoisture", !modalVisible) : 
        alert("Automation isn't active.")}
      } bottomDivider>
        <ListItem.Content style={styles.listItemContent}>
          <View style={styles.listItem}>
          <Icon name="water-percent" color="blue" type="material-community" size={24}/>
            <Text style={styles.listItemText}>Minimum Moisture</Text>     
          </View>
          <View>
            <Text style={styles.listItemSubtitle}>
              {data.minMoisture || 0}
            </Text>
          </View>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>

      <ListItem onPress={() => { data.userPermission === "Off" ? 
        handleSettingChange("minWaterLevel", !modalVisible) : 
        alert("Automation isn't active.")
        }} bottomDivider>
        <ListItem.Content style={styles.listItemContent}>
          <View style={styles.listItem}>
            <Icon name="water" color="blue" type="material-community" size={24}/>
            <Text style={styles.listItemText}>Minimum Water Level</Text>     
          </View>
          <View>
            <Text style={styles.listItemSubtitle}>
              {data.minWaterLevel || 0}
            </Text>
          </View>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>

      <ListItem onPress={() => { data.userPermission === "Off" ? 
        handleSettingChange("dailyRecord", !modalVisible) :
        alert("Automation isn't active.")
      }} bottomDivider>
        <ListItem.Content style={styles.listItemContent}>
          <View style={styles.listItem}>
            <Icon name="database" color="black" type="font-awesome-5" size={24}/>
            <Text style={styles.listItemText}>Daily Data Record</Text>     
          </View>
          <View>
            <Text style={styles.listItemSubtitle}>
              {data.dailyRecord || 0}
            </Text>
          </View>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>

      <ListItem bottomDivider>
        <ListItem.Content style={styles.listItemContent}>
          <View style={styles.listItem}>
            <Icon name="water" color="black" type="material-community" size={24}/>
            <Text style={styles.listItemText}>Water Current State</Text>     
          </View>
          <View>
            <Text style={styles.listItemSubtitle}>
              <Switch 
                value={data.waterState === "On" ? true : false} 
                onValueChange={value => {
                  data.userPermission === "On" ? handleInputChange("waterState",  value ? "On" : "Off") : 
                  alert("Manual use not active.")}
                } />
            </Text>
          </View>
        </ListItem.Content>
      </ListItem>

      <ListItem bottomDivider>
        <ListItem.Content style={styles.listItemContent}>
          <View style={styles.listItem}>
            <Icon name="fan" color="black" type="font-awesome-5" size={24}/>
            <Text style={styles.listItemText}>Fan Current State</Text>     
          </View>
          <View>
            <Text style={styles.listItemSubtitle}>
              <Switch 
                value={data.fanState  === "On" ? true : false} 
                onValueChange={value => {
                  data.userPermission === "On" ? handleInputChange("fanState",  value ? "On" : "Off") : 
                  alert("Manual use not active.")}
                } />
            </Text>
          </View>
        </ListItem.Content>
      </ListItem>

      <ListItem bottomDivider>
        <ListItem.Content style={styles.listItemContent}>
          <View style={styles.listItem}>
            <Icon name="lightbulb" color="black" type="font-awesome-5" size={24}/>
            <Text style={styles.listItemText}>Light Current State</Text>     
          </View>
          <View>
            <Text style={styles.listItemSubtitle}>
              <Switch
                value={data.lightState  === "On" ? true : false} 
                onValueChange={value => {
                  data.userPermission === "On" ? handleInputChange("lightState",  value ? "On" : "Off") : 
                  alert("Manual use not active.")}
                } />
            </Text>
          </View>
        </ListItem.Content>
      </ListItem>

      <ListItem bottomDivider>
        <ListItem.Content style={styles.listItemContent}>
          <View style={styles.listItem}>
            <Icon name="user-plus" color="black" type="font-awesome-5" size={24}/>
            <Text style={styles.listItemText}>User Manual Control</Text>     
          </View>
          <View>
            <Text style={styles.listItemSubtitle}>
              <Switch 
                value={data.userPermission  === "On" ? true : false} 
                onValueChange={value => handleInputChange("userPermission",  value ? "On" : "Off")} />
            </Text>
          </View>
        </ListItem.Content>
      </ListItem>
      
    </ScrollView>
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
    },
    listItemContent: {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'},
    listItem: {flexDirection: 'row', alignItems: 'center'},
    listItemText: {marginLeft: 10 ,fontSize: 17},
    listItemSubtitle: {fontSize: 16}
});