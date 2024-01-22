import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native-web";
import { Button } from "react-native-paper";
import MaskInput from "react-native-mask-input";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebaseconfig";

export default function CadEmployer() {

  const [input, setInput] = useState({
    nameInput: "",
    cepInput: "",
  });

  const handleInput = (name, value) => {
    setInput({
      ...input,
      [name]: value,
    });
  };

  async function adicionarRegistro() {
    const docRef = await addDoc(collection(db, "funcionarios"), {
      nome: input.nameInput,
      cep: input.cepInput,
    });
    console.log("Documento escrito com ID: ", docRef.id);
  }

  return (
    <View style={styles.mainView}>
      <View style={styles.mainContainerTitle}>
        <Text style={styles.titulo}>Cadastro</Text>
      </View>
      <MaskInput
        style={styles.nameInput}
        value={input.nameInput}
        onChangeText={(value) => {
          handleInput("nameInput", value);
        }}
      />
      <MaskInput
        style={styles.cepInput}
        value={input.cepInput}
        onChangeText={(value) => {
          handleInput("cepInput", value);
        }}
        mask={[/\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/]}
      />
      <Button
        style={styles.botao}
        mode="contained"
        onPress={adicionarRegistro}
        labelStyle={styles.textoBotao}
      >
        Adicionar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    height: 500,
    textAlign: "center",
  },
  titulo: {
    textAlign: "center",
    fontFamily: "arial",
    color: "#353839",
    fontSize: "2rem",
    marginTop: "1rem",
    marginBottom: "0.5rem",
    fontWeight: "bold",
  },
  botao: {
    margin: "auto",
    marginBottom: "0rem",
    fontSize: "5rem",
    width: "50%",
    marginTop: "1rem",
    backgroundColor: "#007BFF",
  },
  mainContainerTitle: {
    height: 80,
    backgroundColor: "#EBEBEB",
  },
  cepInput: {
    textAlign: "center",
    borderStyle: "solid",
    borderWidth: "1px",
    marginLeft: "10%",
    marginRight: "10%",
  },
  nameInput: {
    backgroundColor: "#F5F5F5",
    textAlign: "center",
    borderStyle: "solid",
    borderWidth: "1px",
    marginBottom: "2px",
    width: "80%",
    marginLeft: "10%",
    marginRight: "10%",
  },
});
