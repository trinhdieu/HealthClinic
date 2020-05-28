import React from 'react';
import { 
    Text, 
    View,
    Image,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import styles from '../../style/viewappointment';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as appts from '../../../appts.json';

export default function ViewAppointment({route, navigation}) {
    return (
        <View style={styles.container}>
            <View>
                <FlatList
                    style={{marginVertical: 20, marginHorizontal: 20}}
                    data={appts.appts}
                    renderItem={({item}) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('AppointmentDetail', {appt: item})}
                            style={{backgroundColor: 'white', height: 120, marginVertical: 10, justifyContent: 'center', elevation: 0, borderColor: '#191970', borderWidth: 3, borderRadius: 10}}
                        >
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <FontAwesome5 style={{marginHorizontal: 20}} name='calendar-check' size={60} color='#191970' solid/>
                                <View>
                                    <View>
                                        <Text style={{fontSize: 26, fontWeight: 'bold', color: '#191970'}}>{item.service_name}</Text>
                                    </View>
                                    <View style={{flexDirection: 'row'}}>
                                        <Text style={{fontSize: 22, marginRight: 20}}>{item.date}</Text>
                                        <Text style={{fontSize: 22}}>{item.time}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        )}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </View>
    );
}