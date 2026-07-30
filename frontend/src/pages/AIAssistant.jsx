import { useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./AIAssistant.css";

function AIAssistant() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!message.trim()) return;

    setLoading(true);

    try {
      const response = await api.post("/ai/chat", {
        message,
      });

      setReply(response.data.reply);
    } catch (error) {
      console.log(error);
      alert("Failed to get AI response");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="ai-page">

        <div className="ai-container">

          <div className="ai-header">
            <h1>🤖 AgriMind AI Assistant</h1>

            <p>
              Ask questions about crops, fertilizers, pests, irrigation, and modern farming techniques.
            </p>
          </div>

          <div className="ai-chat">

            {message && (
              <div className="user-message">
                {message}
              </div>
            )}

            {loading && (
              <div className="ai-message">
                🤖 Thinking...
              </div>
            )}

            {reply && !loading && (
              <div className="ai-message">
                {reply}
              </div>
            )}

          </div>

          <div className="ai-input">

            <textarea
              placeholder="Example: How do I grow rice during the rainy season?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button
              onClick={askAI}
              disabled={loading}
            >
              {loading ? "Sending..." : "Ask AI"}
            </button>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default AIAssistant;