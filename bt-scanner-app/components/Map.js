import MapView, { Callout, Circle, Marker } from 'react-native-maps'
import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { pickPinColor, formattedDate } from '../utility'
import RadiusButton from './RadiusButton'

const Map = ({ locations, setSelectedLocation }) => {
  const [showRadius, setShowRadius] = useState(true)

  // Kartasta hieman selkeämpi
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
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 60.2997901,
          longitude: 25.0592432,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        customMapStyle={mapStyle}
      >
        {/* Jos propsi locations ei ole tyhjä, renderöidään Markkerit karttaan.
        Jos taas on, ei renderöidä mitään (null) */}
        {locations.length !== 0
          ? locations.map(location => (
            <View key={location.id}>
              <Marker 
                // pinColor={pickPinColor(location.bt_devices.latest)}
                coordinate={{
                  latitude: parseFloat(location.latitude),
                  longitude: parseFloat(location.longitude)
                }}
              >
                {/* Callout-komponentin avulla pystyy esittämään tietoa usean rivin verran
                Markerin description-propsissa tämä ei oikein onnistunut */}
                {/* Handler aktivoi sijainnin, jolloin avautuu Card-komponentti, jossa näkyvissä lisätietoa */}
                <Callout
                  onPress={() => setSelectedLocation(location)}
                >
                  {/* Calloutsubview https://github.com/react-native-maps/react-native-maps/issues/3363 */}
                  <Text>{location.location}</Text>
                  <Text>Devices found: {location.foundDevices} ({formattedDate()})</Text>
                  <Text 
                    onPress={() => console.log('Show more info..')}
                    style={{ color: 'blue' }}
                  >
                    Show more information
                  </Text>
                </Callout>
              </Marker>
              {/* Jos showRadius true, renderöidään karttaan ympyrä Markkerin yhteyteen */}
              {showRadius ?
                <Circle 
                  fillColor='#62d255'
                  center={{
                    latitude: parseFloat(location.latitude),
                    longitude: parseFloat(location.longitude)
                  }}
                  radius={15}
                />
                : null}
            </View>
            ))
          : null}
      </MapView>
      <RadiusButton 
        showRadius={showRadius} 
        setShowRadius={setShowRadius}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  map: {
    height: Dimensions.get('screen').height,
  },
  radiusButton: {
    position: 'absolute',
    top: '7%',
    left: '2%'
  }
})

export default Map