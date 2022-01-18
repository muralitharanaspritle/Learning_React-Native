import React from "react";
import { View, Text, Button, Alert } from "react-native";
export default function AlertDialog() {

  const pressHandler = () => {

    //Alert.alert("alert title","alert message",[{text:"",onPress:()=>},{}])
    Alert.alert("Submit","Are you sure!", [
      { text: "Yes", onPress: () => console.log("Yes") },
      { text: "No", onPress: () => noHandler() },
    ]);
  };
  const noHandler = () => {
    console.log("NO");
  };
  return (
    <View>
      <Button title="pressme" onPress={() => pressHandler()}></Button>
    </View>
  );
}
