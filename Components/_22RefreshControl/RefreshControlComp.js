import React,{useState} from 'react'
import {View,Text, ScrollView, RefreshControl} from "react-native"
export default function RefreshControlComp() {
    const [refresh,setRefresh] = useState(false)
    const pullMe = ()=>{
        setRefresh(true)
        setTimeout(()=>{
            setRefresh(false)
        },3000)
    }
    return (
        <View style={{flex:1,height:500}}>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refresh}   
                        onRefresh={()=>pullMe()}
                    />
                }
            >
                <Text>Pull me</Text>
            </ScrollView>
        </View> 
    )
}


