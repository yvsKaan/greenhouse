import React from 'react'

import { View, Text, StyleSheet } from 'react-native'
import Header from '../components/Header';
import GreenhouseList from '../components/GreenhouseList';

export default function HomeScreen() {
  const greenhouses = [
    {
      id: 1,
      name: "Greenhouse 1",
      tempeture: '24',
      humidity: '60%',
      water: '60%',
      light: true,
      fan: false
    },
    {
      id: 2,
      name: "Greenhouse 2",
      tempeture: '18',
      humidity: '80%',
      water: '60%',
      light: false,
      fan: false
    }
  ]
  return (
    <View>
      <Header isHome={true} title="Greenhouse"/>
      <View>
        <Text style={styles.title}>Greenhouses: </Text>
        {greenhouses.map((greenhouse)=>(
          <GreenhouseList key={greenhouse.id} Info={greenhouse} />
        ))}
      </View>
    </View>
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