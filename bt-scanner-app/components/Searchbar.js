import { useState } from 'react'
import { SearchBar } from 'react-native-elements'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const Searchbar = () => {
  const [search, setSearch] = useState('')

  const updateSearch = (search) => {
    console.log(search)
    setSearch(search)
  }

  return (
    <View style={styles.searchBar}>
      <SearchBar
        // style={styles.searchBar}
        placeholder="Type here..."
        onChangeText={updateSearch}
        value={search}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  // searchBar: {
  //   position: 'absolute',
  //   top: 50,
  //   left: 50,
  //   zIndex: 1
  // }
})

export default Searchbar