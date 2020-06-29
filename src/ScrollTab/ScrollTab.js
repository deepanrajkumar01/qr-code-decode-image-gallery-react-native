import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttonStyles: {
    backgroundColor: "#ccc",
    flex: 1,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  mainStyle: {
    backgroundColor: "maroon",
  },
  mainContainer: {
    flex: 3,
  },
  subContainer: {
    flex: 1,
  },
  mainView: {
    flex: 1,
    backgroundColor: "green",
    margin: 10,
    padding: 10,
  },
});

const ScrollTab = () => {
  return (
    <View style={styles.mainView}>
      <Text>ScrollTab</Text>
    </View>
  );
};

export default ScrollTab;
