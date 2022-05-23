import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native'
import React, {useState} from 'react'
import {db} from '../firebase-config/firebase'

export default function NotificationOption({info, infoKey, refresh}) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleModal = () => {
    db.ref('/Warning/'+ infoKey + '/isRead').set('On')
    setModalVisible(false);
    refresh(true);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={() => setModalVisible(true)}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.modalContainer}>
            <View style={styles.warningContainer}>
              <Text style={[styles.warningTitle, styles.Textcolor]}>{info.title}</Text>
              <Text style={[styles.notification, styles.Textcolor]}>{info.notification}</Text>
            </View>
            <TouchableOpacity
              style={styles.buttonClose}
              onPress={() => handleModal()}>
                <Text style={styles.textStyle}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Text style={[styles.title, info.isRead === "On" ? styles.active : styles.Textcolor]}>{info.title}</Text>
      
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    modalView: {
      width: '90%', 
      height: '100%',
      marginHorizontal: '5%',
      justifyContent: 'center',
    },
    modalContainer: {
      width: '100%',
      height: 300,
      paddingVertical: 10,
      backgroundColor: '#eaeaea',
      borderRadius: 20,
      justifyContent: 'center',
    },
    container: {
        width: '100%',
        flexDirection: 'column',
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        marginVertical: 5,
        borderRadius: 5
    },
    warningContainer: {
      alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: '700'
    },
    warningTitle: {fontSize: 22, marginVertical: 20}, 
    notification: { fontSize: 14 },
    active: { color: '#a2a2a2'},
    Textcolor: {color: 'black'},
    buttonClose: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    textStyle: {
      paddingHorizontal: 50,
      paddingVertical: 10,
      borderRadius: 5,
      backgroundColor: '#25C050',
      color: '#fff',
    },
});