import "../styles/chat-box.css";
import Algorithms from "../utils/algorithms";

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
          <div id="username">
            {message.username.charAt(0).toUpperCase() +
              message.username.slice(1)}
          </div>
          <p>{message.message}</p>
          <div id="timestamp">
            {Algorithms.prettyDate(new Date(message.timestamp))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MessagesArea;
