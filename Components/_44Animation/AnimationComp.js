import React, { Component } from "react";
import {
  StyleSheet,
  AppRegistry,
  Text,
  View,
  Animated,
  Easing,
} from "react-native";

export default class AnimationComp extends Component {
  constructor() {
    super();
    this.spinValue = new Animated.Value(0); //declare spinValue as a new Animated.Value and pass 0 (zero) in it.
  }
  componentDidMount() {
    this.spin();
  }
  //create a spin method and call it from componentDidMount
  spin() {
    this.spinValue.setValue(0); //set spinValue to 0 (zero)
    Animated.timing( 
      //calling Animated.timing() method, it takes two arguments:
      this.spinValue, // value
      {
        // and config object
        toValue: 1, //and setting spinValue to 1
        duration: 2000, //within 4000 milliseconds
        easing: Easing.linear,
        useNativeDriver:true
      }
    ).start();
  } 
  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"],
    });
    return ( 
      <View style={styles.container}>
        <Animated.View
          style={{
            width: 227,
            height: 200,
            backgroundColor:"red",
            transform: [{ rotate:spin }],
          }}
        />
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
