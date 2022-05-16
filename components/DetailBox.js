import React from 'react'

import { View, Text, StyleSheet } from 'react-native'


export default function DetailBox({title, value}) {
  return (
    <View style={styles.detailContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  detailContainer: {
    width: '90%',
    backgroundColor: '#eaeaea',
    marginTop: 10,
    marginHorizontal: '5%',
    padding: 10,
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
    marginVertical: 5,
  }
})