import React from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider} from "firebase";
import firebaseConfig from './firebase.config';

const Login = () => {
    initializeApp(firebaseConfig);
    const handleLoginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(user);
        })
        .catch((error) => {
           console.log(error);
        });
    }
    return (
        <div>
            <h1>This is Login</h1>
            <button onClick={handleLoginWithGoogle}>Log In With Google</button>
        </div>
    );
};

export default Login;