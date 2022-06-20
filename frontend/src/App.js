import { useState } from "react";
import "./styles/App.css";
import ChatsApp from "./components/chatsApp";
import WelcomePage from "./components/welcomePage";

function App() {
  const [username, setUsername] = useState("");

  const handleWelcomePageClick = (inputEvent) => {
    console.log(inputEvent);
    if (inputEvent.key === "Enter") setUsername(inputEvent.target.value);
  };

  return username !== "" ? (
    <div>
      <ChatsApp username={username} />
    </div>
  ) : (
    <WelcomePage handleWelcomePageClick={handleWelcomePageClick} />
  );
}

export default App;
