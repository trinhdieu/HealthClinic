import React, {Component} from 'react';
import {
    Image,
    Text,
    View,
    TextInput,
} from 'react-native';
import styles from '../style/login';

export default function LogIn({navigation}) {
    logo = require('../icon/login/logo.png');
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={logo}></Image>
            <TextInput
                underlineColorAndroid={'blue'}
                style={styles.textInput}
                placeholder={'Số điện thoại'}
            />
            <TextInput
                underlineColorAndroid={'blue'}
                style={styles.textInput}
                placeholder={'Mật khẩu'}
                secureTextEntry={true}
            />
            <Text
                onPress={() => navigation.navigate('Home')} 
                style={styles.btnLogin}
            >
                ĐĂNG NHẬP
            </Text>
            <View style={styles.containerOR}>
                <View style={styles.line}></View>
                <Text style={styles.textOR}>HOẶC</Text>
                <View style={styles.line}></View>
            </View>
            <Text 
                style={styles.btnSignUp}
                onPress={() => navigation.navigate('SignUp')}
            >
                ĐĂNG KÝ TÀI KHOẢN
            </Text>
        </View>
    );
}