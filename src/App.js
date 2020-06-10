import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Button,
  Platform,
  Linking,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const App = ({ navigation }) => {
  const [TestState, setTestState] = useState("default");
  const [testData, setTestData] = useState(undefined);

  useEffect(() => {
    if (Platform.OS === "android") {
      Linking.getInitialURL().then((url) => {
        setTestData(url);
        console.log("url", url);
      });
    } else {
      Linking.addEventListener("url", handleOpenURL);
    }
    return () => {
      Linking.removeEventListener("url", handleOpenURL);
    };
  });

  // const nav = url => {
  //   const {navigate} = navigation;
  //   const route = url.replace(/.*?:\/\//g, '');
  //   const id = route.match(/\/([^\/]+)\/?$/)[1];
  //   const routeName = route.split('/')[0];

  //   console.log('navigate', navigate);
  //   console.log('route', route);
  //   console.log('id', id);
  //   console.log('routeName', routeName);
  // };

  const handleOpenURL = (event) => {
    console.log("event", event);
    const route = event.url.replace(/.*?:\/\//g, "");
    console.log("route", route);
  };

  const updateState = () => {
    setTestState("stateChanged");
    navigation.navigate("Home");
  };
  const updateStateData = () => {
    setTestState("stateChanged");
  };
  return (
    <>
      <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.buttonStyles} onPress={updateState}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyles}
          onPress={() => navigation.navigate("ImageUpload")}
        >
          <Text>Image Upload</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyles}
          onPress={() => navigation.navigate("Camera")}
        >
          <Text>Camera Scan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyles}
          onPress={() => navigation.navigate("CheckCamera")}
        >
          <Text>CheckCamera</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyles}
          onPress={() => navigation.navigate("ScanQR")}
        >
          <Text>Scan QR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mainContainer}>
        <Button title="Change state" onPress={updateStateData} />
      </View>
      <View style={styles.mainContainer}>
        <Text>{TestState}</Text>
        <ScrollView>
          <Text>{JSON.stringify(testData, null, 2)}</Text>
        </ScrollView>
      </View>
    </>
  );
};

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
    flex: 1,
  },
  mainView: {
    flex: 1,
    backgroundColor: "green",
  },
});

export default App;
