import MessagesArea from "./messagesArea";
import TextArea from "./textArea";

function Chat(props) {
  props.webSocket.onmessage = function (event) {
    props.setMessages(props.messages.concat(JSON.parse(event.data)));
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

  const handleKeyClick = (e) => {
    if ((e.key === "Enter") & !e.shiftKey) {
      let date = new Date();
      props.webSocket.send(
        JSON.stringify({
          username: props.username,
          message: e.target.value,
          timestamp: +date,
          room: props.room,
          msg_hash: (+date + Math.random() * 100).toString(32),
        })
      );
      e.target.value = null;
    }
  };

  return (
    <div className="chat">
      <MessagesArea messages={props.messages} username={props.username} />
      <TextArea handleKeyClick={handleKeyClick} />
    </div>
  );
}

export default Chat;
