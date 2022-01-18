import React from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  TextInput,
  StyleSheet,
  Keyboard,
} from "react-native";
export default function DismissKeyboard() {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("Dismissed");
      }}
    >
      <View style={styles.container}>
        <TextInput style={styles.textInput} placeholder="Enter your name" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "red",
    marginTop: 50,
    height: 50,
    width:200,
    color:"white",
    padding:10,
    borderRadius:5,
    fontSize:20
  },
  container:{
      height:500,
     
      backgroundColor:"yellow",
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
  }
});
