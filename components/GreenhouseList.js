import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function GreenhouseList(props) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={{height: 150, marginBottom: 50}}>
        <Text style={styles.name}>{props.Info.name}</Text>
        <Image 
        style={styles.image}
        source={{
          uri: 'https://media.istockphoto.com/photos/symmetrical-overview-of-lots-of-small-chrysanthemum-cuttings-in-long-picture-id670157616?k=20&m=670157616&s=612x612&w=0&h=R-M03gUQcrqaJYgTlZlw9fzNxt0jCWBKpV59BCXpfw8=',
        }} /> 
      </View>
      
      <View style={styles.detail}>
        <View>
          <Text>{props.Info.tempeture}</Text>
        </View>
        <View>
          <Text>{props.Info.humidity}</Text>
        </View>
        <View>
          <Text>{props.Info.water}</Text>
        </View>
        <View>
          <Text>{props.Info.light ? "On" : "Off"}</Text>
        </View>
        <View>
          <Text>{props.Info.fan ? "On" : "Off"}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 300,
        backgroundColor: '#f3f3f3',
        padding: 20,
        marginLeft: 10,
        marginBottom: 20,
        borderRadius: 20,
    },
    image: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: 1,
      elevation: 1,
    },
    name: {
        color: "white",
        backgroundColor: '#25C050',
        width: '40%',
        padding: 5,
        textAlign: 'center',
        margin: 10,
        borderRadius: 20,
        zIndex: 100,
        elevation: 100,
    },
    detail: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
});