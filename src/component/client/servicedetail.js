import React, {useState} from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import styles from '../../style/servicedetail';

export default function ServiceDetail({route, navigation}) {
    const {serviceName} = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{serviceName}</Text>
            </View>
            <View style={styles.desciptionContainer}>
                <ScrollView style={styles.description}>
                    <Text></Text>
                </ScrollView>
            </View>
            
            <View style={styles.btnContainer}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('MakeAppointment', {serviceName: serviceName})}
                >
                    <Text style={styles.btnText}>Tạo lịch hẹn</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}