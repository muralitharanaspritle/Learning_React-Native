import React from 'react'
import {View,Text, StyleSheet} from 'react-native'
export default function FlexProperty() {
    return (
        <View style={styles.flexStyle}>
            <View style={styles.flexStyle1}></View>
            <View style={styles.flexStyle2}></View>
            <View style={styles.flexStyle3}></View>
            <View style={styles.flexStyle4}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    flexStyle:{
        flex:1,
        flexDirection:'column'
        /** row */
    },
    flexStyle1:{
        flex:30,
        backgroundColor:"red"
    },
    flexStyle2:{
        flex:10,
        backgroundColor:"blue"
    },
    flexStyle3:{
        flex:10,
        backgroundColor:"green"
    },
    flexStyle4:{
        flex:10,
        backgroundColor:"yellow"
    }
})