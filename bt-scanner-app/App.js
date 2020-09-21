import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios'

export default function App() {
  const [places, setPlaces] = useState([])

  // satunnainen numero välillä 0-100
  const giveRandomNumber = () => {
    return String(Math.floor(Math.random() * 101))
  }

  // valitsee Markerille värin 
  const pickPinColor = (bt_connections) => {
    if (bt_connections < 25) {
      return 'green'
    } else if (bt_connections < 50) {
      return 'yellow'
    } else {
      return 'red'
    }
  }

  useEffect(() => {
    // React Nativea käytettäessä urlin oltava 10.0.2.2:<portti> tavallisen localhost:<portti> sijaan
    axios
      .get('http://10.0.2.2:3001/places')
      .then(res => {
        setPlaces(res.data)
      })
  }, [])

  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle}
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
              key={place.id}
              title={place.name}
              pinColor={pickPinColor(giveRandomNumber())}
              coordinate={{
                latitude: place.location.lat,
                longitude: place.location.lon
              }}
            />
          ))
          : null}
      </MapView>
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
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});
