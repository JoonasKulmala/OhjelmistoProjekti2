import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, Icon } from 'react-native';
import { ListItem, Header } from 'react-native-elements';

/* To-do:
- vaihda fetch backendiin
- headeriin linkit
*/

//Listaa kaikki käyntikohteet kohteet
export default class SightList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

//hakee json-dataa myhelsinki API:sta
  componentDidMount() {
    fetch('http://open-api.myhelsinki.fi/v1/places/')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.data });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { data, isLoading } = this.state;


    //Icon poistettu, tulevassa backendissä linkki kuvapankin kuvaan
    return (
      <View style={{ flex: 1}}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title>{item.name.fi}</ListItem.Title>
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
