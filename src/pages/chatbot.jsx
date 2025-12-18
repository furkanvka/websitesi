import React, { useState } from "react";
import Layout from "@theme/Layout";

export default function ChatbotPage() {
  const [messages, setMessages] = useState(["Hoş geldin!"]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages([...messages, "Kullanıcı: " + input, "Bot: Bu bir demo cevaptır."]);
    setInput("");
  };

  return (
    <Layout title="Chatbot">
      <div style={{ padding: "2rem", maxWidth: 600, margin: "auto" }}>
        <h1>Chatbot Demo</h1>

        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: 8,
            padding: 16,
            height: 300,
            overflowY: "auto",
            marginBottom: 16,
          }}
        >
          {messages.map((m, i) => (
            <div key={i} style={{ marginBottom: 8 }}>{m}</div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{
              flex: 1,
              padding: 10,
              borderRadius: 6,
              border: "1px solid #aaa",
            }}
            placeholder="Mesaj yaz..."
          />
          <button
            onClick={sendMessage}
            style={{
              padding: "10px 20px",
              borderRadius: 6,
              border: "none",
              background: "#3b82f6",
              color: "white",
              cursor: "pointer",
            }}
          >
            Gönder
          </button>
        </div>
      </div>
    </Layout>
  );
}
