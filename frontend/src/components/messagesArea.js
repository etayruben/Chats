import "../styles/chat-box.css";

function MessagesArea(props) {
  return (
    <div className="message-area">
      {props.messages.map((message) => (
        <div
          className={
            props.username !== message.username
              ? "message"
              : "my-message message "
          }
        >
          {message.message}
        </div>
      ))}
    </div>
  );
}

export default MessagesArea;
