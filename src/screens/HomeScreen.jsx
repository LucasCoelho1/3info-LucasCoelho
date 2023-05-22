import { Button, Image, StyleSheet, View } from "react-native";
import {Text } from "react-native-paper";
import styles from "../utils/stytes";

export default function HomeScreen ({ navigation }) {
    return (
        <View style={stylesHome.container}>
            <View style={stylesHome.content}>
                <Text style={stylesHome.contentTextStyle}>Pessoa</Text>
                <Button title="Informações da Pessoa" onPress={() => navigation.navigate('PessoaScreen')}/>
            </View>
            <View style={stylesHome.content}>
                <Text style={stylesHome.contentTextStyle}>Produto</Text>
                <Button title="Informações do Produto" onPress={() => navigation.navigate('ProdutoScreen')}/>
            </View>
            <View style={stylesHome.content}>
                <Text style={stylesHome.contentTextStyle}>Fruta</Text>
                <Button title="Informações da Fruta" onPress={() => navigation.navigate('FrutaScreen')}/>
            </View>
            <View style={stylesHome.content}>
                <Text style={stylesHome.contentTextStyle}>Cor</Text>
                <Button title="Informações da Cor" onPress={() => navigation.navigate('CorScreen')}/>
            </View>
            <View style={stylesHome.content}>
                <Text style={stylesHome.contentTextStyle}>Carro</Text>
                <Button title="Informações do Carro" onPress={() => navigation.navigate('CarroScreen')}/>
            </View>
            <View style={stylesHome.content}>
                <Text style={stylesHome.contentTextStyle}>Animal</Text>
                <Button title="Informações do Animal" onPress={() => navigation.navigate('AnimalScreen')}/>
            </View>
        </View>
    )
}
const stylesHome = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        padding: 20,    
        alignSelf: 'center',
    },
    contentTextStyle: {
        textAlignVertical: 'center',
        minHeight: 50,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center'
    },
  
});
