import React, { useState } from "react";
import { InputAccessoryView, Button, TextInput, View } from "react-native";
export default function InputAccessaryViewComp() {
  const [info, setInfo] = useState("");
  const inputAccessoryViewId = "id";
  //ios only
  return (
    <View>
      <TextInput
        placeholder="Enter you name"
        onChangeText={(text) => setInfo(text)}
        value={info}
        style={{
          backgroundColor: "yellow",
          padding: 10,
          borderRadius: 5,
          width: 200,
        }}
        inputAccessoryViewID={inputAccessoryViewId}
      />
      <InputAccessoryView nativeID={inputAccessoryViewId}>
        <View style={{ backgroundColor: "white" }}>
          <Button
            style={{ width: 100, height: 100 }}
            onPress={() => setInfo("")}
            title="Reset Text"
          />
        </View>
      </InputAccessoryView>
    </View>
  );
}
