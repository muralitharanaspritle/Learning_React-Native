import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import Category from "./Category";
import ProductScreen from "./ProductScreen";

const Stack = createNativeStackNavigator();
function NavigatorComp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Product" component={ProductScreen}/>
        <Stack.Screen name="Category" component={Category}/>
      </Stack.Navigator> 
    </NavigationContainer>
  );
}

export default NavigatorComp;
