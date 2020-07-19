import React, { Component, useRef, useState, useEffect } from "react";
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
      {
        para:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in egestas odio, fringilla semper odio. Vestibulum viverra nulla at congue dictum. Nulla volutpat in eros sit amet finibus. Vestibulum pellentesque rutrum nisl vel auctor. Nam nunc ipsum, gravida et ullamcorper a, venenatis eu ex",
      },
    ],
  },
  {
    id: 1,
    title: "section 2",
    data: [
      {
        para:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in egestas odio, fringilla semper odio. Vestibulum viverra nulla at congue dictum. Nulla volutpat in eros sit amet finibus. Vestibulum pellentesque rutrum nisl vel auctor. Nam nunc ipsum, gravida et ullamcorper a, venenatis eu ex. Phasellus vehicula gravida lorem, non egestas tellus porttitor tempor. Etiam libero velit, consequat ut consectetur ac, vehicula in neque. Aenean convallis erat nunc, vitae euismod urna condimentum nec. Quisque varius libero rutrum velit pharetra, at pulvinar erat vehicula. Vestibulum aliquet, ligula nec placerat pulvinar, enim tortor faucibus odio, vel viverra velit ligula sit amet ante. Curabitur at libero mattis, porttitor nisl eu, interdum dui. Proin varius eros a dapibus pulvinar. Sed viverra orci sit amet urna hendrerit viverra. Nunc diam lorem, placerat eget lorem in, pharetra scelerisque ex. Nunc quis nunc dui.",
      },
    ],
  },
  {
    id: 2,
    title: "section 3",
    data: [
      {
        para:
          "Fusce tempus eu justo quis sollicitudin. Sed nec nunc nec ligula fringilla ultricies. Sed interdum leo sit amet nisi convallis, nec ullamcorper metus tristique. Suspendisse enim quam, elementum sed rhoncus at, porttitor vitae ante. Nam dapibus, odio id facilisis lacinia, est est interdum purus, pulvinar vehicula nibh purus nec enim. Duis scelerisque, ipsum et pulvinar tristique, purus nunc pulvinar eros, ac condimentum sapien massa sed sapien. Aliquam lacus est, semper ac libero non, pulvinar dictum ipsum. Vivamus pharetra pellentesque risus, in dignissim massa consectetur id. Fusce porta leo luctus dolor euismod tincidunt. Phasellus elit est, dictum vel diam iaculis, malesuada sodales erat. Ut sit amet ultricies lectus, et posuere arcu. Nam pellentesque sem vitae consequat imperdiet. Pellentesque luctus finibus sem, non molestie nibh tristique ac. Sed condimentum ipsum faucibus, tincidunt nunc vel, hendrerit dui. Sed ac arcu pretium, auctor nulla id, convallis lectus.Fusce maximus ullamcorper quam, at venenatis ipsum varius eget. Quisque eu metus non erat consectetur posuere. Pellentesque non erat accumsan, imperdiet nulla ut, facilisis nunc. In a turpis at felis varius porta ut sed odio. Nullam ultricies risus consectetur quam consequat varius. Curabitur ac quam sit amet tellus rhoncus convallis. Donec odio dui, vehicula non pretium ac, rhoncus a ipsum. Donec ut fringilla orci, ultricies pulvinar velit. Sed tristique sit amet augue sed blandit. Nunc sollicitudin, neque semper vehicula volutpat, felis tellus",
      },
    ],
  },
  {
    id: 3,
    title: "section 4",
    data: [
      {
        para:
          "Vestibulum ante ipsumcorper metus tristique. Suspendi enim. Duis scelerisque, ipsum et pulvinar tristique, purus nunc pulvinar eros, ac condimentum sapien massa sed sapien. Aliquam lacus est, semper ac libero non, pulvinar dictum ipsum. Vivamus pharetra pellentesque risus, in dignissim massa consectetur id. Fusce porta leo luctus dolor euismod tincidunt. Phasellus elit est, dictum vel diam iaculis, malesuada sodales erat. Ut sit amet ultricies lectus, et posuere arcu. Nam pellentesque sem vitae consequat imperdiet. Pellentesque luctus finibus sem, non molestie nibh tristique ac. Sed condimentum ipsum faucibus, tincidunt nunc vel, hendrerit dui. Sed ac arcu pretium, auctor nulla id, convallis lectus.Fusce maximus ullamcorper quam, at venenatis ipsum varius eget. Quisque eu metus non erat consectetur posuere. Pellentesque non erat accumsan, imperdiet nulla ut, facilisis nunc. In a turpis at felis varius porta ut sed odio. Nullam ultricies risus consectetur quam consequat varius. Curabitur ac quam sit amet tellus rhoncus convallis. Donec odio dui, vehicula non pretium ac, rhoncus a ipsum. Donec ut fringilla orci, ultricies pulvinar velit. Sed tristique sit amet augue sed blandit. Nunc sollicitudin, neque semper vehicula volutpat, felis tellus",
      },
    ],
  },
  {
    id: 4,
    title: "section 5",
    data: [
      {
        para:
          "posuere vel. Donec auctor convallis dignissim. Aliquam lacus ligula, elementum at rutrum dignissim, blandit nec massa. Aenean purus nulla, feugiat vel imperdiet porta, bibendum non tellus. Morbi nec dapibus mi, id venenatis arcu. Donec posuere mollis lectus, et sodales nulla pharetra sed. Proin a condimentum nisl, ut commodo quam. Sed finibus urna lacus, non hendrerit lectus pharetra eu.",
      },
    ],
  },
  {
    id: 5,
    title: "section 6",
    data: [
      {
        para:
          "Fusce tempus eu justo quis sollicitudin. Sed nec nunc nec ligula fringilla ultricies. Sed interdum leo sit amet nisi convallis, nec ullamcorper metus tristique. Suspendisse enim quam, elementum sed rhoncus at, porttitor vitae ante. Nam dapibus, odio id facilisis lacinia, est est interdum purus, pulvinar vehicula nibh purus nec enim. Duis scelerisque, ipsum et pulvinar tristique, purus nunc pulvinar eros, ac condimentum sapien massa sed sapien. Aliquam lacus est, semper ac libero non, pulvinar dictum ipsum. Vivamus pharetra pellentesque risus, in dignissim massa consectetur id. Fusce porta leo luctus dolor euismod tincidunt. Phasellus elit est, dictum vel diam iaculis, malesuada sodales erat. Ut sit amet ultricies lectus, et posuere arcu. Nam pellentesque sem vitae consequat imperdiet. Pellentesque luctus finibus sem, non molestie nibh tristique ac. Sed condimentum ipsum faucibus, tincidunt nunc vel, hendrerit dui. Sed ac arcu pretium, auctor nulla id, convallis lectus.Fusce maximus ullamcorper quam, at venenatis ipsum varius eget. Quisque eu metus non erat consectetur posuere. Pellentesque non erat accumsan, imperdiet nulla ut, facilisis nunc. In a turpis at felis varius porta ut sed odio. Nullam ultricies risus consectetur quam consequat varius. Curabitur ac quam sit amet tellus rhoncus convallis. Donec odio dui, vehicula non pretium ac, rhoncus a ipsum. Donec ut fringilla orci, ultricies pulvinar velit. Sed tristique sit amet augue sed blandit. Nunc sollicitudin, neque semper vehicula volutpat, felis tellus ultricies tellus, non consectetur ipsum eros eget mi.",
      },
    ],
  },
  {
    id: 6,
    title: "section 7",
    data: [
      {
        para:
          "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam nisi risus, cursus quis euismod gravida, maximus eget purus. Sed pharetra pretium lorem ac egestas. In vitae tempus est, vel placerat nunc. Ut quis mi arcu. Quisque quis nisl eget odio volutpat lobortis. Duis sit amet lectus quis lorem dapibus consectetur nec volutpat odio. Quisque egestas sagittis justo vel tempus. Vivamus et metus purus. Sed sit amet libero ut diam commodo feugiat ac in ipsum. Cras egestas quam libero, quis pretium enim cursus eget. Vivamus eu laoreet sem. Pellentesque sit amet velit et magna maximus rutrum. Duis quis tempor nisl, et posuere odio. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus",
      },
    ],
  },
];

