import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function GreenhouseList(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Text style={styles.name}>{props.Info.name}</Text>
      </View>
      
      <View style={styles.detail}>
          <Text>{props.Info.tempeture}</Text>
          <Text>{props.Info.humidity}</Text>
          <Text>{props.Info.water}</Text>
          <Text>{props.Info.light ? "On" : "Off"}</Text>
          <Text>{props.Info.fan ? "On" : "Off"}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 300,
        backgroundColor: '#f1f1f1',
        padding: 20,
        marginLeft: 10,
        marginBottom: 20,
        borderRadius: 20,
    },
    name:{
        color: "white",
        backgroundColor: '#25C050',
        width: '40%',
        margin: 10,
        padding: 5,
        textAlign: 'center',
        borderRadius: 20,
        zIndex: 100,
    },
    image: {
        width: '100%',
        height: '70%',
        marginBottom: 20,
        backgroundColor: '#afafaf',
    },
    detail: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
});