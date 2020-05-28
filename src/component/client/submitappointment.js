import React, {useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from '../../style/submitappointment';

const screenHeight = Dimensions.get('window').height;

export default function SubmitAppointment({route, navigation}) {
    const {serviceName, date, time, room, medicalStaff} = route.params;
    return (
        <View style={styles.container}>
            <View style={[styles.textContainer, {marginTop: Math.round(screenHeight/30)}]}>
                <View style={styles.titleContainer}>
                    <FontAwesome5 name='medkit' color='#191970' size={25}/>
                    <Text style={styles.title}>Dịch vụ</Text>
                </View>
                <Text style={styles.content}>{serviceName}</Text>
            </View>

            <View style={styles.textContainer}>
                <View style={styles.titleContainer}>
                    <FontAwesome5 name='calendar-alt' color='#191970' size={25} solid/>
                    <Text style={styles.title}>Ngày</Text>
                </View>
                <Text style={styles.content}>{date}</Text>
            </View>

            <View style={styles.textContainer}>
                <View style={styles.titleContainer}>
                    <FontAwesome5 name='clock' color='#191970' size={25} solid/>
                    <Text style={styles.title}>Giờ</Text>
                </View>
                <Text style={styles.content}>{time}</Text>
            </View>

            <View style={styles.textContainer}>
                <View style={styles.titleContainer}>
                    <FontAwesome5 name='clinic-medical' color='#191970' size={25}/>
                    <Text style={styles.title}>Phòng</Text>
                </View>
                <Text style={styles.content}>{room}</Text>  
            </View>

            <View style={styles.textContainer}>
                <View style={styles.titleContainer}>
                    <FontAwesome5 name='user-md' color='#191970' size={25}/>
                    <Text style={styles.title}>Nhân viên y tế</Text>
                </View>
                <Text style={styles.content}>{medicalStaff}</Text>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity 
                    style={styles.button}
                >
                    <Text style={styles.btnText}>Xác nhận</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

