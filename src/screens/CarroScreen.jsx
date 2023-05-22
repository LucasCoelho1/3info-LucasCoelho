import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { FlatList, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";

/**
     * Criar um TextInput que faça buscas no banco e exiba em um Flatlist
     * Lembre-se de usar a expressão "utilizando a Web Version 9 do Firebase"
     */
export default function carroScreen() {
    const [busca, setBusca] = useState(''); //o useState é responsavel por criar variaveis ou estados em React
    const [resultado, setResultado] = useState([]);

    async function buscarcarro() {
        const carroRef = collection(db, 'carro');
        const buscacarro = query(carroRef, where('modelo', '==', busca));
        // neste momento que a busca é realmente executada no banco de dados
        const resultadoSnapshot = await getDocs(buscacarro);

        const listacarros = resultadoSnapshot.docs.map(doc => doc.data());
        console.log(listacarros);
        setResultado(listacarros);

        //console.log(resultadoSnapshot);
    }

    useEffect(
        () => {
            buscarcarro();
        },
        [busca]
    )
    return (
        <View>
            <Text>Carro</Text>
            <TextInput 
                label="Buscar Carro"
                value={busca}
                onChangeText={setBusca}
            />
            <FlatList
                data={resultado}
                renderItem={({ item }) => (
                    <View>
                        <Text>Nome: {item.modelo}</Text>
                        <Text>Preço: {item.marca}</Text>
                        <Text>Quantidade: {item.preco}</Text>
                    </View>
                )}
                key={(item) => item.id}
            />
        </View>
    )
}