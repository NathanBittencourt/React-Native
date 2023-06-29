/**
Crie um projeto para exibir uma Lista Plana de acordo com as regras abaixo estabelecidas:
1) No topo da tela exiba em forma de texto: 
Nome do Aluno e Número da Matrícula do Aluno 
(vindo de um componente criado em outro arquivo e importado no App.js para ser exibido em tela);

Obs.: Anteriormente, estas informações estavam diretamente no App.js 
e devem ser retiradas de lá e exibidas apenas quando modal estiver ativo);

2) Exiba uma lista plana com 3 campos (id, nome, ano) a partir dessas orientações:

Nathan: Lista com suas músicas favoritas na cor laranja;

5) Compactar apenas os arquivos: 
App.js, Componentes Personalizados (2 arquivos - Lista Plana e Textos com Nome e Matrícula) 
e o Arquivo de Estilo Personalizado formatos .rar ou .zip para enviá-los.
 */

import React from 'react';
import { View, Text} from 'react-native';
import Texto from './components/Texto';
import ListaPlana from './components/ListaPlana';

export default function FuncaoPrincipal() {
  return (
    <View>
      <Texto /> 
      <ListaPlana />
    </View>
  );
}