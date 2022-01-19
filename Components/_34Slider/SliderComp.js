import React, { useState } from "react";
import { Text, View } from "react-native";
import Slider from "@react-native-community/slider";
function SliderComp() {
  const [range, setRange] = useState(0);
  return (
    <View>
      <Text
        style={{ 
          fontSize: 40,
          fontWeight: "bold",
          alignSelf: "center",
          marginTop: 20,
          backgroundColor: "red",
          padding: 25,
          borderRadius: 10,
          color: "white",
          width:150,
          textAlign:"center",
          opacity:range+0.1
        }}
      > 
        {Math.floor(range * 100)}
      </Text>
      <Slider
        style={{ height: 100, backgroundColor: "red", margin: 20 }}
        onValueChange={(value) => setRange(value)}
        minimumValue={0}
        maximumValue={1}
        thumbTintColor="white"
       onSlidingStart={()=>console.log("started")}
      />
    </View>
  );
}

export default SliderComp;
