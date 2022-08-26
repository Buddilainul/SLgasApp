import React from "react";
import { Text, View, Image, TouchableOpacity, Button, ImageBackground} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {Octicons} from '@expo/vector-icons';
import styles from "../components/styles";
import backgroundImg from './../assets/Home_background.png';
import logo from './../assets/logo.png'; 

const Home = ({navigation}) => {
    return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <ImageBackground source={backgroundImg} style={styles.home_background}> 

        <View style={styles.homeHeader_img}>
        <Image source={logo} style={styles.image} /> 
        </View>
        </ImageBackground>
        <View style={styles.navigationTab1}>
        <TouchableOpacity onPress={() => navigation.navigate("Notification")} style={styles.tabNavigationNotification}>
            <Octicons name='bell' size={30} color='#FFFFFF'/><Text style={styles.homeNav}>Notification</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Dashbord")} style={styles.tabNavigationDashbord}>
            <Octicons name='webhook' size={30} color='#FFFFFF'/><Text style={styles.homeNav}>Dashbord</Text></TouchableOpacity>
        </View>
        <View style={styles.navigationTab2}>
        <TouchableOpacity onPress={() => navigation.navigate("Map")} style={styles.tabNavigationMap}>
            <Octicons name='location' size={30} color='#FFFFFF'/><Text style={styles.homeNav}>Live Queue Map</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")} style={styles.tabNavigationProfile}>
            <Octicons name='person' size={30} color='#FFFFFF'/><Text style={styles.homeNav}>User Profile</Text></TouchableOpacity>
        </View>
        <View style={styles.navigationTab3}>
        <TouchableOpacity onPress={() => navigation.navigate("DetailsSelection")} style={styles.tabNavigationsShops}>
            <Octicons name='organization' size={30} color='#FFFFFF'/><Text style={styles.homeNav}>Filling Stations</Text></TouchableOpacity>
        </View>
    </View>
    );
};

export default Home;