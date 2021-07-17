import React from 'react';
import {
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 80,
    },
    textInput: {
        width: 350,
        padding: 10,
        fontSize: 18,
        marginVertical: 15,
        alignSelf: 'center'
    },
    btnSignup: {
        marginTop: 30,
        backgroundColor: '#191970',
        borderRadius: 10,
        alignSelf: 'center',
        marginBottom: 30
    },
    text: {
        padding: 10,
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    },
    title : {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#191970',
        textAlign: 'center',
        marginHorizontal: 40,
        marginTop: 30
    },
    require:{
        fontSize: 8,
        color: 'gray',
        textAlign: 'center'
    },
    loading: {
        elevation:11,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default styles;