import { useState, useEffect } from "react";
import axios from "axios";

function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  const fetchMessages = async () => {
    const res = await axios.get("http://localhost:5000/api/chat/messages");
    setMessages(res.data);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const sendMessage = async () => {
    if (!text) return;

    await axios.post("http://localhost:5000/api/chat/send", {
      user: "Ideator",
      text
    });

    setText("");
    fetchMessages();
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">

      <h2 className="text-xl font-bold mb-4">Chat</h2>

      <div className="h-64 overflow-y-auto border p-3 mb-4 rounded">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            <span className="font-semibold">{msg.user}:</span>{" "}
            {msg.text}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          className="border p-2 flex-1 rounded"
          placeholder="Type message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 rounded"
        >
          Send
        </button>
      </div>

    </div>
  );
}

export default ChatBox;