import { useEffect, useState } from 'react'
import React from 'react'
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import locationService from '../services/locations'

const Search = (props) => {

  console.log('Search props: ', props)

  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState(null)
  const [locations, setLocations] = useState([])

  useEffect(() => {
    locationService
      .getAll()
      .then(response => setLocations(response))
  }, [])

  // console.log(locations)
  // console.log(navigation)

  const filterSearchResults = () => {
    // locations.forEach(l => console.log(l.name))
    const results = locations.filter(l => l.name.toLowerCase().indexOf(search.toLowerCase()) !== -1)
    setSearchResults(results)
  }

  // const renderItem = ({ item }) => (
  //   <TouchableOpacity
  //     onPress={() => navigation.navigate('Home')}
  //   >
  //     <Text>{item.name}</Text>
  //   </TouchableOpacity>
  // )

  const handleSearchTextChange = (searchInput) => {
    setSearch(searchInput)
    console.log(search)
    filterSearchResults()
  }

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
    // <View>
      <View style={styles.container}>
        {/* Täytyisi siirtää search muuttujan arvo jotenkin samaan komponenttiin, jossa on MapView */}
        <TextInput 
          onChangeText={input => handleSearchTextChange(input)}
          value={search}
        />
        {/* <Button
          title="search"
          onPress={filterSearchResults}
        /> */}
        {/* voisiko olla searchResults ? */}
        
      </View>
    //   {/* {searchResults ?
    //     <FlatList
    //       data={searchResults}
    //       renderItem={renderItem}
    //       keyExtractor={item => item.id.toString()}
    //     />
    //     : null}
    // </View> */}
  )
}

const styles = StyleSheet.create({
  // searchBar: {
  //   position: 'absolute',
  //   top: 50,
  //   left: 50,
  // },
  container: {
    borderStyle: "solid",
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    width: 100,
    padding: 5,
    marginRight: 5
  }
})

export default Search