'use client';

import { useState } from 'react';
import { Send, UserCircle2 } from 'lucide-react';

const messagesMock = [
  { id: 1, sender: 'admin', message: 'Hello! How can I assist you today?' },
  { id: 2, sender: 'user', message: 'I need help with my account.' },
];

export default function ChatWithAdmin() {
  const [messages, setMessages] = useState(messagesMock);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const newMsg = { id: Date.now(), sender: 'user', message: input };
    setMessages([...messages, newMsg]);
    setInput('');
    // Send message to backend via socket or API here
  };

  return (
    <main className="flex flex-col h-[80svh] ">
      {/* Header */}
      <div className="bg-black border-b-4 text-center justify-center text-white px-4 py-3 flex items-center shadow-md">
        <div className="flex items-center gap-2">
          <UserCircle2 className="h-6 w-6 text-yellow-400" />
          <span className="text-lg font-semibold">Chat with Admin</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {messages.map(msg => (
          <div
            key={msg.id}
            className={`max-w-sm px-4 py-2 rounded-lg shadow ${
              msg.sender === 'admin'
                ? 'bg-green-600 self-start'
                : 'bg-blue-500 text-white self-end ml-auto'
            }`}
          >
            {msg.message}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className=" border-t p-4 fixed bottom-14 w-full flex items-center gap-2">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
          className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="bg-yellow-400 hover:bg-yellow-500 text-black rounded-full p-2 transition"
        >
          <Send size={20} />
        </button>
      </div>
    </main>
  );
}
