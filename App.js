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
import TouchableNativeFeedbackComp from "./Components/_24TouchableNativeFeedback/TouchableNativeFeedbackComp";
import ToastAndroidcomp from "./Components/_25ToastAndroid/ToastAndroidcomp";
import AppearanceComp from "./Components/_26Appearance/AppearanceComp";
import PlatformOS from "./Components/_27Platform/PlatformOS";
import AnimatedComp from "./Components/_28AnimatedComp/AnimatedComp";
import DrawerLayloutComp from "./Components/_29DrawerLayoutAndroid/DrawerLayloutComp";
import TransformComp from "./Components/_30Transform/TransformComp";
import BackHandlerComp from "./Components/_31BackHandler/BackHandlerComp";
import PromptComp from "./Components/_32Prompt/PromptComp";
import VibrationComp from "./Components/_33Vibration/VibrationComp";
import SliderComp from "./Components/_34Slider/SliderComp";
import NavigatorComp from "./Components/_35Navigation/NavigatorComp";
import NavigationComp from "./Components/_36StackNavigation/NavigationComp";
import BottomTabNavigationComp from "./Components/_37BottomTabNavigation/BottomTabNavigationComp";
import APICall from "./Components/_38APIfetching/APICall";
export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor:"yellow",
        marginTop:50
      }}
    > 
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
      {/* <RefreshControlComp/>  */}
      {/* <TouchableNativeFeedbackComp/> */}
      {/* <ToastAndroidcomp/> */}
      {/* <AppearanceComp/> */}
      {/* <PlatformOS/> */}
      {/* <AnimatedComp/> */}
      {/* <TransformComp /> */}
      {/* <BackHandlerComp/> */}
      {/* <PromptComp/> */}
      {/* <VibrationComp/> */}
      {/* <SliderComp/> */}
      {/* <NavigatorComp/> */}
      {/* <NavigationComp/> */}
      {/* <BottomTabNavigationComp/>  */}
      <APICall/>
    </View>

    //use Drawer without View
    // <DrawerLayloutComp/>
  );
}
