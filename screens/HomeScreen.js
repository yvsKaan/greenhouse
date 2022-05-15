import React, {useState, useEffect} from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import Header from '../components/Header';
import GreenhouseList from '../components/GreenhouseList';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Header isHome={true} title="Greenhouse"/>
      <View>
        <Text style={styles.title}>Greenhouses: </Text>
        <GreenhouseList />
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