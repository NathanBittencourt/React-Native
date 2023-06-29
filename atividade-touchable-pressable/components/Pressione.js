import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

export default function Pressione(){
    const [contagem, setContagem] = useState(0);
    const [contagemLonga, setContagemLonga] = useState(0);

    const contar = () => {
        setContagem(contagem + 1);
    }

    const reduzir = () => {
        setContagem(contagem - 1);
    }

    const contarLonga = () => {
        setContagemLonga(contagemLonga + 1);
    }

    const reduzirLonga = () => {
        setContagemLonga(contagemLonga - 1);
    }

    return(
        <View>
            <Text style = {styles.textP}>Diferenças entre Touchable e Pressable</Text>
            <Pressable
                style = {styles.pressableP}
                onPress = {contar}
                onLongPress = {contarLonga}
            >
                <Text>Pressione aqui para aumentar a contagem </Text>
            </Pressable>

            <Pressable
                style = {styles.pressableP}
                onPress = {reduzir}
                onLongPress = {reduzirLonga}
            >
                <Text>Pressione aqui para reduzir a contagem </Text>
            </Pressable>

            <Text style = {styles.textP}>Pressões rápidas no botão: {contagem}</Text>
            <Text style = {styles.textP}>Pressões longas no botão: {contagemLonga}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    pressableP:{
        backgroundColor: '#add8e6',
        alignItems: 'center',
        padding: 10,
        marginBottom: 20,
    },
    textP:{
        fontSize: 20,
        margin: 20,
        textAlign: 'center',
    },
})