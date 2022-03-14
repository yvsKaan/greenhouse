import React from 'react'

import { View, Text, Image, StyleSheet } from 'react-native'


export default function ListOption({icon, value}) {
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={icon} />
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
    icon: {
      margin: 10
    },
    value: {
        fontSize: 16,
    }
})