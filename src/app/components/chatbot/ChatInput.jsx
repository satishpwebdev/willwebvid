"use client"

import { useState } from 'react';
import { Send, Mic, Paperclip } from 'lucide-react';

const ChatInput = ({ onSendMessage, disabled }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-t border-gray-200 p-3 bg-white">
      <div className="flex items-center rounded-full border border-gray-300 bg-white px-3 py-2 focus-within:ring-2 focus-within:ring-willo-primary focus-within:border-transparent">
        <button 
          type="button" 
          className="text-gray-400 hover:text-willo-primary focus:outline-none p-1"
          aria-label="Attach file"
        >
          <Paperclip size={20} />
        </button>
        
        <input
          type="text"
          placeholder={disabled ? "Please select a language first" : "Write a reply..."}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={disabled}
          className="flex-1 border-none focus:outline-none focus:ring-0 px-2 py-1 text-gray-700 placeholder:text-gray-400 disabled:bg-white disabled:text-gray-400"
        />
        
        <div className="flex space-x-1">
          {/* <button 
            type="button" 
            className="text-gray-400 hover:text-willo-primary focus:outline-none p-1"
            aria-label="Voice input"
          >
            <Mic size={20} />
          </button> */}
          
          <button 
            type="submit" 
            disabled={!message.trim() || disabled}
            className={`p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-willo-light ${
              message.trim() && !disabled 
                ? 'text-willo-primary hover:bg-willo-light' 
                : 'text-gray-400'
            }`}
            aria-label="Send message"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </form>
  );
};

export default ChatInput;
