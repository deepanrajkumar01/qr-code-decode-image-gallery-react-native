import React, { Component, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  SectionList,
  Button,
  FlatList,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ITEM_HEIGHT = 50;
const SECTIONS = [
  {
    id: 0,
    title: "section 1",
    data: [
      { title: "row 1" },
      { title: "row 2" },
      { title: "row 3" },
      { title: "row 4" },
      { title: "row 5" },
    ],
  },
  {
    id: 1,
    title: "section 2",
    data: [
      { title: "row 1" },
      { title: "row 2" },
      { title: "row 3" },
      { title: "row 4" },
    ],
  },
  { id: 2, title: "section 3", data: [{ title: "row 1" }, { title: "row 2" }] },
  { id: 3, title: "section 4", data: [{ title: "row 1" }, { title: "row 2" }] },
  { id: 4, title: "section 5", data: [{ title: "row 1" }, { title: "row 2" }] },
  { id: 5, title: "section 6", data: [{ title: "row 1" }, { title: "row 2" }] },
  { id: 6, title: "section 7", data: [{ title: "row 1" }, { title: "row 2" }] },
];

const Demo = () => {
  let sectionListRef = useRef(null);
  const scrollToSection = (id) => {
    sectionListRef.scrollToLocation({
      animated: true,
      sectionIndex: id,
      itemIndex: 0,
      viewPosition: 0,
    });
    console.log("sectionListRef", sectionListRef);
  };

  const getItemLayout = (data, index) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  });

  const renderSectionHeader = ({ section }) => (
    <View style={styles.header}>
      <Text>{section.title}</Text>
    </View>
  );

  const Item = ({ title, id }) => (
    <Button onPress={() => scrollToSection(id)} title={title} />
  );

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.title}</Text>
    </View>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 10,
    },
    sectionList: {
      padding: 10,
    },
    header: {
      height: ITEM_HEIGHT,
      backgroundColor: "pink",
      alignItems: "center",
      justifyContent: "center",
    },
    item: {
      height: ITEM_HEIGHT,
      backgroundColor: "grey",
      padding: 10,
    },
    listItem: {
      borderRadius: 30,
      backgroundColor: "maroon",
      margin: 10,
      padding: 20,
      alignContent: "center",
      justifyContent: "center",
    },
    listTitle: {
      color: "white",
    },
  });

  return (
    <View style={styles.container}>
      <Button onPress={scrollToSection} title="scroll" />
      <FlatList
        data={SECTIONS}
        renderItem={({ item }) => <Item title={item.title} id={item.id} />}
        keyExtractor={(item) => item.id}
        horizontal
      />
      <SectionList
        keyExtractor={(item) => item.id}
        style={styles.sectionList}
        sections={SECTIONS}
        ref={(ref) => (sectionListRef = ref)}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
      />
    </View>
  );
};

export default Demo;
