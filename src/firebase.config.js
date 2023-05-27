import { initializeApp } from "firebase/app";


import { getAuth } from "firebase/auth"; /* Authentication */


const firebaseConfig = {
  apiKey: "AIzaSyCdnSqFpAuIFUa2X98sAX4Ef8N4_8E0IT0",
  authDomain: "ecommerse-b8058.firebaseapp.com",
  projectId: "ecommerse-b8058",
  storageBucket: "ecommerse-b8058.appspot.com",
  messagingSenderId: "315675567829",
  appId: "1:315675567829:web:a805d17df69f6010faa45c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); /* Authentication */


export default app ;