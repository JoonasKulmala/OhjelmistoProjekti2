import MapView, { Callout, Circle, Marker } from 'react-native-maps'
import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { pickPinColor, formattedDate } from '../utility'
import RadiusButton from './RadiusButton'
import NumberMarker from './NumberMarker'

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
                pinColor={pickPinColor(location.bt_devices.latest)}
                coordinate={{
                  latitude: location.location.lat,
                  longitude: location.location.lon
                }}
              >
                <NumberMarker location={location} />
              </Marker>
              {/* Jos showRadius true, renderöidään karttaan ympyrä Markkerin yhteyteen */}
              {showRadius ?
                <Circle 
                  fillColor='#62d255'
                  center={{
                    latitude: location.location.lat,
                    longitude: location.location.lon
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