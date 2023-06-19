import {
    StyleSheet, Text, View,
    SafeAreaView, TextInput, TouchableOpacity
} from 'react-native';

import DatePicker from 'react-native-datepicker'

import React, { useEffect, useState } from "react";

import axios from "axios";

export default function Movies() {

    const [id, setId] = useState("");
    const [titulo, setTitulo] = useState("");
    const [imagem, setImagem] = useState("");
    const [sinopse, setSinopse] = useState("");
    const [data_lancamento, setDataLancamento] = useState('');

    function limpar() {
        setTitulo('');
        setImagem('');
        setSinopse('');
        setDataLancamento('');
    }

    async function cadastroFilme(ev) {
        ev.preventDefault();
        await axios.post('http://localhost:8081/rota-movies/add', {
            titulo: titulo,
            imagem: imagem,
            sinopse: sinopse,
            data_lancamento: data_lancamento
        }).then((response) => {
            console.log(response);
            limpar();
            alert(" Filme Cadastrado");
        });
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ alignItems: "center" }}>
                <Text style={styles.text}>Título do Filme: </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o título aqui"
                    value={titulo}
                    onChangeText={(texto) => setTitulo(texto)}
                />

            </View>

            <View style={{ alignItems: "center" }}>
                <Text style={styles.text}>Imagem do Filme: </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Caminho da Imagem vai aqui"
                    value={imagem}
                    onChangeText={(texto) => setImagem(texto)}
                />
            </View>

            <View style={{ alignItems: "center" }}>
                <Text style={styles.text}>Sinopse: </Text>
                <TextInput
                    style={[styles.input, { height: 100, textAlignVertical: 'top' }]}
                    placeholder="Sinopse vai aqui"
                    value={sinopse}
                    onChangeText={(texto) => setSinopse(texto)}
                    multiline={true}
                    numberOfLines={4}
                />
            </View>

            <View style={{ alignItems: "center" }}>
                <Text style={styles.text}>Data de Lançamento do Filme: </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite a data aqui"
                    value={data_lancamento}
                    onChangeText={(texto) => setDataLancamento(texto)}
                />
            </View>
            


            <View style={styles.areaBtn}>
                <TouchableOpacity
                    style={[styles.botao, { backgroundColor: "#1d75cd" }]}
                    onPress={cadastroFilme}
                >
                    <Text style={styles.botaoText}>Cadastrar Filme</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

//css
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        marginTop: 25,
        marginBottom: 15,
        fontSize: 25,
        fontWeight: "bold",
    },
    input: {
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 5,
        width: "90%",
        padding: 10,
        fontSize: 18,
    },
    areaBtn: {
        alignItems: "center",
        flexDirection: "row",
        marginTop: 15,
        justifyContent: "space-around",
    },
    botao: {
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        borderRadius: 5,
    },
    botaoText: {
        fontSize: 22,
        color: "#FFF",
    },
});
