import React, {useState} from 'react';
import {
    Image,
    Text,
    View,
    ScrollView,
} from 'react-native';
import styles from '../style/home';

export default function Home() {
    const [img, setImg] = useState(require('../image/home/image1.jpg'));
    homeIcon = require('../icon/home/home.png');
    createCal = require('../icon/home/createCal.png');
    viewCal = require('../icon/home/viewCal.png');
    acc = require('../icon/home/account.png');
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={img}/>
            </View>
            <View style={[styles.textContainer,{flex: 3}]}>
                <Text style={[styles.title, {marginTop: 10}]}>
                    Thông báo
                </Text>
                <ScrollView style={styles.content}>

                </ScrollView>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    Các dịch vụ phòng khám
                </Text>
                <ScrollView style={styles.content}>
                    
                </ScrollView>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    Quy trình khám bệnh tại phòng khám
                </Text>
                <ScrollView style={styles.content}>
                    
                </ScrollView>
            </View>
            <View style={styles.menuBar}>
                <View style={styles.iconContainer}>
                    <Image source={homeIcon} style={styles.icon}/>
                    <Text>Trang chủ</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Image source={createCal} style={styles.icon}/>
                    <Text>Tạo lịch hẹn</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Image source={viewCal} style={styles.icon}/>
                    <Text>Xem lịch hẹn</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Image source={acc} style={styles.icon}/>
                    <Text>Tài khoản</Text>
                </View>
            </View>
        </View>
    );
}