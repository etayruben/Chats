import "../styles/chat-box.css";

function MessagesArea(props) {
  return (
    <div className="message-area">
      {props.messages.map((message) => (
        <div
          key={message.message}
          className={
            props.username === message.username ? "message" : "received-message"
          }
        >
          {message.message}
        </div>
      ))}
    </div>
  );
}

export default MessagesArea;
