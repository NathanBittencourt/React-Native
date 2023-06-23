import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

let titulos;
let local;
let cor;

export default function PersonalizadoNAB(props){

  //lembrar de definir o valor de cada variável
  titulos = props.titulos;
  cor = props.cor;
  local = props.local;
  
  return(
    <View>
    //Propriedade cor sendo passada inline dentro de um array um style
      <Text style = {[styles.text, {color: cor}]}>
        time: {props.time} -
        // Sem variável utiliza-se {props.características}  
        titulos: {titulos} -
        // Com variável utiliza-se a notação característica
        local: {local} - 
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})