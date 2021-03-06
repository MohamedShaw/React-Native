
import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { GiftedChat } from "react-native-gifted-chat";
import Fire from "../../firebase/config";
import { connect } from 'react-redux';
import firebase from "react-native-firebase"

class Message extends React.Component {
    componentDidMount() {

        Fire.shared.setId(this.props.id)

        Fire.shared.on(message =>
            this.setState(previousState => ({
                messages: GiftedChat.append(previousState.messages, message),
            }))
        );
    }


    // 2.
    componentWillUnmount() {
        Fire.shared.off();


    }

    get user() {
        var user = firebase.auth().currentUser;
        console.log("SSSSSS", user._user.email, );



        // Return our name and our UID for GiftedChat to parse
        return {
            name: this.props.user,
            _id: this.props.uid,
        };
    }
    state = { message: [] } // 2. <- Add the component state
    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={Fire.shared.send}
                user={this.user}

            />
        );
    }
}
const offset = 24;
const styles = StyleSheet.create({
    nameInput: { // 3. <- Add a style for the input
        height: offset * 2,
        margin: offset,
        paddingHorizontal: offset,
        borderColor: '#111111',
        borderWidth: 1,
    },
    title: { // 4.
        marginTop: offset,
        marginLeft: offset,
        fontSize: offset,
    },
    buttonText: { // 5.
        marginLeft: offset,
        fontSize: offset,
    },
});
const mapSetToState = state => {

    return {
        id: state.places.selectedId
    }

}
export default connect(mapSetToState, null)(Message)