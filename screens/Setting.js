import React from 'react'

import { View, Text } from 'react-native'

import Header from '../components/Header';

export default function Setting({ route }) {
  const { settingDetail } = route.params;
  return (
    <View>
        <Header isHome= {false} title={settingDetail.name} />
      <Text>Setting</Text>
    </View>
  )
}