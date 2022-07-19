import MessagesArea from "./messagesArea";
import TextArea from "./textArea";

function Chat({ socket, messages, setMessages, userProperties, room }) {
  socket.on("message", (message) => {
    setMessages(messages.concat(message));
  });

  const handleKeyClick = (e) => {
    if ((e.key === "Enter") & !e.shiftKey) {
      let date = new Date();
      socket.send(
        JSON.stringify({
          fullName: userProperties.fullName,
          message: e.target.value,
          timestamp: +date,
          room: room,
          token: userProperties.token,
        })
      );
      e.target.value = null;
    }
  };

  return (
    <div className="chat">
      <MessagesArea messages={messages} userProperties={userProperties} />
      <TextArea handleKeyClick={handleKeyClick} />
    </div>
  );
}

export default Chat;
