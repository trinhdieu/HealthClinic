import React from 'react';
import {
    View,
    Text,
    TextInput,
} from 'react-native'
import styles from '../style/signup'

export default function SingUp({navigation}) {
    return (
        <View style={styles.container}>
            <TextInput
                underlineColorAndroid={'blue'}
                style={styles.textInput}
                placeholder={'Họ và tên'}
            />
            <TextInput
                underlineColorAndroid={'blue'}
                style={styles.textInput}
                placeholder={'Email'}
            />
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
            <TextInput
                underlineColorAndroid={'blue'}
                style={styles.textInput}
                placeholder={'Xác nhận mật khẩu'}
                secureTextEntry={true}
            />
            <Text 
                style={styles.btnSignup}
            >
                ĐĂNG KÝ
            </Text>
        </View>
    );
}