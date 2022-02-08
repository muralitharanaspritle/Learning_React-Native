import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import UserScreen from "./UserScreen";
import ProductScreen from "./ProductScreen";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const BottomTabNavigationComp = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen}  />
        <Tab.Screen name="User" component={UserScreen} />
        <Tab.Screen name="Product" component={ProductScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigationComp;

const styles = StyleSheet.create({});
