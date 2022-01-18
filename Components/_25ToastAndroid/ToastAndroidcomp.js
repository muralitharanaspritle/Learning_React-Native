import React from "react";
import { View, ToastAndroid, Button } from "react-native";
export default function ToastAndroidcomp() {
  const toastShow = () => {
    ToastAndroid.show("welcome back everyone", ToastAndroid.SHORT);
  };
  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      "welcome",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "red",
        width: "100%",
      }}
    >
      <Button title="show toast" onPress={() => toastShow()} />
      <Button title="show at center" onPress={() => showToastWithGravity()} />
    </View>
  );
}
