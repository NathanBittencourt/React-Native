import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Playlist from './components/cardapio';

export default function App(){
  return(
    <View style = {styles.container}>
      <Text style = {styles.texto}>
        Monte seu cardápio com as opções abaixo:
      </Text>

      <View style = {styles.box}>
        <Playlist
          prato = " Parmentier de canard"
          valor = 'R$50,00'
        />
      </View>

      <View style = {styles.box}>
        <Playlist
          prato = "Foie gras"
          valor = 'R$60,00'
        />
      </View>

      <View style = {styles.box}>
        <Playlist
          prato = "Pernil do cordeiro"
          valor = '45,99'
        />
      </View>

      <View style = {styles.box}>
        <Playlist
          prato = "Lagostas e coquilles saint jacques"
          valor = 'R$70,00'
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
    backgroundColor:'#5F9F9F',
    margin: 15,
    padding: 10,
    width: 500,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
