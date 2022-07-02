import { useState } from "react";
import ChatsApp from "./components/chatsApp";
import WelcomePage from "./components/welcomePage";

const webSocket = new WebSocket("ws://localhost:7890");

function App() {
  const [username, setUsername] = useState("");

  const handleWelcomePageClick = (inputEvent) => {
    if (inputEvent.key === "Enter") setUsername(inputEvent.target.value);
  };

  return username !== "" ? (
    <div>
      <ChatsApp webSocket={webSocket} username={username} />
    </div>
  ) : (
    <WelcomePage handleWelcomePageClick={handleWelcomePageClick} />
  );
}

export default App;
