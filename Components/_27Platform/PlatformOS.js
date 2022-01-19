import React from 'react'
import {View,Text,Platform} from "react-native"
export default function PlatformOS() {
    return (
        <View>
            <Text>Device:{Platform.OS}</Text>
            <Text>Version:{Platform.isTV.toString()}</Text>
            <Text>Constands:{JSON.stringify(Platform.constants,null,2)}</Text>
        </View>
    )
}


