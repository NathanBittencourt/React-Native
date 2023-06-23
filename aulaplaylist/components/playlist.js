import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

let banda;

export default function Playlist(props){

  banda = props.banda;

  const[ligado, setLigado] = useState(false);

  return(
    <View>
      <Text>
        Banda: {banda} -
        Musica: {props.musica} -
        Ligado: {ligado ? 'Sim' : 'Não'}
      </Text>

      <View style = {style.viewPlaylist}>
        <Button 
          title = {ligado ? 'Desligar o som' : 'Ligar o som'}
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