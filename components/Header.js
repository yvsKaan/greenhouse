import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {Icon, Avatar} from 'react-native-elements';
import {auth} from '../firebase-config/firebase';
import logo from '../assets/header_logo.png';

export default function Header({isHome, notificationNumber}) {
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
      <TouchableWithoutFeedback onPress={()=> isHome ? navigation.navigate("Notification") : navigation.goBack()}>
        {
          isHome ?  
          <View style={styles.notification}>
            <Icon name='notifications-outline' type='ionicon' size={32} color='#fff' /> 
            <Text style={{position: 'absolute', right: -3, top: -10, color: '#fff', fontWeight: '700'}}>{notificationNumber}</Text>
          </View>: 
          <Icon name='arrow-back-outline' type='ionicon' size={32} color='#fff'/>
        }
      </TouchableWithoutFeedback>
      
      <Image source={logo} style={styles.logo}/>
      <Icon name='log-out-outline' type='ionicon' size={32} color='#fff' onPress={handleSingOut} />
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      paddingHorizontal: 20,
      paddingBottom: 15,
      marginBottom: 20,
      height: 100,
      width: '100%',
      backgroundColor: '#25C050',
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      alignItems: 'flex-end',
      justifyContent: 'space-between',
    },
    logo: {width: 300, resizeMode: 'contain'},
});
  