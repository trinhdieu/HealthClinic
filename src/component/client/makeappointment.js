import React, {useState} from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Dimensions,
    FlatList,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from '../../style/makeappointment';
import * as appt from '../../../appt.json';

const ScreenHeight = Dimensions.get('window').height;

export default function MakeAppointment({route, navigation}) {
    const {serviceName} = route.params;
    const [datetime, setDatetime] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showSuggest, setShowSuggest] = useState(false);
    const [time, setTime] = useState(showTime(datetime));
    const [date, setDate] = useState(showDate(datetime));

    function showTime(selectTime) {
        h = selectTime.getHours();
        mi = selectTime.getMinutes();
        tmp = ((h > 9) ? h : '0' + h) + ':' + ((mi > 9) ? mi : '0' + mi);
        return tmp;
    }

    function showDate(selectTime) {
        d = selectTime.getDate();
        m = selectTime.getMonth() + 1;
        y = selectTime.getFullYear();
        tmp = ((d > 9) ? d : '0' + d) + '/' + ((m > 9) ? m : '0' + m) + '/' + y;
        return tmp;
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || datetime;
        setShowDatePicker(false);
        setDatetime(currentDate);
        if (mode === 'date') {
            tmp = showDate(currentDate);
            setDate(tmp);
        }
        if (mode === 'time') {
            tmp = showTime(currentDate);
            setTime(tmp);
        }
    };

    const showMode = currentMode => {
        setShowDatePicker(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };
    return(
        <View style={styles.container}>
            <View style={[styles.subContainer, {marginTop: Math.round(ScreenHeight/20)}]}>
                <Text style={styles.title}>
                    Dịch vụ
                </Text>
                <Text style={styles.content}>
                    {serviceName}
                </Text>
            </View>

            <View style={styles.subContainer}>
                <Text style={styles.title}>
                    Chọn lịch khám
                </Text>

                <View>
                    <Text style={styles.content}>Chọn thời gian</Text>

                    <View style={styles.dateTimeContainer}>
                        <FontAwesome5 onPress={showTimepicker} name={'clock'} size={32} solid/>
                        <Text style={styles.timeBox}>{time}</Text>
                        <FontAwesome5 onPress={showDatepicker} name={'calendar-alt'} size={32} solid/>
                        <Text style={styles.dateBox}>{date}</Text>
                        <TouchableOpacity onPress={()=>{setShowSuggest(!showSuggest)}} style={styles.btnFind}>
                            <FontAwesome5 name={'search'} size={20} color='white'/>
                        </TouchableOpacity>
                    </View>

                    {showDatePicker && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            timeZoneOffsetInMinutes={0}
                            value={datetime}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                    )}       
                        
                    {showSuggest && (
                        <View>
                            <Text style={styles.content}>Gợi ý</Text>
                            <FlatList
                                style={{height: Math.round(0.3 * ScreenHeight), marginHorizontal: 10, marginBottom: 10}}
                                data={appt.appts}
                                renderItem={({item}) => (
                                    <TouchableOpacity 
                                        onPress={() => {
                                        setDate(item.date);
                                        setTime(item.time);
                                        }}
                                        style={styles.listItem}
                                    >
                                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                            <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
                                                <FontAwesome5 name={'clock'} color='white' size={25} solid/>
                                                <Text style={styles.txtList}>{item.time}</Text>
                                            </View>

                                            <View style={{flexDirection: 'row'}}>
                                                <FontAwesome5 name={'calendar-alt'} color='white' size={25} solid/>    
                                                <Text style={styles.txtList}>{item.date}</Text>
                                            </View>

                                            <View style={{flexDirection: 'row'}}>
                                                <FontAwesome5 name={'clinic-medical'} color='white' size={25} solid/>
                                                <Text style={styles.txtList}>{item.room}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )}
                                keyExtractor={item => item.id.toString()}
                            />
                        </View>
                    )}      
                </View>
            </View>

            <View style={styles.btnContainer}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('SubmitAppointment', {
                        serviceName: serviceName,
                        date: date,
                        time: time,
                        room: '201',
                        medicalStaff: 'Nguyễn Văn A'
                    })}
                >
                    <Text style={styles.btnText}>Tạo lịch hẹn</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}