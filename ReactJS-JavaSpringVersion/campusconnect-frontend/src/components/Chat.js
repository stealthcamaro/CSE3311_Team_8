import React, { useState, useEffect } from 'react';
import './Chat.css'; // Import your CSS file for styling

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const senderId = 1; // Replace with dynamic senderId based on your app
    const recipientId = 2; // Replace with dynamic recipientId based on your app

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/chat/messages/all`);
            const data = await response.json();
            setMessages(data);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

    const sendMessage = async () => {
        if (message.trim()) {
            const newMessage = {
                senderId: senderId,
                recipientId: recipientId,
                message: message,
                timestamp: new Date().toISOString() // Add timestamp if needed
            };

            try {
                const response = await fetch('http://localhost:8080/api/chat/send', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newMessage),
                });
                if (response.ok) {
                    setMessage('');
                    fetchMessages(); // Refresh the messages after sending
                } else {
                    console.error('Error sending message:', response.statusText);
                }
            } catch (error) {
                console.error('Error sending message:', error);
            }
        }
    };

    return (
        <div className="chat-container">
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.senderId === senderId ? 'sent' : 'received'}`}>
                        <span>{msg.message}</span>
                        <span className="timestamp">{new Date(msg.timestamp).toLocaleString()}</span>
                    </div>
                ))}
            </div>
            <div className="input-container">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chat;
