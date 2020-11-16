import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

//Komponentit
import PlaceInfo from './PlaceInfo';
import Map from './Map';

import locationService from '../services/locations'

export default function FrontPage() {
  const [locations, setLocations] = useState([])
  // selectedLocation vaihtuu aina kun painetaan jotain kohdetta kartasta
  // Määrittää renderöidäänkö PlaceInfo komponentti ruudulle
  const [selectedLocation, setSelectedLocation] = useState(null)

  useEffect(() => {
    locationService
      .getAll()
      .then(response => setLocations(response))
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Map
        locations={locations}
        setSelectedLocation={setSelectedLocation}
      />
      <PlaceInfo
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
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
