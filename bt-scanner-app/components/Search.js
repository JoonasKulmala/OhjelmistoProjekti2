import { useEffect, useState } from 'react'
import React from 'react'
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import locationService from '../services/locations'

const Search = ({ navigation }) => {
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState(null)
  const [locations, setLocations] = useState([])

  useEffect(() => {
    locationService
      .getAll()
      .then(response => setLocations(response))
  }, [])

  console.log(locations)
  // console.log(navigation)

  const filterSearchResults = () => {
    locations.forEach(l => console.log(l.name))
    const results = locations.filter(l => l.name.toLowerCase().indexOf(search.toLowerCase()) !== -1)
    setSearchResults(results)
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Home')}
    >
      <Text>{item.name}</Text>
    </TouchableOpacity>
  )

  return (
    // <View style={styles.searchBar}>
      // <SearchBar
      //   // containerStyle={{ position: 'absolute', zIndex: 1 }}
      //   // style={styles.searchBar}
      //   placeholder="Type here..."
      //   onChangeText={updateSearch}
      //   value={search}
      //   containerStyle={{ position: 'absolute' }}
      // />
    // </View>
    <View>
      <TextInput 
        onChangeText={input => setSearch(input)}
        value={search}
      />
      <Button
        title="search"
        onPress={filterSearchResults}
      />
      {searchResults !== null ?
        <FlatList
          data={searchResults}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
        : null}
    </View>
  )
}

const styles = StyleSheet.create({
  searchBar: {
    position: 'absolute',
    top: 50,
    left: 50,
  }
})

export default Search