import React, {useState, useEffect} from 'react'
import {db} from '../firebase-config/firebase'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import Header from '../components/Header';
import GreenhouseList from '../components/GreenhouseList';

export default function HomeScreen() {
  const [data, setData] = useState([]);
  const greenhouses = [
    {
      id: 1,
      name: "Greenhouse 1",
      tempeture: '24 C',
      humidity: '60%',
      water: '60%',
      light: true,
      fan: false
    },
    {
      id: 2,
      name: "Greenhouse 2",
      tempeture: '18 C',
      humidity: '80%',
      water: '60%',
      light: false,
      fan: false
    }
  ]
  useEffect(()=>{
    const fetchPost = async () => {
      db.ref("/Ayarlar").once('value', snapshot => {
        const veri = snapshot.val();
        setData(veri);
      })
     }
     fetchPost();
  }, [])

  return (
    <SafeAreaView>
      <Header isHome={true} title="Greenhouse"/>
      <View>
        <Text style={styles.title}>Greenhouses: </Text>
        {greenhouses.map((greenhouse)=>(
          <GreenhouseList key={greenhouse.id} Info={greenhouse} />
        ))}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: "#25C050",
    marginLeft: '5%',
    marginBottom: '5%',
  }
});