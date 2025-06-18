import { useState } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([
    { sender: "user", text: "Hi" },
    { sender: "ai", text: "Hi there! How can I help you today?" },
    { sender: "user", text: "how are you?" },
    {
      sender: "ai",
      text: "I'm doing great, thanks for asking! I'm ready to assist you. What can I do for you today?",
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input) return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
  };

  return (
    <div className="chatBoat-wrapper">
      <div className="container">
        <div className="header">
          <h3>Chat boat</h3>
        </div>

        <div className="chatbox">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`message ${msg.sender === "ai" ? "ai" : "user"}`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="inputArea">
          <input
            type="text"
            placeholder="Ask Gemini"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage}>➤</button>
        </div>
      </div>
    </div>
  );
}

export default App;
