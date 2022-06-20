import "../styles/chats-app.css";
import Chat from "./chat";
import Contacts from "./contacts";

function ChatsApp(props) {
  return (
    <div className="app">
      <div className="header">
        <b>Welcome to Chats!</b>
      </div>
      <div className="chat-container">
        <Chat username={props.username} />
        <Contacts />
      </div>
    </div>
  );
}

export default ChatsApp;
