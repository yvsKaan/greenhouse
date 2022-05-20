import React from 'react'

import { View, Text, StyleSheet } from 'react-native'


export default function DetailBox({title, value, minValue, maxValue}) {
  return (
    <View style={styles.detailContainer}>
      <View style={styles.valueContainer}>
        <Text>min</Text> 
        <Text>{minValue}</Text>
      </View>
      <View style={styles.valueContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text>{value}</Text>
      </View>
      <View style={styles.valueContainer}>
        <Text>max</Text>
        <Text>{maxValue}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  detailContainer: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: '#eaeaea',
    marginTop: 10,
    marginHorizontal: '5%',
    paddingHorizontal: 10,
    paddingVertical: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset:{
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.35,
    shadowRadius: 6,
    elevation: 10,
  },
  valueContainer: {
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginVertical: 5,
  }
})