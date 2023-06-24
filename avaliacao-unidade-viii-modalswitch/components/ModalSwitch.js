import React, {useState} from 'react';
import { View, Text, Modal, Switch} from 'react-native';
import Estilos from "../styles/styles.js";

export default function Texto(){

  const [visivel, setVisivel] = useState(false);

  return(
  <View>
    <Modal
      animationType='slide'
      transparent={true}
      visible={visivel}
    >
      <View style={Estilos.modal}>
        <Text style={Estilos.textoModal}>Nathan Bittencourt de Oliveira</Text>
        <Text style={Estilos.textoModal}>Matrícula: 11032110477</Text>
        <Switch
          value = {visivel}
          onValueChange = {() => {setVisivel(false)}}
          trackColor = {visivel ? 'blue' : 'orange'}
          thumbColor = {visivel ? 'blue' : 'orange'}
          style={Estilos.switch}
        />
      </View>
    </Modal>


    <Switch
      value = {visivel}
      onValueChange = {() => {setVisivel(true)}}
      trackColor = {visivel ? 'blue' : 'orange'}
      thumbColor = {visivel ? 'blue' : 'orange'}
      style={Estilos.switch}
    />
  </View>
  );
}
