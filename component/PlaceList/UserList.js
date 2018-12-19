import React from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from '../ListItem/ListItem';
import firebase from "react-native-firebase";

const userList = props => {
    // alert('list '+JSON.stringify(props.places))

    var user = firebase.auth().currentUser;
    return (
        <FlatList
            style={styles.listContainer}
            data={props.users}
            renderItem={(info) => {
                console.log("INFOOOO", info);



                return (


                    <ListItem
                        email={info.item.email}
                        user = {user._user.email}

                        onItemPressed={() => props.onItemSelected(info.item.key)}
                    />
                )



            }}
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
});

export default userList;
