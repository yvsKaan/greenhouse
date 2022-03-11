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
      <View style={styles.content}>
        <Text style={styles.title}>Greenhouses: </Text>
        {greenhouses.map((greenhouse)=>(
          <GreenhouseList key={greenhouse.id} Info={greenhouse} />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    width: '100%',
    marginTop: 50,
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    color: "#25C050",
    marginBottom: 20,
  }
});