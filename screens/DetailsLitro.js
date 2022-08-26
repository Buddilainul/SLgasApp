import React from "react";
import { Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {Octicons} from '@expo/vector-icons';
import styles from "../components/styles";



const DetailsLitro = ({navigation}) => {
    return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.Litro_background}>
      <View style={styles.dashboardHead}>
        <Text style={styles.detailTitle}>  Litro Gas Stations</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")} style={{ paddingLeft:30, paddingTop:30}}>
          <Octicons name='person' size={40} color='#ffff'/></TouchableOpacity>
        </View>
      <View style={styles.searchSection}>
          <TextInput style={styles.searchBox} placeholder="Enter Book title" />
          <TouchableOpacity style={styles.searchIcon}><Octicons name='search' size={40} color='#000000'/></TouchableOpacity>
        </View>
        <ScrollView>

          <View style={styles.detailsTab1}>
            <View>
            <TouchableOpacity onPress={() => {}} style={styles.stations}>
              <Text style={styles.stationDetails}>Station xxxx</Text></TouchableOpacity>
              <Text style={styles.indetails}>Available</Text>
            </View>
            <View>
            <TouchableOpacity onPress={() => {}} style={styles.stations}>
              <Text style={styles.stationDetails}>Station xxxx</Text></TouchableOpacity>
              <Text style={styles.indetails}>Not Available</Text>
            </View>
            <View>
            <TouchableOpacity onPress={() => {}} style={styles.stations}>
              <Text style={styles.stationDetails}>Station xxxx</Text></TouchableOpacity>
              <Text style={styles.indetails}>Available</Text>
            </View>
          </View>
            <View style={styles.detailsTab2}>
            <View>
            <TouchableOpacity onPress={() => {}} style={styles.stations}>
              <Text style={styles.stationDetails}>Station xxxx</Text></TouchableOpacity>
              <Text style={styles.indetails}>Not Available</Text>
            </View>
            <View>
            <TouchableOpacity onPress={() => {}} style={styles.stations}>
              <Text style={styles.stationDetails}>Station xxxx</Text></TouchableOpacity>
              <Text style={styles.indetails}>Available</Text>
            </View>
            <View>
            <TouchableOpacity onPress={() => {}} style={styles.stations}>
              <Text style={styles.stationDetails}>Station xxxx</Text></TouchableOpacity>
              <Text style={styles.indetails}>Not Available</Text>
            </View>
            </View>
            <View style={styles.detailsTab3}>
            <View>
            <TouchableOpacity onPress={() => {}} style={styles.stations}>
              <Text style={styles.stationDetails}>Station xxxx</Text></TouchableOpacity>
              <Text style={styles.indetails}>Available</Text>
            </View>
            <View>
            <TouchableOpacity onPress={() => {}} style={styles.stations}>
              <Text style={styles.stationDetails}>Station xxxx</Text></TouchableOpacity>
              <Text style={styles.indetails}>Available</Text>
            </View>
            <View>
            <TouchableOpacity onPress={() => {}} style={styles.stations}>
              <Text style={styles.stationDetails}>Station xxxx</Text></TouchableOpacity>
              <Text style={styles.indetails}>Not Available</Text>
            </View>
            </View>

        </ScrollView>   
      </View>
    </View>
    );
};




export default DetailsLitro;