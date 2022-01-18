import React ,{useState} from 'react'
import {View} from "react-native"
import Comp2 from './Comp2'
export default function PropComp() {
    const [myName,setMyName] = useState("Muralitharan A");
    const changeName=()=>{
        setMyName("Kannan")
    }
    return (
        <View>
                <Comp2 myName={myName} changeName={changeName}/>
        </View>
    )
}


