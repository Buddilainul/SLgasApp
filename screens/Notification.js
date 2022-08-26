import React from "react";
import { Text, View, TouchableOpacity, ScrollView,} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {Octicons} from '@expo/vector-icons';
import styles from "../components/styles";





const Notification = ({navigation}) => {

    return (
    <View style={styles.container}>
      <View style={styles.notification}>
      <StatusBar style="auto" />      
      <Text style={styles.notif_title}>Notification</Text>
      <ScrollView>
        <Text style={styles.newNotifications1}><Octicons name='bell' size={35} color='green'/> Gas available now in xxxx station</Text>
        <Text style={styles.newNotifications2}><Octicons name='bell' size={35} color='red'/>  Gas not available now in xxxx station</Text>
        <Text style={styles.newNotifications2}><Octicons name='bell' size={35} color='red'/>  Gas not available now in xxxx station</Text>
        <Text style={styles.newNotifications1}><Octicons name='bell' size={35} color='green'/> Gas available now in xxxx station</Text>
        <Text style={styles.newNotifications2}><Octicons name='bell' size={35} color='red'/>  Gas not available now in xxxx station</Text>
        <Text style={styles.newNotifications1}><Octicons name='bell' size={35} color='green'/> Gas available now in xxxx station</Text>
        <Text style={styles.newNotifications2}><Octicons name='bell' size={35} color='red'/>  Gas not available now in xxxx station</Text>
        <Text style={styles.newNotifications1}><Octicons name='bell' size={35} color='green'/> Gas available now in xxxx station</Text>
        <Text style={styles.newNotifications1}><Octicons name='bell' size={35} color='green'/> Gas available now in xxxx station</Text>
        <Text style={styles.newNotifications2}><Octicons name='bell' size={35} color='red'/>  Gas not available now in xxxx station</Text>
        <Text style={styles.newNotifications2}><Octicons name='bell' size={35} color='red'/>  Gas not available now in xxxx station</Text>
        <Text style={styles.newNotifications1}><Octicons name='bell' size={35} color='green'/> Gas available now in xxxx station</Text>
      </ScrollView>
      </View>
    </View>
    );
};


export default Notification;