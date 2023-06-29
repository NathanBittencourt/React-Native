import React from 'react';
import {FlatList, View, Text} from 'react-native';
import Estilos from "../styles/styles.js";

const musicas = [
  {
    id: '001',
    nome: 'Tempo Perdido',
    ano: 1986
  },
  {
    id: '002',
    nome: 'Yesterday',
    ano: 1965
  },
  {
    id: '003',
    nome: 'Rocket Man',
    ano: 1972
  },
  {
    id: '004',
    nome: 'Heroes',
    ano: 1977
  },
  {
    id: '005',
    nome: 'Always',
    ano: 1994
  }
];

export default function ListaPlana(){
  return(
    <View>
      <FlatList
        data = {musicas}
        keyExtractor = {item => item.id}
        renderItem = {
            ({item}) => <View style = {Estilos.item}>
              <Text style = {Estilos.textoItem}>ID: {item.id}</Text>
              <Text style = {Estilos.textoItem}>Música: {item.nome}</Text>
              <Text style = {Estilos.textoItem}>Ano: {item.ano}</Text>
            </View>
        }
      />
    </View>
  );
}