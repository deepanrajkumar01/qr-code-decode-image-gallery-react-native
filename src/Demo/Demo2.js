import React, { Component } from "react";
import { Text, View, StyleSheet, SectionList, Button } from "react-native";

const ITEM_HEIGHT = 50;
const SECTIONS = [
  { title: "section 1", data: [{ title: "row 1" }, { title: "row 2" }] },
  { title: "section 2", data: [{ title: "row 1" }, { title: "row 2" }] },
  { title: "section 3", data: [{ title: "row 1" }, { title: "row 2" }] },
  { title: "section 4", data: [{ title: "row 1" }, { title: "row 2" }] },
  { title: "section 5", data: [{ title: "row 1" }, { title: "row 2" }] },
  { title: "section 6", data: [{ title: "row 1" }, { title: "row 2" }] },
  { title: "section 7", data: [{ title: "row 1" }, { title: "row 2" }] },
];

export default class Demo extends Component {
  scrollToSection = () => {
    this.sectionListRef.scrollToLocation({
      animated: true,
      sectionIndex: 6,
      itemIndex: 0,
      viewPosition: 0,
    });
  };

  getItemLayout = (data, index) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  });

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.scrollToSection} title="scroll" />
        <SectionList
          style={styles.sectionList}
          sections={SECTIONS}
          ref={(ref) => (this.sectionListRef = ref)}
          renderSectionHeader={this.renderSectionHeader}
          renderItem={this.renderItem}
          getItemLayout={this.getItemLayout}
        />
      </View>
    );
  }

  renderSectionHeader = ({ section }) => (
    <View style={styles.header}>
      <Text>{section.title}</Text>
    </View>
  );

  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  sectionList: {
    flex: 1,
    padding: 10,
  },
  header: {
    height: ITEM_HEIGHT,
  },
  item: {
    height: ITEM_HEIGHT,
  },
});
