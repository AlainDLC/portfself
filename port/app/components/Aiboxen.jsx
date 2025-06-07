"use client";
import { useEffect, useRef, useState } from "react";
import { ChatbotIcon } from "./ChatbotIcon";
import { ChatForm } from "./CHatForm";
import { ChatMessage } from "./ChatMessage";
import { companyInfo } from "./companyinfo";
import { ArrowDown, AwardIcon, X } from "lucide-react";

export const Aiboxen = () => {
  const [chatHistory, setChatHistory] = useState([
    {
      hideInChat: true,
      role: "model",
      text: companyInfo,
    },
  ]);
  const [showChatBot, setShowChatbot] = useState(false);
  const chatBodyRef = useRef(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatHistory]);

  const updateHistory = (text, isError = false) => {
    setChatHistory((prev) => [
      ...prev.filter((msg) => msg.text !== "Tänker...."),
      { role: "model", text, isError },
    ]);
  };

  const generateBotResponse = async (history) => {
    const formattedHistory = history?.map(({ role, text }) => ({
      role,
      parts: [{ text }],
    }));

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: formattedHistory }),
    };

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL,
        requestOptions
      );
      const data = await response.json();

      if (!response.ok) throw new Error(data.error?.message || "Nåt gick fel");

      const apiResponseText = data.candidates[0].content.parts[0].text
        .replace(/\*\*(.*?)\*\*/g, "$1")
        .trim();

      updateHistory(apiResponseText);
    } catch (error) {
      updateHistory(error.message, true);
    }
  };

  return (
    <div className={`container ${showChatBot ? "show-chatbot" : ""}`}>
      <button
        onClick={() => setShowChatbot((prev) => !prev)}
        id="chatbot-toogler"
      >
        <span>
          <AwardIcon />
        </span>
        <span>
          <X />
        </span>
      </button>

      <div className="chatbot-popup">
        {/* Chatbot Header */}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">Ai-agent</h2>
          </div>
          <button
            onClick={() => setShowChatbot((prev) => !prev)}
            type="button"
            className="flex items-center justify-center h-10 w-10 rounded-full"
          >
            <ArrowDown className="h-5 w-5" />
          </button>
        </div>

        {/* Chatbot Body */}
        <div ref={chatBodyRef} className="chat-body">
          <div className="message bot-message ">
            <ChatbotIcon />
            <p className="message-text">
              👋 Välkommen! Behöver du hjälp med att växa eller förbättra din
              verksamhet med expertishjälp inom frontend- eller
              fullstackutveckling?
            </p>
          </div>

          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>

        {/* Chatbot Footer */}
        <div className="chat-footer">
          <ChatForm
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>
    </div>
  );
};
