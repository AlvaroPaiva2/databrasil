import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { auth } from "../../firebaseconfig";

export default function LoginCliente() {
  function handleGoogleAuthSignIn() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => console.log(result.data))
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <button onClick={handleGoogleAuthSignIn}>
        RODAR AUTENTICAÇÃO GOOGLE
      </button>
    </div>
  );
}