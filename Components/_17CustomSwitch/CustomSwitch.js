import React, { useState } from "react";
import { View, Switch, Text } from "react-native";
import CustomComp from "./CustomComp";

export default function CustomSwitch() {
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
      {/* <Switch
        trackColor={{ true: "blue", false: "red" }}
        thumbColor={isToggle ? "blue" : "red"}
        onValueChange={toggleIt}
        value={isToggle}
      />
      <Text>{isToggle?"Toggle On":"Toggle off"}</Text>
      <Switch
        trackColor={{ true: "green", false: "red" }}
        thumbColor={isMicOn ? "green" : "red"}
        onValueChange={changeMicState}
        value={isMicOn}
      />
      <Text>{isMicOn?"Mic On":"Mic off"}</Text> */}

      <Text>{isToggle ? "Toggle On" : "Toggle off"}</Text>
      <CustomComp isEnabled={isToggle} changeSwitchState={toggleIt} />
      <Text>{isMicOn ? "Mic On" : "Mic off"}</Text>
      <CustomComp isEnabled={isMicOn} changeSwitchState={changeMicState} />
    </View>
  );
}