const ScrollVis = () => {
  let sectionListRef = useRef(null);
  let flatListRef = useRef(null);
  const [scrollId, setScrollId] = useState(0);
  const [listNumber, setListNumber] = useState([]);
  const [currentSection, setCurrentSection] = useState(0);
  const [newData, setNewData] = useState([]);
  const [listHeight, setListHeight] = useState([]);
  const [listData, setListData] = useState([]);
  const [pillSelecction, setPillSelecction] = useState({ currentId: 0 });
  const [disableScroll, setDisableScroll] = useState(true);

  const updateListHeight = (data) => {
    let arr = data,
      sum = 0,
      result = arr.map((v) => ({
        id: v.id,
        title: v.title,
        height: (sum += v.height),
      }));
    setListData(result);
    return result;
  };

  useEffect(() => {
    if (listHeight) {
      updateListHeight(listHeight);
    }
  }, [listHeight]);

  const scrollToSection = (id) => {
    setPillSelecction({ currentId: id });
    setDisableScroll(false);
    sectionListRef.scrollToLocation({
      animated: true,
      sectionIndex: id,
      itemIndex: 0,
      viewPosition: 0,
    });
  };

  const onCheckViewableItems = (props) => {
    const { changed } = props;
    changed.map((data) => {
      if (data?.isViewable && data?.section?.id === scrollId) {
        console.log("object", data);
        // setScrollId(Number(data?.section?.id));
        // setPillSelecction({ currentId: data?.section?.id });
        // flatListRef.scrollToIndex({
        //   animated: true,
        //   index: Number(data?.section?.id),
        //   viewPosition: 0,
        // });
      }
    });
  };

  const sectionListScroll = (props) => {
    const { nativeEvent } = props;
    const sectionHeight = listData;
    sectionHeight.forEach((each) => {
      if (disableScroll) {
        if (each.height - Math.trunc(nativeEvent.contentOffset.y) <= 0) {
          setScrollId(Number(each?.id));
          setPillSelecction({ currentId: each?.id });
          flatListRef.scrollToIndex({
            animated: true,
            index: Number(each.id),
            viewPosition: 0,
          });
        }
      }
      // console.log(
      //   "1",
      //   each.id === 0
      //     ? each.height - Math.trunc(nativeEvent.contentOffset.y)
      //     : "NA",
      //   "2",
      //   each.id === 1
      //     ? each.height - Math.trunc(nativeEvent.contentOffset.y)
      //     : "NA",
      //   "3",
      //   each.id === 2
      //     ? each.height - Math.trunc(nativeEvent.contentOffset.y)
      //     : "NA",
      //   "4",
      //   each.id === 3
      //     ? each.height - Math.trunc(nativeEvent.contentOffset.y)
      //     : "NA",
      //   "5",
      //   each.id === 4
      //     ? each.height - Math.trunc(nativeEvent.contentOffset.y)
      //     : "NA",
      //   "6",
      //   each.id === 5
      //     ? each.height - Math.trunc(nativeEvent.contentOffset.y)
      //     : "NA",
      //   "7",
      //   each.id === 6
      //     ? each.height - Math.trunc(nativeEvent.contentOffset.y)
      //     : "NA"
      // );
    });
  };

  const onLayoutData = (event, props) => {
    const { x, y, width, height } = event.nativeEvent.layout;
    const heightData = [
      ...listHeight,
      {
        id: props.section.id,
        title: props.section.title,
        height: Math.trunc(height),
      },
    ];
    setListHeight(heightData);
  };

  const getItemLayout = (data, index) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  });

  const renderSectionHeader = ({ section }) => {
    return (
      <View style={styles.header}>
        <Text>{section.title}</Text>
      </View>
    );
  };

  const Item = (props) => {
    const { title, id, index } = props;
    return (
      <TouchableOpacity
        onPress={() => scrollToSection(id)}
        style={
          pillSelecction.currentId === id
            ? { ...styles.sectionTitle, backgroundColor: "white" }
            : styles.sectionTitle
        }
      >
        <Text>{title}</Text>
      </TouchableOpacity>
    );
  };

  const renderItem = (props) => {
    const { item } = props;
    return (
      <View style={styles.item} onLayout={(e) => onLayoutData(e, props)}>
        <Text>{item.para}</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    sectionList: {
      paddingHorizontal: 10,
      marginTop: 10,
    },
    header: {
      backgroundColor: "pink",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 20,
    },
    item: {
      backgroundColor: "grey",
      padding: 20,
      lineHeight: 1,
    },
    listItem: {
      borderRadius: 30,
      backgroundColor: "maroon",
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
      <Button onPress={updateListHeight} title="scroll" />
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
        onViewableItemsChanged={onCheckViewableItems}
        onScroll={sectionListScroll}
        onTouchStart={() => setDisableScroll(true)}
      />
    </View>
  );
};

export default ScrollVis;
