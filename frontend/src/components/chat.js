import MessagesArea from "./messagesArea";
import TextArea from "./textArea";
import { useState } from "react";

function Chat(props) {
  props.webSocket.onmessage = function (event) {
    setMessages(messages.concat(JSON.parse(event.data)));
  };

  props.webSocket.onclose = function (event) {
    if (event.wasClean) {
      console.log(
        `[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`
      );
    } else {
      // e.g. server process killed or network down
      // event.code is usually 1006 in this case
      console.warn("[close] Connection died");
    }
  };

  props.webSocket.onerror = function (error) {
    console.error(`[error] ${error.message}`);
  };

  const handleClick = (e) => {
    if (e.key === "Enter") {
      props.webSocket.send(
        JSON.stringify({ username: props.username, message: e.target.value })
      );
      e.target.value = null;
    }
  };

  const [messages, setMessages] = useState([]);

  return (
    <div className="chat">
      <MessagesArea messages={messages} username={props.username} />
      <TextArea handleClick={handleClick} />
    </div>
  );
}

export default Chat;
