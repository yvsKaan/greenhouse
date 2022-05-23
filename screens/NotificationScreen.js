import {SafeAreaView, View, ScrollView, StyleSheet} from 'react-native'
import React, { useState, useEffect} from 'react'
import Header from '../components/Header'
import {db} from '../firebase-config/firebase'
import NotificationOption from '../components/NotificationOption';

export default function NotificationScreen() {
  const [notifications, setNotifications] = useState([]);
  const [dataRefresh, setDataRefresh] = useState(false);

  const handleRefresh = (dataRefreshState) => {
    setDataRefresh(dataRefreshState);
  };
  
  useEffect(() => {
    db.ref("/Warning").once('value', snapshot => {
      const veri = snapshot.val();
      setNotifications(veri);
      setDataRefresh(false);
    })
  }, [dataRefresh]);
  
  return (
    <ScrollView>
      <Header isHome= {false} />
      <View style={styles.notificationContainer}>
        {
          Object.entries(notifications).reverse().map(([key,v])=>{
              return <NotificationOption key={key} info={v} infoKey={key} refresh={handleRefresh}/>
        })}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  notificationContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
});