import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
//Navigaatio
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//Komponentit
import SightList from './components/SightList';
import FrontPage from './components/FrontPage';

//Etusivu, eli karttanäkymä
const MapStack = createStackNavigator();

function MapStackScreen() {
  return (
    <MapStack.Navigator>
      <MapStack.Screen name="Map" component={FrontPage} />
    </MapStack.Navigator>
    );
}

// Paikkojen listaus
const PlaceListStack = createStackNavigator();

function ListStackScreen() {
  return (
    <PlaceListStack.Navigator>
      <PlaceListStack.Screen name="List of sights in Helsinki area" component={SightList} />
    </PlaceListStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Lista" component={ListStackScreen}
            options={{
              tabBarLabel: 'List',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="format-list-bulleted" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen name="Kartta" component={MapStackScreen}
            options={{
            tabBarLabel: 'Map',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="map" color={color} size={26} />
            ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
