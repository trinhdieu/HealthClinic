import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from 'react-native'
import styles from '../style/signup'

export default function SingUp({navigation}) {
    return (
        <View style={styles.container}>
            <TextInput
                underlineColorAndroid={'#191970'}
                style={styles.textInput}
                placeholder={'Họ và tên'}
            />
            <TextInput
                underlineColorAndroid={'#191970'}
                style={styles.textInput}
                placeholder={'Email'}
            />
            <TextInput
                underlineColorAndroid={'#191970'}
                style={styles.textInput}
                placeholder={'Số điện thoại'}
            />
            <TextInput
                underlineColorAndroid={'#191970'}
                style={styles.textInput}
                placeholder={'Mật khẩu'}
                secureTextEntry={true}
            />
            <TextInput
                underlineColorAndroid={'#191970'}
                style={styles.textInput}
                placeholder={'Xác nhận mật khẩu'}
                secureTextEntry={true}
            />
            <TouchableOpacity
                style={styles.btnSignup}
            >
                <Text style={styles.text}>ĐĂNG KÝ</Text>
            </TouchableOpacity>
        </View>
    );
}