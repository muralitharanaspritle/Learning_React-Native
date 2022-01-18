import React from 'react'
import {StyleSheet,View,Image} from "react-native"
import wallpaper from "../../Image/wallpaper.jpg"
export default function ImageComp() {
    return (
        <View style={styles.imgContainer}>
           <Image style={styles.imgStyle} source={wallpaper}/>
        </View> 
    )
}


const styles = StyleSheet.create({
    imgStyle:{
        width:"50%",
        height:"50%",
        borderRadius:10
    },
    imgContainer:{
        display:"flex",
        alignItems:'center',
        justifyContent:"center"
    }
})