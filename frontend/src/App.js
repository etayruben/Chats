import "./styles/App.css";
// import "./styles/input-field.css";
function App() {
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
          <div className="input-field">
            <div>Type a message</div>
          </div>
        </div>
        <div className="contacts">
          <div style={{ height: "120%" }}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
