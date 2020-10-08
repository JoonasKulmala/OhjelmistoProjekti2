import MapView, { Callout, Marker } from 'react-native-maps'
import React from 'react'
import { Dimensions, StyleSheet, Text } from 'react-native'
import { pickPinColor } from '../utility'

const Map = ({ places }) => {
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
      {places.length !== 0
        ? places.map(place => (
            <Marker 
              pinColor={pickPinColor(place.bt_devices.latest)}
              // description={
              //   `latest: ${place.bt_devices.latest}`
              // }
              key={place.id}
              // title={place.name}
              coordinate={{
                latitude: place.location.lat,
                longitude: place.location.lon
              }}
            >
              <Callout onPress={(asd) => console.log(asd)}>
                <Text>{place.name}</Text>
                <Text>Devices found:</Text>
                <Text>{new Date().toString}</Text>
                <Text>16:00 - {place.bt_devices.hour_ago}</Text>
                <Text>15:00 - {place.bt_devices.two_hours_ago}</Text>
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