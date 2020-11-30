import { StyleSheet, Text, View } from "react-native";
import React from 'react'

// TODO: Pystyisiköhän Markkerin kokoa muuttamaan zoomauksen mukaan ??

export default function NumberMarker({ location }) {
  console.log(location.scan_results);
  return (
    <View style={styles.container}>
      <View style={styles.bubble}>
        <Text style={styles.number}>{location.scan_results[location.scan_results.length - 1].devices}</Text>
      </View>
      <View style={styles.markerBottom}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  bubble: {
    flex: 0, 
    padding: 5,
    backgroundColor: '#ffffff',
    borderRadius: 7,
    borderWidth: 1.5
  },
  number: {
    fontSize: 18
  },
  markerBottom: {
    backgroundColor: '#000000',
    height: 5,
    width: 3,
  }
})