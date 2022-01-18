import React, { useState } from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Button,
  Alert,
  Modal,
} from "react-native";
export default function ActivityIndicatorComp() {
  const [show, setShow] = useState(false);
  const [isModalOn, setIsModalOn] = useState(false);
  const submit = () => {
    setShow(true);
    setIsModalOn(true);
    setTimeout(() => {
      setShow(false);
      setIsModalOn(false);
      Alert.alert("Submit", "Are you sure!", [
        { text: "yes", onPress: () => alert("Yes") },
        { text: "No", onPress: () => alert("No") },
      ]);
    }, 2000);
  };
  return (
    <View>
      <Modal visible={isModalOn}>
        <View style={styles.modal}>
          <ActivityIndicator size={100} color={"yellow"} animating={show} />
        </View>
      </Modal>
      <Button title="Click" onPress={submit}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  activityIndicator: {
    backgroundColor: "yellow",
    width: 200,
    height: 200,
    borderRadius: 10,
    justifyContent: "center",
    borderWidth: 1,
  },
  modal:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:"black"
  }
});
