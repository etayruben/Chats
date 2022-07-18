import MessagesArea from "./messagesArea";
import TextArea from "./textArea";

function Chat({ socket, messages, setMessages, fullName, room }) {
  socket.onmessage = function (event) {
    setMessages(messages.concat(JSON.parse(event.data)));
  };

  socket.onclose = function (event) {
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

  socket.onerror = function (error) {
    console.error(`[error] ${error.message}`);
  };

  const handleKeyClick = (e) => {
    if ((e.key === "Enter") & !e.shiftKey) {
      let date = new Date();
      socket.send(
        JSON.stringify({
          fullName: fullName,
          message: e.target.value,
          timestamp: +date,
          room: room,
          action: "message",
          msg_hash: (+date + Math.random() * 100).toString(32),
        })
      );
      e.target.value = null;
    }
  };

  return (
    <div className="chat">
      <MessagesArea messages={messages} fullName={fullName} />
      <TextArea handleKeyClick={handleKeyClick} />
    </div>
  );
}

export default Chat;
