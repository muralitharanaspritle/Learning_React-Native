import React, { useRef } from "react";
import { View, Text, Animated, Button, StyleSheet } from "react-native";
export default function AnimatedComp() {
  const fadeAnimation = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(fadeAnimation, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View>
      <Animated.View
        style={[styles.fadingContainer, { opacity: fadeAnimation }]}
      >
        <Text style={styles.fadingText}>Fading View</Text>
      </Animated.View>

      <View style={styles.buttonRow}>
        <Button title="fade In" onPress={() => fadeIn()} />
        <Button title="fade Out" onPress={() => fadeOut()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fadingContainer: {
    padding: 20,
    backgroundColor: "red",
  },
  fadingText: {
    fontSize: 20,
  },
  buttonRow: {
    justifyContent: "center",
    marginVertical: 15,
  },
});
