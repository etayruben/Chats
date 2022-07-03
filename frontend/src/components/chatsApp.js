import { useState } from "react";
import "../styles/chats-app.css";
import Chat from "./chat";
import Contacts from "./contacts";

function ChatsApp({ username, webSocket }) {
  const [room, setRoom] = useState(1);
  const [messages, setMessages] = useState([]);

  const handleContactClick = (e, roomID) => {
    console.log(e, roomID);
  };

  return (
    <div className="app">
      <div className="header">
        <b>Welcome to Chats!</b>
      </div>
      <div className="chat-container">
        <Chat
          messages={messages}
          setMessages={setMessages}
          webSocket={webSocket}
          room={room}
          username={username}
        />
        <Contacts handleContactClick={handleContactClick} setRoom={setRoom} />
      </div>
    </div>
  );
}

export default ChatsApp;
