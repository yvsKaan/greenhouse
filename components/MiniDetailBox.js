import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import DetailBox from './DetailBox';

const MiniDetailBox = ({waterLevel, fanState, lightState, waterState}) => {
  return (
    <View style={styles.container}>
        <View style={styles.detailContainer}>
            <Text style={styles.detailTitle}>Water Level</Text>
            <Text>{waterLevel}</Text>
        </View>
        <View style={styles.detailContainer}>
            <Text style={styles.detailTitle}>Fan Current State</Text>
            <Text>{fanState}</Text>
        </View>
        <View style={styles.detailContainer}>
            <Text style={styles.detailTitle}>Light Current State</Text>
            <Text>{lightState}</Text>
        </View>
        <View style={styles.detailContainer}>
            <Text style={styles.detailTitle}>Water Current State</Text>
            <Text>{waterState}</Text>
        </View>
                
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        width: '90%',
        backgroundColor: '#eaeaea',
        marginTop: 10,
        marginHorizontal: '5%',
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 3,
        },
        shadowOpacity: 0.35,
        shadowRadius: 6,
        elevation: 10,
    },
    detailContainer: {
        width: '50%',
        alignItems: 'center',
        marginVertical: 10,
    },
    detailTitle: {
        fontSize: 16,
        fontWeight: '700',
        marginVertical: 10,
    },
});
export default MiniDetailBox