import React from 'react'

import { View, Text, StyleSheet} from 'react-native'

export default function Header({isHome, title}) {
  return (
    <View style={styles.header}>
      {isHome ? 
      <Text style={styles.title}>{title}</Text> 
      : <Text>Not Home</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
      height: 100,
      backgroundColor: '#25C050',
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      justifyContent: "center",
    },
    title: {
        color: "white",
        fontSize: 24,
        textAlign: "center",
        textTransform: "uppercase",
    },
});
  