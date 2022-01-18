import React from "react"
import {View,Switch} from "react-native"

export default function CustomComp(props){
    return(
        <View>
            <Switch
                trackColor={{true:"green",false:"red"}}
                thumbColor={"black"}
                onValueChange={props.changeSwitchState}
                value={props.isEnabled}
            />
        </View>
    )
}