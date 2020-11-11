import MapView, { Callout, Circle, Marker } from 'react-native-maps'
import React, { useState } from 'react'
import { Button, Dimensions, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { pickPinColor, formattedDate } from '../utility'

const Map = ({ locations, setActiveLocation }) => {
  const [showRadius, setShowRadius] = useState(true)
  const [radiusButtonTitle, setRadiusButtonTitle] = useState('hide radius')
  const [search, setSearch] = useState(null)
  const [searchResults, setSearchResults] = useState(null)

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

  // toimii
  const animateToAkanapolku = () => {
    mapRef.current.animateCamera({ 
      center: {
        latitude: 60.2997901,
        longitude: 25.0592432
      }
    })
  }

  const animateToGivenLocation = (latitude, longitude) => {
    mapRef.current.animateCamera({
      center: {
        latitude: latitude,
        longitude: longitude
      }
    })
  }

  const filterSearchResults = () => {
    console.log('searchword: ', search);
    const results = locations.filter(l => l.name.toLowerCase().indexOf(search.toLowerCase()) !== -1)
    setSearchResults(results)
  }
  // console.log(searchResults)
  
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => animateToGivenLocation(item.location.lat, item.location.lon)}
    >
      <Text>{item.name}</Text>
    </TouchableOpacity>
  ) 

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
          onPress={animateToAkanapolku}
        />
      </View>
      <View style={styles.search}>
        <TextInput 
          onChangeText={input => setSearch(input)}
          value={search}
        />
        <Button
          title="search"
          onPress={() => {
            filterSearchResults()
            console.log('search results:', searchResults);
          }}
        />
      </View>
      <View style={styles.searchResults}>
        <FlatList 
          data={searchResults}
          renderItem={renderItem}
          keyExtractor={item => String(item.id)}
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
  searchResults: {
    position: 'absolute',
    top: '35%'
  }
  
})

export default Map