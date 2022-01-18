import React,{useState} from 'react'
import {StyleSheet,Text, TouchableNativeFeedback, View} from 'react-native'
export default function TouchableNativeFeedbackComp() {
    const [rippleOverFlow,setRippleOverFlow] = useState(false)
    return (
        <View>
            <TouchableNativeFeedback
                onPress={()=>setRippleOverFlow(!rippleOverFlow)}
                background={TouchableNativeFeedback.Ripple("red",rippleOverFlow)}
            >
                <View style={styles.touchable}>
                    <Text style={styles.text}>Touchable feedback</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}


const styles  = StyleSheet.create({
    touchable:{
        flex:0.5,
        borderWidth:1
    },
    text:{
        alignSelf:"center"
    }
})
