import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions , Linking} from 'react-native';
import { Marker } from 'react-native-maps';
import MapView from "react-native-map-clustering";
 export default function App() {

  const customData = [{
    "equipment": {
      "equipmentName": "Equipment 1",
      "lat": "15.3984383",
      "lng": "74.3320166",
      "vehicleno": "PHY9840JU8"
    },
    "location": {
      "latitude": 15.3984383,
      "longitude": 74.3320166
    }
  },
  {
    "equipment": {
      "equipmentName": "Equipment 2",
      "lat": "15.4227466",
      "lng": "74.362575",
      "vehicleno": "EI9387UN9"
    },
    "location": {
      "latitude": 15.4227466,
      "longitude": 74.362575
    }
  },
  {
    "equipment": {
      "equipmentName": "Equipment 3",
      "lat": "12.9307642",
      "lng": "77.5777316",
      "vehicleno": "PD09385PN34"
    },
    "location": {
      "latitude": 12.9307642,
      "longitude": 77.5777316
    }
  },
  {
    "equipment": {
      "equipmentName": "Equipment 4",
      "lat": "15.3569866",
      "lng": "75.152685",
      "vehicleno": "AB12345UJ88"
    },
    "location": {
      "latitude": 15.3569866,
      "longitude": 75.152685
    }
  }
  ];

  state = {
    popup: false,
    region: {
        latitudeDelta: 12,
        longitudeDelta: 12
    },
     INITIAL_REGION : {
      latitude: 15.3984383,
      longitude: 74.3320166,
      latitudeDelta: 8.5,
      longitudeDelta: 8.5,
    },
    markers: customData
}


  return (
    
    <View>
            {
            <MapView initialRegion={this.state.INITIAL_REGION} style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height}}>
            {this.state.markers.map(marker => (
                    <Marker 
                    key={Math.random()} 
                    coordinate={marker.location}
                    title={marker.equipment.equipmentName}
                    >
                   </Marker>
                ))}
            </MapView>
            }

    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
