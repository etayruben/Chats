import MessagesArea from "./messagesArea";
import { useState } from "react";

function Chat(props) {
  const [messages, setMessages] = useState([
    {
      username: "Etay",
      message: "This is the first message",
    },
    {
      username: "Nitsan",
      message: "This is the second message",
    },
  ]);

  return (
    <div className="chat">
      <MessagesArea messages={messages} username={props.username} />
      <div dir="auto" className="input-wrap">
        <textarea
          dir="auto"
          placeholder="type a message here!"
          className="text-area"
        />
      </div>
    </div>
  );
}

export default Chat;
