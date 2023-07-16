import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

// display selectable item.
const ListItem = ({ item, onPress }) => (
  <TouchableOpacity
    activeOpacity={0.6}
    underlayColor="#DDDDDD"
    onPress={(item) => onPress(item)}
  >
    <View style={styles.item}>
      <Image
        style={styles.roundImg}
        source={{
          uri: item.imageLink,
        }}
        height={60}
        width={60}
      />
      <Text>{item.name}</Text>
    </View>
  </TouchableOpacity>
);

// display array of selectable items
const List = ({ data, onSelect }) => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.itemContainer}
        data={data}
        renderItem={({ item }) => {
          return <ListItem item={item} onPress={() => onSelect(item)} />;
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
  roundImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "white",
    marginRight: 10,
  },
});
