import "../styles/chat-box.css";
import Algorithms from "../utils/algorithms";

function MessagesArea({ messages, fullName }) {
  return (
    <div className="message-area">
      {messages.map((message) => (
        <div
          className={
            fullName !== message.fullName ? "message" : "my-message message "
          }
        >
          <div id="fullName">
            {message.fullName.charAt(0).toUpperCase() +
              message.fullName.slice(1)}
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
