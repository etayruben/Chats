import MessagesArea from "./messagesArea";
import MessageInputField from "./messageInputField";
import { useState } from "react";

function Chat(props) {
  const [messages, setMessages] = useState([
    { username: "Etay", message: "This is the first message" },
    { username: "Nitsan", message: "This is the second message" },
  ]);

  return (
    <div className="chat">
      <MessagesArea messages={messages} username={props.username} />
      <MessageInputField />
    </div>
  );
}

export default Chat;
