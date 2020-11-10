import { useState } from 'react'
import { SearchBar } from 'react-native-elements'
import React from 'react'
import { Button, FlatList, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'

const Search = ({ locations }) => {
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState(null)

  const updateSearch = (search) => {
    setSearch(search)
  }

  console.log(locations)
  const filterSearchResults = () => {
    locations.forEach(l => console.log(l.name))
    const results = locations.filter(l => l.name.toLowerCase().indexOf(search.toLowerCase()) !== -1)
    setSearchResults(results)
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity>
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
        onChangeText={(input) => {
          updateSearch(input)
          console.log(search)
        }}
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
          keyExtractor={item => item.id}
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