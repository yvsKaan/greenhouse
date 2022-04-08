import React from 'react'

import { View, Text, Image, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {Icon, Avatar} from 'react-native-elements';
import {auth} from '../firebase-config/firebase'

export default function Header({isHome, title}) {
  const navigation = useNavigation();

  const handleSingOut = () => {
    auth
      .signOut()
      .then(()=>{
        navigation.navigate("Login")
      })
      .catch(error => alert(error.message))
  }
  return (
    <View style={styles.header}>
      {isHome ? <Text></Text> : <TouchableWithoutFeedback onPress={()=> navigation.goBack()}>
        <Icon containerStyle={styles.goBack} name='arrow-back' type='ionicon' size={42} color='#fff'
        />
      </TouchableWithoutFeedback>
      }
      <Text style={styles.title}>{title}</Text>
      <Avatar 
      icon={{name: 'user', type: 'font-awesome'}}
      size="medium" 
      rounded 
      activeOpacity={0.5} 
      onPress={handleSingOut} />
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      paddingTop: 25,
      marginBottom: '5%',
      height: 100,
      width: '100%',
      backgroundColor: '#25C050',
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      color: "white",
      fontSize: 24,
      textTransform: "uppercase",
      textAlign: 'center',
    },
    goBack: {
      marginLeft: 20
    },
});
  