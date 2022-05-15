import React from 'react'

import { View, Text, Image, StyleSheet } from 'react-native'
import {Icon} from 'react-native-elements';

export default function ListOption({icon, icontype, value}) {
  return (
    <View style={styles.container}>
      <Icon style={styles.icon} name={icon} type={icontype} size={36}/>
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
      marginTop: 10,
      marginBottom: 10,
    },
    value: {
        fontSize: 18,
    }
})