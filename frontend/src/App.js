import { useState } from "react";
import ChatsApp from "./components/chatsApp";
import WelcomePage from "./components/welcomePage";

const webSocket = new WebSocket("ws://localhost:7890");

function App() {
  const [username, setUsername] = useState("");

  if (username) {
    return <ChatsApp username={username} webSocket={webSocket} />;
  }

  return <WelcomePage setUsername={setUsername} />;
}

export default App;
