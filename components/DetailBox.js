import React from 'react'

import { View, Text, Image, StyleSheet } from 'react-native'


export default function DetailBox({icon, title, value}) {
  return (
    <View style={styles.detailContainer}>
      {/* Tempeture, humidity more detail and touchable */}
      <Text style={styles.title}>{title}</Text>
      {icon ? <Image source={icon} /> : <Text/>}
      <Text>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  detailContainer: {
    width: '100%',
    backgroundColor: '#eaeaea',
    marginTop: 10,
    marginRight: '16%',
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  }
})