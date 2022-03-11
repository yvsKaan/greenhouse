import React from 'react'

import { View, Text, StyleSheet } from 'react-native'


export default function ListOption({title, value}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        margin: 5,
        alignItems: 'center',
    },
    title: {
        fontSize: 11,
        fontWeight: 'bold',
    },
    value: {
        fontSize: 14,
    }
})