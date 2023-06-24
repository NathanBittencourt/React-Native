/**
1) Utilizando o projeto enviado para avaliação na última aula híbrida (sobre Modal e Switch), acrescente na tela um texto muito longo que permita rolagem na página. O aplicativo deve obedecer às seguintes regras:

1) No arquivo personalizado a ser criado para o ScrollView, acrescentar um texto muito extenso que pode ser retirado do gerador de Lorem Ipsum: https://www.lipsum.com/

Defina dentro do arquivo de CSS uma cor de fundo para este componente conforme a descrição que segue abaixo (Obs.: Em caso de ilegibilidade do texto, altere a cor da fonte para branca ao invés do preto utilizado por padrão):

e) Nathan Oliveira: Roxo;

2) Ainda no arquivo personalizado, associe um RefreshControl utilizando state para realizar o controle do deslizamento da página e defina um tempo para o mesmo conforme demonstrado na vídeo aula disponibilizada;

3) O modal e Switch que foram incluídos na última tarefa deve ser retirada para evitar “poluição visual” na renderização do aplicativo Obs.: No arquivo App.js chamar apenas o componente personalizado do ScrollView + RefreshControl; 

4) Todo estilo utilizado em qualquer componente (inclusive modal e switch) deve estar dentro do arquivo de estilo separado criado na última entrega de tarefa da última aula híbrida ; 

5) Compactar os arquivos: App.js, Componente Personalizado (1 arquivo) e o Arquivo de Estilo Personalizado formatos .rar ou .zip para enviá-lo.



 */

import React from 'react';
import { View, Text} from 'react-native';
import ScrollViewRefreshControl from './components/ScrollViewRefreshControl';

export default function FuncaoPrincipal() {
  return (
    <View>
      <ScrollViewRefreshControl/>
    </View>
  );
}