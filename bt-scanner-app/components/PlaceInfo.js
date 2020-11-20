import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Card, Icon } from "react-native-elements";
import React from 'react'
import { BarChart, XAxis } from 'react-native-svg-charts'
import { Text as TextSvg } from 'react-native-svg'
import * as scale from 'd3-scale'

export default function PlaceInfo({ selectedLocation, setSelectedLocation }) {
  if (!selectedLocation) return null
  
  const barChartTestData = [5, 2, 0, 0, 2]
  const xAxisData = [
    {
      time: 15,
      devices: 4
    },
    {
      time: 14,
      devices: 6
    },
    {
      time: 13,
      devices: 2
    },
    {
      time: 12,
      devices: 1
    },
    {
      time: 11,
      devices: 5
    },
  ]

  const Labels = ({ x, y, bandwidth, data }) => (
    data.map((value, index) => (
      <TextSvg
        key={index}
        x={x(index) + (bandwidth / 2)}
        y={value < 7 ? y(value) - 10 : y(value) + 15}
        fontSize={14}
        fill={ value >= 7 ? 'white' : 'black'}
        alignmentBaseline={'middle'}
        textAnchor={'middle'}
      >
        {value}
      </TextSvg>
    ))
  )

  // console.log(barChartData)

  return (
    <View style={styles.container}>
      <Card style={styles.infoCard}>
        <View style={styles.top}>
          {/* <Text testID="placeInfo_name">{place.name}</Text> */}
          <Text style={styles.locationName}>{selectedLocation.name}</Text>
          <Icon
            color="red"
            name="close"
            onPress={() => setSelectedLocation(null)}
          />
        </View>
        
        {/*<Text style={styles.scanHistory}>Scan history</Text>
        <Text testID="latestScan">{formattedDate()} - {selectedLocation.bt_devices[0].latest}</Text>
        <Text testID="previousScan">15:00 - {selectedLocation.bt_devices["15:00"]}</Text>
        <Text>14:30 - {selectedLocation.bt_devices["14:30"]}</Text> */}
        
        <BarChart 
          xAccessor={({ item }) => item}
          style={{ height: 100 }} 
          data={barChartTestData}
          svg={{ fill: '#55b957' }}
          contentInset={{ top: 20, bottom: 10 }}
        >
          <Labels />
        </BarChart>
        <XAxis 
          style={{ marginTop: 10 }}
          data={xAxisData}
          scale={scale.scaleBand}
          formatLabel={(_, index) => xAxisData[index].time}
          svg={{ fontSize: 13, fill: 'black' }}
        />
        {/* <Text
          style={{ color: 'red'}}
          onPress={() => setSelectedLocation(null)}
        >
          close
        </Text> */}
        
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    position: 'absolute',
    top: '30%',
    width: Dimensions.get('screen').width,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  locationName: {
    marginBottom: 15,
    fontSize: 20
  },
  scanHistory: {
    marginBottom: 5
  }, 
  icon: {
    
  }
})
