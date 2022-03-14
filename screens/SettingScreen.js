import React from 'react'

import { View, Text } from 'react-native'

import Header from '../components/Header';

export default function SettingScreen({ route }) {
  const { settingDetail } = route.params;
  return (
    <View>
      {/* form with details */}
      <Header isHome= {false} title={settingDetail.name} />
      <Text>Setting</Text>
    </View>
  )
}