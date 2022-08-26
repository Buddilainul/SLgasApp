import React from "react";
import { Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from "../components/styles";
import backgroundImg from './../assets/background.png'; 
import profile_picture from './../assets/profile_img.png'; 




const Profile = ({navigation}) => {
    return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image source={backgroundImg} style={styles.welcomeImg} /> 
      <ScrollView>
      <View style={styles.welcomeContainer}>
      <Text style={styles.wlcomeTitle}>Profile</Text>
      
        <Image source={profile_picture} style={styles.avatar} /> 
        
      <Text style={styles.profileHeadTitle}>Full Name</Text>
      <Text style={styles.profileSubTitle}>Buddila Inul</Text>

      <Text style={styles.profileHeadTitle}>Date OF Birth</Text>
      <Text style={styles.profileSubTitle}>2001-aug-02</Text>

      <Text style={styles.profileHeadTitle}>Email Address</Text>
      <Text style={styles.profileSubTitle}>buddilainul@gmail.com</Text>

      <Text style={styles.profileHeadTitle}>Membership Expiry Date</Text>
      <Text style={styles.profileSubTitle}>2023-jan-05</Text>

        <View style={styles.line}/>

        <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.button}>
            <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
    );
};

export default Profile;