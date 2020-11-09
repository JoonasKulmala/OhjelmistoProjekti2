import { useState } from 'react'
import { SearchBar } from 'react-native-elements'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const Searchbar = () => {
  const [search, setSearch] = useState('')

  const updateSearch = (search) => {
    setSearch(search)
  }

  return (
    // <View style={styles.searchBar}>
      <SearchBar
        // containerStyle={{ position: 'absolute', zIndex: 1 }}
        // style={styles.searchBar}
        placeholder="Type here..."
        onChangeText={updateSearch}
        value={search}
      />
    // </View>
  )
}

const styles = StyleSheet.create({
  searchBar: {
    position: 'absolute',
    top: 50,
    left: 50,
  }
})

export default Searchbar