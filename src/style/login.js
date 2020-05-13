import React from 'react';
import {
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    logo: {
        width: 200,
        height: 150,
        resizeMode: 'contain',
        marginBottom: 30,
    },
    textInput: {
        width: 350,
        padding: 10,
        fontSize: 18,
    },
    btnLogin: {
        marginTop: 30,
        padding: 10,
        backgroundColor: 'blue',
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 5,
        color: 'white',
        fontSize: 18,
    },
    containerOR: {
        width: 350,
        marginVertical: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: 'gray',
    },
    textOR: {
        fontSize: 16,
        fontWeight: "900",
        marginHorizontal: 10,
    },
    btnSignUp: {
        padding: 10,
        backgroundColor: 'green',
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 5,
        color: 'white',
        fontSize: 18,
    }
});

export default styles;