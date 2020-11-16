import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import PlaceInfo from './components/PlaceInfo';
import Map from './components/Map';
import locationService from './services/locations'

export default function App() {
  const [locations, setLocations] = useState([])
  // activeLocation vaihtuu aina kun painetaan jotain kohdetta kartasta
  // Määrittää renderöidäänkö PlaceInfo komponentti ruudulle
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
