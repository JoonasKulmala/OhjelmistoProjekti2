import MapView, { Callout, Circle, Marker } from 'react-native-maps'
import React, { useState } from 'react'
import { Button, Dimensions, StyleSheet, Text, View } from 'react-native'
import { pickPinColor, formattedDate } from '../utility'
import Searchbar from './Searchbar'

const Map = ({ locations, setActiveLocation }) => {
  const [showRadius, setShowRadius] = useState(true)
  const [radiusButtonTitle, setRadiusButtonTitle] = useState('hide radius')

  const mapRef = React.createRef()

  console.log('ref: ', mapRef);
  const handleCalloutPress = (location) => {
    setActiveLocation(location)
    console.log(location)
  }

  const toggleRadius = () => {
    setShowRadius(!showRadius)
    if (radiusButtonTitle === 'show radius') {
      setRadiusButtonTitle('hide radius')
    } else if (radiusButtonTitle === 'hide radius') {
      setRadiusButtonTitle('show radius')
    }
  }
  
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

  mapRef.current.animateToRegion({
    latitude: 50,
    longitude: 25,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1
  })

  return (
    <View>
      {/* <View style={styles.searchBar}>
        <Searchbar />
      </View> */}
      <MapView
        ref={mapRef}
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
                {/* Callout-komponentin avulla pystyy esittämään tietoa usean rivin verran
                Markerin description-propsissa tämä ei oikein onnistunut */}
                {/* Handler aktivoi sijainnin, jolloin avautuu Card-komponentti, jossa näkyvissä lisätietoa */}
                <Callout
                  onPress={() => handleCalloutPress(location)}
                >
                  {/* Calloutsubview https://github.com/react-native-maps/react-native-maps/issues/3363 */}
                  <Text>{location.name}</Text>
                  <Text>Devices found: {location.bt_devices[0].latest} ({formattedDate()})</Text>
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
      <View style={styles.radiusButton}>
        <Button 
          onPress={toggleRadius}
          title={radiusButtonTitle}
        />
      </View>
      <View style={styles.navigationButton}>
        <Button 
          title="asd"
          onPress={null}
        />
      </View>
      {/* <View style={styles.searchBar}> */}
      {/* </View> */}
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
  },
  searchBar: {
    // position: 'absolute',
    // top: '10%'
  },
  navigationButton: {
    position: 'absolute',
    top: '7%',
    left: '75%'
  }
  
})

export default Map