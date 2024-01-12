import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_HltEiS9G7aTHlk-SDqd3N4-MpbVe4sE",
  authDomain: "rn-auth-173f6.firebaseapp.com",
  projectId: "rn-auth-173f6",
  storageBucket: "rn-auth-173f6.appspot.com",
  messagingSenderId: "397525882361",
  appId: "1:397525882361:web:45847c6f7b4923d1759928",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);