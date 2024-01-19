import React, { useState } from 'react'
import axios from 'axios'
import { View, Image, StyleSheet, Text } from "react-native-web";
import { Button, TextInput } from 'react-native-paper';
import MaskInput from 'react-native-mask-input';
import { getFirestore } from "firebase/firestore";
import { setDoc } from 'firebase/firestore';

export default function UserHomePage() {

  const [cepInput, setCepInput] = useState('');
  const [nomeInput, setNomeInput] = useState('');
  const [cepResult, setCepResult] = useState('');
  
  function cepRequest() {
    axios.get('viacep.com.br/ws/' + cepInput + '/json/')
      .then((result) => setCepResult(result.data.localidade))
      .catch((error) => console.log(error));
  }
  function createTesteData() {
    setDoc(doc(db, "teste", "FUqypj4AYwUUmZxW20Fw"), {
      nome: 'Alberto'
    })
      .then(() => {
        console.log('Dados foram enviados');
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <View>
      <Text>RESULTADO: {cepResult}</Text>
      <Text>Insira o valor do CEP</Text>
      <MaskInput
        value={cepInput}
        onChangeText={(masked, unmasked) => {
          setCepInput(unmasked)
        }}
        mask={[/\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/]}
      />
      <Button onPress={cepRequest}>Buscar</Button>
      <View>
        <MaskInput
          value={nomeInput}
          onChangeText={(masked, unmasked) => {
            setNomeInput(unmasked)
          }}
        />
        <Button onPress={createTesteData}>Enviar Dados</Button>
      </View>
    </View>
  )
}
