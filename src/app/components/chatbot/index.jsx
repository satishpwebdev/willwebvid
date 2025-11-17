"use client";

import { useState, useRef, useEffect } from "react";
import ChatHeader from "./ChatHeader.jsx";
import ChatMessages from "./ChatMessages.jsx";
import ChatInput from "./ChatInput.jsx";
import Avatar from "./Avatar.jsx";
import LanguageSelector from "./LanguageSelector.jsx";
import { getCurrentTime } from "./utils.js";
import { companyinfo } from "./companyinfo.js";
import { BsChatLeft } from "react-icons/bs";
import { BsChatLeftFill } from "react-icons/bs";
import { url } from "./constant.js";

const WilloChatbot = ({ initialMessages = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    addMessage({
      type: "bot",
      text:
        language === "Hindi"
          ? "आपका स्वागत है! मैं आपकी कैसे मदद कर सकता हूँ?"
          : "Welcome! How can I help you today?",
    });
  };

  const addMessage = (message) => {
    const newMessage = {
      id: Date.now(),
      timestamp: getCurrentTime(),
      ...message,
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleSendMessage = async (text) => {
    if (!text.trim()) return;

    addMessage({
      type: "user",
      text,
    });

    setIsTyping(true);

    try {
      const languageInstruction =
        selectedLanguage === "Hindi"
          ? "हिंदी में जवाब दें। कंपनी की जानकारी का हिंदी में उपयोग करें।"
          : "Respond in English. Use the company information provided.";

      const prompt = `You are a customer support assistant for ${
        companyinfo.companyName
      }.
    ${languageInstruction}
    Always base your responses on this company information:
    ${JSON.stringify(companyinfo, null, 2)}
    
    User's question: ${text}`;

      const response = await fetch(`${url}?key=${process.env.NEXT_PUBLIC_API_KEY}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      });

      const data = await response.json();
      const botResponse =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I couldn't process that.";

      setIsTyping(false);

      addMessage({
        type: "bot",
        text: botResponse,
      });
    } catch (error) {
      console.error("Gemini API Error:", error);
      setIsTyping(false);
      addMessage({
        type: "bot",
        text: "Oops! Something went wrong. Please try again later.",
      });
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={toggleChat}
        className="fixed z-50 bottom-6 right-6 w-14 h-14 rounded-full bg-yellow-500  text-white shadow-lg flex items-center justify-center animate-fade-in transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-willo-light"
        aria-label="Open Chat"
      >
        <BsChatLeftFill className="text-white" size={28} />
      </button>
    );
  }

  return (
    <div
      className="fixed bottom-4 md:bottom-6 mx-auto right-4 md:right-6 w-[90vw] md:w-[380px] h-[80vh] md:h-[430px] bg-white rounded-lg shadow-xl overflow-hidden flex flex-col animate-slide-in z-50"
    >
      <ChatHeader onClose={toggleChat} />

      <div className="flex-1 overflow-y-auto text-black p-4 bg-white scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        {messages.length === 0 && selectedLanguage === null ? (
          <div className="mt-6 mb-4">
            <p className="text-center text-gray-500 text-sm">
              {getCurrentTime()}
            </p>
            <div className="bg-gray-100 rounded-lg p-4 mt-2 max-w-[85%] mx-auto">
              <LanguageSelector onSelect={selectLanguage} />
            </div>
          </div>
        ) : (
          <ChatMessages
            messages={messages}
            isTyping={isTyping}
            messagesEndRef={messagesEndRef}
          />
        )}
      </div>

      <ChatInput
        onSendMessage={handleSendMessage}
        disabled={!selectedLanguage}
      />
    </div>
  );
};

export default WilloChatbot;
