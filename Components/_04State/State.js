import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
export default function State() {
  const [myName, setMyName] = useState("Murali");
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.nameStyle}>{myName}</Text>
      <View style={styles.button}>
        <Button
          title="changeName"
          onPress={() => setMyName("Muralitharan")}
          touchSoundDisabled={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nameStyle: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  viewStyle: {
    backgroundColor: "black",
    height: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 200,
    padding:10,
  },
});
