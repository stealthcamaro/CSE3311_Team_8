// import React, { useEffect, useState, useRef } from 'react';
// import { Client } from '@stomp/stompjs';
// import SockJS from 'sockjs-client';

// function Chat() {
//   const [messages, setMessages] = useState([]);
//   const stompClientRef = useRef(null); // Use useRef to store the stompClient

//   useEffect(() => {
//     const socket = new SockJS('http://localhost:8080/ws');
    
//     stompClientRef.current = new Client({
//       webSocketFactory: () => socket,
//       onConnect: (frame) => {
//         console.log('Connected: ' + frame);
//         stompClientRef.current.subscribe('/topic/messages', (message) => {
//           setMessages((prevMessages) => [...prevMessages, message.body]);
//         });
//       },
//       onStompError: (frame) => {
//         console.error('Broker reported error: ' + frame.headers['message']);
//         console.error('Additional details: ' + frame.body);
//       },
//     });

//     stompClientRef.current.activate();

//     // Cleanup on component unmount
//     return () => {
//       if (stompClientRef.current) {
//         stompClientRef.current.deactivate();
//       }
//     };
//   }, []); // Empty dependency array ensures useEffect only runs on mount

//   return (
//     <div>
//       <h2>Chat Messages</h2>
//       <ul>
//         {messages.map((msg, idx) => (
//           <li key={idx}>{msg}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Chat;

import React from 'react';
import './Chat.css';

function Chat() {
  return (
    <div className="chat-window">
      <h2>Chat Conversations</h2>
      <p>Select a conversation or start a new one</p>
      {/* Additional chat functionality here */}
    </div>
  );
}

export default Chat;
