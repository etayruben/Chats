import "../styles/chats-app.css";

function ChatsApp() {
  return (
    <div className="app">
      <div className="header">
        <b>Welcome to Chats!</b>
      </div>
      <div className="container">
        <div className="chat">
          <div className="message-area">
            <div style={{ height: "120% " }}></div>
          </div>
          <div className="input-field-div">
            <input dir="auto"></input>
          </div>
        </div>
        <div className="contacts">
          <div style={{ height: "120%" }}></div>
        </div>
      </div>
    </div>
  );
}

export default ChatsApp;
