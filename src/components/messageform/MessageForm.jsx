import React, { useState } from 'react';

const MessageForm = ({ onAddMessage }) => {
  const [newMessage, setNewMessage] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMessage({
      ...newMessage,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMessage(newMessage);
    setNewMessage({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Vardas:
          <input
            type="text"
            name="firstName"
            value={newMessage.firstName}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Pavardė:
          <input
            type="text"
            name="lastName"
            value={newMessage.lastName}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          El. paštas:
          <input
            type="email"
            name="email"
            value={newMessage.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Žinutė:
          <textarea
            name="message"
            value={newMessage.message}
            onChange={handleChange}
            required
          ></textarea>
        </label>
      </div>
      <div>
        <button type="submit">Siųsti</button>
      </div>
    </form>
  );
};

export default MessageForm;
