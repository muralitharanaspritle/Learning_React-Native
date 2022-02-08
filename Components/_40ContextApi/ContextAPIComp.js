import { StyleSheet, Text, View } from "react-native";
import React,{useState} from "react";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";

export const MyState = React.createContext();
const ContextAPIComp = () => {
    const [myValue,setMyValue] = useState("react native")
    const changeMyValue=()=>{
        setMyValue("React")
    }
  return (
    <MyState.Provider value={{changeMyValue:changeMyValue,data:[myValue,"HI"]}}>
      <View>
        <Comp1 />
        <Comp2 />
      </View>
    </MyState.Provider>
  );
};

export default ContextAPIComp;

const styles = StyleSheet.create({});
