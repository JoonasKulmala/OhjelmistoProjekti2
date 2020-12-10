
import React, { Component } from 'react';
import { Pressable, ActivityIndicator, FlatList, Text, View, StyleSheet, Button, TouchableHighlight} from 'react-native';
import { ListItem, Header, Avatar } from 'react-native-elements';
import SightInfo from './SightInfo';

//Listaa kaikki käyntikohteet kohteet
export default class SightList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true
    }
  }

//hakee json-dataa herokun backendistä
  componentDidMount() {
    fetch('http://open-api.myhelsinki.fi/v1/places/')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.data});
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

    _onPressButton(props) {
      this.props.navigation.navigate('Info')
    }

  render() {
    const { data, isLoading } = this.state;


    //Listaa nähtävyydet, jatkossa painamalla kohdetta, käyttäjä saa siitä lisätietoa
    //Avatar on työn alla
    return (
      <View style={{ flex: 1}}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
              <TouchableHighlight onPress={() => {this._onPressButton(this.props)}} underlayColor="white">
                <ListItem
                  Avatar={{
                    title: item.name.fi,
                    source: {
                      uri: "item.description.images[].url",
                      cache: 'only-if-cache'
                   },
                }}>
                    <ListItem.Content>
                        <ListItem.Title>{item.name.fi}</ListItem.Title>
                    </ListItem.Content>
                  <ListItem.Chevron/>
                </ListItem>
              </TouchableHighlight>
            )}
          />
        )}
      </View>
    );
  }
};
