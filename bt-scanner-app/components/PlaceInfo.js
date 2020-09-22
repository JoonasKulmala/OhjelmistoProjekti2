import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-elements";
import React from 'react'

export default function PlaceInfo({ place }) {
  return (
    <View style={styles.placeInfo}>
      <Card>
        <Text>{place.name}</Text>
        <Text>{place.bt_devices.latest}</Text>
        <Text>{place.bt_devices.hour_ago}</Text>
        <Text>{place.bt_devices.two_hours_ago}</Text>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  placeInfo: {
    position: 'absolute'
  }
})