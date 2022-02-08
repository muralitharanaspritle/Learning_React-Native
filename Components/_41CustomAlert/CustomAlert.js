import { Modal, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native";

const CustomAlert = () => {
  const [isClicked, setIsClicked] = useState(false);
  const createAlert = () => {
    setIsClicked(true);
  };
  return (
    <View>
      <Modal visible={isClicked} animationType="fade" transparent={false}>
        <View style={styles.conatiner}>
          <View style={styles.customAlertContainer}>
            <Text style={styles.alertTitle}>Title</Text>
            <Text style={styles.horizontalLine}></Text>
            <Text style={styles.alertMsg}>Message</Text>
            <View style={styles.button}>
              <Button title="close" onPress={() => setIsClicked(false)} />
              <Button title="close" onPress={() => setIsClicked(false)} />
            </View>
          </View>
        </View>
      </Modal>
      <Button title="click" onPress={() => createAlert()} />
    </View>
  );
};

export default CustomAlert;

const styles = StyleSheet.create({
  //dodgerblue
  conatiner: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  customAlertContainer: {
    backgroundColor: "red",
    height: 150,
    width: "80%",
    padding: 10,
    borderRadius: 5,
  },
  alertTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  horizontalLine: {
    borderBottomWidth: 2,
    borderBottomColor: "white",
  },
  alertMsg: {
    color: "white",
    fontSize: 15,
  },
  button: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
    left: 10,
    bottom: 10,
    width: "100%",
  },
});
