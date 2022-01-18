import React from 'react'
import {View,Text} from "react-native"
import styles from "./Styles"
export default function ExternalStyle() {
    return (
        <View style={styles.container}> 
            <Text>
                MY External style
            </Text>
        </View>
    )
}


