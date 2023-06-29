import React from 'react';
import { View, Text} from 'react-native';
import Toque from './components/Toque';
import Pressione from './components/Pressione';

export default function FuncaoPrincipal() {
  return (
    <View>
      <Toque/>
      <Pressione/>
    </View>
  );
}

