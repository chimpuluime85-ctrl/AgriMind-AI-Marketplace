import { useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AIAssistant() {
  const [message, setMessage] =
    useState("");

  const [reply, setReply] =
    useState("");

  const askAI = async () => {
    try {
      const response =
        await api.post(
          "/ai/chat",
          {
            message,
          }
        );

      setReply(
        response.data.reply
      );
    } catch (error) {
      console.log(error);

      alert(
        "Failed to get AI response"
      );
    }
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "80vh",
          backgroundColor: "#f5f7fa",
          padding: "40px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            background: "white",
            padding: "30px",
            borderRadius: "12px",
            boxShadow:
              "0 2px 10px rgba(0,0,0,0.08)",
          }}
        >
          <h1
            style={{
              textAlign: "center",
            }}
          >
            AgriMind AI Assistant
          </h1>

          <p
            style={{
              textAlign: "center",
              color: "#666",
              marginBottom: "30px",
            }}
          >
            Ask questions about farming,
            crops and fertilizers.
          </p>

          <input
            type="text"
            placeholder="Example: How do I grow rice?"
            value={message}
            onChange={(e) =>
              setMessage(
                e.target.value
              )
            }
            style={{
              width: "100%",
              padding: "14px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          />

          <button
            onClick={askAI}
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor:
                "#2e7d32",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Ask AI
          </button>

          {reply && (
            <div
              style={{
                marginTop: "30px",
                background:
                  "#f5f5f5",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <h3>AI Response</h3>

              <p>{reply}</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AIAssistant;