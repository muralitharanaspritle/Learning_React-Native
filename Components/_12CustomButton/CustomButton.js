import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  TouchableWithoutFeedback,Keyboard
} from "react-native";
export default function CustomButton() {
  return (
    <TouchableWithoutFeedback onPress={()=>{
        Keyboard.dismiss();
        
    }}>
      <View style={styles.container}>
        <TextInput style={styles.textInput} placeholder="enter you name" />
        <TouchableOpacity
          onPress={() => {
            Alert.alert("Submit", "are you sure!", [
              { text: "Yes", onPress: () => console.log("Yes") },
              { text: "NO", onPress: () => console.log("No") },
            ]);
          }}
        >
          <View style={styles.button}>
            <Text style={styles.text}>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "red",
    marginTop: 50,
    height: 50,
    width: 200,
    color: "white",
    padding: 10,
    borderRadius: 5,
    fontSize: 20,
  },
  container: {
    height: 500,

    backgroundColor: "yellow",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "purple",
    marginTop: 20,
    width: 200,
    height: 50,
    paddingTop: 15,
  },
  text: {
    textAlign: "center",
    color: "white",
  },
});
