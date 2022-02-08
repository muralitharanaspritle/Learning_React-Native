import React, { useState } from "react";
import { Text, View, Modal, Button, StyleSheet } from "react-native";
export default function ModalComp() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View>
      <Text>This is comp</Text>
      <Button onPress={() => setIsOpen(true)} title="open modal"></Button>
      <Modal visible={isOpen}  >
        <View style={styles.container}>
          <Text>This is Modal</Text>
          <Button onPress={() => setIsOpen(false)} title="close"></Button>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
