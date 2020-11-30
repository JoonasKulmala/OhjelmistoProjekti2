import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, Icon, Avatar} from 'react-native';
import { ListItem, Header } from 'react-native-elements';
//import SightInfo from './SightInfo';

/* To-do:
- headeriin toimivat linkit ja lisätietoa
- hakee komponentin SightList
*/

//Listaa kaikki käyntikohteet kohteet
export default class SightList extends Component {

  _onPressButton() {
    alert('Lisätietoa kohteesta ei ole vielä saatavilla')
 }

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

//hakee json-dataaherokun backendistä
  componentDidMount() {
    fetch('https://raspberrybackend.herokuapp.com/results')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json});
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { data, isLoading } = this.state;


    //Listaa nähtävyydet, jatkossa painamalla kohdetta, käyttäjä saa siitä lisätietoa
    return (
      <View style={{ flex: 1}}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
              <ListItem onPress={this._onPressButton()}>
                  <ListItem.Content>
                    <ListItem.Title>{item.location}</ListItem.Title>
                   </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
            )}
          />
        )}
      </View>
    );
  }
};
