import React from "react";
import { View, Text, StyleSheet, Button, Vibration } from "react-native";
export default function VibrationComp() {
  const ONE_SECOND_IN_MS = 1000;
  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    2 * ONE_SECOND_IN_MS,
    3 * ONE_SECOND_IN_MS,
  ];

  const PATTERN_DESC = "wait 1s,vibrate 2s,wait 3s";
  return (
    <View style={styles.container}>
      <Text style={styles.header}>VIBRATION API</Text>
      <View style={styles.button}>
        <Button title="vibrate 1s" onPress={() => Vibration.vibrate()} />
      </View>
      <View style={styles.button}>
        <Button
          title="vibrate 2s"
          onPress={() => Vibration.vibrate(2 * ONE_SECOND_IN_MS)}
        />
      </View>
      <Text style={styles.text}>Pattern:{PATTERN_DESC}</Text>
      <View style={styles.button}>
        <Button
          title="pattern"
          onPress={() => Vibration.vibrate(PATTERN, true)}
        />
      </View>
      <View style={styles.button}>
        <Button color={"red"} title="stop vibration" onPress={() => Vibration.cancel()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    fontSize: 20,
    alignSelf: "center",
    padding:20,
    borderRadius:10,
    marginTop:20,
    color:"black"
  },
  button: {
    margin: 10,
    backgroundColor:"red",
  },
  text: {
    fontSize: 20,
    color:"black",
    margin: 20,
    padding: 20,
    borderRadius: 10,
  },
});
