import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import axios from 'axios'
import PlaceInfo from './components/PlaceInfo';
import Map from './components/Map';

export default function App() {
  const [places, setPlaces] = useState([])
  const [infoVisible, setInfoVisible] = useState(false)
  const [activePlace, setActivePlace] = useState(null)

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
      <Map places={places} />
      {/* Tilan infoVisible ollessa true, renderöidään PlaceInfo-komponentti, joka näyttää 
      tietoa valitusta kohteesta */}
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
