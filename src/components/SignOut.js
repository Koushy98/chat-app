import React from "react";
import { Button } from "@mui/material";
import { auth } from "../firebase";
import { AccountCircleRounded } from "@mui/icons-material";

const SignOut = () => {
  return (
    <div className="header">
      <Button
        style={{ color: "white", fontsize: "15px" }}
        onClick={() => auth.signOut()}
      >
        Sign Out
      </Button>
      <h3 className="account">
        <AccountCircleRounded style={{ marginRight: "10px" }} />
        {auth.currentUser.displayName}
      </h3>
    </div>
  );
};

export default SignOut;
