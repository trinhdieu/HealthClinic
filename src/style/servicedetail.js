import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column'
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginHorizontal: 30,
        color: '#191970'
    },
    desciptionContainer: {
        flex: 3,
    },
    description: {
        textAlign: 'justify',
        marginHorizontal: 30,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'gray'
    },
    btnContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#191970',
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 10,
    },
    btnText: {
        color: 'white',
        fontSize: 18,
        padding: 10,
    }
});

export default styles;