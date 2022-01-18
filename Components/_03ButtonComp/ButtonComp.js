import React from "react";
import { Button, StyleSheet } from "react-native";
export default function ButtonComp() {
  return (
    <Button
      style={styles.buttonStyle}
      color={"red"}
      title="Click me"
      onPress={() => alert("Welcome back")}
      disabled={false}
     
    ></Button>
  );
}

//react-native does not supports direct button styles

const styles = StyleSheet.create({
  buttonStyle: {
    color: "red",
  },
});
