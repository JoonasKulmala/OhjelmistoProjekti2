import MapView, { Callout, Marker } from 'react-native-maps'
import React from 'react'
import { Dimensions, StyleSheet, Text } from 'react-native'
import { pickPinColor } from '../utility'

const Map = ({ locations, setActiveLocation }) => {
  
  const handleCalloutPress = (place) => {
    setActiveLocation(place)
    console.log(place)
  }

  const mapStyle = [
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    }
  ]

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 60.2997901,
        longitude: 25.0592432,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
      customMapStyle={mapStyle}
      kmlSrc={'../kml.js'}
    >
      {locations.length !== 0
        ? locations.map(location => (
            <Marker 
              pinColor={pickPinColor(location.bt_devices.latest)}
              key={location.id}
              coordinate={{
                latitude: location.location.lat,
                longitude: location.location.lon
              }}
            >
              {/* Callout-komponentin avulla pystyy esittämään tietoa usean rivin verran
              Markerin description-propsissa tämä ei oikein onnistunut */}
              {/* Händleri aktivoi sijainnin, jolloin avautuu Card-komponentti, jossa näkyvissä lisätietoa */}
              <Callout onPress={() => handleCalloutPress(location)}>
                <Text>{location.name}</Text>
                <Text>Devices found: {location.bt_devices.latest}</Text>
                <Text>{new Date().toUTCString()}</Text>
                <Text 
                  onPress={() => console.log('Show more info..')}
                  style={{ color: 'blue' }}
                >
                  Show more information
                </Text>
              </Callout>
            </Marker>
          ))
        : null}
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('window').height
  }
})

export default Map