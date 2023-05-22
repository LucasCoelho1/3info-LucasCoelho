import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { FlatList, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";

/**
     * Criar um TextInput que faça buscas no banco e exiba em um Flatlist
     * Lembre-se de usar a expressão "utilizando a Web Version 9 do Firebase"
     */
export default function corScreen() {
    const [busca, setBusca] = useState(''); //o useState é responsavel por criar variaveis ou estados em React
    const [resultado, setResultado] = useState([]);

    async function buscarcor() {
        const corRef = collection(db, 'cor');
        const buscacor = query(corRef, where('nome', '==', busca));
        // neste momento que a busca é realmente executada no banco de dados
        const resultadoSnapshot = await getDocs(buscacor);

        const listacors = resultadoSnapshot.docs.map(doc => doc.data());
        console.log(listacors);
        setResultado(listacors);

        //console.log(resultadoSnapshot);
    }

    useEffect(
        () => {
            buscarcor();
        },
        [busca]
    )
    return (
        <View>
            <Text>Cor</Text>
            <TextInput 
                label="Buscar Cor"
                value={busca}
                onChangeText={setBusca}
            />
            <FlatList
                data={resultado}
                renderItem={({ item }) => (
                    <View>
                        <Text>Nome: {item.nome}</Text>
                        <Text>Hex: {item.codHex}</Text>
                        <Text>Rgb: {item.rgb}</Text>
                    </View>
                )}
                key={(item) => item.id}
            />
        </View>
    )
}