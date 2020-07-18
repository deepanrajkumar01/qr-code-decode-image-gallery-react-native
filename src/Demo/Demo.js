import React, { Component, useRef, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SectionList,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";

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
  let flatListRef = useRef(null);
  const [scrollId, setScrollId] = useState(0);
  const scrollToSection = (id) => {
    sectionListRef.scrollToLocation({
      animated: true,
      sectionIndex: id,
      itemIndex: 0,
      viewPosition: 0,
    });
    console.log("sectionListRef", sectionListRef);
  };

  const onCheckViewableItems = (props) => {
    console.log("props", props);
    props.changed.map((data) => {
      if (data.isViewable && data.section.id) {
        console.log("data.section.id", data.section.id);
        setScrollId(Number(data.section.id));
        flatListRef.scrollToIndex({
          animated: true,
          index: Number(data.section.id),
          viewPosition: 0,
        });
      }
    });
  };

  const sectionListScroll = (e) => {
    //console.log("e", e.nativeEvent.contentOffset.y);
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

  const Item = (props) => {
    const { title, id, index } = props;
    return (
      <TouchableOpacity
        onPress={() => scrollToSection(id)}
        style={styles.sectionTitle && (id === scrollId && styles.sectionTitle)}
      >
        <Text>{title}</Text>
      </TouchableOpacity>
    );
  };

  const renderItem = (props) => {
    const { item } = props;
    return (
      <View style={styles.item}>
        <Text>{item.title}</Text>
      </View>
    );
  };

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
    sectionTitle: {
      backgroundColor: "grey",
      paddingVertical: 10,
      paddingHorizontal: 10,
      marginHorizontal: 10,
      marginVertical: 10,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 20,
    },
  });

  return (
    <View style={styles.container}>
      <Button onPress={scrollToSection} title="scroll" />
      <FlatList
        data={SECTIONS}
        renderItem={({ item }) => <Item title={item.title} id={item.id} />}
        horizontal
        ref={(ref) => (flatListRef = ref)}
      />
      <SectionList
        style={styles.sectionList}
        sections={SECTIONS}
        ref={(ref) => (sectionListRef = ref)}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        onViewableItemsChanged={onCheckViewableItems}
        onScroll={sectionListScroll}
      />
    </View>
  );
};

export default Demo;
