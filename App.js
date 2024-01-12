import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CadastrarCliente from "./src/components/CadastrarCliente";
import LoginCliente from "./src/components/LoginCliente";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Cadastro" component={CadastrarCliente} />
        <Stack.Screen name="Login" component={LoginCliente} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
