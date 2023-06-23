import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import PersonalizadoNAB from './components/personalizadoNBA';

export default function App() {
  return(
    <View style = {styles.container}>
      <View style = {styles.box}>
      <PersonalizadoNAB
          time = "Los Angeles Lakers"
          titulos = "17"
          local = "Los Angeles"
          mascote = "Sem mascote"
          cor = "#daa520"
      />
      </View>

      <View style = {styles.box}>
      <PersonalizadoNAB
          time = "Boston Critics"
          titulos = "17"
          local = "Boston"
          mascote = "Irlandês"
          cor = "#212121"
      />
      </View>

      <View style = {styles.box}>
      <PersonalizadoNAB
          time = "Boston Critics"
          titulos = "17"
          local = "Boston"
          mascote = "Irlandês"
          cor = "#212121"
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e5e5",
    justifyContent: 'center',
    alignitems: 'center',
  },
  box: {
    backgroundColor: '#000000',
    margin: 15,
    padding: 10,
    width: 500,
    height: 50,
    justifyContent: 'center',
    alignitems: 'center',
  }
})
