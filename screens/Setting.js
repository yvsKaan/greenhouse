import React from 'react'

import { View, Text } from 'react-native'

import Header from '../components/Header';

export default function Setting() {
  return (
    <View>
        <Header isHome= {false} title="Greenhouse 1" />
      <Text>Setting</Text>
    </View>
  )
}