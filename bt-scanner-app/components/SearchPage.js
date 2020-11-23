import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'

export default function SearchPage({ locations }) {
  const [searchInput, setSearchInput] = useState('')
  const [searchResults, setSearchResults] = useState(null)

  // console.log(locations)

  const renderItem = (locationObject) => {
    return (
      <Text>{locationObject.item.name}</Text>
    )
  }

  const filterSearchResults = (searchInput) => {
    const searchResults = locations.filter(location => {
      const regex = new RegExp(searchInput, 'gi')
      console.log(location.name.match(regex))
      return location.name.match(regex)
    })
    // console.log(searchResults)
    setSearchResults(searchResults)
  }

  // console.log('search results: ', filterSearchResults())

  return (
    <View style={styles.container}>
      {/* <View> */}
        <TextInput
          style={styles.searchBar}
          onChangeText={(e) => {
            console.log(e)
            setSearchInput(e.value)
            filterSearchResults(e.value)
            console.log('searchResults: ', searchResults)
          }}
          value={searchInput}
        />
        <FlatList 
          data={searchResults}
          renderItem={renderItem}
        />
      {/* </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  searchBar: {
    marginTop: 10,
    // justifyContent: 'center',
    width: '60%',
    borderColor: 'black',
    borderWidth: 1
  }
})