import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';

export default function Toque(){

    const [contagem, setContagem] = useState(0);

    const contar = () => {
        setContagem(contagem + 1)
    }

    const reduzir = () => {
        setContagem(contagem - 1)
    }

    return(
        <View>
            <Text style = {styles.textosTH}>Diferenças entre Touchable e Pressable</Text>
            <TouchableHighlight
                style = {styles.toqueTH}
                onPress = {contar}
                underlayColor = 'blue'          
            >
                <Text>Toque aqui para aumentar a contagem</Text>
            </TouchableHighlight>

            <TouchableOpacity
                style = {styles.toqueTH}
                onPress = {reduzir}
                underlayColor = 'blue'                
            >
                <Text>Toque aqui para diminuir a contagem</Text>
            </TouchableOpacity>
            
            <Text style = {styles.textosTH}>Toques no botão {contagem}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    toqueTH:{
        alignItems: 'center',
        backgroundColor:'lightblue',
        padding: 10,
        marginBottom: 20,
    },
    textosTH:{
        fontSize: 20,
        margin: 20,
        textAlign: 'center',
    }
});
