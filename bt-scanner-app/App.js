import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios'

export default function App() {
  const [places, setPlaces] = useState([])

  const giveRandomNumber = () => {
    return String(Math.floor(Math.random() * 101))
  }

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
    axios
      .get('http://open-api.myhelsinki.fi/v1/places/')
      .then(res => {
        // console.log('data: ', res.data.data)
        setPlaces(res.data.data.slice(0, 50))
      })
  }, [])

  const handleMarkerPress = (event) => {
    console.log(event)
  }

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
              onPress={handleMarkerPress}
              key={place.id}
              title={place.name.fi}
              pinColor={pickPinColor(giveRandomNumber())}
              // description={giveRandomNumber()}
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
