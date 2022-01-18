import React from 'react'
import {View,StyleSheet} from "react-native"
export default function ViewComp(){
    return (
        <View style={styles.viewStyle}>

        </View>
    )
}  

const styles = StyleSheet.create({
    viewStyle:{
        backgroundColor:"white",
        height:100,
    }
})
