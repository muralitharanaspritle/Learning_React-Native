import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";
import Login from "./Login";

const Stack = createNativeStackNavigator();
export default function NavigationComp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LOGIN"
          component={Login}
          options={{
            title: "Login Screen",
            headerStyle: {
              backgroundColor: "blue",
            },
            headerTitleStyle: {
              color: "white",
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="COMP1"
          component={Comp1}
          options={{
            title: "Login Screen",
            headerStyle: {
              backgroundColor: "blue",
            },
            headerTitleStyle: {
              color: "white",
            },
            headerTitleAlign: "center",
            headerBackVisible:true
          }}
        />
        <Stack.Screen
          name="COMP2"
          component={Comp2}
          options={{
            headerBackVisible: false,
          }}
        />
        <Stack.Screen name="COMP3" component={Comp3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
