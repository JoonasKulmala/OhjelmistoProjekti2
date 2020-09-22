import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios'
import PlaceInfo from './components/PlaceInfo';

export default function App() {
  const [places, setPlaces] = useState([])
  const [infoVisible, setInfoVisible] = useState(false)
  const [activePlace, setActivePlace] = useState(null)

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

  // axios.get('https://raspberrybackend.herokuapp.com/results').then(res => console.log(res.data))

  useEffect(() => {
    // ilmeisesti android-emulaattoria käytettäessä urlin oltava mallia 10.0.2.2:<portti>
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
              onPress={() => {
                setActivePlace(place)
                console.log(activePlace)
                setInfoVisible(!infoVisible)
              }}
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
      {infoVisible ?
        <PlaceInfo place={activePlace} />
        : null}
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
