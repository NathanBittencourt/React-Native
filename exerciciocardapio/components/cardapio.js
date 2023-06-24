import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

let prato;

export default function Playlist(props){

  prato = props.prato;

  const[ligado, setLigado] = useState(false);

  return(
    <View>
      <Text>
        Cardapio: {prato} -
        Valor: {props.valor} -
        Ligado: {ligado ? 'Sim' : 'Não'}
      </Text>

      <View style = {style.viewPlaylist}>
        <Button 
          title = {ligado ? 'Cancelar' : 'Comprar'}
          onPress = {()=> setLigado(!ligado)}
          color = {ligado ? 'red' : 'green'}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  viewPlaylist:{
    width: '200px',
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 10
  }
})