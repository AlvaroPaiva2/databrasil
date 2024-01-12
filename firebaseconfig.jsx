import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCGe221upWmO8pLa5ZEXe0jQq9Uz7mgRzQ",
  authDomain: "rn-auth-fd2ac.firebaseapp.com",
  projectId: "rn-auth-fd2ac",
  storageBucket: "rn-auth-fd2ac.appspot.com",
  messagingSenderId: "142333881141",
  appId: "1:142333881141:web:1d88f64d9fd0c00e66fa7c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);