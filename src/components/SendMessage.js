import React, { useState } from "react";
import { db, auth } from "../firebase";
import firebase from "firebase/compat/app";
import { Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const SendMessage = () => {
  const [message, setMessage] = useState("");

  const sendMessageHandler = (event) => {
    event.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    db.collection("messages").add({
      text: message,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setMessage("");
  };

  return (
    <form onSubmit={sendMessageHandler}>
      <div className="sendMsg">
        <Input
          style={{
            width: "78%",
            fontSize: "18px",
            fontWeight: "550",
            marginLeft: "5px",
            marginBottom: "-3px",
          }}
          placeholder="please type any message here!"
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          value={message}
        />
        <SendIcon style={{ color: "#7AC2FF", marginLeft: "20px" }} />
      </div>
    </form>
  );
};

export default SendMessage;
