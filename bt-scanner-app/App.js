import React, { useState, useEffect } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PlaceInfo from './components/PlaceInfo';
import Map from './components/Map';
import locationService from './services/locations'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import Search from './components/Search';

const Drawer = createDrawerNavigator()

const HomeScreen = () => {
  const [locations, setLocations] = useState([])
  // activeLocation vaihtuu aina kun painetaan jotain kohdetta kartasta
  // Määrittää renderöidäänkö PlaceInfo komponentti ruudulle
  const [activeLocation, setActiveLocation] = useState(null)

  useEffect(() => {
    locationService
      .getAll()
      .then(response => setLocations(response))
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Map 
          locations={locations} 
          setActiveLocation={setActiveLocation} 
        />
        <PlaceInfo 
          place={activeLocation}
          setActiveLocation={setActiveLocation} 
        />
      </View>
    </SafeAreaView>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen 
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: props => console.log(props),
            headerRight: () => (
              // <Button 
              //   onPress={() => navigatio}
              //   title="Search"
              // />
              <Search />
            )
          }}
        />
        <Drawer.Screen 
          name="Search"
          component={Search}
        />
      </Drawer.Navigator>
    </NavigationContainer>
    // <SafeAreaView style={styles.container}>
    //   <View>
    //     <Map 
    //       locations={locations} 
    //       setActiveLocation={setActiveLocation} 
    //     />
    //     <PlaceInfo 
    //       place={activeLocation}
    //       setActiveLocation={setActiveLocation} 
    //     />
    //   </View>
    //   {/* <View style={styles.radiusButton}>
    //     <TouchableOpacity
    //       // style={styles.radiusButton}
    //     >
    //       <Text>show radius</Text>
    //     </TouchableOpacity>
    //   </View> */}
    //   {/* <Searchbar /> */}
      
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  radiusButton: {
    position: 'absolute',
    top: '10%',
    left: '2%',
    zIndex: 0
  }
});
