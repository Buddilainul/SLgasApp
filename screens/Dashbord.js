import React from "react";
import { Text, View, TouchableOpacity, ScrollView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {Octicons} from '@expo/vector-icons';
import styles from "../components/styles";
import MapView, { Callout, Marker } from 'react-native-maps';





const Dashbord = ({navigation}) => {
    return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.Dashbord_background}>
      <View style={styles.dashboardHead}>
        <Text style={styles.wlcomeTitle}>Dashbord</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")} style={{ paddingLeft:30, paddingTop:30}}>
          <Octicons name='person' size={40} color='#000000'/></TouchableOpacity>
        </View>
      <ScrollView>
        <View>
        <Text style={styles.listTitle}>LP Gas</Text>
        <View style={styles.listSection}>
          <TouchableOpacity onPress={() => navigation.navigate("DetailsLitro")}>
                <Text style={styles.listHeader}>Litro Gas</Text>
                <Text style={styles.listItems}>5 Kg</Text>  
                <Text style={styles.listItems}>12.5 Kg</Text>  
                <Text style={styles.listItems}>37.5 Kg</Text>  
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("DetailsLaugfs")}>
                <Text style={styles.listHeader}>Laugfs Gas</Text>
                <Text style={styles.listItems}>5 Kg</Text>  
                <Text style={styles.listItems}>12.5 Kg</Text>  
                <Text style={styles.listItems}>37.5 Kg</Text>  
            </TouchableOpacity>     
            </View>
        </View>
        <View>
            <TouchableOpacity onPress={() => navigation.navigate("Map")}>
            <Text style={styles.listTitle}>Live Queue Map</Text></TouchableOpacity>
            <View style={styles.listSection}>
            <MapView style={styles.mapDashbord} 
      initialRegion={{
        latitude: 6.883341997962496,
        longitude: 79.88532162437377,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      <Marker coordinate={{
        latitude: 6.883341997962496,
        longitude: 79.88532162437377
      }}
      pinColor = "green"
      >
        <Callout>
        <Text>Gas Available</Text> 
        </Callout>
      </Marker>

      <Marker coordinate={{
        latitude: 6.87830242986028, 
        longitude: 79.87774504154486
      }}
      pinColor = "green"
      >
        <Callout>
        <Text>Gas Available</Text> 
        </Callout>
      </Marker>

      <Marker coordinate={{
        latitude: 6.8956195071368205, 
        longitude: 79.88261863363505
      }}
      pinColor = "green"
      >
        <Callout>
        <Text>Gas Available</Text> 
        </Callout>
      </Marker>

      <Marker coordinate={{
        latitude: 6.875711616730479, 
        longitude: 79.89016534054718
      }}
      pinColor = "green"
      >
        <Callout>
        <Text>Gas Available</Text> 
        </Callout>
      </Marker>

      <Marker coordinate={{
        latitude: 6.900705109205085, 
        longitude: 79.89579608616255
      }}
      pinColor = "green"
      >
        <Callout>
        <Text>Gas Available</Text> 
        </Callout>
      </Marker>

      <Marker coordinate={{
        latitude: 6.880582525127895,
        longitude:   79.89105011471804
      }}
      pinColor = "red"
      >
        <Callout>
        <Text>Gas Not Available</Text> 
        </Callout>
      </Marker>

      <Marker coordinate={{
        latitude: 6.8844153116556255, 
        longitude: 79.87576828911921
      }}
      pinColor = "red"
      >
        <Callout>
        <Text>Gas Not Available</Text> 
        </Callout>
      </Marker>

      <Marker coordinate={{
        latitude: 6.8819699216840835, 
        longitude:  79.88903261792285
      }}
      pinColor = "red"
      >
        <Callout>
        <Text>Gas Not Available</Text> 
        </Callout>
      </Marker>

      <Marker coordinate={{
        latitude: 6.8829520552212236, 
        longitude:  79.88299034040814
      }}
      pinColor = "red"
      >
        <Callout>
        <Text>Gas Not Available</Text> 
        </Callout>
      </Marker>

        </MapView>
            </View>
        </View>
        <View>
            <TouchableOpacity onPress={() => navigation.navigate("Notification")} >
                <Text style={styles.listTitle}>Notification</Text>
                <View style={styles.listSection}>
                <Text style={styles.newNotifications1}><Octicons name='bell' size={35} color='green'/> Gas available now in xxxx station</Text>
                <Text style={styles.newNotifications2}><Octicons name='bell' size={35} color='red'/>  Gas not available now in xxxx station</Text>
                <Text style={styles.newNotifications2}><Octicons name='bell' size={35} color='red'/>  Gas not available now in xxxx station</Text>
                <Text style={styles.newNotifications1}><Octicons name='bell' size={35} color='green'/> Gas available now in xxxx station</Text>
                <Text style={styles.newNotifications2}><Octicons name='bell' size={35} color='red'/>  Gas not available now in xxxx station</Text>
                <Text style={styles.newNotifications1}><Octicons name='bell' size={35} color='green'/> Gas available now in xxxx station</Text>
                </View>
             </TouchableOpacity>
        </View>
        <View>
            
        </View>
       </ScrollView> 
      </View>
    </View>
    );
};




export default Dashbord;