import MapView, { Callout, Marker } from 'react-native-maps'
import React from 'react'
import { Dimensions, StyleSheet, Text } from 'react-native'
import { pickPinColor } from '../utility'

const Map = ({ locations, setActiveLocation }) => {
  
  const handleCalloutPress = (place) => {
    setActiveLocation(place)
    console.log(place)
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 60.2997901,
        longitude: 25.0592432,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
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
              <Callout onPress={() => handleCalloutPress(location)}>
                <Text>{location.name}</Text>
                <Text>Devices found:</Text>
                <Text>{new Date().toUTCString()} - {location.bt_devices.latest}</Text>
                <Text onPress={() => console.log('Show more info..')}>Show more information</Text>
              </Callout>
            </Marker>
          ))
        : null
      }
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
})

export default Map