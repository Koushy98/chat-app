import React, { useEffect, useState } from "react";
import SignOut from "./SignOut";
import { db } from "../firebase";

const Chat = (props) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    //fetch messages from firestore
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div>
      {console.log(messages)}
      <p>This is Chat page</p>
      <SignOut />
      <div className="msgs">
        {messages.map(({ id, text, photoURL, uid }) => (
          <div>
            <div key={id}>
              <img src={photoURL} alt="icon" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
