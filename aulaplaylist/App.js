import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Playlist from './components/playlist';

export default function App(){
  return(
    <View style = {styles.container}>
      <Text style = {styles.texto}>
        Monte sua playlist com as opções abaixo:
      </Text>

      <View style = {styles.box}>
        <Playlist
          banda = "Bruno e Marrone"
          musica = 'Boate Azul'
        />
      </View>

      <View style = {styles.box}>
        <Playlist
          banda = "Legião Urbana"
          musica = 'Faroeste Caboclo'
        />
      </View>

      <View style = {styles.box}>
        <Playlist
          banda = "Chitãozinho e Xororó"
          musica = 'Te esperando na janela'
        />
      </View>

      <View style = {styles.box}>
        <Playlist
          banda = "Chorão"
          musica = 'Só os loucos sabem'
        />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#e5e5e5",
    alignItems: 'center',
  },
  texto:{
    fontSize: 18,
    margin: 10,
    padding:10,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  box:{
    borderWidth: 1,
    backgroundColor:'#f0e68c',
    margin: 15,
    padding: 10,
    width: 500,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
