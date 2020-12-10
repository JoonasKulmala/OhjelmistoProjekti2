import React, { useState } from 'react';
import { Text, TextInput, View, Image, Linking } from 'react-native';

//Kovakoodattu esimerkkinä
const list = [
  {
    name: 'A. Tillander',
    pic_url: 'https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2018-09/suomenlinna_suomen_ilmakuva_suomenlinnan_hoitokunta_location_only.jpg?h=603de84b&itok=L7heeTHT',
    description:"Jalokiviseppä ja ateljee, myös koruaiheisia näyttelyitä.",
    link: "http://www.alexandertillander.fi/"
  },
]

const Name = (props) => {
  return (
    <View>
      <Text style={{fontSize: 30,  fontWeight: 'bold',}}>{props.name}</Text>
      <Text style={{fontSize: 17}}>{props.description}</Text>
      <Text style={{fontSize: 17}}>{props.link}</Text>
    </View>
  );
}

const SightInfo = () => {
  return (
    <View style={{padding: 6, alignItems: 'center'}}>
    <Name name={list[0].name}/>
    <Image source={{
      uri: 'https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-10/14657520_1627162420917017_2082522418259513419_n.jpg?h=1555b8b2&itok=cv8nhamq',
      cache: 'only-if-cached'
    }}
    style={{ width: 400, height: 320 }}
    />
    <Name description={list[0].description} link={list[0].link}  />
    </View>
  );
}

export default SightInfo;
