import React from 'react';
import { TextInput, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

/**
 * to be wrapped with redux-form Field component
 */
const myTextInput = (props) => {
    const { input, ...inputProps } = props;

    return (
        <View style={styles.input}>
            <TextInput
            {...this.props}
             underlineColorAndroid = 'transparent'
                {...inputProps}
                onChangeText={input.onChange}
                value={input.value}
            />

        </View>
    );
}
const styles = StyleSheet.create({
    input: {
        justifyContent: 'center',
        width: "90%",
        borderWidth: 1,
        marginLeft :20,
        marginTop:10,
        backgroundColor: "#eee",
        borderColor: "#bbb"
       
    },

});

export default myTextInput;