import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-elements";
import React from 'react'

export default function PlaceInfo({ place, setActiveLocation }) {

  console.log('active place: ', place)

  if (!place) {
    return null
  }

  return (
    <View style={styles.container}>
      <Card style={styles.infoCard}>
        <Text>{place.name}</Text>
        <Text>{place.bt_devices.latest}</Text>
        <Text>{place.bt_devices.hour_ago}</Text>
        <Text>{place.bt_devices.two_hours_ago}</Text>
        <Text onPress={() => setActiveLocation(null)}>close [x]</Text>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: Dimensions.get('screen').width * 0.8
  },
  infoCard: {
  }
})