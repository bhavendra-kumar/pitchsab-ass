import { useState, useEffect, useRef } from "react";
import axios from "axios";

function ChatBox() {

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const bottomRef = useRef(null);

  const apiBaseUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    let cancelled = false;

    const fetchMessages = async () => {
      try {
        const res = await axios.get(`${apiBaseUrl}/api/chat/messages`);
        if (!cancelled) {
          setMessages(res.data);
        }
      } catch (error) {
        if (!cancelled) {
          console.error(error);
        }
      }
    };

    fetchMessages();

    return () => {
      cancelled = true;
    };
  }, [apiBaseUrl]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const getBotReply = (text) => {

    const msg = text.toLowerCase();

    if (msg.includes("hi") || msg.includes("hello")) {
      return "Hello 👋 I'm your ideation assistant. Tell me about your startup idea!";
    }

    if (msg.includes("idea")) {
      return "Great! What problem does your idea solve?";
    }

    if (msg.includes("problem")) {
      return "Good founders focus on real problems. Who faces this problem?";
    }

    if (msg.includes("market")) {
      return "Interesting. Have you validated demand for this solution?";
    }

    return "That's interesting! Can you explain more about your idea?";
  };

  const sendMessage = async () => {

    if (!input.trim()) return;

    const userMessage = {
      user: "Ideator",
      text: input
    };

    try {

      await axios.post(`${apiBaseUrl}/api/chat/send`, userMessage);

      setMessages((prev) => [...prev, userMessage]);

      setInput("");

      const reply = getBotReply(input);

      setTyping(true);

      setTimeout(async () => {

        const botMessage = {
          user: "Assistant",
          text: reply
        };

        await axios.post(`${apiBaseUrl}/api/chat/send`, botMessage);

        setMessages((prev) => [...prev, botMessage]);

        setTyping(false);

      }, 1200);

    } catch (error) {
      console.error(error);
    }
  };

  return (

    <div className="bg-white/5 border border-gray-800 rounded-xl p-6 w-full max-w-xl backdrop-blur-lg shadow-lg">

      <h2 className="text-xl font-semibold mb-4 text-white">
        Ideator Assistant
      </h2>

      <div className="h-72 overflow-y-auto space-y-3 mb-4 pr-2">

        {messages.map((msg, index) => (

          <div
            key={index}
            className={`p-3 rounded-lg max-w-[70%] text-sm ${
              msg.user === "Ideator"
                ? "bg-blue-500/20 ml-auto text-white"
                : "bg-purple-500/20 text-white"
            }`}
          >
            {msg.text}
          </div>

        ))}

        {typing && (
          <div className="bg-purple-500/20 text-white p-3 rounded-lg w-fit flex gap-1">

            <span className="animate-bounce">.</span>
            <span className="animate-bounce delay-100">.</span>
            <span className="animate-bounce delay-200">.</span>

          </div>
        )}

        <div ref={bottomRef}></div>

      </div>

      <div className="flex gap-2">

        <input
          className="flex-1 bg-[#1E293B] border border-gray-700 rounded-lg p-2 text-sm outline-none focus:border-blue-500 text-white"
          placeholder="Describe your startup idea..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={sendMessage}
          className="bg-gradient-to-r from-blue-500 to-purple-500 px-5 rounded-lg text-white hover:opacity-90"
        >
          Send
        </button>

      </div>

    </div>
  );
}

export default ChatBox;