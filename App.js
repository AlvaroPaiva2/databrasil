import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CadastrarCliente from './src/components/CadastrarCliente'
import Implementar from './src/components/Implementar'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
   <Stack.Navigator initialRouteName='CadastrarCliente'>
    <Stack.Screen name="Cadastro" component={CadastrarCliente} />
   </Stack.Navigator>
  </NavigationContainer>
  );
}