import React, { useState, useEffect } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PlaceInfo from './components/PlaceInfo';
import Map from './components/Map';
import locationService from './services/locations'
import Searchbar from './components/Searchbar';

export default function App() {
  const [locations, setLocations] = useState([])
  const [activeLocation, setActiveLocation] = useState(null)

  useEffect(() => {
    locationService
      .getAll()
      .then(response => setLocations(response))
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.radiusButton}>
        <TouchableOpacity
          // style={styles.radiusButton}
        >
          <Text>show radius</Text>
        </TouchableOpacity>
      </View> */}
      {/* <Searchbar /> */}
      <Map 
        locations={locations} 
        setActiveLocation={setActiveLocation} 
      />
      <PlaceInfo 
        place={activeLocation}
        setActiveLocation={setActiveLocation} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  radiusButton: {
    position: 'absolute',
    top: '10%',
    left: '2%',
    zIndex: 0
  }
});
