import Imagem from "../assets/imgNathanOliveira.png"
import { View, Image } from 'react-native';
import Estilos from "../styles/styles.js";

export default function FuncaoImagem() {
  return (
    <View>
      <Image
          source = {Imagem}
          style = {Estilos.imagemAtividadeVI}
      />
    </View>
  );
}