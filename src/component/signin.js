import React, {useState} from 'react';
import {
    Image,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import styles from '../style/signin';

export default function SignIn({navigation}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    logo = require('../icon/login/logo.png');

    function signIn() {
        if (username === '' && password === '') {
            navigation.navigate('ClientTabNavigator');
        } else
            alert('Tên đăng nhập hoặc mật khẩu không hợp lệ!');
    }
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={logo}></Image>
            <TextInput
                onChangeText={(text) => setUsername(text)}
                underlineColorAndroid={'#191970'}
                style={styles.textInput}
                placeholder={'Số điện thoại'}
            />
            <TextInput
                onChangeText={(text) => setPassword(text)}
                underlineColorAndroid={'#191970'}
                style={styles.textInput}
                placeholder={'Mật khẩu'}
                secureTextEntry={true}
            />
            <TouchableOpacity
                onPress={() => signIn()} 
                style={styles.btnLogin}
            >
                <Text style={styles.text}>ĐĂNG NHẬP</Text>
            </TouchableOpacity>
            <View style={styles.containerOR}>
                <View style={styles.line}></View>
                <Text style={styles.textOR}>HOẶC</Text>
                <View style={styles.line}></View>
            </View>
            <TouchableOpacity
                style={styles.btnSignUp}
                onPress={() => navigation.navigate('SignUp')}
            >
                <Text style={styles.text}>ĐĂNG KÝ TÀI KHOẢN</Text>
            </TouchableOpacity>
        </View>
    );
}