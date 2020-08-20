import React from "react";
import { View, Text, Button, ScrollView } from "react-native";

const styles = {
  scrollContainer: {
    flex: 1,
  },
  viewContainer: {
    marginTop: 20,
  },
};

const Home = ({ navigation }) => {
  return (
    <ScrollView style={{ marginHorizontal: 20 }}>
      <View style={styles.viewContainer}>
        <Button
          style={{ margin: 10 }}
          title="Image upload"
          onPress={() => navigation.navigate("Gallery")}
        />
      </View>
      <View style={styles.viewContainer}>
        <Button
          style={{ margin: 10 }}
          title="Camera Checks"
          onPress={() => navigation.navigate("Camera")}
        />
      </View>
      <View style={styles.viewContainer}>
        <Button
          style={{ margin: 10 }}
          title="Scroll Tabs"
          onPress={() => navigation.navigate("ScrollTabs")}
        />
      </View>
      <View style={styles.viewContainer}>
        <Button
          style={{ margin: 10 }}
          title="Tabs"
          onPress={() => navigation.navigate("Tabs")}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
