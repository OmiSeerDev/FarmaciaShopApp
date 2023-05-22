import React from "react";
import styled from "styled-components";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAMZI5PlDrZtXPRZ41ztfDEL-gl8Iw0zqU",
  authDomain: "sitiowebdswtl.firebaseapp.com",
  projectId: "sitiowebdswtl",
  storageBucket: "sitiowebdswtl.appspot.com",
  messagingSenderId: "338864086633",
  appId: "1:338864086633:web:85cb9ceba0ab7d2dcb8cf8",
  measurementId: "G-LK25R8L46P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
const Right = styled.div`
  display: flex;
  justify-content: end;
`;

const Container = styled.div<{
  display: string;
}>`
  position: absolute;
  display: ${({ display }) => display};
  grid-template-columns: 20% 50% 30%;
  align-items: center;
  justify-content: space-evenly;
  width: 400px;
  height: 200px;
  background: linear-gradient(100deg, rgb(48, 70, 189), rgba(3, 3, 3, 0.2));
  border-radius: 8px;
  color: #000000;
`;
const Form = styled.form`
  display: inherit;
  font-weight: bold;
`;
const LoginInput = styled.input<{
  width: string;
}>`
  margin: 10px 0;
  width: ${({ width }) => width};
`;

const XButton = styled.button`
  position: relative;
  height: 30px;
  width: 30px;
  background-color: black;
  color: #ffadad;
  left: 333px;
  bottom: 75px;
  border-radius: 30px;
`;

const Login = (): JSX.Element => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Sign-out successful.
        })
        .catch((error) => {
          // An error happened.
        });
    });
  return <></>;
};

export default Login;
