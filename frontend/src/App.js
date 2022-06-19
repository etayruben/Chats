import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <div className="header">
        <b>Welcome to Chats!</b>
      </div>
      <div className="container">
        <div className="chat">
          <div className="message-area"></div>
          <div className="input-field"></div>
        </div>
        <div className="contacts"></div>
      </div>
    </div>
  );
}

export default App;
