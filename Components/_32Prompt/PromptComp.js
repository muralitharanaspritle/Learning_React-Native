import React, { useState } from "react";
import { View, Button, Text, Alert } from "react-native";



/*********************Not working */

export default function PromptComp() {
  const [name, setName] = useState("");
  const clickMe = () => {
    Alert.prompt(
      "Welcome",
      "Please Enter Your Name",
      [
        {
          text: "Submit",
          onPress: (text) => setName(text),
        },
        {
          text: "cancel",
          onPress: () => console.log("Cancell pressed"),
        },
      ],
      "plain-text",
      "Name"
    );
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
      }}
    >
      <Text>{name}</Text>
      <Button title="click" onPress={clickMe}/>
    </View>
  );
}
