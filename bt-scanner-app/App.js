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
import FrontPage from './components/FrontPage';


const MapStack = createStackNavigator();
function MapStackScreen() {
  return (
    <MapStack.Navigator>
      <MapStack.Screen name ="Kartta" component={ FrontPage } />
    </MapStack.Navigator>
    );
}

// Paikkojen listaus
const PlaceListStack = createStackNavigator();
function ListStackScreen() {
  return (
    <PlaceListStack.Navigator>
    <PlaceListStack.Screen name ="Kohteet" component={ SightList } />
    </PlaceListStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
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
