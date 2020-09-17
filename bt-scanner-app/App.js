import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios'

export default function App() {
  const [places, setPlaces] = useState([])

  useEffect(() => {
    axios
      .get('http://open-api.myhelsinki.fi/v1/places/')
      .then(res => {
        console.log('data: ', res.data.data)
        setPlaces(res.data.data.slice(0, 50))
      })
  }, [])

  return (
    <MapView style={styles.container}
      initialRegion={{
        latitude: 60.2997901,
        longitude: 25.0592432,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
    >
      {places.length !== 0
        ? places.map(place => (
          <Marker 
            coordinate={{
              latitude: place.location.lat,
              longitude: place.location.lon
            }}
          />
        ))
        : null}
    </MapView>
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
