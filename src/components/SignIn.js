import React from "react";
import { Button } from "@mui/material";
import firebase from "firebase/compat/app";
import { auth } from "../firebase";

const SignIn = (props) => {
  const signInHandler = () => {
    //sign in with Google account
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div>
      <Button onClick={signInHandler}>Login with Google</Button>
    </div>
  );
};

export default SignIn;
