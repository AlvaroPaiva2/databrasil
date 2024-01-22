import React, { useState } from "react";
import axios from "axios";
import { Button, Text } from "react-native-paper";
import { View, StyleSheet } from "react-native-web";
import MaskInput from "react-native-mask-input";

export default function CepFinder({ navigation }) {
  const [cepValueFromApi, setCepValueFromApi] = useState("");
  const [input, setInput] = useState({
    cepInput: "",
  });

  const getCepFromApi = () => {
    axios
      .get("https://viacep.com.br/ws/" + input.cepInput + "/json/", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then((result) => setCepValueFromApi(result.data.localidade))
      .catch((error) => console.log(error));
  };

  const handleInput = (name, value) => {
    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.cepViewContainer}>
        <Text style={styles.cepContainerTitle}>Encontrar dados sobre CEP</Text>
        <MaskInput
          style={styles.nameInput}
          value={input.cepInput}
          onChangeText={(value) => {
            handleInput("cepInput", value);
          }}
          mask={[/\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/]}
        />
        <Button
          textColor={"#2196F3"}
          style={styles.cepButton}
          labelStyle={{ fontWeight: 600 }}
          onPress={getCepFromApi}
        >
          Buscar
        </Button>
        <Text style={styles.cepResultText}>{cepValueFromApi}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    heigth: "100%",
  },
  nameInput: {
    backgroundColor: "",
    textAlign: "center",
  },
  cepViewContainer: {
    backgroundColor: "#EBEBEB",
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
    borderStyle: "solid",
    borderWidth: "1px",
    textAlign: "center",
  },
  cepResultText: {
    textAlign: "center",
    fontFamily: "arial",
    color: "#353839",
    fontSize: "2rem",
    marginTop: "1rem",
    marginBottom: "0.5rem",
    fontWeight: "bold",
  },
  cepButton: {
    textAlign: "center",
    fontFamily: "arial",
    color: "#353839",
    fontSize: "2rem",
    marginTop: "1rem",
    marginBottom: "0.5rem",
    fontWeight: "bold",
  },
  cepContainerTitle: {
    textAlign: "center",
    fontFamily: "arial",
    color: "#353839",
    fontSize: "2rem",
    marginTop: "1rem",
    marginBottom: "0.5rem",
    fontWeight: "bold",
  },
});