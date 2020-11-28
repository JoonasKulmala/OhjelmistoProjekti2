import MapView, { Circle, Marker } from 'react-native-maps'
import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { pickPinColor, formattedDate } from '../utility'
import RadiusButton from './RadiusButton'
import NumberMarker from './NumberMarker'
import Search from './Search'
import { mapStyle } from '../mapStyle'

// Nämä arvot määrittävät "zoomin" kartassa
// Arvon ollessa 0.001, zoomataan lähelle koordinaattien mukaista sijaintia
const LAT_DELTA = 0.001
const LON_DELTA = 0.001

const Map = ({ locations, setSelectedLocation }) => {
  const [scanRadius, setScanRadius] = useState(false)

  // luodaan referenssi, joka annetaan propsina MapView komponentille
  // Referenssin avulla päästään ainakin käsiksi komponentin metodeihin
  // Alla olevassa funktiossa "animateToGivenLocation" käytetään komponentin funktiota
  // "animateToRegion"
  const mapRef = React.createRef()

  // const toggleRadius = () => {
  //   setShowRadius(!showRadius)
  //   if (radiusButtonTitle === 'show radius') {
  //     setRadiusButtonTitle('hide radius')
  //   } else if (radiusButtonTitle === 'hide radius') {
  //     setRadiusButtonTitle('show radius')
  //   }
  // }

  // REST-rajapinnassa olevat latitude ja longitude ovat tyypiltään merkkijonoja,
  // joten ne täytyy parsia liukuluvuiksi

  const animateToGivenLocation = (latitude, longitude) => {
    mapRef.current.animateToRegion({
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
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
                coordinate={{
                  latitude: parseFloat(location.latitude),
                  longitude: parseFloat(location.longitude)
                }}
                onPress={() => setSelectedLocation(location)}
              >
                <NumberMarker 
                  location={location}
                />
              </Marker>
              {/* Jos showRadius true, renderöidään karttaan ympyrä Markkerin yhteyteen */}
              {scanRadius ?
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
        scanRadius={scanRadius} 
        setScanRadius={setScanRadius}
      />
      <View style={styles.searchIcon}>
        <Search 
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
  searchIcon: {
    position: 'absolute',
    top: '1%',
    left: '1%'
  }
})

export default Map