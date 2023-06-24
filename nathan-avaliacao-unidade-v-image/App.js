/**
 *Crie um projeto em React Native com as seguintes especificações:

1) O arquivo App.js, deve ter componente funcional principal (default) 
contendo uma View e um Texto mostrando as seguintes informações: 
Seu Nome e sua matrícula. Além disso, devem ser importados e 
utilizados os dois componentes a serem criados conforme instruções a seguir;

2) Devem ser criados dois arquivos separados com componentes de texto - 
nos mesmos moldes do arquivo App.js e do exemplo apresentado na aula - 
seguindo as especificações abaixo:

e) Nathan Oliveira: Componente 1) Gestão de Projetos na cor roxa e 2) Matemática na cor verde;

3) Crie um arquivo CSS com todos os elementos e características utilizados no projeto

(Obs.: Não quero nenhum CSS nos arquivos App.js ou dos componentes Personalizados 
(também não será aceita formatação in-line), sujeito a desconto de nota);

4) Realize a importação e aplicação do CSS criado diretamente no arquivo 
dos componentes personalizados; depois faça apenas referência e uso 
dos mesmos (componentes personalizados criados) no arquivo principal (App.js);

5) Compactar todo o projeto em um arquivo .rar ou .zip para enviá-lo.

Obs.: Sobre as cores, defini-las através da propriedade na criação 
do componente e podendo utilizar qualquer tom da mesma.
 */

import React from 'react';
import GestaoProjetos from './components/GestaoProjetos';
import Matematica from './components/Matematica';
import ImagemAtv6 from './components/ImagemAtv6';
import { View, Text} from 'react-native';
import Estilos from "./styles/styles.js";


export default function FuncaoPrincipal() {
  return (
    <View>
      <Text style={Estilos.textoPrincipal}>Nome: Nathan, Matrícula: 11032110477</Text>
      <GestaoProjetos />
      <Matematica />
      <ImagemAtv6 />
    </View>
  );
}

