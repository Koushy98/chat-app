import React from "react";
import { Button } from "@mui/material";
import { auth } from "../firebase";

const SignOut = () => {
  return <Button onClick={() => auth.signOut()}>Sign Out</Button>;
};

export default SignOut;
