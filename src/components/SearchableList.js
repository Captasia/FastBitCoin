import React, { useMemo, useState } from "react";
import { View } from "react-native";
// import components
import List from "./List";
import SearchBar from "./SearchBar";

/**
 * SearchableList() is in charge of handling SearchBar
 * and List; this means that here we keep the state for:
 * 1. Search query - received from searchbar, sent to list
 * 2. List data - filter based on search query.
 * @param {data = [{id , title, name, imageLink}]}
 **/
export default function SearchableList({ data, onSelect }) {
  const [searchParam, setSearchParam] = useState("");
  // items will never get mutated
  const [items, _] = useState(data);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      return item.name.toLowerCase().includes(searchParam.toLowerCase());
    });
  }, [searchParam]);

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        searchPhrase={searchParam}
        onSearchPhraseChange={setSearchParam}
      />
      <List onSelect={(item) => onSelect(item)} data={filteredItems} />
    </View>
  );
}
