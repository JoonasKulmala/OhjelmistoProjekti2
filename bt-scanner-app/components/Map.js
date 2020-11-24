import MapView, { Callout, Circle, Marker } from 'react-native-maps'
import React, { useState } from 'react'
import { Button, Dimensions, StyleSheet, Text, View } from 'react-native'
import { pickPinColor, formattedDate } from '../utility'
import SearchPage2 from './SearchPage2'
import { mapStyle } from '../mapStyle'

const LAT_DELTA = 0.001
const LON_DELTA = 0.001

const Map = ({ locations, setActiveLocation }) => {
  const [showRadius, setShowRadius] = useState(true)
  const [radiusButtonTitle, setRadiusButtonTitle] = useState('hide radius')

  // luodaan referenssi, joka annetaan propsina MapView komponentille
  const mapRef = React.createRef()

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

  const animateToGivenLocation = (latitude, longitude) => {
    mapRef.current.animateToRegion({
      latitude,
      longitude,
      latitudeDelta: LAT_DELTA,
      longitudeDelta: LON_DELTA
    }, 2000)
  }

  return (
    <View>
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
      <View 
        style={{ position: 'absolute', left: '40%'}}>
        <SearchPage2 
          locations={locations} 
          animateToGivenLocation={animateToGivenLocation}
        />
      </View>
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
  search: {
    position: 'absolute',
    top: '25%'
  },
  navigationButton: {
    position: 'absolute',
    top: '7%',
    left: '75%'
  },
})

export default Map