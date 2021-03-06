import React from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from '../ListItem/ListItem';

const placeList = props => {
  // alert('list '+JSON.stringify(props.places))
  return (
    <FlatList
      style={styles.listContainer}
      data={props.places}
      renderItem={(info) => (
        <ListItem
          placeName={info.item.name}
          email = {info.item.email}
          placeImage={info.item.image}
          onItemPressed={() => props.onItemSelected(info.item.key)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default placeList;
