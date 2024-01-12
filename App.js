import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CadastroCliente from "./src/components/CadastroCliente";
import LoginCliente from "./src/components/LoginCliente";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Cadastro" component={CadastroCliente} />
        <Stack.Screen name="Login" component={LoginCliente} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}