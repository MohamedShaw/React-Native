import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import background from '../assets/background.jpg'

const listItem = props => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      {/* <Image resizeMode="cover" source={props.placeImage} style={styles.placeImage} /> */}
      <Image resizeMode="cover" source={background} style={styles.placeImage} />

      <Text style = {styles.textContainerModal}>{props.placeName}</Text>
      <Text style = {styles.emailText}>{props.email}</Text>

    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    width: "97%",
    padding: 3,
    margin:5,
    marginLeft:5,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
    borderWidth:1,
    borderColor:'steelblue',
    borderRadius:10
  },
  placeImage: {
      marginRight: 8,
      height: 50,
      width: 50,
      borderRadius:25,
      borderWidth:2,
      borderColor:'steelblue'
  },
  textContainerModal: {
    color: 'black',
    textAlign: 'center',
    fontWeight :'normal',
    // fontSize : 26,

},
emailText:{
  textAlign:'center',
  fontSize:20,
  fontFamily:'timesnewroman',
  marginLeft : 10
}
});

export default listItem;
