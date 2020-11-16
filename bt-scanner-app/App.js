import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, ActivityIndicator, Container, Button} from 'react-native';
import locationService from './services/locations'
//Navigaatio
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Komponentit
import PlaceInfo from './components/PlaceInfo';
import Map from './components/Map';
import SightList from './components/SightList';

// TO-do vaihda myöhemmin komponentti ja sen nimi, kun navi todettu toimivaksi
const MapStack = createStackNavigator();
function MapStackScreen() {
  return (
    <MapStack.Navigator>
      <MapStack.Screen name ="Capital Area Map View" component={ SightList } />
    </MapStack.Navigator>
    );
}

// Paikkojen listaus
const PlaceListStack = createStackNavigator();
function ListStackScreen() {
  return (
    <PlaceListStack.Navigator>
    <PlaceListStack.Screen name ="List of Sights" component={ SightList } />
    </PlaceListStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

export default function App() {
  const [locations, setLocations] = useState([])
  // selectedLocation vaihtuu aina kun painetaan jotain kohdetta kartasta
  // Määrittää renderöidäänkö PlaceInfo komponentti ruudulle
  const [selectedLocation, setSelectedLocation] = useState(null)

  useEffect(() => {
    locationService
      .getAll()
      .then(response => setLocations(response))
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Map
        locations={locations}
        setSelectedLocation={setSelectedLocation}
      />
      <PlaceInfo
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
      />
      //Tämä kohta kai pitäis järjestellä jotenki järkevästi(?)
      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Lista" component={ListStackScreen} />
        <Tab.Screen name="Kartta" component={MapStackScreen} />
      </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
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
