import {
  StyleSheet,
  Text,
  View,
  Button,
  ProgressBarAndroid,
} from "react-native";
import React, { useState, useEffect } from "react";

const ProgressBarComp = () => {
  const [progressStatus, setProgressStatus] = useState(0);
  const [progressInterval, setProgressInterval] = useState(null);

  useEffect(() => {
    if (progressStatus > 1) {
      stopProgress();
    }
  }, [progressStatus]);

  const startProgress = () => {
    setProgressInterval(
      setInterval(() => {
        if (progressStatus <= 1) {
          setProgressStatus((prevState) => prevState + 0.1);
        }
      }, 500)
    );
  };

  const stopProgress = () => {
    clearInterval(progressInterval);
    setProgressInterval(null);
    setProgressStatus(0.0);
  };

  return (
    <View>
      <Text style={{ fontSize: 20, color: "#000" }}>
        {" "}
        Progress Value: {parseFloat((progressStatus * 100).toFixed(3))} %
      </Text>
      <ProgressBarAndroid
        styleAttr="Horizontal"
        progress={progressStatus}
        indeterminate={false}
        color={"red"}
      />
      <Button title="start" onPress={() => startProgress()} />
      <Button title="Stop" onPress={() => stopProgress()} />
    </View>
  );
};

export default ProgressBarComp;

const styles = StyleSheet.create({});
