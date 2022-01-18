import React, { useState } from "react";
import { Switch, Text, View } from "react-native";
function SwitchButton() {
  const [isToggle, setIsToggle] = useState(false);
  const [isMicOn, setIsMicOn] = useState(false);
  const toggleIt = () => {
    setIsToggle(!isToggle);
  };
  const changeMicState = () => {
    setIsMicOn(!isMicOn);
  };
  return (
    <View>
      <Switch
        trackColor={{ true: "blue", false: "red" }}
        thumbColor={isToggle ? "blue" : "red"}
        onValueChange={toggleIt}
        value={isToggle}
      />
      <Switch
        trackColor={{ true: "green", false: "red" }}
        thumbColor={isMicOn ? "green" : "red"}
        onValueChange={changeMicState}
        value={isMicOn}
      />
    </View>
  );
}

export default SwitchButton;
