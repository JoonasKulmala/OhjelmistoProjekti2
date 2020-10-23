import { StyleSheet, Text, View } from "react-native";
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
        {/* <Text testID="placeInfo_name">{place.name}</Text> */}
        <Text></Text>
        <Text>Devices:</Text>
        <Text>latest - {place.bt_devices.latest}</Text>
        <Text>15:00 - {place.bt_devices["15:00"]}</Text>
        <Text>14:30 - {place.bt_devices.["14:30"]}</Text>
        <Text 
          style={{ color: 'red'}}
          onPress={() => setActiveLocation(null)}
        >
          [x]
        </Text>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
  infoCard: {
    width: 500,
    height: 500,
  }
})