import React from 'react';
import { View, Text} from 'react-native';
import Estilos from "../styles/styles.js";

export default function Texto(){
  return(
  <View>
    <Text style={Estilos.nome}>Nathan Bittencourt de Oliveira</Text>
    <Text style={Estilos.matricula}>Matrícula: 11032110477</Text>
  </View>
  );
}