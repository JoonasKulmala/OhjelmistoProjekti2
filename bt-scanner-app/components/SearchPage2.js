import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'

export default function SearchPage2({ locations, animateToGivenLocation }) {
  const [searchInput, setSearchInput] = useState('')
  const [searchResults, setSearchResults] = useState(null)
  const [showSearchBar, setShowSearchBar] = useState(false)

  const renderItem = ({ item }) => {
    if (searchInput === '') {
      return null
    }
    
    return (
      <TouchableOpacity 
        style={styles.flatListItem}
        onPress={() => animateToGivenLocation(
            item.location.lat, item.location.lon)}
      >
        <Text>{item.name}</Text>
      </TouchableOpacity>
    )
  }

  // funktio, joka suodattaa locations taulukosta 
  // pois oliot, jotka eivät täsmää syötetyn hakusanan kanssa
  // Käytetään apuna RegExp-oliota ja 
  // String-olion metodia 'match'

  const filterSearchResults = (searchInput) => {
    const searchResults = locations.filter(location => {
      const regex = new RegExp(searchInput, 'i')
      console.log(`location: ${location}, regex: ${regex}`)
      console.log(`match??, ${location.name.match(regex)}`)
      return location.name.match(regex)
    })

    setSearchResults(searchResults)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.searchIcon}
        onPress={() => setShowSearchBar(!showSearchBar)}
      >
        <Icon name="search" color="white" />
      </TouchableOpacity>
      {showSearchBar ?
        <View>
          <TextInput
            style={styles.searchBar}
            onChangeText={(e) => {
              console.log(e)
              setSearchInput(e)
              filterSearchResults(e)
            }}
            value={searchInput}
          />
          <FlatList 
            data={searchResults}
            renderItem={renderItem}
            keyExtractor={item => String(item.id)}
          />
        </View> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // marginTop: '5%',
    // marginLeft: '5%'
  },
  searchBar: {
    width: 200,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingLeft: 5,
    paddingVertical: 5
  },
  flatListItem: {
    backgroundColor: '#ffffff',
    paddingVertical: 5,
    paddingHorizontal: 3,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  searchIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#2296f3',
    borderRadius: 20,
    padding: 8,
    marginRight: '5%'
  }
})