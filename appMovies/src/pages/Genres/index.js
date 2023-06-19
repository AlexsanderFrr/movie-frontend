import {
    StyleSheet, Text, View,
    SafeAreaView, TextInput, TouchableOpacity
} from 'react-native';
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Genres() {
    const [id_genre, setId_genre] = useState("");
    const [genre, setGenre] = useState("");
    function limpar() {
        setGenre('');
    }
    async function cadastroGenero(ev) {
        ev.preventDefault();
        await axios.post('http://localhost:8081/rota-genres/add', {
            genre: genre
        })
            .then((response) => {
                console.log(response);
                limpar();
                alert("Cadastrado");
            });
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ alignItems: "center" }}>
                <Text style={styles.text}>Gênero</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite gênero aqui"
                    value={genre}
                    onChangeText={(texto) => setGenero(texto)}
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