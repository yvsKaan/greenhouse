import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import Tempeture from '../assets/icons/icon-temperatures.png';
import Humidity from '../assets/icons/icon-humidity.png';
import Water from '../assets/icons/icon-water.png';
import Light from '../assets/icons/icon-light.png';
import Fan from '../assets/icons/icon-fan.png';

import ListOption from './ListOption';

export default function GreenhouseList(props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity 
    onPress={() => navigation.navigate('Detail', {
      detail: props.Info,
    })} style={styles.container} >
      <View style={styles.imageContainer}>
        <Text style={styles.name}>{props.Info.name}</Text>
        <Image 
        style={styles.image}
        source={{
          uri: 'https://media.istockphoto.com/photos/symmetrical-overview-of-lots-of-small-chrysanthemum-cuttings-in-long-picture-id670157616?k=20&m=670157616&s=612x612&w=0&h=R-M03gUQcrqaJYgTlZlw9fzNxt0jCWBKpV59BCXpfw8=',
        }} /> 
      </View>
      
      <View style={styles.detail}>
        <ListOption icon={Tempeture} value={props.Info.tempeture} />
        <ListOption icon={Humidity} value={props.Info.humidity} />
        <ListOption icon={Water} value={props.Info.water} />
        <ListOption icon={Light} value={props.Info.light  ? "On" : "Off"} />
        <ListOption icon={Fan} value={props.Info.fan ? "On" : "Off"} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 300,
        backgroundColor: '#eaeaea',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20,
        borderRadius: 20,
    },
    imageContainer: {
      height: 150,
      marginTop: 10,
      marginBottom: '5%',
      paddingLeft: '10%',
      alignItems: 'center',
    },
    image: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: 1,
    },
    name: {
        position: 'absolute',
        left: '10%',
        top: '5%',
        color: "white",
        backgroundColor: '#25C050',
        width: '40%',
        padding: 3,
        textAlign: 'center',
        borderRadius: 20,
        zIndex: 100,
        elevation: 100,
    },
    detail: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});