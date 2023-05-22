import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PessoaScreen from "./screens/PessoaScreen";
import FrutaScreen from "./screens/FrutaScreen";
import AnimalScreen from "./screens/AnimalScreen";
import CorScreen from "./screens/CorScreen";
import ProdutoScreen from "./screens/ProdutoScreen";
import carroScreen from "./screens/CarroScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen}
        options={{
        headerShown: true,
        }}
        />
        <Stack.Screen
          name="PessoaScreen"
          component={PessoaScreen}
          options={{
            headerShown: true,
          }}
        />
          <Stack.Screen
          name="FrutaScreen"
          component={FrutaScreen}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="CarroScreen"
          component={carroScreen}
          options={{
            headerShown: true,
          }}
        />
          <Stack.Screen
          name="AnimalScreen"
          component={AnimalScreen}
          options={{
            headerShown: true,
          }}
        />
          <Stack.Screen
          name="CorScreen"
          component={CorScreen}
          options={{
            headerShown: true,
          }}
        />
          <Stack.Screen
          name="ProdutoScreen"
          component={ProdutoScreen}
          options={{
            headerShown: true,
          }}
        />
          </Stack.Navigator>
    </NavigationContainer>
  );
}