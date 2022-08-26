import React from "react";
import { Text, View, TouchableOpacity, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {Octicons} from '@expo/vector-icons';
import styles from "../components/styles";
import Litro from './../assets/Litro.png';
import Laugfs from './../assets/Laugfs.png';



const Dashbord = ({navigation}) => {
    return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <TouchableOpacity onPress={() => navigation.navigate("DetailsLitro")} style={styles.detailsSelection1}>
        <Image source={Litro} style={styles.gasIcon} /><Text style={styles.homeNav}>Litro Gas</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("DetailsLaugfs")} style={styles.detailsSelection2}>
        <Image source={Laugfs} style={styles.gasIcon} /><Text style={styles.homeNav}>Laugfs Gas</Text></TouchableOpacity>
    </View>
    );
};




export default Dashbord;