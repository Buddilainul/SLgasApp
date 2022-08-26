import React from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import styles from "../components/styles";
import { StatusBar } from 'expo-status-bar';
import { View,Text } from 'react-native';

const Map = ({navigation}) => {
  return (
    <View style={styles.container}>
    <View style={styles.mapContainer}>
      <StatusBar style="auto" />
      <MapView style={styles.map} 
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
  );
}



export default Map;