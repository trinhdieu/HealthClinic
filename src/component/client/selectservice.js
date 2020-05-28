import React, {useState} from 'react';
import {
    Image,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import styles from '../../style/selectservice';

export default function SelectService({navigation}) {
    const eyeIcon = require('../../icon/selectservice/eye.png');
    const earIcon = require('../../icon/selectservice/ear.png');
    const teethIcon = require('../../icon/selectservice/teeth.png');
    const skinIcon = require('../../icon/selectservice/skin.png');
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.service} 
                onPress={() => navigation.navigate('ServiceDetail', {serviceName: 'Khám mắt'})}
            >
                <Image style={styles.icon} source={eyeIcon}/>
                <Text style={styles.serviceName}>Khám mắt</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.service}
                onPress={() => navigation.navigate('ServiceDetail', {serviceName: 'Khám tai mũi họng'})}
            >
                <Image style={styles.icon} source={earIcon}/>
                <Text style={styles.serviceName}>Khám tai mũi họng</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.service}
                onPress={() => navigation.navigate('ServiceDetail', {serviceName: 'Khám răng'})}
            >
                <Image style={styles.icon} source={teethIcon}/>
                <Text style={styles.serviceName}>Khám răng</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.service} 
                onPress={() => navigation.navigate('ServiceDetail', {serviceName: 'Khám da liễu'})}
            >
                <Image style={styles.icon} source={skinIcon}/>
                <Text style={styles.serviceName}>Khám da liễu</Text>
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <View style={styles.line}></View>
                <Text style={styles.text}>BẠN CHƯA CHỌN ĐƯỢC DỊCH VỤ?</Text>
                <View style={styles.line}></View>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity>
                    <Text style={styles.btnSurvey}>KHẢO SÁT SỨC KHỎE</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}