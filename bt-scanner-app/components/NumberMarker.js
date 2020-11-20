import { StyleSheet, Text, View } from "react-native";
import React from 'react'

// TODO: Pystyisiköhän Markkerin kokoa muuttamaan zoomauksen mukaan ??

export default function NumberMarker({ location }) {
  return (
    <View style={styles.container}>
      <View style={styles.bubble}>
        <Text style={styles.number}>{location.bt_devices[0].latest}</Text>
      </View>
      <View style={styles.markerBottom}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  // flex: 0 mukauttaa View-elementin koon sen sisällön mukaiseksi
  bubble: {
    flex: 0, 
    padding: 5,
    // alignItems: 'center',
    // justifyContent: 'center',
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
    // borderTopColor: '#ffffff',
    // borderWidth: 4
  }
})