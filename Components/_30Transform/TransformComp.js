import React from 'react'
import {ScrollView, StyleSheet, Text, View} from "react-native"
export default function TransformComp() {
    return (
       <View style={styles.container}>
           <ScrollView
            style={styles.scrollContentContainer}
           >
               <View style={styles.box}>
                   <Text style={styles.text}>Original Object</Text>
               </View>
               <View style={[styles.box,{transform:[{scale:1.2}]}]}>
                   <Text style={styles.text}>Original Object</Text>
               </View>
               <View style={[styles.box,{transform:[{scale:0.7}]}]}>
                   <Text style={styles.text}>Original Object</Text>
               </View>
               <View style={[styles.box,{transform:[{scaleX:1.2}]}]}>
                   <Text style={styles.text}>Original Object</Text>
               </View>
               <View style={[styles.box,{transform:[{scaleY:2}]}]}>
                   <Text style={styles.text}>Original Object</Text>
               </View>
               <View style={[styles.box,{transform:[{rotate:"45deg"}]}]}>
                   <Text style={styles.text}>Original Object</Text>
               </View>

               
               <View style={[styles.box,{transform:[{rotate:"180deg"}]}]}>
                   <Text style={styles.text}>Original Object</Text>
               </View>
               <View style={[styles.box,{transform:[{rotate:"360deg"}]}]}>
                   <Text style={styles.text}>Original Object</Text>
               </View>

           </ScrollView>
       </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'red',
        margin:20,
        height:"100%",
        padding:20
    },
    box:{
        backgroundColor:"lightblue",
        margin:20,
        padding:20,
        borderRadius:50
    }
})
