/**
Utilize o projeto enviado na última aula híbrida (24/03/2022) e acrescente um modal obedecendo às seguintes regras:

1) O modal deverá conter as seguintes informações: Nome do Aluno e Número da Matrícula do Aluno e deverá ser criado em um dos arquivos de componente personalizados (o projeto possui 2 arquivos desse tipo).

Obs.: Anteriormente, estas informações estavam diretamente no App.js e devem ser retiradas de lá e exibidas apenas quando modal estiver ativo);

2) Faça o controle da abertura e fechamento do modal pelo componente Switch utilizando State para essa finalidade. Sendo que a cor do track e thumb quando ligado deve ser azul e quando ambos estiverem desligados deve constar com a cor laranja;

3) Todo estilo utilizado em qualquer componente (inclusive modal e switch) deve estar dentro do arquivo de estilo separado criado na última entrega de tarefa da última aula híbrida (entregue em 01/04/2022) ;

4) Compactar os arquivos: App.js, Componentes Personalizados (2 arquivos) e o Arquivo de Estilo Personalizado formatos .rar ou .zip para enviá-lo.

 */

import React from 'react';
import { View, Text} from 'react-native';
import ModalSwitch from './components/ModalSwitch';
import ListaPlana from './components/ListaPlana';
import Estilos from './styles/styles'

export default function FuncaoPrincipal() {
  return (
    <View>
      <Text style={Estilos.nome}>Deseja visualizar o Modal?</Text>
      <ModalSwitch/>
      <ListaPlana />
    </View>
  );
}