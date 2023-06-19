import {
    StyleSheet, Text, View,
    SafeAreaView, TextInput, TouchableOpacity, FlatList
} from 'react-native';

import React, { useEffect, useState } from "react";

import axios from "axios";


export default function Genres() {
    const [id, setId] = useState("");
    const [genero, setGenre] = useState("");
    const [listaGeneros, setListaGeneros] = useState([]);


    useEffect(() => {
        async function getGeneros() {
            const response = await axios.get('http://localhost:8081/rota-genres/all');
            setListaGeneros(response.data);
        }
        getGeneros();
    }, []);


    function limpar() {
        setGenre('');
    }



    async function cadastroGenero(ev) {
        ev.preventDefault();
        await axios.post('http://localhost:8081/rota-genres/add', {
            genre: genero
        }).then((response) => {
            console.log(response);
            limpar();
            alert(" Gênero Cadastrado");
            setListaGeneros([...listaGeneros, response.data]);
        });
    }

    const renderItem = ({ item }) => (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
            <Text>{item.genre}</Text>
            <TouchableOpacity><Text>Editar</Text></TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ alignItems: "center" }}>
                <Text style={styles.text}>Gêneros</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o gênero aqui"
                    value={genero}
                    onChangeText={(texto) => setGenre(texto)}
                />
            </View>
            <View style={styles.areaBtn}>
                <TouchableOpacity
                    style={[styles.botao, { backgroundColor: "#1d75cd" }]}
                    onPress={cadastroGenero}
                >
                    <Text style={styles.botaoText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={listaGeneros}
                renderItem={renderItem}
                keyExtractor={item => item._id}
            />
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