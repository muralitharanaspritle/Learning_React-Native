import React from 'react'
import {Text,StyleSheet} from "react-native"
export default function TextComp() {
    return (
        <Text style={styles.textStyle}>Hello</Text>
    )
}
 
const styles = StyleSheet.create({
    textStyle:{
        backgroundColor:"yellow",
        height:50,
        textAlign:"center",
        fontSize:20
    }
})
