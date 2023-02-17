// ADD THIS TO ChattyHive.js

import React, { useState } from 'react';
import './ChattyHive.css';

function ChattyHive() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (message.trim()) {
      setMessages([...messages, message]);
      setMessage('');
    }
  };

  return (
    <div className="chatty-hive">
      <h1>ChattyHive</h1>
      <div className="message-input">
        <form onSubmit={handleSubmit}>
          <input type="text" value={message} onChange={handleChange} placeholder="Type your message here" />
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="message-display">
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
    </div>
  );
}

export default ChattyHive;
