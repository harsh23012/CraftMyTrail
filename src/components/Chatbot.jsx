import { useState } from "react";

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi 👋 I’m your CraftMyTrail assistant! Ask me about trips ✈️",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async (customInput) => {
    const messageToSend = customInput || input;
    if (!messageToSend) return;

    const userMessage = { role: "user", content: messageToSend };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("https://api.openai.com/v1/responses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          input: [
            {
              role: "system",
              content:
                "You are CraftMyTrail AI. Help users plan trips across India. Keep answers short and friendly.",
            },
            {
              role: "user",
              content: messageToSend,
            },
          ],
        }),
      });

      const data = await res.json();
      console.log("API RESPONSE:", data);

      const botReply = {
        role: "assistant",
        content:
          data?.output?.[0]?.content?.[0]?.text ||
          "⚠️ AI did not respond properly.",
      };

      setMessages([...updatedMessages, botReply]);
    } catch (error) {
      console.error("Chatbot error:", error);

      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content: "⚠️ Something went wrong. Please try again.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      {/* ✅ FLOATING BUTTON */}
      <div
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-[#F7941D] text-white p-4 rounded-full cursor-pointer shadow-lg hover:scale-110 transition z-50"
      >
        💬
      </div>

      {/* ✅ CHAT WINDOW */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 bg-white shadow-2xl rounded-xl p-4 border z-50">

          {/* ✅ HEADER */}
          <div className="font-semibold text-[#0A2342] mb-2">
            CraftMyTrail AI ✈️
          </div>

          {/* ✅ MESSAGES */}
          <div className="h-64 overflow-y-auto mb-3 space-y-2 pr-1">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg text-sm ${
                  msg.role === "user"
                    ? "bg-blue-100 text-right"
                    : "bg-gray-100 text-left"
                }`}
              >
                {msg.content}
              </div>
            ))}

            {/* ✅ TYPING */}
            {loading && (
              <div className="text-gray-500 text-sm animate-pulse">
                AI is typing...
              </div>
            )}
          </div>

          {/* ✅ QUICK BUTTONS */}
          <div className="flex flex-wrap gap-2 mb-2">
            <button
              onClick={() => sendMessage("Plan Goa trip")}
              className="text-xs bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
            >
              Goa Trip
            </button>

            <button
              onClick={() => sendMessage("Suggest hill stations")}
              className="text-xs bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
            >
              Hill Stations
            </button>

            <button
              onClick={() => sendMessage("Budget travel ideas")}
              className="text-xs bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
            >
              Budget Trip
            </button>
          </div>

          {/* ✅ INPUT */}
          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about trips..."
              className="flex-1 p-2 border rounded text-sm"
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />

            <button
              onClick={sendMessage}
              className="bg-[#F7941D] text-white px-3 rounded"
            >
              →
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;
