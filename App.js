import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Swicth,
  Switch,
} from "react-native";
import ViewComp from "./Components/_01ViewComp/ViewComp";
import TextComp from "./Components/_02TextComp/TextComp";
import ButtonComp from "./Components/_03ButtonComp/ButtonComp";
import State from "./Components/_04State/State";
import TextInputComp from "./Components/_05TextInput/TextInputComp";
import ListandScroll from "./Components/_06ListandScroll/ListandScroll";
import TouchableComp from "./Components/_07TouchableComp/TouchableComp";
import ExternalStyle from "./Components/_08ExternalStyle/ExternalStyle";
import ImageComp from "./Components/_09Image/ImageComp";
import AlertDialog from "./Components/_10AlertDialog/AlertDialog";
import DismissKeyboard from "./Components/_11DismissKeyboard/DismissKeyboard";
import CustomButton from "./Components/_12CustomButton/CustomButton";
import FlexProperty from "./Components/_13Flex/FlexProperty";
import ModalComp from "./Components/_14Modal/ModalComp";
import PropComp from "./Components/_15Props/PropComp";
import SwitchButton from "./Components/_16SwitchButton/SwitchButton";
import CustomSwitch from "./Components/_17CustomSwitch/CustomSwitch";
import CustomButton2 from "./Components/_18CustomButton/CustomButton";
import ActivityIndicatorComp from "./Components/_19ActivityIndicator/ActivityIndicatorComp";
import SectionListComp from "./Components/_20SectionList/SectionListComp";
import PressableComp from "./Components/_21Pressable/PressableComp";
import RefreshControlComp from "./Components/_22RefreshControl/RefreshControlComp";
import InputAccessaryViewComp from "./Components/_23InputAccessary/InputAccessaryViewComp";
export default function App() {
  const [theme, setTheme] = useState(false);
  const [background, setBackground] = useState("white");
  const changeTheme = () => {
    setTheme(!theme);
    if (!theme) {
      setBackground("black");
    } else {
      setBackground("white");
    }
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: background,
        marginTop:50
      }}
    >
      {/* <Switch
        trackColor={{ false: "black", true: "white" }}
        thumbColor={theme ? "blue" : "red"}
        onValueChange={changeTheme}
        value={theme}
      /> */}
      {/* <ViewComp />
      <TextComp />
      <ButtonComp />
      <State />
      <TextInputComp />
      <ListandScroll />
      <TouchableComp />
      <ExternalStyle />
      <ImageComp />
      <AlertDialog />
      <DismissKeyboard />
      <CustomButton />
      <FlexProperty />
      <ModalComp />
      <PropComp />
      <SwitchButton />
      <CustomSwitch />
      <CustomButton2 title={"custombutton"} />
      <ActivityIndicatorComp/>
      <SectionListComp/> */}
      {/* <PressableComp/> */}
      <RefreshControlComp/> 
      
    </View>
  );
}

