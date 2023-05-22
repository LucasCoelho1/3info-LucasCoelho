import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { FlatList, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";

/**
     * Criar um TextInput que faça buscas no banco e exiba em um Flatlist
     * Lembre-se de usar a expressão "utilizando a Web Version 9 do Firebase"
     */
export default function AnimalScreen() {
    const [busca, setBusca] = useState(''); //o useState é responsavel por criar variaveis ou estados em React
    const [resultado, setResultado] = useState([]);

    async function buscaranimal() {
        const animalRef = collection(db, 'animal');
        const buscaanimal = query(animalRef, where('nome', '==', busca));
        // neste momento que a busca é realmente executada no banco de dados
        const resultadoSnapshot = await getDocs(buscaanimal);

        const listaanimals = resultadoSnapshot.docs.map(doc => doc.data());
        console.log(listaanimals);
        setResultado(listaanimals);

        //console.log(resultadoSnapshot);
    }

    useEffect(
        () => {
            buscaranimal();
        },
        [busca]
    )
    return (
        <View>
            <Text>Animal</Text>
            <TextInput 
                label="Buscar Animal"
                value={busca}
                onChangeText={setBusca}
            />
            <FlatList
                data={resultado}
                renderItem={({ item }) => (
                    <View>
                        <Text>Nome: {item.nome}</Text>
                        <Text>Raça: {item.raca}</Text>
                        <Text>Idade: {item.idade}</Text>
                    </View>
                )}
                key={(item) => item.id}
            />
        </View>
    )
}