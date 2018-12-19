import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import ButtonBackground from '../../UI/ButtonBackgroun';
import DefaultInput from '../../UI/DefaultInput';
import firebase from "react-native-firebase"
import * as Actions from '../../stroe/actions/Places'
import { connect } from 'react-redux';
import Fire from "../../firebase/config";


class SignUp extends React.Component {
    state = { email: '', password: '', errorMessage: null }
    componentDidMount() {
        // Fire.shared.onUser();
    }

    // 2.
    componentWillUnmount() {
        Fire.shared.offUser();
    }

    handleSignUp = () => {
        // TODO: Firebase stuff...
        console.log('handleSignUp')
        firebase
            .auth()
            .createUserAndRetrieveDataWithEmailAndPassword(this.state.email, this.state.password)
            .then((res) => {

                Fire.shared.sendUser(res)
                this.props.navigator.push({
                    screen: 'Main',
                    title: 'Main',

                })
            })
            .catch(error => {
                console.log("ERRR", JSON.parse(JSON.stringify(error)));

                this.setState({ errorMessage: error.message })
            })

    }


    render() {
        return (
            <View style={styles.container}>
                <Text>Sign Up</Text>
                {this.state.errorMessage &&
                    <Text style={{ color: 'red' }}>
                        {this.state.errorMessage}
                    </Text>}
                <DefaultInput
                    placeholder="Email"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                />
                <DefaultInput
                    secureTextEntry
                    placeholder="Password"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                />
                <ButtonBackground color='#eee' onButtonPress={() => this.handleSignUp()} >
                    Create Account
                </ButtonBackground>

                <ButtonBackground
                    color='#eee'
                    onButtonPress={() => this.props.navigator.push({
                        screen: 'AuthScreenPlace',
                        title: 'AuthScreen',

                    })}
                >
                    Have an Account Login
                </ButtonBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8
    }
})
export default connect(null, Actions)(SignUp);