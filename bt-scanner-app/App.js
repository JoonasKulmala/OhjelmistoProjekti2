
import React from 'react';
import { SafeAreaView, StyleSheet, Text, Button, Link} from 'react-native';
//Navigaatio
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//Komponentit
import SightList from './components/SightList';
import FrontPage from './components/FrontPage';
import SightInfo from './components/SightInfo';


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

function ListStackScreen({ navigation }) {
  return (
    <PlaceListStack.Navigator>
      <PlaceListStack.Screen name="List" component={SightList} />
      <PlaceListStack.Screen name="Info" component={SightInfo} />
    </PlaceListStack.Navigator>
    );
}

// Yhden kohteen yleiskuvaus, klikataan listan kautta
const SightInfoStack = createStackNavigator();

function SightStackScreen({ navigation }) {
  return (
    <SightInfoStack.Navigator>
      <SightInfoStack.Screen name="Info" component={SightInfo}
      options={{
        headerLeft: () => (
          <HeaderBackButton
            onPress={() => {
              navigation.navigate('List', {
                screen: 'List'
              });
              }}
    />
  ),
}}
      />
    </SightInfoStack.Navigator>
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
  radiusButton: {
    position: 'absolute',
    top: '10%',
    left: '2%',
    zIndex: 0
  },
});
