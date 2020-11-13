import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-elements";
import React from 'react'
import { formattedDate } from "../utility";

export default function PlaceInfo({ place, setActiveLocation }) {

  if (!place) {
    return null
  }

  return (
    <View style={styles.container}>
      <Card style={styles.infoCard}>
        {/* <Text testID="placeInfo_name">{place.name}</Text> */}
        <Text></Text>
        <Text>Devices:</Text>
        <Text testID="latestScan">{formattedDate()} - {place.bt_devices[0].latest}</Text>
        <Text testID="previousScan">15:00 - {place.bt_devices["15:00"]}</Text>
        <Text>14:30 - {place.bt_devices["14:30"]}</Text>
        <Text
          style={{ color: 'red'}}
          onPress={() => setActiveLocation(null)}
        >
          close
        </Text>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '30%',
    width: Dimensions.get('screen').width,
  },
})
