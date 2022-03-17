import React from 'react'

import { View, Text, Image, StyleSheet } from 'react-native'


export default function DetailBox({icon, title, value}) {
  return (
    <View style={styles.detailContainer}>
      {/* Tempeture, humidity more detail and touchable */}
      <Text style={styles.title}>{title}</Text>
      <Image source={icon} />
      <Text>{typeof value === 'boolean' ? value ? "On" : "Off" : value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  detailContainer: {
    width: '100%',
    backgroundColor: '#eaeaea',
    marginTop: 10,
    marginRight: '16%',
    padding: 25,
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
  title: {
    fontSize: 16,
    fontWeight: '700',
  }
})