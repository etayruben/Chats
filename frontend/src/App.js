import { useState } from "react";
import ChatsApp from "./components/chatsApp";
import WelcomePage from "./components/welcome-page/welcomePage";
import { io } from "socket.io-client";

const socket = io.connect("http://localhost:5000", { method: "POST" });

socket.on("connect", () => {
  socket.send("testing");
});
function App() {
  const [fullName, setUsername] = useState("");

  if (fullName === "User Taken!")
    return fetch("userTaken.html")
      .then((response) => response.text())
      .then((text) => (document.getElementById("userTaken").innerHTML = text));
  if (fullName) return <ChatsApp fullName={fullName} socket={socket} />;

  return <WelcomePage socket={socket} setUsername={setUsername} />;
}

export default App;
