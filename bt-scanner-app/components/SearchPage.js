import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'

export default function SearchPage({ locations }) {
  const [searchInput, setSearchInput] = useState('')
  const [searchResults, setSearchResults] = useState(null)

  const renderItem = (locationObject) => {
    console.log(locationObject)
    return (
      <Text>{locationObject.item.name}
        <Text>{searchInput}</Text>
      </Text>
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
        keyExtractor={item => item.id}
      />
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
    width: '60%',
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingLeft: 5,
    paddingVertical: 5
  }
})