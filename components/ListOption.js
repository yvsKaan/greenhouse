import React from 'react'

import { View, Text, Image, StyleSheet } from 'react-native'
import {Icon} from 'react-native-elements';

export default function ListOption({title, icon, icontype, value}) {
  return (
    <View style={styles.container}>
      <Icon style={styles.icon} name={icon} type={icontype} size={36}/>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: 5,
        alignItems: 'center',
    },
    icon: {
      marginVertical: 10,
    },
    value: {
        fontSize: 18,
    },
    title: {
      fontSize: 12
    }
})