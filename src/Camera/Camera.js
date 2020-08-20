import React from "react";
import { View, Text, Button } from "react-native";

const styles = {
  viewContainer: {
    padding: 10,
    margin: 10,
  },
};

const Camera = ({ navigation }) => {
  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewContainer}>
        <Button
          style={{ margin: 10 }}
          title="CheckCamera"
          onPress={() => navigation.navigate("CheckCamera")}
        />
      </View>
      <View style={styles.viewContainer}>
        <Button
          style={{ margin: 10 }}
          title="CameraTest"
          onPress={() => navigation.navigate("CameraTest")}
        />
      </View>
      <View style={styles.viewContainer}>
        <Button
          style={{ margin: 10 }}
          title="Go Back to Home"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </View>
  );
};

export default Camera;
