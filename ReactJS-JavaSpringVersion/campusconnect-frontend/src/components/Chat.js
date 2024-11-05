// Chat.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Chat.css';
import { useUser } from '../UserContext'; // Use the hook instead

function Chat() {
  const { userId } = useUser(); // Get userId from the context
  const [messages, setMessages] = useState([]);

  const fetchUserMessages = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/chat/messages/user/${userId}`);
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchUserMessages();
    }
  }, [userId]);

  return (
    <div className="chat-box">
      <h2>Chat Messages</h2>
      {messages.length > 0 ? (
        messages.map((message) => (
          <div key={message.id} className="chat-message">
            <p><strong>{message.senderName}</strong>: {message.content}</p>
            <p><small>{new Date(message.timestamp).toLocaleString()}</small></p>
          </div>
        ))
      ) : (
        <p>No messages available.</p>
      )}
    </div>
  );
}

export default Chat;
