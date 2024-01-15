import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CadastrarCliente from "./src/components/CadastrarCliente";
import LoginCliente from "./src/components/LoginCliente";
import UserHomePage from "./src/components/UserHomePage";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Cadastro" component={CadastrarCliente} />
        <Stack.Screen name="Login" component={LoginCliente} />
        <Stack.Screen name="UserHomePage" component={UserHomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
