import React, {useState, useEffect} from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import {db} from '../firebase-config/firebase'
import Header from '../components/Header';
import GreenhouseList from '../components/GreenhouseList';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [notificationNumber, setNotificationNumber] = useState(0);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setNotificationNumber(0);
      db.ref("/Warning").once('value', snapshot => {
        snapshot.forEach(node => {
          node.child("isRead").val() === "Off" ? setNotificationNumber(notificationNumber => notificationNumber + 1) : ""
        })
      })
    });
    return unsubscribe;
  },[navigation]);

  return (
    <SafeAreaView>
      <Header isHome={true} notificationNumber={notificationNumber}/>
      <View>
        <Text style={styles.title}>Greenhouses: </Text>
        <GreenhouseList />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: "#25C050",
    marginLeft: '5%',
    marginBottom: '5%',
  }
});