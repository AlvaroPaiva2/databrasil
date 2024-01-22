import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { Button } from "react-native-paper";
import { View, Image, StyleSheet, Text } from "react-native-web";
import { auth } from "../../firebaseconfig";
import { ImageList } from "../../assets/imageList";

export default function LoginCliente({ navigation }) {
  function handleGoogleAuthSignIn() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => navigation.navigate('UserHomePage'))
      .catch((error) => console.log(error));
  }

  return (
<View style={styles.background}>
    <Image style={styles.homeMainImage} source={ImageList.loginImage} ></Image>
    <Text style={styles.mainText}>DataBrasil</Text>
    <Text style={styles.mainParagraph}>Dados ao seu alcance aqui na maior plataforma do brasil.</Text>
    <View style={styles.buttonContainer}>
      <Button onPress={handleGoogleAuthSignIn} textColor={'#FFFF'} labelStyle={{fontWeight: 600 }} style={styles.loginButton}>
        Logar
      </Button>
      <Button onPress={handleGoogleAuthSignIn} textColor={'#008BFF'} labelStyle={{fontWeight: 600 }} style={styles.signInButton}>
        Cadastrar-se
      </Button>
      <Text style={styles.socialLoginText}>Faça login utilizando</Text>
      <View style={styles.socialIconsContainer}>
        <Button onPress={handleGoogleAuthSignIn} textColor={'#ffbf65'} size={100} style={styles.socialButton} icon="google"></Button>
        <Button textColor={'#1E2F97'} style={styles.socialButton} icon="linkedin"></Button>
        <Button textColor={'#1E2F97'} style={styles.socialButton} icon="facebook"></Button>
      </View>
    </View>
</View>
  );
}

const styles = StyleSheet.create({
  mainText: {
      textAlign: 'center',
      fontFamily: 'arial',
      color: '#353839',
      fontSize: '2rem',
      marginTop: '1rem',
      marginBottom: '0.5rem',
      fontWeight: 'bold'
  },
  homeMainImage: {
      marginTop: '4rem',
      height: 300,
      width: '100%'
  },
  mainParagraph: {
    color: 'grey',
    textAlign: 'center',
    marginRight: '3rem',
    marginLeft: '3rem',
  },
  background: {
    backgroundColor: '#FFFF',
    height: '100%'
  },
  loginButton: {
    margin: 'auto',
    marginBottom: '0rem',
    fontSize: '5rem',
    width: '50%',
    marginTop: '1rem',
    backgroundColor: '#007BFF',
  },
  signInButton: {
    marginBottom: '2rem',
    marginTop: '1rem',
    margin: 'auto',
    fontSize: '1rem',
    color: '#007BFF',
    width: '50%',
    backgroundColor: '#FFFFF',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#007BFF'
  },
  buttonContainer: {
    textAlign: 'center',
    height: '15rem',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    
  },
  socialLoginText: {
    textAlign: 'center',
    marginBottom: '1rem',
    color: 'grey',
  },
  socialButton: {
  }
});