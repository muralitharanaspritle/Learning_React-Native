import React,{useEffect} from 'react'
import {Text, View,Alert,BackHandler} from "react-native"
export default function BackHandlerComp() {
    useEffect(()=>{
        const backAction = ()=>{
            Alert.alert("Stop","Are you sure to go back?",[
                {
                    text:"Cancel",
                    onPress:()=>null,
                    style:"cancel"
                },
                {
                    text:"Yes",
                    onPress:()=>BackHandler.exitApp()
                }
            ])
            return true;
        }
        const backHandler=BackHandler.addEventListener(
            "hardwareBackPress",backAction
        )
    },[])
    return (
        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
            <Text>click back button</Text>
        </View>
    )
}


