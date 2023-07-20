import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

import global from "../style/global";

// display selectable item.
const ListItem = ({ item, itemType, onPress }) => (
  <TouchableOpacity
    activeOpacity={0.6}
    underlayColor="#DDDDDD"
    onPress={(item) => onPress(item)}
  >
    <View style={styles.item}>
      {itemType === "Country" && <Image
        style={global.round_image}
        source={{
          uri: item.imageLink,
        }}
        height={24}
        width={24}
      />}
      <Text style={global.font_drawer_generic}>{item.name}</Text>
    </View>
  </TouchableOpacity>
);

// display array of selectable items
const List = ({ data, dataType, onSelect }) => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.itemContainer}
        data={data}
        renderItem={({ item }) => {
          return <ListItem item={item} itemType={dataType} onPress={() => onSelect(item)} />;
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default List;

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    flexDirection: "row",
  },
  itemContainer: {
    padding: 10,
  },
  item: {
    backgroundColor: "white",
    flexDirection: "row",
    height: 60,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E7E8E9",
  },
});
