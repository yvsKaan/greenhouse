import React, {useState, useEffect} from 'react'
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import {db} from '../firebase-config/firebase'
import {Icon, ListItem, Slider} from 'react-native-elements';
import Header from '../components/Header';
import SettingOption from '../components/SettingOption';

export default function SettingScreen() {
  return (
    <View>
      {/* form with details */}
      <Header isHome= {false} title="Settıngs" />
      <SettingOption />
    </View>
  )
}