import { useState } from "react";
import ChatsApp from "./components/chatsApp";
import WelcomePage from "./components/welcome-page/welcomePage";
import { io } from "socket.io-client";

const socket = io.connect("ws://localhost:5000");

function App() {
  const [userProperties, setUserProperties] = useState({
    fullName: "Etay",
    phoneNumber: null,
    token: null,
  });

  if (userProperties.fullName)
    return <ChatsApp userProperties={userProperties} socket={socket} />;

  return <WelcomePage setUserProperties={setUserProperties} />;
}

export default App;
