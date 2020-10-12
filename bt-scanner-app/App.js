import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import PlaceInfo from './components/PlaceInfo';
import Map from './components/Map';
import locationService from './services/locations'

export default function App() {
  const [locations, setLocations] = useState([])
  const [activeLocation, setActiveLocation] = useState(null)

  useEffect(() => {
    locationService
      .getAll()
      .then(response => setLocations(response))
  }, [])

  return (
    <View style={styles.container}>
      <Map 
        locations={locations} 
        setActiveLocation={setActiveLocation} 
      />
      <PlaceInfo 
        place={activeLocation}
        setActiveLocation={setActiveLocation} 
      />
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
