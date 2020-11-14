import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const SearchResults = ({ searchResults }) => {
  const renderItem = (asd, { item }) => {
    console.log(asd)
    return (
      <TouchableOpacity>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    )
  }
  
  return (
    <View style={styles.keksiParempiNimi}>
      <FlatList 
        data={searchResults}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  keksiParempiNimi: {
    position: 'absolute'
  }
})

export default SearchResults