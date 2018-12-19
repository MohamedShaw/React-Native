import React from 'react'
import { StyleSheet, Platform, Image, Text, View, ActivityIndicator } from 'react-native'
import firebase from "react-native-firebase"
import ButtonBackground from '../../UI/ButtonBackgroun';
import { getUsers, setselectedId } from '../../stroe/actions/index'
import { connect } from 'react-redux';
import UserList from '../../PlaceList/UserList';
import { bindActionCreators } from 'redux';


class Main extends React.Component {
    state = { currentUser: null }

    componentDidMount() {
        this.props.onLoadUsers()

        const { currentUser } = firebase.auth()
        this.setState({ currentUser })
    }
    onItemSelectedHandler = key => {

        const seluser = this.props.users.find(user => {
            return user.key === key;
        });
        this.props.setselectedId(seluser.uid);



        this.props.navigator.push({
            screen: 'Message',
            passProps: {

                selectedUser: seluser

            }
        });
    };
    goToChat = () => {
        const { currentUser } = this.state

        this.props.navigator.push({
            screen: 'Message',
            title: 'Message',
            passProps: {
                user: currentUser.email,
                uid: currentUser.uid
            },

        })
    }
    render() {
        const { currentUser } = this.state

        return (
            <View style={styles.container}>
                <ButtonBackground onButtonPress={() => {
                    this.goToChat()
                }} color='#eee'>
                    <Text>
                        Hi {currentUser && currentUser.email}!

                    </Text>
                </ButtonBackground>

                {this.props.users.length === 0 ? <ActivityIndicator /> : <UserList users={this.props.users} onItemSelected={this.onItemSelectedHandler} />}


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
const mapSetToState = state => {

    return {
        users: state.places.users
    }

}
const mapDispatchToProps = dispatch => {
    return {
        onLoadUsers: bindActionCreators(getUsers, dispatch),
        setselectedId: bindActionCreators(setselectedId, dispatch)

    };
};
export default connect(mapSetToState, mapDispatchToProps)(Main);