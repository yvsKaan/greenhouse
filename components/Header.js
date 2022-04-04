import React from 'react'

import { View, Text, Image, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {Icon} from 'react-native-elements';

export default function Header({isHome, title}) {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      {isHome ? <Text></Text> : <TouchableWithoutFeedback onPress={()=> navigation.goBack()}>
        <Icon containerStyle={styles.goBack} name='arrow-back' type='ionicon' size={42} color='#fff'
        />
      </TouchableWithoutFeedback>
      }
      <Text style={styles.title}>{title}</Text> 
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      paddingTop: 25,
      marginBottom: '5%',
      height: 100,
      backgroundColor: '#25C050',
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        color: "white",
        fontSize: 24,
        textAlign: "center",
        textTransform: "uppercase",
    },
    goBack: {
      position: 'absolute',
      left: 20,
      top: '50%',
    },
});
  