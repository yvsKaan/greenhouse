import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import {db} from '../firebase-config/firebase'
import { useNavigation } from '@react-navigation/native';

import ListOption from './ListOption';

export default function GreenhouseList() {
  const navigation = useNavigation();

  const [data, setData] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      db.ref("/Greenhouse").once('value').then(snapshot => {
        const SeraData = snapshot.val();
        const lastItem = Object.values(Object.values(SeraData)[Object.keys(SeraData).length - 1]);
        setData(lastItem);
      });
    });
    return unsubscribe;
    
  }, [navigation]);

  return (
    <TouchableOpacity style={styles.container}
    onPress={() => navigation.navigate('Detail')}>
      <View style={styles.imageContainer}>
        <Text style={styles.name}>Greenhouse</Text>
        <Image 
        style={styles.image}
        source={{
          uri: 'https://media.istockphoto.com/photos/symmetrical-overview-of-lots-of-small-chrysanthemum-cuttings-in-long-picture-id670157616?k=20&m=670157616&s=612x612&w=0&h=R-M03gUQcrqaJYgTlZlw9fzNxt0jCWBKpV59BCXpfw8=',
        }} /> 
      </View>
      
      <View style={styles.detail}>
        <ListOption title="Tempeture" icon='temperature-high' icontype="font-awesome-5" value={data[2]} />
        <ListOption title="Humidity" icon='cloud-rain' icontype="font-awesome-5" value={data[0]} />
        <ListOption title="Moisture" icon='water-percent' icontype="material-community" value={100 - data[1]} />
        <ListOption title="Water Level" icon='water' icontype="material-community" value={data[3]} />
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
        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        elevation: 10,
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