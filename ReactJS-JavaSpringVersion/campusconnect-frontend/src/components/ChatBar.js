import React from 'react';
import './ChatBar.css';

function ChatBar({ toggleChat }) {
  return (
    <div className="chat-bar" onClick={toggleChat}>
      <span>Chat</span>
    </div>
  );
}

export default ChatBar;
