import React from 'react';
import {
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        flex: 1,
        resizeMode: 'center',
    },
    textContainer: {
        flex: 2,
    },
    title: {
        marginLeft: 15,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000080'
    },
    content: {
        flex: 1,
        borderRadius: 8,
        borderColor: '#808080',
        borderWidth: 2,
        marginHorizontal: 15,
        marginVertical: 5
    },
    menuBar: {
        flex: 1,
        flexDirection: 'row',
    },
    iconContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        width: 30, 
        height: 30,
    }
});

export default styles;